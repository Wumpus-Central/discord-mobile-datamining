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
const createStyles = fn(4640);
let obj2 = {
  bar: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.xs,
    height: 4,
    marginBottom: 4,
  },
  progress: null,
  textRow: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 4,
  marginBottom: 4,
};
obj2.progress = {
  backgroundColor: nativeDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND,
  borderRadius: nativeDefault.radii.xs,
  height: "100%",
  minWidth: 4,
};
obj2.textRow = { flexDirection: "row", justifyContent: "space-between" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  ({ start, end, style } = arg0);
  const tmp = closure_6();
  const tmp2 = useActivityTimerDefault({ start, end });
  const obj = { style, children: null };
  const obj2 = { style: tmp.bar, children: null };
  const obj3 = { style: null };
  const items = [tmp.progress, { width: `${100 * tmp2.percentage}%` }];
  obj3.style = items;
  ({ elapsed, duration } = tmp2);
  obj2.children = React4(View, obj3);
  const items1 = [React4(View, obj2)];
  const obj5 = { style: tmp.textRow, children: null };
  const obj6 = {
    variant: "text-xs/normal",
    tabularNumbers: true,
    color: "text-subtle",
    children: useActivityTimer.formatTime(elapsed),
  };
  const items2 = [React4(Text_Text.Text, obj6)];
  const obj8 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: null };
  const obj4 = { width: `${100 * tmp2.percentage}%` };
  obj8.children = useActivityTimer.formatTime(duration);
  items2[1] = React4(Text_Text.Text, obj8);
  obj5.children = items2;
  items1[1] = hasOwnProperty(View, obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
