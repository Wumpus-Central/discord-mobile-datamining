// === Module 8424: ? ===

// Module 8424
import _mod8425 from "module_8425" /* 8425 */;
import _mod8433 from "module_8433" /* 8433 */;
import flattenStyle from "flattenStyle" /* 8426 */;
import emptyFunction from "emptyFunction" /* 4307 */;

let obj = {};
const module_8425 = Object.assign(_mod8425);
obj.style = flattenStyle(_mod8433);
obj = { uri: emptyFunction.string, headers: null };
obj[1] = emptyFunction.objectOf(emptyFunction.string);
const items = [emptyFunction.shape(obj), emptyFunction.number, ];
obj = { uri: emptyFunction.string, width: emptyFunction.number, height: emptyFunction.number, headers: null };
obj[3] = emptyFunction.objectOf(emptyFunction.string);
items[2] = emptyFunction.arrayOf(emptyFunction.shape(obj));
obj.source = emptyFunction.oneOfType(items);
obj.blurRadius = emptyFunction.number;
obj.defaultSource = emptyFunction.number;
const items1 = [emptyFunction.shape({ uri: emptyFunction.string }), emptyFunction.number];
obj.loadingIndicatorSource = emptyFunction.oneOfType(items1);
obj.progressiveRenderingEnabled = emptyFunction.bool;
obj.fadeDuration = emptyFunction.number;
obj.internal_analyticTag = emptyFunction.string;
obj.onLoadStart = emptyFunction.func;
obj.onError = emptyFunction.func;
obj.onLoad = emptyFunction.func;
obj.onLoadEnd = emptyFunction.func;
obj.testID = emptyFunction.string;
obj.resizeMethod = emptyFunction.oneOf(["auto", "resize", "scale"]);
obj.resizeMode = emptyFunction.oneOf(["cover", "contain", "stretch", "repeat", "center"]);

export default obj;