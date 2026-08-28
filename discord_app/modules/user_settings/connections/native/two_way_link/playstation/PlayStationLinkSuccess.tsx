// === Module 9276: PlayStationLinkSuccess ===

// Module 9276 (PlayStationLinkSuccess)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import Button from "Button" /* 4893 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5518 */;
import styles from "styles" /* 9245 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = function PlayStationLinkSuccess(onClose) {
  let obj = styles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = callback3();
  const items = [callback(closure_4, { source: React.useMemo(() => ({ uri: callback(table[5]) }), []), style: callback3().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.e6SOl0);
  items[1] = callback(Text.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = getSystemLocale.intl;
  obj3[3] = intl2.string(getSystemLocale.t.QjAZAQ);
  items[2] = callback(Text.Text, obj3);
  obj[1] = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj6[1] = intl3.string(getSystemLocale.t.i4jeWR);
  obj6[2] = onClose.onClose;
  obj5[1] = callback(Button.Button, obj6);
  obj4[2] = callback(closure_5, obj5);
  items1[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_5, obj);
};