// === Module 18162: ConjureSharingModeSheet ===

// Module 18162 (ConjureSharingModeSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import TableRadioGroup from "TableRadioGroup" /* 7227 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7395 */;
import ActionSheet from "ActionSheet" /* 7433 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ConjureSharingModeSheet = "ConjureSharingModeSheet";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureSharingModeSheet.tsx");

export default function ConjureSharingModeSheet(onChange) {
  ({ options, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  let title = onChange.title;
  items = [onChange, value];
  const callback = noop.useCallback((arg0) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureSharingModeSheet);
    if (arg0 !== value) {
      onChange(arg0);
    }
  }, items);
  if (title == null) {
    const intl = tmp3(1112).intl;
    title = intl.string(onChange(4091).jDBYrs);
  }
  let obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: jsx(TableRadioGroup.TableRadioGroup, { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(value(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label }, value.value)) }) };
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: jsx(TableRadioGroup.TableRadioGroup, { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(value(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label }, value.value)) }) });
};
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";