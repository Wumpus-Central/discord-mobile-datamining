// === Module 19850: SelectApplicationActionSheet ===

// Module 19850 (SelectApplicationActionSheet)
import util from "util" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import TableRadioGroup from "TableRadioGroup" /* 7184 */;
import TableRadioRow from "TableRadioRow" /* 7187 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7441 */;
import ActionSheet from "ActionSheet" /* 7486 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9169 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default function SelectApplicationActionSheet(arg0) {
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const intl = util.intl;
  const stringResult = intl.string(util.t.FKSiso);
  let obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange: function handleChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
      return jsx(TableRadioRow.TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
    })
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange: function handleChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
      return jsx(TableRadioRow.TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
    })
  });
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null });
};