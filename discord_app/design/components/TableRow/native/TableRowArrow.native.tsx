// === Module 6000: TableRowArrow ===

// Module 6000 (TableRowArrow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Icon from "Icon" /* 5596 */;
import _modDef6001 from "module_6001" /* 6001 */;
import noop from "module_19" /* 19 */;

const IconDefault = Icon;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { icon: null, iconColor: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
obj2.icon = size;
obj2.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === tmp4.icon) {
    if (cResult[1] === tmp4.iconColor.color) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  obj2.source = _modDef6001;
  obj2.size = Icon.IconSizes.CUSTOM;
  const tmp7 = jsx(IconDefault, { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null });
  cResult[0] = tmp4.icon;
  cResult[1] = tmp4.iconColor.color;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : (() => {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef6001, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, { style: tmp.icon, color: tmp.iconColor.color, source: _modDef6001, size: Icon.IconSizes.CUSTOM });
});