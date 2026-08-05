// _runtime/00398_get_FlatList.js
import { AnimatedScrollViewWithInvertedRefreshControl } from "00402_AnimatedScrollViewWithInvertedRefreshControl.js";
import { 00400__ } from "metro/00400__.js";
import { 00401__ } from "metro/00401__.js";
import { 00405__ } from "metro/00405__.js";
import { 00407__ } from "metro/00407__.js";
import { 00408__ } from "metro/00408__.js";
const require = arg1;
if (require("get Version").isDisableAnimations) {
  let importDefaultResult = require("mockCompositeAnimation");
} else {
  importDefaultResult = require("_combineCallbacks");
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => 00400__.default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => 00401__.default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => AnimatedScrollViewWithInvertedRefreshControl /* AnimatedScrollViewWithInvertedRefreshControl */.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => 00405__.default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => 00407__.default, set: undefined });
Object.defineProperty(obj, "View", { get: () => 00408__.default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;