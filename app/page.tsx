import Image from "next/image";
  import Link from "next/link";


export default function Home() {
  
  return  (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to Our App</h1>
      <p className="mb-6">Sign up to get started with all the features.</p>
      <Link href="/signUp">
        <div className="py-2 px-4 bg-red-900 text-white font-semibold rounded hover:bg-red-700 focus:outline-none">
          Go to Sign Up
        </div>
      </Link>
    </div>
  </div>
   
   );
}
