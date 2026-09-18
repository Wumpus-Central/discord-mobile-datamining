// _runtime/metro/08561__.js
import colorPropType from "../08546_colorPropType.js";
import _mod8548 from "08548__.js";
import _mod8562 from "08562__.js";
import flattenStyle from "08551__.js";
import emptyFunction_mod from "04551__.js";

const obj = {
  ellipsizeMode: null,
  numberOfLines: null,
  textBreakStrategy: null,
  onLayout: null,
  onPress: null,
  onLongPress: null,
  pressRetentionOffset: null,
  selectable: null,
  selectionColor: null,
  suppressHighlighting: null,
  style: null,
  testID: null,
  nativeID: null,
  allowFontScaling: null,
  maxFontSizeMultiplier: null,
  accessible: null,
  adjustsFontSizeToFit: null,
  minimumFontScale: null,
  disabled: null,
  dataDetectorType: null,
};
const module_8562 = flattenStyle(_mod8562);
let emptyFunction = emptyFunction_mod;
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = emptyFunction.func;
obj.onPress = emptyFunction.func;
obj.onLongPress = emptyFunction.func;
obj.pressRetentionOffset = _mod8548;
obj.selectable = emptyFunction.bool;
obj.selectionColor = colorPropType;
obj.suppressHighlighting = emptyFunction.bool;
obj.style = module_8562;
obj.testID = emptyFunction.string;
obj.nativeID = emptyFunction.string;
obj.allowFontScaling = emptyFunction.bool;
obj.maxFontSizeMultiplier = emptyFunction.number;
obj.accessible = emptyFunction.bool;
obj.adjustsFontSizeToFit = emptyFunction.bool;
obj.minimumFontScale = emptyFunction.number;
obj.disabled = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.dataDetectorType = emptyFunction.oneOf(["phoneNumber", "link", "email", "none", "all"]);

export default obj;
