// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const newUsers = data.map((user) => user.name);
    console.log(newUsers);

    const longName = newUsers.filter((name) => name.length > 17);
    console.log(longName);
  })
  .catch((error) => {
    console.error(error);
  });
