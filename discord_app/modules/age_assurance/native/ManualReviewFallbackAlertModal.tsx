// === Module 8656: ManualReviewFallbackAlertModal ===

// Module 8656 (ManualReviewFallbackAlertModal)
import util from "util" /* 1114 */;
import _modDef2978 from "module_2978" /* 2978 */;
import AlertModal from "AlertModal" /* 4955 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8657 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default function ManualReviewFallbackAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2978["+c5sxg"]);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef2978["RFLH++"]);
  obj = { children: null };
  obj = { text: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["NX+WJN"]);
  const items = [React3(AlertModal.AlertActionButton, obj, "got-it"), ];
  const obj1 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(_modDef2978.Z61nkt);
  obj1.onPress = function onPress() {
    return ManualReviewActionCreators.handleManualReviewCta();
  };
  items[1] = React3(AlertModal.AlertActionButton, obj1, "request-manual-review");
  obj.children = items;
  obj.actions = React4(AlertModal.AlertActions, obj);
  return React3(AlertModal.AlertModal, obj);
};