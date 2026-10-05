// === Module 6000: TableRowArrow ===

// Module 6000 (TableRowArrow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Icon from "Icon" /* 5596 */;
import AssetRegistryDefault from "AssetRegistry" /* 6001 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const IconDefault = Icon;

let obj2;
let size;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { icon: size, iconColor: obj2 };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === tmp4.icon) {
    let tmp5;
    if (cResult[1] === tmp4.iconColor.color) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  IconDefault;
  const tmp7 = <tmp6 style={tmp4.icon} color={tmp4.iconColor.color} source={AssetRegistryDefault} size={Icon.IconSizes.CUSTOM} />;
  cResult[0] = tmp4.icon;
  cResult[1] = tmp4.iconColor.color;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : (() => {
  const tmp = closure_4();
  IconDefault;
  return <tmp2 style={tmp.icon} color={tmp.iconColor.color} source={AssetRegistryDefault} size={Icon.IconSizes.CUSTOM} />;
});
size = size_mod;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = tmp4;