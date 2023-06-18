import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import { useAppContext } from '../AppContext';
import '../app.scss';

import { HabitModal } from './HabitEntryModal';
import { HabitCard } from './HabitCard';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentHabit = useRef(null);
  const navigate = useNavigate();
  const { habits } = useAppContext();

  const handleNewHabit = () => {
    currentHabit.current = null;
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="home-header">
        <h1>habit.ly</h1>
        <div className="flex-container">
          <button
            onClick={() => navigate('/archive')}
            className="btn btn-archive"
          >
            View archives
          </button>
          <button onClick={handleNewHabit} className="btn btn-task">
            Add task
          </button>
        </div>
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
