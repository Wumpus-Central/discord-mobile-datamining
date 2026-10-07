// === Module 16722: ConjurePublishNoticeLine ===

// Module 16722 (ConjurePublishNoticeLine)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import useConjurePublishAction from "useConjurePublishAction" /* 16652 */;
import conjureReminderSlot from "conjureReminderSlot" /* 16725 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const useConjurePublishActionDefault = useConjurePublishAction;

const _modDef3753 = tmp4(3753);
require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(558);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(576).c(9);
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = noop.useContext(projectId(16652).ConjurePublishActionContext);
  const tmp5 = context(16723)(projectId);
  if (cResult[0] === context) {
    if (cResult[1] === projectId) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === notice) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp7 };
          const tmp11 = closure_5(tmp(4892).Text, obj2);
          cResult[7] = tmp7;
          cResult[8] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const intl = tmp(1126).intl;
    const obj3 = { name: tmp5, onOpen: tmp6 };
    const formatResult = intl.format(tmp(16724).publishNoticeMessage(notice), obj3);
    cResult[3] = tmp6;
    cResult[4] = tmp5;
    cResult[5] = notice;
    cResult[6] = formatResult;
    tmp7 = formatResult;
    const tmpResult = tmp(16724);
  }
  const fn = function o() {
    if (null != context) {
      const result = useConjurePublishAction.openConjurePublishedApp(projectId, tmp);
    }
  };
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp6 = fn;
  let obj = projectId(576);
}) : ((projectId) => {
  projectId = projectId.projectId;
  const context = noop.useContext(projectId(16652).ConjurePublishActionContext);
  const items = [context, projectId];
  const callback = noop.useCallback(() => {
    if (null != context) {
      const result = useConjurePublishAction.openConjurePublishedApp(projectId, tmp);
    }
  }, items);
  let obj = { variant: "text-md/normal", color: "text-default", children: null };
  const intl = projectId(1126).intl;
  const tmp2 = context(16723)(projectId);
  obj.children = intl.format(projectId(16724).publishNoticeMessage(projectId.notice), { name: tmp2, onOpen: callback });
  return closure_5(projectId(4892).Text, obj);
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(576).c(6);
  projectId = projectId.projectId;
  const tmp5 = useConjurePublishActionDefault(projectId);
  importDefault = tmp5;
  const obj = projectId(576);
  dependencyMap = _slicedToArray(noop.useState(false), 2)[1];
  if (null == tmp5) {
    return null;
  } else {
    if (!tmp7) {
      if (cResult[1] === projectId) {
        if (cResult[2] === tmp5) {
          let tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp8 };
          const tmp12 = closure_5(tmp(4892).Text, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp12;
        }
      }
      const intl = tmp(1126).intl;
      const obj3 = {
        action: tmp5.label,
        onUpdate() {
              closure_2(true);
              const result = conjureReminderSlot.markConjureReminderActivity(projectId);
              closure_1.run("outdated_notice");
            }
      };
      const formatResult = intl.format(_modDef3753.X8tdbS, obj3);
      cResult[1] = projectId;
      cResult[2] = tmp5;
      cResult[3] = formatResult;
      tmp8 = formatResult;
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = closure_5(closure_9, {});
      cResult[0] = tmp17;
      let first = tmp17;
    } else {
      first = cResult[0];
    }
  }
  const tmp6 = _slicedToArray(noop.useState(false), 2);
}) : ((projectId) => {
  projectId = projectId.projectId;
  const tmp3 = useConjurePublishActionDefault(projectId);
  importDefault = tmp3;
  dependencyMap = _slicedToArray(noop.useState(false), 2)[1];
  if (null == tmp3) {
    return null;
  } else {
    if (!tmp5) {
      const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = projectId(1126).intl;
      const obj2 = {
        action: tmp3.label,
        onUpdate() {
              closure_2(true);
              const result = conjureReminderSlot.markConjureReminderActivity(projectId);
              closure_1.run("outdated_notice");
            }
      };
      obj.children = intl.format(_modDef3753.X8tdbS, obj2);
      let tmp8 = closure_5(projectId(4892).Text, obj);
    }
    tmp8 = closure_5(closure_9, {});
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3753.lexcBN);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  const conjureUpdatingDots = conjureReminderSlot.useConjureUpdatingDots();
  if (cResult[1] !== conjureUpdatingDots) {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", accessibilityLabel: first, children: null };
    const items = [first, conjureUpdatingDots];
    obj2.children = items;
    const tmp10 = timestampProducer(Text_Text.Text, obj2);
    cResult[1] = conjureUpdatingDots;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  const intl = util.intl;
  const stringResult = intl.string(_modDef3753.lexcBN);
  const conjureUpdatingDots = conjureReminderSlot.useConjureUpdatingDots();
  const obj2 = { variant: "text-xs/normal", color: "text-muted", accessibilityLabel: stringResult, children: null };
  const items = [stringResult, conjureUpdatingDots];
  obj2.children = items;
  return timestampProducer(Text_Text.Text, obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ projectId, notice } = arg0);
  if (cResult[0] === notice) {
    if (cResult[1] === projectId) {
      return cResult[2];
    }
  }
  if ("outdated" === notice) {
    const obj2 = { projectId };
    let tmp4 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj3 = { projectId, notice };
    tmp4 = hasOwnProperty(closure_7, obj3);
  }
  cResult[0] = notice;
  cResult[1] = projectId;
  cResult[2] = tmp4;
}) : ((arg0) => {
  ({ projectId, notice } = arg0);
  if ("outdated" === notice) {
    const obj2 = { projectId };
    let tmp3 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj = { projectId, notice };
    tmp3 = hasOwnProperty(closure_7, obj);
  }
  return tmp3;
});