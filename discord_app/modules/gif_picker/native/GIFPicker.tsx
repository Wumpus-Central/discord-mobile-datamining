// === Module 9754: ? ===

// Module 9754
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_9774";
import { View } from "module_9769";
import getFormatFromUrl from "getFormatFromUrl";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c5 = importAllResult;
({ AnalyticEvents: metroImportAll, ChatInputComponentViewedTypes: c9, GIF_FETCH_LIMIT_IOS: c10, GIFPickerResultTypes: unpackModuleId, TooltipNames: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles({ container: { flex: 1 } });
const memoResult = importAllResult.memo(function GIFPicker(bottomSheetRef) {
  let c13;
  let columnWidth;
  let columns;
  let keyboardDismissMode;
  let selectedGifSrc;
  let tmp12;
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
  let c6;
  let first;
  let closure_8;
  let ref;
  let closure_10;
  let constants;
  let closure_12;
  let callback;
  let first1;
  let callback2;
  let first2;
  let c17;
  let memo1;
  let favorites;
  let closure_20;
  let resultItems;
  let resultQuery;
  callback2 = undefined;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  const effect = onPressGIF.useEffect(() => {
    let obj = guildId(initialQuery[7]);
    obj.initializeSearch();
    guildId(initialQuery[7]).resetSearch();
    if (null != channelId) {
      obj = { type: null, channel_id: null, guild_id: null };
      obj[0] = ref.GIF;
      obj[1] = tmp4;
      obj[2] = guildId;
      channelId(initialQuery[8]).track(lib.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj3 = channelId(initialQuery[8]);
    }
  }, items);
  let tmp3 = channelId;
  let obj = initialQuery;
  const tmp4 = channelId(initialQuery[9])();
  c6 = tmp4;
  const tmp5 = contentHorizontalPadding(onPressGIF.useState(0), 2);
  first = tmp5[0];
  closure_8 = tmp5[1];
  const items1 = [tmp4, first, contentHorizontalPadding];
  callback = onPressGIF.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = onPressGIF.useMemo(() => {
    let num = 2;
    if (c6) {
      num = 3;
    }
    const obj = { columns: num, columnWidth: null };
    let num2 = contentHorizontalPadding;
    if (contentHorizontalPadding == null) {
      num2 = 0;
    }
    const diff = first - 2 * num2;
    const sum = diff + bottomSheetRef(initialQuery[10]).GIF_PICKER_GUTTER_SPACING;
    obj[1] = Math.max(0, sum / num - bottomSheetRef(initialQuery[10]).GIF_PICKER_GUTTER_SPACING);
    return obj;
  }, items1);
  ({ columns, columnWidth } = memo);
  ref = onPressGIF.useRef(null);
  const tmp10 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  closure_10 = tmp10[1];
  constants = onPressGIF.useRef("");
  closure_12 = onPressGIF.useRef(false);
  const tmp = callback2();
  [tmp12, c13] = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp14 = contentHorizontalPadding(onPressGIF.useState(constants.SEARCH), 2);
  first1 = tmp14[0];
  callback2 = tmp14[1];
  const tmp16 = contentHorizontalPadding(onPressGIF.useState(""), 2);
  first2 = tmp16[0];
  c17 = tmp17;
  const items2 = [ref];
  const callback1 = onPressGIF.useCallback(() => {
    callback(false);
    callback2(closure_11.SEARCH);
    _undefined2("");
    guildId(initialQuery[7]).resetSearch();
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }, items2);
  memo1 = onPressGIF.useMemo(() => bottomSheetRef(initialQuery[11]).debounce(guildId(initialQuery[7]).search, 200), []);
  let obj1 = bottomSheetRef(initialQuery[10]);
  const favoriteGIFsMobile = obj1.useFavoriteGIFsMobile();
  favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first2];
  closure_20 = onPressGIF.useMemo(() => bottomSheetRef(initialQuery[12]).filterFavoriteGIFsByQuery(favorites, first2), items3);
  let obj2 = bottomSheetRef(initialQuery[13]);
  const items4 = [first];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => {
    if (first1 !== closure_11.FAVORITES) {
      let resultItems = first.getResultItems();
    } else {
      resultItems = closure_20;
    }
    return { resultItems, resultQuery: first.getResultQuery() };
  });
  resultItems = stateFromStoresObject.resultItems;
  resultQuery = stateFromStoresObject.resultQuery;
  const items5 = [memo1, ref, resultQuery];
  callback2 = onPressGIF.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (closure_11.current !== current) {
      closure_11.current = current;
      callback2(closure_11.SEARCH);
      const tmp21 = current.trim().length > 0;
      let tmp2 = tmp21;
      if (tmp2) {
        tmp2 = resultQuery !== current;
      }
      c13(tmp2);
      callback(tmp21);
      if (flag) {
        let search = memo1;
      } else {
        search = guildId(initialQuery[7]).search;
      }
      let SEARCH = null;
      if ("" !== current) {
        SEARCH = tmp19.SEARCH;
      }
      search(current, SEARCH, !flag, callback);
      if (!flag) {
        current = ref.current;
        if (current != null) {
          current.setText(current);
        }
      }
      tmp19 = closure_11;
      const tmp22 = c13;
    }
  }, items5);
  const items6 = [callback2, initialQuery];
  const effect1 = onPressGIF.useEffect(() => {
    if (!ref.current) {
      let tmp3 = null != initialQuery;
      if (tmp3) {
        tmp3 = str.trim().length > 0;
      }
      if (tmp3) {
        tmp.current = true;
        callback2(str, false);
      }
    }
  }, items6);
  const effect2 = onPressGIF.useEffect(() => {
    channelId(initialQuery[14]).acknowledgeTooltip(ref.GIF_PICKER_TOOLTIP);
    const obj = channelId(initialQuery[14]);
    const trendingSearchTerms = guildId(initialQuery[7]).fetchTrendingSearchTerms();
  }, []);
  const items7 = [resultQuery, ref];
  const effect3 = onPressGIF.useEffect(() => {
    if ("" !== resultQuery) {
      const suggestions = guildId(initialQuery[7]).fetchSuggestions(tmp);
      const obj = guildId(initialQuery[7]);
    }
    const current = ref.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    c13(resultQuery !== text);
  }, items7);
  const items8 = [callback2];
  const items9 = [onPressGIF, resultItems.length, resultQuery];
  const memo2 = onPressGIF.useMemo(() => _undefined(channelId(initialQuery[15]), {
    onClickSuggestion(arg0) {
      return callback(arg0, false);
    }
  }), items8);
  const items10 = [bottomSheetRef, callback2];
  const callback3 = onPressGIF.useCallback((gifId, index) => {
    let obj = guildId(initialQuery[7]);
    obj = { type: closure_11.SEARCH, index, offset: 0, limit: closure_10, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id };
    obj.trackSelectGIF(obj);
    onPressGIF(gifId);
  }, items9);
  const callback4 = onPressGIF.useCallback((arg0, arg1) => {
    if (arg0 === closure_11.TRENDING_GIFS) {
      callback(false);
      callback2(arg0);
      const trendingGIFs = guildId(initialQuery[7]).fetchTrendingGIFs(callback);
      const obj = guildId(initialQuery[7]);
    } else if (arg0 === tmp.FAVORITES) {
      callback(false);
      callback2(arg0);
    } else {
      callback2(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, items10);
  obj = { onLayout: callback, style: null, children: null };
  const items11 = [tmp.container, ];
  let tmp31 = null;
  if (null != contentHorizontalPadding) {
    obj = { paddingHorizontal: null };
    obj[0] = contentHorizontalPadding;
    tmp31 = obj;
  }
  items11[1] = tmp31;
  obj[1] = items11;
  const items12 = [callback(tmp3(obj[16]), { categoryType: first1, columnWidth, onQueryClear: callback1, onQueryChange: callback2, onFavoritesQueryChange: tmp16[1], searchInputRef: ref }), ];
  if (resultItems.length <= 0) {
    if (!tmp10[0]) {
      if (first2.length <= 0) {
        obj1 = { columns: null, onSelectCategory: null, favoritesCategory: null, inActionSheet: null };
        obj1[0] = columns;
        obj1[1] = callback4;
        let favoritesCategory;
        if (true !== bottomSheetRef.hideFavorites) {
          favoritesCategory = favoriteGIFsMobile.favoritesCategory;
        }
        obj1[2] = favoritesCategory;
        obj1[3] = flag;
        items12[1] = tmp32(tmp3(obj[19]), obj1);
        obj[2] = items12;
        return first1(c6, obj);
      }
    }
  }
  if (0 === resultItems.length) {
    if (!tmp12) {
      obj2 = { categoryType: null, inActionSheet: null };
      obj2[0] = first1;
      obj2[1] = flag;
      let tmp32Result = tmp32(tmp3(obj[17]), obj2);
    }
  }
  tmp3 = tmp3(obj[18]);
  obj = { columns, columnWidth, loading: tmp12, inActionSheet: flag, resultItems, onPressGIF: callback3, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 };
  tmp32Result = tmp32(tmp3, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default memoResult;