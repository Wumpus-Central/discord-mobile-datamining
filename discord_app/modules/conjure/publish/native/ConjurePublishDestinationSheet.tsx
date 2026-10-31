// === Module 12436: ConjurePublishDestinationSheet ===

// Module 12436 (ConjurePublishDestinationSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import TableRadioGroup from "TableRadioGroup" /* 7058 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet from "ActionSheet" /* 7366 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function PublishDestinationSheet(arg0) {
  ({ options, onDone: require } = arg0);
  const tmp2 = _slicedToArray(noop.useState(options.selected_destination_id), 2);
  value = tmp2[0];
  const intl = util.intl;
  const stringResult = intl.string(value(3868).lJrOGW);
  const obj = {
    header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    onDismiss() {
      return require(null);
    },
    children: null
  };
  const obj2 = { style: closure_9().content, children: null };
  const obj3 = { hasIcons: false, value, onChange: tmp2[1], accessibilityLabel: stringResult, children: null };
  const destinations = options.destinations;
  obj3.children = destinations.map((label) => {
    const id = label.id;
    return closure_1_6(TableRadioRow.TableRadioRow, { value: id, label: label.label }, id);
  });
  const items = [closure_6(TableRadioGroup.TableRadioGroup, obj3), , ];
  const obj4 = { variant: "primary", text: null, onPress: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(value(3868).zh1Izp);
  obj4.onPress = function onPress() {
    require(first);
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishDestinationSheet);
  };
  items[1] = closure_6(components_Button_Button.Button, obj4);
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(value(3868).y83r6D);
  obj5.onPress = function onPress() {
    require(null);
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishDestinationSheet);
  };
  items[2] = closure_6(components_Button_Button.Button, obj5);
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(ActionSheet.ActionSheet, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ConjurePublishDestinationSheet = "ConjurePublishDestinationSheet";
const createStyles = fn(5014);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishDestinationSheet.tsx");

export default function showConjurePublishDestinationSheet(options) {
  return new Promise((onDone) => {
    const obj2 = { key: ConjurePublishDestinationSheet, content: timestampProducer(PublishDestinationSheet, { options, onDone }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  });
};