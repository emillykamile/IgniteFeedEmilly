import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/emillykamile.png',
      name: 'Emilly Kamile',
      role: 'COO | @BWE - Business Woman Empire'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Esse é um projeto desenvolvido com o intuito de praticar o que aprendi na trilha React - Fundamentos, da Rocketseat. 🚀' },
      { type: 'link', content: '' },
    ],
    publishedAt: new Date('2022-12-08 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/elainemanoelle.png',
      name: 'Elaine Manoelle',
      role: 'CEO | @BWE - Business Woman Empire'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Eu sou a Elaine, desenvolvedora web. 🚀' },
      { type: 'link', content: 'github.com/elainemanoelle' },
    ],
    publishedAt: new Date('2022-11-09 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
