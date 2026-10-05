// === Module 10088: GIFPicker ===

// Module 10088 (GIFPicker)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GIFPickerActionCreatorsAll from "GIFPickerActionCreators" /* 10090 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10093 */;
import GifPickerUtils from "GifPickerUtils" /* 10096 */;
import GIFPickerSearchSuggestionsDefault from "GIFPickerSearchSuggestions" /* 10097 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10089 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let bottomSheetRef, constants3, limit;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ AnalyticEvents: metroImportAll, ChatInputComponentViewedTypes: c9, GIF_FETCH_LIMIT_IOS: c10, GIFPickerResultTypes: unpackModuleId, TooltipNames: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((bottomSheetRef) => {
  let closure_10;
  let closure_13;
  let closure_18;
  let closure_5;
  let columnWidth;
  let columns;
  let contentHorizontalPadding;
  let favorites;
  let favoritesCategory;
  let first1;
  let hideFavorites;
  let inActionSheet;
  let initialQuery;
  let keyboardDismissMode;
  let obj4;
  let onPressGIF;
  let query;
  let selectedGifSrc;
  let tmp20;
  let tmp28;
  let tmp29;
  let tmp35;
  let tmp41;
  let tmp43;
  const tmp = bottomSheetRef;
  let obj = bottomSheetRef(initialQuery[8]);
  const cResult = obj.c(66);
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const guildId = bottomSheetRef.guildId;
  ({ hideFavorites, initialQuery } = bottomSheetRef);
  ({ inActionSheet, contentHorizontalPadding, selectedGifSrc, keyboardDismissMode, onPressGIF } = bottomSheetRef);
  const tmp4 = closure_15();
  if (cResult[0] === channelId) {
    let tmp5;
    let tmp6;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    let obj2 = react;
    const effect = react.useEffect(tmp5, tmp6);
    const tmp9 = channelId(initialQuery[11])();
    const tmp11 = onPressGIF(react.useState(0), 2);
    react = tmp11[1];
    const _Symbol = Symbol;
    const first = tmp11[0];
    const tmp8 = channelId;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class Q {
        constructor(nativeEvent) {
          closure_5(nativeEvent.nativeEvent.layout.width);
        }
      }
      cResult[4] = Q;
    } else {
      class Q {
        constructor(nativeEvent) {
          closure_5(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    if (tmp9) {
      class Q {
        constructor(nativeEvent) {
          closure_5(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const _Math = Math;
    if (contentHorizontalPadding == null) {
      class Q {
        constructor(nativeEvent) {
          closure_5(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const diff = first - 2 * contentHorizontalPadding;
    const sum = diff + tmp(initialQuery[12]).GIF_PICKER_GUTTER_SPACING;
    const maxResult = max(0, sum / 2 - tmp(initialQuery[12]).GIF_PICKER_GUTTER_SPACING);
    if (cResult[5] === maxResult) {
      let tmp31;
      class Q {
        constructor(nativeEvent) {
          closure_5(nativeEvent.nativeEvent.layout.width);
        }
      }
      ({ columns, columnWidth } = tmp20);
      obj2.useRef(null);
      [r10088, GIFPickerViewStore] = onPressGIF(obj2.useState(false), 2);
      onPressGIF(obj2.useState(false), 2);
      const ref = obj2.useRef("");
      const ref2 = obj2.useRef(false);
      [r10098, closure_10] = onPressGIF(obj2.useState(false), 2);
      onPressGIF(obj2.useState(false), 2);
      const tmp10Result5 = onPressGIF(obj2.useState(first1.SEARCH), 2);
      first1 = tmp10Result5[0];
      closure_12 = tmp10Result5[1];
      [tmp28, tmp29] = onPressGIF(obj2.useState(""), 2);
      const _Symbol2 = Symbol;
      onPressGIF(obj2.useState(""), 2);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            GIFPickerViewStore(false);
            closure_12(unpackModuleId.SEARCH);
            tmp29("");
            const obj = GIFPickerActionCreatorsAll;
            obj.resetSearch();
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          }
        }
        cResult[8] = U;
      } else {
        class U {
          constructor() {
            GIFPickerViewStore(false);
            closure_12(unpackModuleId.SEARCH);
            tmp29("");
            const obj = GIFPickerActionCreatorsAll;
            obj.resetSearch();
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            GIFPickerViewStore(false);
            closure_12(unpackModuleId.SEARCH);
            tmp29("");
            const obj = GIFPickerActionCreatorsAll;
            obj.resetSearch();
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          }
        }
        let debounceResult = obj4.debounce(guildId(initialQuery[9]).search, 200);
        cResult[9] = debounceResult;
        tmp31 = debounceResult;
      } else {
        class U {
          constructor() {
            GIFPickerViewStore(false);
            closure_12(unpackModuleId.SEARCH);
            tmp29("");
            const obj = GIFPickerActionCreatorsAll;
            obj.resetSearch();
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          }
        }
      }
      debounceResult = tmp31;
      const tmpResult = tmp(initialQuery[12]);
      const favoriteGIFsMobile = tmpResult.useFavoriteGIFsMobile();
      ({ favorites, favoritesCategory } = favoriteGIFsMobile);
      if (cResult[10] === favorites) {
        let tmp37;
        class U {
          constructor() {
            GIFPickerViewStore(false);
            closure_12(unpackModuleId.SEARCH);
            tmp29("");
            const obj = GIFPickerActionCreatorsAll;
            obj.resetSearch();
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          }
        }
        closure_15 = tmp35;
        const _Symbol4 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              GIFPickerViewStore(false);
              closure_12(unpackModuleId.SEARCH);
              tmp29("");
              const obj = GIFPickerActionCreatorsAll;
              obj.resetSearch();
              const current = ref.current;
              if (current != null) {
                current.blur();
              }
            }
          }
          const items = [GIFPickerViewStore];
          cResult[13] = items;
          tmp37 = items;
        } else {
          class U {
            constructor() {
              GIFPickerViewStore(false);
              closure_12(unpackModuleId.SEARCH);
              tmp29("");
              const obj = GIFPickerActionCreatorsAll;
              obj.resetSearch();
              const current = ref.current;
              if (current != null) {
                current.blur();
              }
            }
          }
        }
        if (cResult[14] === first1) {
          class U {
            constructor() {
              GIFPickerViewStore(false);
              closure_12(unpackModuleId.SEARCH);
              tmp29("");
              const obj = GIFPickerActionCreatorsAll;
              obj.resetSearch();
              const current = ref.current;
              if (current != null) {
                current.blur();
              }
            }
          }
          const tmpResult3 = tmp(initialQuery[15]);
          const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp37, Te);
          let resultItems = stateFromStoresObject.resultItems;
          const resultQuery = stateFromStoresObject.resultQuery;
          class Te {
            constructor() {
              if (first1 !== unpackModuleId.FAVORITES) {
                resultItems = GIFPickerViewStore.getResultItems();
              } else {
                resultItems = closure_15;
              }
              const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
              return obj;
            }
          }
          if (cResult[17] !== resultQuery) {
            class U {
              constructor() {
                GIFPickerViewStore(false);
                closure_12(unpackModuleId.SEARCH);
                tmp29("");
                const obj = GIFPickerActionCreatorsAll;
                obj.resetSearch();
                const current = ref.current;
                if (current != null) {
                  current.blur();
                }
              }
            }
            cResult[17] = resultQuery;
            cResult[18] = tmp41;
          } else {
            class U {
              constructor() {
                GIFPickerViewStore(false);
                closure_12(unpackModuleId.SEARCH);
                tmp29("");
                const obj = GIFPickerActionCreatorsAll;
                obj.resetSearch();
                const current = ref.current;
                if (current != null) {
                  current.blur();
                }
              }
            }
          }
          tmp41 = tmp40;
          if (cResult[19] === tmp40) {
            let tmp47;
            class U {
              constructor() {
                GIFPickerViewStore(false);
                closure_12(unpackModuleId.SEARCH);
                tmp29("");
                const obj = GIFPickerActionCreatorsAll;
                obj.resetSearch();
                const current = ref.current;
                if (current != null) {
                  current.blur();
                }
              }
            }
            const effect1 = obj2.useEffect(tmp44, tmp43);
            const _Symbol5 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class Pe {
                constructor() {
                  const obj = channelId(initialQuery[16]);
                  obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  const obj2 = guildId(initialQuery[9]);
                  const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                }
              }
              const items1 = [];
              cResult[23] = Pe;
              cResult[24] = items1;
              class Te {
                constructor() {
                  if (first1 !== unpackModuleId.FAVORITES) {
                    resultItems = GIFPickerViewStore.getResultItems();
                  } else {
                    resultItems = closure_15;
                  }
                  const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
                  return obj;
                }
              }
            } else {
              class Pe {
                constructor() {
                  const obj = channelId(initialQuery[16]);
                  obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  const obj2 = guildId(initialQuery[9]);
                  const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                }
              }
              tmp47 = cResult[24];
            }
            const effect2 = obj2.useEffect(Pe, tmp47);
            class Te {
              constructor() {
                if (first1 !== unpackModuleId.FAVORITES) {
                  resultItems = GIFPickerViewStore.getResultItems();
                } else {
                  resultItems = closure_15;
                }
                const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
                return obj;
              }
            }
            const effect3 = obj2.useEffect(tmp49, tmp50);
            if (cResult[28] !== tmp40) {
              class Pe {
                constructor() {
                  const obj = channelId(initialQuery[16]);
                  obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  const obj2 = guildId(initialQuery[9]);
                  const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                }
              }
              let obj3 = {
                onClickSuggestion(arg0) {
                              return tmp41(arg0, false);
                            }
              };
              cResult[28] = tmp40;
              const tmp53 = tmp29(tmp8(initialQuery[17]), obj3);
              class Te {
                constructor() {
                  if (first1 !== unpackModuleId.FAVORITES) {
                    resultItems = GIFPickerViewStore.getResultItems();
                  } else {
                    resultItems = closure_15;
                  }
                  const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
                  return obj;
                }
              }
              cResult[29] = tmp53;
            } else {
              class Pe {
                constructor() {
                  const obj = channelId(initialQuery[16]);
                  obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  const obj2 = guildId(initialQuery[9]);
                  const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                }
              }
            }
            if (cResult[30] === onPressGIF) {
              class Pe {
                constructor() {
                  const obj = channelId(initialQuery[16]);
                  obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  const obj2 = guildId(initialQuery[9]);
                  const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                }
              }
            }
            class Ne {
              constructor(gifId, index) {
                const obj = GIFPickerActionCreatorsAll;
                const obj2 = { type: unpackModuleId.SEARCH, index, offset: 0, limit, results: resultItems.length, totalResults: resultItems.length, query, gifId: gifId.id };
                obj.trackSelectGIF(obj2);
                onPressGIF(gifId);
              }
            }
            cResult[30] = onPressGIF;
            cResult[31] = resultItems.length;
            cResult[32] = resultQuery;
            cResult[33] = Ne;
          }
          const items2 = [tmp40, initialQuery];
          cResult[19] = tmp40;
          cResult[20] = initialQuery;
          cResult[21] = tmp44;
          cResult[22] = items2;
          tmp43 = items2;
        }
        class Te {
          constructor() {
            if (first1 !== unpackModuleId.FAVORITES) {
              resultItems = GIFPickerViewStore.getResultItems();
            } else {
              resultItems = closure_15;
            }
            const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
            return obj;
          }
        }
        cResult[14] = first1;
        cResult[16] = Te;
      }
      const tmpResult4 = tmp(initialQuery[14]);
      const result = tmpResult4.filterFavoriteGIFsByQuery(favorites, tmp28);
      cResult[10] = favorites;
      cResult[11] = tmp28;
      cResult[12] = result;
      tmp35 = result;
    }
    const obj5 = { columns: 2, columnWidth: maxResult };
    cResult[5] = maxResult;
    cResult[6] = 2;
    cResult[7] = obj5;
    tmp20 = obj5;
  }
  const fn = function f() {
    const obj = GIFPickerActionCreatorsAll;
    obj.initializeSearch();
    const obj2 = GIFPickerActionCreatorsAll;
    obj2.resetSearch();
    if (null != channelId) {
      const obj4 = { type: ref2.GIF, channel_id: tmp4, guild_id: guildId };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  };
  const items3 = [channelId, guildId];
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp6 = items3;
  tmp5 = fn;
}) : ((bottomSheetRef) => {
  let _undefined;
  let c13;
  let columnWidth;
  let columns;
  let items11;
  let keyboardDismissMode;
  let selectedGifSrc;
  let tmp14;
  let tmp34Result;
  let tmp36;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const guildId = bottomSheetRef.guildId;
  const initialQuery = bottomSheetRef.initialQuery;
  let flag = bottomSheetRef.inActionSheet;
  const hideFavorites = bottomSheetRef.hideFavorites;
  if (flag === undefined) {
    flag = true;
  }
  const contentHorizontalPadding = bottomSheetRef.contentHorizontalPadding;
  const onPressGIF = bottomSheetRef.onPressGIF;
  c13 = undefined;
  closure_15 = undefined;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  const tmp = closure_15();
  const effect = onPressGIF.useEffect(() => {
    const obj = GIFPickerActionCreatorsAll;
    obj.initializeSearch();
    const obj2 = GIFPickerActionCreatorsAll;
    obj2.resetSearch();
    if (null != channelId) {
      const obj4 = { type: ref.GIF, channel_id: tmp4, guild_id: guildId };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  }, items);
  let tmp3 = channelId;
  const tmp4 = initialQuery;
  const tmp5 = channelId(initialQuery[11])();
  let closure_6 = tmp5;
  const tmp6 = contentHorizontalPadding(onPressGIF.useState(0), 2);
  const first = tmp6[0];
  let closure_8 = tmp6[1];
  const items1 = [tmp5, first, contentHorizontalPadding];
  const callback = onPressGIF.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = onPressGIF.useMemo(() => {
    let max;
    let sum;
    let num = 2;
    if (closure_6) {
      num = 3;
    }
    let num2 = contentHorizontalPadding;
    const _Math = Math;
    const obj = { columns: num, columnWidth: max(0, sum / num - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING) };
    max = Math.max;
    if (contentHorizontalPadding == null) {
      num2 = 0;
    }
    const diff = first - 2 * num2;
    sum = diff + gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING;
    return obj;
  }, items1);
  ({ columns, columnWidth } = memo);
  const ref = onPressGIF.useRef(null);
  const tmp11 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  limit = tmp11[1];
  const first1 = tmp11[0];
  constants3 = onPressGIF.useRef("");
  const ref2 = onPressGIF.useRef(false);
  [tmp14, c13] = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp13 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp16 = contentHorizontalPadding(onPressGIF.useState(constants3.SEARCH), 2);
  const first2 = tmp16[0];
  closure_15 = tmp16[1];
  const tmp18 = contentHorizontalPadding(onPressGIF.useState(""), 2);
  const first3 = tmp18[0];
  let closure_17 = tmp19;
  const items2 = [ref];
  const callback1 = onPressGIF.useCallback(() => {
    limit(false);
    closure_15(unpackModuleId.SEARCH);
    closure_17("");
    const obj = GIFPickerActionCreatorsAll;
    obj.resetSearch();
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }, items2);
  const memo1 = onPressGIF.useMemo(() => {
    const obj = bottomSheetRef(initialQuery[13]);
    return obj.debounce(guildId(initialQuery[9]).search, 200);
  }, []);
  let obj = bottomSheetRef(initialQuery[12]);
  const favoriteGIFsMobile = obj.useFavoriteGIFsMobile();
  const favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first3];
  const favoritesCategory = favoriteGIFsMobile.favoritesCategory;
  let closure_20 = onPressGIF.useMemo(() => {
    const obj = GifPickerUtils;
    return obj.filterFavoriteGIFsByQuery(favorites, first3);
  }, items3);
  let obj2 = bottomSheetRef(initialQuery[15]);
  const items4 = [first];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => {
    if (first2 !== unpackModuleId.FAVORITES) {
      resultItems = GIFPickerViewStore.getResultItems();
    } else {
      resultItems = closure_20;
    }
    const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
    return obj;
  });
  let resultItems = stateFromStoresObject.resultItems;
  const resultQuery = stateFromStoresObject.resultQuery;
  const items5 = [memo1, ref, resultQuery];
  const callback2 = onPressGIF.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref.current !== current) {
      let search;
      ref.current = current;
      closure_15(unpackModuleId.SEARCH);
      const tmp21 = current.trim().length > 0;
      const tmp2 = tmp21 && resultQuery !== current;
      _undefined(tmp2);
      limit(tmp21);
      if (flag) {
        search = memo1;
      } else {
        search = GIFPickerActionCreatorsAll.search;
      }
      let SEARCH = null;
      if ("" !== current) {
        SEARCH = unpackModuleId.SEARCH;
      }
      search(current, SEARCH, !flag, c10);
      if (!flag) {
        current = ref.current;
        if (current != null) {
          current.setText(current);
        }
      }
    }
  }, items5);
  const items6 = [callback2, initialQuery];
  const effect1 = onPressGIF.useEffect(() => {
    if (!ref2.current) {
      const tmp3 = null != initialQuery && initialQuery.trim().length > 0;
      if (tmp3) {
        tmp.current = true;
        callback2(initialQuery, false);
      }
    }
  }, items6);
  const effect2 = onPressGIF.useEffect(() => {
    const obj = channelId(initialQuery[16]);
    obj.acknowledgeTooltip(ref2.GIF_PICKER_TOOLTIP);
    const obj2 = guildId(initialQuery[9]);
    const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
  }, []);
  const items7 = [resultQuery, ref];
  const effect3 = onPressGIF.useEffect(() => {
    if ("" !== resultQuery) {
      const obj = GIFPickerActionCreatorsAll;
      const suggestions = obj.fetchSuggestions(resultQuery);
    }
    const current = ref.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    _undefined(resultQuery !== text);
  }, items7);
  const items8 = [callback2];
  const items9 = [onPressGIF, resultItems.length, resultQuery];
  const memo2 = onPressGIF.useMemo(() => {
    const obj = {
      onClickSuggestion(arg0) {
        return callback2(arg0, false);
      }
    };
    return map1(GIFPickerSearchSuggestionsDefault, obj);
  }, items8);
  const items10 = [bottomSheetRef, callback2];
  const callback3 = onPressGIF.useCallback((gifId, index) => {
    const obj = GIFPickerActionCreatorsAll;
    const obj2 = { type: unpackModuleId.SEARCH, index, offset: 0, limit, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id };
    obj.trackSelectGIF(obj2);
    onPressGIF(gifId);
  }, items9);
  const callback4 = onPressGIF.useCallback((arg0, arg1) => {
    if (arg0 === unpackModuleId.TRENDING_GIFS) {
      limit(false);
      closure_15(arg0);
      const obj = GIFPickerActionCreatorsAll;
      const trendingGIFs = obj.fetchTrendingGIFs(c10);
    } else if (arg0 === tmp.FAVORITES) {
      limit(false);
      closure_15(arg0);
    } else {
      callback2(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, items10);
  let obj3 = { onLayout: callback, style: items11, children: null };
  items11 = [tmp.container, ];
  let tmp33 = null;
  const tmp31 = first2;
  const tmp32 = closure_6;
  if (null != contentHorizontalPadding) {
    let obj4 = { paddingHorizontal: contentHorizontalPadding };
    tmp33 = obj4;
  }
  items11[1] = tmp33;
  const items12 = [c13(tmp3(tmp4[18]), { categoryType: first2, columnWidth, onQueryClear: callback1, onQueryChange: callback2, onFavoritesQueryChange: tmp18[1], searchInputRef: ref }), ];
  if (resultItems.length <= 0) {
    if (!first1) {
      if (first3.length <= 0) {
        const obj5 = { columns, onSelectCategory: callback4, favoritesCategory: tmp36, inActionSheet: flag };
        tmp36 = undefined;
        const tmp3Result = tmp3(tmp4[21]);
        if (true !== hideFavorites) {
          tmp36 = favoritesCategory;
        }
        tmp34Result = tmp34(tmp3Result, obj5);
      }
      items12[1] = tmp34Result;
      obj3.children = items12;
      return tmp31(tmp32, obj3);
    }
  }
  if (0 === resultItems.length) {
    let tmp34Result2;
    if (!tmp14) {
      const obj6 = { categoryType: first2, inActionSheet: flag };
      tmp34Result2 = tmp34(tmp3(tmp4[19]), obj6);
    }
    tmp34Result = tmp34Result2;
  }
  tmp34Result2 = tmp34(tmp3(tmp4[20]), { columns, columnWidth, loading: tmp14, inActionSheet: flag, resultItems, onPressGIF: callback3, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 });
}));
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default memoResult;