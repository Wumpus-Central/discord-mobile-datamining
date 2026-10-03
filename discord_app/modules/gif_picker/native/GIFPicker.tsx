// === Module 10088: GIFPicker ===

// Module 10088 (GIFPicker)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GIFPickerActionCreatorsAll from "GIFPickerActionCreators" /* 10090 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10093 */;
import GifPickerUtils from "GifPickerUtils" /* 10096 */;
import GIFPickerSearchSuggestionsDefault from "GIFPickerSearchSuggestions" /* 10097 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10089 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9, GIF_FETCH_LIMIT_IOS: c10, GIFPickerResultTypes: closure_11, TooltipNames: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let closure_15 = createStyles.createStyles({ container: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((bottomSheetRef) => {
  const cResult = bottomSheetRef(initialQuery[8]).c(66);
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const guildId = bottomSheetRef.guildId;
  ({ hideFavorites, initialQuery } = bottomSheetRef);
  ({ inActionSheet, contentHorizontalPadding, selectedGifSrc, keyboardDismissMode, onPressGIF } = bottomSheetRef);
  closure_15();
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    const tmp11 = onPressGIF(noop.useState(0), 2);
    noop = tmp11[1];
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class Q {
        constructor(arg0) {
          tmp = closure_5(bottomSheetRef.nativeEvent.layout.width);
          return;
        }
      }
      cResult[4] = Q;
    } else {
      class Q {
        constructor(arg0) {
          tmp = closure_5(bottomSheetRef.nativeEvent.layout.width);
          return;
        }
      }
    }
    if (tmp9) {
      class Q {
        constructor(arg0) {
          tmp = closure_5(bottomSheetRef.nativeEvent.layout.width);
          return;
        }
      }
    }
    if (contentHorizontalPadding == null) {
      class Q {
        constructor(arg0) {
          tmp = closure_5(bottomSheetRef.nativeEvent.layout.width);
          return;
        }
      }
    }
    const diff = tmp11[0] - 2 * contentHorizontalPadding;
    const sum = diff + tmp(initialQuery[12]).GIF_PICKER_GUTTER_SPACING;
    const bound = Math.max(num, sum / num4 - tmp(initialQuery[12]).GIF_PICKER_GUTTER_SPACING);
    if (cResult[5] === bound) {
      class Q {
        constructor(arg0) {
          tmp = closure_5(bottomSheetRef.nativeEvent.layout.width);
          return;
        }
      }
      ({ columns, columnWidth } = tmp19);
      obj2.useRef(null);
      [r10088, GIFPickerViewStore] = onPressGIF(obj2.useState(false), 2);
      obj2.useRef("");
      obj2.useRef(false);
      const tmp10Result = onPressGIF(obj2.useState(false), 2);
      [r10098, closure_10] = onPressGIF(obj2.useState(false), 2);
      const tmp10Result5 = onPressGIF(obj2.useState(first.SEARCH), 2);
      first = tmp10Result5[0];
      closure_12 = tmp10Result5[1];
      const tmp10Result4 = onPressGIF(obj2.useState(false), 2);
      [tmp27, tmp28] = onPressGIF(obj2.useState(""), 2);
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_7(false);
            tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
            tmp3 = closure_13("");
            obj = closure_2(closure_3[9]);
            resetSearchResult = obj.resetSearch();
            current = closure_6.current;
            if (current != null) {
              blurResult = current.blur();
            }
            return;
          }
        }
        cResult[8] = U;
      } else {
        class U {
          constructor() {
            tmp = closure_7(false);
            tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
            tmp3 = closure_13("");
            obj = closure_2(closure_3[9]);
            resetSearchResult = obj.resetSearch();
            current = closure_6.current;
            if (current != null) {
              blurResult = current.blur();
            }
            return;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_7(false);
            tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
            tmp3 = closure_13("");
            obj = closure_2(closure_3[9]);
            resetSearchResult = obj.resetSearch();
            current = closure_6.current;
            if (current != null) {
              blurResult = current.blur();
            }
            return;
          }
        }
        let debounceResult = obj4.debounce(guildId(initialQuery[9]).search, 200);
        cResult[9] = debounceResult;
        const tmp30 = debounceResult;
      } else {
        class U {
          constructor() {
            tmp = closure_7(false);
            tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
            tmp3 = closure_13("");
            obj = closure_2(closure_3[9]);
            resetSearchResult = obj.resetSearch();
            current = closure_6.current;
            if (current != null) {
              blurResult = current.blur();
            }
            return;
          }
        }
      }
      debounceResult = tmp30;
      const tmp10Result6 = onPressGIF(obj2.useState(""), 2);
      const favoriteGIFsMobile = tmp(initialQuery[12]).useFavoriteGIFsMobile();
      ({ favorites, favoritesCategory } = favoriteGIFsMobile);
      if (cResult[10] === favorites) {
        class U {
          constructor() {
            tmp = closure_7(false);
            tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
            tmp3 = closure_13("");
            obj = closure_2(closure_3[9]);
            resetSearchResult = obj.resetSearch();
            current = closure_6.current;
            if (current != null) {
              blurResult = current.blur();
            }
            return;
          }
        }
        closure_15 = tmp34;
        const _Symbol4 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              tmp = closure_7(false);
              tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
              tmp3 = closure_13("");
              obj = closure_2(closure_3[9]);
              resetSearchResult = obj.resetSearch();
              current = closure_6.current;
              if (current != null) {
                blurResult = current.blur();
              }
              return;
            }
          }
          const items = [GIFPickerViewStore];
          cResult[13] = items;
          const tmp36 = items;
        } else {
          class U {
            constructor() {
              tmp = closure_7(false);
              tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
              tmp3 = closure_13("");
              obj = closure_2(closure_3[9]);
              resetSearchResult = obj.resetSearch();
              current = closure_6.current;
              if (current != null) {
                blurResult = current.blur();
              }
              return;
            }
          }
        }
        if (cResult[14] === first) {
          class U {
            constructor() {
              tmp = closure_7(false);
              tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
              tmp3 = closure_13("");
              obj = closure_2(closure_3[9]);
              resetSearchResult = obj.resetSearch();
              current = closure_6.current;
              if (current != null) {
                blurResult = current.blur();
              }
              return;
            }
          }
          const stateFromStoresObject = tmp(initialQuery[15]).useStateFromStoresObject(tmp36, Te);
          let resultItems = stateFromStoresObject.resultItems;
          const resultQuery = stateFromStoresObject.resultQuery;
          class Te {
            constructor() {
              if (closure_11 !== GIFPickerResultTypes.FAVORITES) {
                tmp2 = closure_7;
                resultItems = closure_7.getResultItems();
              } else {
                resultItems = closure_15;
              }
              obj = { resultItems, resultQuery: closure_7.getResultQuery() };
              return obj;
            }
          }
          if (cResult[17] !== resultQuery) {
            class U {
              constructor() {
                tmp = closure_7(false);
                tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
                tmp3 = closure_13("");
                obj = closure_2(closure_3[9]);
                resetSearchResult = obj.resetSearch();
                current = closure_6.current;
                if (current != null) {
                  blurResult = current.blur();
                }
                return;
              }
            }
            cResult[17] = resultQuery;
            cResult[18] = tmp40;
          } else {
            class U {
              constructor() {
                tmp = closure_7(false);
                tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
                tmp3 = closure_13("");
                obj = closure_2(closure_3[9]);
                resetSearchResult = obj.resetSearch();
                current = closure_6.current;
                if (current != null) {
                  blurResult = current.blur();
                }
                return;
              }
            }
          }
          if (cResult[19] === tmp39) {
            class U {
              constructor() {
                tmp = closure_7(false);
                tmp2 = closure_12(GIFPickerResultTypes.SEARCH);
                tmp3 = closure_13("");
                obj = closure_2(closure_3[9]);
                resetSearchResult = obj.resetSearch();
                current = closure_6.current;
                if (current != null) {
                  blurResult = current.blur();
                }
                return;
              }
            }
            const effect1 = obj2.useEffect(tmp43, tmp42);
            const _Symbol5 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class Pe {
                constructor() {
                  obj = channelId(initialQuery[16]);
                  acknowledgeTooltipResult = obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  obj2 = guildId(initialQuery[9]);
                  trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                  return;
                }
              }
              const items1 = [];
              cResult[23] = Pe;
              cResult[24] = items1;
              class Te {
                constructor() {
                  if (closure_11 !== GIFPickerResultTypes.FAVORITES) {
                    tmp2 = closure_7;
                    resultItems = closure_7.getResultItems();
                  } else {
                    resultItems = closure_15;
                  }
                  obj = { resultItems, resultQuery: closure_7.getResultQuery() };
                  return obj;
                }
              }
            } else {
              class Pe {
                constructor() {
                  obj = channelId(initialQuery[16]);
                  acknowledgeTooltipResult = obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  obj2 = guildId(initialQuery[9]);
                  trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                  return;
                }
              }
              const tmp46 = cResult[24];
            }
            const effect2 = obj2.useEffect(Pe, tmp46);
            class Te {
              constructor() {
                if (closure_11 !== GIFPickerResultTypes.FAVORITES) {
                  tmp2 = closure_7;
                  resultItems = closure_7.getResultItems();
                } else {
                  resultItems = closure_15;
                }
                obj = { resultItems, resultQuery: closure_7.getResultQuery() };
                return obj;
              }
            }
            const effect3 = obj2.useEffect(tmp48, tmp49);
            if (cResult[28] !== tmp39) {
              class Pe {
                constructor() {
                  obj = channelId(initialQuery[16]);
                  acknowledgeTooltipResult = obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  obj2 = guildId(initialQuery[9]);
                  trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                  return;
                }
              }
              let obj3 = {
                onClickSuggestion(arg0) {
                              return tmp40(arg0, false);
                            }
              };
              const tmp52 = tmp28(tmp8(initialQuery[17]), obj3);
              cResult[28] = tmp39;
              class Te {
                constructor() {
                  if (closure_11 !== GIFPickerResultTypes.FAVORITES) {
                    tmp2 = closure_7;
                    resultItems = closure_7.getResultItems();
                  } else {
                    resultItems = closure_15;
                  }
                  obj = { resultItems, resultQuery: closure_7.getResultQuery() };
                  return obj;
                }
              }
              cResult[29] = tmp52;
            } else {
              class Pe {
                constructor() {
                  obj = channelId(initialQuery[16]);
                  acknowledgeTooltipResult = obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  obj2 = guildId(initialQuery[9]);
                  trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                  return;
                }
              }
            }
            if (cResult[30] === onPressGIF) {
              class Pe {
                constructor() {
                  obj = channelId(initialQuery[16]);
                  acknowledgeTooltipResult = obj.acknowledgeTooltip(closure_12.GIF_PICKER_TOOLTIP);
                  obj2 = guildId(initialQuery[9]);
                  trendingSearchTerms = obj2.fetchTrendingSearchTerms();
                  return;
                }
              }
            }
            class Ne {
              constructor(arg0, arg1) {
                obj = closure_2(closure_3[9]);
                obj1 = { type: GIFPickerResultTypes.SEARCH, index: arg1, offset: 0, limit: GIF_FETCH_LIMIT_IOS, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: bottomSheetRef.id };
                trackSelectGIFResult = obj.trackSelectGIF(obj1);
                tmp2 = onPressGIF(bottomSheetRef);
                return;
              }
            }
            cResult[30] = onPressGIF;
            cResult[31] = resultItems.length;
            cResult[32] = resultQuery;
            cResult[33] = Ne;
          }
          const items2 = [tmp39, initialQuery];
          cResult[19] = tmp39;
          cResult[20] = initialQuery;
          cResult[21] = tmp43;
          cResult[22] = items2;
          tmp42 = items2;
          const tmpResult3 = tmp(initialQuery[15]);
        }
        class Te {
          constructor() {
            if (closure_11 !== GIFPickerResultTypes.FAVORITES) {
              tmp2 = closure_7;
              resultItems = closure_7.getResultItems();
            } else {
              resultItems = closure_15;
            }
            obj = { resultItems, resultQuery: closure_7.getResultQuery() };
            return obj;
          }
        }
        cResult[14] = first;
        cResult[16] = Te;
      }
      const tmpResult = tmp(initialQuery[12]);
      const result = tmp(initialQuery[14]).filterFavoriteGIFsByQuery(favorites, tmp27);
      cResult[10] = favorites;
      cResult[11] = tmp27;
      cResult[12] = result;
      tmp34 = result;
      const tmpResult4 = tmp(initialQuery[14]);
    }
    const obj5 = { columns: 2, columnWidth: bound };
    cResult[5] = bound;
    cResult[6] = 2;
    cResult[7] = obj5;
    tmp19 = obj5;
    tmp8 = channelId;
    tmp9 = channelId(initialQuery[11])();
  }
  const fn = function f() {
    GIFPickerActionCreatorsAll.initializeSearch();
    GIFPickerActionCreatorsAll.resetSearch();
    if (null != channelId) {
      const obj4 = { type: constants2.GIF, channel_id: tmp4, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  };
  const items3 = [channelId, guildId];
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp6 = items3;
  tmp5 = fn;
  let obj = bottomSheetRef(initialQuery[8]);
}) : ((bottomSheetRef) => {
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const guildId = bottomSheetRef.guildId;
  const initialQuery = bottomSheetRef.initialQuery;
  let flag = bottomSheetRef.inActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  const contentHorizontalPadding = bottomSheetRef.contentHorizontalPadding;
  const onPressGIF = bottomSheetRef.onPressGIF;
  c13 = undefined;
  closure_15 = undefined;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  const effect = onPressGIF.useEffect(() => {
    GIFPickerActionCreatorsAll.initializeSearch();
    GIFPickerActionCreatorsAll.resetSearch();
    if (null != channelId) {
      const obj4 = { type: constants2.GIF, channel_id: tmp4, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  }, items);
  let tmp3 = channelId;
  let obj = initialQuery;
  const tmp4 = channelId(initialQuery[11])();
  closure_6 = tmp4;
  const tmp5 = contentHorizontalPadding(onPressGIF.useState(0), 2);
  const first = tmp5[0];
  closure_8 = tmp5[1];
  const items1 = [tmp4, first, contentHorizontalPadding];
  const callback = onPressGIF.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = onPressGIF.useMemo(() => {
    let num = 2;
    if (closure_6) {
      num = 3;
    }
    const obj = { columns: num, columnWidth: null };
    let num2 = contentHorizontalPadding;
    if (contentHorizontalPadding == null) {
      num2 = 0;
    }
    const diff = first - 2 * num2;
    const sum = diff + gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING;
    obj.columnWidth = Math.max(0, sum / num - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING);
    return obj;
  }, items1);
  ({ columns, columnWidth } = memo);
  const ref = onPressGIF.useRef(null);
  const tmp10 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  closure_10 = tmp10[1];
  constants3 = onPressGIF.useRef("");
  onPressGIF.useRef(false);
  const tmp = closure_15();
  [tmp12, c13] = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp14 = contentHorizontalPadding(onPressGIF.useState(constants3.SEARCH), 2);
  const first1 = tmp14[0];
  closure_15 = tmp14[1];
  const tmp16 = contentHorizontalPadding(onPressGIF.useState(""), 2);
  const first2 = tmp16[0];
  closure_17 = tmp17;
  const items2 = [ref];
  const callback1 = onPressGIF.useCallback(() => {
    closure_10(false);
    closure_15(constants3.SEARCH);
    closure_17("");
    GIFPickerActionCreatorsAll.resetSearch();
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }, items2);
  const memo1 = onPressGIF.useMemo(() => bottomSheetRef(initialQuery[13]).debounce(guildId(initialQuery[9]).search, 200), []);
  const tmp11 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const favoriteGIFsMobile = bottomSheetRef(initialQuery[12]).useFavoriteGIFsMobile();
  const favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first2];
  closure_20 = onPressGIF.useMemo(() => GifPickerUtils.filterFavoriteGIFsByQuery(favorites, first2), items3);
  let obj2 = bottomSheetRef(initialQuery[12]);
  const items4 = [first];
  const stateFromStoresObject = bottomSheetRef(initialQuery[15]).useStateFromStoresObject(items4, () => {
    if (first1 !== constants3.FAVORITES) {
      resultItems = GIFPickerViewStore.getResultItems();
    } else {
      resultItems = closure_20;
    }
    return { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
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
      ref.current = current;
      closure_15(constants3.SEARCH);
      const tmp21 = current.trim().length > 0;
      let tmp2 = tmp21;
      if (tmp2) {
        tmp2 = resultQuery !== current;
      }
      _undefined(tmp2);
      closure_10(tmp21);
      if (flag) {
        let search = memo1;
      } else {
        search = GIFPickerActionCreatorsAll.search;
      }
      let SEARCH = null;
      if ("" !== current) {
        SEARCH = constants3.SEARCH;
      }
      search(current, SEARCH, !flag, limit);
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
      let tmp3 = null != initialQuery;
      if (tmp3) {
        tmp3 = initialQuery.trim().length > 0;
      }
      if (tmp3) {
        tmp.current = true;
        callback2(initialQuery, false);
      }
    }
  }, items6);
  const effect2 = onPressGIF.useEffect(() => {
    channelId(initialQuery[16]).acknowledgeTooltip(ref2.GIF_PICKER_TOOLTIP);
    const obj = channelId(initialQuery[16]);
    const trendingSearchTerms = guildId(initialQuery[9]).fetchTrendingSearchTerms();
  }, []);
  const items7 = [resultQuery, ref];
  const effect3 = onPressGIF.useEffect(() => {
    if ("" !== resultQuery) {
      const suggestions = GIFPickerActionCreatorsAll.fetchSuggestions(resultQuery);
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
  const memo2 = onPressGIF.useMemo(() => __initData2(GIFPickerSearchSuggestionsDefault, {
    onClickSuggestion(arg0) {
      return callback2(arg0, false);
    }
  }), items8);
  const items10 = [bottomSheetRef, callback2];
  const callback3 = onPressGIF.useCallback((gifId, index) => {
    GIFPickerActionCreatorsAll.trackSelectGIF({ type: constants3.SEARCH, index, offset: 0, limit, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id });
    onPressGIF(gifId);
  }, items9);
  const callback4 = onPressGIF.useCallback((arg0, arg1) => {
    if (arg0 === constants3.TRENDING_GIFS) {
      closure_10(false);
      closure_15(arg0);
      const trendingGIFs = GIFPickerActionCreatorsAll.fetchTrendingGIFs(limit);
    } else if (arg0 === tmp.FAVORITES) {
      closure_10(false);
      closure_15(arg0);
    } else {
      callback2(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, items10);
  let obj4 = { onLayout: callback, style: null, children: null };
  const items11 = [tmp.container, ];
  let tmp31 = null;
  if (null != contentHorizontalPadding) {
    const obj5 = { paddingHorizontal: contentHorizontalPadding };
    tmp31 = obj5;
  }
  items11[1] = tmp31;
  obj4.style = items11;
  const items12 = [c13(tmp3(obj[18]), { categoryType: first1, columnWidth, onQueryClear: callback1, onQueryChange: callback2, onFavoritesQueryChange: tmp16[1], searchInputRef: ref }), ];
  if (resultItems.length <= 0) {
    if (!tmp10[0]) {
      if (first2.length <= 0) {
        const obj6 = { columns, onSelectCategory: callback4, favoritesCategory: null, inActionSheet: null };
        let favoritesCategory;
        if (true !== bottomSheetRef.hideFavorites) {
          favoritesCategory = favoriteGIFsMobile.favoritesCategory;
        }
        obj6.favoritesCategory = favoritesCategory;
        obj6.inActionSheet = flag;
        items12[1] = tmp32(tmp3(obj[21]), obj6);
        obj4.children = items12;
        return first1(closure_6, obj4);
      }
    }
  }
  if (0 === resultItems.length) {
    if (!tmp12) {
      const obj7 = { categoryType: first1, inActionSheet: flag };
      let tmp32Result = tmp32(tmp3(obj[19]), obj7);
    }
  }
  tmp3 = tmp3(obj[20]);
  obj = { columns, columnWidth, loading: tmp12, inActionSheet: flag, resultItems, onPressGIF: callback3, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 };
  tmp32Result = tmp32(tmp3, obj);
}));