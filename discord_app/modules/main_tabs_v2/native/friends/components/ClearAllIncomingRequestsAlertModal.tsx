// === Module 16948: ClearAllIncomingRequestsAlertModal ===

// Module 16948 (ClearAllIncomingRequestsAlertModal)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1, incomingRequestCount;

let closure_4;
let hasOwnProperty;
function handleConfirm() {
  return obj(...arguments);
}
let obj = function _handleConfirm() {
  obj = _asyncToGenerator(async () => {
    let obj2;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            const obj5 = { value: obj2.clearPendingRelationships(), done: false };
            obj2 = RelationshipActionCreatorsDefault;
            return obj5;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp6) {
        c0 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((incomingRequestCount) => {
  let first;
  let intl3;
  let intl4;
  let items;
  let tmp12;
  let tmp16;
  let tmp6;
  let tmp8;
  obj = react2;
  const cResult = obj.c(7);
  incomingRequestCount = incomingRequestCount.incomingRequestCount;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t.z2pFjo);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== incomingRequestCount) {
    const intl2 = intl5.intl;
    const obj2 = { incomingRequestCount };
    const formatToPlainStringResult = intl2.formatToPlainString(intl5.t["0nTvEw"], obj2);
    cResult[1] = incomingRequestCount;
    cResult[2] = formatToPlainStringResult;
    tmp6 = formatToPlainStringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "destructive", onPress: handleConfirm, text: intl3.string(intl5.t["cY+Oob"]) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl5.intl;
    const tmp11 = React3(AlertActionButton, obj3, "confirm");
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { children: items };
    items = [tmp8, ];
    const AlertActions = AlertModal2.AlertActions;
    const obj5 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
    const AlertActionButton2 = AlertModal2.AlertActionButton;
    intl4 = intl5.intl;
    items[1] = React3(AlertActionButton2, obj5, "cancel");
    const tmp15 = hasOwnProperty(AlertActions, obj4);
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const obj6 = { title: first, content: tmp6, actions: tmp12 };
    const tmp18 = React3(AlertModal2.AlertModal, obj6);
    cResult[5] = tmp6;
    cResult[6] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[6];
  }
  return tmp16;
}) : ((incomingRequestCount) => {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  incomingRequestCount = incomingRequestCount.incomingRequestCount;
  obj = { title: intl.string(intl5.t.z2pFjo), content: intl2.formatToPlainString(intl5.t["0nTvEw"], { incomingRequestCount }), actions: hasOwnProperty(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", onPress: handleConfirm, text: intl3.string(intl5.t["cY+Oob"]) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React3(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React3(AlertActionButton2, obj4, "cancel");
  return React3(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default tmp4;