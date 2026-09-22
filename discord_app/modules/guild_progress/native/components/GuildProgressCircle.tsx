// === Module 12847: GuildProgressCircle ===

// Module 12847 (GuildProgressCircle)
import nativeDefault from "native" /* 576 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12732 */;
import ProgressCircleDefault from "ProgressCircle" /* 12848 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let obj2 = { wrapper: { position: "relative" }, circle: { position: "absolute" }, progressCircle: { color: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_6 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = closure_6();
  size = { width: num, height: num, borderRadius: num / 2 };
  const obj = { style: null, children: null };
  const items = [tmp.wrapper, style, size];
  obj.style = items;
  const obj2 = { style: null, size: num, strokeWidth: 4, percent: 100, color: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR };
  const items1 = [tmp.circle, size];
  obj2.style = items1;
  const items2 = [React4(ProgressCircleDefault, obj2), ];
  const obj3 = { style: null, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent };
  const items3 = [tmp.circle, size];
  obj3.style = items3;
  items2[1] = React4(ProgressCircleDefault, obj3);
  obj.children = items2;
  return hasOwnProperty(View, obj);
};