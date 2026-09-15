// discord_app/modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2979 from "../ManualReview.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal() {
  let obj = { title: null, content: null, actions: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef2979.AA3xYb);
  const intl2 = util.intl;
  obj.content = intl2.format(_modDef2979["2+f8w1"], {
    contentAndSettingsHook(children, key) {
      return jsx(
        Text_Text.Text,
        {
          variant: "text-md/normal",
          color: "text-link",
          onPress() {
            const obj = closure_1_1(8532);
            const intl = closure_1_0(1115).intl;
            return obj.openUrl(closure_1_1(2025).getArticleURL(intl.string(closure_1_1(2979).agiNYw)));
          },
          children,
        },
        key,
      );
    },
  });
  const obj3 = { children: null };
  const obj4 = { text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["NX+WJN"]);
  obj3.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
}
