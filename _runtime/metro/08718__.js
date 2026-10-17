// === Module 8718: ? ===

// Module 8718
import colorPropType from "colorPropType" /* 8706 */;
import _mod8714 from "module_8714" /* 8714 */;
import merged12 from "merged1" /* 8715 */;
import merged22 from "merged2" /* 8716 */;
import emptyFunction_mod from "module_5042" /* 5042 */;

const obj = {};
const size = Object.assign(_mod8714);
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