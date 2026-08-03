import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx");

export const CirclePlayIcon = function CirclePlayIcon(color) {
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  let obj = { children: null };
  obj = { source: null, color: null, style: null };
  obj[0] = require(10029) /* registerAsset */;
  obj[1] = secondaryColor;
  obj[2] = style;
  const merged1 = Object.assign(merged);
  const items = [callback(require(3958) /* BaseIconImage */.BaseIconImage, obj), ];
  obj = { source: null, color: null, style: null };
  obj[0] = require(10030) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj[2] = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require(3958) /* BaseIconImage */.BaseIconImage, obj);
  obj[0] = items;
  return callback2(View, obj);
};