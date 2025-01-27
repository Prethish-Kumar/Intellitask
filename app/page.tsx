import { api } from "@/convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landing
      <SignInButton />
    </main>
  );
}
