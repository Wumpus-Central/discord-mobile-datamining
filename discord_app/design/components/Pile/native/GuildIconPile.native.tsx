// === Module 12618: GuildIconPile ===

// Module 12618 (GuildIconPile)
import GuildIcon from "GuildIcon" /* 5584 */;
import ClipView from "ClipView" /* 8813 */;
import Pile from "Pile" /* 11000 */;
import PileOverflow from "PileOverflow" /* 11001 */;
import ListUtils from "ListUtils" /* 12619 */;
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
  let obj = { "aria-label": ListUtils.getListSummaryLabel(names, totalCount), shape: ClipView.CutoutShape.RoundedRect, size: tmp4, gap: null, depthX: 0.25, children: null };
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj.gap = num;
  const items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    obj = { size: tmp4, borderRadius: tmp4 / 3, value: totalCount - countResult };
    tmp6 = React3(PileOverflow.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  return React4(Pile.Pile, obj);
};