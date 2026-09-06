// discord_app/modules/search/native/SearchPlatformUtils.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import MediaSourceUtil from "../../media_viewer/native/MediaSourceUtil.tsx";
import ClydeIcon from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import SearchUtils from "../SearchUtils.tsx";
import SearchActionCreatorsDefault from "../SearchActionCreators.tsx";
import search_tracking_TrackingDefault from "tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators.tsx";
import SearchMessageStore from "../SearchMessageStore.tsx";
import SearchQueryStore from "stores/SearchQueryStore.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

require = fn;
function performKeyboardAwareNavigation(fn) {
  closure_0 = fn;
  if (obj.getKeyboardIsOpen()) {
    let tmpResult = tmp(1115);
    if (tmpResult.isIOS()) {
      tmpResult = tmp(1874);
      const result = tmpResult.dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => closure_0(), 100);
    }
  }
  fn();
}
function delayUntilNavigationComplete(arg0) {
  closure_0 = arg0;
  const timerId = setTimeout(() => closure_0(), 200);
}
function getUrlIcon(target) {
  if (null == target) {
    return LinkIcon.LinkIcon;
  } else {
    if (null == obj.safeParseWithQuery(target)) {
      return LinkIcon.LinkIcon;
    } else {
      if (tmp10Result.isDiscordUrl(target)) {
        return ClydeIcon.ClydeIcon;
      } else {
        let num = 0;
        if (0 < length.length) {
          const REGEX = tmp2.REGEX;
          while (null == REGEX.exec(target)) {
            num = num + 1;
          }
          return length[num].Icon;
        }
        return LinkIcon.LinkIcon;
      }
      tmp10Result = tmp10(1365);
    }
    obj = URLUtilsDefault;
    tmp10 = importDefault;
  }
}
function getGridItemBorderStyles(numItems) {
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    let obj = { borderTopLeftRadius: nativeDefault.radii.lg };
    let tmp4 = obj;
  } else if (itemIndex === numColumns - 1) {
    obj = { borderTopRightRadius: nativeDefault.radii.lg };
    tmp4 = obj;
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        const obj1 = { borderBottomLeftRadius: nativeDefault.radii.lg };
        tmp4 = obj1;
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      obj = { borderBottomRightRadius: nativeDefault.radii.lg };
      tmp4 = obj;
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(numItems) {
  ({ itemIndex, numColumns } = numItems);
  let obj = {};
  obj = { itemIndex, numItems: numItems.numItems, numColumns };
  const merged = Object.assign(getGridItemBorderStyles(obj));
  const result = (numItems.spacing * (numColumns - 1)) / numColumns;
  const result1 = itemIndex % numColumns;
  if (0 === result1) {
    obj = { marginEnd: result };
    let obj2 = obj;
  } else if (numColumns - 1 === result1) {
    const obj1 = { marginStart: result };
    obj2 = obj1;
  } else {
    obj2 = { marginHorizontal: result / 2 };
  }
  const merged1 = Object.assign(obj2);
  return obj;
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = (numColumns.spacing * (numColumns - 1)) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    let obj = { marginEnd: result };
    return obj;
  } else if (numColumns - 1 === result1) {
    obj = { marginStart: result };
    return obj;
  } else {
    obj = { marginHorizontal: result / 2 };
    return obj;
  }
}
function toSearchBarTag(id) {
  return { id: id.text, text: id.text };
}
function getInitialFetchLimit(arg0) {
  return Math.min(dependencyMap[arg0], timestampProducer);
}
function getNextFetchLimit(arg0) {
  return Math.min(2 * dependencyMap[arg0], timestampProducer);
}
function onInitialFetchMessagesSuccess(tabEntries) {
  tabEntries = tabEntries.tabEntries;
  if (
    tabEntries.every((item) => {
      [, tmp] = item;
      let tmp2 = 0 === tmp.total_results;
      if (!tmp2) {
        tmp2 = null == tmp.total_results;
      }
      return tmp2;
    })
  ) {
    const obj = { searchContext: tabEntries.searchContext };
    const result = obj.trackSearchEmptyMessageResult(obj);
  }
}
function onFetchMessagesStart(searchQueryString) {
  searchQueryString = searchQueryString.searchQueryString;
  SearchPlatformActionCreatorsDefault.updateSearchQuery(searchQueryString.searchContext, (setSearchResultsQuery) =>
    setSearchResultsQuery.setSearchResultsQuery(searchQueryString),
  );
}
function fetchInitialMessages(searchContext) {
  _require = searchContext;
  const queryString = SearchQueryStore.getQueryString(searchContext);
  if (isInitialSearchQueryResult) {
    const type = searchContext.type;
    if (constants6.GUILD_CHANNEL !== type) {
    }
  } else {
    let obj = require("SearchUtils");
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tmp3[0], queryString);
    let obj1 = SearchMessageStore;
    if (!SearchMessageStore.getIsFetching(searchTabFetchId)) {
      const result = queryString(12347).clearAllSearchMesssages();
      const obj3 = queryString(12347);
      obj = { searchContext };
      queryString(12358).trackSearchStarted(obj);
      const obj4 = queryString(12358);
      obj = {
        searchContext,
        searchTabs: tmp3,
        searchQueryString: queryString,
        getId(MEDIA) {
          return SearchUtils.getSearchTabFetchId(closure_0, MEDIA, queryString);
        },
        getLimit: getInitialFetchLimit,
        onFetchStart: onFetchMessagesStart,
        onFetchSuccess: onInitialFetchMessagesSuccess,
        pagination: null,
        trackExactTotalHits: null,
        searchMode: null,
      };
      let cursor = obj1.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      obj1 = { cursor };
      obj.pagination = obj1;
      const obj6 = queryString(12347);
      obj.trackExactTotalHits = require("UserSettings").SearchResultExactCountEnabled.getSetting();
      obj.searchMode = constants5.NEWEST;
      const tabMessages = obj6.fetchTabMessages(obj);
      const SearchResultExactCountEnabled = require("UserSettings").SearchResultExactCountEnabled;
    }
  }
}
function syncAutocomplete(searchContext) {
  const queryString = SearchQueryStore.getQueryString(searchContext, true);
  let obj = SearchUtils;
  const tokenizeQueryResult = obj.tokenizeQuery(queryString);
  const selectionScope = SearchUtils.getSelectionScope(
    tokenizeQueryResult,
    queryString.length - 1,
    queryString.length - 1,
  );
  obj = { searchContext, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString };
  const result = SearchActionCreatorsDefault.updateAutocompleteQuery(obj);
}
const SearchConstants = fn(7878);
({
  CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: hasOwnProperty,
  MAX_SEARCH_RESULTS_LIMIT: metroRequire,
  MESSAGE_SEARCH_RESULT_TABS: closure_7,
  SEARCH_INITIAL_MESSAGE_TABS: closure_8,
  SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: closure_9,
  SearchFileTypes: c10,
  SearchLinkTypes: closure_11,
  SearchMediaTypes: closure_12,
} = SearchConstants);
const SearchPlatformConstants = fn(12353);
({ PLATFORM_REGEX_ICON_PAIRS: map1, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = SearchPlatformConstants);
const Constants = fn(1074);
({ MessageFlags: closure_14, SearchModes: closure_15, SearchTypes: closure_16 } = Constants);
let obj = {
  performKeyboardAwareNavigation,
  delayUntilNavigationComplete,
  getUrlIcon,
  getGridItemBorderStyles,
  getMediaGridItemStyles,
  getGridItemSpacingStyles,
  toSearchBarTag,
  fetchInitialMessages,
  fetchInitialMessagesDebounced: null,
  fetchNextMessages: null,
  syncAutocomplete: null,
  syncAutocompleteDebounced: null,
  navigateToSearchWithPrefetch: null,
  subscribeSearchQueryState: null,
  subscribeTextInputValue: null,
};
obj.fetchInitialMessagesDebounced = apply.debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.fetchNextMessages = function fetchNextMessages(searchContext, tab, onFetchSuccess) {
  _require = searchContext;
  const queryString = SearchQueryStore.getQueryString(searchContext);
  let obj = require("SearchUtils");
  const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, queryString);
  const bound = Math.min(dependencyMap[tab], closure_6);
  const searchTabFetchId1 = require("SearchUtils").getSearchTabFetchId(searchContext, tab, queryString);
  if (!SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId1)) {
    const isFetching = obj3.getIsFetching(searchTabFetchId);
    let flag = !obj3.getIsInitialFetchComplete(searchTabFetchId);
    if (!flag) {
      flag = isFetching;
    }
    let tabMessages = !flag;
    if (!flag) {
      obj = {
        searchContext,
        searchTabs: null,
        searchQueryString: null,
        getLimit: null,
        getId: null,
        onFetchStart: null,
        onFetchSuccess: null,
        pagination: null,
        trackExactTotalHits: null,
        searchMode: null,
      };
      const items = [tab];
      obj.searchTabs = items;
      obj.searchQueryString = queryString;
      obj.getLimit = getNextFetchLimit;
      obj.getId = function getId(MEDIA) {
        return SearchUtils.getSearchTabFetchId(closure_0, MEDIA, queryString);
      };
      obj.onFetchStart = onFetchMessagesStart;
      obj.onFetchSuccess = onFetchSuccess;
      let cursor = obj3.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      obj = { cursor };
      obj.pagination = obj;
      const obj4 = queryString(12347);
      obj.trackExactTotalHits = tmp2(1935).SearchResultExactCountEnabled.getSetting();
      obj.searchMode = constants5.NEWEST;
      tabMessages = obj4.fetchTabMessages(obj);
      const SearchResultExactCountEnabled2 = tmp2(1935).SearchResultExactCountEnabled;
    }
    return tabMessages;
  } else {
    const cursor1 = obj3.getCursor(searchTabFetchId1);
    const totalCount = obj3.getTotalCount(searchTabFetchId1);
    let messages = obj3.getMessages(searchTabFetchId1);
    if (SearchResultExactCountEnabled.getSetting()) {
      let tmp12 = null != cursor1 && null != totalCount && null != messages;
      if (tmp12) {
        messages = messages.length;
        tmp12 = messages < totalCount;
      }
    } else if (null == totalCount) {
      const tmp10 = null != cursor1;
    }
    SearchResultExactCountEnabled = tmp2(1935).SearchResultExactCountEnabled;
  }
};
obj.syncAutocomplete = syncAutocomplete;
obj.syncAutocompleteDebounced = apply.debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.navigateToSearchWithPrefetch = function navigateToSearchWithPrefetch(rootNavigationRef, searchContext) {
  let obj = SearchActionCreatorsDefault;
  const result = obj.initializeAutocomplete(searchContext);
  const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(searchContext);
  fetchInitialMessages(searchContext);
  obj = { searchContext };
  rootNavigationRef.navigate("search", obj);
};
obj.subscribeSearchQueryState = function subscribeSearchQueryState(searchContext, fn, fn2, arg3) {
  closure_0 = searchContext;
  closure_1 = fn;
  closure_2 = fn2;
  let tmp = arg3;
  function callback() {
    const tmp = f93178(SearchQueryStore.getManager(closure_0));
    if (null == closure_3) {
      closure_3 = tmp;
      f93179(tmp, closure_3);
    }
  }
  const tmp2 = fn(callback.getManager(searchContext));
  closure_3 = tmp2;
  if (arg3) {
    tmp = null != tmp2;
  }
  if (tmp) {
    fn2(closure_3, undefined);
  }
  callback.addChangeListener(callback);
  return () => SearchQueryStore.removeChangeListener(callback);
};
obj.subscribeTextInputValue = function subscribeTextInputValue(searchContext, debounceResult, arg2) {
  searchContext = debounceResult;
  let flag = arg2;
  const f93178 = (getTextInputValue) => ({
    textInputValue: getTextInputValue.getTextInputValue(),
    textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput(),
  });
  const f93179 = (textInputValue, textInputValue2) => {
    textInputValue = undefined;
    if (textInputValue2 != null) {
      textInputValue = textInputValue2.textInputValue;
    }
    searchContext(textInputValue.textInputValue, textInputValue, textInputValue.textInputChangedFromInput);
  };
  function callback() {
    const tmp = f93178(SearchQueryStore.getManager(closure_0));
    if (null == closure_3) {
      closure_3 = tmp;
      f93179(tmp, closure_3);
    }
  }
  const manager = callback.getManager(searchContext);
  const obj = {
    textInputValue: manager.getTextInputValue(),
    textInputChangedFromInput: manager.getTextValueChangedFromInput(),
  };
  closure_3 = obj;
  if (arg2) {
    flag = true;
  }
  if (flag) {
    debounceResult(obj.textInputValue, undefined, obj.textInputChangedFromInput);
  }
  obj.addChangeListener(callback);
  return () => SearchQueryStore.removeChangeListener(callback);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(searchContext, items1) {
  guildIdFromSearchContext = guildIdFromSearchContext(12340).getGuildIdFromSearchContext(searchContext);
  const items = [];
  let item = items1.forEach((getContentMessage) => {
    closure_0 = getContentMessage;
    mediaIndex = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (attachments != null) {
      const item = attachments.forEach((attachment, index) => {
        let obj = MediaSourceUtil;
        if (!obj.isThumbnailAttachment(attachment)) {
          let tmpResult = tmp(8263);
          if (tmpResult.isValidImageAttachment(attachment)) {
            tmpResult = tmp(8263);
            const result = tmpResult.extractMediaFromAttachment(attachment, closure_0, index, guildIdFromSearchContext);
            if (null != result) {
              obj = {
                type: constants3.ATTACHMENT,
                attachment,
                messageId: null,
                channelId: null,
                author: null,
                mediaIndex: null,
                sources: null,
              };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = tmp4);
              obj.mediaIndex = mediaIndex;
              obj.sources = result;
              items.push(obj);
              mediaIndex = mediaIndex + 1;
            }
            tmp4 = closure_0;
          } else {
            const tmpResult1 = tmp(8263);
          }
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const item1 = embeds.forEach((embed, index) => {
        let obj = MediaSourceUtil;
        if (obj.isValidImageEmbed(embed)) {
          let tmpResult = tmp(8263);
          const result = tmpResult.extractMediaFromEmbed(
            embed,
            closure_0,
            contentMessage,
            index,
            guildIdFromSearchContext,
          );
          if (null != result) {
            obj = {
              type: constants3.EMBED,
              embed,
              messageId: null,
              channelId: null,
              author: null,
              mediaIndex: null,
              sources: null,
            };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = tmp4);
            obj.mediaIndex = mediaIndex;
            obj.sources = result;
            items.push(obj);
            mediaIndex = mediaIndex + 1;
          }
          tmp4 = closure_0;
        } else {
          tmpResult = tmp(8263);
        }
      });
    }
    let obj = guildIdFromSearchContext(8263);
    let result = obj.extractMediaFromMessageComponents(getContentMessage, contentMessage, closure_0);
    const iter = result[Symbol.iterator]();
    while (iter !== undefined) {
      obj = {
        type: null,
        messageId: null,
        channelId: null,
        author: null,
        mediaIndex: null,
        sources: null,
        unfurledMediaItem: null,
      };
      obj.type = constants.COMPONENT;
      ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
      obj.mediaIndex = mediaIndex;
      ({ sources: obj2.sources, unfurledMediaItem: obj2.unfurledMediaItem } = nextResult);
      let arr = mediaIndex.push(obj);
      mediaIndex = mediaIndex + 1;
      continue;
    }
    nextResult = iter.next();
    if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
      obj = { type: constants.AUDIO, messageId: null, channelId: null, author: null, mediaIndex: null };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
      obj.mediaIndex = mediaIndex;
      mediaIndex.push(obj);
      mediaIndex = mediaIndex + 1;
    }
  });
  return items;
};
export const getFiles = function getFiles(getContentMessage) {
  const items = [];
  const contentMessage = getContentMessage.getContentMessage();
  const attachments = contentMessage.attachments;
  if (attachments != null) {
    const item = attachments.forEach((attachment, fileIndex) => {
      let obj = MediaSourceUtil;
      if (!obj.isValidImageAttachment(attachment)) {
        let tmpResult = tmp(8263);
        if (!tmpResult.isValidVideoAttachment(attachment)) {
          tmpResult = tmp(1384);
          const push = items.push;
          obj = { type: null, messageId: null, channelId: null, author: null, fileIndex: null, attachment: null };
          if (tmpResult.hasFlag(contentMessage.flags, constants4.IS_VOICE_MESSAGE)) {
            obj.type = tmp6.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj.fileIndex = fileIndex;
            obj.attachment = attachment;
            push(obj);
          } else {
            obj.type = tmp6.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj.fileIndex = fileIndex;
            obj.attachment = attachment;
            push(obj);
          }
        }
      }
      obj = {
        type: constants.MEDIA_ATTACHMENT,
        messageId: getContentMessage.id,
        channelId: getContentMessage.channel_id,
        author: getContentMessage.author,
        fileIndex,
        attachment,
      };
      items.push(obj);
    });
  }
  return items;
};
export const getLinks = function getLinks(searchContext, getContentMessage) {
  _require = getContentMessage;
  let obj = require("SearchUtils");
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  items = [];
  const contentMessage = getContentMessage.getContentMessage();
  let linkIndex = 0;
  const embeds = contentMessage.embeds;
  if (embeds != null) {
    const item = embeds.forEach((embed, index) => {
      let obj = MediaSourceUtil;
      if (obj.isValidImageEmbed(embed)) {
        let tmpResult = tmp(8263);
        const result = tmpResult.extractMediaFromEmbed(
          embed,
          closure_0,
          contentMessage,
          index,
          guildIdFromSearchContext,
        );
        if (null != result) {
          obj = {
            type: constants2.EMBED,
            messageId: null,
            channelId: null,
            author: null,
            linkIndex: null,
            sources: null,
            embed: null,
          };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = tmp4);
          obj.linkIndex = linkIndex;
          obj.sources = result;
          obj.embed = embed;
          items.push(obj);
          linkIndex = linkIndex + 1;
        }
        tmp4 = closure_0;
      } else {
        tmpResult = tmp(8263);
      }
    });
  }
  if (0 === items.length) {
    obj = { type: constants2.TEXT, messageId: null, channelId: null, author: null, linkIndex: 0 };
    ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
    items.push(obj);
  }
  return items;
};
export { performKeyboardAwareNavigation };
export { delayUntilNavigationComplete };
export { getUrlIcon };
export { getGridItemBorderStyles };
export { getMediaGridItemStyles };
export { getGridItemSpacingStyles };
export { toSearchBarTag };
