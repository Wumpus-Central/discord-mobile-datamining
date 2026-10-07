// discord_app/modules/gif_picker/native/GIFPickerCategoriesPage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastestListPropsPlaceholder from "../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import GIFPickerActionCreators from "../../../actions/GIFPickerActionCreators.tsx";
import gif_picker_GIFPickerUtils from "GIFPickerUtils.tsx";
import GIFPickerCategoryViewDefault from "GIFPickerCategoryView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GIFPickerViewStore from "../../../stores/views/GIFPickerViewStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles((height) => {
  const obj = {
    item: {
      height,
      flexDirection: "row",
      gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
      paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    },
    placeholder: null,
  };
  const obj2 = {
    height,
    flexDirection: "row",
    gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
  };
  obj.placeholder = {
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    height: height - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    borderRadius: nativeDefault.radii.xs,
    flex: 1,
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (columns) => {
        let bound;
        let tmp = columns;
        const cResult = columns(576).c(38);
        columns = columns.columns;
        ({ favoritesCategory, inActionSheet, onSelectCategory } = columns);
        if (columns > 2) {
          let GIF_PICKER_ITEM_ESIMTATED_HEIGHT = tmp(10106).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
        } else {
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = tmp(10106).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
        }
        const tmp4 = closure_7(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
        dependencyMap = tmp4;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { hasCategories: false };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const safeAreaBottomKeyboardAware = onSelectCategory(10099)(first).safeAreaBottomKeyboardAware;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [GIFPickerViewStore];
          class S {
            constructor() {
              obj = { trendingCategories: closure_1_5.getTrendingCategories() };
              return obj;
            }
          }
          cResult[1] = items;
          cResult[2] = S;
          let tmp7 = S;
          let tmp6 = items;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        let obj = columns(576);
        const trendingCategories = tmp(504).useStateFromStoresObject(tmp6, tmp7).trendingCategories;
        if (cResult[3] === favoritesCategory) {
          if (cResult[4] === trendingCategories) {
            let arr2 = cResult[5];
          }
          if (cResult[6] === arr2) {
            if (cResult[7] === columns) {
              let arr4 = cResult[8];
              let tmp10 = tmp;
            }
            if (cResult[9] !== arr4.length) {
              let items1 = [arr4.length];
              class S {
                constructor() {
                  obj = { trendingCategories: closure_1_5.getTrendingCategories() };
                  return obj;
                }
              }
              cResult[10] = items1;
              let tmp16 = items1;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === arr4) {
              if (cResult[12] === tmp16) {
                let tmp17 = cResult[13];
              }
              const data = tmp17.data;
              class S {
                constructor() {
                  obj = { trendingCategories: closure_1_5.getTrendingCategories() };
                  return obj;
                }
              }
              if (cResult[14] !== trendingCategories) {
                const fn = function v() {
                  if (0 === trendingCategories.length) {
                    const trending = GIFPickerActionCreators.fetchTrending();
                  }
                };
                const items2 = [trendingCategories];
                class S {
                  constructor() {
                    obj = { trendingCategories: closure_1_5.getTrendingCategories() };
                    return obj;
                  }
                }
                cResult[14] = trendingCategories;
                cResult[15] = fn;
                class K {
                  constructor(arg0, arg1) {
                    items = [];
                    num = 0;
                    if (0 < columns) {
                      do {
                        tmp2 = tmp[num];
                        tmp3 = num;
                        if (null != tmp2) {
                          tmp8 = jsx;
                          tmp9 = closure_1;
                          tmp10 = closure_2;
                          obj1 = { item: null, onSelectCategory: null };
                          obj1.item = tmp2;
                          tmp11 = onSelectCategory;
                          obj1.onSelectCategory = onSelectCategory;
                          tmp7 = jsx(closure_1(closure_2[12]), obj1, num);
                        } else {
                          tmp4 = jsx;
                          tmp5 = View;
                          obj = { style: null };
                          tmp6 = closure_2;
                          items1 = [,];
                          ({ item: arr2[0], placeholder: arr2[1] } = closure_2);
                          obj.style = items1;
                          tmp7 = jsx(View, obj, num);
                        }
                        arr1 = items.push(tmp7);
                        num = num + 1;
                        tmp13 = columns;
                      } while (num < columns);
                    }
                    obj4 = { style: closure_2.item, collapsable: false, children: items };
                    return jsx(View, obj4);
                  }
                }
                let tmp21 = items2;
                let tmp20 = fn;
              } else {
                tmp20 = cResult[15];
                tmp21 = cResult[16];
              }
              const effect = trendingCategories.useEffect(tmp20, tmp21);
              if (cResult[17] === columns) {
                if (cResult[18] === data) {
                  if (cResult[19] === onSelectCategory) {
                    if (cResult[20] === tmp4.item) {
                      if (cResult[21] === tmp4.placeholder) {
                        let tmp24 = cResult[22];
                      }
                      const isPortalKeyboardInModal = tmp10(9939).useIsPortalKeyboardInModal();
                      class S {
                        constructor() {
                          obj = { trendingCategories: closure_1_5.getTrendingCategories() };
                          return obj;
                        }
                      }
                      if (cResult[23] === columns) {
                        if (cResult[24] === tmp4.placeholder.backgroundColor) {
                          if (cResult[25] === tmp4.placeholder.borderRadius) {
                            if (cResult[26] === tmp26) {
                              let tmp27 = cResult[27];
                            }
                            const _Symbol = Symbol;
                            class S {
                              constructor() {
                                obj = { trendingCategories: closure_1_5.getTrendingCategories() };
                                return obj;
                              }
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp10(1126).intl;
                              const stringResult = intl.string(tmp10(1126).t.ffgJrs);
                              class S {
                                constructor() {
                                  obj = { trendingCategories: closure_1_5.getTrendingCategories() };
                                  return obj;
                                }
                              }
                              cResult[29] = stringResult;
                              let tmp30 = stringResult;
                            } else {
                              tmp30 = cResult[29];
                            }
                            if (cResult[30] === GIF_PICKER_ITEM_ESIMTATED_HEIGHT) {
                              if (cResult[31] === inActionSheet) {
                                if (cResult[32] === isPortalKeyboardInModal) {
                                  if (cResult[33] === tmp27) {
                                    if (cResult[34] === tmp24) {
                                      if (cResult[35] === safeAreaBottomKeyboardAware) {
                                        if (cResult[36] === tmp19) {
                                          let tmp32 = cResult[37];
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
                                items = [];
                                num = 0;
                                if (0 < columns) {
                                  do {
                                    tmp2 = tmp[num];
                                    tmp3 = num;
                                    if (null != tmp2) {
                                      tmp8 = jsx;
                                      tmp9 = closure_1;
                                      tmp10 = closure_2;
                                      obj1 = { item: null, onSelectCategory: null };
                                      obj1.item = tmp2;
                                      tmp11 = onSelectCategory;
                                      obj1.onSelectCategory = onSelectCategory;
                                      tmp7 = jsx(closure_1(closure_2[12]), obj1, num);
                                    } else {
                                      tmp4 = jsx;
                                      tmp5 = View;
                                      obj = { style: null };
                                      tmp6 = closure_2;
                                      items1 = [,];
                                      ({ item: arr2[0], placeholder: arr2[1] } = closure_2);
                                      obj.style = items1;
                                      tmp7 = jsx(View, obj, num);
                                    }
                                    arr1 = items.push(tmp7);
                                    num = num + 1;
                                    tmp13 = columns;
                                  } while (num < columns);
                                }
                                obj4 = { style: closure_2.item, collapsable: false, children: items };
                                return jsx(View, obj4);
                              }
                            }
                            const obj3 = {
                              estimatedListSize: tmp29,
                              inActionSheet,
                              preventNativeModalDismiss: isPortalKeyboardInModal,
                              insetEnd: safeAreaBottomKeyboardAware,
                              itemSize: GIF_PICKER_ITEM_ESIMTATED_HEIGHT,
                              sections: tmp19,
                              placeholderConfig: tmp27,
                              renderItem: tmp24,
                              accessibilityLabel: tmp30,
                            };
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
                      const obj4 = { sectionItem: null };
                      const obj5 = {
                        type: tmp10(6566).FastestListPropsPlaceholderType.SHAPE,
                        shape: "rect",
                        shapeCount: null,
                        spaceGap: null,
                        borderRadius: null,
                        colorHex: null,
                        height: null,
                        verticalAlignment: "top",
                      };
                      class K {
                        constructor(arg0, arg1) {
                          items = [];
                          num = 0;
                          if (0 < columns) {
                            do {
                              tmp2 = tmp[num];
                              tmp3 = num;
                              if (null != tmp2) {
                                tmp8 = jsx;
                                tmp9 = closure_1;
                                tmp10 = closure_2;
                                obj1 = { item: null, onSelectCategory: null };
                                obj1.item = tmp2;
                                tmp11 = onSelectCategory;
                                obj1.onSelectCategory = onSelectCategory;
                                tmp7 = jsx(closure_1(closure_2[12]), obj1, num);
                              } else {
                                tmp4 = jsx;
                                tmp5 = View;
                                obj = { style: null };
                                tmp6 = closure_2;
                                items1 = [,];
                                ({ item: arr2[0], placeholder: arr2[1] } = closure_2);
                                obj.style = items1;
                                tmp7 = jsx(View, obj, num);
                              }
                              arr1 = items.push(tmp7);
                              num = num + 1;
                              tmp13 = columns;
                            } while (num < columns);
                          }
                          obj4 = { style: closure_2.item, collapsable: false, children: items };
                          return jsx(View, obj4);
                        }
                      }
                      obj5.spaceGap = tmp10(10106).GIF_PICKER_GUTTER_SPACING;
                      obj5.borderRadius = tmp4.placeholder.borderRadius;
                      obj5.colorHex = tmp4.placeholder.backgroundColor;
                      obj5.height = tmp26;
                      obj4.sectionItem = obj5;
                      cResult[23] = columns;
                      cResult[24] = tmp4.placeholder.backgroundColor;
                      cResult[25] = tmp4.placeholder.borderRadius;
                      cResult[26] = tmp26;
                      cResult[27] = obj4;
                      tmp27 = obj4;
                      const tmp10Result = tmp10(9939);
                    }
                  }
                }
              }
              class K {
                constructor(arg0, arg1) {
                  items = [];
                  num = 0;
                  if (0 < columns) {
                    do {
                      tmp2 = tmp[num];
                      tmp3 = num;
                      if (null != tmp2) {
                        tmp8 = jsx;
                        tmp9 = closure_1;
                        tmp10 = closure_2;
                        obj1 = { item: null, onSelectCategory: null };
                        obj1.item = tmp2;
                        tmp11 = onSelectCategory;
                        obj1.onSelectCategory = onSelectCategory;
                        tmp7 = jsx(closure_1(closure_2[12]), obj1, num);
                      } else {
                        tmp4 = jsx;
                        tmp5 = View;
                        obj = { style: null };
                        tmp6 = closure_2;
                        items1 = [,];
                        ({ item: arr2[0], placeholder: arr2[1] } = closure_2);
                        obj.style = items1;
                        tmp7 = jsx(View, obj, num);
                      }
                      arr1 = items.push(tmp7);
                      num = num + 1;
                      tmp13 = columns;
                    } while (num < columns);
                  }
                  obj4 = { style: closure_2.item, collapsable: false, children: items };
                  return jsx(View, obj4);
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
                obj = { trendingCategories: closure_1_5.getTrendingCategories() };
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
              obj = { trendingCategories: closure_1_5.getTrendingCategories() };
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
        const tmpResult = tmp(504);
      }
    : (columns) => {
        columns = columns.columns;
        const favoritesCategory = columns.favoritesCategory;
        const onSelectCategory = columns.onSelectCategory;
        let GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
        closure_4 = undefined;
        let trendingCategories;
        let data;
        if (columns > 2) {
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
          let tmp3 = columns;
          let tmp2 = onSelectCategory;
        } else {
          tmp2 = onSelectCategory;
          GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
          tmp3 = columns;
        }
        const tmp6 = closure_7(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
        closure_4 = tmp6;
        let items = [trendingCategories];
        trendingCategories = tmp3(tmp2[10]).useStateFromStoresObject(items, () => ({
          trendingCategories: trendingCategories.getTrendingCategories(),
        })).trendingCategories;
        let items1 = [columns, favoritesCategory, trendingCategories];
        const memo = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
          let bound;
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
          const obj = { data: items1, sections: null };
          const items2 = [items1.length];
          obj.sections = items2;
          return obj;
        }, items1);
        data = memo.data;
        let items2 = [trendingCategories];
        const effect = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useEffect(() => {
          if (0 === trendingCategories.length) {
            const trending = GIFPickerActionCreators.fetchTrending();
          }
        }, items2);
        const items3 = [columns, data, onSelectCategory, tmp6];
        const callback = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useCallback((arg0, arg1) => {
          const items = [];
          for (let num = 0; num < columns; num = num + 1) {
            let tmp2 = tmp[num];
            if (null != tmp2) {
              let obj2 = { item: tmp2, onSelectCategory };
              let tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
            } else {
              let obj = { style: null };
              let items1 = [,];
              ({ item: arr2[0], placeholder: arr2[1] } = closure_4);
              obj.style = items1;
              tmp7 = <View key={num} style={null} />;
            }
            let arr = items.push(tmp7);
          }
          return (
            <View style={closure_4.item} collapsable={false}>
              {items}
            </View>
          );
        }, items3);
        const tmp3Result = tmp3(tmp2[10]);
        const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp6];
        const isPortalKeyboardInModal = tmp3(tmp2[13]).useIsPortalKeyboardInModal();
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
          return obj;
        }, items4);
        let obj = {
          estimatedListSize: null,
          inActionSheet: null,
          preventNativeModalDismiss: null,
          insetEnd: null,
          itemSize: null,
          sections: null,
          placeholderConfig: null,
          renderItem: null,
          accessibilityLabel: null,
        };
        const tmp3Result3 = tmp3(tmp2[13]);
        const tmp12 = favoritesCategory(tmp2[17]);
        obj.estimatedListSize = tmp3(tmp2[15]).getCustomKeyboardHeight();
        obj.inActionSheet = columns.inActionSheet;
        obj.preventNativeModalDismiss = isPortalKeyboardInModal;
        obj.insetEnd = favoritesCategory(tmp2[9])({ hasCategories: false }).safeAreaBottomKeyboardAware;
        obj.itemSize = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
        obj.sections = memo.sections;
        obj.placeholderConfig = memo1;
        obj.renderItem = callback;
        const intl = tmp3(tmp2[16]).intl;
        obj.accessibilityLabel = intl.string(tmp3(tmp2[16]).t.ffgJrs);
        return data(tmp12, obj);
      },
);
