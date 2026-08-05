import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ClydeIcon } from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import { LinkIcon } from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import { isDiscordProxiedAssetUrl } from "../../../utils/URLUtils.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";
import { SearchActionCreators } from "../SearchActionCreators.tsx";
import { SearchTokenTypes } from "../SearchUtils.tsx";
import { SearchPlatformActionCreators } from "SearchPlatformActionCreators.tsx";
import { Tracking } from "tracking/Tracking.tsx";
// discord_app/modules/search/native/SearchPlatformUtils.tsx
import handleReaction from "handleReaction";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import SEARCH_TEXT_INPUT_DEBOUNCE_TIME from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import ME from "ME";
import importDefaultResult from "isDiscordProxiedAssetUrl";
import importDefaultResult1 from "isDiscordProxiedAssetUrl";

let SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function performKeyboardAwareNavigation(arg0) {
  const _require = arg0;
  if (obj.getKeyboardIsOpen()) {
    let tmpResult = tmp(500);
    if (tmpResult.isIOS()) {
      tmpResult = tmp(1844);
      const result = tmpResult.dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => callback(), 100);
    }
  }
  arg0();
}
function delayUntilNavigationComplete(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => callback(), 200);
}
function getUrlIcon(target) {
  if (null == target) {
    return LinkIcon /* LinkIcon */.LinkIcon;
  } else {
    if (null == obj.safeParseWithQuery(target)) {
      return LinkIcon /* LinkIcon */.LinkIcon;
    } else {
      if (tmp10Result.isDiscordUrl(target)) {
        return ClydeIcon /* ClydeIcon */.ClydeIcon;
      } else {
        let num = 0;
        if (0 < length.length) {
          const REGEX = tmp2.REGEX;
          while (null == REGEX.exec(target)) {
            num = num + 1;
          }
          return length[num].Icon;
        }
        return LinkIcon /* LinkIcon */.LinkIcon;
      }
      tmp10Result = tmp10(1467);
    }
    obj = isDiscordProxiedAssetUrl;
    tmp10 = importDefault;
  }
}
function getGridItemBorderStyles(numItems) {
  let itemIndex;
  let numColumns;
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    let obj = { borderTopLeftRadius: null };
    obj[0] = Themes.radii.lg;
    let tmp4 = obj;
  } else if (itemIndex === numColumns - 1) {
    obj = { borderTopRightRadius: null };
    obj[0] = Themes.radii.lg;
    tmp4 = obj;
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        const obj1 = { borderBottomLeftRadius: null };
        obj1[0] = Themes.radii.lg;
        tmp4 = obj1;
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      obj = { borderBottomRightRadius: null };
      obj[0] = Themes.radii.lg;
      tmp4 = obj;
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(numItems) {
  let itemIndex;
  let numColumns;
  ({ itemIndex, numColumns } = numItems);
  let obj = {};
  obj = { itemIndex, numItems: numItems.numItems, numColumns };
  const merged = Object.assign(getGridItemBorderStyles(obj));
  const result = numItems.spacing * (numColumns - 1) / numColumns;
  const result1 = itemIndex % numColumns;
  if (0 === result1) {
    obj = { marginEnd: null };
    obj[0] = result;
    let obj2 = obj;
  } else if (numColumns - 1 === result1) {
    const obj1 = { marginStart: null };
    obj1[0] = result;
    obj2 = obj1;
  } else {
    obj2 = { marginHorizontal: null };
    obj2[0] = result / 2;
  }
  const merged1 = Object.assign(obj2);
  return obj;
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = numColumns.spacing * (numColumns - 1) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    let obj = { marginEnd: null };
    obj[0] = result;
    return obj;
  } else if (numColumns - 1 === result1) {
    obj = { marginStart: null };
    obj[0] = result;
    return obj;
  } else {
    obj = { marginHorizontal: null };
    obj[0] = result / 2;
    return obj;
  }
}
function toSearchBarTag(id) {
  return { id: id.text, text: id.text };
}
function getInitialFetchLimit(arg0) {
  return Math.min(dependencyMap[arg0], closure_6);
}
function getNextFetchLimit(arg0) {
  return Math.min(2 * dependencyMap[arg0], closure_6);
}
function onInitialFetchMessagesSuccess(tabEntries) {
  tabEntries = tabEntries.tabEntries;
  if (tabEntries.every((arg0) => {
    let tmp;
    [, tmp] = arg0;
    let tmp2 = 0 === tmp.total_results;
    if (!tmp2) {
      tmp2 = null == tmp.total_results;
    }
    return tmp2;
  })) {
    let obj = Tracking;
    obj = { searchContext: null };
    obj[0] = tabEntries.searchContext;
    const result = obj.trackSearchEmptyMessageResult(obj);
  }
}
function onFetchMessagesStart(searchQueryString) {
  searchQueryString = searchQueryString.searchQueryString;
  SearchPlatformActionCreators.updateSearchQuery(searchQueryString.searchContext, (setSearchResultsQuery) => setSearchResultsQuery.setSearchResultsQuery(searchQueryString));
}
function fetchInitialMessages(closure_0) {
  const _require = closure_0;
  const queryString = store2.getQueryString(closure_0);
  if (isInitialSearchQueryResult) {
    const type = closure_0.type;
    if (constants3.GUILD_CHANNEL !== type) {
      if (constants3.CHANNEL !== type) {
        let tmp4 = closure_8;
      }
    }
    tmp4 = closure_5;
  } else {
    let obj = _SearchTokenTypes;
    const searchTabFetchId = obj.getSearchTabFetchId(closure_0, tmp3[0], queryString);
    let obj1 = store;
    if (!store.getIsFetching(searchTabFetchId)) {
      const result = queryString(11631).clearAllSearchMesssages();
      const obj3 = queryString(11631);
      obj = { searchContext: null };
      obj[0] = closure_0;
      queryString(11644).trackSearchStarted(obj);
      const obj4 = queryString(11644);
      obj = { searchContext: null, searchTabs: null, searchQueryString: null, getId: null, getLimit: null, onFetchStart: null, onFetchSuccess: null, pagination: null, trackExactTotalHits: null, searchMode: null };
      obj[0] = closure_0;
      obj[1] = tmp3;
      obj[2] = queryString;
      obj[3] = function getId(closure_1) {
        return callback(outer1_2[5]).getSearchTabFetchId(callback, closure_1, queryString);
      };
      obj[4] = getInitialFetchLimit;
      obj[5] = onFetchMessagesStart;
      obj[6] = onInitialFetchMessagesSuccess;
      let cursor = obj1.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      obj1 = { cursor: null };
      obj1[0] = cursor;
      obj[7] = obj1;
      const obj6 = queryString(11631);
      obj[8] = _explicitContentFromProto.SearchResultExactCountEnabled.getSetting();
      obj[9] = constants2.NEWEST;
      const tabMessages = obj6.fetchTabMessages(obj);
      const SearchResultExactCountEnabled = _explicitContentFromProto.SearchResultExactCountEnabled;
    }
  }
}
function syncAutocomplete(closure_0) {
  const queryString = store2.getQueryString(closure_0, true);
  let obj = SearchTokenTypes /* SearchTokenTypes */;
  const tokenizeQueryResult = obj.tokenizeQuery(queryString);
  const selectionScope = SearchTokenTypes /* SearchTokenTypes */.getSelectionScope(tokenizeQueryResult, queryString.length - 1, queryString.length - 1);
  const obj2 = SearchTokenTypes /* SearchTokenTypes */;
  obj = { searchContext: closure_0, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString };
  const result = SearchActionCreators.updateAutocompleteQuery(obj);
}
({ CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: c5, MAX_SEARCH_RESULTS_LIMIT: closure_6, MESSAGE_SEARCH_RESULT_TABS: error, SEARCH_INITIAL_MESSAGE_TABS: metroImportAll, SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: c9, SearchFileTypes: c10, SearchLinkTypes: unpackModuleId, SearchMediaTypes: closure_12 } = MessageEmbedTypes);
({ PLATFORM_REGEX_ICON_PAIRS: map1, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
({ MessageFlags: closure_14, SearchModes: closure_15, SearchTypes: closure_16 } = ME);
let obj = { performKeyboardAwareNavigation, delayUntilNavigationComplete, getUrlIcon, getGridItemBorderStyles, getMediaGridItemStyles, getGridItemSpacingStyles, toSearchBarTag, fetchInitialMessages, fetchInitialMessagesDebounced: null, fetchNextMessages: null, syncAutocomplete: null, syncAutocompleteDebounced: null, navigateToSearchWithPrefetch: null, subscribeSearchQueryState: null, subscribeTextInputValue: null };
obj[8] = require("isDiscordProxiedAssetUrl").debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj[9] = function fetchNextMessages(searchContext, tab, arg2) {
  const _require = searchContext;
  const queryString = store2.getQueryString(searchContext);
  let obj = _SearchTokenTypes;
  const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, queryString);
  const bound = Math.min(dependencyMap[tab], closure_6);
  const searchTabFetchId1 = _SearchTokenTypes.getSearchTabFetchId(searchContext, tab, queryString);
  if (!store.getIsInitialFetchComplete(searchTabFetchId1)) {
    const isFetching = obj3.getIsFetching(searchTabFetchId);
    let flag = false;
    flag = !obj3.getIsInitialFetchComplete(searchTabFetchId);
    if (!flag) {
      flag = isFetching;
    }
    let tabMessages = !flag;
    if (!flag) {
      obj = { searchContext: null, searchTabs: null, searchQueryString: null, getLimit: null, getId: null, onFetchStart: null, onFetchSuccess: null, pagination: null, trackExactTotalHits: null, searchMode: null };
      obj[0] = searchContext;
      const items = [tab];
      obj[1] = items;
      obj[2] = queryString;
      obj[3] = getNextFetchLimit;
      obj[4] = function getId(closure_1) {
        return searchContext(outer1_2[5]).getSearchTabFetchId(searchContext, closure_1, queryString);
      };
      obj[5] = onFetchMessagesStart;
      obj[6] = arg2;
      let cursor = obj3.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      obj = { cursor: null };
      obj[0] = cursor;
      obj[7] = obj;
      const obj4 = queryString(11631);
      obj[8] = tmp2(3958).SearchResultExactCountEnabled.getSetting();
      obj[9] = constants2.NEWEST;
      tabMessages = obj4.fetchTabMessages(obj);
      const SearchResultExactCountEnabled2 = tmp2(3958).SearchResultExactCountEnabled;
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
      let tmp10 = tmp12;
    } else if (null == totalCount) {
      tmp10 = null != cursor1;
    }
    SearchResultExactCountEnabled = tmp2(3958).SearchResultExactCountEnabled;
  }
};
obj[10] = syncAutocomplete;
obj[11] = require("isDiscordProxiedAssetUrl").debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj[12] = function navigateToSearchWithPrefetch(closure_8, closure_9) {
  let obj = SearchActionCreators;
  const result = obj.initializeAutocomplete(closure_9);
  const result1 = SearchPlatformActionCreators.initializeSearchQuery(closure_9);
  fetchInitialMessages(closure_9);
  obj = { searchContext: closure_9 };
  closure_8.navigate("search", obj);
};
obj[13] = function subscribeSearchQueryState(searchContext, arg1, arg2, arg3) {
  let closure_0 = searchContext;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let tmp = arg3;
  function callback() {
    const tmp = f87748(callback.getManager(closure_0));
    if (null == obj) {
      f87749(tmp, tmp);
    }
  }
  const tmp2 = arg1(callback.getManager(searchContext));
  let handleReaction = tmp2;
  if (arg3) {
    tmp = null != tmp2;
  }
  if (tmp) {
    arg2(handleReaction, undefined);
  }
  callback.addChangeListener(callback);
  return () => callback.removeChangeListener(callback);
};
obj[14] = function subscribeTextInputValue(closure_0, debounceResult, arg2) {
  closure_0 = debounceResult;
  let flag = arg2;
  const f87748 = (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput() });
  const f87749 = (textInputValue, textInputValue2) => {
    textInputValue = undefined;
    if (textInputValue2 != null) {
      textInputValue = textInputValue2.textInputValue;
    }
    closure_0(textInputValue.textInputValue, textInputValue, textInputValue.textInputChangedFromInput);
  };
  function callback() {
    const tmp = f87748(callback.getManager(closure_0));
    if (null == obj) {
      f87749(tmp, tmp);
    }
  }
  let obj = callback;
  const manager = callback.getManager(closure_0);
  obj = { textInputValue: manager.getTextInputValue(), textInputChangedFromInput: manager.getTextValueChangedFromInput() };
  if (arg2) {
    flag = true;
  }
  if (flag) {
    debounceResult(obj.textInputValue, undefined, obj.textInputChangedFromInput);
  }
  obj.addChangeListener(callback);
  return () => callback.removeChangeListener(callback);
};
let result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(items, items1) {
  guildIdFromSearchContext = guildIdFromSearchContext(11624).getGuildIdFromSearchContext(items);
  items = [];
  let item = items1.forEach((getContentMessage) => {
    let closure_0 = getContentMessage;
    let items = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (attachments != null) {
      const item = attachments.forEach((flags, index) => {
        let obj = guildIdFromSearchContext(outer2_2[6]);
        if (!obj.isThumbnailAttachment(flags)) {
          let tmpResult = tmp(tmp2[6]);
          if (tmpResult.isValidImageAttachment(flags)) {
            tmpResult = tmp(tmp2[6]);
            const result = tmpResult.extractMediaFromAttachment(flags, closure_0, index, closure_0);
            if (null != result) {
              obj = { type: null, attachment: null, messageId: null, channelId: null, author: null, mediaIndex: null, sources: null };
              obj[0] = outer2_12.ATTACHMENT;
              obj[1] = flags;
              ({ id: obj5[2], channel_id: obj5[3], author: obj5[4] } = tmp4);
              obj[5] = arr;
              obj[6] = result;
              arr = arr.push(obj);
              arr = arr + 1;
            }
            tmp4 = closure_0;
          } else {
            const tmpResult1 = tmp(tmp2[6]);
          }
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const item1 = embeds.forEach((image) => {
        let obj = guildIdFromSearchContext(outer2_2[6]);
        if (obj.isValidImageEmbed(image)) {
          let tmpResult = tmp(tmp2[6]);
          const result = tmpResult.extractMediaFromEmbed(image, closure_0, contentMessage, arg1, closure_0);
          if (null != result) {
            obj = { type: null, embed: null, messageId: null, channelId: null, author: null, mediaIndex: null, sources: null };
            obj[0] = outer2_12.EMBED;
            obj[1] = image;
            ({ id: obj4[2], channel_id: obj4[3], author: obj4[4] } = tmp4);
            obj[5] = arr;
            obj[6] = result;
            arr = arr.push(obj);
            arr = arr + 1;
          }
          tmp4 = closure_0;
        } else {
          tmpResult = tmp(tmp2[6]);
        }
      });
    }
    let obj = guildIdFromSearchContext(outer1_2[6]);
    let result = obj.extractMediaFromMessageComponents(getContentMessage, contentMessage, closure_0);
    const iter = result[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp6 = items;
      obj = { type: null, messageId: null, channelId: null, author: null, mediaIndex: null, sources: null, unfurledMediaItem: null };
      let tmp7 = outer1_12;
      obj[0] = outer1_12.COMPONENT;
      ({ id: obj2[1], channel_id: obj2[2], author: obj2[3] } = getContentMessage);
      let tmp8 = items;
      obj[4] = items;
      ({ sources: obj2[5], unfurledMediaItem: obj2[6] } = nextResult);
      let arr = items.push(obj);
      let tmp10 = items;
      items = items + 1;
      continue;
    }
    nextResult = iter.next();
    if (obj3.hasFlag(contentMessage.flags, outer1_14.IS_VOICE_MESSAGE)) {
      obj = { type: null, messageId: null, channelId: null, author: null, mediaIndex: null };
      obj[0] = outer1_12.AUDIO;
      ({ id: obj4[1], channel_id: obj4[2], author: obj4[3] } = getContentMessage);
      obj[4] = items;
      items.push(obj);
      items = items + 1;
    }
  });
  return items;
};
export const getFiles = function getFiles(getContentMessage) {
  let closure_0 = getContentMessage;
  const items = [];
  const contentMessage = getContentMessage.getContentMessage();
  const attachments = contentMessage.attachments;
  if (attachments != null) {
    const item = attachments.forEach((attachment, fileIndex) => {
      let obj = getContentMessage(contentMessage[6]);
      if (!obj.isValidImageAttachment(attachment)) {
        let tmpResult = tmp(tmp2[6]);
        if (!tmpResult.isValidVideoAttachment(attachment)) {
          tmpResult = tmp(tmp2[7]);
          const push = items.push;
          obj = { type: null, messageId: null, channelId: null, author: null, fileIndex: null, attachment: null };
          if (tmpResult.hasFlag(contentMessage.flags, outer1_14.IS_VOICE_MESSAGE)) {
            obj[0] = tmp6.AUDIO;
            ({ id: obj4[1], channel_id: obj4[2], author: obj4[3] } = getContentMessage);
            obj[4] = fileIndex;
            obj[5] = attachment;
            push(obj);
          } else {
            obj[0] = tmp6.ATTACHMENT;
            ({ id: obj4[1], channel_id: obj4[2], author: obj4[3] } = getContentMessage);
            obj[4] = fileIndex;
            obj[5] = attachment;
            push(obj);
          }
        }
      }
      obj = { type: outer1_10.MEDIA_ATTACHMENT, messageId: getContentMessage.id, channelId: getContentMessage.channel_id, author: getContentMessage.author, fileIndex, attachment };
      items.push(obj);
    });
  }
  return items;
};
export const getLinks = function getLinks(items, getContentMessage) {
  const _require = getContentMessage;
  let obj = _require(items[5]);
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
  items = [];
  const contentMessage = getContentMessage.getContentMessage();
  let c4 = 0;
  const embeds = contentMessage.embeds;
  if (embeds != null) {
    const item = embeds.forEach((image) => {
      let obj = getContentMessage(items[6]);
      if (obj.isValidImageEmbed(image)) {
        let tmpResult = tmp(tmp2[6]);
        const result = tmpResult.extractMediaFromEmbed(image, getContentMessage, contentMessage, arg1, guildIdFromSearchContext);
        if (null != result) {
          obj = { type: null, messageId: null, channelId: null, author: null, linkIndex: null, sources: null, embed: null };
          obj[0] = outer1_11.EMBED;
          ({ id: obj4[1], channel_id: obj4[2], author: obj4[3] } = tmp4);
          obj[4] = prototype;
          obj[5] = result;
          obj[6] = image;
          items.push(obj);
          prototype = prototype + 1;
        }
        tmp4 = getContentMessage;
      } else {
        tmpResult = tmp(tmp2[6]);
      }
    });
  }
  if (0 === items.length) {
    obj = { type: null, messageId: null, channelId: null, author: null, linkIndex: 0 };
    obj[0] = constants.TEXT;
    ({ id: obj2[1], channel_id: obj2[2], author: obj2[3] } = getContentMessage);
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