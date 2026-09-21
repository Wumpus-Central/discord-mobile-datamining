// _runtime/metro/08600__.js
import colorPropType from "../08585_colorPropType.js";
import _mod8587 from "08587__.js";
import _mod8601 from "08601__.js";
import flattenStyle from "08590__.js";
import emptyFunction_mod from "04585__.js";

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
const module_8601 = flattenStyle(_mod8601);
let emptyFunction = emptyFunction_mod;
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = emptyFunction.func;
obj.onPress = emptyFunction.func;
obj.onLongPress = emptyFunction.func;
obj.pressRetentionOffset = _mod8587;
obj.selectable = emptyFunction.bool;
obj.selectionColor = colorPropType;
obj.suppressHighlighting = emptyFunction.bool;
obj.style = module_8601;
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
