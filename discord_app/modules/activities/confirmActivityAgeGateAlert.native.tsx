// discord_app/modules/activities/confirmActivityAgeGateAlert.native.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { set } from "../../actions/AlertActionCreators.tsx";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { Button } from "../../design/void/native.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { SvgComponent } from "native/ActivityAnnouncement.tsx";

let c4;
let c5;
const require = arg1;
function ConfirmActivityGateContent(children) {
  const tmp = createCacheKey();
  let obj = { style: tmp.alertContainer, children: null };
  const items = [callback(SvgComponent, {}), ];
  obj = { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: null };
createCacheKey = { fontSize: 16, lineHeight: 24, color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  let application;
  let onAgree;
  let onDisagree;
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
  return Promise.resolve(set.show(obj));
};