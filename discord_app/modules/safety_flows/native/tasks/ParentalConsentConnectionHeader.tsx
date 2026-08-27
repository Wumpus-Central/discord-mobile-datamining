// === Module 17374: ParentalConsentConnectionNavbar ===

// Module 17374 (ParentalConsentConnectionNavbar)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import messagesProxyDefault from "messagesProxy" /* 2631 */;
import Text from "Text" /* 4441 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { row: null, logOut: null };
createCacheKey = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", left: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { position: "absolute", left: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_4];
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
  obj1 = {
    accessibilityRole: "button",
    variant: "text-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      return callback(table[10]).logout("safety_flows_parental_consent_connection");
    },
    children: null
  };
  const intl = getSystemLocale.intl;
  obj1[5] = intl.string(messagesProxyDefault["3HuGuY"]);
  const items1 = [callback(Text.Text, obj1), ];
  let tmp5Result = null != stateFromStores;
  if (tmp5Result) {
    const obj2 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj2[3] = stateFromStores;
    tmp5Result = tmp5(Text.Text, obj2);
  }
  items1[1] = tmp5Result;
  obj[1] = items1;
  obj[1] = closure_6(View, obj);
  return callback(View, obj);
};