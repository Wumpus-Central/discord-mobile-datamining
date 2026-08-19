// === Module 13456: HelpMessage ===

// Module 13456 (HelpMessage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4330 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4335 */;
import Text from "Text" /* 4734 */;
import CircleXIcon from "CircleXIcon" /* 7341 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import "int2hslRaw";
import int2hslRaw from "int2hslRaw" /* 688 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { padding: ThemesDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flex: 1, marginLeft: ThemesDefault.space.PX_8 };
let obj2 = { backgroundColor: null, borderColor: null };
obj2[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.YELLOW_300), 0.1);
obj2[1] = ThemesDefault.unsafe_rawColors.YELLOW_300;
createCacheKey[3] = obj2;
let obj3 = { backgroundColor: null, borderColor: null };
obj3[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.BLUE_345), 0.1);
obj3[1] = ThemesDefault.unsafe_rawColors.BLUE_345;
createCacheKey[4] = obj3;
const obj4 = { backgroundColor: null, borderColor: null };
obj4[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.RED_400), 0.1);
obj4[1] = ThemesDefault.unsafe_rawColors.RED_400;
createCacheKey[5] = obj4;
int2hslRaw[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.GREEN_400), 0.1);
int2hslRaw[1] = ThemesDefault.unsafe_rawColors.GREEN_400;
createCacheKey[6] = int2hslRaw;
let closure_6 = createCacheKey.createStyles(createCacheKey);
int2hslRaw = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
const result = require("obj132").fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

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
    xs = ThemesDefault.radii.xs;
  }
  const tmp3 = callback2();
  const items = [tmp3.container, , ];
  if (int2hslRaw.WARNING === messageType) {
    let successContainer = tmp3.warningContainer;
  } else if (int2hslRaw.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (int2hslRaw.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (int2hslRaw.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  let obj = { style: tmp3.row, children: null };
  if (int2hslRaw.WARNING === messageType) {
    obj = { color: null };
    obj[0] = ThemesDefault.unsafe_rawColors.YELLOW_300;
    let tmp7 = callback(CircleErrorIcon.CircleErrorIcon, obj);
  } else if (int2hslRaw.INFO === messageType) {
    obj1 = { color: null };
    obj1[0] = ThemesDefault.unsafe_rawColors.BLUE_345;
    tmp7 = callback(CircleInformationIcon.CircleInformationIcon, obj1);
  } else if (int2hslRaw.ERROR === messageType) {
    const obj2 = { color: null };
    obj2[0] = ThemesDefault.unsafe_rawColors.RED_400;
    tmp7 = callback(CircleXIcon.CircleXIcon, obj2);
  } else if (int2hslRaw.SUCCESS === messageType) {
    const obj3 = { color: null };
    obj3[0] = ThemesDefault.unsafe_rawColors.GREEN_400;
    tmp7 = callback(CircleCheckIcon.CircleCheckIcon, obj3);
  }
  const items1 = [tmp7, callback(Text.Text, { style: tmp3.content, color: str, variant: textVariant, children: children.children })];
  obj[1] = items1;
  const items2 = [callback(View, obj), children.button];
  obj[1] = items2;
  return callback(View, obj);
};
export const HelpMessageTypes = int2hslRaw;