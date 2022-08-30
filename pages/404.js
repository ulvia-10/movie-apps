import Image from "next/dist/client/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  
  useEffect(() => {
    const limitTime = setTimeout(() => {
      router.push("/Home");
    }, 2000);
    return () => clearTimeout(limitTime);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col">
        <Image
          src={"/404Blue.png"}
          width={700}
          height={500}
          className="bg-cover"
        />
        <div className="flex gap-3">
          <h1 className="font-extrabold text-indigo-900 text-3xl">Ooops! </h1>
          <h1 className="font-extrabold text-3xl text-pink-700">
            Page Not Found!
          </h1>
        </div>
        <Link href={"/Home"}>
          <button className="mt-8 bg-indigo-500 px-6 py-2 rounded-md font-bold text-white cursor-pointer active:scale-95">
            Go back to Home!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
