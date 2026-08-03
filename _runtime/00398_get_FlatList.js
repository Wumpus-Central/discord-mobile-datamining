const require = arg1;
if (require("get Version").isDisableAnimations) {
  let importDefaultResult = require("mockCompositeAnimation");
} else {
  importDefaultResult = require("_combineCallbacks");
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require(400).default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require(401).default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => require(402) /* AnimatedScrollViewWithInvertedRefreshControl */.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require(405).default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require(407).default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require(408).default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;