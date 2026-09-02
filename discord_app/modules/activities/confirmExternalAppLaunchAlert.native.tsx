// === Module 9497: ConfirmActivityGateContent ===

// Module 9497 (ConfirmActivityGateContent)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import setDefault from "set" /* 4857 */;
import Button from "Button" /* 4928 */;
import registerAssetDefault from "registerAsset" /* 9498 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PRIVATE_APPS_HELP_ARTICLE } from "items3" /* 4506 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ConfirmActivityGateContent(activityName) {
  const tmp = callback3();
  let obj = { style: tmp.alertContainer, children: null };
  obj = { source: registerAssetDefault, style: tmp.announcementBirb };
  const items = [callback(closure_3, obj), , , ];
  obj = { style: tmp.alertEyebrowText, variant: "eyebrow", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["06YebE"]);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.format(getSystemLocale.t["Z/eMDT"], { activityName: activityName.application.name });
  items[2] = callback(Text.Text, obj1);
  const obj3 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: null };
  const intl3 = getSystemLocale.intl;
  obj3[2] = intl3.string(getSystemLocale.t.z81WwD);
  items[3] = callback(Text.Text, obj3);
  obj[1] = items;
  return callback2(closure_4, obj);
}
function LinkButton() {
  let obj = { style: callback3().linkWrapper, children: null };
  obj = {
    variant: "secondary",
    size: "sm",
    onPress() {
      callback(table[9]).openURL(closure_5);
    },
    text: null
  };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.E0gf5l);
  obj[1] = callback(Button.Button, obj);
  return callback(closure_4, obj);
}
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
const result = require("set").fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  ({ application, onConfirm, onCancel } = arg0);
  let obj = setDefault;
  obj = { title: "", children: callback(ConfirmActivityGateContent, { application }), onConfirm, confirmText: null, onCancel: null, cancelText: null, footer: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["3PatSz"]);
  obj[4] = onCancel;
  const intl2 = getSystemLocale.intl;
  obj[5] = intl2.string(getSystemLocale.t["ETE/oC"]);
  obj[6] = callback(LinkButton, {});
  return Promise.resolve(obj.show(obj));
};