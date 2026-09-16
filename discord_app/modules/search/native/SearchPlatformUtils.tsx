// discord_app/modules/search/native/SearchPlatformUtils.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import useKeyboardIsOpen from "../../keyboard/native/useKeyboardIsOpen.tsx";
import MediaSourceUtil from "../../media_viewer/native/MediaSourceUtil.tsx";
import ClydeIcon from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import SearchUtils from "../SearchUtils.tsx";
import SearchActionCreatorsDefault from "../SearchActionCreators.tsx";
import search_tracking_TrackingDefault from "tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators.tsx";
import SearchMessageStore from "../SearchMessageStore.tsx";
import SearchQueryStore from "stores/SearchQueryStore.tsx";
import apply_mod from "../../../../_runtime/metro/00012__.js";

const require = globalThis.__r;

require = fn;
function performKeyboardAwareNavigation(fn) {
  closure_0 = fn;
  if (obj.getKeyboardIsOpen()) {
    if (tmpResult.isIOS()) {
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => closure_0(), 100);
      const tmpResult2 = KeyboardManagerUtils;
    }
    tmpResult = PlatformUtils;
  }
  fn();
  obj = useKeyboardIsOpen;
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
      tmp10Result = URLUtilsDefault;
    }
    obj = URLUtilsDefault;
  }
}
function getGridItemBorderStyles(numItems) {
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    const obj2 = { borderTopLeftRadius: nativeDefault.radii.lg };
    let tmp4 = obj2;
  } else if (itemIndex === numColumns - 1) {
    const obj3 = { borderTopRightRadius: nativeDefault.radii.lg };
    tmp4 = obj3;
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg };
        tmp4 = obj4;
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      const obj = { borderBottomRightRadius: nativeDefault.radii.lg };
      tmp4 = obj;
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(numItems) {
  ({ itemIndex, numColumns } = numItems);
  const merged = Object.assign(getGridItemBorderStyles({ itemIndex, numItems: numItems.numItems, numColumns }));
  const result = (numItems.spacing * (numColumns - 1)) / numColumns;
  const result1 = itemIndex % numColumns;
  if (0 === result1) {
    const obj3 = { marginEnd: result };
    let obj5 = obj3;
  } else if (numColumns - 1 === result1) {
    const obj4 = { marginStart: result };
    obj5 = obj4;
  } else {
    obj5 = { marginHorizontal: result / 2 };
  }
  const merged1 = Object.assign(obj5);
  return {};
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = (numColumns.spacing * (numColumns - 1)) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    const obj2 = { marginEnd: result };
    return obj2;
  } else if (numColumns - 1 === result1) {
    const obj3 = { marginStart: result };
    return obj3;
  } else {
    const obj = { marginHorizontal: result / 2 };
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
    const obj2 = { searchContext: tabEntries.searchContext };
    const result = search_tracking_TrackingDefault.trackSearchEmptyMessageResult(obj2);
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
    const searchTabFetchId = require("SearchUtils").getSearchTabFetchId(searchContext, searchTabs[0], queryString);
    if (!SearchMessageStore.getIsFetching(searchTabFetchId)) {
      const result = queryString(12490).clearAllSearchMesssages();
      const obj3 = queryString(12490);
      const obj5 = { searchContext };
      queryString(12501).trackSearchStarted(obj5);
      const obj4 = queryString(12501);
      const obj7 = {
        searchContext,
        searchTabs,
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
      let cursor = SearchMessageStore.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      const obj8 = { cursor };
      obj7.pagination = obj8;
      const obj6 = queryString(12490);
      obj7.trackExactTotalHits = tmp6(1936).SearchResultExactCountEnabled.getSetting();
      obj7.searchMode = constants5.NEWEST;
      const tabMessages = obj6.fetchTabMessages(obj7);
      const SearchResultExactCountEnabled = tmp6(1936).SearchResultExactCountEnabled;
    }
    const obj = require("SearchUtils");
    tmp6 = _require;
  }
  isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
}
function syncAutocomplete(searchContext) {
  const queryString = SearchQueryStore.getQueryString(searchContext, true);
  const tokenizeQueryResult = SearchUtils.tokenizeQuery(queryString);
  const selectionScope = SearchUtils.getSelectionScope(
    tokenizeQueryResult,
    queryString.length - 1,
    queryString.length - 1,
  );
  const result = SearchActionCreatorsDefault.updateAutocompleteQuery({
    searchContext,
    tokens: tokenizeQueryResult,
    cursorScope: selectionScope,
    queryString,
  });
}
const SearchConstants = fn(7994);
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
const SearchPlatformConstants = fn(12496);
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
let apply = apply_mod;
obj.fetchInitialMessagesDebounced = apply.debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.fetchNextMessages = function fetchNextMessages(searchContext, tab, onFetchSuccess) {
  _require = searchContext;
  const queryString = SearchQueryStore.getQueryString(searchContext);
  const searchTabFetchId = require("SearchUtils").getSearchTabFetchId(searchContext, tab, queryString);
  const bound = Math.min(dependencyMap[tab], closure_6);
  const obj = require("SearchUtils");
  const searchTabFetchId1 = require("SearchUtils").getSearchTabFetchId(searchContext, tab, queryString);
  if (!SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId1)) {
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    let flag = !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    if (!flag) {
      flag = isFetching;
    }
    let tabMessages = !flag;
    if (!flag) {
      const obj5 = {
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
      obj5.searchTabs = items;
      obj5.searchQueryString = queryString;
      obj5.getLimit = getNextFetchLimit;
      obj5.getId = function getId(MEDIA) {
        return SearchUtils.getSearchTabFetchId(closure_0, MEDIA, queryString);
      };
      obj5.onFetchStart = onFetchMessagesStart;
      obj5.onFetchSuccess = onFetchSuccess;
      let cursor = SearchMessageStore.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      const obj6 = { cursor };
      obj5.pagination = obj6;
      const obj4 = queryString(12490);
      obj5.trackExactTotalHits = tmp2(1936).SearchResultExactCountEnabled.getSetting();
      obj5.searchMode = constants5.NEWEST;
      tabMessages = obj4.fetchTabMessages(obj5);
      const SearchResultExactCountEnabled2 = tmp2(1936).SearchResultExactCountEnabled;
    }
    return tabMessages;
  } else {
    const cursor1 = SearchMessageStore.getCursor(searchTabFetchId1);
    const totalCount = SearchMessageStore.getTotalCount(searchTabFetchId1);
    let messages = SearchMessageStore.getMessages(searchTabFetchId1);
    if (SearchResultExactCountEnabled.getSetting()) {
      let tmp12 = null != cursor1 && null != totalCount && null != messages;
      if (tmp12) {
        messages = messages.length;
        tmp12 = messages < totalCount;
      }
    } else if (null == totalCount) {
      const tmp10 = null != cursor1;
    }
    SearchResultExactCountEnabled = tmp2(1936).SearchResultExactCountEnabled;
  }
  const obj2 = require("SearchUtils");
};
obj.syncAutocomplete = syncAutocomplete;
let apply = apply_mod;
obj.syncAutocompleteDebounced = apply.debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.navigateToSearchWithPrefetch = function navigateToSearchWithPrefetch(rootNavigationRef, searchContext) {
  const result = SearchActionCreatorsDefault.initializeAutocomplete(searchContext);
  const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(searchContext);
  fetchInitialMessages(searchContext);
  rootNavigationRef.navigate("search", { searchContext });
};
obj.subscribeSearchQueryState = function subscribeSearchQueryState(searchContext, fn, fn2, arg3) {
  closure_0 = searchContext;
  closure_1 = fn;
  closure_2 = fn2;
  let tmp = arg3;
  function callback() {
    const tmp = f94164(SearchQueryStore.getManager(closure_0));
    if (null == closure_3) {
      closure_3 = tmp;
      f94165(tmp, closure_3);
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
  const f94164 = (getTextInputValue) => ({
    textInputValue: getTextInputValue.getTextInputValue(),
    textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput(),
  });
  const f94165 = (textInputValue, textInputValue2) => {
    textInputValue = undefined;
    if (textInputValue2 != null) {
      textInputValue = textInputValue2.textInputValue;
    }
    searchContext(textInputValue.textInputValue, textInputValue, textInputValue.textInputChangedFromInput);
  };
  function callback() {
    const tmp = f94164(SearchQueryStore.getManager(closure_0));
    if (null == closure_3) {
      closure_3 = tmp;
      f94165(tmp, closure_3);
    }
  }
  const manager = callback.getManager(searchContext);
  const obj2 = {
    textInputValue: manager.getTextInputValue(),
    textInputChangedFromInput: manager.getTextValueChangedFromInput(),
  };
  closure_3 = obj2;
  if (arg2) {
    flag = true;
  }
  if (flag) {
    debounceResult(obj2.textInputValue, undefined, obj2.textInputChangedFromInput);
  }
  callback.addChangeListener(callback);
  return () => SearchQueryStore.removeChangeListener(callback);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(searchContext, items1) {
  guildIdFromSearchContext = guildIdFromSearchContext(12483).getGuildIdFromSearchContext(searchContext);
  const items = [];
  let item = items1.forEach((getContentMessage) => {
    closure_0 = getContentMessage;
    mediaIndex = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (attachments != null) {
      const item = attachments.forEach((attachment, index) => {
        if (!obj.isThumbnailAttachment(attachment)) {
          if (tmpResult.isValidImageAttachment(attachment)) {
            const tmpResult3 = MediaSourceUtil;
            const result = tmpResult3.extractMediaFromAttachment(
              attachment,
              closure_0,
              index,
              guildIdFromSearchContext,
            );
            if (null != result) {
              const obj2 = {
                type: constants3.ATTACHMENT,
                attachment,
                messageId: null,
                channelId: null,
                author: null,
                mediaIndex: null,
                sources: null,
              };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = closure_0);
              obj2.mediaIndex = mediaIndex;
              obj2.sources = result;
              items.push(obj2);
              mediaIndex = mediaIndex + 1;
            }
          } else {
            MediaSourceUtil;
          }
          tmpResult = MediaSourceUtil;
        }
        obj = MediaSourceUtil;
      });
    }
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const item1 = embeds.forEach((embed, index) => {
        if (obj.isValidImageEmbed(embed)) {
          const tmpResult = MediaSourceUtil;
          const result = tmpResult.extractMediaFromEmbed(
            embed,
            closure_0,
            contentMessage,
            index,
            guildIdFromSearchContext,
          );
          if (null != result) {
            const obj2 = {
              type: constants3.EMBED,
              embed,
              messageId: null,
              channelId: null,
              author: null,
              mediaIndex: null,
              sources: null,
            };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = closure_0);
            obj2.mediaIndex = mediaIndex;
            obj2.sources = result;
            items.push(obj2);
            mediaIndex = mediaIndex + 1;
          }
        } else {
          MediaSourceUtil;
        }
        obj = MediaSourceUtil;
      });
    }
    let result = guildIdFromSearchContext(8395).extractMediaFromMessageComponents(
      getContentMessage,
      contentMessage,
      closure_0,
    );
    const iter = result[Symbol.iterator]();
    let obj = guildIdFromSearchContext(8395);
    while (iter !== undefined) {
      let obj6 = {
        type: constants.COMPONENT,
        messageId: null,
        channelId: null,
        author: null,
        mediaIndex: null,
        sources: null,
        unfurledMediaItem: null,
      };
      ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
      obj6.mediaIndex = mediaIndex;
      ({ sources: obj2.sources, unfurledMediaItem: obj2.unfurledMediaItem } = nextResult);
      let arr = mediaIndex.push(obj6);
      mediaIndex = mediaIndex + 1;
      continue;
    }
    nextResult = iter.next();
    if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
      const obj7 = { type: constants.AUDIO, messageId: null, channelId: null, author: null, mediaIndex: null };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
      obj7.mediaIndex = mediaIndex;
      mediaIndex.push(obj7);
      mediaIndex = mediaIndex + 1;
    }
    obj3 = guildIdFromSearchContext(1385);
  });
  return items;
};
export const getFiles = function getFiles(getContentMessage) {
  const items = [];
  const contentMessage = getContentMessage.getContentMessage();
  const attachments = contentMessage.attachments;
  if (attachments != null) {
    const item = attachments.forEach((attachment, fileIndex) => {
      if (!obj.isValidImageAttachment(attachment)) {
        if (!tmpResult.isValidVideoAttachment(attachment)) {
          const push = items.push;
          const obj2 = {
            type: null,
            messageId: null,
            channelId: null,
            author: null,
            fileIndex: null,
            attachment: null,
          };
          if (tmpResult2.hasFlag(contentMessage.flags, constants4.IS_VOICE_MESSAGE)) {
            obj2.type = constants.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          } else {
            obj2.type = constants.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          }
          tmpResult2 = FlagUtils;
        }
        tmpResult = MediaSourceUtil;
      }
      items.push({
        type: constants.MEDIA_ATTACHMENT,
        messageId: getContentMessage.id,
        channelId: getContentMessage.channel_id,
        author: getContentMessage.author,
        fileIndex,
        attachment,
      });
      obj = MediaSourceUtil;
      const obj3 = {
        type: constants.MEDIA_ATTACHMENT,
        messageId: getContentMessage.id,
        channelId: getContentMessage.channel_id,
        author: getContentMessage.author,
        fileIndex,
        attachment,
      };
    });
  }
  return items;
};
export const getLinks = function getLinks(searchContext, getContentMessage) {
  _require = getContentMessage;
  const guildIdFromSearchContext = require("SearchUtils").getGuildIdFromSearchContext(searchContext);
  items = [];
  const contentMessage = getContentMessage.getContentMessage();
  let linkIndex = 0;
  const embeds = contentMessage.embeds;
  if (embeds != null) {
    const item = embeds.forEach((embed, index) => {
      if (obj.isValidImageEmbed(embed)) {
        const tmpResult = MediaSourceUtil;
        const result = tmpResult.extractMediaFromEmbed(
          embed,
          closure_0,
          contentMessage,
          index,
          guildIdFromSearchContext,
        );
        if (null != result) {
          const obj2 = {
            type: constants2.EMBED,
            messageId: null,
            channelId: null,
            author: null,
            linkIndex: null,
            sources: null,
            embed: null,
          };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = closure_0);
          obj2.linkIndex = linkIndex;
          obj2.sources = result;
          obj2.embed = embed;
          items.push(obj2);
          linkIndex = linkIndex + 1;
        }
      } else {
        MediaSourceUtil;
      }
      obj = MediaSourceUtil;
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
