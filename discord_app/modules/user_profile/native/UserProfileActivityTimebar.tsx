// discord_app/modules/user_profile/native/UserProfileActivityTimebar.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { bar: null, progress: null, textRow: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.xs, height: 4, marginBottom: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: require("Themes").radii.xs, height: "100%", minWidth: 4 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "space-between" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { backgroundColor: require("Themes").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: require("Themes").radii.xs, height: "100%", minWidth: 4 };
const result = require("ME").fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  let duration;
  let elapsed;
  let end;
  let percentage;
  let start;
  let style;
  ({ start, end, style } = arg0);
  const tmp2 = importDefault(1348)("UserProfileActivityTimebar");
  const tmp3 = createCacheKey();
  let tmp5;
  ({ elapsed, duration, percentage } = importDefault(12028)({ start, end }));
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
  const obj3 = { variant: "text-xs/normal", style: tmp5, tabularNumbers: null, color: null, children: null };
  obj3[2] = tmp2;
  let str;
  if (tmp2) {
    str = "text-subtle";
  }
  obj3[3] = str;
  let tmp10Result = tmp10(12028);
  obj3[4] = tmp10Result.formatTime(elapsed);
  const items2 = [callback(require(4189) /* Text */.Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", style: tmp5, tabularNumbers: null, color: null, children: null };
  obj4[2] = tmp2;
  let str2;
  if (tmp2) {
    str2 = "text-subtle";
  }
  obj4[3] = str2;
  tmp10Result = tmp10(12028);
  obj4[4] = tmp10Result.formatTime(duration);
  items2[1] = callback(require(4189) /* Text */.Text, obj4);
  obj2[1] = items2;
  items1[1] = closure_6(View, obj2);
  obj[1] = items1;
  return closure_6(View, obj);
};