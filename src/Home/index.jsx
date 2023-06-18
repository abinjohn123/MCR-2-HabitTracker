import { useState } from 'react';

import '../app.scss';

import { TaskModal } from './TaskModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Add task</button>
      {isModalOpen && <TaskModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Home;
