import Image from "next/image";
import perfil from "../public/assets/perfil.png";
import verify from "../public/assets/verify.png";
import twitch from "../public/assets/twitch.png";
import twitter from "../public/assets/twitter.png";
import youtube from "../public/assets/youtube.png";
import instagram from "../public/assets/instagram.png";
import facebook from "../public/assets/facebook.png";
export default function Home() {
  return (
    <main className="bg-[#E7E7E7] flex flex-grow w-full justify-center items-center p-20  ">
      <div className="">
        <div className="justify-center  items-center">
          <Image
            src={perfil}
            alt="perfil"
            className="w-[124px] h-[124px] justify-between items-center ml-7"
          />

          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg p-2">Matheus Alexandre</h1>{" "}
            <Image src={verify} alt="perfil" className="w-[16px] h-[16px]" />
          </div>
          <h2 className="font-thin text-center">@sr_ma_alexandre</h2>
        </div>
        <div className="flex flex-col mt-7  justify-center items-center">
          <h1 className="font-bold text-lg">Minhas Redes</h1>
          <div className="flex flex-col gap-3 w-full mt-3">
            <button className="border border-zinc-800 rounded-full p-1  flex gap-3 justify-center items-center ">
              <a
                href="https://www.youtube.com/channel/UCouir8xl16yzQ8wXow_hEDw"
                className="flex justify-center items-center gap-2"
              >
                <Image src={youtube} alt="" className="w-[48px] h-[48px] " />{" "}
                Youtube
              </a>
            </button>
            <button className="border border-zinc-800 rounded-full p-1  flex gap-3 justify-center items-center ">
              <a
                href="https://www.twitch.tv/lozeerxd"
                className="flex justify-center items-center gap-2"
              >
                <Image src={twitch} alt="" className="w-[48px] h-[48px]" />{" "}
                Twitch
              </a>
            </button>
            <button className="border border-zinc-800 rounded-full p-1  flex gap-3 justify-center items-center ">
              <a
                href="https://twitter.com/Sr_Matheus_A"
                className="flex justify-center items-center gap-2"
              >
                <Image src={twitter} alt="" className="w-[48px] h-[48px]" />{" "}
                Twitter
              </a>
            </button>
            <button className="border border-zinc-800 rounded-full p-1  flex gap-3 justify-center items-center ">
              <a
                href="https://www.instagram.com/sr_ma_alexandre/"
                className="flex justify-center items-center gap-2"
              >
                <Image src={instagram} alt="" className="w-[48px] h-[48px]" />{" "}
                Instagram
              </a>
            </button>
            <button className="border border-zinc-800 rounded-full p-1  flex gap-3 justify-center items-center ">
              <a
                href="https://www.facebook.com/profile.php?id=61550196061252"
                className="flex justify-center items-center gap-2"
              >
                <Image src={facebook} alt="" className="w-[48px] h-[48px]" />{" "}
                Facebook
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
