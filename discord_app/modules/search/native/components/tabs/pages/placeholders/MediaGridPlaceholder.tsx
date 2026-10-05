// discord_app/modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx
import _mod12 from "../../../../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../../../intl/index.native.tsx";
import ReanimatedRexportDefault from "../../../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../../../design/components/Text/native/Text.tsx";
import SearchPlatformUtils from "../../../../SearchPlatformUtils.tsx";
import usePlaceholderStyles from "../../../../hooks/usePlaceholderStyles.tsx";
import GridItemPlaceholderDefault from "GridItemPlaceholder.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import SearchConstants from "../../../../../SearchConstants.tsx";
import Fragment_mod from "../../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../../../_runtime/metro/00002__.js";

let closure_0, dependencyMap, importDefault, tmp2;

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let View = react_native.View;
({
  MEDIA_NUM_COLUMNS: hasOwnProperty,
  MEDIA_ITEM_GAP_WIDTH: metroRequire,
  SEARCH_LIST_SECTION_TOP_PADDING,
  SEARCH_LIST_HORIZONTAL_PADDING,
} = SearchConstants);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = {
  container: { zIndex: 1, position: "absolute", width: "100%" },
  recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING },
  row: { flexDirection: "row" },
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    paddingTop: SEARCH_LIST_SECTION_TOP_PADDING,
    paddingBottom: 8,
  },
  sectionItem: obj2,
  sectionText: { opacity: 0 },
};
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerStyle;
      const obj = react2;
      const cResult = obj.c(9);
      ({ size, containerStyle } = arg0);
      const obj2 = usePlaceholderStyles;
      const placeholderAnimatedStyle = obj2.usePlaceholderAnimatedStyle(true);
      if (cResult[0] === placeholderAnimatedStyle) {
        let tmp4;
        if (cResult[1] === containerStyle) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === containerStyle) {
          let tmp5;
          if (cResult[4] === size) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === tmp4) {
            let tmp9;
            if (cResult[7] === tmp5) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
          const obj3 = { style: tmp4, pointerEvents: "none", children: tmp5 };
          const tmp12 = metroImportDefault(ReanimatedRexportDefault.View, obj3);
          cResult[6] = tmp4;
          cResult[7] = tmp5;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const size1 = { height: size, width: size, style: containerStyle };
        const tmp8 = metroImportDefault(GridItemPlaceholderDefault, size1);
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
    }
  : (arg0) => {
      let containerStyle;
      let items;
      ({ size, containerStyle } = arg0);
      const obj = usePlaceholderStyles;
      const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
      const obj2 = {
        style: items,
        pointerEvents: "none",
        children: metroImportDefault(GridItemPlaceholderDefault, { height: size, width: size, style: containerStyle }),
      };
      items = [containerStyle, placeholderAnimatedStyle];
      View = ReanimatedRexportDefault.View;
      return metroImportDefault(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (size) => {
      let arr;
      let closure_2;
      let items;
      let items1;
      let numRows;
      let row;
      let section;
      let sectionItem;
      let sectionItem2;
      let sectionText;
      let sectionText2;
      let tmp7;
      let visible;
      let tmp = size;
      let obj = size(576);
      const cResult = obj.c(38);
      size = size.size;
      ({ visible, numRows } = size);
      const tmp4 = closure_9();
      importDefault = tmp4;
      const result = numRows * closure_5;
      if (cResult[0] !== result) {
        const tmpResult = tmp(12);
        const rangeResult = tmpResult.range(0, result);
        cResult[0] = result;
        cResult[1] = rangeResult;
        tmp7 = rangeResult;
      } else {
        tmp7 = cResult[1];
      }
      dependencyMap = tmp7;
      if (cResult[2] !== tmp7) {
        const tmpResult3 = tmp(12);
        const chunkResult = tmpResult3.chunk(tmp7, closure_5);
        cResult[2] = tmp7;
        cResult[3] = chunkResult;
        arr = chunkResult;
      } else {
        arr = cResult[3];
      }
      const tmpResult4 = tmp(16816);
      const placeholderAnimatedStyle = tmpResult4.usePlaceholderAnimatedStyle(visible);
      if (cResult[4] === placeholderAnimatedStyle) {
        if (cResult[5] === tmp4.container) {
          let tmp11;
          let tmp13;
          let tmp15;
          if (cResult[6] === tmp4.recentsContainer) {
            tmp11 = cResult[7];
          }
          const _Symbol = Symbol;
          ({ section, sectionItem, sectionText } = tmp4);
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.LBYpDH);
            cResult[8] = stringResult;
            tmp13 = stringResult;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] !== tmp4.sectionText) {
            let obj2 = {
              style: sectionText,
              maxFontSizeMultiplier: 2,
              accessibilityRole: "header",
              variant: "text-sm/semibold",
              color: "interactive-text-default",
              children: tmp13,
            };
            const tmp17 = closure_7(tmp(4886).Text, obj2);
            cResult[9] = tmp4.sectionText;
            cResult[10] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] === tmp4.sectionItem) {
            let tmp18;
            let tmp22;
            let tmp24;
            if (cResult[12] === tmp15) {
              tmp18 = cResult[13];
            }
            const _Symbol2 = Symbol;
            ({ sectionItem: sectionItem2, sectionText: sectionText2 } = tmp4);
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp(1126).t.LFTAUp);
              cResult[14] = stringResult1;
              tmp22 = stringResult1;
            } else {
              tmp22 = cResult[14];
            }
            if (cResult[15] !== tmp4.sectionText) {
              const obj3 = { variant: "text-sm/semibold", color: "text-brand", style: sectionText2, children: tmp22 };
              const tmp26 = closure_7(tmp(4886).Text, obj3);
              cResult[15] = tmp4.sectionText;
              cResult[16] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] === tmp4.sectionItem) {
              let tmp27;
              if (cResult[18] === tmp24) {
                tmp27 = cResult[19];
              }
              if (cResult[20] === tmp4.section) {
                if (cResult[21] === tmp18) {
                  let tmp31;
                  let tmp34;
                  if (cResult[22] === tmp27) {
                    tmp31 = cResult[23];
                  }
                  if (cResult[24] === arr) {
                    if (cResult[25] === tmp7) {
                      if (cResult[26] === size) {
                        if (cResult[27] === tmp4.row) {
                          tmp34 = cResult[28];
                        }
                        if (cResult[34] === tmp31) {
                          if (cResult[35] === tmp34) {
                            let tmp37;
                            if (cResult[36] === tmp11) {
                              tmp37 = cResult[37];
                            }
                            return tmp37;
                          }
                        }
                        class O {
                          constructor(arg0, arg1) {
                            closure_0 = arg1;
                            obj = {
                              style: closure_1.row,
                              children: size.map(() => {
                                /* body not rendered: F146673 */
                              }),
                            };
                            tmp = closure_1_8;
                            Fragment = closure_3.Fragment;
                            tmp2 = closure_1_7;
                            items = [,];
                            items[0] = closure_1_7(closure_1_4, obj);
                            tmp2Result = arg1 < closure_3.length - 1;
                            if (tmp2Result) {
                              tmp4 = size;
                              tmp5 = closure_2;
                              tmp2Result = tmp2(size(closure_2[15]).MediaVerticalSeparator, {});
                            }
                            items[1] = tmp2Result;
                            return tmp(Fragment, { children: items }, arg1);
                          }
                        }
                        const obj4 = { style: tmp11, pointerEvents: "none", children: items };
                        items = [tmp31, tmp34];
                        const tmp39 = closure_8(ReanimatedRexportDefault.View, obj4);
                        cResult[34] = tmp31;
                        cResult[35] = tmp34;
                        cResult[36] = tmp11;
                        cResult[37] = tmp39;
                        tmp37 = tmp39;
                      }
                    }
                  }
                  if (cResult[29] === arr.length) {
                    if (cResult[30] === tmp7) {
                      if (cResult[31] === size) {
                        let tmp35;
                        if (cResult[32] === tmp4.row) {
                          tmp35 = cResult[33];
                        }
                        const mapped = arr.map(tmp35);
                        class O {
                          constructor(arg0, arg1) {
                            closure_0 = arg1;
                            obj = {
                              style: closure_1.row,
                              children: size.map(() => {
                                /* body not rendered: F146673 */
                              }),
                            };
                            tmp = closure_1_8;
                            Fragment = closure_3.Fragment;
                            tmp2 = closure_1_7;
                            items = [,];
                            items[0] = closure_1_7(closure_1_4, obj);
                            tmp2Result = arg1 < closure_3.length - 1;
                            if (tmp2Result) {
                              tmp4 = size;
                              tmp5 = closure_2;
                              tmp2Result = tmp2(size(closure_2[15]).MediaVerticalSeparator, {});
                            }
                            items[1] = tmp2Result;
                            return tmp(Fragment, { children: items }, arg1);
                          }
                        }
                        cResult[25] = tmp7;
                        cResult[26] = size;
                        cResult[27] = tmp4.row;
                        cResult[28] = mapped;
                        tmp34 = mapped;
                      }
                    }
                  }
                  class O {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      obj = {
                        style: closure_1.row,
                        children: size.map(() => {
                          /* body not rendered: F146673 */
                        }),
                      };
                      tmp = closure_1_8;
                      Fragment = closure_3.Fragment;
                      tmp2 = closure_1_7;
                      items = [,];
                      items[0] = closure_1_7(closure_1_4, obj);
                      tmp2Result = arg1 < closure_3.length - 1;
                      if (tmp2Result) {
                        tmp4 = size;
                        tmp5 = closure_2;
                        tmp2Result = tmp2(size(closure_2[15]).MediaVerticalSeparator, {});
                      }
                      items[1] = tmp2Result;
                      return tmp(Fragment, { children: items }, arg1);
                    }
                  }
                  cResult[29] = arr.length;
                  cResult[30] = tmp7;
                  cResult[31] = size;
                  cResult[32] = tmp4.row;
                  cResult[33] = O;
                  tmp35 = O;
                }
              }
              const obj5 = { style: section, children: items1 };
              items1 = [tmp18, tmp27];
              const tmp33 = closure_8(View, obj5);
              cResult[20] = tmp4.section;
              cResult[21] = tmp18;
              cResult[22] = tmp27;
              cResult[23] = tmp33;
              tmp31 = tmp33;
            }
            const obj6 = { style: sectionItem2, children: tmp24 };
            const tmp30 = closure_7(View, obj6);
            cResult[17] = tmp4.sectionItem;
            cResult[18] = tmp24;
            cResult[19] = tmp30;
            tmp27 = tmp30;
          }
          const obj7 = { style: sectionItem, children: tmp15 };
          const tmp21 = closure_7(View, obj7);
          cResult[11] = tmp4.sectionItem;
          cResult[12] = tmp15;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
      }
      const items2 = [, ,];
      ({ container: arr2[0], recentsContainer: arr2[1] } = tmp4);
      items2[2] = placeholderAnimatedStyle;
      cResult[4] = placeholderAnimatedStyle;
      cResult[5] = tmp4.container;
      cResult[6] = tmp4.recentsContainer;
      cResult[7] = items2;
      tmp11 = items2;
    }
  : (visible) => {
      let Text;
      let Text2;
      let intl;
      let intl2;
      let items2;
      let items3;
      let items4;
      let numRows;
      let obj5;
      let obj7;
      let row;
      ({ size: require, numRows } = visible);
      let memo;
      visible = visible.visible;
      let tmp = closure_9();
      dependencyMap = tmp;
      const items = [numRows];
      memo = memo.useMemo(() => {
        const obj = _mod12;
        return obj.range(0, numRows * hasOwnProperty);
      }, items);
      const items1 = [memo];
      const memo1 = memo.useMemo(() => {
        const obj = _mod12;
        return obj.chunk(memo, hasOwnProperty);
      }, items1);
      let obj = usePlaceholderStyles;
      const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible);
      let obj2 = { style: items2, pointerEvents: "none", children: items4 };
      items2 = [, ,];
      ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
      items2[2] = placeholderAnimatedStyle;
      const obj3 = { style: tmp.section, children: items3 };
      const obj4 = { style: tmp.sectionItem, children: closure_7(Text, obj5) };
      View = numRows(4612).View;
      obj5 = {
        style: tmp.sectionText,
        maxFontSizeMultiplier: 2,
        accessibilityRole: "header",
        variant: "text-sm/semibold",
        color: "interactive-text-default",
        children: intl.string(intl3.t.LBYpDH),
      };
      Text = Text_Text.Text;
      intl = intl3.intl;
      items3 = [closure_7(memo1, obj4)];
      const obj6 = { style: tmp.sectionItem, children: closure_7(Text2, obj7) };
      obj7 = {
        variant: "text-sm/semibold",
        color: "text-brand",
        style: tmp.sectionText,
        children: intl2.string(intl3.t.LFTAUp),
      };
      Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items3[1] = closure_7(memo1, obj6);
      items4 = [
        closure_8(memo1, obj3),
        memo1.map((arr, index) => {
          require = index;
          let obj = {
            style: row.row,
            children: arr.map((item, index) => {
              let obj;
              let obj2;
              size = { height: width, width, style: obj2.getMediaGridItemStyles(obj) };
              obj = {
                itemIndex: closure_0 * hasOwnProperty + index,
                numItems: memo.length,
                numColumns: hasOwnProperty,
                spacing: metroRequire,
              };
              const tmp = GridItemPlaceholderDefault;
              obj2 = SearchPlatformUtils;
              return metroImportDefault(tmp, size, index);
            }),
          };
          const Fragment = memo.Fragment;
          const children = [closure_1_7(memo1, obj)];
          children[1] = index < memo1.length - 1 && closure_1_7(require("Separators").MediaVerticalSeparator, {});
          const tmp2Result = index < memo1.length - 1 && closure_1_7(require("Separators").MediaVerticalSeparator, {});
          return closure_1_8(Fragment, { children }, index);
        }),
      ];
      return closure_8(View, obj2);
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx",
);

export default tmp4;
export const RecentsMediaGridPlaceholder = tmp5;
