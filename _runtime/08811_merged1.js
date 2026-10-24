// === Module 8811: merged1 ===

// Module 8811 (merged1)
import colorPropType from "colorPropType" /* 8802 */;
import emptyFunction from "module_5010" /* 5010 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;