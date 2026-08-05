// discord_app/modules/native_permissions/mobile/PermissionsAlertModal.tsx
import "noop";
import jsxProd from "jsxProd";
import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  let body;
  let onConfirm;
  let title;
  ({ title, body, onConfirm } = arg0);
  let obj = { title, content: body, actions: null };
  obj = { children: null };
  obj = { onPress: onConfirm, text: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t.jVcuVY);
  const items = [callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj1[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.cpT0Cq);
  items[1] = callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj1, "close");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, obj);
  return callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, obj);
};