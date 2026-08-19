// discord_app/modules/guild_progress/native/components/GuildProgressCircle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIOSCompletionStates from "../GuildProgressUtils.tsx";
import renderCircleDefault from "../../../premium/native/components/ProgressCircle.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { color: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = callback3();
  let obj = { style: items, children: null };
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