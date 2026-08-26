// === Module 14556: VideoQuestPlayerControlButton ===

// Module 14556 (VideoQuestPlayerControlButton)
import ThemesDefault from "Themes" /* 712 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4869 */;
import PressableBase from "PressableBase" /* 5015 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult from "n" /* 689 */;

require = arg1;
let obj = { disabled: { opacity: 0.5 }, container: null, blur: null };
obj = { borderRadius: ThemesDefault.radii.round, overflow: "hidden" };
obj[1] = obj;
createCacheKey = { backgroundColor: null, padding: null };
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK);
createCacheKey[0] = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
createCacheKey[1] = ThemesDefault.space.PX_12;
obj[2] = createCacheKey;
let closure_4 = createCacheKey.createStyles(obj);
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.5);
const memoResult = importAllResult.memo((arg0) => {
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
  obj.children = jsx(isBlurDisabledDefault, { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
  return jsx(PressableBase.PressableOpacity, { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
});
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = memoResult;