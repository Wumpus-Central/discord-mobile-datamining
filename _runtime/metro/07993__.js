// === Module 7993: ? ===

// Module 7993
import _mod7994 from "module_7994" /* 7994 */;
import _mod8002 from "module_8002" /* 8002 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 7995 */;
import module_4707_mod from "module_4707" /* 4707 */;
import "module_4707";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4707;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8002), source: oneOfType(items), blurRadius: module_4707.number, defaultSource: module_4707.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4707.bool, fadeDuration: module_4707.number, internal_analyticTag: module_4707.string, onLoadStart: module_4707.func, onError: module_4707.func, onLoad: module_4707.func, onLoadEnd: module_4707.func, testID: module_4707.string, resizeMethod: module_4707.oneOf(["auto", "resize", "scale"]), resizeMode: module_4707.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_7994 = Object.assign(_mod7994);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4707 = module_4707_mod;
oneOfType = module_4707.oneOfType;
module_4707 = module_4707_mod;
const shape = module_4707.shape;
const obj2 = { uri: module_4707.string, headers: module_4707.objectOf(module_4707.string) };
module_4707 = module_4707_mod;
items = [shape(obj2), module_4707.number, ];
module_4707 = module_4707_mod;
const arrayOf = module_4707.arrayOf;
module_4707 = module_4707_mod;
const size = { uri: module_4707.string, width: module_4707.number, height: module_4707.number, headers: module_4707.objectOf(module_4707.string) };
const shape2 = module_4707.shape;
items[2] = arrayOf(shape2(size));
module_4707 = module_4707_mod;
oneOfType2 = module_4707.oneOfType;
module_4707 = module_4707_mod;
items1 = [, ];
const obj3 = { uri: module_4707.string };
items1[0] = module_4707.shape(obj3);
items1[1] = module_4707.number;
module_4707 = module_4707_mod;

export default obj;