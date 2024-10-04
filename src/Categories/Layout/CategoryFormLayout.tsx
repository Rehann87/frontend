import { ErrorMessage, FormikProps } from "formik";
import ATMTextField from "../../Components/Atoms/ATM/ATMTextfield";
import { CategoryFormValue } from "../Add/AddCategoryWrapper";

type FormikProps = {
    values: {
        categoryName: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSubmitting: boolean;
}
type Props = {
    formikProps: FormikProps<CategoryFormValue>;
    heading: string;
    buttonName: string;
};

const CategoryFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, isSubmitting } = formikProps; 
    


    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className="w-full max-w-md p-6 bg-slate-600 text-gray-400 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

               
                <div className="mb-4">
                    <ATMTextField
                        label="Category Name"
                        name="categoryName"
                        placeholder="Enter your category"
                        value={values.categoryName}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='categoryName' /></p>

                </div>

                <div>
                    <button
                        type="submit"
                        className="border rounded bg-blue-600 w-full h-12 p-2 font-light text-xl text-white"
                        disabled={isSubmitting}
                    >
                        {buttonName}
                    </button>
                </div>

            </div>
        </div>
    );
};
export default CategoryFormLayout