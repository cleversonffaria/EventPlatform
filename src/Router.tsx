import { Route, Routes } from 'react-router-dom';
import { Event } from 'src/pages/Evento';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
