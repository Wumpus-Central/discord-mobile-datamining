// discord_app/modules/user_settings/account/native/SMSBackupWarningAlert.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({
  title: { textAlign: "center" },
  body: { marginTop: 8, textAlign: "center", lineHeight: 18 },
});
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default function SMSBackupWarningAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = callback3();
  let obj = { cancelText: null, confirmText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1236).intl;
  obj[0] = intl.string(onConfirm(1236).t["ETE/oC"]);
  const intl2 = onConfirm(1236).intl;
  obj[1] = intl2.string(onConfirm(1236).t.N86XcP);
  obj[2] = function onConfirm() {
    onConfirm();
    closure_1_1(closure_1_2[5]).close();
  };
  obj[3] = function onCancel() {
    return callback(table[5]).close();
  };
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = onConfirm(1236).intl;
  obj[4] = intl3.string(onConfirm(1236).t.Ed4XQB);
  const items = [callback(onConfirm(4474).Text, obj)];
  obj = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = onConfirm(1236).intl;
  obj[3] = intl4.string(onConfirm(1236).t.EDU2Eg);
  items[1] = callback(onConfirm(4474).Text, obj);
  obj[4] = items;
  return callback2(componentDidMountDefault, obj);
}
