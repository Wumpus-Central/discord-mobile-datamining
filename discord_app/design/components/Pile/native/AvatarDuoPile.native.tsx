// discord_app/design/components/Pile/native/AvatarDuoPile.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import SolidCutout from "../../Icon/native/ClipView.tsx";
import Pile from "Pile.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  const merged = Object.assign(size, Object.create(null));
  if ("aria-label" in merged) {
    aria_label = merged["aria-label"];
  } else {
    let tmp3Result = tmp3(9286);
    aria_label = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { aria-label, shape: SolidCutout.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  tmp3Result = tmp3(12);
  if (tmp3Result.isArray(size)) {
    let mapped = size.map((arg0) => callback(table[6]).AVATAR_SIZE_MAP[arg0]);
  } else {
    mapped = tmp3(9441).AVATAR_SIZE_MAP[size];
  }
  obj[2] = mapped;
  obj[6] = size.children;
  return jsx(Pile.Pile, { aria-label, shape: SolidCutout.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};