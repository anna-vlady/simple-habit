import './Calendar.css';
function Calendar({ month, year }) {
    // Function to calculate the number of days in the month
    const getDaysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    // Function to render the days in the calendar grid
    const renderDays = () => {
      const totalDays = getDaysInMonth(month, year);
      const days = [];
  
      for (let day = 1; day <= totalDays; day++) {
        days.push(
          <div key={day} className="day">
            {day} <input type="checkbox" />
          </div>
        );
      }
  
      return days;
    };
  
    return (
      <div className="calendar">
        <h2>{`Month: ${month + 1}, Year: ${year}`}</h2>
        <div className="grid">
          {renderDays()}
        </div>
      </div>
    );
  }
  export default Calendar;