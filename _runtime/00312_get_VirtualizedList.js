// _runtime/00312_get_VirtualizedList.js
import { _isNativeReflectConstruct } from "00314__isNativeReflectConstruct.js";
import { Info } from "00318_Info.js";
import { ViewabilityHelper } from "00319_ViewabilityHelper.js";
import { createContext } from "00322_createContext.js";
import { _isNativeReflectConstruct } from "00326__isNativeReflectConstruct.js";
const require = arg1;
const dependencyMap = arg6;
const obj = { keyExtractor: require("elementsThatOverlapOffsets").keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "VirtualizedListContextResetter", { get: () => createContext.VirtualizedListContextResetter, set: undefined });
Object.defineProperty(obj, "ViewabilityHelper", { get: () => ViewabilityHelper.default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => Info.default, set: undefined });
arg5.default = obj;