// _runtime/metro/00398__.js
import get_VersionDefault from "../00273_get_Version.js";
import _modDef354 from "00354__.js";
import _modDef399 from "00399__.js";

const require = globalThis.__r;

let importDefaultResult;
if (get_VersionDefault.isDisableAnimations) {
  importDefaultResult = _modDef399;
} else {
  importDefaultResult = _modDef354;
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require("00400__.js").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("00401__.js").default, set: undefined });
Object.defineProperty(obj, "ScrollView", {
  get: () => require("AnimatedScrollViewWithOrWithoutInvertedRefreshControl").default,
  set: undefined,
});
Object.defineProperty(obj, "SectionList", { get: () => require("00405__.js").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("00407__.js").default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require("00408__.js").default, set: undefined });
const merged = Object.assign(importDefaultResult);

export default obj;
