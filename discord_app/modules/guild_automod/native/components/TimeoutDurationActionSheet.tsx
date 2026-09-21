// === Module 17969: TimeoutDurationActionSheet ===

// Module 17969 (TimeoutDurationActionSheet)
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import TableRadioGroup from "TableRadioGroup" /* 5902 */;
import TableRadioRow from "TableRadioRow" /* 5905 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7394 */;
import ActionSheet from "ActionSheet" /* 7442 */;
import getActionInfo from "getActionInfo" /* 17948 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AutomodActionType = fn(12117).AutomodActionType;
let closure_4 = fn(2107).getDisableCommunicationDurationOptions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TimeoutDurationActionSheet.tsx");

export default function TimeoutDurationActionSheet(triggerType) {
  ({ action, onSelectDuration: require, onRemove: importDefault } = triggerType);
  const actionInfo = getActionInfo.getActionInfo(AutomodActionType.USER_COMMUNICATION_DISABLED, action, triggerType.triggerType);
  let durationSeconds;
  if (action != null) {
    durationSeconds = action.metadata.durationSeconds;
  }
  let str;
  if (actionInfo != null) {
    str = actionInfo.headerText;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { startExpanded: true, header: closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: str }), children: null };
  const obj3 = { variant: "text-md/normal", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.DWGBAh);
  const items = [closure_5(Text_Text.Text, obj3), ];
  let headerText;
  if (actionInfo != null) {
    headerText = actionInfo.headerText;
  }
  const obj4 = { hasIcons: false, accessibilityLabel: headerText, defaultValue: null, onChange: null, children: null };
  let str2 = "";
  if (null != durationSeconds) {
    const _String = String;
    str2 = String(durationSeconds);
  }
  obj4.defaultValue = str2;
  obj4.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if ("" !== arg0) {
      const _Number = Number;
      require(Number(arg0));
    } else {
      closure_1_1();
    }
  };
  const obj5 = { value: "", label: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.PoWNfe);
  const items1 = [
    closure_5(TableRadioRow.TableRadioRow, obj5),
    closure_4().map((item) => {
      ({ id, value, label } = item);
      return closure_1_5(TableRadioRow.TableRadioRow, { value: String(value), label }, id);
    })
  ];
  obj4.children = items1;
  items[1] = closure_6(TableRadioGroup.TableRadioGroup, obj4);
  obj2.children = items;
  return closure_6(ActionSheet.ActionSheet, obj2);
};