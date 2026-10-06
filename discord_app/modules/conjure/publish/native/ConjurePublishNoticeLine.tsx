// === Module 16722: ConjurePublishNoticeLine ===

// Module 16722 (ConjurePublishNoticeLine)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import useConjurePublishAction from "useConjurePublishAction" /* 16652 */;
import conjureReminderSlot from "conjureReminderSlot" /* 16725 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useConjurePublishActionDefault = useConjurePublishAction;
let dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
let tmp4;
const _modDef3753 = tmp4(3753);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const obj2 = { projectId };
    tmp5 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj3 = { projectId, notice };
    tmp5 = hasOwnProperty(closure_7, obj3);
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
    const obj2 = { projectId };
    tmp3 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj = { projectId, notice };
    tmp3 = hasOwnProperty(closure_7, obj);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(9);
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = react.useContext(projectId(16652).ConjurePublishActionContext);
  const tmp5 = context(16723)(projectId);
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
          const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp7 };
          const tmp11 = closure_5(tmp(4892).Text, obj2);
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
    const tmpResult = tmp(16724);
    const formatResult = format(tmpResult.publishNoticeMessage(notice), obj3);
    cResult[3] = tmp6;
    cResult[4] = tmp5;
    cResult[5] = notice;
    cResult[6] = formatResult;
    tmp7 = formatResult;
  }
  const fn = function o() {
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
  let format;
  let obj2;
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = react.useContext(projectId(16652).ConjurePublishActionContext);
  const items = [context, projectId];
  const tmp2 = context(16723)(projectId);
  const callback = react.useCallback(() => {
    if (null != context) {
      const obj = useConjurePublishAction;
      const result = obj.openConjurePublishedApp(projectId, tmp);
    }
  }, items);
  let obj = { variant: "text-md/normal", color: "text-default", children: format(obj2.publishNoticeMessage(notice), { name: tmp2, onOpen: callback }) };
  const Text = projectId(4892).Text;
  const intl = projectId(1126).intl;
  format = intl.format;
  obj2 = projectId(16724);
  return closure_5(Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_1;
  let closure_2;
  let tmp10;
  let obj = projectId(576);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const tmp5 = useConjurePublishActionDefault(projectId);
  importDefault = tmp5;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  dependencyMap = tmp6[1];
  let tmp7 = null;
  if (null != tmp5) {
    if (tmp6[0]) {
      let first;
      if (!tmp5.publishing) {
        tmp7 = tmp10;
      }
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = closure_5(closure_9, {});
        cResult[0] = tmp17;
        first = tmp17;
      } else {
        first = cResult[0];
      }
      tmp10 = first;
    }
    if (cResult[1] === projectId) {
      let tmp8;
      if (cResult[2] === tmp5) {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp8 };
        const tmp12 = closure_5(projectId(4892).Text, obj2);
        cResult[4] = tmp8;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
    }
    const intl = tmp(1126).intl;
    const obj3 = {
      action: tmp5.label,
      onUpdate() {
          closure_2(true);
          const obj = conjureReminderSlot;
          const result = obj.markConjureReminderActivity(projectId);
          closure_1.run("outdated_notice");
        }
    };
    const formatResult = intl.format(_modDef3753.X8tdbS, obj3);
    cResult[1] = projectId;
    cResult[2] = tmp5;
    cResult[3] = formatResult;
    tmp8 = formatResult;
  }
  return tmp7;
}) : ((projectId) => {
  let closure_1;
  let closure_2;
  let intl;
  let obj2;
  projectId = projectId.projectId;
  importDefault = undefined;
  const tmp3 = useConjurePublishActionDefault(projectId);
  importDefault = tmp3;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  dependencyMap = tmp4[1];
  let tmp5 = null;
  if (null != tmp3) {
    let tmp8;
    if (!tmp4[0]) {
      let obj = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef3753.X8tdbS, obj2) };
      const Text = projectId(4892).Text;
      intl = projectId(1126).intl;
      obj2 = {
        action: tmp3.label,
        onUpdate() {
              closure_2(true);
              const obj = conjureReminderSlot;
              const result = obj.markConjureReminderActivity(projectId);
              closure_1.run("outdated_notice");
            }
      };
      tmp8 = closure_5(Text, obj);
    } else {
      tmp8 = closure_5(closure_9, {});
    }
    tmp5 = tmp8;
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(_modDef3753.lexcBN);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmpResult = conjureReminderSlot;
  const conjureUpdatingDots = tmpResult.useConjureUpdatingDots();
  if (cResult[1] !== conjureUpdatingDots) {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", accessibilityLabel: first, children: items };
    items = [first, conjureUpdatingDots];
    const tmp10 = metroRequire(Text_Text.Text, obj2);
    cResult[1] = conjureUpdatingDots;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  let items;
  const intl = intl2.intl;
  const stringResult = intl.string(_modDef3753.lexcBN);
  const obj = conjureReminderSlot;
  const conjureUpdatingDots = obj.useConjureUpdatingDots();
  const obj2 = { variant: "text-xs/normal", color: "text-muted", accessibilityLabel: stringResult, children: items };
  items = [stringResult, conjureUpdatingDots];
  return metroRequire(Text_Text.Text, obj2);
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default tmp3;