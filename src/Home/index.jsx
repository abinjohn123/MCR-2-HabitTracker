import { useState } from 'react';
import { useAppContext } from '../AppContext';

import '../app.scss';

import { TaskModal } from './TaskModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { habits } = useAppContext();

  return (
    <>
      <header className="home-header">
        <h1>habit.ly</h1>
        <button onClick={() => setIsModalOpen(true)} className="btn-task">
          Add task
        </button>
      </header>

      {isModalOpen && <TaskModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Home;
