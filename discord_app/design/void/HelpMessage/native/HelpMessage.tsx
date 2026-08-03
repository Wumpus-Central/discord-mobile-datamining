import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";
import int2hslRaw from "int2hslRaw";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, row: null, content: null, warningContainer: null, infoContainer: null, errorContainer: null, successContainer: null };
createCacheKey = { padding: require("Themes").space.PX_8, borderWidth: 1, borderStyle: "solid", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flex: 1, marginLeft: require("Themes").space.PX_8 };
let obj2 = { backgroundColor: null, borderColor: null };
obj2[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(require("Themes").unsafe_rawColors.YELLOW_300), 0.1);
obj2[1] = require("Themes").unsafe_rawColors.YELLOW_300;
createCacheKey[3] = obj2;
let obj3 = { backgroundColor: null, borderColor: null };
obj3[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(require("Themes").unsafe_rawColors.BLUE_345), 0.1);
obj3[1] = require("Themes").unsafe_rawColors.BLUE_345;
createCacheKey[4] = obj3;
const obj4 = { backgroundColor: null, borderColor: null };
obj4[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(require("Themes").unsafe_rawColors.RED_400), 0.1);
obj4[1] = require("Themes").unsafe_rawColors.RED_400;
createCacheKey[5] = obj4;
int2hslRaw = { backgroundColor: null, borderColor: null };
int2hslRaw[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(require("Themes").unsafe_rawColors.GREEN_400), 0.1);
int2hslRaw[1] = require("Themes").unsafe_rawColors.GREEN_400;
createCacheKey[6] = int2hslRaw;
createCacheKey = createCacheKey.createStyles(createCacheKey);
int2hslRaw = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
let obj1 = { flex: 1, marginLeft: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default function HelpMessage(children) {
  let messageType;
  let textVariant;
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
    xs = importDefault(712).radii.xs;
  }
  const tmp3 = createCacheKey();
  const items = [tmp3.container, , ];
  if (int2hslRaw.WARNING === messageType) {
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
  if (int2hslRaw.WARNING === messageType) {
    obj = { color: null };
    obj[0] = importDefault(712).unsafe_rawColors.YELLOW_300;
    let tmp7 = callback(require(7704) /* CircleErrorIcon */.CircleErrorIcon, obj);
  } else if (tmp6.INFO === messageType) {
    const obj1 = { color: null };
    obj1[0] = importDefault(712).unsafe_rawColors.BLUE_345;
    tmp7 = callback(require(4211) /* CircleInformationIcon */.CircleInformationIcon, obj1);
  } else if (tmp6.ERROR === messageType) {
    const obj2 = { color: null };
    obj2[0] = importDefault(712).unsafe_rawColors.RED_400;
    tmp7 = callback(require(5895) /* CircleXIcon */.CircleXIcon, obj2);
  } else if (tmp6.SUCCESS === messageType) {
    const obj3 = { color: null };
    obj3[0] = importDefault(712).unsafe_rawColors.GREEN_400;
    tmp7 = callback(require(4216) /* CircleCheckIcon */.CircleCheckIcon, obj3);
  }
  const items1 = [tmp7, callback(require(4251) /* Text */.Text, { style: tmp3.content, color: str, variant: textVariant, children: children.children })];
  obj[1] = items1;
  const items2 = [closure_5(View, obj), children.button];
  obj[1] = items2;
  return closure_5(View, obj);
};
export const HelpMessageTypes = int2hslRaw;