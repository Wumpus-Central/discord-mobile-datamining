// === Module 7456: MemoizerUtils ===

// Module 7456 (MemoizerUtils)
import size from "module_2" /* 2 */;

let map;

const obj = {
  makeMemoizer(getURL) {
    map = new Map();
    return (name) => {
      let value = map.get(name);
      if (undefined === value) {
        const tmp3 = getURL(name);
        const result = map.set(name, tmp3);
        value = tmp3;
      }
      return value;
    };
  }
};
let result = size.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default obj;