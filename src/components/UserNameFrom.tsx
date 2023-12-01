import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  username: string;
};

export function UserNameForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    console.log(data);
    onHandleNext();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <div className="flex gap-1 flex-col">
        <label htmlFor="username">ชื่อผู้ใช้งาน</label>
        <input
          id="username"
          {...register("username")}
          className="border h-11 px-4 rounded-md focus:outline-green-500 "
          required={true}
        />
      </div>
      <div className="flex justify-end">
        <button className="h-11 px-6 inline-block bg-orange-600 font-semibold text-white rounded-md">
          ถัดไป
        </button>
      </div>
    </form>
  );
}
