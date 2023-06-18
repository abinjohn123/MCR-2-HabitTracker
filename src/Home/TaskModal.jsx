import { useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { useAppContext } from '../AppContext';
import './modal.scss';

export const TaskModal = ({ setIsModalOpen, currentHabit = null }) => {
  const { setHabits } = useAppContext();
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const taskData = { isArchive: false };
    for (const entry of formData.entries()) taskData[entry[0]] = entry[1];

    if (currentHabit) {
      setHabits((habits) =>
        habits.map((habit) =>
          habit.id === currentHabit.id ? { ...currentHabit, taskData } : habit
        )
      );
    } else {
      taskData.id = uuid();
      setHabits((habits) => [...habits, taskData]);
    }
  };

  useEffect(() => nameInputRef.current.focus(), []);
  return (
    <div className="task-modal">
      <div className="header">
        <h2 className="modal-title">
          {currentHabit ? 'Edit habit' : 'Add new habit'}
        </h2>
        <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form className="habit-form" onSubmit={handleSubmit} ref={formRef}>
        <label className="full-w">
          <span className="label-text">Name</span>
          <input
            className="form-input"
            name="name"
            required
            ref={nameInputRef}
          />
        </label>
        <label>
          <span className="label-text">Repeat</span>
          <select className="form-input" name="repeat" required>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
        <label>
          <span className="label-text">Goal</span>
          <select className="form-input" name="goal" required>
            <option value="once">1 time</option>
            <option value="twice">2 times</option>
            <option value="thrice">3 times</option>
          </select>
        </label>
        <label>
          <span className="label-text">Time of day</span>
          <select className="form-input" name="time_of_day" required>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </label>
        <label>
          <span className="label-text">Start date</span>
          <select className="form-input" name="start_date" required>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="day_after">Day after</option>
          </select>
        </label>
        <div className="full-w btn-row">
          <button
            type="button"
            className="modal-btn --discard"
            onClick={() => setIsModalOpen(false)}
          >
            Discard
          </button>
          <button type="submit" className="modal-btn --submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
