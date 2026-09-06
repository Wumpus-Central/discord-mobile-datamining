// discord_app/modules/search/native/components/tabs/pages/RecentScreen.tsx
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../../../design/void/Pressables/native/Pressables.tsx";
import closure_3 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import closure_6 from "../../../../SearchMessageStore.tsx";
import closure_7 from "../../../stores/SearchGuildChannelTabStore.tsx";
import closure_8 from "../../../stores/SearchHistoryStore.tsx";
import closure_9 from "../../../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import { EMPTY_MEDIA_RESULTS } from "../../../SearchPlatformConstants.tsx";
import { SearchTypes } from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function ClearAllHistory(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = {
    onPress() {
      return closure_1_1(closure_1_2[12]).clearSearchHistory(searchContext);
    },
    accessibilityRole: "button",
    unstable_pressDelay: 130,
    accessibilityLabel: null,
    children: null,
  };
  const intl = searchContext(1114).intl;
  obj[3] = intl.string(searchContext(1114).t.LFTAUp);
  obj = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl2 = searchContext(1114).intl;
  obj[2] = intl2.string(searchContext(1114).t.LFTAUp);
  obj[4] = jsx(searchContext(4556).Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
  return jsx(searchContext(5123).PressableHighlight, {
    variant: "text-sm/semibold",
    color: "text-brand",
    children: null,
  });
}
function ViewAll(onJumpToMedia) {
  let obj = {
    onPress: onJumpToMedia.onJumpToMedia,
    accessibilityRole: "button",
    unstable_pressDelay: 130,
    accessibilityLabel: null,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.Ofpgwh);
  obj = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.Ofpgwh);
  obj[4] = jsx(Text.Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
  return jsx(PressableBase.PressableHighlight, { variant: "text-sm/semibold", color: "text-brand", children: null });
}
let c5 = importAllResult;
({
  EMPTY_SEARCH_QUERY_STRING: c10,
  MESSAGE_PLACEHOLDER_ITEM_SIZE: unpackModuleId,
  SearchListItemTypes: closure_12,
  SearchTabs: map1,
} = MessageEmbedTypes);
let closure_19 = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let searchContextId = searchContext;
  const onJumpToMedia = searchContext.onJumpToMedia;
  importDefault = onJumpToMedia;
  const suggestedData = searchContext.suggestedData;
  let messages;
  let isLoadingMediaGrid;
  let isInitialSearchQuery;
  c6 = undefined;
  closure_7 = undefined;
  let memo;
  let onPressMediaItem;
  let callback;
  let fullscreenPlaceholderCount;
  let obj = searchContextId(suggestedData[20]);
  let items = [onPressMediaItem, c6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = searchContextId(suggestedData[19]);
    const searchTabFetchId = obj.getSearchTabFetchId(
      searchContextId,
      closure_1_13.MEDIA,
      onPressMediaItem.getSearchResultsQuery(searchContextId),
    );
    obj = {
      messages: _undefined2.getMessages(searchTabFetchId),
      isLoadingMediaGrid: !_undefined2.getIsInitialFetchComplete(searchTabFetchId),
      isInitialSearchQuery: onPressMediaItem.isInitialSearchQuery(searchContextId),
    };
    return obj;
  });
  messages = stateFromStoresObject.messages;
  isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
  isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
  searchContextId = searchContextId(suggestedData[19]).getSearchContextId(searchContext);
  importDefault = undefined;
  let obj2 = searchContextId(suggestedData[19]);
  [tmp4, c1] = messages(
    isInitialSearchQuery.useState(() => memo.getSearchHistory(searchContextId)),
    2,
  );
  let tmp3 = messages(
    isInitialSearchQuery.useState(() => memo.getSearchHistory(searchContextId)),
    2,
  );
  let items1 = [searchContextId];
  const focusEffect = searchContextId(suggestedData[21]).useFocusEffect(
    isInitialSearchQuery.useCallback(() => {
      function handleChange() {
        callback(closure_1_8.getSearchHistory(handleChange));
      }
      _undefined(memo.getSearchHistory(handleChange));
      let result = memo.addReactChangeListener(handleChange);
      return () => {
        const result = memo.removeReactChangeListener(handleChange);
      };
    }, items1),
  );
  c6 = tmp4;
  let tmp6 = importDefault(suggestedData[22])(searchContext.width);
  closure_7 = tmp6;
  const items2 = [messages, searchContext];
  memo = isInitialSearchQuery.useMemo(() => {
    if (null != messages) {
      if (0 !== arr.length) {
        const items = [];
        const obj2 = arr[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp4 = searchContextId;
          let tmp5 = suggestedData;
          let obj = searchContextId(suggestedData[23]);
          let tmp6 = items;
          let items1 = [tmp2];
          let media = obj.getMedia(items, items1);
          let item = media.forEach((arg0) => items.push(arg0));
          if (items.length >= 9) {
            let tmp8 = obj2;
            obj2.return();
            break;
          }
          return items;
        }
      }
    }
    return closure_1_14;
  }, items2);
  let obj3 = searchContextId(suggestedData[21]);
  onPressMediaItem = searchContextId(suggestedData[16]).useOnPressMediaItem({ searchContext, allMediaResults: memo });
  const items3 = [messages, onPressMediaItem];
  callback = isInitialSearchQuery.useCallback((media) => {
    media = media.media;
    let found;
    if (messages != null) {
      found = messages.find((id) => id.id === media.messageId);
    }
    let obj = searchContextId(suggestedData[24]);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: null };
      obj[0] = searchContextId(tmp3[26]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
      const result = _undefined(tmp3[25]).showAgeVerificationGetStartedModal(obj);
      const obj2 = _undefined(tmp3[25]);
    } else {
      onPressMediaItem(media, media.originView);
    }
  }, items3);
  let obj4 = searchContextId(suggestedData[16]);
  obj = { placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 };
  fullscreenPlaceholderCount = searchContextId(suggestedData[27]).useFullscreenPlaceholderCount(obj);
  const items4 = [
    callback,
    isInitialSearchQuery,
    memo,
    tmp6,
    onJumpToMedia,
    fullscreenPlaceholderCount,
    searchContext,
    tmp4,
    suggestedData,
  ];
  const items5 = [isLoadingMediaGrid, tmp6];
  const data = isInitialSearchQuery.useMemo(() => {
    const items = [];
    if (!isInitialSearchQuery) {
      if (0 === items.length) {
        let num3 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = { type: null, key: null };
            let tmp3 = closure_1_12;
            obj[0] = closure_1_12.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj[1] = "message-placeholder-" + num3;
            let arr = items.push(obj);
            num3 = num3 + 1;
            let tmp5 = fullscreenPlaceholderCount;
          } while (num3 < fullscreenPlaceholderCount);
        }
        return items;
      }
    }
    let arr1 = _undefined2;
    if (_undefined2.length > 0) {
      obj = { type: null, props: null };
      obj[0] = closure_1_12.SECTION;
      obj = { title: null, trailing: null };
      const intl = searchContextId(suggestedData[13]).intl;
      obj[0] = intl.string(searchContextId(suggestedData[13]).t.ZZpBr4);
      obj1 = { searchContext: null };
      obj1[0] = items;
      obj[1] = closure_1_16(closure_1_17, obj1);
      obj[1] = obj;
      items.push(obj);
      const item = arr1.forEach((searchHistoryItem) => {
        obj = { type: closure_2_12.SEARCH_HISTORY_ITEM, props: obj };
        obj = { searchHistoryItem, searchContext: items };
        items.push(obj);
      });
    }
    let arr2 = suggestedData;
    if (suggestedData != null) {
      const item1 = arr2.forEach((arg0) => items.push(arg0));
    }
    if (memo.length > 0) {
      const obj2 = { type: null, props: null };
      obj2[0] = closure_1_12.SECTION;
      const obj3 = { title: null, trailing: null };
      const intl2 = searchContextId(suggestedData[13]).intl;
      obj3[0] = intl2.string(searchContextId(suggestedData[13]).t.LBYpDH);
      const obj4 = { onJumpToMedia: null };
      obj4[0] = c1;
      obj3[1] = closure_1_16(closure_1_18, obj4);
      obj2[1] = obj3;
      arr1 = items.push(obj2);
      const obj5 = { type: null, props: null };
      obj5[0] = closure_1_12.MEDIA_GRID;
      const obj6 = { media: null, mediaSize: null, onPress: null, animate: true };
      obj6[0] = memo.slice(0, 9);
      obj6[1] = closure_7;
      obj6[2] = callback;
      obj5[1] = obj6;
      arr2 = items.push(obj5);
    }
    return items;
  }, items4);
  const ListFooterComponent = isInitialSearchQuery.useMemo(() => {
    let fn = null;
    if (isLoadingMediaGrid) {
      fn = () =>
        closure_1_16(closure_1_0(closure_1_2[28]).RecentsMediaGridPlaceholder, {
          numRows: 3,
          visible: true,
          size: closure_7,
        });
    }
    return fn;
  }, items5);
  return jsx(importDefault(suggestedData[29]), { data, ListFooterComponent });
});
let closure_20 = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let _require = searchContext;
  importDefault = undefined;
  let onPressDMItem;
  let callback;
  let obj = {
    query: closure_10,
    withGuildMembers: false,
    withAffinitySuggestions: true,
    affinitySuggestionsLimit: 3,
    withFriends: false,
    withFriendSuggestions: false,
    withFriendRequests: false,
    withFriendRequestsIncoming: false,
    withFriendRequestsOutgoing: false,
    excludeCurrentUser: true,
  };
  let tmp = importDefault(onPressDMItem[15])(obj);
  importDefault = tmp;
  onPressDMItem = _require(onPressDMItem[16]).useOnPressDMItem({ searchContext });
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              callback = tmp2;
              callback = undefined;
              let obj3 = callback(onPressDMItem[17]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.getOrEnsurePrivateChannel(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback = arg1;
            obj = callback(onPressDMItem[18]);
            obj3 = { searchContext: null, channelId: null };
            obj3[0] = closure_0;
            obj3[1] = callback;
            const result = obj.trackSuggestedSearchClicked(obj3);
            closure_1_2(closure_0, callback);
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
  callback = importAllResult.useCallback(function () {
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
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (0 !== length.length) {
      let item = length.forEach((arg0) => {
        ({ title, items } = arg0);
        let tmp = 0 !== items.length;
        if (tmp) {
          tmp = null != title;
        }
        if (tmp) {
          let obj = { type: null, props: null };
          obj[0] = closure_2_12.SECTION;
          obj = { title: null };
          obj[0] = title;
          obj[1] = obj;
          items.push(obj);
          const item = items.forEach((user) => {
            obj = { type: closure_2_12.DM, props: obj };
            obj = { user: user.user, onPress: closure_1_3 };
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
let closure_21 = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let searchContextId;
  let stateFromStores;
  let onPressGuildTextChannel;
  let memo;
  let callback;
  let obj = searchContext(stateFromStores[19]);
  searchContextId = obj.getSearchContextId(searchContext);
  let items = [closure_7];
  stateFromStores = searchContext(stateFromStores[20]).useStateFromStores(items, () =>
    closure_1_7.getTextChannels(closure_1),
  );
  const obj2 = searchContext(stateFromStores[20]);
  onPressGuildTextChannel = searchContext(stateFromStores[16]).useOnPressGuildTextChannel({ searchContext });
  const items1 = [stateFromStores];
  memo = callback.useMemo(() => stateFromStores.slice(0, 3), items1);
  const items2 = [onPressGuildTextChannel, searchContext];
  callback = callback.useCallback((channelId) => {
    let obj = callback(stateFromStores[18]);
    obj = { searchContext, channelId };
    const result = obj.trackSuggestedSearchClicked(obj);
    onPressGuildTextChannel(channelId);
  }, items2);
  const items3 = [callback, memo];
  obj = {};
  const memo1 = callback.useMemo(() => {
    const items = [];
    if (0 !== memo.length) {
      let obj = { type: null, props: null };
      obj[0] = closure_1_12.SECTION;
      obj = { title: null };
      const intl = searchContext(stateFromStores[13]).intl;
      obj[0] = intl.string(searchContext(stateFromStores[13]).t.HbJ7eD);
      obj[1] = obj;
      items.push(obj);
      const item = memo.forEach((channel) => {
        obj = { type: closure_2_12.GUILD_TEXT_CHANNEL, props: obj };
        obj = { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress: closure_1_5 };
        items.push(obj);
      });
    }
    return items;
  }, items3);
  const merged = Object.assign(searchContext);
  obj.suggestedData = memo1;
  return <closure_19 />;
});
const memoResult = importAllResult.memo(function RecentScreenContainer(arg0) {
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    let obj = { searchContext: null, onJumpToMedia: null, width: null };
    obj[0] = searchContext;
    obj[1] = onJumpToMedia;
    obj[2] = width;
    return <closure_20 searchContext={null} onJumpToMedia={null} width={null} />;
  } else if (tmp.GUILD === type) {
    obj = { searchContext: null, onJumpToMedia: null, width: null };
    obj[0] = searchContext;
    obj[1] = onJumpToMedia;
    obj[2] = width;
    return <closure_21 searchContext={null} onJumpToMedia={null} width={null} />;
  } else {
    if (tmp.GUILD_CHANNEL !== type) {
      if (tmp.CHANNEL !== type) {
        return null;
      }
    }
    obj = { searchContext: null, onJumpToMedia: null, width: null };
    obj[0] = searchContext;
    obj[1] = onJumpToMedia;
    obj[2] = width;
    return <closure_19 searchContext={null} onJumpToMedia={null} width={null} />;
  }
});
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default memoResult;
