// === Module 7648: PinotDiscoverableSheet ===

// Module 7648 (PinotDiscoverableSheet)
import util from "util" /* 1112 */;
import _modDef3409 from "module_3409" /* 3409 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import TableRadioGroup from "TableRadioGroup" /* 7227 */;
import TableRadioRow from "TableRadioRow" /* 7229 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7395 */;
import ActionSheet from "ActionSheet" /* 7433 */;
import PinotDiscoverable from "PinotDiscoverable" /* 7627 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotDiscoverableSheet.tsx");

export default function PinotDiscoverableSheet(defaultValue) {
  ({ options, onChange: require } = defaultValue);
  let intl = util.intl;
  const stringResult = intl.string(_modDef3409["r/o6RM"]);
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