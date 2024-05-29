import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="calendar">
      <h2>Actividad principal del mes/quincenal</h2>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default CustomCalendar;
