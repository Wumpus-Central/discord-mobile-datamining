// discord_app/modules/gif_picker/native/GIFPickerCategoriesPage.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastestListPropsPlaceholder from "../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import GIFPickerActionCreators from "../../../actions/GIFPickerActionCreators.tsx";
import gif_picker_GIFPickerUtils from "GIFPickerUtils.tsx";
import GIFPickerCategoryViewDefault from "GIFPickerCategoryView.tsx";
import react from "../../../../_runtime/00019_react.js";
import GIFPickerViewStore from "../../../stores/views/GIFPickerViewStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let columns, dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((height) => {
  const obj = {
    item: {
      height,
      flexDirection: "row",
      gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
      paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    },
    placeholder: {
      backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
      height: height - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
      borderRadius: nativeDefault.radii.xs,
      flex: 1,
    },
  };
  ({
    height,
    flexDirection: "row",
    gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
  });
  ({
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    height: height - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    borderRadius: nativeDefault.radii.xs,
    flex: 1,
  });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (columns) => {
        let GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
        let bound;
        let favoritesCategory;
        let first;
        let inActionSheet;
        let item;
        let obj5;
        let onSelectCategory;
        let tmp6;
        let tmp7;
        let tmp = columns;
        let tmp2 = dependencyMap;
        let obj = columns(576);
        const cResult = obj.c(38);
        columns = columns.columns;
        ({ favoritesCategory, inActionSheet, onSelectCategory } = columns);
        if (columns > 2) {
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = tmp(10106).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
        } else {
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = tmp(10106).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
        }
        const tmp4 = closure_7(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
        dependencyMap = tmp4;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { hasCategories: false };
          const num = 0;
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const safeAreaBottomKeyboardAware = onSelectCategory(10099)(first).safeAreaBottomKeyboardAware;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [GIFPickerViewStore];
          class S {
            constructor() {
              const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
              return obj;
            }
          }
          cResult[1] = items;
          cResult[2] = S;
          tmp7 = S;
          tmp6 = items;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        const tmpResult = tmp(504);
        const trendingCategories = tmpResult.useStateFromStoresObject(tmp6, tmp7).trendingCategories;
        if (cResult[3] === favoritesCategory) {
          let arr2;
          if (cResult[4] === trendingCategories) {
            arr2 = cResult[5];
          }
          if (cResult[6] === arr2) {
            let arr4;
            let tmp10;
            let tmp16;
            if (cResult[7] === columns) {
              arr4 = cResult[8];
              tmp10 = tmp;
            }
            if (cResult[9] !== arr4.length) {
              let items1 = [arr4.length];
              class S {
                constructor() {
                  const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                  return obj;
                }
              }
              cResult[10] = items1;
              tmp16 = items1;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === arr4) {
              let tmp17;
              let tmp21;
              let tmp20;
              if (cResult[12] === tmp16) {
                tmp17 = cResult[13];
              }
              const data = tmp17.data;
              class S {
                constructor() {
                  const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                  return obj;
                }
              }
              if (cResult[14] !== trendingCategories) {
                const fn = function v() {
                  if (0 === trendingCategories.length) {
                    const obj = GIFPickerActionCreators;
                    const trending = obj.fetchTrending();
                  }
                };
                const items2 = [trendingCategories];
                class S {
                  constructor() {
                    const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                    return obj;
                  }
                }
                cResult[14] = trendingCategories;
                cResult[15] = fn;
                class K {
                  constructor(arg0, arg1) {
                    let num;
                    const items = [];
                    for (let num = 0; num < columns; num = num + 1) {
                      let tmp7;
                      let tmp2 = tmp[num];
                      let push = items.push;
                      if (null != tmp2) {
                        tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
                      } else {
                        let items1 = [,];
                        ({ item: arr2[0], placeholder: arr2[1] } = item);
                        tmp7 = <View key={num} style={items1} />;
                      }
                      let arr = push(tmp7);
                    }
                    return (
                      <View style={item.item} collapsable={false}>
                        {items}
                      </View>
                    );
                  }
                }
                tmp21 = items2;
                tmp20 = fn;
              } else {
                tmp20 = cResult[15];
                tmp21 = cResult[16];
              }
              const effect = trendingCategories.useEffect(tmp20, tmp21);
              if (cResult[17] === columns) {
                if (cResult[18] === data) {
                  if (cResult[19] === onSelectCategory) {
                    if (cResult[20] === tmp4.item) {
                      let tmp24;
                      if (cResult[21] === tmp4.placeholder) {
                        tmp24 = cResult[22];
                      }
                      const tmp10Result = tmp10(9939);
                      const isPortalKeyboardInModal = tmp10Result.useIsPortalKeyboardInModal();
                      class S {
                        constructor() {
                          const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                          return obj;
                        }
                      }
                      if (cResult[23] === columns) {
                        if (cResult[24] === tmp4.placeholder.backgroundColor) {
                          if (cResult[25] === tmp4.placeholder.borderRadius) {
                            let tmp27;
                            let tmp30;
                            if (cResult[26] === tmp26) {
                              tmp27 = cResult[27];
                            }
                            const _Symbol = Symbol;
                            class S {
                              constructor() {
                                const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                                return obj;
                              }
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp10(1126).intl;
                              const stringResult = intl.string(tmp10(1126).t.ffgJrs);
                              class S {
                                constructor() {
                                  const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                                  return obj;
                                }
                              }
                              cResult[29] = stringResult;
                              tmp30 = stringResult;
                            } else {
                              tmp30 = cResult[29];
                            }
                            if (cResult[30] === GIF_PICKER_ITEM_ESIMTATED_HEIGHT) {
                              if (cResult[31] === inActionSheet) {
                                if (cResult[32] === isPortalKeyboardInModal) {
                                  if (cResult[33] === tmp27) {
                                    if (cResult[34] === tmp24) {
                                      if (cResult[35] === safeAreaBottomKeyboardAware) {
                                        let tmp32;
                                        if (cResult[36] === tmp19) {
                                          tmp32 = cResult[37];
                                        }
                                        return tmp32;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class K {
                              constructor(arg0, arg1) {
                                let num;
                                const items = [];
                                for (let num = 0; num < columns; num = num + 1) {
                                  let tmp7;
                                  let tmp2 = tmp[num];
                                  let push = items.push;
                                  if (null != tmp2) {
                                    tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
                                  } else {
                                    let items1 = [,];
                                    ({ item: arr2[0], placeholder: arr2[1] } = item);
                                    tmp7 = <View key={num} style={items1} />;
                                  }
                                  let arr = push(tmp7);
                                }
                                return (
                                  <View style={item.item} collapsable={false}>
                                    {items}
                                  </View>
                                );
                              }
                            }
                            const tmp34 = jsx(onSelectCategory(6559), {
                              estimatedListSize: tmp29,
                              inActionSheet,
                              preventNativeModalDismiss: isPortalKeyboardInModal,
                              insetEnd: safeAreaBottomKeyboardAware,
                              itemSize: GIF_PICKER_ITEM_ESIMTATED_HEIGHT,
                              sections: tmp19,
                              placeholderConfig: tmp27,
                              renderItem: tmp24,
                              accessibilityLabel: tmp30,
                            });
                            cResult[30] = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
                            cResult[31] = inActionSheet;
                            cResult[32] = isPortalKeyboardInModal;
                            cResult[33] = tmp27;
                            cResult[34] = tmp24;
                            cResult[35] = safeAreaBottomKeyboardAware;
                            cResult[36] = tmp19;
                            cResult[37] = tmp34;
                            tmp32 = tmp34;
                          }
                        }
                      }
                      const obj4 = { sectionItem: obj5 };
                      obj5 = {
                        type: tmp10(6566).FastestListPropsPlaceholderType.SHAPE,
                        shape: "rect",
                        shapeCount: null,
                        spaceGap: tmp10(10106).GIF_PICKER_GUTTER_SPACING,
                        borderRadius: tmp4.placeholder.borderRadius,
                        colorHex: tmp4.placeholder.backgroundColor,
                        height: tmp26,
                        verticalAlignment: "top",
                      };
                      class K {
                        constructor(arg0, arg1) {
                          let num;
                          const items = [];
                          for (let num = 0; num < columns; num = num + 1) {
                            let tmp7;
                            let tmp2 = tmp[num];
                            let push = items.push;
                            if (null != tmp2) {
                              tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
                            } else {
                              let items1 = [,];
                              ({ item: arr2[0], placeholder: arr2[1] } = item);
                              tmp7 = <View key={num} style={items1} />;
                            }
                            let arr = push(tmp7);
                          }
                          return (
                            <View style={item.item} collapsable={false}>
                              {items}
                            </View>
                          );
                        }
                      }
                      cResult[23] = columns;
                      cResult[24] = tmp4.placeholder.backgroundColor;
                      cResult[25] = tmp4.placeholder.borderRadius;
                      cResult[26] = tmp26;
                      cResult[27] = obj4;
                      tmp27 = obj4;
                    }
                  }
                }
              }
              class K {
                constructor(arg0, arg1) {
                  let num;
                  const items = [];
                  for (let num = 0; num < columns; num = num + 1) {
                    let tmp7;
                    let tmp2 = tmp[num];
                    let push = items.push;
                    if (null != tmp2) {
                      tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
                    } else {
                      let items1 = [,];
                      ({ item: arr2[0], placeholder: arr2[1] } = item);
                      tmp7 = <View key={num} style={items1} />;
                    }
                    let arr = push(tmp7);
                  }
                  return (
                    <View style={item.item} collapsable={false}>
                      {items}
                    </View>
                  );
                }
              }
              cResult[17] = columns;
              cResult[18] = data;
              cResult[19] = onSelectCategory;
              cResult[20] = tmp4.item;
              cResult[21] = tmp4.placeholder;
              cResult[22] = K;
              tmp24 = K;
            }
            class S {
              constructor() {
                const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
                return obj;
              }
            }
            tmp18[0] = arr4;
            tmp18[1] = tmp16;
            cResult[11] = arr4;
            cResult[12] = tmp16;
            cResult[13] = tmp18;
            tmp17 = tmp18;
          }
          const items3 = [];
          class S {
            constructor() {
              const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
              return obj;
            }
          }
          let num3 = 0;
          if (0 < Math.max(arr2.length, tmp(10106).DEFAULT_CATEGORY_ROWS)) {
            do {
              let arr = items3.push(arr2.slice(num3, num3 + columns));
              num3 = num3 + columns;
              let _Math = Math;
              tmp = columns;
              tmp2 = dependencyMap;
              bound = Math.max(arr2.length, columns(10106).DEFAULT_CATEGORY_ROWS);
            } while (num3 < bound);
          }
          cResult[6] = arr2;
          cResult[7] = columns;
          cResult[8] = items3;
          tmp10 = tmp;
          arr4 = items3;
        }
        const items4 = [...trendingCategories];
        if (null != favoritesCategory) {
          items4.unshift(favoritesCategory);
        }
        cResult[3] = favoritesCategory;
        cResult[4] = trendingCategories;
        cResult[5] = items4;
        arr2 = items4;
      }
    : (columns) => {
        let intl;
        let tmp2;
        let tmp3;
        let tmp3Result4;
        columns = columns.columns;
        const favoritesCategory = columns.favoritesCategory;
        const onSelectCategory = columns.onSelectCategory;
        let GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
        let closure_4;
        let trendingCategories;
        let data;
        const inActionSheet = columns.inActionSheet;
        if (columns > 2) {
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
          tmp3 = columns;
          tmp2 = onSelectCategory;
        } else {
          const tmp = columns;
          tmp2 = onSelectCategory;
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
          tmp3 = columns;
        }
        const tmp6 = closure_7(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
        closure_4 = tmp6;
        const safeAreaBottomKeyboardAware = favoritesCategory(tmp2[9])({
          hasCategories: false,
        }).safeAreaBottomKeyboardAware;
        let items = [trendingCategories];
        const tmp3Result = tmp3(tmp2[10]);
        trendingCategories = tmp3Result.useStateFromStoresObject(items, () => {
          const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
          return obj;
        }).trendingCategories;
        let items1 = [columns, favoritesCategory, trendingCategories];
        const memo = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
          let bound;
          let items2;
          const items = [...trendingCategories];
          if (null != favoritesCategory) {
            items.unshift(tmp);
          }
          const items1 = [];
          let num = 0;
          if (0 < Math.max(items.length, gif_picker_GIFPickerUtils.DEFAULT_CATEGORY_ROWS)) {
            do {
              let arr2 = items1.push(items.slice(num, num + columns));
              num = num + columns;
              let _Math = Math;
              bound = Math.max(items.length, gif_picker_GIFPickerUtils.DEFAULT_CATEGORY_ROWS);
            } while (num < bound);
          }
          const obj = { data: items1, sections: items2 };
          items2 = [items1.length];
          return obj;
        }, items1);
        data = memo.data;
        let items2 = [trendingCategories];
        const sections = memo.sections;
        const effect = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useEffect(() => {
          if (0 === trendingCategories.length) {
            const obj = GIFPickerActionCreators;
            const trending = obj.fetchTrending();
          }
        }, items2);
        const items3 = [columns, data, onSelectCategory, tmp6];
        const callback = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useCallback((arg0, arg1) => {
          let num;
          const items = [];
          for (let num = 0; num < columns; num = num + 1) {
            let tmp7;
            let tmp2 = tmp[num];
            let push = items.push;
            if (null != tmp2) {
              tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
            } else {
              let items1 = [,];
              ({ item: arr2[0], placeholder: arr2[1] } = closure_4);
              tmp7 = <View key={num} style={items1} />;
            }
            let arr = push(tmp7);
          }
          return (
            <View style={closure_4.item} collapsable={false}>
              {items}
            </View>
          );
        }, items3);
        const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp6];
        const tmp3Result3 = tmp3(tmp2[13]);
        const isPortalKeyboardInModal = tmp3Result3.useIsPortalKeyboardInModal();
        const memo1 = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
          const obj = {
            sectionItem: {
              type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
              shape: "rect",
              shapeCount: columns,
              spaceGap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
              borderRadius: closure_4.placeholder.borderRadius,
              colorHex: closure_4.placeholder.backgroundColor,
              height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
              verticalAlignment: "top",
            },
          };
          ({
            type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
            shape: "rect",
            shapeCount: columns,
            spaceGap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
            borderRadius: closure_4.placeholder.borderRadius,
            colorHex: closure_4.placeholder.backgroundColor,
            height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
            verticalAlignment: "top",
          });
          return obj;
        }, items4);
        let obj = {
          estimatedListSize: tmp3Result4.getCustomKeyboardHeight(),
          inActionSheet,
          preventNativeModalDismiss: isPortalKeyboardInModal,
          insetEnd: safeAreaBottomKeyboardAware,
          itemSize: GIF_PICKER_ITEM_ESIMTATED_HEIGHT,
          sections,
          placeholderConfig: memo1,
          renderItem: callback,
          accessibilityLabel: intl.string(tmp3(tmp2[16]).t.ffgJrs),
        };
        const tmp12 = favoritesCategory(tmp2[17]);
        tmp3Result4 = tmp3(tmp2[15]);
        intl = tmp3(tmp2[16]).intl;
        return data(tmp12, obj);
      },
);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default memoResult;
