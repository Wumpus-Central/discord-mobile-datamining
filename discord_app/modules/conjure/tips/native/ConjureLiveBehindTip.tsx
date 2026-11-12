// === Module 13510: ConjureLiveBehindTip ===

// Module 13510 (ConjureLiveBehindTip)
import util from "util" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import UploadIcon from "UploadIcon" /* 10664 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13072 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 13505 */;
import noop from "module_19" /* 19 */;

require = fn;
function LiveBehindHint(arg0) {
  ({ projectId, publish, onDismiss } = arg0);
  closure_0 = useConjureStartPublishDefault(projectId, publish);
  const obj = { icon: UploadIcon.UploadIcon, onDismiss, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef4079.fWfeZ8, {
    onPublish() {
      return closure_0("outdated_notice");
    }
  });
  return jsx(ConjureTipHintDefault, { icon: UploadIcon.UploadIcon, onDismiss, children: null });
}
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(13494).CONJURE_LIVE_BEHIND_TIP_BASE);
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