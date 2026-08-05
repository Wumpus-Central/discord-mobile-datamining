// discord_app/modules/voice_calls/native/ConfirmStartCall.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
function ConfirmStartCall(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.HlAPoq);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["cRW4D/"]);
  obj = { children: null };
  obj = { variant: "active", text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.rimG2R);
  obj[2] = onConfirm.onConfirm;
  const items = [callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["ETE/oC"]);
  items[1] = callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback2(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, obj);
}
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", callback(ConfirmStartCall, obj));
};