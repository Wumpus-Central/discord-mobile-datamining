// === Module 11547: ClearAfterOptionsActionSheet ===

// Module 11547 (ClearAfterOptionsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import TableRadioGroup from "TableRadioGroup" /* 5988 */;
import TableRadioRow from "TableRadioRow" /* 5991 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7480 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7481 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ClearAfterOptions = fn(11462).ClearAfterOptions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonWrapper: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonWrapper = { marginTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  ({ initialValue, onChange: require } = arg0);
  const tmp = closure_9();
  const tmp2 = _slicedToArray(noop.useState(initialValue), 2);
  closure_1 = tmp2[0];
  const obj = { contentStyles: tmp.content, header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["5XnRQ+"]);
  obj.header = closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { onChange: tmp2[1], title: null, defaultValue: null, hasIcons: false, children: null };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.E45wvP);
  obj3.defaultValue = initialValue;
  obj3.children = ClearAfterOptions.map((value) => closure_1_7(TableRadioRow.TableRadioRow, { value, label: closure_1(11548)(value) }, value));
  const items = [closure_7(TableRadioGroup.TableRadioGroup, obj3), ];
  const obj4 = { style: tmp.buttonWrapper, children: null };
  const obj5 = {
    onPress() {
      require(closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null
  };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.TyCVIq);
  obj4.children = closure_7(components_Button_Button.Button, obj5);
  items[1] = closure_7(View, obj4);
  obj.children = items;
  return closure_8(Sheet_BottomSheet.BottomSheet, obj);
};