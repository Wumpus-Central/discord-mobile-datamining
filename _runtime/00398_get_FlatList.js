// _runtime/00398_get_FlatList.js
import get_VersionDefault from "get Version" /* 273 */;
import _combineCallbacksDefault from "_combineCallbacks" /* 354 */;
import mockCompositeAnimationDefault from "mockCompositeAnimation" /* 399 */;
import { AnimatedScrollViewWithInvertedRefreshControl } from "00402_AnimatedScrollViewWithInvertedRefreshControl.js";
import { 00400__ } from "metro/00400__.js";
import { 00401__ } from "metro/00401__.js";
import { 00405__ } from "metro/00405__.js";
import { 00407__ } from "metro/00407__.js";
import { 00408__ } from "metro/00408__.js";

const require = arg1;
if (get_VersionDefault.isDisableAnimations) {
  let importDefaultResult = mockCompositeAnimationDefault;
} else {
  importDefaultResult = _combineCallbacksDefault;
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => 00400__.default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => 00401__.default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => AnimatedScrollViewWithInvertedRefreshControl.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => 00405__.default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => 00407__.default, set: undefined });
Object.defineProperty(obj, "View", { get: () => 00408__.default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;