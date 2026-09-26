// === Module 13635: HelpMessage ===

// Module 13635 (HelpMessage)
import nativeDefault from "native" /* 576 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4787 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import Text_Text from "Text/Text" /* 4832 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import CircleXIcon from "CircleXIcon" /* 6034 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 }, row: { display: "flex", flexDirection: "row", alignItems: "center" }, content: null, warningContainer: null, infoContainer: null, errorContainer: null, successContainer: null };
let obj3 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 };
obj2.content = { flex: 1, marginLeft: nativeDefault.space.PX_8 };
let obj5 = { backgroundColor: null, borderColor: null };
fn(1092);
let ColorUtils = fn(1092);
obj5.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.YELLOW_300), 0.1);
obj5.borderColor = nativeDefault.unsafe_rawColors.YELLOW_300;
obj2.warningContainer = obj5;
const obj8 = { backgroundColor: null, borderColor: null };
fn(1092);
ColorUtils = fn(1092);
obj8.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.BLUE_345), 0.1);
obj8.borderColor = nativeDefault.unsafe_rawColors.BLUE_345;
obj2.infoContainer = obj8;
const obj11 = { backgroundColor: null, borderColor: null };
fn(1092);
ColorUtils = fn(1092);
obj11.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.RED_400), 0.1);
obj11.borderColor = nativeDefault.unsafe_rawColors.RED_400;
obj2.errorContainer = obj11;
const obj14 = { backgroundColor: null, borderColor: null };
fn(1092);
ColorUtils = fn(1092);
obj14.backgroundColor = ColorUtils.int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.GREEN_400), 0.1);
obj14.borderColor = nativeDefault.unsafe_rawColors.GREEN_400;
obj2.successContainer = obj14;
let closure_6 = createStyles.createStyles(obj2);
const obj17 = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
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
  if (obj17.WARNING === messageType) {
    let successContainer = tmp3.warningContainer;
  } else if (obj17.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (obj17.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (obj17.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  const obj = { style: items, children: null };
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  const obj2 = { style: tmp3.row, children: null };
  if (obj17.WARNING === messageType) {
    const obj3 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    let tmp7 = React4(CircleErrorIcon.CircleErrorIcon, obj3);
  } else if (obj17.INFO === messageType) {
    const obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
    tmp7 = React4(CircleInformationIcon.CircleInformationIcon, obj4);
  } else if (obj17.ERROR === messageType) {
    const obj5 = { color: nativeDefault.unsafe_rawColors.RED_400 };
    tmp7 = React4(CircleXIcon.CircleXIcon, obj5);
  } else if (obj17.SUCCESS === messageType) {
    const obj6 = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
    tmp7 = React4(CircleCheckIcon.CircleCheckIcon, obj6);
  }
  const items1 = [tmp7, React4(Text_Text.Text, { style: tmp3.content, color: str, variant: textVariant, children: children.children })];
  obj2.children = items1;
  const items2 = [hasOwnProperty(View, obj2), children.button];
  obj.children = items2;
  return hasOwnProperty(View, obj);
};
export const HelpMessageTypes = obj17;