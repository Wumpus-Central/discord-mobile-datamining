// discord_app/modules/activities/confirmActivityAgeGateAlert.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Button from "../../design/void/native.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import obj132Default from "../../actions/AlertActionCreators.tsx";
import SvgComponentDefault from "native/ActivityAnnouncement.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
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