// _runtime/metro/08352__.js
import colorPropType from "../08340_colorPropType.js";
import _mod8348 from "08348__.js";
import merged12 from "../08349_merged1.js";
import merged22 from "../08350_merged2.js";
import emptyFunction from "../04275_emptyFunction.js";

const obj = {};
const module_8348 = Object.assign(_mod8348);
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