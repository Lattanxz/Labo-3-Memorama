let icons = [];
      let selects = [];

      genBoard();

      function loadIcons() {
        icons = [
            '<img src="img/tigre.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/cebra.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/cerdo.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/mina.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/moto.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/osos.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/patos.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/pelado.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/pibe.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/raro.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/rata.png" alt="gallo" style="width: 95%; height: 95%;">',
            '<img src="img/serpiente.png" alt="gallo" style="width: 95%; height: 95%;">',
        ];
      }

      function genBoard() {
        loadIcons();
        selects = [];
        let board = document.getElementById("board");
        let cards = [];
        for (let i = 0; i < 24; i++) {
          cards.push(`
                <div class="area-card" onclick="selectCard(${i})">
                    <div class="card" id="card${i}">
                        <div class="face back" id="back${i}">
                            ${icons[0]}
                        </div>
                        <div class="face top">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>
                `);
          if (i % 2 == 1) {
            icons.splice(0, 1);
          }
        }
        cards.sort(() => Math.random() - 0.5);
        board.innerHTML = cards.join(" ");
      }

      function selectCard(i) {
        let card = document.getElementById("card" + i);
        if (card.style.transform != "rotateY(180deg)") {
          card.style.transform = "rotateY(180deg)";
          selects.push(i);
        }
        if (selects.length == 2) {
          deselect(selects);
          selects = [];
        }
      }

      function deselect(selects) {
        setTimeout(() => {
          let back1 = document.getElementById("back" + selects[0]);
          let back2 = document.getElementById("back" + selects[1]);
          if (back1.innerHTML != back2.innerHTML) {
            let card1 = document.getElementById("card" + selects[0]);
            let card2 = document.getElementById("card" + selects[1]);
            card1.style.transform = "rotateY(0deg)";
            card2.style.transform = "rotateY(0deg)";
          } else {
            back1.style.background = "var(--card-correct-color)";
            back2.style.background = "var(--card-correct-color)";
          }
        }, 1000);
      }
