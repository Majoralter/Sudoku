export let containerArray = [];

const getBoard = () => {
  containerArray = [];
  const rowSet = new Set(),
    colSet = new Set(),
    boxSet = new Set();
  let row = [];

  for (let i = 0; i < 9; i++) {
    row = [];
    rowSet.clear();

    for (let j = 0; j < 9; j++) {
      let randomIndex = Math.floor(Math.random() * 9),
        randomNumber = Math.ceil(Math.random() * 9);

      if (j === randomIndex) {
        row.push(" ");
      } else {
        if (rowSet.has(randomNumber) && rowSet.size !== 0) row.push(" ");
        else {
          rowSet.add(randomNumber);
          row.push(randomNumber);
        }
      }
    }
    containerArray.push(row);
  }

  for (let k = 0; k < 9; k++) {
    let currentRow = null;

    colSet.clear();
    boxSet.clear();

    for (let j = 0; j < 9; j++) {
      if (k < 3) {
        currentRow = Math.floor(j / 3);
      } else if (k > 2 && k < 6) {
        currentRow = Math.floor(j / 3) + 3;
      } else {
        currentRow = Math.floor(j / 3) + 6;
      }

      let colNumber = containerArray[j][k];
      let boxNumber =
        containerArray[3 * Math.floor(k / 3) + Math.floor(j / 3)][
          ((k * 3) % 9) + (j % 3)
        ];

      if (colNumber !== " ") {
        if (colSet.has(colNumber)) {
          let index = containerArray[j].indexOf(colNumber);
          containerArray[j][index] = " ";
        }
        colSet.add(colNumber);
      }

      if (boxNumber !== " ") {
        if (boxSet.has(boxNumber)) {
          let boxIndex = containerArray[currentRow].indexOf(boxNumber);
          containerArray[currentRow][boxIndex] = " ";
        }
        boxSet.add(boxNumber);
      }
    }
  }
};

window.onload = getBoard();

export default getBoard;
