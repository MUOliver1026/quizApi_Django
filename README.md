# quizApi_Django
A simple API which serves quiz content, evaluates answers provided for the quiz questions, and then serves the results.

## Mock data
```json
[
    {
        "id": 1,
        "title": "Lesson 1: Valid Lesson",
        "questions": [
            {
                "title": "Lorem ipsum dolor sit amet?",
                "answers": [
                    {
                        "id": 1,
                        "answer_text": "Consectetur adipiscing elit.",
                        "is_right": true
                    },
                    {
                        "id": 2,
                        "answer_text": "Sed do eiusmod tempor.",
                        "is_right": false
                    }
                ]
            },
            {
                "title": "Ut enim ad minim veniam?",
                "answers": [
                    {
                        "id": 3,
                        "answer_text": "Quis nostrud exercitation.",
                        "is_right": false
                    },
                    {
                        "id": 4,
                        "answer_text": "Duis aute irure dolor.",
                        "is_right": true
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Lesson 2: Invalid Lesson",
        "questions": [
            {
                "title": "Excepteur sint occaecat?",
                "answers": [
                    {
                        "id": 5,
                        "answer_text": "Cupidatat non proident.",
                        "is_right": false
                    },
                    {
                        "id": 6,
                        "answer_text": "Sunt in culpa.",
                        "is_right": false
                    }
                ]
            },
            {
                "title": "Deserunt mollit anim id?",
                "answers": [
                    {
                        "id": 7,
                        "answer_text": "Laborum est reprehenderit.",
                        "is_right": true
                    },
                    {
                        "id": 8,
                        "answer_text": "Sint proident fugiat.",
                        "is_right": false
                    }
                ]
            }
        ]
    }
]

```
