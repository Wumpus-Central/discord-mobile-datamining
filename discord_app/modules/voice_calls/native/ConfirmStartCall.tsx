// discord_app/modules/voice_calls/native/ConfirmStartCall.tsx
import "noop";
import jsxProd from "jsxProd";
import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { useAlertStore } from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c3;
let obj1;
const require = arg1;
function ConfirmStartCall(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.HlAPoq);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["cRW4D/"]);
  obj = { children: null };
  obj = { variant: "active", text: null, onPress: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl3.string(getSystemLocale /* getSystemLocale */.t.rimG2R);
  obj[2] = onConfirm.onConfirm;
  const items = [callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj1[1] = intl4.string(getSystemLocale /* getSystemLocale */.t["ETE/oC"]);
  items[1] = callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, obj);
  return callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, obj);
}
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  let obj = useAlertStore /* useAlertStore */;
  obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", callback(ConfirmStartCall, obj));
};