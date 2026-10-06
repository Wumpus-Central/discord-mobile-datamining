// === Module 16971: FriendRequestsSettingsScreen ===

// Module 16971 (FriendRequestsSettingsScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ThemedGradientDefault from "ThemedGradient" /* 5918 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 16972 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp12;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp3 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(ThemedGradientDefault, { absolute: true });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = React3(UserSettingsFriendRequestsDefault, {});
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp3.container) {
    const obj2 = { children: items };
    items = [first, ];
    const obj3 = { style: tmp3.container, children: tmp8 };
    items[1] = React3(ScrollView, obj3);
    const tmp17 = metroRequire(hasOwnProperty, obj2);
    cResult[2] = tmp3.container;
    cResult[3] = tmp17;
    tmp12 = tmp17;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (() => {
  let items;
  const obj = { children: items };
  items = [, ];
  const tmp = closure_7();
  items[0] = React3(ThemedGradientDefault, { absolute: true });
  const obj2 = { style: tmp.container, children: React3(UserSettingsFriendRequestsDefault, {}) };
  items[1] = React3(ScrollView, obj2);
  return metroRequire(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default tmp4;