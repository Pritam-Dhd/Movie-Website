import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "trending/all/day";
  console.log(gen)
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }

  const results = data.results;

  return (
    <>
      <div>
        <Result results={results} />
      </div>
    </>
  );
}
