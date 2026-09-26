// === Module 7777: ? ===

// Module 7777
import colorPropType from "colorPropType" /* 7762 */;
import _mod7764 from "module_7764" /* 7764 */;
import _mod7778 from "module_7778" /* 7778 */;
import flattenStyle from "module_7767" /* 7767 */;
import emptyFunction_mod from "module_4663" /* 4663 */;

const obj = { ellipsizeMode: null, numberOfLines: null, textBreakStrategy: null, onLayout: null, onPress: null, onLongPress: null, pressRetentionOffset: null, selectable: null, selectionColor: null, suppressHighlighting: null, style: null, testID: null, nativeID: null, allowFontScaling: null, maxFontSizeMultiplier: null, accessible: null, adjustsFontSizeToFit: null, minimumFontScale: null, disabled: null, dataDetectorType: null };
const module_7778 = flattenStyle(_mod7778);
let emptyFunction = emptyFunction_mod;
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = emptyFunction.func;
obj.onPress = emptyFunction.func;
obj.onLongPress = emptyFunction.func;
obj.pressRetentionOffset = _mod7764;
obj.selectable = emptyFunction.bool;
obj.selectionColor = colorPropType;
obj.suppressHighlighting = emptyFunction.bool;
obj.style = module_7778;
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