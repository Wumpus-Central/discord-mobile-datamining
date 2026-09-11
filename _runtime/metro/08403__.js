// === Module 8403: ? ===

// Module 8403
import _mod8404 from "module_8404" /* 8404 */;
import _mod8412 from "module_8412" /* 8412 */;
import flattenStyle from "module_8405" /* 8405 */;
import "module_4436";
import emptyFunction from "module_4436" /* 4436 */;

let obj = {};
const module_8404 = Object.assign(_mod8404);
obj.style = flattenStyle(_mod8412);
obj = { uri: emptyFunction.string, headers: null };
obj.headers = emptyFunction.objectOf(emptyFunction.string);
const items = [emptyFunction.shape(obj), emptyFunction.number, ];
const size = { uri: emptyFunction.string, width: emptyFunction.number, height: emptyFunction.number, headers: null };
size.headers = emptyFunction.objectOf(emptyFunction.string);
items[2] = emptyFunction.arrayOf(emptyFunction.shape(size));
obj.source = emptyFunction.oneOfType(items);
obj.blurRadius = emptyFunction.number;
obj.defaultSource = emptyFunction.number;
obj = { uri: emptyFunction.string };
const items1 = [emptyFunction.shape(obj), emptyFunction.number];
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