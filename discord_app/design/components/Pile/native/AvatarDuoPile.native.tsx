// discord_app/design/components/Pile/native/AvatarDuoPile.native.tsx
import "noop";
import { jsx } from "jsxProd";
import { SolidCutout } from "../../Icon/native/ClipView.tsx";
import { Pile } from "Pile.native.tsx";

const require = arg1;
const result = require("Pile").fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  const merged = Object.assign(size, Object.create(null));
  if ("aria-label" in merged) {
    aria_label = merged["aria-label"];
  } else {
    let tmp3Result = tmp3(12057);
    aria_label = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { aria-label, shape: SolidCutout.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  tmp3Result = tmp3(12);
  if (tmp3Result.isArray(size)) {
    let mapped = size.map((arg0) => callback(table[6]).AVATAR_SIZE_MAP[arg0]);
  } else {
    mapped = tmp3(12390).AVATAR_SIZE_MAP[size];
  }
  obj[2] = mapped;
  obj[6] = size.children;
  return jsx(Pile.Pile, { aria-label, shape: SolidCutout.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};