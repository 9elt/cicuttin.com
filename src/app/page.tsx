import Image from "next/image";
import { Reveal } from "./reveal";

export default function Home() {
  return (
    <>
      <div className="profile">
        <Image
          src="/profile-pic.jpg"
          alt="Lorenzo Cicuttin"
          width={160}
          height={160}
          priority
        />
        <div>
          <h1>Lorenzo Cicuttin</h1>
          <p>
            Senior Software Developer{" "}
            <a href="https://nearform.com">@nearform</a>
          </p>
        </div>
      </div>
      <h2>Contact</h2>
      <p>
        email:{" "}
        <Reveal
          value="lnb/mh`lfA88n{odsnm/ohuutbhb"
          seed={1}
          mailto
        />
      </p>
      <nav>
        <a href="https://github.com/9elt">
          [ github<span data-nosnippet> ↬</span> ]
        </a>
        <a href="https://linkedin.com/in/lorenzo-cicuttin-15b280324">
          [ linkedin<span data-nosnippet> ↬</span> ]
        </a>
      </nav>
      <p>
        <Reveal
          value={'$"!"&&!+#!"'}
          seed={18}
          className="dim"
        />
      </p>
    </>
  );
}
