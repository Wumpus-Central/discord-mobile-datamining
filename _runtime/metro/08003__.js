// === Module 8003: ? ===

// Module 8003
import _mod8004 from "module_8004" /* 8004 */;
import _mod8012 from "module_8012" /* 8012 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8005 */;
import module_4713_mod from "module_4713" /* 4713 */;
import "module_4713";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4713;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8012), source: oneOfType(items), blurRadius: module_4713.number, defaultSource: module_4713.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4713.bool, fadeDuration: module_4713.number, internal_analyticTag: module_4713.string, onLoadStart: module_4713.func, onError: module_4713.func, onLoad: module_4713.func, onLoadEnd: module_4713.func, testID: module_4713.string, resizeMethod: module_4713.oneOf(["auto", "resize", "scale"]), resizeMode: module_4713.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8004 = Object.assign(_mod8004);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4713 = module_4713_mod;
oneOfType = module_4713.oneOfType;
module_4713 = module_4713_mod;
const shape = module_4713.shape;
const obj2 = { uri: module_4713.string, headers: module_4713.objectOf(module_4713.string) };
module_4713 = module_4713_mod;
items = [shape(obj2), module_4713.number, ];
module_4713 = module_4713_mod;
const arrayOf = module_4713.arrayOf;
module_4713 = module_4713_mod;
const size = { uri: module_4713.string, width: module_4713.number, height: module_4713.number, headers: module_4713.objectOf(module_4713.string) };
const shape2 = module_4713.shape;
items[2] = arrayOf(shape2(size));
module_4713 = module_4713_mod;
oneOfType2 = module_4713.oneOfType;
module_4713 = module_4713_mod;
items1 = [, ];
const obj3 = { uri: module_4713.string };
items1[0] = module_4713.shape(obj3);
items1[1] = module_4713.number;
module_4713 = module_4713_mod;

export default obj;