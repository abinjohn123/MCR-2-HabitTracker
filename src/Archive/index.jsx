import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import { useAppContext } from '../AppContext';
import { HabitCard } from '../Home/HabitCard';
import { HabitModal } from '../Home/HabitEntryModal';
import '../app.scss';

const Archive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentHabit = useRef(null);

  const { habits } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <header className="home-header">
        <div className="flex-container">
          <div className="back-btn" onClick={() => navigate('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="back-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <h1>Archive</h1>
        </div>
      </header>
      <div className="habits-container">
        {habits.filter((habit) => habit.isArchive).length > 0 &&
          habits
            .filter((habit) => habit.isArchive)
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

export default Archive;
