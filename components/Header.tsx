import Link from "next/link";


const Header = () => {
    return (
      <header>
          <div className="bg-black text-yellow-50 ">
              <ul className="flex space-x-5">
                  <li>
                      <Link href="/" className="text-white text-lg">Home</Link>
                  </li>
                  <li>
                      <Link href="/about" className="text-white text-lg" >About</Link>
                  </li>
                  <li>
                      <Link href="/contact" className="text-white text-lg">Contact</Link>
                  </li>
                  <li>
                      <Link href="/skills" className="text-white text-lg">Skills</Link>
                  </li>
                  <li>
                  <Link href="/portfolio" className="text-white text-lg">Portfolio</Link>
                  </li>
              </ul>
          </div>
      </header>
    )
  }
  
  export default Header;