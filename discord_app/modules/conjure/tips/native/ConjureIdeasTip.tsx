// discord_app/modules/conjure/tips/native/ConjureIdeasTip.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import LightbulbIcon from "../../../../design/components/Icon/native/redesign/generated/LightbulbIcon.tsx";
import ConjureTipHintDefault from "ConjureTipHint.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(12331).CONJURE_IDEAS_TIP_BASE);
obj.render = function render(arg0, context) {
  context = context.context;
  const obj = { icon: LightbulbIcon.LightbulbIcon, onDismiss: context.dismiss, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef3830.cjZvW9, {
    onInspire() {
      const onAskForIdeas = context.onAskForIdeas;
      let onAskForIdeasResult;
      if (onAskForIdeas != null) {
        onAskForIdeasResult = onAskForIdeas();
      }
      return onAskForIdeasResult;
    },
  });
  return jsx(ConjureTipHintDefault, { icon: LightbulbIcon.LightbulbIcon, onDismiss: context.dismiss, children: null });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasTip.tsx");

export const CONJURE_IDEAS_TIP = obj;
