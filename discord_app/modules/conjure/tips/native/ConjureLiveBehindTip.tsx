// === Module 18464: ConjureLiveBehindTip ===

// Module 18464 (ConjureLiveBehindTip)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import UploadIcon from "UploadIcon" /* 9487 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 18253 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 18459 */;
import noop from "module_19" /* 19 */;

require = fn;
function LiveBehindHint(arg0) {
  ({ projectId, publish, onDismiss } = arg0);
  closure_0 = useConjureStartPublishDefault(projectId, publish);
  const obj = { icon: UploadIcon.UploadIcon, onDismiss, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef4190.fWfeZ8, {
    onPublish() {
      return closure_0("outdated_notice");
    }
  });
  return jsx(ConjureTipHintDefault, { icon: UploadIcon.UploadIcon, onDismiss, children: null });
}
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(18448).CONJURE_LIVE_BEHIND_TIP_BASE);
obj.render = function render(arg0, context) {
  const publish = context.context.publish;
  let tmp3 = null;
  if (null != publish) {
    const obj = { projectId: tmp, publish, onDismiss: tmp2 };
    tmp3 = <LiveBehindHint projectId={tmp} publish={publish} onDismiss={tmp2} />;
  }
  return tmp3;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;