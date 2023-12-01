import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

type TFormValues = {
    username: string;
  password: string;
};

export function LoginForm() {
  const { register, handleSubmit } = useForm<TFormValues>();
  const [loginStatus, setLoginStatus] = useState("");

  const onHandleFormSubmit = (data: TFormValues) => {
    if (data.username === "admin" && data.password === "admin1234") {
      setLoginStatus("success");
    } else {
      setLoginStatus("fail");
    }
  };

  const Success = () => <div>✅ Login Successful</div>;
  const Wrong = () => <div>🔴 Login Failed</div>;
  const LoginScreen = () => <div>    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
<div className="flex gap-1 flex-col">
<label htmlFor="username">ชื่อผู้ใช้งาน</label>
  <input
    autoFocus
    id="username"
    {...register("username")}
    className="border h-11 px-4 rounded-md focus:outline-green-500 "
    type="text"
    required={true}
  />
  <label htmlFor="password">รหัสผ่าน</label>
  <input
    id="password"
    {...register("password")}
    className="border h-11 px-4 rounded-md focus:outline-green-500 "
    type="password"
    required={true}
  />
</div>
<div className="flex gap-4 justify-end">
  <button className="h-11 px-6 inline-block bg-orange-600 font-semibold text-white rounded-md">
    เข้าสู่ระบบ
  </button>
  <Link href="/register">สมัครสมาชิก</Link>
</div>
</form></div>;

  if (loginStatus === "success") {
    return <Success />;
  }

  if (loginStatus === "fail") {
    return <><Wrong /><LoginScreen/></>;
  }

  return (<LoginScreen/>);
}
