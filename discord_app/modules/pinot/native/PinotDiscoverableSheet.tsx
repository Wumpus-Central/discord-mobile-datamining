// === Module 7679: PinotDiscoverableSheet ===

// Module 7679 (PinotDiscoverableSheet)
import util from "util" /* 1113 */;
import _modDef3407 from "module_3407" /* 3407 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import TableRadioGroup from "TableRadioGroup" /* 7258 */;
import TableRadioRow from "TableRadioRow" /* 7260 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7426 */;
import ActionSheet from "ActionSheet" /* 7464 */;
import PinotDiscoverable from "PinotDiscoverable" /* 7658 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotDiscoverableSheet.tsx");

export default function PinotDiscoverableSheet(defaultValue) {
  ({ options, onChange: require } = defaultValue);
  let intl = util.intl;
  const stringResult = intl.string(_modDef3407["r/o6RM"]);
  let obj = {
    startExpanded: true,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    children: jsx(TableRadioGroup.TableRadioGroup, {
      hasIcons: false,
      defaultValue: defaultValue.value,
      onChange: function handleChange(arg0) {
        require(arg0);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
      accessibilityLabel: stringResult,
      children: options.map((value) => {
        const obj = { value, label: null };
        const intl = util.intl;
        obj.label = intl.string(PinotDiscoverable.PINOT_DISCOVERABLE_OPTION_LABELS[value]);
        return jsx(TableRadioRow.TableRadioRow, { value, label: null }, value);
      })
    })
  };
  return jsx(ActionSheet.ActionSheet, {
    startExpanded: true,
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    children: jsx(TableRadioGroup.TableRadioGroup, {
      hasIcons: false,
      defaultValue: defaultValue.value,
      onChange: function handleChange(arg0) {
        require(arg0);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
      accessibilityLabel: stringResult,
      children: options.map((value) => {
        const obj = { value, label: null };
        const intl = util.intl;
        obj.label = intl.string(PinotDiscoverable.PINOT_DISCOVERABLE_OPTION_LABELS[value]);
        return jsx(TableRadioRow.TableRadioRow, { value, label: null }, value);
      })
    })
  });
};