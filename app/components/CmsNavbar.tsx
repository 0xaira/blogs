import Link from "next/link";
import { Montserrat } from "next/font/google";
import { BackArrowIcon } from "./Icons";

const font = Montserrat({ weight: "700", subsets: ["latin"] });

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>

      <div className={`${font.className} text-3xl dark:text-amber-50 font-bold`}>
        Aira
        <span className="text-purple-500">Jena</span>
      </div>
    </div>
  );
};

export default CmsNavbar;
