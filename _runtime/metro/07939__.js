// === Module 7939: ? ===

// Module 7939
import colorPropType from "colorPropType" /* 7927 */;
import _mod7935 from "module_7935" /* 7935 */;
import merged12 from "merged1" /* 7936 */;
import merged22 from "merged2" /* 7937 */;
import emptyFunction_mod from "module_4663" /* 4663 */;

const obj = {};
const size = Object.assign(_mod7935);
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