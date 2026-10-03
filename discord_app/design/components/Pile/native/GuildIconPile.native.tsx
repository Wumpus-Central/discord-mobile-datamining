// === Module 12284: GuildIconPile ===

// Module 12284 (GuildIconPile)
import c from "c" /* 576 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import ClipView from "ClipView" /* 8469 */;
import Pile from "Pile" /* 10739 */;
import PileOverflow from "PileOverflow" /* 10740 */;
import ListUtils from "ListUtils" /* 12285 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ totalCount, names, children } = arg0);
  const Children = noop.Children;
  const countResult = Children.count(children);
  const tmp5 = GuildIcon.ImageSizes[arg0.size];
  if (cResult[0] === names) {
    if (cResult[1] === totalCount) {
      let tmp6 = cResult[2];
    }
    let num3 = 3;
    if (tmp5 <= 40) {
      num3 = 2;
    }
    if (cResult[3] === countResult) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === totalCount) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === children) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === num3) {
                if (cResult[11] === tmp8) {
                  let tmp12 = cResult[12];
                }
                return tmp12;
              }
            }
          }
        }
        const obj2 = { "aria-label": tmp6, shape: ClipView.CutoutShape.RoundedRect, size: tmp5, gap: num3, depthX: 0.25, children: null };
        const items = [children, tmp8];
        obj2.children = items;
        const tmp14 = React4(Pile.Pile, obj2);
        cResult[7] = children;
        cResult[8] = tmp5;
        cResult[9] = tmp6;
        cResult[10] = num3;
        cResult[11] = tmp8;
        cResult[12] = tmp14;
        tmp12 = tmp14;
      }
    }
    let tmp10 = null != totalCount && countResult < totalCount;
    if (tmp10) {
      const obj3 = { size: tmp5, borderRadius: tmp5 / 3, value: totalCount - countResult };
      tmp10 = React3(PileOverflow.PileOverflow, obj3);
    }
    cResult[3] = countResult;
    cResult[4] = tmp5;
    cResult[5] = totalCount;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const listSummaryLabel = ListUtils.getListSummaryLabel(names, totalCount);
  cResult[0] = names;
  cResult[1] = totalCount;
  cResult[2] = listSummaryLabel;
  tmp6 = listSummaryLabel;
  const tmpResult = ListUtils;
}) : ((arg0) => {
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
});