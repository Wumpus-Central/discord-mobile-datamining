// === Module 8740: ConfirmActivityGateContent ===

// Module 8740 (ConfirmActivityGateContent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import obj132Default from "obj132" /* 4827 */;
import SvgComponentDefault from "SvgComponent" /* 8741 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function ConfirmActivityGateContent(children) {
  const tmp = callback3();
  const items = [callback(SvgComponentDefault, {}), ];
  const obj = { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { fontSize: 16, lineHeight: 24, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  ({ application, onAgree, onDisagree } = arg0);
  const intl = getSystemLocale.intl;
  let obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.OgmIqy, obj);
  obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.SSDPOF);
  obj[1] = callback(ConfirmActivityGateContent, { description: formatToPlainStringResult });
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t.hg1uxn);
  const intl4 = getSystemLocale.intl;
  obj[3] = intl4.string(getSystemLocale.t.wVq7uo);
  obj[4] = onAgree;
  obj[5] = onDisagree;
  obj[6] = Button.ButtonColors.RED;
  return Promise.resolve(obj132Default.show(obj));
};