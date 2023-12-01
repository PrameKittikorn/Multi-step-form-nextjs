"use client";
import { LoginForm } from "~/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-full max-w-2xl  border  rounded-xl bg-white">
        <h1 className="text-center text-2xl font-semibold py-4">
         🧔🏻‍♂️ เข้าสู่ระบบ
        </h1>
        <div className="space-y-6">
          <LoginForm/>
        </div>
      </div>
    </main>
  );
}
