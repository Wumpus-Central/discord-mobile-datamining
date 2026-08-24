// === Module 9842: XboxLinkEducation ===

// Module 9842 (XboxLinkEducation)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import styles from "styles" /* 9756 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  let obj = styles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj1 = combinedDefault;
  const articleURL = obj1.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: React.useMemo(() => ({ uri: callback(table[7]) }), []), style: callback3().image };
  const items = [callback(closure_4, obj1), , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.jHytat);
  items[1] = callback(Text.Text, obj2);
  const obj3 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = getSystemLocale.intl;
  obj3[3] = intl2.format(getSystemLocale.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = callback(Text.Text, obj3);
  obj[1] = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj6[2] = intl3.string(getSystemLocale.t.i4jeWR);
  obj6[3] = onClose.onClose;
  obj5[1] = callback(Button.Button, obj6);
  obj4[2] = callback(closure_5, obj5);
  items1[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_5, obj);
};