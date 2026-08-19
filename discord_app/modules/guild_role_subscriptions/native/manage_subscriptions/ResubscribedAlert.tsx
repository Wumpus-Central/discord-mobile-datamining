// === Module 14564: ResubscribedAlert ===

// Module 14564 (ResubscribedAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import registerAssetDefault from "registerAsset" /* 14565 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: 87, height: 87 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = callback3();
  let obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["NX+WJN"]);
  obj[1] = onClose.onClose;
  obj[2] = tmp.container;
  obj = { source: registerAssetDefault, style: tmp.headerImage };
  const items = [callback(closure_4, obj), callback(Button.Spacer, { size: 27 }), , , ];
  obj1 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.oPV2cy);
  items[2] = callback(Text.Text, obj1);
  items[3] = callback(Button.Spacer, { size: 12 });
  const obj2 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl3 = getSystemLocale.intl;
  obj2[3] = intl3.string(getSystemLocale.t.DdRizV);
  items[4] = callback(Text.Text, obj2);
  obj[1] = items;
  obj[3] = callback2(closure_3, obj);
  return callback(componentDidMountDefault, obj);
};