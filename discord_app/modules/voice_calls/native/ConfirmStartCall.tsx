// discord_app/modules/voice_calls/native/ConfirmStartCall.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import getAlertModalItemKey from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function ConfirmStartCall(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.HlAPoq);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["cRW4D/"]);
  obj = { variant: "active", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.rimG2R);
  obj[2] = onConfirm.onConfirm;
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "confirm"), ];
  obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["ETE/oC"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey.AlertActions, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
}
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  const obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", callback(ConfirmStartCall, obj));
};