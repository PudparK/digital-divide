import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>latinxwned</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold ">
          <span className="block text-3xl">Welcome to</span>
          <span className="text-blue-400">latinxwned.com</span>
        </h1>

        <p className="mt-3 text-2xl text-gray-500">
          We're building a network to help folx find <span className="md:block">Latinx owned businesses.</span>
        </p>
        <a href="https://mailchi.mp/69ade872cfd3/latinxwned-signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">Stay Tuned</a>
      </main>

      {/*<footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
  </footer> */}
    </div>
  )
}
