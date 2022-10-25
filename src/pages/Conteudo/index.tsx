import axios from 'axios';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { IPost } from '../../types';
import { FaSpinner } from 'react-icons/fa';
import Post from './Post';

export default function Conteudo() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://mockend.com/mockend/demo/posts?limit=10&skip=20')
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2>Nossos conteúdos</h2>
      <div>
        <ul>
          {
            posts.map((item, index) => (
              <Post key={index} post={item} />
            ))
          }
        </ul>
      </div>
      <div className={classNames({
        'd-none': !loading
      })}>
        <FaSpinner />
      </div>
      <div>
        <button onClick={() => {setLoading(true)}} className='btn btn-success'>Carregar mais itens</button>
      </div>      
    </>
  )
}