// === Module 398: ? ===

// Module 398
import get_VersionDefault from "get Version" /* 273 */;
import _combineCallbacksDefault from "_combineCallbacks" /* 354 */;
import mockCompositeAnimationDefault from "mockCompositeAnimation" /* 399 */;

const require = arg1;
if (get_VersionDefault.isDisableAnimations) {
  let importDefaultResult = mockCompositeAnimationDefault;
} else {
  importDefaultResult = _combineCallbacksDefault;
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require("module_400").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("module_401").default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => require("AnimatedScrollViewWithInvertedRefreshControl").default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require("module_405").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("module_407").default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require("module_408").default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;