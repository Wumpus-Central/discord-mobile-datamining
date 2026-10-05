// === Module 12284: GuildIconPile ===

// Module 12284 (GuildIconPile)
import react2 from "react" /* 576 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import ClipView from "ClipView" /* 8469 */;
import Pile2 from "Pile" /* 10739 */;
import PileOverflow from "PileOverflow" /* 10740 */;
import ListUtils from "ListUtils" /* 12285 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((size) => {
  let children;
  let items;
  let names;
  let totalCount;
  const obj = react2;
  const cResult = obj.c(13);
  ({ totalCount, names, children } = size);
  const Children = react.Children;
  size = size.size;
  const countResult = Children.count(children);
  const tmp5 = GuildIcon.ImageSizes[size];
  if (cResult[0] === names) {
    let tmp6;
    if (cResult[1] === totalCount) {
      tmp6 = cResult[2];
    }
    let num3 = 3;
    if (tmp5 <= 40) {
      num3 = 2;
    }
    if (cResult[3] === countResult) {
      if (cResult[4] === tmp5) {
        let tmp8;
        if (cResult[5] === totalCount) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === children) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === num3) {
                let tmp12;
                if (cResult[11] === tmp8) {
                  tmp12 = cResult[12];
                }
                return tmp12;
              }
            }
          }
        }
        const obj2 = { "aria-label": tmp6, shape: ClipView.CutoutShape.RoundedRect, size: tmp5, gap: num3, depthX: 0.25, children: items };
        const Pile = Pile2.Pile;
        items = [children, tmp8];
        const tmp14 = React3(Pile, obj2);
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
      tmp10 = _false(PileOverflow.PileOverflow, obj3);
    }
    cResult[3] = countResult;
    cResult[4] = tmp5;
    cResult[5] = totalCount;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const tmpResult = ListUtils;
  const listSummaryLabel = tmpResult.getListSummaryLabel(names, totalCount);
  cResult[0] = names;
  cResult[1] = totalCount;
  cResult[2] = listSummaryLabel;
  tmp6 = listSummaryLabel;
}) : ((arg0) => {
  let children;
  let items;
  let names;
  let num;
  let obj2;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = react.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = GuildIcon.ImageSizes[size];
  const obj = { "aria-label": obj2.getListSummaryLabel(names, totalCount), shape: ClipView.CutoutShape.RoundedRect, size: tmp4, gap: num, depthX: 0.25, children: items };
  const Pile = Pile2.Pile;
  num = 3;
  obj2 = ListUtils;
  if (tmp4 <= 40) {
    num = 2;
  }
  items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    const obj3 = { size: tmp4, borderRadius: tmp4 / 3, value: totalCount - countResult };
    tmp6 = _false(PileOverflow.PileOverflow, obj3);
  }
  items[1] = tmp6;
  return React3(Pile, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = tmp3;