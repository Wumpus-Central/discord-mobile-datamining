// === Module 398: ? ===

// Module 398
import get_VersionDefault from "get Version" /* 273 */;
import _modDef354 from "module_354" /* 354 */;
import _modDef399 from "module_399" /* 399 */;

const require = globalThis.__r;

let importDefaultResult;
if (get_VersionDefault.isDisableAnimations) {
  importDefaultResult = _modDef399;
} else {
  importDefaultResult = _modDef354;
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require("module_400").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("module_401").default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => require("AnimatedScrollViewWithOrWithoutInvertedRefreshControl").default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require("module_405").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("module_407").default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require("module_408").default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;