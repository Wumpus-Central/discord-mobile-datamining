// _runtime/00312_get_VirtualizedList.js
import elementsThatOverlapOffsets from "00313_elementsThatOverlapOffsets.js";

const require = globalThis.__r;

const obj = { keyExtractor: elementsThatOverlapOffsets.keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => require("metro/00314__.js").default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", {
  get: () => require("metro/00326__.js").default,
  set: undefined,
});
Object.defineProperty(obj, "VirtualizedListContextResetter", {
  get: () => require("metro/00322__.js").VirtualizedListContextResetter,
  set: undefined,
});
Object.defineProperty(obj, "ViewabilityHelper", { get: () => require("metro/00319__.js").default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => require("metro/00318__.js").default, set: undefined });

export default obj;
