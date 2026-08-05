// discord_app/design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx");

export const CircleCheckIcon = function CircleCheckIcon(color) {
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = require("../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  let obj = { children: null };
  obj = { source: null, color: null, style: null };
  obj[0] = require("../../../../../../../_runtime/04247_registerAsset.js") /* registerAsset */;
  obj[1] = secondaryColor;
  obj[2] = style;
  const merged1 = Object.assign(merged);
  const items = [callback(require("../../BaseIconImage.tsx") /* BaseIconImage */.BaseIconImage, obj), ];
  obj = { source: null, color: null, style: null };
  obj[0] = require("../../../../../../../_runtime/04248_registerAsset.js") /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj[2] = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require("../../BaseIconImage.tsx") /* BaseIconImage */.BaseIconImage, obj);
  obj[0] = items;
  return callback2(View, obj);
};