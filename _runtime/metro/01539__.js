// _runtime/metro/01539__.js

export default (str, str2) => {
  if (typeof str === "string") {
    if (typeof str2 === "string") {
      if ("" === str2) {
        const items = [str];
        return items;
      } else {
        const index = str.indexOf(str2);
        if (-1 === index) {
          const items1 = [str];
          let items2 = items1;
        } else {
          items2 = [str.slice(0, index), str.slice(index + str2.length)];
        }
        return items2;
      }
    }
  }
  const typeError = new TypeError("Expected the arguments to be of type `string`");
  throw typeError;
};