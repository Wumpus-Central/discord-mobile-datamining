// === Module 7507: PermissionsAlertModal ===

// Module 7507 (PermissionsAlertModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5305 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PermissionsAlertModal(arg0) {
  const cResult = c.c(10);
  ({ title, body, onConfirm } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.jVcuVY);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onConfirm) {
    const obj2 = { onPress: onConfirm, text: first };
    const tmp8 = React2(AlertModal.AlertActionButton, obj2, "confirm");
    cResult[1] = onConfirm;
    cResult[2] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "secondary", text: null };
    const intl2 = util.intl;
    obj3.text = intl2.string(util.t.cpT0Cq);
    const tmp11 = React2(AlertModal.AlertActionButton, obj3, "close");
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const obj4 = { children: null };
    const items = [tmp6, tmp9];
    obj4.children = items;
    const tmp14 = React3(AlertModal.AlertActions, obj4);
    cResult[4] = tmp6;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === body) {
    if (cResult[7] === tmp12) {
      if (cResult[8] === title) {
        let tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  const tmp16 = React2(AlertModal.AlertModal, { title, content: body, actions: tmp12 });
  cResult[6] = body;
  cResult[7] = tmp12;
  cResult[8] = title;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : (function PermissionsAlertModal(arg0) {
  ({ title, body, onConfirm } = arg0);
  const obj = { title, content: body, actions: null };
  const obj2 = { children: null };
  const obj3 = { onPress: onConfirm, text: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t.jVcuVY);
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.cpT0Cq);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "close");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
});