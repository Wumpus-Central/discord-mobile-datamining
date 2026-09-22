// === Module 18349: ParentalConsentConnectionHeader ===

// Module 18349 (ParentalConsentConnectionHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import _modDef2776 from "module_2776" /* 2776 */;
import Text_Text from "Text/Text" /* 4753 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6836 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj2 = { row: { height: fn(5901).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, logOut: null };
let obj3 = { height: fn(5901).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.logOut = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
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
  obj4.children = intl.string(_modDef2776["3HuGuY"]);
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
};