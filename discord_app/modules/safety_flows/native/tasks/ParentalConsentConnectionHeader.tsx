// === Module 18073: ParentalConsentConnectionHeader ===

// Module 18073 (ParentalConsentConnectionHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import _modDef2787 from "module_2787" /* 2787 */;
import Text_Text from "Text/Text" /* 4886 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6082 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, logOut: obj3 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let logOut;
  let row;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(17);
  const tmp4 = closure_7();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let username;
      if (currentUser != null) {
        username = currentUser.username;
      }
      return username;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== top) {
    const obj2 = { paddingTop: top };
    cResult[2] = top;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  ({ row, logOut } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      const obj = AuthenticationActionCreatorsDefault;
      return obj.logout("safety_flows_parental_consent_connection");
    };
    const intl = intl2.intl;
    const stringResult = intl.string(_modDef2787["3HuGuY"]);
    cResult[4] = fn2;
    cResult[5] = stringResult;
    tmp12 = stringResult;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  if (cResult[6] !== tmp4.logOut) {
    const obj3 = { accessibilityRole: "button", variant: "text-md/medium", color: "text-link", style: logOut, onPress: tmp11, children: tmp12 };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[6] = tmp4.logOut;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== stateFromStores) {
    let tmp19 = null != stateFromStores;
    if (tmp19) {
      const obj4 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
      tmp19 = hasOwnProperty(Text_Text.Text, obj4);
    }
    cResult[8] = stateFromStores;
    cResult[9] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp4.row) {
    if (cResult[11] === tmp14) {
      let tmp21;
      if (cResult[12] === tmp17) {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp10) {
        let tmp23;
        if (cResult[15] === tmp21) {
          tmp23 = cResult[16];
        }
        return tmp23;
      }
      const obj5 = { style: tmp10, children: tmp21 };
      const tmp26 = hasOwnProperty(View, obj5);
      cResult[14] = tmp10;
      cResult[15] = tmp21;
      cResult[16] = tmp26;
      tmp23 = tmp26;
    }
  }
  const obj6 = { style: row, children: items1 };
  items1 = [tmp14, tmp17];
  const tmp22 = metroRequire(View, obj6);
  cResult[10] = tmp4.row;
  cResult[11] = tmp14;
  cResult[12] = tmp17;
  cResult[13] = tmp22;
  tmp21 = tmp22;
}) : (() => {
  let intl;
  let items1;
  let obj3;
  const tmp = closure_7();
  const top = useSafeAreaInsetsDefault().top;
  let obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let username;
    if (currentUser != null) {
      username = currentUser.username;
    }
    return username;
  });
  const obj2 = { style: { paddingTop: top }, children: metroRequire(View, obj3) };
  obj3 = { style: tmp.row, children: items1 };
  const obj4 = {
    accessibilityRole: "button",
    variant: "text-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      const obj = AuthenticationActionCreatorsDefault;
      return obj.logout("safety_flows_parental_consent_connection");
    },
    children: intl.string(_modDef2787["3HuGuY"])
  };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj4), ];
  let tmp5Result = null != stateFromStores;
  if (tmp5Result) {
    const obj5 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
    tmp5Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = tmp5Result;
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = tmp5;