// discord_app/modules/gif_picker/native/GIFPicker.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GIFPickerActionCreatorsAll from "../../../actions/GIFPickerActionCreators.tsx";
import gif_picker_GIFPickerUtils from "GIFPickerUtils.tsx";
import GifPickerUtils from "../GifPickerUtils.tsx";
import GIFPickerSearchSuggestionsDefault from "GIFPickerSearchSuggestions.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GIFPickerViewStore from "../../../stores/views/GIFPickerViewStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({
  AnalyticEvents: closure_8,
  ChatInputComponentViewedTypes: closure_9,
  GIF_FETCH_LIMIT_IOS: c10,
  GIFPickerResultTypes: closure_11,
  TooltipNames: closure_12,
} = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4560);
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
  c13 = undefined;
  closure_15 = undefined;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  const effect = onPressGIF.useEffect(() => {
    let obj = GIFPickerActionCreatorsAll;
    obj.initializeSearch();
    GIFPickerActionCreatorsAll.resetSearch();
    if (null != channelId) {
      obj = { type: constants2.GIF, channel_id: tmp4, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
    }
  }, items);
  let tmp3 = channelId;
  const tmp4 = channelId(initialQuery[9])();
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
  const memo1 = onPressGIF.useMemo(
    () => bottomSheetRef(initialQuery[11]).debounce(guildId(initialQuery[7]).search, 200),
    [],
  );
  let obj1 = bottomSheetRef(initialQuery[10]);
  const favoriteGIFsMobile = obj1.useFavoriteGIFsMobile();
  const favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first2];
  closure_20 = onPressGIF.useMemo(() => GifPickerUtils.filterFavoriteGIFsByQuery(favorites, first2), items3);
  let obj2 = bottomSheetRef(initialQuery[13]);
  const items4 = [first];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => {
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
    channelId(initialQuery[14]).acknowledgeTooltip(ref2.GIF_PICKER_TOOLTIP);
    const obj = channelId(initialQuery[14]);
    const trendingSearchTerms = guildId(initialQuery[7]).fetchTrendingSearchTerms();
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
  const memo2 = onPressGIF.useMemo(
    () =>
      map1(GIFPickerSearchSuggestionsDefault, {
        onClickSuggestion(dependencyMap) {
          return callback2(dependencyMap, false);
        },
      }),
    items8,
  );
  const items10 = [bottomSheetRef, callback2];
  const callback3 = onPressGIF.useCallback((gifId, index) => {
    const obj = {
      type: constants3.SEARCH,
      index,
      offset: 0,
      limit,
      results: resultItems.length,
      totalResults: resultItems.length,
      query: resultQuery,
      gifId: gifId.id,
    };
    obj.trackSelectGIF(obj);
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
  let obj = { onLayout: callback, style: null, children: null };
  const items11 = [tmp.container];
  let tmp31 = null;
  if (null != contentHorizontalPadding) {
    obj = { paddingHorizontal: contentHorizontalPadding };
    tmp31 = obj;
  }
  items11[1] = tmp31;
  obj.style = items11;
  const items12 = [
    c13(tmp3(obj[16]), {
      categoryType: first1,
      columnWidth,
      onQueryClear: callback1,
      onQueryChange: callback2,
      onFavoritesQueryChange: tmp16[1],
      searchInputRef: ref,
    }),
  ];
  if (resultItems.length <= 0) {
    if (!tmp10[0]) {
      if (first2.length <= 0) {
        obj1 = { columns, onSelectCategory: callback4, favoritesCategory: null, inActionSheet: null };
        let favoritesCategory;
        if (true !== bottomSheetRef.hideFavorites) {
          favoritesCategory = favoriteGIFsMobile.favoritesCategory;
        }
        obj1.favoritesCategory = favoritesCategory;
        obj1.inActionSheet = flag;
        items12[1] = tmp32(tmp3(obj[19]), obj1);
        obj.children = items12;
        return first1(closure_6, obj);
      }
    }
  }
  if (0 === resultItems.length) {
    if (!tmp12) {
      obj2 = { categoryType: first1, inActionSheet: flag };
      let tmp32Result = tmp32(tmp3(obj[17]), obj2);
    }
  }
  tmp3 = tmp3(obj[18]);
  obj = {
    columns,
    columnWidth,
    loading: tmp12,
    inActionSheet: flag,
    resultItems,
    onPressGIF: callback3,
    selectedGifSrc,
    keyboardDismissMode,
    ListFooterComponent: memo2,
  };
  tmp32Result = tmp32(tmp3, obj);
});
