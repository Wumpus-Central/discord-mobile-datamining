// discord_app/modules/voice_calls/native/ConfirmStartCall.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
function ConfirmStartCall(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.HlAPoq);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["cRW4D/"]);
  obj = { children: null };
  obj = { variant: "active", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.rimG2R);
  obj[2] = onConfirm.onConfirm;
  const items = [callback(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  items[1] = callback(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback2(require(4628) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4628) /* getAlertModalItemKey */.AlertModal, obj);
}
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  let obj = require(4625) /* useAlertStore */;
  obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", callback(ConfirmStartCall, obj));
};