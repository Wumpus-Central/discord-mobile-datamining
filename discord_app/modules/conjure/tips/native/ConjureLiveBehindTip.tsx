// === Module 12348: ConjureLiveBehindTip ===

// Module 12348 (ConjureLiveBehindTip)
import _modDef3830 from "module_3830" /* 3830 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12287 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12342 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function LiveBehindHint(projectId) {
  const cResult = projectId(576).c(6);
  projectId = projectId.projectId;
  const onDismiss = projectId.onDismiss;
  const context = noop.useContext(projectId(11874).ConjurePublishActionContext);
  if (cResult[0] === context) {
    if (cResult[1] === projectId) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === onDismiss) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { icon: tmp(9804).UploadIcon, onDismiss, children: tmp5 };
    const tmp11 = jsx(context(12342), { icon: tmp(9804).UploadIcon, onDismiss, children: tmp5 });
    cResult[3] = onDismiss;
    cResult[4] = tmp5;
    cResult[5] = tmp11;
    tmp7 = tmp11;
    const tmp10 = context(12342);
  }
  const intl = tmp(1128).intl;
  const formatResult = intl.format(context(3830).fWfeZ8, {
    onPublish() {
      if (null != context) {
        ConjurePublishSheetDefault(projectId, tmp.guildId, "outdated_notice");
      }
    }
  });
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = formatResult;
  tmp5 = formatResult;
  const obj = projectId(576);
  const obj3 = {
    onPublish() {
      if (null != context) {
        ConjurePublishSheetDefault(projectId, tmp.guildId, "outdated_notice");
      }
    }
  };
}) : (function LiveBehindHint(projectId) {
  projectId = projectId.projectId;
  importDefault = noop.useContext(projectId(11874).ConjurePublishActionContext);
  const obj = { icon: projectId(9804).UploadIcon, onDismiss: projectId.onDismiss, children: null };
  const intl = projectId(1128).intl;
  obj.children = intl.format(_modDef3830.fWfeZ8, {
    onPublish() {
      if (null != closure_1) {
        ConjurePublishSheetDefault(projectId, tmp.guildId, "outdated_notice");
      }
    }
  });
  return jsx(ConjureTipHintDefault, { icon: projectId(9804).UploadIcon, onDismiss: projectId.onDismiss, children: null });
});
let obj2 = {};
const merged = Object.assign(fn(12330).CONJURE_LIVE_BEHIND_TIP_BASE);
obj2.render = function render(arg0, context) {
  let tmp3 = null;
  if (null != context.context.publish) {
    const obj = { projectId: tmp, onDismiss: tmp2 };
    tmp3 = <closure_5 projectId={tmp} onDismiss={tmp2} />;
  }
  return tmp3;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj2;