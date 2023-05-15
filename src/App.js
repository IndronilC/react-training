import logo from './logo.svg';
import './App.css';

// Example of a data array that
// you might receive from an API
const employee = [
  { name: "Indronil", age: 52, gender: "Male",  salary: 1000, doj:"20/05/2023"},
  { name: "Megha", age: 19, gender: "Female", salary: 2000, doj: "22/05/2023" },
  { name: "Subham", age: 25, gender: "Male", salary: 3000, doj: "25/05/2023"},
]

function App() {
  return (
    <div className="App">
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Salary</th>
        <th>DOJ</th>
      </tr>
      {employee.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.salary}</td>
              <td>{val.doj}</td>
            </tr>
          )
        })}
    </table>
  </div>
  );
}

export default App;
