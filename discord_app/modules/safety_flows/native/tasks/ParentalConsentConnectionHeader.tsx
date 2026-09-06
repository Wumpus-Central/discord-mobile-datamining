// === Module 17881: ParentalConsentConnectionHeader ===

// Module 17881 (ParentalConsentConnectionHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef2690 from "module_2690" /* 2690 */;
import Text_Text from "Text/Text" /* 4556 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { row: null, logOut: null };
createStyles = { height: fn(5682).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.row = createStyles;
createStyles.logOut = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
  const tmp = closure_7();
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let username;
    if (currentUser != null) {
      username = currentUser.username;
    }
    return username;
  });
  obj = { style: { paddingTop: useSafeAreaInsetsDefault().top }, children: null };
  obj = { style: tmp.row, children: null };
  const obj1 = {
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
  obj1.children = intl.string(_modDef2690["3HuGuY"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj1), ];
  let tmp5Result = null != stateFromStores;
  if (tmp5Result) {
    const obj2 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
    tmp5Result = tmp5(Text_Text.Text, obj2);
  }
  items1[1] = tmp5Result;
  obj.children = items1;
  obj.children = timestampProducer(View, obj);
  return hasOwnProperty(View, obj);
};