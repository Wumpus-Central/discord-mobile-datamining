// === Module 12051: showConjurePreviewTargetSheet ===

// Module 12051 (showConjurePreviewTargetSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
class ConjurePreviewTargetSheet {
  constructor(arg0) {
    targets = global.targets;
    onChange = global.onChange;
    intl = targets(closure_2[3]).intl;
    stringResult = intl.string(onChange(closure_2[4]).I2ucou);
    items = [, ];
    items[0] = onChange;
    items[1] = targets;
    callback = closure_3.useCallback((arg0) => {
      closure_0 = arg0;
      const found = targets.find((item) => targets(12050).previewTargetKey(item) === closure_0);
      if (null != found) {
        onChange(found);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePreviewTarget);
    }, items);
    obj = { children: null };
    obj1 = { title: stringResult, accessibilityLabel: stringResult, hasIcons: false, value: null, onChange: null, children: null };
    obj3 = targets(closure_2[5]);
    obj1.value = obj3.previewTargetKey(global.target);
    obj1.onChange = callback;
    obj1.children = targets.map((item) => {
      const previewTargetKeyResult = targets(12050).previewTargetKey(item);
      const obj2 = { label: null, value: null };
      const obj = targets(12050);
      obj2.label = targets(12050).getPreviewTargetLabel(item);
      obj2.value = previewTargetKeyResult;
      return jsx(targets(7055).TableRadioRow, { label: null, value: null }, previewTargetKeyResult);
    });
    obj.children = jsx(targets(closure_2[7]).TableRadioGroup, obj1);
    return jsx(targets(closure_2[6]).ActionSheet, obj);
  }
}
const jsx = fn(21).jsx;
const ConjurePreviewTarget = "ConjurePreviewTarget";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/showConjurePreviewTargetSheet.tsx");

export default function showConjurePreviewTargetSheet(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = <ConjurePreviewTargetSheet />;
  obj2.key = ConjurePreviewTarget;
  ActionSheetActionCreators.showActionSheet(obj2);
};
export { ConjurePreviewTargetSheet };