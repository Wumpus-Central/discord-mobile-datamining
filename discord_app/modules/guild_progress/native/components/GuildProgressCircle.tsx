// discord_app/modules/guild_progress/native/components/GuildProgressCircle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildProgressUtils from "../GuildProgressUtils.tsx";
import ProgressCircleDefault from "../../../premium/native/components/ProgressCircle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { wrapper: { position: "relative" }, circle: { position: "absolute" }, progressCircle: null };
createStyles = { color: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.progressCircle = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
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
  let obj = { style: null, children: null };
  const items = [tmp.wrapper, style, size];
  obj.style = items;
  obj = { style: null, size: num, strokeWidth: 4, percent: 100, color: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR };
  const items1 = [tmp.circle, size];
  obj.style = items1;
  const items2 = [React4(ProgressCircleDefault, obj)];
  const obj1 = { style: null, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent };
  const items3 = [tmp.circle, size];
  obj1.style = items3;
  items2[1] = React4(ProgressCircleDefault, obj1);
  obj.children = items2;
  return hasOwnProperty(View, obj);
}
