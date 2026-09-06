// discord_app/utils/MemoizerUtils.tsx
import size from "../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default {
  makeMemoizer(getURL) {
    const map = new Map();
    return (arg0) => {
      value = map.get(arg0);
      if (undefined === value) {
        const tmp3 = getURL(arg0);
        const result = map.set(arg0, tmp3);
        value = tmp3;
      }
      return value;
    };
  },
};
