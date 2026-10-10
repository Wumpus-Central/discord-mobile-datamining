// === Module 17085: showConjurePreviewTargetSheet ===

// Module 17085 (showConjurePreviewTargetSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const jsx = fn(21).jsx;
const ConjurePreviewTarget = "ConjurePreviewTarget";
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePreviewTargetSheet(targets) {
  const cResult = targets(576).c(13);
  targets = targets.targets;
  ({ target, onChange } = targets);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onChange(3849).I2ucou);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onChange) {
    if (cResult[2] === targets) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] !== target) {
      let previewTargetKeyResult = tmp(17084).previewTargetKey(target);
      cResult[4] = target;
      cResult[5] = previewTargetKeyResult;
      let tmp8 = previewTargetKeyResult;
      const tmpResult = tmp(17084);
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== targets) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(target) {
          const previewTargetKeyResult = targets(17084).previewTargetKey(target);
          const obj2 = { label: null, value: null };
          const obj = targets(17084);
          obj2.label = targets(17084).getPreviewTargetLabel(target);
          obj2.value = previewTargetKeyResult;
          return jsx(targets(6261).TableRadioRow, { label: null, value: null }, previewTargetKeyResult);
        };
        cResult[8] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[8];
      }
      const mapped = targets.map(tmp11);
      cResult[6] = targets;
      cResult[7] = mapped;
    } else {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp8) {
          if (cResult[11] === tmp10) {
            let tmp14 = cResult[12];
          }
          return tmp14;
        }
      }
      let obj2 = { children: null };
      const obj3 = { title: first, accessibilityLabel: first, hasIcons: false, value: tmp8, onChange: tmp7, children: cResult[7] };
      obj2.children = jsx(tmp(6262).TableRadioGroup, { title: first, accessibilityLabel: first, hasIcons: false, value: tmp8, onChange: tmp7, children: cResult[7] });
      const tmp16 = jsx(tmp(6898).ActionSheet, { children: null });
      cResult[9] = tmp7;
      cResult[10] = tmp8;
      cResult[11] = cResult[7];
      cResult[12] = tmp16;
      tmp14 = tmp16;
    }
  }
  const fn = function s(arg0) {
    closure_0 = arg0;
    const found = targets.find((item) => targets(17084).previewTargetKey(item) === closure_0);
    if (null != found) {
      onChange(found);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePreviewTarget);
  };
  cResult[1] = onChange;
  cResult[2] = targets;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = targets(576);
}) : (function ConjurePreviewTargetSheet(targets) {
  targets = targets.targets;
  const onChange = targets.onChange;
  const intl = targets(1126).intl;
  const stringResult = intl.string(onChange(3849).I2ucou);
  const items = [onChange, targets];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    const found = targets.find((item) => targets(17084).previewTargetKey(item) === closure_0);
    if (null != found) {
      onChange(found);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePreviewTarget);
  }, items);
  let obj = { children: null };
  let obj2 = {
    title: stringResult,
    accessibilityLabel: stringResult,
    hasIcons: false,
    value: targets(17084).previewTargetKey(targets.target),
    onChange: callback,
    children: targets.map((item) => {
      const previewTargetKeyResult = targets(17084).previewTargetKey(item);
      const obj2 = { label: null, value: null };
      const obj = targets(17084);
      obj2.label = targets(17084).getPreviewTargetLabel(item);
      obj2.value = previewTargetKeyResult;
      return jsx(targets(6261).TableRadioRow, { label: null, value: null }, previewTargetKeyResult);
    })
  };
  obj.children = jsx(targets(6262).TableRadioGroup, {
    title: stringResult,
    accessibilityLabel: stringResult,
    hasIcons: false,
    value: targets(17084).previewTargetKey(targets.target),
    onChange: callback,
    children: targets.map((item) => {
      const previewTargetKeyResult = targets(17084).previewTargetKey(item);
      const obj2 = { label: null, value: null };
      const obj = targets(17084);
      obj2.label = targets(17084).getPreviewTargetLabel(item);
      obj2.value = previewTargetKeyResult;
      return jsx(targets(6261).TableRadioRow, { label: null, value: null }, previewTargetKeyResult);
    })
  });
  return jsx(targets(6898).ActionSheet, { children: null });
});
let closure_6 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/showConjurePreviewTargetSheet.tsx");

export default function showConjurePreviewTargetSheet(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = <closure_6 />;
  obj2.key = ConjurePreviewTarget;
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const ConjurePreviewTargetSheet = tmp2;