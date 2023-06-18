import { useState, useRef } from 'react';

import { useAppContext } from '../AppContext';
import '../app.scss';

import { HabitModal } from './HabitEntryModal';
import { HabitCard } from './HabitCard';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentHabit = useRef(null);
  const { habits } = useAppContext();

  const handleNewHabit = () => {
    currentHabit.current = null;
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="home-header">
        <h1>habit.ly</h1>
        <button onClick={handleNewHabit} className="btn-task">
          Add task
        </button>
      </header>
      <div className="habits-container">
        {habits.filter((habit) => !habit.isArchive).length > 0 &&
          habits
            .filter((habit) => !habit.isArchive)
            .map((habit) => (
              <HabitCard
                habit={habit}
                key={habit.id}
                setIsModalOpen={setIsModalOpen}
                currentHabit={currentHabit}
              />
            ))}
      </div>

      {isModalOpen && (
        <HabitModal
          setIsModalOpen={setIsModalOpen}
          currentHabit={currentHabit.current}
        />
      )}
    </>
  );
};

export default Home;
