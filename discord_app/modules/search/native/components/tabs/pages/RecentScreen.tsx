// === Module 16640: RecentScreen ===

// Module 16640 (RecentScreen)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12338 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12361 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14821 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 12363 */;
import SearchHistoryStore from "SearchHistoryStore" /* 16641 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

require = fn;
function ClearAllHistory(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = {
    onPress() {
      return SearchPlatformActionCreatorsDefault.clearSearchHistory(searchContext);
    },
    accessibilityRole: "button",
    unstable_pressDelay: 130,
    accessibilityLabel: null,
    children: null
  };
  const intl = searchContext(1114).intl;
  obj.accessibilityLabel = intl.string(searchContext(1114).t.LFTAUp);
  obj = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl2 = searchContext(1114).intl;
  obj.children = intl2.string(searchContext(1114).t.LFTAUp);
  obj.children = jsx(searchContext(4556).Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
  return jsx(searchContext(5123).PressableHighlight, { variant: "text-sm/semibold", color: "text-brand", children: null });
}
function ViewAll(onJumpToMedia) {
  let obj = { onPress: onJumpToMedia.onJumpToMedia, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.Ofpgwh);
  obj = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.Ofpgwh);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
  return jsx(Pressables.PressableHighlight, { variant: "text-sm/semibold", color: "text-brand", children: null });
}
const SearchConstants = fn(7878);
({ EMPTY_SEARCH_QUERY_STRING: c10, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_11, SearchListItemTypes: closure_12, SearchTabs: map1 } = SearchConstants);
const EMPTY_MEDIA_RESULTS = fn(12353).EMPTY_MEDIA_RESULTS;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
let closure_19 = noop.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  const onJumpToMedia = searchContext.onJumpToMedia;
  const suggestedData = searchContext.suggestedData;
  c6 = undefined;
  let onPressMediaItem;
  let fullscreenPlaceholderCount;
  let obj = searchContext(suggestedData[20]);
  let items = [onPressMediaItem, c6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, constants2.MEDIA, SearchQueryStore.getSearchResultsQuery(searchContext));
    obj = { messages: SearchMessageStore.getMessages(searchTabFetchId), isLoadingMediaGrid: !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId), isInitialSearchQuery: SearchQueryStore.isInitialSearchQuery(searchContext) };
    return obj;
  });
  const messages = stateFromStoresObject.messages;
  const isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
  const isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
  const searchContextId = searchContext(suggestedData[19]).getSearchContextId(searchContext);
  closure_129_0 = searchContextId;
  closure_129_1 = undefined;
  let obj2 = searchContext(suggestedData[19]);
  [tmp4, closure_129_1] = messages(isInitialSearchQuery.useState(() => SearchHistoryStore.getSearchHistory(searchContext)), 2);
  let tmp3 = messages(isInitialSearchQuery.useState(() => SearchHistoryStore.getSearchHistory(searchContext)), 2);
  let items1 = [searchContextId];
  const focusEffect = searchContext(suggestedData[21]).useFocusEffect(isInitialSearchQuery.useCallback(() => {
    function handleChange() {
      onJumpToMedia(memo.getSearchHistory(handleChange));
    }
    onJumpToMedia(memo.getSearchHistory(handleChange));
    let result = memo.addReactChangeListener(handleChange);
    return () => {
      const result = SearchHistoryStore.removeReactChangeListener(handleChange);
    };
  }, items1));
  c6 = tmp4;
  let tmp6 = onJumpToMedia(suggestedData[22])(searchContext.width);
  const mediaSize = tmp6;
  const items2 = [messages, searchContext];
  const memo = isInitialSearchQuery.useMemo(() => {
    if (null != messages) {
      if (0 !== arr.length) {
        const items = [];
        const obj2 = arr[Symbol.iterator]();
        while (obj2 !== undefined) {
          let obj = SearchPlatformUtils;
          let items1 = [tmp2];
          let media = obj.getMedia(searchContext, items1);
          let item = media.forEach((item) => items.push(item));
          if (items.length >= 9) {
            obj2.return();
            break;
          }
          return items;
        }
      }
    }
    return EMPTY_MEDIA_RESULTS;
  }, items2);
  let obj3 = searchContext(suggestedData[21]);
  onPressMediaItem = searchContext(suggestedData[16]).useOnPressMediaItem({ searchContext, allMediaResults: memo });
  const items3 = [messages, onPressMediaItem];
  const onPress = isInitialSearchQuery.useCallback((media) => {
    media = media.media;
    let found;
    if (messages != null) {
      found = messages.find((id) => id.id === media.messageId);
    }
    let obj = ExplicitMediaRedactionNativeUtils;
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
    } else {
      onPressMediaItem(media, media.originView);
    }
  }, items3);
  const obj4 = searchContext(suggestedData[16]);
  obj = { placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 };
  fullscreenPlaceholderCount = searchContext(suggestedData[27]).useFullscreenPlaceholderCount(obj);
  const items4 = [onPress, isInitialSearchQuery, memo, tmp6, onJumpToMedia, fullscreenPlaceholderCount, searchContext, tmp4, suggestedData];
  const items5 = [isLoadingMediaGrid, tmp6];
  const data = isInitialSearchQuery.useMemo(() => {
    const items = [];
    if (!isInitialSearchQuery) {
      if (0 === items.length) {
        let num3 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = { type: null, key: null };
            obj.type = constants.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num3;
            let arr = items.push(obj);
            num3 = num3 + 1;
          } while (num3 < fullscreenPlaceholderCount);
        }
        return items;
      }
    }
    let arr1 = _undefined;
    if (_undefined.length > 0) {
      let element = { type: constants.SECTION, props: null };
      obj = { title: null, trailing: null };
      const intl = searchContext(suggestedData[13]).intl;
      obj.title = intl.string(searchContext(suggestedData[13]).t.ZZpBr4);
      obj = { searchContext: items };
      obj.trailing = <ClearAllHistory searchContext={items} />;
      element.props = obj;
      items.push(element);
      const item = arr1.forEach((searchHistoryItem) => {
        const element = { type: constants.SEARCH_HISTORY_ITEM, props: { searchHistoryItem, searchContext } };
        items.push(element);
      });
    }
    let arr2 = suggestedData;
    if (suggestedData != null) {
      const item1 = arr2.forEach((item) => items.push(item));
    }
    if (memo.length > 0) {
      const element1 = { type: constants.SECTION, props: null };
      const obj1 = { title: null, trailing: null };
      const intl2 = searchContext(suggestedData[13]).intl;
      obj1.title = intl2.string(searchContext(suggestedData[13]).t.LBYpDH);
      const obj2 = { onJumpToMedia };
      obj1.trailing = <ViewAll onJumpToMedia={onJumpToMedia} />;
      element1.props = obj1;
      arr1 = items.push(element1);
      const element2 = { type: constants.MEDIA_GRID, props: null };
      const obj3 = { media: memo.slice(0, 9), mediaSize, onPress, animate: true };
      element2.props = obj3;
      arr2 = items.push(element2);
    }
    return items;
  }, items4);
  const ListFooterComponent = isInitialSearchQuery.useMemo(() => {
    let fn = null;
    if (isLoadingMediaGrid) {
      fn = () => jsx(searchContext(suggestedData[28]).RecentsMediaGridPlaceholder, { numRows: 3, visible: true, size });
    }
    return fn;
  }, items5);
  return jsx(onJumpToMedia(suggestedData[29]), { data, ListFooterComponent });
});
let closure_20 = noop.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  importDefault = undefined;
  let onPressDMItem;
  let obj = { query, withGuildMembers: false, withAffinitySuggestions: true, affinitySuggestionsLimit: 3, withFriends: false, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
  let tmp = require("useUserListData")(obj);
  importDefault = tmp;
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem({ searchContext });
  _require = asyncGeneratorStep(async (searchContext) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = searchContext;
              closure_129_1 = undefined;
              let obj3 = tmp2(onPressDMItem[17]);
              c3 = 1;
              c4 = 1;
              const obj1 = { value: obj3.getOrEnsurePrivateChannel(searchContext), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_1 = value;
            obj = tmp2(onPressDMItem[18]);
            obj3 = { searchContext, channelId: closure_129_1 };
            const result = obj.trackSuggestedSearchClicked(obj3);
            tmp5(closure_129_0, closure_129_1);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  let items = [onPressDMItem, searchContext];
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [callback, tmp];
  obj = {};
  const memo = noop.useMemo(() => {
    const items = [];
    if (0 !== length.length) {
      let item = length.forEach((item) => {
        ({ title, items } = item);
        let tmp = 0 !== items.length;
        if (tmp) {
          tmp = null != title;
        }
        if (tmp) {
          let element = { type: constants.SECTION, props: null };
          const obj = { title };
          element.props = obj;
          items.push(element);
          item = items.forEach((user) => {
            const element = { type: constants.DM, props: { user: user.user, onPress } };
            items.push(element);
          });
        }
      });
    }
    return items;
  }, items1);
  const merged = Object.assign(searchContext);
  obj.suggestedData = memo;
  return <closure_19 />;
});
let closure_21 = noop.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let onPress;
  let obj = searchContext(stateFromStores[19]);
  const searchContextId = obj.getSearchContextId(searchContext);
  let items = [SearchGuildChannelTabStore];
  stateFromStores = searchContext(stateFromStores[20]).useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
  const obj2 = searchContext(stateFromStores[20]);
  const onPressGuildTextChannel = searchContext(stateFromStores[16]).useOnPressGuildTextChannel({ searchContext });
  const items1 = [stateFromStores];
  const memo = onPress.useMemo(() => stateFromStores.slice(0, 3), items1);
  const items2 = [onPressGuildTextChannel, searchContext];
  onPress = onPress.useCallback((channelId) => {
    const obj = { searchContext, channelId };
    const result = obj.trackSuggestedSearchClicked(obj);
    onPressGuildTextChannel(channelId);
  }, items2);
  const items3 = [onPress, memo];
  obj = {};
  const memo1 = onPress.useMemo(() => {
    const items = [];
    if (0 !== memo.length) {
      let element = { type: constants.SECTION, props: null };
      const obj = { title: null };
      const intl = searchContext(stateFromStores[13]).intl;
      obj.title = intl.string(searchContext(stateFromStores[13]).t.HbJ7eD);
      element.props = obj;
      items.push(element);
      const item = memo.forEach((channel) => {
        const element = { type: constants.GUILD_TEXT_CHANNEL, props: { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress } };
        items.push(element);
      });
    }
    return items;
  }, items3);
  const merged = Object.assign(searchContext);
  obj.suggestedData = memo1;
  return <closure_19 />;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default noop.memo(function RecentScreenContainer(arg0) {
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    let obj = { searchContext, onJumpToMedia, width };
    return <closure_20 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else if (tmp.GUILD === type) {
    obj = { searchContext, onJumpToMedia, width };
    return <closure_21 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else {
    if (tmp.GUILD_CHANNEL !== type) {
      if (tmp.CHANNEL !== type) {
        return null;
      }
    }
    obj = { searchContext, onJumpToMedia, width };
    return <closure_19 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  }
});