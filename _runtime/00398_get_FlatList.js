// _runtime/00398_get_FlatList.js
const require = arg1;
if (require("get Version").isDisableAnimations) {
  let importDefaultResult = require("mockCompositeAnimation");
} else {
  importDefaultResult = require("_combineCallbacks");
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require("metro/00400__.js").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("metro/00401__.js").default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => require("00402_AnimatedScrollViewWithInvertedRefreshControl.js") /* AnimatedScrollViewWithInvertedRefreshControl */.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require("metro/00405__.js").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("metro/00407__.js").default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require("metro/00408__.js").default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;