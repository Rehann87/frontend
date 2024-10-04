

import { useNavigate, useParams } from "react-router-dom";
import { useEditCategoryMutation, useGetSingleCategoryQuery } from "../../Slice/CategoriesSlice";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import CategoryFormLayout from "../Layout/CategoryFormLayout";

export type CategoryFormValue = {
    categoryname: string | null;
};

const EditCategoryWrapper = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("Token")
    const [editCategory] = useEditCategoryMutation()
    const {id} = useParams()
    const {data} = useGetSingleCategoryQuery({token, id})

    const initialValues = {
        categoryname: data?.data?.categoryname 
    }
    const categoryValidation = object({
        categoryname: string().required('Name is required'),
    });

    const handleSubmit = (values: CategoryFormValue) => {
        editCategory({categoryData: values, id, token})
        .then((res: any)=> {
           if(res.data.msg){
            toast.success("Category edited successfully")
           }
           navigate("/layout/category-list")
        }).catch((err)=> {
            toast.error(err)
        })

    };

    return (
        <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={categoryValidation} 
        onSubmit={handleSubmit}
        >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < CategoryFormLayout heading={"Edit Category"} buttonName="Edit" formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default EditCategoryWrapper

