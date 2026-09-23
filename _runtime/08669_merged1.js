// === Module 8669: merged1 ===

// Module 8669 (merged1)
import colorPropType from "colorPropType" /* 8660 */;
import emptyFunction from "module_4656" /* 4656 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;