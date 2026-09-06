// discord_app/modules/custom_status/native/ClearAfterOptionsActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import TableRadioGroup from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  obj.children = ClearAfterOptions.map((value) =>
    closure_1_7(TableRadioRow.TableRadioRow, { value, label: closure_1(11202)(value) }, value),
  );
  const items = [closure_7(TableRadioGroup.TableRadioGroup, obj)];
  const obj1 = { style: tmp.buttonWrapper, children: null };
  const obj2 = {
    onPress() {
      require(closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null,
  };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.TyCVIq);
  obj1.children = closure_7(components_Button_Button.Button, obj2);
  items[1] = closure_7(View, obj1);
  obj.children = items;
  return closure_8(Sheet_BottomSheet.BottomSheet, obj);
}
