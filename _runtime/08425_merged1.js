// === Module 8425: merged1 ===

// Module 8425 (merged1)
import colorPropType from "colorPropType" /* 8416 */;
import emptyFunction from "module_4908" /* 4908 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;