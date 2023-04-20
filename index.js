function calculateA(added) {
    var playerAScore = parseInt(document.getElementById("playerAScore").textContent);
    playerAScore = playerAScore + added;
    document.getElementById("playerAScore").textContent = playerAScore;
  }

  function calculateB(added) {
    var playerBScore = parseInt(document.getElementById("playerBScore").textContent);
    playerBScore = playerBScore + added;
    document.getElementById("playerBScore").textContent = playerBScore;
  }

  function reset() {

    document.getElementById("playerAScore").textContent = 0;
    document.getElementById("playerBScore").textContent = 0;
  }

  function taylor() {

  }

  function newNameA () {

    // Collects the current assigned name.
    const currentNameA = document.getElementById("bluePlayerCurrentName");

    document.getElementById("bluePlayerName").innerHTML = `
    <input type='text' id='fname' name='fname' value='`+currentNameA.textContent+`' autofocus>
    <span class='material-symbols-outlined' onclick='doneNameA()'>send</span>
    `;

    const input = document.getElementById("fname");
    input.focus();  // set focus on the input element
    input.setSelectionRange(0, input.value.length);

    input.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        doneNameA(); 
      }
  });
}

  function doneNameA () {

    const input = document.getElementById("fname");

    document.getElementById("bluePlayerName").innerHTML = `
    <span class="bluePlayerCurrentName" id="bluePlayerCurrentName">`+input.value+`</span>
    <span class="material-symbols-outlined" onclick="newNameA()">edit</span>`;

  }


  function newNameB () {

    // Collects the current assigned name.
    const currentNameB = document.getElementById("redPlayerCurrentName");

    document.getElementById("redPlayerName").innerHTML = `
    <input type='text' id='fname' name='fname' value='`+currentNameB.textContent+`' autofocus>
    <span class='material-symbols-outlined' onclick='doneNameB()'>send</span>
    `;

    const input = document.getElementById("fname");
    input.focus();  // set focus on the input element
    input.setSelectionRange(0, input.value.length);

    input.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        doneNameB(); 
      }
  });
}

  function doneNameB () {

    const input = document.getElementById("fname");

    document.getElementById("redPlayerName").innerHTML = `
    <span class="redPlayerCurrentName" id="redPlayerCurrentName">`+input.value+`</span>
    <span class="material-symbols-outlined" onclick="newNameB()">edit</span>`;

  }

