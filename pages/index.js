import Head from 'next/head'

const airtableEndpoint = "https://api.airtable.com/v0/appEjxpGdZbpP6fx4/data?fields%5B%5D=NAME&fields%5B%5D=GEO_ID&fields%5B%5D=S2801_C01_012E&fields%5B%5D=S2801_C01_013E&fields%5B%5D=S2801_C01_014E&fields%5B%5D=S2801_C01_015E&fields%5B%5D=S2801_C01_016E&fields%5B%5D=S2801_C01_017E&fields%5B%5D=S2801_C01_018E&fields%5B%5D=S2801_C01_019E&api_key=keyX37wBdUbWRwfzL"

export default function Home({data}) {
  console.log('data:', data)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Digital Divide</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center p-4">
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(airtableEndpoint)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}