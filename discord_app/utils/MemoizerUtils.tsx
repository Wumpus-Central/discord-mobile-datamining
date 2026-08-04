// discord_app/utils/MemoizerUtils.tsx
let result = require("set").fileFinishedImporting("utils/MemoizerUtils.tsx");

export default {
  makeMemoizer(getURL) {
    let closure_0 = getURL;
    const map = new Map();
    return (arg0) => {
      let value = map.get(arg0);
      if (undefined === value) {
        const tmp3 = getURL(arg0);
        const result = map.set(arg0, tmp3);
        value = tmp3;
      }
      return value;
    };
  }
};