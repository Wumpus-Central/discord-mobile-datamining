// === Module 7960: ? ===

// Module 7960
import _mod7961 from "module_7961" /* 7961 */;
import _mod7969 from "module_7969" /* 7969 */;
import flattenStyle from "module_7962" /* 7962 */;
import "module_4693";
import emptyFunction_mod from "module_4693" /* 4693 */;

const obj = {};
const module_7961 = Object.assign(_mod7961);
obj.style = flattenStyle(_mod7969);
let emptyFunction = emptyFunction_mod;
const obj2 = { uri: emptyFunction.string, headers: null };
let emptyFunction = emptyFunction_mod;
obj2.headers = emptyFunction.objectOf(emptyFunction.string);
const items = [emptyFunction.shape(obj2), emptyFunction.number, ];
let emptyFunction = emptyFunction_mod;
const size = { uri: emptyFunction.string, width: emptyFunction.number, height: emptyFunction.number, headers: null };
let emptyFunction = emptyFunction_mod;
size.headers = emptyFunction.objectOf(emptyFunction.string);
items[2] = emptyFunction.arrayOf(emptyFunction.shape(size));
obj.source = emptyFunction.oneOfType(items);
obj.blurRadius = emptyFunction.number;
obj.defaultSource = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
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
let emptyFunction = emptyFunction_mod;
obj.resizeMethod = emptyFunction.oneOf(["auto", "resize", "scale"]);
let emptyFunction = emptyFunction_mod;
obj.resizeMode = emptyFunction.oneOf(["cover", "contain", "stretch", "repeat", "center"]);

export default obj;