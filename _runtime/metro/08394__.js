// === Module 8394: ? ===

// Module 8394
import colorPropType from "colorPropType" /* 8379 */;
import _mod8381 from "module_8381" /* 8381 */;
import _mod8395 from "module_8395" /* 8395 */;
import flattenStyle from "module_8384" /* 8384 */;
import emptyFunction from "module_4434" /* 4434 */;

const obj = { ellipsizeMode: null, numberOfLines: null, textBreakStrategy: null, onLayout: null, onPress: null, onLongPress: null, pressRetentionOffset: null, selectable: null, selectionColor: null, suppressHighlighting: null, style: null, testID: null, nativeID: null, allowFontScaling: null, maxFontSizeMultiplier: null, accessible: null, adjustsFontSizeToFit: null, minimumFontScale: null, disabled: null, dataDetectorType: null };
const module_8395 = flattenStyle(_mod8395);
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = emptyFunction.number;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = emptyFunction.func;
obj.onPress = emptyFunction.func;
obj.onLongPress = emptyFunction.func;
obj.pressRetentionOffset = _mod8381;
obj.selectable = emptyFunction.bool;
obj.selectionColor = colorPropType;
obj.suppressHighlighting = emptyFunction.bool;
obj.style = module_8395;
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