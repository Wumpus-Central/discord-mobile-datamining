// === Module 8940: ManualReviewFallbackAlertModal ===

// Module 8940 (ManualReviewFallbackAlertModal)
import util from "util" /* 1115 */;
import _modDef3100 from "module_3100" /* 3100 */;
import AlertModal from "AlertModal" /* 5199 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8941 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default function ManualReviewFallbackAlertModal() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3100["+c5sxg"]);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3100["RFLH++"]);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  const items = [React3(AlertModal.AlertActionButton, obj3, "got-it"), ];
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(_modDef3100.Z61nkt);
  obj4.onPress = function onPress() {
    return ManualReviewActionCreators.handleManualReviewCta();
  };
  items[1] = React3(AlertModal.AlertActionButton, obj4, "request-manual-review");
  obj2.children = items;
  obj.actions = React4(AlertModal.AlertActions, obj2);
  return React3(AlertModal.AlertModal, obj);
};