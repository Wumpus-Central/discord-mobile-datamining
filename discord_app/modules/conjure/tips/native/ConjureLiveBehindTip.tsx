// discord_app/modules/conjure/tips/native/ConjureLiveBehindTip.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3831 from "../../intl/ConjureUntranslated.messages.js";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import useConjureStartPublishDefault from "../../publish/native/useConjureStartPublish.tsx";
import ConjureTipHintDefault from "ConjureTipHint.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LiveBehindHint(onDismiss) {
      const cResult = c.c(5);
      onDismiss = onDismiss.onDismiss;
      ({ projectId, publish } = onDismiss);
      const tmp5 = useConjureStartPublishDefault(projectId, publish);
      closure_0 = tmp5;
      if (cResult[0] !== tmp5) {
        const intl = util.intl;
        const obj2 = {
          onPublish() {
            return closure_0("outdated_notice");
          },
        };
        const formatResult = intl.format(_modDef3831.fWfeZ8, obj2);
        cResult[0] = tmp5;
        cResult[1] = formatResult;
        let tmp6 = formatResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === onDismiss) {
        if (cResult[3] === tmp6) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj3 = { icon: null, onDismiss: null, children: null };
      obj3.icon = UploadIcon.UploadIcon;
      obj3.onDismiss = onDismiss;
      obj3.children = tmp6;
      const tmp10 = jsx(ConjureTipHintDefault, { icon: null, onDismiss: null, children: null });
      cResult[2] = onDismiss;
      cResult[3] = tmp6;
      cResult[4] = tmp10;
      tmp8 = tmp10;
      const tmp4Result = ConjureTipHintDefault;
    }
  : function LiveBehindHint(arg0) {
      ({ projectId, publish, onDismiss } = arg0);
      closure_0 = useConjureStartPublishDefault(projectId, publish);
      const obj = { icon: UploadIcon.UploadIcon, onDismiss, children: null };
      const intl = util.intl;
      obj.children = intl.format(_modDef3831.fWfeZ8, {
        onPublish() {
          return closure_0("outdated_notice");
        },
      });
      return jsx(ConjureTipHintDefault, { icon: UploadIcon.UploadIcon, onDismiss, children: null });
    };
let obj2 = {};
const merged = Object.assign(fn(12323).CONJURE_LIVE_BEHIND_TIP_BASE);
obj2.render = function render(arg0, context) {
  const publish = context.context.publish;
  let tmp3 = null;
  if (null != publish) {
    const obj = { projectId: tmp, publish, onDismiss: tmp2 };
    tmp3 = <closure_4 projectId={tmp} publish={publish} onDismiss={tmp2} />;
  }
  return tmp3;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj2;
