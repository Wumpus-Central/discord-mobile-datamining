// === Module 12429: ConjureSharingModeSheet ===

// Module 12429 (ConjureSharingModeSheet)
import util from "util" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import TableRadioGroup from "TableRadioGroup" /* 7127 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7385 */;
import ActionSheet from "ActionSheet" /* 7429 */;
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
  items = [onChange, value];
  const callback = noop.useCallback((arg0) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureSharingModeSheet);
    if (arg0 !== value) {
      onChange(arg0);
    }
  }, items);
  let obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(onChange(4028).ujIxRm);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  obj.children = jsx(TableRadioGroup.TableRadioGroup, { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(value(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label, subLabel: value.description }, value.value)) });
  return jsx(ActionSheet.ActionSheet, { header: null, children: null });
};
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";