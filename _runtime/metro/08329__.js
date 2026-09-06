// _runtime/metro/08329__.js
import colorPropType from "../08314_colorPropType.js";
import _mod8316 from "08316__.js";
import _mod8330 from "08330__.js";
import flattenStyle from "08319__.js";
import emptyFunction from "04389__.js";

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
const module_8330 = flattenStyle(_mod8330);
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = emptyFunction.number;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = emptyFunction.func;
obj.onPress = emptyFunction.func;
obj.onLongPress = emptyFunction.func;
obj.pressRetentionOffset = _mod8316;
obj.selectable = emptyFunction.bool;
obj.selectionColor = colorPropType;
obj.suppressHighlighting = emptyFunction.bool;
obj.style = module_8330;
obj.testID = emptyFunction.string;
obj.nativeID = emptyFunction.string;
obj.allowFontScaling = emptyFunction.bool;
obj.maxFontSizeMultiplier = emptyFunction.number;
obj.accessible = emptyFunction.bool;
obj.adjustsFontSizeToFit = emptyFunction.bool;
obj.minimumFontScale = emptyFunction.number;
obj.disabled = emptyFunction.bool;
obj.dataDetectorType = emptyFunction.oneOf(["phoneNumber", "link", "email", "none", "all"]);

export default obj;
