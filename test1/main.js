fetch("./login.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
// $.ajax({
//     type: "GET",
//     url: "http://localhost/test1/login.json",
//     data: '{"name":"jonas"}', ,
//     success: function (data) {
//         alert("data: " + data);
//     },
//     contentType: "application/json",
//     dataType: "json",
// });
$.post(
    "http://localhost/test1/login.json",
    {
       {
            name: "ehhe",
       },
    },
    function (data, status) {
        console.log(data);
        console.log(status);
    }
);
fetch('./login.json', {
    method: 'PUT',
    body: JSON.stringify({
      name: 1,
      title: 'foo',
      body: 'bar',
      userId: 0,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));