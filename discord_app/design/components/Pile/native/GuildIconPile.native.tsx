// === Module 12860: GuildIconPile ===

// Module 12860 (GuildIconPile)
import GuildIcon from "GuildIcon" /* 5754 */;
import ClipView from "ClipView" /* 9054 */;
import Pile from "Pile" /* 11254 */;
import PileOverflow from "PileOverflow" /* 11255 */;
import ListUtils from "ListUtils" /* 12861 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = function GuildIconPile(arg0) {
  ({ totalCount, children } = arg0);
  const Children = noop.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = GuildIcon.ImageSizes[size];
  const obj = { "aria-label": ListUtils.getListSummaryLabel(names, totalCount), shape: ClipView.CutoutShape.RoundedRect, size: tmp4, gap: null, depthX: 0.25, children: null };
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj.gap = num;
  const items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    const obj3 = { size: tmp4, borderRadius: tmp4 / 3, value: totalCount - countResult };
    tmp6 = React3(PileOverflow.PileOverflow, obj3);
  }
  items[1] = tmp6;
  obj.children = items;
  return React4(Pile.Pile, obj);
};