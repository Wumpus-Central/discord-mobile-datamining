// _runtime/00312_get_VirtualizedList.js
const require = arg1;
const dependencyMap = arg6;
const obj = { keyExtractor: require("elementsThatOverlapOffsets").keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => require("00314__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require("00326__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedListContextResetter", { get: () => require("00322_createContext.js") /* createContext */.VirtualizedListContextResetter, set: undefined });
Object.defineProperty(obj, "ViewabilityHelper", { get: () => require("00319_ViewabilityHelper.js") /* ViewabilityHelper */.default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => require("00318_Info.js") /* Info */.default, set: undefined });
arg5.default = obj;