// === Module 12260: ConjureLiveBehindTip ===

// Module 12260 (ConjureLiveBehindTip)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import UploadIcon from "UploadIcon" /* 9762 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12261 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(12250).CONJURE_LIVE_BEHIND_TIP_BASE);
obj.render = function render(arg0, context) {
  const publish = context.context.publish;
  let tmp2 = null;
  if (null != publish) {
    const obj = { icon: UploadIcon.UploadIcon, onDismiss: tmp, children: null };
    const intl = util.intl;
    const obj2 = {
      onPublish() {
          return publish.run("outdated_notice");
        }
    };
    obj.children = intl.format(_modDef3830.fWfeZ8, obj2);
    tmp2 = jsx(ConjureTipHintDefault, { icon: UploadIcon.UploadIcon, onDismiss: tmp, children: null });
  }
  return tmp2;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;