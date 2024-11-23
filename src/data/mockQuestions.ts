import { Question } from '../types';

export const MOCK_QUESTIONS: Question[] = [
  {
    id: '1',
    title: 'How to center a div in CSS?',
    body: 'I am trying to center a div both horizontally and vertically. I\'ve tried using margin: auto but it only works horizontally. What\'s the best approach in modern CSS?',
    votes: 324,
    tags: ['css', 'html', 'flexbox'],
    author: 'johndoe',
    createdAt: new Date('2024-03-15'),
    views: 1542,
    answers: [
      {
        id: 'a1',
        body: 'Use flexbox:\n\n```css\n.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```',
        votes: 567,
        author: 'cssmaster',
        createdAt: new Date('2024-03-15'),
        isAccepted: true
      }
    ]
  },
  {
    id: '2',
    title: 'Understanding async/await in JavaScript',
    body: 'I am having trouble understanding how async/await works in JavaScript. Can someone explain the difference between Promises and async/await?',
    votes: 256,
    tags: ['javascript', 'async-await', 'promises'],
    author: 'janedoe',
    createdAt: new Date('2024-03-14'),
    views: 982,
    answers: []
  },
  {
    id: '3',
    title: 'Best practices for React hooks',
    body: 'What are the current best practices for using React hooks? Specifically interested in useEffect and handling dependencies.',
    votes: 189,
    tags: ['reactjs', 'hooks', 'javascript'],
    author: 'reactdev',
    createdAt: new Date('2024-03-13'),
    views: 743,
    answers: [
      {
        id: 'a2',
        body: 'Always include all dependencies in the useEffect dependency array...',
        votes: 234,
        author: 'hookmaster',
        createdAt: new Date('2024-03-14'),
        isAccepted: true
      }
    ]
  },
  {
    id: '4',
    title: 'Docker container not starting on M1 Mac',
    body: 'Getting platform compatibility issues when trying to run Docker containers on my M1 MacBook Pro...',
    votes: 42,
    tags: ['docker', 'macos', 'm1'],
    author: 'dockeruser',
    createdAt: new Date('2024-03-12'),
    views: 312,
    answers: []
  },
  {
    id: '5',
    title: 'TypeScript type inference with generic functions',
    body: 'How can I properly type a generic function that maintains type inference through its return value?',
    votes: 156,
    tags: ['typescript', 'generics'],
    author: 'tsdev',
    createdAt: new Date('2024-03-11'),
    views: 567,
    answers: []
  }
];