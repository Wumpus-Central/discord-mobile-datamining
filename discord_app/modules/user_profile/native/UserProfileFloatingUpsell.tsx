// === Module 14501: UserProfileFloatingUpsell ===

// Module 14501 (UserProfileFloatingUpsell)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 14490 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6714 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

let hasOwnProperty;
let metroRequire;
({ FLOATING_UPSELL_HEIGHT: hasOwnProperty, PROFILE_SIDE_PADDING: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0, marginHorizontal: metroRequire - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  ({ position: "absolute", bottom, start: 0, end: 0, marginHorizontal: metroRequire - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let first;
  let tmp3;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, closure_129_0] = react.useState(hasOwnProperty);
  _slicedToArray(react.useState(hasOwnProperty), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(nativeEvent) {
      return closure_1_0(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const obj2 = { height: tmp3, onLayout: first };
    cResult[1] = tmp3;
    cResult[2] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (() => {
  const tmp = _slicedToArray(react.useState(hasOwnProperty), 2);
  let closure_0 = tmp[1];
  const obj = { height: tmp[0], onLayout: react.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.height), []) };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_8(useSafeAreaInsetsDefault().bottom);
  if (cResult[0] === arg0) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  UserProfileUpsellCardV2Default;
  const merged = Object.assign(arg0);
  const tmp8 = <tmp3Result style={tmp4.container} />;
  cResult[0] = arg0;
  cResult[1] = tmp4.container;
  cResult[2] = tmp8;
  tmp5 = tmp8;
}) : ((arg0) => {
  UserProfileUpsellCardV2Default;
  const merged = Object.assign(arg0);
  return <tmp2 style={closure_8(useSafeAreaInsetsDefault().bottom).container} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFloatingUpsell.tsx");

export default tmp4;
export const useFloatingUpsellHeight = tmp3;