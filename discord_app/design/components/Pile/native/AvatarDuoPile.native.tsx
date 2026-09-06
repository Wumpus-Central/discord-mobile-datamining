// === Module 14177: AvatarDuoPile ===

// Module 14177 (AvatarDuoPile)
import _mod12 from "module_12" /* 12 */;
import ClipView from "ClipView" /* 8813 */;
import Pile from "Pile" /* 11000 */;
import ListUtils from "ListUtils" /* 12619 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 13028 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0 }));
  if ("aria-label" in merged) {
    let prop = merged["aria-label"];
  } else {
    let tmp3Result = ListUtils;
    prop = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  tmp3Result = _mod12;
  if (tmp3Result.isArray(size)) {
    let mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
  } else {
    mapped = CutoutableAvatarImage.AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(Pile.Pile, { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};