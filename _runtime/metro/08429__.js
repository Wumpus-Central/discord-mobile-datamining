// === Module 8429: ? ===

// Module 8429
import colorPropType from "colorPropType" /* 8417 */;
import _mod8425 from "module_8425" /* 8425 */;
import merged12 from "merged1" /* 8426 */;
import merged22 from "merged2" /* 8427 */;
import emptyFunction from "emptyFunction" /* 4307 */;

const obj = {};
const module_8425 = Object.assign(_mod8425);
const merged1 = Object.assign(merged12);
const merged2 = Object.assign(merged22);
obj.resizeMode = emptyFunction.oneOf(["center", "contain", "cover", "repeat", "stretch"]);
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderWidth = emptyFunction.number;
obj.borderRadius = emptyFunction.number;
obj.overflow = emptyFunction.oneOf(["visible", "hidden"]);
obj.tintColor = colorPropType;
obj.opacity = emptyFunction.number;
obj.overlayColor = emptyFunction.string;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;

export default obj;