import { useState } from 'react';

import '../app.scss';

import { HabitModal } from './HabitEntryModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="home-header">
        <h1>habit.ly</h1>
        <button onClick={() => setIsModalOpen(true)} className="btn-task">
          Add task
        </button>
      </header>

      {isModalOpen && <HabitModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Home;
