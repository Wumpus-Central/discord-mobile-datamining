// discord_app/modules/user_profile/native/UserProfileActivityTimebar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useActivityTimer from "../hooks/useActivityTimer.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useActivityTimerDefault = useActivityTimer;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { bar: null, progress: null, textRow: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 4,
  marginBottom: 4,
};
createStyles.bar = createStyles;
createStyles.progress = {
  backgroundColor: nativeDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND,
  borderRadius: nativeDefault.radii.xs,
  height: "100%",
  minWidth: 4,
};
createStyles.textRow = { flexDirection: "row", justifyContent: "space-between" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  ({ start, end, style } = arg0);
  const tmp = closure_6();
  const tmp2 = useActivityTimerDefault({ start, end });
  let obj = { style, children: null };
  obj = { style: tmp.bar, children: null };
  obj = { style: null };
  const items = [tmp.progress, { width: `${100 * tmp2.percentage}%` }];
  obj.style = items;
  ({ elapsed, duration } = tmp2);
  obj.children = React4(View, obj);
  const items1 = [React4(View, obj)];
  const obj2 = { style: tmp.textRow, children: null };
  const obj3 = {
    variant: "text-xs/normal",
    tabularNumbers: true,
    color: "text-subtle",
    children: useActivityTimer.formatTime(elapsed),
  };
  const items2 = [React4(Text_Text.Text, obj3)];
  const obj4 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: null };
  const obj1 = { width: `${100 * tmp2.percentage}%` };
  obj4.children = useActivityTimer.formatTime(duration);
  items2[1] = React4(Text_Text.Text, obj4);
  obj2.children = items2;
  items1[1] = hasOwnProperty(View, obj2);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
