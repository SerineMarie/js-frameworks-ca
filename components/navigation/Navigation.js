import Link from "next/link";

export default function Navigation({children}){
    return (
        <>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                <Link href="/login">
                    <a>Log In</a>
                </Link>
            </nav>
            <div className="container">{children}</div>
        </>
    );
}