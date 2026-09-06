// discord_app/modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2978 from "../ManualReview.messages.js";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2978.AA3xYb);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef2978["2+f8w1"]);
  obj = { children: null };
  obj = { text: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["NX+WJN"]);
  obj.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { text: null });
  return jsx(AlertModal.AlertModal, { text: null });
}
