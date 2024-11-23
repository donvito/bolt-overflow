import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { MOCK_QUESTIONS } from '../data/mockQuestions';

export default function QuestionList() {
  return (
    <div className="border-t border-gray-200">
      {MOCK_QUESTIONS.map((question) => (
        <div key={question.id} className="flex gap-4 py-4 border-b border-gray-200">
          <div className="flex flex-col items-end gap-1 text-[13px] text-gray-600 min-w-[108px]">
            <div className="text-center">
              <span className="font-medium">{question.votes}</span>
              <span className="block text-[12px]">votes</span>
            </div>
            <div className="text-center">
              <span className={`font-medium ${question.answers.length > 0 ? 'text-green-600' : ''}`}>
                {question.answers.length}
              </span>
              <span className="block text-[12px]">answers</span>
            </div>
            <div className="text-center">
              <span className="font-medium">{question.views}</span>
              <span className="block text-[12px]">views</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-[17px] text-[#0074cc] hover:text-[#0a95ff]">
              <Link to={`/questions/${question.id}`}>{question.title}</Link>
            </h2>
            <p className="mt-1 text-[13px] text-gray-600 line-clamp-2">{question.body}</p>
            
            <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-1">
                {question.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tags/${tag}`}
                    className="px-1.5 py-1 text-[12px] text-[#2c5877] bg-[#e1ecf4] hover:bg-[#d0e3f1] rounded-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              <div className="text-[12px] text-gray-600">
                <Link to={`/users/${question.author}`} className="text-[#0074cc] hover:text-[#0a95ff]">
                  {question.author}
                </Link>
                <span className="mx-1">asked</span>
                {formatDistanceToNow(question.createdAt)} ago
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}