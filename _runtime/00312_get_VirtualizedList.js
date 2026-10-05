// === Module 312: get VirtualizedList ===

// Module 312 (get VirtualizedList)
import elementsThatOverlapOffsets from "elementsThatOverlapOffsets" /* 313 */;

const require = globalThis.__r;

const obj = { keyExtractor: elementsThatOverlapOffsets.keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => require("module_314").default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require("module_326").default, set: undefined });
Object.defineProperty(obj, "VirtualizedListContextResetter", { get: () => require("module_322").VirtualizedListContextResetter, set: undefined });
Object.defineProperty(obj, "ViewabilityHelper", { get: () => require("module_319").default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => require("module_318").default, set: undefined });

export default obj;