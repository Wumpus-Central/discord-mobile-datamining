// === Module 17255: ClearAllIncomingRequestsAlertModal ===

// Module 17255 (ClearAllIncomingRequestsAlertModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5303 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7004 */;
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
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c1 = 1;
          c0 = 1;
          const obj5 = { value: RelationshipActionCreatorsDefault.clearPendingRelationships(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp7) {
      c0 = tmp;
      throw tmp7;
    }
  }
};
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  const cResult = c.c(7);
  incomingRequestCount = incomingRequestCount.incomingRequestCount;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.z2pFjo);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== incomingRequestCount) {
    const intl2 = util.intl;
    const obj2 = { incomingRequestCount };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t["0nTvEw"], obj2);
    cResult[1] = incomingRequestCount;
    cResult[2] = formatToPlainStringResult;
    let tmp6 = formatToPlainStringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "destructive", onPress: handleConfirm, text: null };
    const intl3 = util.intl;
    obj3.text = intl3.string(util.t["cY+Oob"]);
    const tmp11 = React4(AlertModal.AlertActionButton, obj3, "confirm");
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { children: null };
    const items = [tmp8, ];
    const obj5 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(util.t["ETE/oC"]);
    items[1] = React4(AlertModal.AlertActionButton, obj5, "cancel");
    obj4.children = items;
    const tmp15 = hasOwnProperty(AlertModal.AlertActions, obj4);
    cResult[4] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const obj6 = { title: first, content: tmp6, actions: tmp12 };
    const tmp18 = React4(AlertModal.AlertModal, obj6);
    cResult[5] = tmp6;
    cResult[6] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[6];
  }
  return tmp16;
}) : (function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.z2pFjo);
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t["0nTvEw"], { incomingRequestCount: incomingRequestCount.incomingRequestCount });
  const obj2 = { children: null };
  const obj3 = { variant: "destructive", onPress: handleConfirm, text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["cY+Oob"]);
  const items = [React4(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["ETE/oC"]);
  items[1] = React4(AlertModal.AlertActionButton, obj4, "cancel");
  obj2.children = items;
  obj.actions = hasOwnProperty(AlertModal.AlertActions, obj2);
  return React4(AlertModal.AlertModal, obj);
});