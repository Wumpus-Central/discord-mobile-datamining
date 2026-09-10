// === Module 8382: ? ===

// Module 8382
import _mod8383 from "module_8383" /* 8383 */;
import _mod8391 from "module_8391" /* 8391 */;
import flattenStyle from "module_8384" /* 8384 */;
import "module_4434";
import emptyFunction from "module_4434" /* 4434 */;

let obj = {};
const module_8383 = Object.assign(_mod8383);
obj.style = flattenStyle(_mod8391);
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