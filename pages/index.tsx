import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Swatantra Mitra | Software Engineer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Swatantra Mitra | Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Swatantra Mitra | Software Engineer"
        />
        <meta
          name="description"
          content="Hey! I'm Swatantra Mitra, and I'm a Bachelor of Technology in Electronics and Communication Engineering graduate."
        />

        <meta
          property="og:title"
          content="Swatantra Mitra | Software Engineer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta
          name="description"
          content="Hey! I'm Swatantra Mitra, and I'm a Bachelor of Technology in Electronics and Communication Engineering graduate."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@swagy_devz" />
        <meta
          name="twitter:title"
          content="Swatantra Mitra | Software Engineer"
        />
        <meta property="og:image" content="" />
        <meta
          name="description"
          content="Hey! I'm Swatantra Mitra, and I'm a Bachelor of Technology in Electronics and Communication Engineering graduate."
        />
        <meta name="twitter:creator" content="@swagy_devz" />
        {/* <meta name="twitter:image" content=""/> */}

        {/* <meta itemprop="name" content="Swatantra Mitra | Software Engineer""/>
        <meta itemprop="description" content="Hey! I'm Swatantra Mitra, and nd I'm a Bachelor of Technology in Electronics and Communication Engineering graduate."/>
        <meta itemprop="image" content=""/> */}
      </Head>
      <Home />
    </>
  );
}
