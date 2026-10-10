// === Module 16016: FinalizeTraitActionSheet ===

// Module 16016 (FinalizeTraitActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import _modDef3118 from "module_3118" /* 3118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15986 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const items = [{ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3118.f4BaUg }, , , , , ];
let obj = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3118.f4BaUg };
items[1] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, subtitle: _modDef3118.gpEOaS };
let obj2 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, subtitle: _modDef3118.gpEOaS };
items[2] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, subtitle: _modDef3118["l/tCAO"] };
let obj3 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, subtitle: _modDef3118["l/tCAO"] };
items[3] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3118["+oFzYq"] };
const obj4 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3118["+oFzYq"] };
items[4] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3118.xa55WX };
const obj5 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3118.xa55WX };
items[5] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3118["1dd6Fx"] };
const obj6 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3118["1dd6Fx"] };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FinalizeTraitActionSheet(arg0) {
  const cResult = onSelectOption(576).c(8);
  ({ selectedOption, onSelectOption } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    let intl = onSelectOption(1126).intl;
    obj2.title = intl.string(_modDef3118.Zl5vPW);
    const tmp7 = jsx(onSelectOption(6838).BottomSheetTitleHeader, { title: null });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = onSelectOption(1126).intl;
    const stringResult = intl2.string(_modDef3118.Zl5vPW);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== onSelectOption) {
    const fn = function c(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      onSelectOption(arg0);
    };
    cResult[2] = onSelectOption;
    cResult[3] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const mapped = items.map((option) => {
      option = option.option;
      const obj = { value: option, label: onSelectOption(15986).getCustomizationOptionName(option), subLabel: null };
      const intl = onSelectOption(1126).intl;
      obj.subLabel = intl.string(option.subtitle);
      return jsx(onSelectOption(6261).TableRadioRow, { value: option, label: onSelectOption(15986).getCustomizationOptionName(option), subLabel: null }, option);
    });
    cResult[4] = mapped;
    let tmp12 = mapped;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === selectedOption) {
    if (cResult[6] === tmp11) {
      let tmp15 = cResult[7];
    }
    return tmp15;
  }
  let obj = onSelectOption(576);
  const tmp16 = jsx(onSelectOption(6898).ActionSheet, { startExpanded: true, header: first, children: jsx(onSelectOption(6262).TableRadioGroup, { hasIcons: false, accessibilityLabel: tmp8, defaultValue: selectedOption, onChange: tmp11, children: tmp12 }) });
  cResult[5] = selectedOption;
  cResult[6] = tmp11;
  cResult[7] = tmp16;
  tmp15 = tmp16;
  const obj3 = { startExpanded: true, header: first, children: jsx(onSelectOption(6262).TableRadioGroup, { hasIcons: false, accessibilityLabel: tmp8, defaultValue: selectedOption, onChange: tmp11, children: tmp12 }) };
}) : (function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  let intl = onSelectOption(1126).intl;
  obj2.title = intl.string(_modDef3118.Zl5vPW);
  obj.header = jsx(onSelectOption(6838).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1126).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3118.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  obj3.children = items.map((option) => {
    option = option.option;
    const obj = { value: option, label: onSelectOption(15986).getCustomizationOptionName(option), subLabel: null };
    const intl = onSelectOption(1126).intl;
    obj.subLabel = intl.string(option.subtitle);
    return jsx(onSelectOption(6261).TableRadioRow, { value: option, label: onSelectOption(15986).getCustomizationOptionName(option), subLabel: null }, option);
  });
  obj.children = jsx(onSelectOption(6262).TableRadioGroup, { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null });
  return jsx(onSelectOption(6898).ActionSheet, { startExpanded: true, header: null, children: null });
});