import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import ConnectApi from "@/api/ConnectApi";

const RandomQuiz = () => {
    const pathname = usePathname();
    const quizTitle = pathname.split('/').pop() || '';
    const API_URL = 'https://oliverwu.pythonanywhere.com/quiz/r/' + quizTitle;
    const [dataState] = ConnectApi(API_URL);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!dataState || !dataState.data || !dataState.data[0]) return null;
    const quizData = dataState.data[0];

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const handleCheckboxChange = (id) => {
        if (selectedAnswers.includes(id)) {
            setSelectedAnswers(prev => prev.filter(item => item !== id));
        } else {
            setSelectedAnswers(prev => [...prev, id]);
        }
    };

    const determineColor = (isRight, id) => {
        if (!isSubmitted) return '';
        if (isRight) {
            return selectedAnswers.includes(id) ? 'text-green-500' : 'text-red-500';
        } else {
            return selectedAnswers.includes(id) ? 'text-red-500' : '';
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Quiz: {quizTitle}</h1>
            <form onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div className="border p-4 rounded">
                    <h2 className="text-2xl mb-2">{quizData.title}</h2>
                    {quizData.answer.map((ans) => (
                        <div key={ans.id} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id={`answer-${ans.id}`}  // Provide a unique id for each checkbox
                                className="mr-2"
                                onChange={() => handleCheckboxChange(ans.id)}
                                disabled={isSubmitted}
                            />
                            <label htmlFor={`answer-${ans.id}`} className={determineColor(ans.is_right, ans.id)}>
                                {ans.answer_text}
                            </label>
                        </div>
                    ))}
                </div>
                {!isSubmitted && (
                    <button className="mt-4 bg-blue-500 text-white p-2 rounded" type="submit">
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default RandomQuiz;
