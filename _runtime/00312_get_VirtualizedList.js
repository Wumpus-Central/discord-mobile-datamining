// === Module 312: get VirtualizedList ===

// Module 312 (get VirtualizedList)
const require = fn;
const dependencyMap = arg6;
const obj = { keyExtractor: require("elementsThatOverlapOffsets").keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => require(314) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require(326) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedListContextResetter", { get: () => require(322) /* createContext */.VirtualizedListContextResetter, set: undefined });
Object.defineProperty(obj, "ViewabilityHelper", { get: () => require(319) /* ViewabilityHelper */.default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => require(318) /* Info */.default, set: undefined });
arg5.default = obj;