// discord_app/modules/search/native/components/tabs/pages/messages/MediaScreen.tsx
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../../spoiler_channels/ChannelSpoilerAgreeStore.tsx";
import ensureGuildLoaded from "../../../../../../../stores/ChannelStore.tsx";
import handleReaction from "../../../../../SearchMessageStore.tsx";
import prototype from "../../../../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../../../../SearchConstants.tsx";
import { EMPTY_MEDIA_RESULTS } from "../../../../SearchPlatformConstants.tsx";
import { MEDIA_MODAL_KEY } from "../../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let c3 = importAllResult;
({ SearchListItemTypes: closure_8, MEDIA_NUM_COLUMNS: c9, MEDIA_ITEM_GAP_WIDTH: c10, SearchMediaTypes: unpackModuleId } = MessageEmbedTypes);
let closure_15 = [];
const memoResult = importAllResult.memo(function MediaScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let placeholderCount;
  let memo;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(15909);
  const contentContainerStyles = obj.useContentContainerStyles();
  let tmp2 = tab(15869)(width);
  dependencyMap = tmp2;
  const searchMessages = searchContext(15914).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(15914);
  let items = [placeholderCount, memo];
  const items1 = [searchMessages];
  const stateFromStoresArray = searchContext(589).useStateFromStoresArray(items, () => {
    let found;
    if (searchMessages != null) {
      const mapped = searchMessages.map((item, index) => {
        channel = channel.getChannel(item.channel_id);
        let isSpoilerChannelResult;
        if (channel != null) {
          isSpoilerChannelResult = channel.isSpoilerChannel();
        }
        let id = null;
        if (isSpoilerChannelResult) {
          id = null;
          if (!closure_4.didAgree(channel.id)) {
            id = channel.id;
          }
        }
        return id;
      });
      found = mapped.filter((item, index) => null != item);
    }
    if (found == null) {
      found = closure_1_15;
    }
    return found;
  }, items1);
  let obj3 = searchContext(589);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns: closure_9 };
  const searchMessagesLoadingState = searchContext(15915).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items2 = [searchMessages, searchContext, stateFromStoresArray];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = searchContext(11509).getMedia(searchContext, tmp);
      const obj = searchContext(11509);
    } else {
      media = EMPTY_MEDIA_RESULTS;
    }
    return media;
  }, items2);
  const items3 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = tab(11509).fetchNextMessages(searchContext, tab, () => {
      let obj = searchContext(closure_1_2[15]);
      if (obj.isModalOpen(closure_1_13)) {
        let tmpResult = searchContext(closure_1_2[16]);
        const messages = onPressMediaItem.getMessages(tmpResult.getSearchTabFetchId(items, closure_1, callback1.getSearchResultsQuery(items)));
        if (null != messages) {
          tmpResult = searchContext(closure_1_2[14]);
          const media = tmpResult.getMedia(tmp4, messages);
          items = [];
          const item = media.forEach((item, index) => {
            if (!tmp2) {
              items.push(item.sources);
            }
            tmp2 = item.type !== closure_1_11.ATTACHMENT && item.type !== closure_1_11.EMBED && item.type !== closure_1_11.COMPONENT;
          });
          obj = { sources: null };
          obj[0] = items;
          const result = searchContext(closure_1_2[17]).setMediaViewerSources(obj);
          const tmpResult1 = searchContext(closure_1_2[17]);
        }
        const searchResultsQuery = callback1.getSearchResultsQuery(items);
        tmp4 = items;
      }
    });
  }, items3);
  let obj4 = searchContext(15915);
  const onPressMediaItem = searchContext(15866).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items4 = [onPressMediaItem, searchContext, searchMessages];
  const callback1 = searchMessages.useCallback((media) => {
    media = media.media;
    let found;
    if (searchMessages != null) {
      found = searchMessages.find((item, index) => item.id === media.messageId);
    }
    let obj = searchContext(14178);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: null };
      obj[0] = searchContext(5254).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
      const result = tab(5428).showAgeVerificationGetStartedModal(obj);
      const obj4 = tab(5428);
    } else {
      obj = { searchContext: null, channelId: null, messageId: null, index: null };
      obj[0] = media;
      ({ channelId: obj3[1], messageId: obj3[2] } = media);
      obj[3] = arg1;
      const result1 = searchContext(15916).trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const tmp2Result = searchContext(15916);
    }
  }, items4);
  const items5 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    let items = [];
    const item = memo.forEach((item, index) => {
      items = index;
      const obj = { itemIndex: index, numItems: memo.length, numColumns: closure_2_9, spacing: closure_2_10 - 2 };
      obj[3] = searchContext(table[14]).getMediaGridItemStyles(obj);
      obj[1] = obj;
      items.push(obj);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns: null, numResults: null, placeholderCount: null };
      obj[0] = closure_1_9;
      obj[1] = items.length;
      obj[2] = tmp2;
      const adjustedPlaceholderCount = searchContext(15920).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = { type: null, key: null, props: null };
        obj[0] = closure_1_8.MEDIA_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "media-placeholder-" + length + num;
        obj = { size: null, containerStyle: null };
        obj[0] = dependencyMap;
        let obj3 = searchContext(11509);
        obj1 = { itemIndex: null, numItems: null, numColumns: null, spacing: null };
        obj1[0] = length + num;
        obj1[1] = memo.length;
        obj1[2] = closure_1_9;
        obj1[3] = closure_1_10 - 2;
        obj[1] = obj3.getMediaGridItemStyles(obj1);
        obj[2] = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(15920);
    }
    return items;
  }, items5);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj6 = searchContext(15866);
  obj[5] = searchContext(15873).MediaVerticalSeparator;
  obj[6] = closure_9;
  obj[7] = isFirstPageLoading;
  obj[8] = isNextPageLoading;
  return jsx(tab(15916), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;