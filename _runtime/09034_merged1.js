// _runtime/09034_merged1.js
import colorPropType from "09025_colorPropType.js";
import emptyFunction from "04205_emptyFunction.js";

const obj = { width: emptyFunction.number, height: emptyFunction.number };
obj[1] = emptyFunction.shape(obj);
obj[2] = emptyFunction.number;
obj[3] = emptyFunction.number;

export default obj;