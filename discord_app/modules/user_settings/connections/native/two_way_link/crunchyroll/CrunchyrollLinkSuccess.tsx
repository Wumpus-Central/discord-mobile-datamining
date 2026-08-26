// === Module 10718: CrunchyrollLinkDiscordSuccess ===

// Module 10718 (CrunchyrollLinkDiscordSuccess)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import Button from "Button" /* 4879 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5500 */;
import styles from "styles" /* 10640 */;
import registerAssetDefault from "registerAsset" /* 10719 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  let obj = styles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = callback3();
  const items = [callback(closure_3, { source: registerAssetDefault, style: callback3().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.Fnvxvk);
  items[1] = callback(Text.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = getSystemLocale.intl;
  obj3[3] = intl2.string(getSystemLocale.t.YwXceg);
  items[2] = callback(Text.Text, obj3);
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj6[1] = intl3.string(getSystemLocale.t.i4jeWR);
  obj6[2] = onClose.onClose;
  obj5[1] = callback(Button.Button, obj6);
  obj4[2] = callback(closure_4, obj5);
  items1[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_4, obj);
};