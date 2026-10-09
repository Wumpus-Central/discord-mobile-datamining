// === Module 8419: ? ===

// Module 8419
import _mod8420 from "module_8420" /* 8420 */;
import _mod8428 from "module_8428" /* 8428 */;
import flattenStyle from "module_8421" /* 8421 */;
import "module_4908";
import emptyFunction_mod from "module_4908" /* 4908 */;

const obj = {};
const module_8420 = Object.assign(_mod8420);
obj.style = flattenStyle(_mod8428);
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