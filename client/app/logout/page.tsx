"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      await signOut({ callbackUrl: "/" });
      router.push("/");
      toast.success("Logged Out");
    };

    handleSignOut();
  }, []);

  return null;
};

export default Logout;
