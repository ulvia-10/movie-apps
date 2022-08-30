import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";
import { server } from "../config";
import TrendingMovie from "../components/TrendingMovie";

export default function Home(props) {
    const {trendingMovies} = props;
  return (
    <div className="flex flex-col">
      <div className="w-60 mx-auto mt-20 flex flex-col">
        <Image
          className="mt-[20%]"
          src={"/netfly.png"}
          width={600}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-center font-bold text-xl">Hello </span>
        <h1 className="text-black font-bold text-center">
          Welcome To WATCHING ME!
        </h1>
        <p className="text-center font-bold">
          Produce Film,Theater, Television and GAME
        </p>
        <Link href="/Contact">
          <button className="bg-gradient-to-r from-slate-900 to-slate-800 w-fit px-4 flex m-auto rounded-md text-white font-bold px-7 py-2 mt-4 cursor-pointer active:scale-90 hover:bg-slate-100">
            CONTACT US
          </button>
        </Link>
      </div>
      <TrendingMovie trendingMovies={trendingMovies.results}/>
    </div>
  );
}

export async function getStaticProps() {
    const response = await axios.get(`${server}now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    console.log(response, 'ini res');
    const trendingMovies = response.data
    return {
      props: {
        trendingMovies
      }
    }
  }

