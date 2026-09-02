// _runtime/metro/08424__.js
import colorPropType from "../08417_colorPropType.js";
import _mod8425 from "08425__.js";
import merged12 from "../08426_merged1.js";
import merged22 from "../08427_merged2.js";
import emptyFunction from "../04307_emptyFunction.js";

const obj = {};
const module_8425 = Object.assign(_mod8425);
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
