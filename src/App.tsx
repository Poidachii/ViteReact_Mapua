import ListGroup from "./components/ListGroup";
import { render } from 'react-dom';
function App() {
  let items = ["Home", "Courses", "Announcements", "Messages", "Calendar"]

  const handleSelectedItem = (item: string) => {

    if (item == "Courses") {
      showCourses()
    } else if (item == "Announcements") {
      showAnnouncements()
    } else if (item == "Calendar") {
      showCalendar()
    }
  }
  return <div><ListGroup items={items} heading="" onSelectItem={handleSelectedItem} /></div>


}

function showCalendar() {
  render(
    <div><img src="https://cdn.generalblue.com/calendar/2023-11-november-calendar-red-sunday-start-en-ph-712x550.png" alt="" /></div>,
    document.getElementById('content')
  );
}

function showCourses() {
  render(
    renderCoursesTable(),
    document.getElementById('content')
  );
}

function showAnnouncements() {
  render(
    renderAnnouncements(),
    document.getElementById('content')
  );
}

function renderAnnouncements() {
  return (
    <div>
      <h1>ANNOUNCEMENTS</h1>
      <div>
        <h2>dummy message</h2>
        <div>
          <h3>Dummy Title</h3>
          <p>Dummy Text</p>
        </div>
        <div>
          <h3>Dummy Title</h3>
          <p>Dummy Text</p>
        </div>
        <div>
          <h3>Dummy Title</h3>
          <p>Dummy Text</p>
        </div>
      </div>
    </div>
  )
}

function renderCoursesTable() {
  return (
    <div>
      <h1>Hello</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default App;
