'use client'

import ConnectApi from "@/api/ConnectApi";
import Link from "next/link";

// Define a basic type for quiz
type Quiz = {
    id: number;
    title: string;
};

const API_URL = "https://oliverwu.pythonanywhere.com/quiz/";

const QuizSelect = () => {
    const [dataState] = ConnectApi(API_URL);

    // If you need to log for debugging purposes, add a descriptive message
    console.log("Quiz Data:", dataState);

    return(
        <div className="grid grid-cols-3 gap-4">
            {dataState.data && dataState.data.map((quiz: Quiz) => (
                <div key={quiz.id} className="card bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title text-3xl">{quiz.title}</h2>
                        <h3 className="text-2xl">Random Quiz</h3>
                        <div className="card-actions justify-center">
                            <Link href={`/rand/${encodeURIComponent(quiz.title)}/`}>
                                <button className="btn btn-primary">Start Quiz</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default QuizSelect;
