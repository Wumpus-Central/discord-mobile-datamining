// === Module 15626: DisplayNameStylesSheetHeader ===

// Module 15626 (DisplayNameStylesSheetHeader)
import nativeDefault from "native" /* 576 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { trailingButtonClearance: { paddingTop: nativeDefault.space.PX_8 }, centeredAccessory: { justifyContent: "center", alignItems: "center" } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx");

export default function DisplayNameStylesSheetHeader(arg0) {
  ({ leading, trailing } = arg0);
  const merged = Object.assign(arg0, Object.assign({ leading: 0, trailing: 0 }));
  const tmp2 = closure_4();
  const obj = { style: tmp2.trailingButtonClearance, children: null };
  const obj2 = {};
  const merged1 = Object.assign(merged);
  let tmp3Result = leading;
  if (null != leading) {
    const obj3 = { style: tmp2.centeredAccessory, children: leading };
    tmp3Result = <View style={tmp2.centeredAccessory}>{leading}</View>;
  }
  obj2.leading = tmp3Result;
  let tmp3Result2 = trailing;
  if (null != trailing) {
    const obj4 = { style: tmp2.centeredAccessory, children: trailing };
    tmp3Result2 = <View style={tmp2.centeredAccessory}>{trailing}</View>;
  }
  obj2.trailing = tmp3Result2;
  obj.children = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, {});
  return <View style={tmp2.trailingButtonClearance}>{null}</View>;
};