// === Module 13541: AvatarDuoPile ===

// Module 13541 (AvatarDuoPile)
import apply from "apply" /* 12 */;
import noopAll from "noop" /* 19 */;
import SolidCutout from "SolidCutout" /* 8402 */;
import Pile from "Pile" /* 11788 */;
import getListSummaryLabel from "getListSummaryLabel" /* 11790 */;
import StaticNativeCutoutAvatarImage from "StaticNativeCutoutAvatarImage" /* 12125 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  const merged = Object.assign(size, Object.create(null));
  if ("aria-label" in merged) {
    let prop = merged["aria-label"];
  } else {
    let tmp3Result = getListSummaryLabel;
    prop = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { "aria-label": prop, shape: SolidCutout.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  tmp3Result = apply;
  if (tmp3Result.isArray(size)) {
    let mapped = size.map((item, index) => callback(table[6]).AVATAR_SIZE_MAP[item]);
  } else {
    mapped = StaticNativeCutoutAvatarImage.AVATAR_SIZE_MAP[size];
  }
  obj[2] = mapped;
  obj[6] = size.children;
  return jsx(Pile.Pile, { "aria-label": prop, shape: SolidCutout.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};