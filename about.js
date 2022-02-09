formElem.onsubmit = async (e) => {
    e.preventDefault();
    var form = document.querySelector("#formElem");
    data = {
      mail: form.querySelector('#textarea').value,
    };
    let response = await fetch("https://theanonymousblog.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };