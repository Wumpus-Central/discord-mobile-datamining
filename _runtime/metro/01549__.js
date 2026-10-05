// _runtime/metro/01549__.js

export default (str, str2) => {
  if (typeof str === "string") {
    if (typeof str2 === "string") {
      if ("" === str2) {
        const items = [""];
        return items;
      } else {
        let items2;
        const index = str.indexOf(str2);
        if (-1 === index) {
          const items1 = [""];
          items2 = items1;
        } else {
          items2 = ["".slice(0, index), "".slice(index + str2.length)];
        }
        return items2;
      }
    }
  }
  const typeError = new TypeError("Expected the arguments to be of type `string`");
  throw typeError;
};
