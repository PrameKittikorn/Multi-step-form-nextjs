"use client";
import { EmailForm } from "~/components/EmailForm";
import { useFormState } from "~/components/FormContext";
import { PasswordForm } from "~/components/PasswordForm";
import { UserNameForm } from "~/components/UserNameFrom";
import Link from "next/link";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <UserNameForm />;
    case 2:
      return <EmailForm />;
    case 3:
      return <PasswordForm />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-full max-w-2xl  border  rounded-xl bg-white">
        <h1 className="text-center text-2xl font-semibold py-4">
         🧔🏻‍♂️ สมัครสมาชิก - Registration Form
        </h1>
        <p className="text-center">เป็นสมาชิกอยู่แล้ว  <Link href="/login"> คลิกเพื่อเข้าสู่ระบบ</Link></p>
        <div className="space-y-6">
          <ActiveStepFormComponent />
        </div>
      </div>
    </main>
  );
}
