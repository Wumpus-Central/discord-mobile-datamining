// discord_app/utils/MemoizerUtils.tsx
import size from "../../_runtime/metro/00002__.js";

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
  },
};
