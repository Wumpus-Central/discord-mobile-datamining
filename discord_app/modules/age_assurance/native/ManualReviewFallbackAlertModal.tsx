// === Module 7715: ManualReviewFallbackAlertModal ===

// Module 7715 (ManualReviewFallbackAlertModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef3184 from "module_3184" /* 3184 */;
import AlertModal from "AlertModal" /* 5305 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 7716 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewFallbackAlertModal() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3184["+c5sxg"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(_modDef3184["RFLH++"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { text: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t["NX+WJN"]);
    const tmp11 = React3(AlertModal.AlertActionButton, obj2, "got-it");
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: tmp4, content: tmp5, actions: null };
    const obj4 = { children: null };
    const items = [tmp9, ];
    const obj5 = { variant: "secondary", text: null, onPress: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(_modDef3184.Z61nkt);
    obj5.onPress = function onPress() {
      return ManualReviewActionCreators.handleManualReviewCta();
    };
    items[1] = React3(AlertModal.AlertActionButton, obj5, "request-manual-review");
    obj4.children = items;
    obj3.actions = React4(AlertModal.AlertActions, obj4);
    const tmp16 = React3(AlertModal.AlertModal, obj3);
    cResult[3] = tmp16;
    let tmp12 = tmp16;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (function ManualReviewFallbackAlertModal() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3184["+c5sxg"]);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3184["RFLH++"]);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  const items = [React3(AlertModal.AlertActionButton, obj3, "got-it"), ];
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(_modDef3184.Z61nkt);
  obj4.onPress = function onPress() {
    return ManualReviewActionCreators.handleManualReviewCta();
  };
  items[1] = React3(AlertModal.AlertActionButton, obj4, "request-manual-review");
  obj2.children = items;
  obj.actions = React4(AlertModal.AlertActions, obj2);
  return React3(AlertModal.AlertModal, obj);
});