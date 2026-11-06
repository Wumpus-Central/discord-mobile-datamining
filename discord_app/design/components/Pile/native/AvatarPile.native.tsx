// === Module 15085: AvatarPile ===

// Module 15085 (AvatarPile)
import ClipView from "ClipView" /* 9611 */;
import ListUtils from "ListUtils" /* 12993 */;
import Pile from "Pile" /* 13631 */;
import PileOverflow from "PileOverflow" /* 13632 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 15086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export function AvatarPile(arg0) {
  ({ totalCount, children } = arg0);
  const Children = noop.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = CutoutableAvatarImage.AVATAR_SIZE_MAP[size];
  const obj = { "aria-label": ListUtils.getListSummaryLabel(names, totalCount), shape: ClipView.CutoutShape.Circle, size: tmp4, gap: null, depthX: 0.4, children: null };
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj.gap = num;
  items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    const obj3 = { size: tmp4, borderRadius: tmp4 / 2, value: totalCount - countResult };
    tmp6 = React3(PileOverflow.PileOverflow, obj3);
  }
  items[1] = tmp6;
  obj.children = items;
  return React4(Pile.Pile, obj);
}