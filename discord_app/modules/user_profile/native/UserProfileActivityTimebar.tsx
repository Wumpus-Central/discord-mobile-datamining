// discord_app/modules/user_profile/native/UserProfileActivityTimebar.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import useActivityTimer from "../hooks/useActivityTimer.tsx";
import useActivityTimerDefault from "../hooks/useActivityTimer.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { bar: null, progress: null, textRow: null };
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: ThemesDefault.radii.xs,
  height: 4,
  marginBottom: 4,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  backgroundColor: ThemesDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND,
  borderRadius: ThemesDefault.radii.xs,
  height: "100%",
  minWidth: 4,
};
createCacheKey[2] = { flexDirection: "row", justifyContent: "space-between" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = {
  backgroundColor: ThemesDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND,
  borderRadius: ThemesDefault.radii.xs,
  height: "100%",
  minWidth: 4,
};
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  ({ start, end, style } = arg0);
  const tmp = callback3();
  const tmp2 = useActivityTimerDefault({ start, end });
  let obj = { style, children: null };
  obj = { style: tmp.bar, children: callback(View, { style: items }) };
  items = [tmp.progress];
  obj = { width: `${100 * tmp2.percentage}%` };
  items[1] = obj;
  ({ elapsed, duration } = tmp2);
  const items1 = [callback(View, obj)];
  obj1 = { style: tmp.textRow, children: null };
  const obj2 = {
    variant: "text-xs/normal",
    tabularNumbers: true,
    color: "text-subtle",
    children: useActivityTimer.formatTime(elapsed),
  };
  const items2 = [callback(Text.Text, obj2)];
  const obj3 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: null };
  const obj6 = useActivityTimer;
  obj3[3] = useActivityTimer.formatTime(duration);
  items2[1] = callback(Text.Text, obj3);
  obj1[1] = items2;
  items1[1] = callback2(View, obj1);
  obj[1] = items1;
  return callback2(View, obj);
}
