import Link from 'next/link';

export default function Home() {
    return (
        <main className="hero min-h-screen flex flex-col justify-center items-center bg-[url('/banner.jpg')] bg-cover">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold tracking-wide font-serif">Quiz</h1>
                </div>
            </div>
        </main>
    )
}
