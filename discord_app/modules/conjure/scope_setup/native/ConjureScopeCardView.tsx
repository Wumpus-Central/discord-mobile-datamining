// discord_app/modules/conjure/scope_setup/native/ConjureScopeCardView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureScopeServerCardDefault from "ConjureScopeServerCard.tsx";
import ConjureClarificationCardDefault from "../../clarification/native/ConjureClarificationCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
const obj2 = { container: { gap: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeCardView.tsx");

export default function ConjureScopeCardView(onInputFocusChange) {
  ({ projectId, card } = onInputFocusChange);
  const obj = { style: closure_6().container, children: null };
  if (true === card.serverStep) {
    const obj3 = { projectId, card };
    let tmp6 = React4(ConjureScopeServerCardDefault, obj3, card.clarification.id);
    let tmp3 = React4;
  } else {
    tmp3 = React4;
    const obj4 = {
      projectId,
      clarification: null,
      onSubmit: null,
      submitText: null,
      onBack: null,
      backText: null,
      hideSubmit: null,
      onInputFocusChange: null,
    };
    ({
      clarification: obj2.clarification,
      onSubmit: obj2.onSubmit,
      submitText: obj2.submitText,
      onBack: obj2.onBack,
      backText: obj2.backText,
      hideSubmit: obj2.hideSubmit,
    } = card);
    obj4.onInputFocusChange = onInputFocusChange.onInputFocusChange;
    tmp6 = React4(ConjureClarificationCardDefault, obj4, card.clarification.id);
  }
  const items = [tmp6];
  let tmp3Result = null;
  if (null != card.failure) {
    const obj7 = {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: card.failure,
    };
    tmp3Result = tmp3(Text_Text.Text, obj7);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
}
