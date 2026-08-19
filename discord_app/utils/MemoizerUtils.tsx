// discord_app/utils/MemoizerUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";

let result = obj132.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default {
  makeMemoizer(getURL) {
    closure_0 = getURL;
    const map = new Map();
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