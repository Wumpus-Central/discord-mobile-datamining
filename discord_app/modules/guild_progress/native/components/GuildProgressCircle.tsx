// === Module 12590: GuildProgressCircle ===

// Module 12590 (GuildProgressCircle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import useIOSCompletionStates from "useIOSCompletionStates" /* 12474 */;
import renderCircleDefault from "renderCircle" /* 12591 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { wrapper: { position: "relative" }, circle: { position: "absolute" }, progressCircle: null };
createCacheKey = { color: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = callback3();
  let obj = { width: num, height: num, borderRadius: num / 2 };
  obj = { style: items, children: null };
  items = [tmp.wrapper, style, obj];
  obj = { style: items1, size: num, strokeWidth: 4, percent: 100, color: null };
  items1 = [tmp.circle, obj];
  obj[4] = useIOSCompletionStates.PROGRESS_BACKGROUND_COLOR;
  const items2 = [callback(renderCircleDefault, obj), ];
  const items3 = [tmp.circle, obj];
  items2[1] = callback(renderCircleDefault, { style: items3, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent });
  obj[1] = items2;
  return callback2(View, obj);
};