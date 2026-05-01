// import Image from "next/image";
// import Link from "next/link";

// // src/components/Footer.tsx
// const Footer = () => {
//   return (
//     <footer className="bg-[#111827] text-gray-300 py-6 text-center">
//       <div className="flex justify-center gap-6 mb-4">
//         <Link href="https://github.com/taimoor-hassan01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 hover:opacity-80 transition-opacity">
//           <Image src="/github.png" alt="GitHub" className="w-full h-full" width={40} height={40}/>
//         </Link>
//         <Link href="https://www.linkedin.com/in/dosto-ki-dunya-taimoor-207568317/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 hover:opacity-80 transition-opacity">
//           <Image src="/linkedin.png" alt="LinkedIn" className="w-full h-full" width={40} height={40}/>
//         </Link>
//         <Link href="https://www.facebook.com/taimoor.samiullahjan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 hover:opacity-80 transition-opacity">
//           <Image src="/facebook.png" alt="Facebook" className="w-full h-full" width={40} height={40}/>
//         {/* <Link href="https://github.com/taimoor-hassan01" target="_blank" rel="noopener noreferrer" className="w-10 h-10"> */}
//           <Image src="/github.png" alt="GitHub" className="w-full h-full" width={300} height={300}/>
//         </Link>
//         {/* <Link href="https://www.linkedin.com/in/dosto-ki-dunya-taimoor-207568317/" target="_blank" rel="noopener noreferrer" className="w-10 h-10"> */}
//           <Image src="/linkedin.png" alt="LinkedIn" className="w-full h-full" width={300} height={300}/>
//         </Link>
//         // <Link href="https://www.facebook.com/taimoor.samiullahjan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
//           <Image src="/facebook.png" alt="Facebook" className="w-full h-full" width={300} height={300}/>
//         </Link>
//       </div>
//       <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Taimoor Hassan. All Rights Reserved.</div>
//     </footer>
//   );
// };

// export default Footer;







import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">

        <Link href="https://github.com/taimoor-hassan01" target="_blank">
          <Image src="/github.png" alt="GitHub" width={40} height={40} />
        </Link>

        <Link href="https://www.linkedin.com" target="_blank">
          <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
        </Link>

        <Link href="https://www.facebook.com" target="_blank">
          <Image src="/facebook.png" alt="Facebook" width={40} height={40} />
        </Link>

      </div>

      <div className="text-sm text-gray-500">
        © {new Date().getFullYear()} Taimoor Hassan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;