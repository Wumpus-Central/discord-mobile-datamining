import { getListSummaryLabel } from "../../../../utils/ListUtils.tsx";
import { StaticNativeCutoutAvatarImage } from "../../../void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx";
import { SolidCutout } from "../../Icon/native/ClipView.tsx";
import { Pile } from "Pile.native.tsx";
import { map } from "PileOverflow.native.tsx";
// discord_app/design/components/Pile/native/AvatarPile.native.tsx
import noop from "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("StaticNativeCutoutAvatarImage").fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export const AvatarPile = function AvatarPile(arg0) {
  let children;
  let names;
  let size;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = StaticNativeCutoutAvatarImage /* StaticNativeCutoutAvatarImage */.AVATAR_SIZE_MAP[size];
  let obj = { "aria-label": null, shape: null, size: null, gap: null, depthX: 0.4, children: null };
  obj[0] = getListSummaryLabel /* getListSummaryLabel */.getListSummaryLabel(names, totalCount);
  obj[1] = SolidCutout /* SolidCutout */.CutoutShape.Circle;
  obj[2] = tmp4;
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj[3] = num;
  const items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    obj = { size: null, borderRadius: null, value: null };
    obj[0] = tmp4;
    obj[1] = tmp4 / 2;
    obj[2] = totalCount - countResult;
    tmp6 = callback(map /* map */.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj[5] = items;
  return closure_4(Pile /* Pile */.Pile, obj);
};