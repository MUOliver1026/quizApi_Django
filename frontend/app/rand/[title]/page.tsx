'use client'

import React from 'react';
import RandomQuiz from "@/components/RandomQuiz";

const QuizPage: React.FC = () => {
    return (
        <main className="text-3xl mt-24">
            <p className="flex justify-center items-center">
                <RandomQuiz />
            </p>
        </main>
    );
};

export default QuizPage;
