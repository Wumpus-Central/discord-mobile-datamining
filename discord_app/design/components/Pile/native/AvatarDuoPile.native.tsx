// discord_app/design/components/Pile/native/AvatarDuoPile.native.tsx
import apply from "../../../../../_runtime/00012_apply.js";
import noopAll from "../../../../../_runtime/00019_noop.js";
import SolidCutout from "../../Icon/native/ClipView.tsx";
import Pile from "Pile.native.tsx";
import getListSummaryLabel from "../../../../utils/ListUtils.tsx";
import StaticNativeCutoutAvatarImage from "../../../void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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