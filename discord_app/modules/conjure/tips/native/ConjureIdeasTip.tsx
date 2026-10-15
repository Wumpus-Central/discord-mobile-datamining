// === Module 12064: ConjureIdeasTip ===

// Module 12064 (ConjureIdeasTip)
import util from "util" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import LightbulbIcon from "LightbulbIcon" /* 9784 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12055 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(12046).CONJURE_IDEAS_TIP_BASE);
obj.render = function render(arg0, context) {
  context = context.context;
  const obj = { icon: LightbulbIcon.LightbulbIcon, onDismiss: context.dismiss, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef3862.cjZvW9, {
    onInspire() {
      const onAskForIdeas = context.onAskForIdeas;
      let onAskForIdeasResult;
      if (onAskForIdeas != null) {
        onAskForIdeasResult = onAskForIdeas();
      }
      return onAskForIdeasResult;
    }
  });
  return jsx(ConjureTipHintDefault, { icon: LightbulbIcon.LightbulbIcon, onDismiss: context.dismiss, children: null });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasTip.tsx");

export const CONJURE_IDEAS_TIP = obj;