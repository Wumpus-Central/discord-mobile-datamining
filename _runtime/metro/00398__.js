// _runtime/metro/00398__.js
import get_VersionDefault from "../00273_get_Version.js";
import _combineCallbacksDefault from "../00354__combineCallbacks.js";
import mockCompositeAnimationDefault from "../00399_mockCompositeAnimation.js";

const require = arg1;
if (get_VersionDefault.isDisableAnimations) {
  let importDefaultResult = mockCompositeAnimationDefault;
} else {
  importDefaultResult = _combineCallbacksDefault;
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require("00400__.js").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("00401__.js").default, set: undefined });
Object.defineProperty(obj, "ScrollView", {
  get: () => require("AnimatedScrollViewWithInvertedRefreshControl").default,
  set: undefined,
});
Object.defineProperty(obj, "SectionList", { get: () => require("00405__.js").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("00407__.js").default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require("00408__.js").default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;
