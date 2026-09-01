// _runtime/metro/08411__.js
import _mod8412 from "08412__.js";
import _mod8420 from "08420__.js";
import flattenStyle from "../08413_flattenStyle.js";
import emptyFunction from "../04307_emptyFunction.js";

let obj = {};
const module_8412 = Object.assign(_mod8412);
obj.style = flattenStyle(_mod8420);
obj = { uri: emptyFunction.string, headers: null };
obj[1] = emptyFunction.objectOf(emptyFunction.string);
const items = [emptyFunction.shape(obj), emptyFunction.number];
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
