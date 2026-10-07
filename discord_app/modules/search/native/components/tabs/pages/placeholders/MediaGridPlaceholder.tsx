// === Module 16838: MediaGridPlaceholder ===

// Module 16838 (MediaGridPlaceholder)
import _mod12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11980 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16837 */;
import GridItemPlaceholderDefault from "GridItemPlaceholder" /* 16839 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(7524);
({ MEDIA_NUM_COLUMNS: hasOwnProperty, MEDIA_ITEM_GAP_WIDTH: metroRequire, SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { zIndex: 1, position: "absolute", width: "100%" }, recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, row: { flexDirection: "row" }, section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingBottom: 8 }, sectionItem: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, sectionText: { opacity: 0 } };
let closure_9 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ size, containerStyle } = arg0);
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  if (cResult[0] === placeholderAnimatedStyle) {
    if (cResult[1] === containerStyle) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === containerStyle) {
      if (cResult[4] === size) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
      const obj3 = { style: tmp4, pointerEvents: "none", children: tmp5 };
      const tmp12 = React5(ReanimatedRexportDefault.View, obj3);
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    }
    const size1 = { height: size, width: size, style: containerStyle };
    const tmp8 = React5(GridItemPlaceholderDefault, size1);
    cResult[3] = containerStyle;
    cResult[4] = size;
    cResult[5] = tmp8;
    tmp5 = tmp8;
  }
  const items = [containerStyle, placeholderAnimatedStyle];
  cResult[0] = placeholderAnimatedStyle;
  cResult[1] = containerStyle;
  cResult[2] = items;
  tmp4 = items;
}) : ((arg0) => {
  ({ size, containerStyle } = arg0);
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  const obj2 = { style: null, pointerEvents: "none", children: React5(GridItemPlaceholderDefault, { height: size, width: size, style: containerStyle }) };
  const items = [containerStyle, placeholderAnimatedStyle];
  obj2.style = items;
  return React5(ReanimatedRexportDefault.View, obj2);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx");

export default tmp4;
export const RecentsMediaGridPlaceholder = ReactCompilerGating.isReactCompilerEnabled() ? ((size) => {
  const cResult = size(576).c(38);
  size = size.size;
  ({ visible, numRows } = size);
  let row = closure_9();
  const result = numRows * closure_5;
  if (cResult[0] !== result) {
    const rangeResult = tmp(12).range(0, result);
    cResult[0] = result;
    cResult[1] = rangeResult;
    let tmp6 = rangeResult;
    const tmpResult = tmp(12);
  } else {
    tmp6 = cResult[1];
  }
  dependencyMap = tmp6;
  if (cResult[2] !== tmp6) {
    const chunkResult = tmp(12).chunk(tmp6, closure_5);
    cResult[2] = tmp6;
    cResult[3] = chunkResult;
    let arr = chunkResult;
    const tmpResult3 = tmp(12);
  } else {
    arr = cResult[3];
  }
  const obj = size(576);
  const placeholderAnimatedStyle = size(16837).usePlaceholderAnimatedStyle(visible);
  if (cResult[4] === placeholderAnimatedStyle) {
    if (cResult[5] === row.container) {
      if (cResult[6] === row.recentsContainer) {
        let tmp10 = cResult[7];
      }
      const _Symbol = Symbol;
      ({ section, sectionItem, sectionText } = row);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.LBYpDH);
        cResult[8] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] !== row.sectionText) {
        const obj2 = { style: sectionText, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: tmp12 };
        const tmp16 = closure_7(tmp(4892).Text, obj2);
        cResult[9] = row.sectionText;
        cResult[10] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[10];
      }
      if (cResult[11] === row.sectionItem) {
        if (cResult[12] === tmp14) {
          let tmp17 = cResult[13];
        }
        const _Symbol2 = Symbol;
        ({ sectionItem: sectionItem2, sectionText: sectionText2 } = row);
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.LFTAUp);
          cResult[14] = stringResult1;
          let tmp21 = stringResult1;
        } else {
          tmp21 = cResult[14];
        }
        if (cResult[15] !== row.sectionText) {
          const obj3 = { variant: "text-sm/semibold", color: "text-brand", style: sectionText2, children: tmp21 };
          const tmp25 = closure_7(tmp(4892).Text, obj3);
          cResult[15] = row.sectionText;
          cResult[16] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[16];
        }
        if (cResult[17] === row.sectionItem) {
          if (cResult[18] === tmp23) {
            let tmp26 = cResult[19];
          }
          if (cResult[20] === row.section) {
            if (cResult[21] === tmp17) {
              if (cResult[22] === tmp26) {
                let tmp30 = cResult[23];
              }
              if (cResult[24] === arr) {
                if (cResult[25] === tmp6) {
                  if (cResult[26] === size) {
                    if (cResult[27] === row.row) {
                      if (cResult[34] === tmp30) {
                        if (cResult[35] === tmp33) {
                          if (cResult[36] === tmp10) {
                            let tmp37 = cResult[37];
                          }
                          return tmp37;
                        }
                      }
                      class O {
                        constructor(arg0, arg1) {
                          closure_0 = arg1;
                          obj = { style: closure_1.row, children: size.map(() => { ... }) };
                          tmp = closure_1_8;
                          tmp2 = closure_1_7;
                          items = [, ];
                          items[0] = closure_1_7(closure_1_4, obj);
                          tmp2Result = arg1 < closure_3.length - 1;
                          if (tmp2Result) {
                            tmp4 = size;
                            tmp5 = closure_2;
                            tmp2Result = tmp2(size(closure_2[15]).MediaVerticalSeparator, {});
                          }
                          items[1] = tmp2Result;
                          return tmp(closure_3.Fragment, { children: items }, arg1);
                        }
                      }
                      const obj4 = { style: tmp10, pointerEvents: "none", children: null };
                      const items = [tmp30, cResult[28]];
                      obj4.children = items;
                      const tmp39 = closure_8(row(4618).View, obj4);
                      cResult[34] = tmp30;
                      cResult[35] = cResult[28];
                      cResult[36] = tmp10;
                      cResult[37] = tmp39;
                      tmp37 = tmp39;
                    }
                  }
                }
              }
              if (cResult[29] === arr.length) {
                if (cResult[30] === tmp6) {
                  if (cResult[31] === size) {
                    if (cResult[32] === row.row) {
                      let tmp34 = cResult[33];
                    }
                    const mapped = arr.map(tmp34);
                    class O {
                      constructor(arg0, arg1) {
                        closure_0 = arg1;
                        obj = { style: closure_1.row, children: size.map(() => { ... }) };
                        tmp = closure_1_8;
                        tmp2 = closure_1_7;
                        items = [, ];
                        items[0] = closure_1_7(closure_1_4, obj);
                        tmp2Result = arg1 < closure_3.length - 1;
                        if (tmp2Result) {
                          tmp4 = size;
                          tmp5 = closure_2;
                          tmp2Result = tmp2(size(closure_2[15]).MediaVerticalSeparator, {});
                        }
                        items[1] = tmp2Result;
                        return tmp(closure_3.Fragment, { children: items }, arg1);
                      }
                    }
                    cResult[25] = tmp6;
                    cResult[26] = size;
                    row = row.row;
                    cResult[27] = row;
                    cResult[28] = mapped;
                  }
                }
              }
              class O {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  obj = { style: closure_1.row, children: size.map(() => { ... }) };
                  tmp = closure_1_8;
                  tmp2 = closure_1_7;
                  items = [, ];
                  items[0] = closure_1_7(closure_1_4, obj);
                  tmp2Result = arg1 < closure_3.length - 1;
                  if (tmp2Result) {
                    tmp4 = size;
                    tmp5 = closure_2;
                    tmp2Result = tmp2(size(closure_2[15]).MediaVerticalSeparator, {});
                  }
                  items[1] = tmp2Result;
                  return tmp(closure_3.Fragment, { children: items }, arg1);
                }
              }
              cResult[29] = arr.length;
              cResult[30] = tmp6;
              cResult[31] = size;
              cResult[32] = row.row;
              cResult[33] = O;
              tmp34 = O;
            }
          }
          const obj5 = { style: section, children: null };
          const items1 = [tmp17, tmp26];
          obj5.children = items1;
          const tmp32 = closure_8(View, obj5);
          cResult[20] = row.section;
          cResult[21] = tmp17;
          cResult[22] = tmp26;
          cResult[23] = tmp32;
          tmp30 = tmp32;
        }
        const obj6 = { style: sectionItem2, children: tmp23 };
        const tmp29 = closure_7(View, obj6);
        cResult[17] = row.sectionItem;
        cResult[18] = tmp23;
        cResult[19] = tmp29;
        tmp26 = tmp29;
      }
      const obj7 = { style: sectionItem, children: tmp14 };
      const tmp20 = closure_7(View, obj7);
      cResult[11] = row.sectionItem;
      cResult[12] = tmp14;
      cResult[13] = tmp20;
      tmp17 = tmp20;
    }
  }
  const items2 = [, , ];
  ({ container: arr2[0], recentsContainer: arr2[1] } = row);
  items2[2] = placeholderAnimatedStyle;
  cResult[4] = placeholderAnimatedStyle;
  cResult[5] = row.container;
  cResult[6] = row.recentsContainer;
  cResult[7] = items2;
  tmp10 = items2;
  const tmpResult4 = size(16837);
}) : ((visible) => {
  ({ size: require, numRows } = visible);
  let memo;
  let tmp = closure_9();
  dependencyMap = tmp;
  const items = [numRows];
  memo = memo.useMemo(() => _mod12.range(0, numRows * numColumns), items);
  const items1 = [memo];
  const memo1 = memo.useMemo(() => _mod12.chunk(memo, numColumns), items1);
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(visible.visible);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items2 = [, , ];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  obj2.style = items2;
  const obj3 = { style: tmp.section, children: null };
  const obj4 = { style: tmp.sectionItem, children: null };
  const obj5 = { style: tmp.sectionText, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.LBYpDH);
  obj4.children = closure_7(Text_Text.Text, obj5);
  const items3 = [closure_7(memo1, obj4), ];
  const obj6 = { style: tmp.sectionItem, children: null };
  const obj7 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.sectionText, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t.LFTAUp);
  obj6.children = closure_7(Text_Text.Text, obj7);
  items3[1] = closure_7(memo1, obj6);
  obj3.children = items3;
  const items4 = [
    closure_8(memo1, obj3),
    memo1.map((arr, index) => {
      closure_0 = index;
      const children = [
        closure_1_7(memo1, {
          style: row.row,
          children: arr.map((item, index) => {
            const size = { height: width, width, style: null };
            const tmp = GridItemPlaceholderDefault;
            size.style = SearchPlatformUtils.getMediaGridItemStyles({ itemIndex: closure_0 * numColumns + index, numItems: memo.length, numColumns, spacing });
            return React5(tmp, size, index);
          })
        }),

      ];
      let tmp2Result = index < memo1.length - 1;
      if (tmp2Result) {
        tmp2Result = closure_1_7(require("Separators").MediaVerticalSeparator, {});
      }
      children[1] = tmp2Result;
      return closure_1_8(memo.Fragment, { children }, index);
    })
  ];
  obj2.children = items4;
  return closure_8(numRows(4618).View, obj2);
});