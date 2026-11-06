// === Module 12327: ConjureGamePickerSheet ===

// Module 12327 (ConjureGamePickerSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6231 */;
import conjureGamePickerOptions from "conjureGamePickerOptions" /* 12323 */;
import useConjureSettingPickerOptions from "useConjureSettingPickerOptions" /* 12324 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function toOption(value) {
  return { type: InteractionComponentTypes.SelectOptionType.STRING, value: value.value, label: value.label, description: value.description };
}
let jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureGamePickerSheet.tsx");

export default function ConjureGamePickerSheet(onSubmit) {
  onSubmit = onSubmit.onSubmit;
  let runningIds;
  let first;
  let first1;
  ({ title, selected } = onSubmit);
  const conjureGameOptions = onSubmit(runningIds[4]).useConjureGameOptions();
  const allOptions = conjureGameOptions.allOptions;
  runningIds = conjureGameOptions.runningIds;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  const tmp4 = first(first1.useState(selected), 2);
  first1 = tmp4[0];
  jsx = tmp4[1];
  items = [allOptions, first1, first, runningIds];
  const items1 = [allOptions, first1];
  const memo = first1.useMemo(() => {
    const result = conjureGamePickerOptions.conjureGamePickerOptions(allOptions, first, runningIds, first1);
    return result.map(toOption);
  }, items);
  const items2 = [first1];
  const memo1 = first1.useMemo(() => first1.map((id) => {
    closure_0 = id;
    let iter = allOptions.find((value) => value.value === closure_0);
    if (iter == null) {
      const obj = { id, value: id, label: id };
      iter = obj;
    }
    return { type: onSubmit(runningIds[3]).SelectOptionType.STRING, value: iter.value, label: iter.label, description: iter.description };
  }), items1);
  first1.useMemo(() => new Set(first1), items2);
  const obj2 = { selectionActionComponent: null, allowEmpty: true, options: null, selectedOptions: null, selectedCount: null, isSelected: null, onPressOptionItem: null, submitSelection: null, onQueryChange: null, renderIcon: null, skipIcon: true, renderDescription: null, itemAccessibilityLabel: null };
  const obj3 = { placeholder: title, minValues: 0, maxValues: null };
  let obj = onSubmit(runningIds[4]);
  obj3.maxValues = onSubmit(runningIds[6]).MAX_CONJURE_SETTING_PICKS;
  obj2.selectionActionComponent = obj3;
  obj2.options = memo;
  obj2.selectedOptions = memo1;
  obj2.selectedCount = first1.length;
  obj2.isSelected = function isSelected(value) {
    return set.has(value.value);
  };
  obj2.onPressOptionItem = function press(arg0, value) {
    if (set.has(value.value)) {
      closure_5(first1.filter((item) => item !== value.value));
    } else if (first1.length < useConjureSettingPickerOptions.MAX_CONJURE_SETTING_PICKS) {
      items = [];
      items[HermesBuiltin.arraySpread(first1, 0)] = value.value;
      closure_5(items);
    }
  };
  obj2.submitSelection = function submitSelection() {
    items = [...first1];
    onSubmit(items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj2.onQueryChange = tmp2[1];
  obj2.renderIcon = function renderIcon() {
    return null;
  };
  obj2.renderDescription = function renderDescription(description) {
    return description.description;
  };
  obj2.itemAccessibilityLabel = function itemAccessibilityLabel(label) {
    return label.label;
  };
  return jsx(allOptions(runningIds[5]), { selectionActionComponent: null, allowEmpty: true, options: null, selectedOptions: null, selectedCount: null, isSelected: null, onPressOptionItem: null, submitSelection: null, onQueryChange: null, renderIcon: null, skipIcon: true, renderDescription: null, itemAccessibilityLabel: null });
};