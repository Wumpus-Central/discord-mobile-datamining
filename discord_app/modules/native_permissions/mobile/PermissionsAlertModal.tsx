// === Module 7284: PermissionsAlertModal ===

// Module 7284 (PermissionsAlertModal)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let first;
  let intl2;
  let items;
  let onConfirm;
  let title;
  let tmp12;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  ({ title, body, onConfirm } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.jVcuVY);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onConfirm) {
    const obj2 = { onPress: onConfirm, text: first };
    const tmp8 = React2(AlertModal2.AlertActionButton, obj2, "confirm");
    cResult[1] = onConfirm;
    cResult[2] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "secondary", text: intl2.string(intl3.t.cpT0Cq) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl2 = intl3.intl;
    const tmp11 = React2(AlertActionButton, obj3, "close");
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const obj4 = { children: items };
    items = [tmp6, tmp9];
    const tmp14 = _false(AlertModal2.AlertActions, obj4);
    cResult[4] = tmp6;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === body) {
    if (cResult[7] === tmp12) {
      let tmp15;
      if (cResult[8] === title) {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  const tmp16 = React2(AlertModal2.AlertModal, { title, content: body, actions: tmp12 });
  cResult[6] = body;
  cResult[7] = tmp12;
  cResult[8] = title;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((arg0) => {
  let AlertActions;
  let body;
  let intl;
  let intl2;
  let items;
  let obj2;
  let onConfirm;
  let title;
  ({ title, body, onConfirm } = arg0);
  const obj = { title, content: body, actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { onPress: onConfirm, text: intl.string(intl3.t.jVcuVY) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl = intl3.intl;
  items = [React2(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl2.string(intl3.t.cpT0Cq) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl2 = intl3.intl;
  items[1] = React2(AlertActionButton2, obj4, "close");
  return React2(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default tmp4;