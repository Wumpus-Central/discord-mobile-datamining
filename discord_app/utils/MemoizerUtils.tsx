// === Module 7828: MemoizerUtils ===

// Module 7828 (MemoizerUtils)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default {
  makeMemoizer(getURL) {
    const map = new Map();
    return (name) => {
      value = map.get(name);
      if (undefined === value) {
        const tmp3 = getURL(name);
        const result = map.set(name, tmp3);
        value = tmp3;
      }
      return value;
    };
  }
};