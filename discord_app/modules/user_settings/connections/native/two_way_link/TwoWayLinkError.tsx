// === Module 9794: TwoWayLinkError ===

// Module 9794 (TwoWayLinkError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import styles from "styles" /* 9756 */;
import registerAssetDefault from "registerAsset" /* 9795 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  ({ onClose, title, body, onRetry } = arg0);
  let obj = styles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = callback3();
  const items = [callback(closure_3, { source: registerAssetDefault, style: callback3().image }), callback(Text.Text, { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title }), callback(Text.Text, { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body })];
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj6[2] = intl.string(getSystemLocale.t["5911Lb"]);
  obj6[3] = onRetry;
  const items2 = [callback(Button.Button, obj6), ];
  const obj7 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj7[2] = intl2.string(getSystemLocale.t["ETE/oC"]);
  obj7[3] = onClose;
  items2[1] = callback(Button.Button, obj7);
  obj5[3] = items2;
  obj4[2] = callback2(Stack.Stack, obj5);
  items1[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_4, obj);
};