// discord_app/modules/search/native/components/tabs/pages/messages/MediaScreen.tsx
import importAllResult from "BaseMessagesScreen";
import handleReaction from "handleReaction";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { EMPTY_MEDIA_RESULTS } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import { MEDIA_MODAL_KEY } from "ME";
import { jsx } from "MessageVerticalSeparator";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ SearchListItemTypes: closure_6, MEDIA_NUM_COLUMNS: error, MEDIA_ITEM_GAP_WIDTH: metroImportAll, SearchMediaTypes: c9 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function MediaScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let dependencyMap;
  let searchMessages;
  let placeholderCount;
  let memo;
  let onPressMediaItem;
  let callback1;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(15685);
  const contentContainerStyles = obj.useContentContainerStyles();
  const tmp2 = tab(15645)(width);
  dependencyMap = tmp2;
  searchMessages = searchContext(15690).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(15690);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns: callback1 };
  const searchMessagesLoadingState = searchContext(15691).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [searchMessages, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = searchContext(_undefined[11]).getMedia(searchContext, tmp);
      const obj = searchContext(_undefined[11]);
    } else {
      media = outer1_10;
    }
    return media;
  }, items);
  const items1 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = tab(_undefined[11]).fetchNextMessages(searchContext, tab, () => {
      let obj = outer1_0(outer1_2[12]);
      if (obj.isModalOpen(outer1_11)) {
        let tmpResult = tmp(tmp2[13]);
        const messages = outer1_4.getMessages(tmpResult.getSearchTabFetchId(items, closure_1, outer1_5.getSearchResultsQuery(items)));
        if (null != messages) {
          tmpResult = tmp(tmp2[11]);
          const media = tmpResult.getMedia(tmp4, messages);
          items = [];
          const item = media.forEach((type) => {
            if (!tmp2) {
              items.push(type.sources);
            }
          });
          obj = { sources: null };
          obj[0] = items;
          const result = tmp(tmp2[14]).setMediaViewerSources(obj);
          const tmpResult1 = tmp(tmp2[14]);
        }
        const searchResultsQuery = outer1_5.getSearchResultsQuery(items);
        tmp4 = items;
      }
    });
  }, items1);
  let obj3 = searchContext(15691);
  onPressMediaItem = searchContext(15642).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items2 = [onPressMediaItem, searchContext, searchMessages];
  callback1 = searchMessages.useCallback((media) => {
    media = media.media;
    let found;
    if (searchMessages != null) {
      found = searchMessages.find((id) => id.id === media.messageId);
    }
    let obj = searchContext(_undefined[16]);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: null };
      obj[0] = tmp2(tmp3[18]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
      const result = tab(tmp3[17]).showAgeVerificationGetStartedModal(obj);
      const obj4 = tab(tmp3[17]);
    } else {
      obj = { searchContext: null, channelId: null, messageId: null, index: null };
      obj[0] = media;
      ({ channelId: obj3[1], messageId: obj3[2] } = media);
      obj[3] = arg1;
      const result1 = tmp2(tmp3[19]).trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const tmp2Result = tmp2(tmp3[19]);
    }
  }, items2);
  const items3 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    let items = [];
    const item = memo.forEach((media, itemIndex) => {
      const items = itemIndex;
      let obj = { type: onPressMediaItem.MEDIA, props: null };
      obj = {
        media,
        size: outer1_2,
        onPress(arg0) {
          return outer1_7(arg0, closure_0);
        },
        containerStyle: null
      };
      obj = { itemIndex, numItems: outer1_5.length, numColumns: callback1, spacing: outer2_8 - 2 };
      obj[3] = searchContext(table[11]).getMediaGridItemStyles(obj);
      obj[1] = obj;
      items.push(obj);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns: null, numResults: null, placeholderCount: null };
      obj[0] = callback1;
      obj[1] = items.length;
      obj[2] = tmp2;
      const adjustedPlaceholderCount = searchContext(_undefined[20]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = { type: null, key: null, props: null };
        let tmp3 = onPressMediaItem;
        obj[0] = onPressMediaItem.MEDIA_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "media-placeholder-" + length + num;
        obj = { size: null, containerStyle: null };
        let tmp4 = _undefined;
        obj[0] = _undefined;
        let tmp5 = searchContext;
        let tmp6 = _undefined;
        let obj3 = searchContext(_undefined[11]);
        let obj1 = { itemIndex: null, numItems: null, numColumns: null, spacing: null };
        obj1[0] = length + num;
        let tmp7 = memo;
        obj1[1] = memo.length;
        let tmp8 = callback1;
        obj1[2] = callback1;
        let tmp9 = outer1_8;
        obj1[3] = outer1_8 - 2;
        obj[1] = obj3.getMediaGridItemStyles(obj1);
        obj[2] = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(_undefined[20]);
    }
    return items;
  }, items3);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  let obj5 = searchContext(15642);
  obj[5] = searchContext(15649).MediaVerticalSeparator;
  obj[6] = callback1;
  obj[7] = isFirstPageLoading;
  obj[8] = isNextPageLoading;
  return jsx(tab(15692), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
let result = require("prototype").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;