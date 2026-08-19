// === Module 12119: UserProfileActivityTimebar ===

// Module 12119 (UserProfileActivityTimebar)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4734 */;
import useActivityTimerDefault from "useActivityTimer" /* 12120 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Fonts } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { bar: null, progress: null, textRow: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.xs, height: 4, marginBottom: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: ThemesDefault.radii.xs, height: "100%", minWidth: 4 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "space-between" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj1 = { backgroundColor: ThemesDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: ThemesDefault.radii.xs, height: "100%", minWidth: 4 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  ({ start, end, style } = arg0);
  const tmp2 = useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileActivityTimebar");
  const tmp3 = callback2();
  let tmp5;
  ({ elapsed, duration, percentage } = useActivityTimerDefault({ start, end }));
  if (!tmp2) {
    let obj = { fontFamily: null };
    obj[0] = Fonts.CODE_NORMAL;
    tmp5 = obj;
  }
  obj = { style, children: null };
  obj = { style: tmp3.bar, children: callback(View, { style: items }) };
  items = [tmp3.progress, { width: `${100 * percentage}%` }];
  const items1 = [callback(View, obj), ];
  const obj2 = { style: tmp3.textRow, children: null };
  const obj3 = { variant: "text-xs/normal", style: tmp5, tabularNumbers: tmp2, color: null, children: null };
  let str;
  if (tmp2) {
    str = "text-subtle";
  }
  obj3[3] = str;
  let tmp10Result = tmp10(12120);
  obj3[4] = tmp10Result.formatTime(elapsed);
  const items2 = [callback(Text.Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", style: tmp5, tabularNumbers: tmp2, color: null, children: null };
  let str2;
  if (tmp2) {
    str2 = "text-subtle";
  }
  obj4[3] = str2;
  tmp10Result = tmp10(12120);
  obj4[4] = tmp10Result.formatTime(duration);
  items2[1] = callback(Text.Text, obj4);
  obj2[1] = items2;
  items1[1] = closure_6(View, obj2);
  obj[1] = items1;
  return closure_6(View, obj);
};