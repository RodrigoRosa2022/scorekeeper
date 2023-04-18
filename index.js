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

  function taylor() {

  }

  function newNameA () {

    document.getElementById("bluePlayerName").innerHTML = "<input type='text' id='fname' name='fname' value='Player A' autofocus><span class='material-symbols-outlined' onclick='doneNameA()'>send</span>";

    const input = document.getElementById("fname");
    input.focus();  // set focus on the input element
    input.setSelectionRange(0, input.value.length);
  }

  function doneNameA () {

    document.getElementById("bluePlayerName").innerHTML = "Alterado<span class='material-symbols-outlined' onclick='newNameA()'>edit</span>";

    const input = document.getElementById("fname");
    input.focus();  // set focus on the input element
    input.setSelectionRange(0, input.value.length);
  }

