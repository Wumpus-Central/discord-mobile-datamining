// === Module 9270: GuildIconPile ===

// Module 9270 (GuildIconPile)
import GuildIconSizes from "GuildIconSizes" /* 6004 */;
import SolidCutout from "SolidCutout" /* 8098 */;
import Pile from "Pile" /* 9271 */;
import map from "map" /* 9272 */;
import getListSummaryLabel from "getListSummaryLabel" /* 9273 */;
import closure_2 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = function GuildIconPile(arg0) {
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = GuildIconSizes.ImageSizes[size];
  let obj = { "aria-label": getListSummaryLabel.getListSummaryLabel(names, totalCount), shape: SolidCutout.CutoutShape.RoundedRect, size: tmp4, gap: null, depthX: 0.25, children: null };
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
    obj[1] = tmp4 / 3;
    obj[2] = totalCount - countResult;
    tmp6 = callback(map.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj[5] = items;
  return closure_4(Pile.Pile, obj);
};