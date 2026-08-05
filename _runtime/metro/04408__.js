// _runtime/metro/04408__.js
if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let tmp4 = require("../00794_arrayPush.js") /* arrayPush */;
        let tmp4Result = tmp4(items, require("../00795_getOwnPropertySymbols.js") /* getOwnPropertySymbols */(tmp));
        tmp = require("../04404_overArg.js") /* overArg */(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;