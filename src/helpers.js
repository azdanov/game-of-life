function Create2DArray(rows) {
  const arr = [];

  for (let i = 0; i < rows; i += 1) {
    arr[i] = [];
  }

  return arr;
}

export default Create2DArray;
