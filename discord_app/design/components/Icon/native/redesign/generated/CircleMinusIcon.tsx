// discord_app/design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import registerAsset from "../../../../../../../_runtime/14659_registerAsset.js";
import registerAsset2 from "../../../../../../../_runtime/14660_registerAsset.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx");

export const CircleMinusIcon = function CircleMinusIcon(color) {
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  let obj = { children: null };
  obj = { source: registerAsset, color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(BaseIconImage.BaseIconImage, obj), ];
  obj = { source: registerAsset2, color: INTERACTIVE_ICON_DEFAULT, style: items2 };
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = callback(BaseIconImage.BaseIconImage, obj);
  obj[0] = items;
  return callback2(View, obj);
};