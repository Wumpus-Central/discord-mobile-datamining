// discord_app/modules/conjure/tips/native/ConjureLiveBehindTip.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import ConjureTipHintDefault from "ConjureTipHint.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(12068).CONJURE_LIVE_BEHIND_TIP_BASE);
obj.render = function render(arg0, context) {
  const publish = context.context.publish;
  let tmp2 = null;
  if (null != publish) {
    const obj = { icon: UploadIcon.UploadIcon, onDismiss: tmp, children: null };
    const intl = util.intl;
    const obj2 = {
      onPublish() {
        return publish.run("outdated_notice");
      },
    };
    obj.children = intl.format(_modDef3865.fWfeZ8, obj2);
    tmp2 = jsx(ConjureTipHintDefault, { icon: UploadIcon.UploadIcon, onDismiss: tmp, children: null });
  }
  return tmp2;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
