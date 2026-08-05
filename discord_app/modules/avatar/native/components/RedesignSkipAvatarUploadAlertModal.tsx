// discord_app/modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx
import "noop";
import jsxProd from "jsxProd";
import { getAlertModalItemKey } from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.DnKHuV);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["1EPySE"]);
  obj = { children: null };
  obj = { onPress: onConfirm.onConfirm, text: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl3.string(getSystemLocale /* getSystemLocale */.t.nhJ8OC);
  const items = [callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj1[1] = intl4.string(getSystemLocale /* getSystemLocale */.t["7eZ3ji"]);
  items[1] = callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj1, "add-profile-picture");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, obj);
  return callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, obj);
};