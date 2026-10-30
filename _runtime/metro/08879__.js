// === Module 8879: ? ===

// Module 8879
import _mod8880 from "module_8880" /* 8880 */;
import _mod8888 from "module_8888" /* 8888 */;
import flattenStyle from "module_8881" /* 8881 */;
import "module_5048";
import emptyFunction_mod from "module_5048" /* 5048 */;

const obj = {};
const module_8880 = Object.assign(_mod8880);
obj.style = flattenStyle(_mod8888);
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