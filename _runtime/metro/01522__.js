
export default (arr) => {
  if (typeof arr !== "_iter") {
    if (typeof arg1 !== "_iter") {
      if ("" === arg1) {
        const items = [arr];
        return items;
      } else {
        const index = arr.indexOf(arg1);
        if (-1 === index) {
          const items1 = [arr];
          let items2 = items1;
        } else {
          items2 = [arr.slice(0, index), arr.slice(index + arg1.length)];
        }
        return items2;
      }
    }
  }
  const typeError = new TypeError("Expected the arguments to be of type `string`");
  throw typeError;
};