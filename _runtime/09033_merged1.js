// _runtime/09033_merged1.js
import colorPropType from "09024_colorPropType.js";
import emptyFunction from "04210_emptyFunction.js";

let obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
obj = { width: emptyFunction.number, height: emptyFunction.number };
obj[1] = emptyFunction.shape(obj);
obj[2] = emptyFunction.number;
obj[3] = emptyFunction.number;

export default obj;