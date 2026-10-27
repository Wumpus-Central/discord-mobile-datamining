// === Module 8817: ? ===

// Module 8817
import colorPropType from "colorPropType" /* 8802 */;
import _mod8804 from "module_8804" /* 8804 */;
import _mod8818 from "module_8818" /* 8818 */;
import flattenStyle from "module_8807" /* 8807 */;
import emptyFunction_mod from "module_5011" /* 5011 */;

const obj = { ellipsizeMode: null, numberOfLines: null, textBreakStrategy: null, onLayout: null, onPress: null, onLongPress: null, pressRetentionOffset: null, selectable: null, selectionColor: null, suppressHighlighting: null, style: null, testID: null, nativeID: null, allowFontScaling: null, maxFontSizeMultiplier: null, accessible: null, adjustsFontSizeToFit: null, minimumFontScale: null, disabled: null, dataDetectorType: null };
const module_8818 = flattenStyle(_mod8818);
let emptyFunction = emptyFunction_mod;
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = emptyFunction.func;
obj.onPress = emptyFunction.func;
obj.onLongPress = emptyFunction.func;
obj.pressRetentionOffset = _mod8804;
obj.selectable = emptyFunction.bool;
obj.selectionColor = colorPropType;
obj.suppressHighlighting = emptyFunction.bool;
obj.style = module_8818;
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