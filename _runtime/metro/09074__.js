// === Module 9074: ? ===

// Module 9074
import colorPropType from "colorPropType" /* 9062 */;
import _mod9070 from "module_9070" /* 9070 */;
import merged12 from "merged1" /* 9071 */;
import merged22 from "merged2" /* 9072 */;
import emptyFunction from "emptyFunction" /* 4209 */;

const obj = {};
const module_9070 = Object.assign(_mod9070);
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