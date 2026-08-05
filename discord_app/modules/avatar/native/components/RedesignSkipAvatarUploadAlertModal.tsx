// discord_app/modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.DnKHuV);
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["1EPySE"]);
  obj = { children: null };
  obj = { onPress: onConfirm.onConfirm, text: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.nhJ8OC);
  const items = [callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["7eZ3ji"]);
  items[1] = callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj1, "add-profile-picture");
  obj[0] = items;
  obj[2] = callback2(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, obj);
};