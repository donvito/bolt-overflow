import React from 'react';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ArrowUp, ArrowDown, Check } from 'lucide-react';
import { MOCK_QUESTIONS } from '../data/mockQuestions';

export default function QuestionDetail() {
  const { id } = useParams();
  const question = MOCK_QUESTIONS.find(q => q.id === id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      
      <div className="flex gap-4 pb-4 border-b border-gray-200">
        <div className="flex flex-col items-center gap-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowUp className="w-8 h-8" />
          </button>
          <span className="text-xl font-bold">{question.votes}</span>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
        
        <div className="flex-1">
          <div className="prose max-w-none">{question.body}</div>
          
          <div className="mt-4 flex flex-wrap gap-1">
            {question.tags.map((tag) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="px-1.5 py-1 text-[12px] text-[#2c5877] bg-[#e1ecf4] hover:bg-[#d0e3f1] rounded-sm"
              >
                {tag}
              </a>
            ))}
          </div>
          
          <div className="mt-4 flex justify-end text-[12px] text-gray-600">
            <div className="bg-[#f8f9f9] px-2 py-1 rounded">
              asked {formatDistanceToNow(question.createdAt)} ago by{' '}
              <a href={`/users/${question.author}`} className="text-[#0074cc] hover:text-[#0a95ff]">
                {question.author}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">
          {question.answers.length} {question.answers.length === 1 ? 'Answer' : 'Answers'}
        </h2>
        
        {question.answers.map((answer) => (
          <div key={answer.id} className="flex gap-4 py-4 border-b border-gray-200">
            <div className="flex flex-col items-center gap-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <ArrowUp className="w-8 h-8" />
              </button>
              <span className="text-xl font-bold">{answer.votes}</span>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <ArrowDown className="w-8 h-8" />
              </button>
              {answer.isAccepted && (
                <div className="p-2 text-green-600 bg-green-50 rounded-full">
                  <Check className="w-8 h-8" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="prose max-w-none">{answer.body}</div>
              
              <div className="mt-4 flex justify-end text-[12px] text-gray-600">
                <div className="bg-[#f8f9f9] px-2 py-1 rounded">
                  answered {formatDistanceToNow(answer.createdAt)} ago by{' '}
                  <a href={`/users/${answer.author}`} className="text-[#0074cc] hover:text-[#0a95ff]">
                    {answer.author}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}