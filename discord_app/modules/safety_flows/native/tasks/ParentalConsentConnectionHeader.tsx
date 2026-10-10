// === Module 18641: ParentalConsentConnectionHeader ===

// Module 18641 (ParentalConsentConnectionHeader)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import _modDef2862 from "module_2862" /* 2862 */;
import Text_Text from "Text/Text" /* 5088 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5930 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { row: { height: fn(6258).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, logOut: null };
let obj3 = { height: fn(6258).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.logOut = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { position: "absolute", left: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = ReactCompilerGating.isReactCompilerEnabled() ? (function ParentalConsentConnectionNavbar() {
  const cResult = c.c(17);
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
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== top) {
    const obj2 = { paddingTop: top };
    cResult[2] = top;
    cResult[3] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  ({ row, logOut } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      return AuthenticationActionCreatorsDefault.logout("safety_flows_parental_consent_connection");
    };
    const intl = util.intl;
    const stringResult = intl.string(_modDef2862["3HuGuY"]);
    cResult[4] = fn2;
    cResult[5] = stringResult;
    let tmp12 = stringResult;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  if (cResult[6] !== tmp4.logOut) {
    const obj3 = { accessibilityRole: "button", variant: "text-md/medium", color: "text-link", style: logOut, onPress: tmp11, children: tmp12 };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[6] = tmp4.logOut;
    cResult[7] = tmp16;
    let tmp14 = tmp16;
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
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp4.row) {
    if (cResult[11] === tmp14) {
      if (cResult[12] === tmp17) {
        let tmp21 = cResult[13];
      }
      if (cResult[14] === tmp10) {
        if (cResult[15] === tmp21) {
          let tmp23 = cResult[16];
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
  const obj6 = { style: row, children: null };
  const items1 = [tmp14, tmp17];
  obj6.children = items1;
  const tmp22 = timestampProducer(View, obj6);
  cResult[10] = tmp4.row;
  cResult[11] = tmp14;
  cResult[12] = tmp17;
  cResult[13] = tmp22;
  tmp21 = tmp22;
  const tmpResult = initialize;
}) : (function ParentalConsentConnectionNavbar() {
  const tmp = closure_7();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let username;
    if (currentUser != null) {
      username = currentUser.username;
    }
    return username;
  });
  const obj2 = { style: { paddingTop: useSafeAreaInsetsDefault().top }, children: null };
  const obj3 = { style: tmp.row, children: null };
  const obj4 = {
    accessibilityRole: "button",
    variant: "text-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      return AuthenticationActionCreatorsDefault.logout("safety_flows_parental_consent_connection");
    },
    children: null
  };
  const intl = util.intl;
  obj4.children = intl.string(_modDef2862["3HuGuY"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj4), ];
  let tmp5Result = null != stateFromStores;
  if (tmp5Result) {
    const obj5 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
    tmp5Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = tmp5Result;
  obj3.children = items1;
  obj2.children = timestampProducer(View, obj3);
  return hasOwnProperty(View, obj2);
});