// discord_app/modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getAlertModalItemKey from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.DnKHuV);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["1EPySE"]);
  obj = { onPress: onConfirm.onConfirm, text: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.nhJ8OC);
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "confirm"), ];
  obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["7eZ3ji"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "add-profile-picture");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey.AlertActions, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
};