// === Module 16692: MediaScreen ===

// Module 16692 (MediaScreen)
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12338 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14821 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16695 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 7330 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
const SearchConstants = fn(7878);
({ SearchListItemTypes: closure_8, MEDIA_NUM_COLUMNS: closure_9, MEDIA_ITEM_GAP_WIDTH: c10, SearchMediaTypes: closure_11 } = SearchConstants);
const EMPTY_MEDIA_RESULTS = fn(12353).EMPTY_MEDIA_RESULTS;
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
let closure_15 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default noop.memo(function MediaScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let placeholderCount;
  let memo;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(16685);
  const contentContainerStyles = obj.useContentContainerStyles();
  let tmp2 = tab(16645)(width);
  dependencyMap = tmp2;
  const searchMessages = searchContext(16693).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(16693);
  let items = [placeholderCount, memo];
  const items1 = [searchMessages];
  const stateFromStoresArray = searchContext(504).useStateFromStoresArray(items, () => {
    let found;
    if (searchMessages != null) {
      const mapped = searchMessages.map((channel_id) => {
        channel = channel.getChannel(channel_id.channel_id);
        let isSpoilerChannelResult;
        if (channel != null) {
          isSpoilerChannelResult = channel.isSpoilerChannel();
        }
        let id = null;
        if (isSpoilerChannelResult) {
          id = null;
          if (!placeholderCount.didAgree(channel.id)) {
            id = channel.id;
          }
        }
        return id;
      });
      found = mapped.filter((item) => null != item);
    }
    if (found == null) {
      found = closure_15;
    }
    return found;
  }, items1);
  let obj3 = searchContext(504);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns };
  const searchMessagesLoadingState = searchContext(16694).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items2 = [searchMessages, searchContext, stateFromStoresArray];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = SearchPlatformUtils.getMedia(searchContext, tmp);
    } else {
      media = EMPTY_MEDIA_RESULTS;
    }
    return media;
  }, items2);
  const items3 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = SearchPlatformUtilsDefault.fetchNextMessages(searchContext, tab, () => {
      let obj = searchContext(dependencyMap[15]);
      if (obj.isModalOpen(MEDIA_MODAL_KEY)) {
        let tmpResult = searchContext(dependencyMap[16]);
        const messages = onPressMediaItem.getMessages(tmpResult.getSearchTabFetchId(closure_1_0, tab, callback1.getSearchResultsQuery(closure_1_0)));
        if (null != messages) {
          tmpResult = searchContext(dependencyMap[14]);
          const media = tmpResult.getMedia(closure_1_0, messages);
          const items = [];
          const item = media.forEach((type) => {
            if (!tmp2) {
              items.push(type.sources);
            }
            tmp2 = type.type !== constants.ATTACHMENT && type.type !== constants.EMBED && type.type !== constants.COMPONENT;
          });
          obj = { sources: items };
          const result = searchContext(dependencyMap[17]).setMediaViewerSources(obj);
          const tmpResult1 = searchContext(dependencyMap[17]);
        }
        const searchResultsQuery = callback1.getSearchResultsQuery(closure_1_0);
      }
    });
  }, items3);
  let obj4 = searchContext(16694);
  const onPressMediaItem = searchContext(16642).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items4 = [onPressMediaItem, searchContext, searchMessages];
  const callback1 = searchMessages.useCallback((media, index) => {
    media = media.media;
    let found;
    if (searchMessages != null) {
      found = searchMessages.find((id) => id.id === media.messageId);
    }
    let obj = ExplicitMediaRedactionNativeUtils;
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
    } else {
      obj = { searchContext, channelId: null, messageId: null, index: null };
      ({ channelId: obj3.channelId, messageId: obj3.messageId } = media);
      obj.index = index;
      const result1 = BaseMessagesScreen.trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const tmp2Result = BaseMessagesScreen;
    }
  }, items4);
  const items5 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    const items = [];
    const item = memo.forEach((media, itemIndex) => {
      closure_0 = itemIndex;
      const element = { type: constants.MEDIA, props: null };
      let obj = {
        media,
        size,
        onPress(arg0) {
          return callback1(arg0, closure_0);
        },
        containerStyle: null
      };
      obj = { itemIndex, numItems: memo.length, numColumns, spacing: closure_3_10 - 2 };
      obj.containerStyle = SearchPlatformUtils.getMediaGridItemStyles(obj);
      element.props = obj;
      items.push(element);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const adjustedPlaceholderCount = searchContext(size[23]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: constants.MEDIA_PLACEHOLDER, key: null, props: null };
        let _HermesInternal = HermesInternal;
        element.key = "media-placeholder-" + length + num;
        obj = { size, containerStyle: null };
        let obj3 = searchContext(size[14]);
        let obj1 = { itemIndex: length + num, numItems: memo.length, numColumns, spacing: closure_1_10 - 2 };
        obj.containerStyle = obj3.getMediaGridItemStyles(obj1);
        element.props = obj;
        let arr = items.push(element);
      }
      const obj5 = searchContext(size[23]);
    }
    return items;
  }, items5);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj6 = searchContext(16642);
  obj.ItemSeparatorComponent = searchContext(16649).MediaVerticalSeparator;
  obj.numColumns = numColumns;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(tab(16695), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});