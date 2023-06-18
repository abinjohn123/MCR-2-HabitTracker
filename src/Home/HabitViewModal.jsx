import './modal.scss';

export const HabitViewModal = ({ setIsModalOpen, habit }) => {
  return (
    <div className="task-modal">
      <div className="header">
        <h2 className="modal-title">Habit view</h2>
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
      <div className="habit-form">
        <div className="full-w view-form">
          <span className="label-text">Name</span>
          <p className="form-input">{habit.name}</p>
        </div>
        <div className="view-form">
          <span className="label-text">Repeat</span>
          <span className="form-input">{habit.repeat}</span>
        </div>
        <div className="view-form">
          <span className="label-text">Goal</span>
          <span className="form-input">{habit.goal}</span>
        </div>
        <div className="view-form">
          <span className="label-text">Time of day</span>
          <span className="form-input">{habit.time_of_day}</span>
        </div>
        <div className="view-form">
          <span className="label-text">Start date</span>
          <span className="form-input">{habit.start_date}</span>
        </div>
      </div>
    </div>
  );
};
