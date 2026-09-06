// === Module 16778: ClearAllIncomingRequestsAlertModal ===

// Module 16778 (ClearAllIncomingRequestsAlertModal)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function handleConfirm() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _handleConfirm() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj1 = RelationshipActionCreatorsDefault;
          c1 = 1;
          c0 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.clearPendingRelationships();
          return obj1;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
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
};
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.z2pFjo);
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t["0nTvEw"], { incomingRequestCount: incomingRequestCount.incomingRequestCount });
  obj = { children: null };
  obj = { variant: "destructive", onPress: handleConfirm, text: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["cY+Oob"]);
  const items = [React4(AlertModal.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["ETE/oC"]);
  items[1] = React4(AlertModal.AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = hasOwnProperty(AlertModal.AlertActions, obj);
  return React4(AlertModal.AlertModal, obj);
};