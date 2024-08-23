import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.png"
              width={40}
              height={40}
              alt="logo"
              style={{ height: "auto", width: "auto" }}
            />
            <p className="ml-1">{APP_NAME}</p>
          </Link>
        </div>

        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>

          <Button asChild>
            <Link href="/signin">
              <UserIcon />
              Sign-in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
