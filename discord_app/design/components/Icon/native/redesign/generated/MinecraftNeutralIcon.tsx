// discord_app/design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import registerAsset from "../../../../../../../_runtime/08705_registerAsset.js";
import registerAsset2 from "../../../../../../../_runtime/08706_registerAsset.js";
import registerAsset3 from "../../../../../../../_runtime/08707_registerAsset.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting(
  "design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx",
);

export const MinecraftNeutralIcon = function MinecraftNeutralIcon(secondaryColor) {
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.create(null));
  let obj = { children: null };
  obj = { source: registerAsset, color, style };
  const merged1 = Object.assign(merged);
  const items = [callback(BaseIconImage.BaseIconImage, obj), ,];
  obj = { source: registerAsset2, color: str, style: items2 };
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = callback(BaseIconImage.BaseIconImage, obj);
  const items3 = [style];
  const items4 = [];
  items4[HermesBuiltin.arraySpread(items3.flat(), 0)] = { position: "absolute", top: 0 };
  const merged3 = Object.assign(merged);
  items[2] = callback(BaseIconImage.BaseIconImage, { source: registerAsset3, color: str2, style: items4 });
  obj[0] = items;
  return callback2(View, obj);
};
