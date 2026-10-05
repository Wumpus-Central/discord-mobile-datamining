// === Module 16701: ConjurePublishNoticeLine ===

// Module 16701 (ConjurePublishNoticeLine)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useConjurePublishAction from "useConjurePublishAction" /* 16614 */;
import conjureReminderSlot from "conjureReminderSlot" /* 16704 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useConjurePublishActionDefault = useConjurePublishAction;
let importDefault;

let tmp4;
const _modDef3723 = tmp4(3723);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let notice;
  let projectId;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  ({ projectId, notice } = arg0);
  if (cResult[0] === notice) {
    let tmp2;
    if (cResult[1] === projectId) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  if ("outdated" === notice) {
    tmp5 = <closure_6 projectId={projectId} />;
  } else {
    tmp5 = <closure_5 projectId={projectId} notice={notice} />;
  }
  cResult[0] = notice;
  cResult[1] = projectId;
  cResult[2] = tmp5;
  tmp2 = tmp5;
}) : ((arg0) => {
  let notice;
  let projectId;
  let tmp3;
  ({ projectId, notice } = arg0);
  if ("outdated" === notice) {
    tmp3 = <closure_6 projectId={projectId} />;
  } else {
    tmp3 = <closure_5 projectId={projectId} notice={notice} />;
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(9);
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = react.useContext(projectId(16614).ConjurePublishActionContext);
  const tmp5 = context(16702)(projectId);
  if (cResult[0] === context) {
    let tmp6;
    if (cResult[1] === projectId) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      if (cResult[4] === tmp5) {
        let tmp7;
        let tmp9;
        if (cResult[5] === notice) {
          tmp7 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const tmp11 = jsx(tmp(4886).Text, { variant: "text-md/normal", color: "text-default", children: tmp7 });
          cResult[7] = tmp7;
          cResult[8] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const intl = tmp(1126).intl;
    const format = intl.format;
    const obj3 = { name: tmp5, onOpen: tmp6 };
    const tmpResult = tmp(16703);
    const formatResult = format(tmpResult.publishNoticeMessage(notice), obj3);
    cResult[3] = tmp6;
    cResult[4] = tmp5;
    cResult[5] = notice;
    cResult[6] = formatResult;
    tmp7 = formatResult;
  }
  const fn = function l() {
    if (null != context) {
      const obj = useConjurePublishAction;
      const result = obj.openConjurePublishedApp(projectId, tmp);
    }
  };
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = react.useContext(projectId(16614).ConjurePublishActionContext);
  const items = [context, projectId];
  const tmp2 = context(16702)(projectId);
  const callback = react.useCallback(() => {
    if (null != context) {
      const obj = useConjurePublishAction;
      const result = obj.openConjurePublishedApp(projectId, tmp);
    }
  }, items);
  const Text = projectId(4886).Text;
  const intl = projectId(1126).intl;
  const format = intl.format;
  const obj2 = projectId(16703);
  return <Text variant="text-md/normal" color="text-default">{format(obj2.publishNoticeMessage(notice), { name: tmp2, onOpen: callback })}</Text>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_1;
  let obj = projectId(576);
  const cResult = obj.c(5);
  projectId = projectId.projectId;
  const tmp5 = useConjurePublishActionDefault(projectId);
  importDefault = tmp5;
  let tmp6 = null;
  if (null != tmp5) {
    if (cResult[0] === projectId) {
      let tmp7;
      let tmp9;
      if (cResult[1] === tmp5) {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp7) {
        const tmp11 = jsx(projectId(4886).Text, { variant: "text-xs/normal", color: "text-muted", children: tmp7 });
        cResult[3] = tmp7;
        cResult[4] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[4];
      }
      tmp6 = tmp9;
    }
    const intl = tmp(1126).intl;
    const obj3 = {
      action: tmp5.label,
      onUpdate() {
          const obj = conjureReminderSlot;
          const result = obj.markConjureReminderActivity(projectId);
          closure_1.run("outdated_notice");
        }
    };
    const formatResult = intl.format(_modDef3723.X8tdbS, obj3);
    cResult[0] = projectId;
    cResult[1] = tmp5;
    cResult[2] = formatResult;
    tmp7 = formatResult;
  }
  return tmp6;
}) : ((projectId) => {
  let closure_1;
  projectId = projectId.projectId;
  importDefault = undefined;
  const tmp3 = useConjurePublishActionDefault(projectId);
  importDefault = tmp3;
  let tmp4 = null;
  if (null != tmp3) {
    const Text = projectId(4886).Text;
    const intl = projectId(1126).intl;
    const obj2 = {
      action: tmp3.label,
      onUpdate() {
          const obj = conjureReminderSlot;
          const result = obj.markConjureReminderActivity(projectId);
          closure_1.run("outdated_notice");
        }
    };
    tmp4 = <Text variant="text-xs/normal" color="text-muted">{intl.format(_modDef3723.X8tdbS, obj2)}</Text>;
  }
  return tmp4;
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default tmp2;