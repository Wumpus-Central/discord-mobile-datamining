// _runtime/metro/08015__.js
import normalizeColor from "../08000_normalizeColor.js";
import _mod8002 from "08002__.js";
import _mod8016 from "08016__.js";
import DeprecatedStyleSheetPropType from "../08005_DeprecatedStyleSheetPropType.js";
import "module_4713";
import module_4713_mod from "04713__.js";

let module_4713;
let module_8016;
const obj = {
  ellipsizeMode: module_4713.oneOf(["head", "middle", "tail", "clip"]),
  numberOfLines: module_4713.number,
  textBreakStrategy: module_4713.oneOf(["simple", "highQuality", "balanced"]),
  onLayout: module_4713.func,
  onPress: module_4713.func,
  onLongPress: module_4713.func,
  pressRetentionOffset: _mod8002,
  selectable: module_4713.bool,
  selectionColor: normalizeColor,
  suppressHighlighting: module_4713.bool,
  style: module_8016,
  testID: module_4713.string,
  nativeID: module_4713.string,
  allowFontScaling: module_4713.bool,
  maxFontSizeMultiplier: module_4713.number,
  accessible: module_4713.bool,
  adjustsFontSizeToFit: module_4713.bool,
  minimumFontScale: module_4713.number,
  disabled: module_4713.bool,
  dataDetectorType: module_4713.oneOf(["phoneNumber", "link", "email", "none", "all"]),
};
module_8016 = DeprecatedStyleSheetPropType(_mod8016);
module_4713 = module_4713_mod;

export default obj;
