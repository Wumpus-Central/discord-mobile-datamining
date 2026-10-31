// discord_app/modules/conjure/preview/native/showConjurePreviewTargetSheet.tsx
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
class ConjurePreviewTargetSheet {
  constructor(arg0) {
    targets = global.targets;
    onChange = global.onChange;
    intl = targets(closure_2[3]).intl;
    stringResult = intl.string(onChange(closure_2[4]).I2ucou);
    items = [,];
    items[0] = onChange;
    items[1] = targets;
    callback = closure_3.useCallback((arg0) => {
      closure_0 = arg0;
      const found = targets.find((item) => targets(12089).previewTargetKey(item) === closure_0);
      if (null != found) {
        onChange(found);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePreviewTarget);
    }, items);
    obj = { children: null };
    obj1 = {
      title: stringResult,
      accessibilityLabel: stringResult,
      hasIcons: false,
      value: null,
      onChange: null,
      children: null,
    };
    obj3 = targets(closure_2[5]);
    obj1.value = obj3.previewTargetKey(global.target);
    obj1.onChange = callback;
    obj1.children = targets.map((item) => {
      const previewTargetKeyResult = targets(12089).previewTargetKey(item);
      const obj2 = { label: null, value: null };
      const obj = targets(12089);
      obj2.label = targets(12089).getPreviewTargetLabel(item);
      obj2.value = previewTargetKeyResult;
      return jsx(targets(7061).TableRadioRow, { label: null, value: null }, previewTargetKeyResult);
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
}
export { ConjurePreviewTargetSheet };
