// discord_app/modules/conjure/tips/native/ConjureLiveBehindTip.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import useConjureStartPublishDefault from "../../publish/native/useConjureStartPublish.tsx";
import ConjureTipHintDefault from "ConjureTipHint.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function LiveBehindHint(arg0) {
  ({ projectId, publish, onDismiss } = arg0);
  closure_0 = useConjureStartPublishDefault(projectId, publish);
  const obj = { icon: UploadIcon.UploadIcon, onDismiss, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef3868.fWfeZ8, {
    onPublish() {
      return closure_0("outdated_notice");
    },
  });
  return jsx(ConjureTipHintDefault, { icon: UploadIcon.UploadIcon, onDismiss, children: null });
}
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(12609).CONJURE_LIVE_BEHIND_TIP_BASE);
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
