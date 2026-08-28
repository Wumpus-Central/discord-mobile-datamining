// _runtime/metro/08357__.js
import _mod8358 from "08358__.js";
import _mod8366 from "08366__.js";
import flattenStyle from "../08359_flattenStyle.js";
import emptyFunction from "../04276_emptyFunction.js";

let obj = {};
const module_8358 = Object.assign(_mod8358);
obj.style = flattenStyle(_mod8366);
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