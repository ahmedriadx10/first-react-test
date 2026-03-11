function App() {
  const users = [
    {
      id: 1,
      name: "Riad",
      age: 19,
    },
    {
      id: 2,
      name: "Ridu",
      age: 19,
    },
    {
      id: 3,
      name: "Riad Ahmed",
      age: 19,
    },
    {
      id: 4,
      name: "Riad Ali",
      age: 19,
    },
  ];
  return (
    <div>
      <h1>This is my Favourite Foods</h1>

      <div>
        {users.map((user) => {
          const { id, name, age } = user;

          return (
            <div key={id}>
              <p>Name: {name} </p>
              <p> {age} </p>
              <p>Age status: {age>=18?'Adult':'not-adult'} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
