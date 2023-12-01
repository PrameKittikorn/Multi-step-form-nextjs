import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  email: string;
  tel: string;
  address: string;
};

export function EmailForm() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
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
      className="flex gap-1 flex-col"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <label htmlFor="email">อีเมล</label>
      <input
        autoFocus
        id="email"
        {...register("email")}
        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
        required={true}
      />
      <label htmlFor="tel">เบอร์ติดต่อ</label>
      <input
        autoFocus
        id="tel"
        {...register("tel")}
        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
        required={true}
      />
      <label htmlFor="address">ที่อยู่ของคุณ</label>
      <input
        autoFocus
        id="address"
        {...register("address")}
        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
        required={true}
      />
      <div className="flex gap-4 justify-end mt-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="h-11 px-6 outline outline-offset-2 rounded-md"
        >
          ย้อนกลับ
        </button>
        <button className="h-11 px-6 inline-block bg-orange-600 font-semibold text-white rounded-md">
          ถัดไป
        </button>
      </div>
    </form>
  );
}
