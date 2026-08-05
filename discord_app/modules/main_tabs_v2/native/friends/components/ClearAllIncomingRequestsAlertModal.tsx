// discord_app/modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx
import getSystemLocale from "getSystemLocale";
import "noop";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
function handleConfirm() {
  const self = this;
  const apply = _handleConfirm.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleConfirm() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj1 = v0(outer1_2[3]);
            v0 = 1;
            c0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.clearPendingRelationships();
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c0 = tmp;
        throw tmp7;
      }
    }
  });
  const _handleConfirm = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.z2pFjo);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t["0nTvEw"], { incomingRequestCount: incomingRequestCount.incomingRequestCount });
  obj = { children: null };
  obj = { variant: "destructive", onPress: handleConfirm, text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["cY+Oob"]);
  const items = [callback2(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  items[1] = callback2(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback3(require(4628) /* getAlertModalItemKey */.AlertActions, obj);
  return callback2(require(4628) /* getAlertModalItemKey */.AlertModal, obj);
};