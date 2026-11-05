// === Module 9043: ? ===

// Module 9043
import colorPropType from "colorPropType" /* 9031 */;
import _mod9039 from "module_9039" /* 9039 */;
import merged12 from "merged1" /* 9040 */;
import merged22 from "merged2" /* 9041 */;
import emptyFunction_mod from "module_5182" /* 5182 */;

const obj = {};
const size = Object.assign(_mod9039);
const merged1 = Object.assign(merged12);
const merged2 = Object.assign(merged22);
let emptyFunction = emptyFunction_mod;
obj.resizeMode = emptyFunction.oneOf(["center", "contain", "cover", "repeat", "stretch"]);
let emptyFunction = emptyFunction_mod;
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderWidth = emptyFunction.number;
obj.borderRadius = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.overflow = emptyFunction.oneOf(["visible", "hidden"]);
obj.tintColor = colorPropType;
obj.opacity = emptyFunction.number;
obj.overlayColor = emptyFunction.string;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;

export default obj;