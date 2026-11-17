// === Module 9764: merged1 ===

// Module 9764 (merged1)
import colorPropType from "colorPropType" /* 9755 */;
import emptyFunction from "module_5351" /* 5351 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;