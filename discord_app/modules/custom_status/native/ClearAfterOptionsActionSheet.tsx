// === Module 11201: ClearAfterOptionsActionSheet ===

// Module 11201 (ClearAfterOptionsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ClearAfterOptions = fn(11115).ClearAfterOptions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { content: null, buttonWrapper: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.buttonWrapper = { marginTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  ({ initialValue, onChange: require } = arg0);
  const tmp = closure_9();
  const tmp2 = _slicedToArray(noop.useState(initialValue), 2);
  closure_1 = tmp2[0];
  let obj = { contentStyles: tmp.content, header: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["5XnRQ+"]);
  obj.header = closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj = { onChange: tmp2[1], title: null, defaultValue: null, hasIcons: false, children: null };
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.E45wvP);
  obj.defaultValue = initialValue;
  obj.children = ClearAfterOptions.map((value) => closure_1_7(TableRadioRow.TableRadioRow, { value, label: closure_1(11202)(value) }, value));
  const items = [closure_7(TableRadioGroup.TableRadioGroup, obj), ];
  const obj1 = { style: tmp.buttonWrapper, children: null };
  const obj2 = {
    onPress() {
      require(closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null
  };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.TyCVIq);
  obj1.children = closure_7(components_Button_Button.Button, obj2);
  items[1] = closure_7(View, obj1);
  obj.children = items;
  return closure_8(Sheet_BottomSheet.BottomSheet, obj);
};