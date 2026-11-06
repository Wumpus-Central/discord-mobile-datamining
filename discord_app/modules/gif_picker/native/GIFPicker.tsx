// === Module 10378: GIFPicker ===

// Module 10378 (GIFPicker)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GIFPickerActionCreatorsAll from "GIFPickerActionCreators" /* 10380 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10383 */;
import GifPickerUtils from "GifPickerUtils" /* 10386 */;
import GIFPickerSearchSuggestionsDefault from "GIFPickerSearchSuggestions" /* 10388 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10379 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9, GIF_FETCH_LIMIT_IOS: closure_10, GIFPickerResultTypes: closure_11, TooltipNames: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5170);
let closure_15 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default noop.memo(function GIFPicker(bottomSheetRef) {
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
  let ref1;
  closure_9 = undefined;
  ref = undefined;
  constants3 = undefined;
  c12 = undefined;
  let categoryType;
  closure_14 = undefined;
  let first1;
  closure_16 = undefined;
  let memo1;
  let favorites;
  closure_19 = undefined;
  let resultItems;
  let resultQuery;
  let callback1;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  items = [channelId, guildId];
  const effect = onPressGIF.useEffect(() => {
    GIFPickerActionCreatorsAll.initializeSearch();
    GIFPickerActionCreatorsAll.resetSearch();
    if (null != channelId) {
      const obj4 = { type: constants2.GIF, channel_id: tmp4, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  }, items);
  let tmp3 = channelId;
  let obj8 = initialQuery;
  const tmp4 = channelId(initialQuery[9])();
  closure_6 = tmp4;
  const tmp5 = channelId(initialQuery[10])();
  const width = tmp5.width;
  let num = 0;
  ({ ref, onLayout } = tmp5);
  if (undefined !== width) {
    num = width;
  }
  const items1 = [tmp4, num, contentHorizontalPadding];
  const memo = obj.useMemo(() => {
    num = 2;
    if (closure_6) {
      num = 3;
    }
    const obj = { columns: num, columnWidth: null };
    let num2 = contentHorizontalPadding;
    if (contentHorizontalPadding == null) {
      num2 = 0;
    }
    const diff = num - 2 * num2;
    const sum = diff + gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING;
    obj.columnWidth = Math.max(0, sum / num - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING);
    return obj;
  }, items1);
  ({ columns, columnWidth } = memo);
  ref1 = obj.useRef(null);
  const tmp8 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  closure_9 = tmp8[1];
  ref = obj.useRef("");
  constants3 = obj.useRef(false);
  const tmp = first1();
  [tmp10, c12] = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp12 = contentHorizontalPadding(onPressGIF.useState(constants3.SEARCH), 2);
  categoryType = tmp12[0];
  closure_14 = tmp12[1];
  const tmp14 = contentHorizontalPadding(onPressGIF.useState(""), 2);
  first1 = tmp14[0];
  closure_16 = tmp15;
  const items2 = [ref1];
  const callback = obj.useCallback(() => {
    closure_9(false);
    closure_14(constants3.SEARCH);
    closure_16("");
    GIFPickerActionCreatorsAll.resetSearch();
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
  }, items2);
  memo1 = obj.useMemo(() => bottomSheetRef(initialQuery[12]).debounce(guildId(initialQuery[7]).search, 200), []);
  const tmp9 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const favoriteGIFsMobile = bottomSheetRef(obj8[11]).useFavoriteGIFsMobile();
  favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first1];
  closure_19 = obj.useMemo(() => GifPickerUtils.filterFavoriteGIFsByQuery(favorites, first1), items3);
  let obj3 = bottomSheetRef(obj8[11]);
  const items4 = [num];
  const stateFromStoresObject = bottomSheetRef(obj8[14]).useStateFromStoresObject(items4, () => {
    if (first !== constants3.FAVORITES) {
      resultItems = GIFPickerViewStore.getResultItems();
    } else {
      resultItems = closure_19;
    }
    return { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
  });
  resultItems = stateFromStoresObject.resultItems;
  resultQuery = stateFromStoresObject.resultQuery;
  const items5 = [memo1, ref1, resultQuery];
  callback1 = obj.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref.current !== current) {
      ref.current = current;
      closure_14(constants3.SEARCH);
      const tmp21 = current.trim().length > 0;
      let tmp2 = tmp21;
      if (tmp2) {
        tmp2 = resultQuery !== current;
      }
      _undefined(tmp2);
      closure_9(tmp21);
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
        current = ref1.current;
        if (current != null) {
          current.setText(current);
        }
      }
    }
  }, items5);
  const items6 = [callback1, initialQuery];
  const effect1 = obj.useEffect(() => {
    if (!ref2.current) {
      let tmp3 = null != initialQuery;
      if (tmp3) {
        tmp3 = initialQuery.trim().length > 0;
      }
      if (tmp3) {
        tmp.current = true;
        callback1(initialQuery, false);
      }
    }
  }, items6);
  const effect2 = obj.useEffect(() => {
    channelId(initialQuery[15]).acknowledgeTooltip(_undefined.GIF_PICKER_TOOLTIP);
    const obj = channelId(initialQuery[15]);
    const trendingSearchTerms = guildId(initialQuery[7]).fetchTrendingSearchTerms();
  }, []);
  const items7 = [resultQuery, ref1];
  const effect3 = obj.useEffect(() => {
    if ("" !== resultQuery) {
      const suggestions = GIFPickerActionCreatorsAll.fetchSuggestions(resultQuery);
    }
    const current = ref1.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    _undefined(resultQuery !== text);
  }, items7);
  const items8 = [callback1];
  const items9 = [onPressGIF, resultItems.length, resultQuery];
  const memo2 = obj.useMemo(() => state(GIFPickerSearchSuggestionsDefault, {
    onClickSuggestion(dependencyMap) {
      return callback1(dependencyMap, false);
    }
  }), items8);
  const items10 = [bottomSheetRef, callback1];
  const callback2 = obj.useCallback((gifId, index) => {
    GIFPickerActionCreatorsAll.trackSelectGIF({ type: constants3.SEARCH, index, offset: 0, limit, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id });
    onPressGIF(gifId);
  }, items9);
  const callback3 = obj.useCallback((arg0, arg1) => {
    if (arg0 === constants3.TRENDING_GIFS) {
      closure_9(false);
      closure_14(arg0);
      const trendingGIFs = GIFPickerActionCreatorsAll.fetchTrendingGIFs(limit);
    } else if (arg0 === tmp.FAVORITES) {
      closure_9(false);
      closure_14(arg0);
    } else {
      callback1(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, items10);
  let obj2 = { ref, onLayout, style: null, children: null };
  const items11 = [tmp.container, ];
  let tmp29 = null;
  if (null != contentHorizontalPadding) {
    const obj5 = { paddingHorizontal: contentHorizontalPadding };
    tmp29 = obj5;
  }
  items11[1] = tmp29;
  obj2.style = items11;
  const items12 = [categoryType(tmp3(obj8[17]), { categoryType, columnWidth, onQueryClear: callback, onQueryChange: callback1, onFavoritesQueryChange: tmp14[1], searchInputRef: ref1 }), ];
  if (resultItems.length <= 0) {
    if (!tmp8[0]) {
      if (first1.length <= 0) {
        const obj6 = { columns, onSelectCategory: callback3, favoritesCategory: null, inActionSheet: null };
        let favoritesCategory;
        if (true !== bottomSheetRef.hideFavorites) {
          favoritesCategory = favoriteGIFsMobile.favoritesCategory;
        }
        obj6.favoritesCategory = favoritesCategory;
        obj6.inActionSheet = flag;
        items12[1] = tmp30(tmp3(obj8[20]), obj6);
        obj2.children = items12;
        return closure_14(closure_6, obj2);
      }
    }
  }
  if (0 === resultItems.length) {
    if (!tmp10) {
      const obj7 = { categoryType, inActionSheet: flag };
      let tmp30Result = tmp30(tmp3(obj8[18]), obj7);
    }
  }
  tmp3 = tmp3(obj8[19]);
  obj8 = { columns, columnWidth, loading: tmp10, inActionSheet: flag, resultItems, onPressGIF: callback2, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 };
  tmp30Result = tmp30(tmp3, obj8);
});