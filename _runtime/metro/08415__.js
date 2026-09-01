// === Module 8415: ? ===

// Module 8415
import colorPropType from "colorPropType" /* 8408 */;
import _mod8416 from "module_8416" /* 8416 */;
import merged12 from "merged1" /* 8417 */;
import merged22 from "merged2" /* 8418 */;
import emptyFunction from "emptyFunction" /* 4307 */;

const obj = {};
const module_8416 = Object.assign(_mod8416);
const merged1 = Object.assign(merged12);
const merged2 = Object.assign(merged22);
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderTopColor = colorPropType;
obj.borderRightColor = colorPropType;
obj.borderBottomColor = colorPropType;
obj.borderLeftColor = colorPropType;
obj.borderStartColor = colorPropType;
obj.borderEndColor = colorPropType;
obj.borderRadius = emptyFunction.number;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderTopStartRadius = emptyFunction.number;
obj.borderTopEndRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;
obj.borderBottomStartRadius = emptyFunction.number;
obj.borderBottomEndRadius = emptyFunction.number;
obj.borderStyle = emptyFunction.oneOf(["solid", "dotted", "dashed"]);
obj.borderWidth = emptyFunction.number;
obj.borderTopWidth = emptyFunction.number;
obj.borderRightWidth = emptyFunction.number;
obj.borderBottomWidth = emptyFunction.number;
obj.borderLeftWidth = emptyFunction.number;
obj.opacity = emptyFunction.number;
obj.elevation = emptyFunction.number;

export default obj;