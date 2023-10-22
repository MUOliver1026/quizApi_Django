import Link from 'next/link';
import QuizSelect from "@/components/QuizSelect";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full px-24">
                <h1 className="mb-5 text-6xl font-bold tracking-wide font-serif flex items-center justify-center">Quiz</h1>
                <QuizSelect />
            </div>
        </main>
    )
}
