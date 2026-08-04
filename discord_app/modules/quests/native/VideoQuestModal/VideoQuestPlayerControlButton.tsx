import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import importDefaultResult from "n";

const require = arg1;
let obj = { disabled: { opacity: 0.5 }, container: null, blur: null };
obj = { borderRadius: require("Themes").radii.round, overflow: "hidden" };
obj[1] = obj;
createCacheKey = { backgroundColor: null, padding: null };
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.BLACK);
createCacheKey[0] = require("n")(require("Themes").unsafe_rawColors.BLACK).alpha(0.5).hex();
createCacheKey[1] = require("Themes").space.PX_12;
obj[2] = createCacheKey;
let closure_4 = createCacheKey.createStyles(obj);
const alphaResult = require("n")(require("Themes").unsafe_rawColors.BLACK).alpha(0.5);
const memoResult = importAllResult.memo((arg0) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback();
  const items = [tmp2.container, , ];
  let disabled = merged.disabled;
  if (disabled) {
    disabled = tmp2.disabled;
  }
  let obj = { style: items };
  items[1] = disabled;
  items[2] = style;
  const merged1 = Object.assign(merged);
  obj = { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children };
  obj.children = jsx(importDefault(4685), { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
  return jsx(require(4812) /* PressableBase */.PressableOpacity, { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
});
const result = require("createCacheKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = memoResult;