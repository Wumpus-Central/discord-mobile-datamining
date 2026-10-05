// === Module 11966: SearchPlatformUtils ===

// Module 11966 (SearchPlatformUtils)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import LinkIcon from "LinkIcon" /* 4839 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6110 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7939 */;
import ClydeIcon from "ClydeIcon" /* 10547 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 11998 */;
import SmartSearchActionCreatorsAll from "SmartSearchActionCreators" /* 12003 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 12006 */;
import SearchMessageStore from "SearchMessageStore" /* 6784 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 11977 */;
import Constants from "Constants" /* 1085 */;
import "module_12";
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, mediaIndex;

let SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let module_12;
let unpackModuleId;
function performKeyboardAwareNavigation(fn) {
  let closure_0 = fn;
  const obj = useKeyboardIsOpen;
  if (obj.getKeyboardIsOpen()) {
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      const tmpResult2 = KeyboardManagerUtils;
      const result = tmpResult2.dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => closure_0(), 100);
    }
  }
  fn();
}
function delayUntilNavigationComplete(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => closure_0(), 200);
}
function getUrlIcon(target) {
  if (null == target) {
    return LinkIcon.LinkIcon;
  } else {
    const obj = URLUtilsDefault;
    if (null == obj.safeParseWithQuery(target)) {
      return LinkIcon.LinkIcon;
    } else {
      const tmp10Result = URLUtilsDefault;
      if (tmp10Result.isDiscordUrl(target)) {
        return ClydeIcon.ClydeIcon;
      } else {
        let num = 0;
        if (0 < length.length) {
          const REGEX = tmp2.REGEX;
          const Icon = tmp2.Icon;
          while (null == REGEX.exec(target)) {
            num = num + 1;
          }
          return Icon;
        }
        return LinkIcon.LinkIcon;
      }
    }
  }
}
function getGridItemBorderStyles(numItems) {
  let itemIndex;
  let numColumns;
  let tmp4;
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    tmp4 = { borderTopLeftRadius: nativeDefault.radii.lg };
    const obj2 = { borderTopLeftRadius: nativeDefault.radii.lg };
  } else if (itemIndex === numColumns - 1) {
    tmp4 = { borderTopRightRadius: nativeDefault.radii.lg };
    const obj3 = { borderTopRightRadius: nativeDefault.radii.lg };
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        tmp4 = { borderBottomLeftRadius: nativeDefault.radii.lg };
        const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg };
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      tmp4 = { borderBottomRightRadius: nativeDefault.radii.lg };
      const obj = { borderBottomRightRadius: nativeDefault.radii.lg };
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(numItems) {
  let itemIndex;
  let numColumns;
  let obj5;
  ({ itemIndex, numColumns } = numItems);
  const spacing = numItems.spacing;
  const obj = {};
  const obj2 = { itemIndex, numItems: numItems.numItems, numColumns };
  const merged = Object.assign(getGridItemBorderStyles(obj2));
  const result = spacing * (numColumns - 1) / numColumns;
  const result1 = itemIndex % numColumns;
  if (0 === result1) {
    obj5 = { marginEnd: result };
    const obj3 = { marginEnd: result };
  } else if (numColumns - 1 === result1) {
    obj5 = { marginStart: result };
    const obj4 = { marginStart: result };
  } else {
    obj5 = { marginHorizontal: result / 2 };
  }
  const merged1 = Object.assign(obj5);
  return obj;
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = numColumns.spacing * (numColumns - 1) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    return { marginEnd: result };
  } else if (numColumns - 1 === result1) {
    return { marginStart: result };
  } else {
    return { marginHorizontal: result / 2 };
  }
}
function toSearchBarTag(id) {
  return { id: id.text, text: id.text };
}
function getInitialFetchLimit(arg0) {
  return Math.min(authStore[arg0], metroImportDefault);
}
function getNextFetchLimit(arg0) {
  return Math.min(2 * authStore[arg0], metroImportDefault);
}
function onInitialFetchMessagesSuccess(tabEntries) {
  tabEntries = tabEntries.tabEntries;
  const searchContext = tabEntries.searchContext;
  if (tabEntries.every((item) => {
    let tmp;
    [, tmp] = item;
    return 0 === tmp.total_results || null == tmp.total_results;
  })) {
    const obj2 = { searchContext };
    const obj = search_tracking_TrackingDefault;
    const result = obj.trackSearchEmptyMessageResult(obj2);
  }
}
function onFetchMessagesStart(searchQueryString) {
  searchQueryString = searchQueryString.searchQueryString;
  const searchContext = searchQueryString.searchContext;
  const obj = SearchPlatformActionCreatorsDefault;
  obj.updateSearchQuery(searchContext, (setSearchResultsQuery) => setSearchResultsQuery.setSearchResultsQuery(searchQueryString));
}
function fetchInitialMessages(searchContext) {
  let SearchResultExactCountEnabled;
  let obj7;
  let tmp3;
  let tmp5Result;
  let tmp8;
  _require = searchContext;
  const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
  const queryString = SearchQueryStore.getQueryString(searchContext);
  if (isInitialSearchQueryResult) {
    const type = searchContext.type;
    if (constants6.GUILD_CHANNEL !== type) {
      let tmp4;
      if (constants6.CHANNEL !== type) {
        tmp4 = closure_9;
      }
      tmp3 = tmp4;
    }
    tmp4 = closure_6;
  } else {
    tmp3 = closure_8;
  }
  let obj = require("SearchUtils");
  const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tmp3[0], queryString);
  if (!SearchMessageStore.getIsFetching(searchTabFetchId)) {
    const obj3 = queryString(11998);
    const result = obj3.clearAllSearchMesssages();
    const obj5 = { searchContext };
    const obj4 = queryString(11982);
    obj4.trackSearchStarted(obj5);
    const obj6 = {
      searchContext,
      searchTabs: tmp3,
      searchQueryString: queryString,
      getId(tab) {
          const obj = SearchUtils;
          return obj.getSearchTabFetchId(searchContext, tab, queryString);
        },
      getLimit: getInitialFetchLimit,
      onFetchStart: onFetchMessagesStart,
      onFetchSuccess: onInitialFetchMessagesSuccess,
      pagination: obj7,
      trackExactTotalHits: SearchResultExactCountEnabled.getSetting(),
      searchMode: constants5.NEWEST,
      searchAnalyticsIds: tmp5Result.getSearchAnalyticsIds(searchContext, tmp8(11983))
    };
    const fetchTabMessages = queryString(11998).fetchTabMessages;
    queryString(11998);
    let cursor = SearchMessageStore.getCursor(searchTabFetchId);
    tmp8 = queryString;
    if (cursor == null) {
      cursor = null;
    }
    obj7 = { cursor };
    SearchResultExactCountEnabled = require("UserSettings").SearchResultExactCountEnabled;
    tmp5Result = require("SearchUtils");
    const tabMessages = fetchTabMessages(obj6);
    const obj8 = { searchContext, searchQueryString: queryString };
    const obj9 = SmartSearchActionCreatorsAll;
    const answer = obj9.fetchAnswer(obj8);
  }
}
function syncAutocomplete(searchContext) {
  const queryString = SearchQueryStore.getQueryString(searchContext, true);
  const obj = SearchUtils;
  const tokenizeQueryResult = obj.tokenizeQuery(queryString);
  const obj2 = SearchUtils;
  const selectionScope = obj2.getSelectionScope(tokenizeQueryResult, queryString.length - 1, queryString.length - 1);
  const obj3 = SearchActionCreatorsDefault;
  const obj4 = { searchContext, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString };
  const result = obj3.updateAutocompleteQuery(obj4);
}
({ CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: metroRequire, MAX_SEARCH_RESULTS_LIMIT: metroImportDefault, MESSAGE_SEARCH_RESULT_TABS: metroImportAll, SEARCH_INITIAL_MESSAGE_TABS: c9, SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: c10, SearchFileTypes: unpackModuleId, SearchLinkTypes: closure_12, SearchMediaTypes: map1 } = SearchConstants);
({ PLATFORM_REGEX_ICON_PAIRS: closure_14, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = SearchPlatformConstants);
({ MessageFlags: closure_15, SearchModes: closure_16, SearchTypes: closure_17 } = Constants);
let obj = {
  performKeyboardAwareNavigation,
  delayUntilNavigationComplete,
  getUrlIcon,
  getGridItemBorderStyles,
  getMediaGridItemStyles,
  getGridItemSpacingStyles,
  toSearchBarTag,
  fetchInitialMessages,
  fetchInitialMessagesDebounced: module_12.debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME),
  fetchNextMessages(searchContext, tab, onFetchSuccess) {
    let SearchResultExactCountEnabled2;
    let items;
    let obj5;
    let tmp17;
    let tmp2Result;
    _require = searchContext;
    const queryString = SearchQueryStore.getQueryString(searchContext);
    let obj = require("SearchUtils");
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, queryString);
    const bound = Math.min(closure_10[tab], closure_7);
    const obj2 = require("SearchUtils");
    const searchTabFetchId1 = obj2.getSearchTabFetchId(searchContext, tab, queryString);
    let flag = true;
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId1)) {
      let tmp10;
      const cursor = SearchMessageStore.getCursor(searchTabFetchId1);
      const totalCount = SearchMessageStore.getTotalCount(searchTabFetchId1);
      const messages = SearchMessageStore.getMessages(searchTabFetchId1);
      const SearchResultExactCountEnabled = require("UserSettings").SearchResultExactCountEnabled;
      if (SearchResultExactCountEnabled.getSetting()) {
        tmp10 = null != cursor && null != totalCount && null != messages && messages.length < totalCount;
      } else {
        tmp10 = null != cursor;
      }
      flag = tmp10;
    }
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    let tmp14 = !flag;
    if (flag) {
      tmp14 = !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    }
    if (!tmp14) {
      tmp14 = isFetching;
    }
    let tabMessages = !tmp14;
    if (tabMessages) {
      const obj4 = {
        searchContext,
        searchTabs: items,
        searchQueryString: queryString,
        getLimit: getNextFetchLimit,
        getId(tab) {
            const obj = SearchUtils;
            return obj.getSearchTabFetchId(searchContext, tab, queryString);
          },
        onFetchStart: onFetchMessagesStart,
        onFetchSuccess,
        pagination: obj5,
        trackExactTotalHits: SearchResultExactCountEnabled2.getSetting(),
        searchMode: constants5.NEWEST,
        searchAnalyticsIds: tmp2Result.getSearchAnalyticsIds(searchContext, tmp17(11983))
      };
      items = [tab];
      const fetchTabMessages = queryString(11998).fetchTabMessages;
      queryString(11998);
      let cursor1 = SearchMessageStore.getCursor(searchTabFetchId);
      tmp17 = queryString;
      if (cursor1 == null) {
        cursor1 = null;
      }
      obj5 = { cursor: cursor1 };
      SearchResultExactCountEnabled2 = require("UserSettings").SearchResultExactCountEnabled;
      tmp2Result = require("SearchUtils");
      tabMessages = fetchTabMessages(obj4);
    }
    return tabMessages;
  },
  syncAutocomplete,
  syncAutocompleteDebounced: module_12.debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME),
  navigateToSearchWithPrefetch(rootNavigationRef, guildSearchContext) {
    const obj = SearchActionCreatorsDefault;
    const result = obj.initializeAutocomplete(guildSearchContext);
    const obj2 = SearchPlatformActionCreatorsDefault;
    const result1 = obj2.initializeSearchQuery(guildSearchContext);
    fetchInitialMessages(guildSearchContext);
    const obj3 = SearchUtils;
    const guildIdFromSearchContext = obj3.getGuildIdFromSearchContext(guildSearchContext);
    if (null != guildIdFromSearchContext) {
      const tmp5Result = SuggestedSearchActionCreators;
      const initialSuggestedSearches = tmp5Result.fetchInitialSuggestedSearches(guildIdFromSearchContext, []);
    }
    const obj4 = { searchContext: guildSearchContext };
    rootNavigationRef.navigate("search", obj4);
  },
  subscribeSearchQueryState(searchContext, fn, fn2, arg3) {
    let closure_0 = searchContext;
    let closure_1 = fn;
    let closure_2 = fn2;
    let tmp = arg3;
    function callback() {
      const tmp = f109900(SearchQueryStore.getManager(searchContext));
      if (null == closure_3) {
        closure_3 = tmp;
        f109901(tmp, closure_3);
      }
    }
    const tmp2 = fn(SearchQueryStore.getManager(searchContext));
    let closure_3 = tmp2;
    if (arg3) {
      tmp = null != tmp2;
    }
    if (tmp) {
      fn2(closure_3, undefined);
    }
    SearchQueryStore.addChangeListener(callback);
    return () => SearchQueryStore.removeChangeListener(callback);
  },
  subscribeTextInputValue(searchContext, debounceResult, arg2) {
    let flag = arg2;
    let closure_0 = searchContext;
    const f109900 = (getTextInputValue) => {
      const obj = { textInputValue: getTextInputValue.getTextInputValue(), textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput() };
      return obj;
    };
    const f109901 = (textInputValue, textInputValue2) => {
      let textInputValue1;
      textInputValue = textInputValue.textInputValue;
      if (textInputValue2 != null) {
        textInputValue1 = textInputValue2.textInputValue;
      }
      closure_0(textInputValue, textInputValue1, textInputValue.textInputChangedFromInput);
    };
    function callback() {
      const tmp = f109900(SearchQueryStore.getManager(searchContext));
      if (null == closure_3) {
        closure_3 = tmp;
        f109901(tmp, closure_3);
      }
    }
    const manager = SearchQueryStore.getManager(searchContext);
    const obj2 = { textInputValue: manager.getTextInputValue(), textInputChangedFromInput: manager.getTextValueChangedFromInput() };
    let closure_3 = obj2;
    if (arg2) {
      flag = true;
    }
    if (flag) {
      let tmp = debounceResult(obj2.textInputValue, undefined, obj2.textInputChangedFromInput);
    }
    SearchQueryStore.addChangeListener(callback);
    return () => SearchQueryStore.removeChangeListener(callback);
  }
};
module_12 = module_12_mod;
let result = size.fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(searchContext, items1) {
  let guildIdFromSearchContext;
  let obj = guildIdFromSearchContext(11968);
  guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  const items = [];
  let item = items1.forEach((getContentMessage) => {
    let closure_0 = getContentMessage;
    mediaIndex = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (attachments != null) {
      const item = attachments.forEach((attachment, index) => {
        const obj = MediaSourceUtil;
        if (!obj.isThumbnailAttachment(attachment)) {
          const tmpResult = MediaSourceUtil;
          if (tmpResult.isValidImageAttachment(attachment)) {
            const tmpResult3 = MediaSourceUtil;
            const result = tmpResult3.extractMediaFromAttachment(attachment, getContentMessage, index, guildIdFromSearchContext);
            if (null != result) {
              const obj2 = { type: map1.ATTACHMENT, attachment, messageId: null, channelId: null, author: null, mediaIndex, sources: result };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = getContentMessage);
              items.push(obj2);
              mediaIndex = mediaIndex + 1;
            }
          } else {
            MediaSourceUtil;
          }
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const item1 = embeds.forEach((embed, index) => {
        const obj = MediaSourceUtil;
        if (obj.isValidImageEmbed(embed)) {
          const tmpResult = MediaSourceUtil;
          const result = tmpResult.extractMediaFromEmbed(embed, getContentMessage, contentMessage, index, guildIdFromSearchContext);
          if (null != result) {
            const obj2 = { type: map1.EMBED, embed, messageId: null, channelId: null, author: null, mediaIndex, sources: result };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            items.push(obj2);
            mediaIndex = mediaIndex + 1;
          }
        } else {
          MediaSourceUtil;
        }
      });
    }
    let obj = guildIdFromSearchContext(dependencyMap[6]);
    let result = obj.extractMediaFromMessageComponents(getContentMessage, contentMessage, closure_0);
    const iter = result[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj6 = { type: constants.COMPONENT, messageId: null, channelId: null, author: null, mediaIndex, sources: null, unfurledMediaItem: null };
      ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
      ({ sources: obj2.sources, unfurledMediaItem: obj2.unfurledMediaItem } = nextResult);
      let arr = mediaIndex.push(obj6);
      mediaIndex = mediaIndex + 1;
      continue;
    }
    const obj3 = guildIdFromSearchContext(dependencyMap[7]);
    if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
      const obj7 = { type: constants.AUDIO, messageId: null, channelId: null, author: null, mediaIndex };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
      mediaIndex.push(obj7);
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
      const obj = MediaSourceUtil;
      if (!obj.isValidImageAttachment(attachment)) {
        const tmpResult = MediaSourceUtil;
        if (!tmpResult.isValidVideoAttachment(attachment)) {
          const push = items.push;
          const obj2 = { type: null, messageId: null, channelId: null, author: null, fileIndex: null, attachment: null };
          const tmpResult2 = FlagUtils;
          if (tmpResult2.hasFlag(contentMessage.flags, constants.IS_VOICE_MESSAGE)) {
            obj2.type = unpackModuleId.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          } else {
            obj2.type = unpackModuleId.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          }
        }
      }
      const obj3 = { type: unpackModuleId.MEDIA_ATTACHMENT, messageId: getContentMessage.id, channelId: getContentMessage.channel_id, author: getContentMessage.author, fileIndex, attachment };
      items.push(obj3);
    });
  }
  return items;
};
export const getLinks = function getLinks(searchContext, getContentMessage) {
  let contentMessage;
  _require = getContentMessage;
  let obj = require("SearchUtils");
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  const items = [];
  contentMessage = getContentMessage.getContentMessage();
  let linkIndex = 0;
  const embeds = contentMessage.embeds;
  if (embeds != null) {
    const item = embeds.forEach((embed, index) => {
      const obj = MediaSourceUtil;
      if (obj.isValidImageEmbed(embed)) {
        const tmpResult = MediaSourceUtil;
        const result = tmpResult.extractMediaFromEmbed(embed, getContentMessage, contentMessage, index, guildIdFromSearchContext);
        if (null != result) {
          const obj2 = { type: constants.EMBED, messageId: null, channelId: null, author: null, linkIndex, sources: result, embed };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
          items.push(obj2);
          linkIndex = linkIndex + 1;
        }
      } else {
        MediaSourceUtil;
      }
    });
  }
  if (0 === items.length) {
    const obj3 = { type: constants2.TEXT, messageId: null, channelId: null, author: null, linkIndex: 0 };
    ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
    items.push(obj3);
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