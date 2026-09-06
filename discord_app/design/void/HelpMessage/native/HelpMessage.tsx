// === Module 14092: HelpMessage ===

// Module 14092 (HelpMessage)
import nativeDefault from "native" /* 576 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4515 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4520 */;
import Text_Text from "Text/Text" /* 4556 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6610 */;
import CircleXIcon from "CircleXIcon" /* 6616 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, row: null, content: null, warningContainer: null, infoContainer: null, errorContainer: null, successContainer: null };
createStyles = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.row = { display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.content = { flex: 1, marginLeft: nativeDefault.space.PX_8 };
let obj2 = { backgroundColor: null, borderColor: null };
fn(1091);
let ColorUtils = fn(1091);
obj2.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.YELLOW_300), 0.1);
obj2.borderColor = nativeDefault.unsafe_rawColors.YELLOW_300;
createStyles.warningContainer = obj2;
let obj3 = { backgroundColor: null, borderColor: null };
fn(1091);
ColorUtils = fn(1091);
obj3.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.BLUE_345), 0.1);
obj3.borderColor = nativeDefault.unsafe_rawColors.BLUE_345;
createStyles.infoContainer = obj3;
const obj4 = { backgroundColor: null, borderColor: null };
fn(1091);
ColorUtils = fn(1091);
obj4.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.RED_400), 0.1);
obj4.borderColor = nativeDefault.unsafe_rawColors.RED_400;
createStyles.errorContainer = obj4;
ColorUtils = { backgroundColor: null, borderColor: null };
fn(1091);
ColorUtils = fn(1091);
ColorUtils.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.GREEN_400), 0.1);
ColorUtils.borderColor = nativeDefault.unsafe_rawColors.GREEN_400;
createStyles.successContainer = ColorUtils;
let closure_6 = createStyles.createStyles(createStyles);
ColorUtils = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default function HelpMessage(children) {
  ({ messageType, textVariant } = children);
  if (textVariant === undefined) {
    textVariant = "text-sm/medium";
  }
  let str = children.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let xs = children.borderRadius;
  if (xs === undefined) {
    xs = nativeDefault.radii.xs;
  }
  const tmp3 = closure_6();
  const items = [tmp3.container, , ];
  if (ColorUtils.WARNING === messageType) {
    let successContainer = tmp3.warningContainer;
  } else if (tmp6.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (tmp6.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (tmp6.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  let obj = { style: items, children: null };
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  obj = { style: tmp3.row, children: null };
  if (ColorUtils.WARNING === messageType) {
    obj = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    let tmp7 = React4(CircleErrorIcon.CircleErrorIcon, obj);
  } else if (tmp6.INFO === messageType) {
    const obj1 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
    tmp7 = React4(CircleInformationIcon.CircleInformationIcon, obj1);
  } else if (tmp6.ERROR === messageType) {
    const obj2 = { color: nativeDefault.unsafe_rawColors.RED_400 };
    tmp7 = React4(CircleXIcon.CircleXIcon, obj2);
  } else if (tmp6.SUCCESS === messageType) {
    const obj3 = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
    tmp7 = React4(CircleCheckIcon.CircleCheckIcon, obj3);
  }
  const items1 = [tmp7, React4(Text_Text.Text, { style: tmp3.content, color: str, variant: textVariant, children: children.children })];
  obj.children = items1;
  const items2 = [hasOwnProperty(View, obj), children.button];
  obj.children = items2;
  return hasOwnProperty(View, obj);
};
export const HelpMessageTypes = ColorUtils;