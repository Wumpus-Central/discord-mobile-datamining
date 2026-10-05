// _runtime/metro/08005__.js
import normalizeColor from "../07990_normalizeColor.js";
import _mod7992 from "07992__.js";
import _mod8006 from "08006__.js";
import DeprecatedStyleSheetPropType from "../07995_DeprecatedStyleSheetPropType.js";
import "module_4707";
import module_4707_mod from "04707__.js";

let module_4707;
let module_8006;
const obj = {
  ellipsizeMode: module_4707.oneOf(["head", "middle", "tail", "clip"]),
  numberOfLines: module_4707.number,
  textBreakStrategy: module_4707.oneOf(["simple", "highQuality", "balanced"]),
  onLayout: module_4707.func,
  onPress: module_4707.func,
  onLongPress: module_4707.func,
  pressRetentionOffset: _mod7992,
  selectable: module_4707.bool,
  selectionColor: normalizeColor,
  suppressHighlighting: module_4707.bool,
  style: module_8006,
  testID: module_4707.string,
  nativeID: module_4707.string,
  allowFontScaling: module_4707.bool,
  maxFontSizeMultiplier: module_4707.number,
  accessible: module_4707.bool,
  adjustsFontSizeToFit: module_4707.bool,
  minimumFontScale: module_4707.number,
  disabled: module_4707.bool,
  dataDetectorType: module_4707.oneOf(["phoneNumber", "link", "email", "none", "all"]),
};
module_8006 = DeprecatedStyleSheetPropType(_mod8006);
module_4707 = module_4707_mod;

export default obj;
