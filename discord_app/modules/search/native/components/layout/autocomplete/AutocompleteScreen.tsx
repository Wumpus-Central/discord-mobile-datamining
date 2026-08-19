// === Module 15945: ? ===

// Module 15945
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleUserSearchResults from "handleUserSearchResults" /* 11513 */;
import prototype from "prototype" /* 11510 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
({ SearchListItemTypes: c10, SearchQueryTagTypes: unpackModuleId, USER_ESTIMATED_ITEM_SIZE: closure_12 } = MessageEmbedTypes);
({ SearchPopoutModes: map1, SearchTokenTypes: closure_14 } = ME);
let closure_16 = [];
const memoResult = importAllResult.memo(function AutocompleteScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let first;
  let fullscreenPlaceholderCount;
  let callback;
  let callback3;
  let obj = searchContext(first[10]);
  let items = [callback3];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => callback3.getState(searchContext), items1, searchContext(first[10]).statesWillNeverBeEqual);
  const tmp4 = callback(fullscreenPlaceholderCount.useState(false), 2);
  first = tmp4[0];
  obj1 = searchContext(first[10]);
  const items2 = [closure_9];
  const items3 = [searchContext];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_9.isTextInputValueEmpty(searchContext), items3);
  let obj2 = searchContext(first[11]);
  obj = { placeholderHeight: closure_12, numColumns: 1 };
  fullscreenPlaceholderCount = obj2.useFullscreenPlaceholderCount(obj);
  const items4 = [searchContext];
  callback = fullscreenPlaceholderCount.useCallback(() => {
    stateFromStores(first[12]).syncAutocomplete(searchContext);
    const obj = stateFromStores(first[12]);
    const initialMessages = stateFromStores(first[12]).fetchInitialMessages(searchContext);
  }, items4);
  const items5 = [callback, searchContext];
  const callback1 = fullscreenPlaceholderCount.useCallback((arg0) => {
    closure_0 = arg0;
    const prefixTag = closure_1_9.getPrefixTag(closure_0);
    if (null != prefixTag) {
      let obj = stateFromStores(first[13]);
      obj.updateSearchQuery(tmp, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: closure_1_11.ANSWER, text: closure_0 });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      obj = { searchContext: null, searchTokenType: null, location: null };
      obj[0] = tmp;
      ({ searchTokenType: obj3[1], location: obj3[2] } = prefixTag);
      stateFromStores(first[14]).trackSearchFilterAdd(obj);
      callback();
      const obj2 = stateFromStores(first[14]);
    }
  }, items5);
  const items6 = [callback, searchContext];
  const callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = callback2.getUser(arg0);
    if (null != user) {
      const prefixTag = closure_1_9.getPrefixTag(user);
      if (null != prefixTag) {
        let obj = stateFromStores(first[13]);
        obj.updateSearchQuery(tmp9, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: closure_1_11.ANSWER, text: stateFromStores(first[15]).getUserTag(user), userId: user.id };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        obj = { searchContext: null, searchTokenType: null, location: null };
        obj[0] = tmp9;
        ({ searchTokenType: obj3[1], location: obj3[2] } = prefixTag);
        stateFromStores(first[14]).trackSearchFilterAdd(obj);
        callback();
        const obj2 = stateFromStores(first[14]);
      }
    }
  }, items6);
  const items7 = [callback, searchContext];
  callback3 = fullscreenPlaceholderCount.useCallback((arg0) => {
    closure_0 = arg0;
    const channel = callback.getChannel(arg0);
    if (null != channel) {
      const prefixTag = closure_1_9.getPrefixTag(closure_0);
      if (null != prefixTag) {
        let userTag = searchContext(first[16]).computeChannelName(channel, callback2, callback1);
        if (channel.isDM()) {
          const user = callback2.getUser(channel.getRecipientId());
          if (null != user) {
            userTag = stateFromStores(first[15]).getUserTag(user);
            const obj7 = stateFromStores(first[15]);
          }
        }
        const obj5 = searchContext(first[16]);
        stateFromStores(first[13]).updateSearchQuery(tmp8, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: closure_1_11.ANSWER, text: callback(first[17]).quoteChannelName(closure_1), channelId: callback };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        const obj2 = stateFromStores(first[13]);
        let obj = { searchContext: null, searchTokenType: null, location: null };
        obj[0] = tmp8;
        ({ searchTokenType: obj4[1], location: obj4[2] } = prefixTag);
        stateFromStores(first[14]).trackSearchFilterAdd(obj);
        callback();
        const obj3 = stateFromStores(first[14]);
      }
    }
  }, items7);
  const items8 = [searchContext];
  const effect = fullscreenPlaceholderCount.useEffect(() => stateFromStores(first[12]).subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
    const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
    let prefixTag = isAutocompleteVisible.getPrefixTag();
    if (prefixTag == null) {
      prefixTag = null;
    }
    obj[2] = prefixTag;
    return obj;
  }, (isAutocompleteVisible, textInputValue) => {
    if (isAutocompleteVisible.isAutocompleteVisible) {
      textInputValue = undefined;
      if (textInputValue != null) {
        textInputValue = textInputValue.textInputValue;
      }
      let tmp6 = tmp === textInputValue;
      if (tmp6) {
        let prefixTag;
        if (textInputValue != null) {
          prefixTag = textInputValue.prefixTag;
        }
        tmp6 = tmp2 === prefixTag;
      }
      if (!tmp6) {
        callback(true);
      }
    }
  }, true), items8);
  const items9 = [stateFromStores.autocompletes];
  const effect1 = fullscreenPlaceholderCount.useEffect(() => {
    callback(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    const items = [];
    if (set1) {
      for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
        let obj = { type: null, key: null };
        obj[0] = closure_1_10.MESSAGE_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "message-placeholder-" + num2;
        let arr = items.push(obj);
      }
      return items;
    } else {
      const _Set = Set;
      obj = searchContext(first[18]);
      const set = new Set(obj.getSearchQueryUserIds(items));
      const _Set2 = Set;
      set1 = new Set(searchContext(first[18]).getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((item, index) => {
        if (mode.type === closure_2_13.FILTER) {
          ({ results, group: items } = item);
          if (0 !== results.length) {
            item = results.forEach((item, index) => {
              ({ user, channel, text } = item);
              let obj = searchContext(first[18]);
              const toSearchListUserItemResult = obj.toSearchListUserItem(items, user, callback2);
              let id;
              if (user != null) {
                id = user.id;
              }
              let hasItem = null == toSearchListUserItemResult || null == id;
              if (!hasItem) {
                hasItem = set.has(id);
              }
              if (!hasItem) {
                hasItem = callback1.isBlockedOrIgnored(id);
              }
              if (!hasItem) {
                set.add(id);
                closure_1_0.push(toSearchListUserItemResult);
              }
              let tmpResult = searchContext(first[18]);
              const result = tmpResult.toSearchListChannelItem(channel, callback3);
              let id1;
              if (channel != null) {
                id1 = channel.id;
              }
              let hasItem1 = null == result || null == id1;
              if (!hasItem1) {
                hasItem1 = set1.has(id1);
              }
              if (!hasItem1) {
                set1.add(id1);
                closure_1_0.push(result);
              }
              let tmp22 = closure_0 === closure_3_14.FILTER_HAS;
              if (tmp22) {
                tmp22 = null != text;
              }
              if (tmp22) {
                obj = { type: null, props: null };
                obj[0] = closure_3_10.GENERIC;
                obj = { text: null, icon: null, onPress: null };
                obj[0] = text;
                tmpResult = searchContext(first[18]);
                obj[1] = tmpResult.getSearchFilterHasIcon(text);
                obj[2] = callback1;
                obj[1] = obj;
                closure_1_0.push(obj);
              }
              if (tmp27) {
                obj1 = { type: null, props: null };
                obj1[0] = closure_3_10.GENERIC;
                const obj2 = { text: null, icon: null, onPress: null };
                obj2[0] = text;
                obj2[1] = searchContext(first[18]).getSearchFilterAuthorTypeIcon(text);
                obj2[2] = callback1;
                obj1[1] = obj2;
                closure_1_0.push(obj1);
                const tmpResult1 = searchContext(first[18]);
              }
              tmp27 = closure_0 === closure_3_14.FILTER_AUTHOR_TYPE && null != text;
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== closure_1_13.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const token = new searchContext(first[19]).Token(tmp32);
            if (token.type === closure_1_14.ANSWER_USERNAME_FROM) {
              let tmp2Result = searchContext(first[20]);
              if (tmp2Result.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  tmp2Result = searchContext(first[18]);
                  let toSearchListUserItemResult = tmp2Result.toSearchListUserItem(tmp4, user, callback2);
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                  let isBlockedOrIgnoredResult = null == toSearchListUserItemResult || null == id || set.has(id);
                  if (!isBlockedOrIgnoredResult) {
                    isBlockedOrIgnoredResult = callback1.isBlockedOrIgnored(id);
                  }
                  if (!isBlockedOrIgnoredResult) {
                    set.add(id);
                    items.push(toSearchListUserItemResult);
                  }
                }
              }
            }
            if (token.type === closure_1_14.ANSWER_IN) {
              if (tmp2Result1.isValidChannelAutocomplete(token, tmp4)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((item, index) => {
                    const channel = callback.getChannel(item);
                    const result = searchContext(first[18]).toSearchListChannelItem(channel, callback3);
                    let id;
                    if (channel != null) {
                      id = channel.id;
                    }
                    let hasItem = null == result || null == id;
                    if (!hasItem) {
                      hasItem = set1.has(id);
                    }
                    if (!hasItem) {
                      set1.add(id);
                      items.push(result);
                    }
                    const obj = searchContext(first[18]);
                  });
                }
              }
              tmp2Result1 = searchContext(first[20]);
            }
          }
        }
      }
      let tmp25 = items;
      if (items.length <= 0) {
        tmp25 = closure_1_16;
      }
      return tmp25;
    }
  }, items10);
  const messageTabCountsErrorText = searchContext(first[21]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: null };
    obj[0] = messageTabCountsErrorText;
    let tmp18 = jsx(stateFromStores(tmp2[22]), { text: null });
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        obj1 = { text: null };
        const intl2 = tmp(tmp2[23]).intl;
        obj1[0] = intl2.string(tmp(tmp2[23]).t["E4HqQ+"]);
        tmp18 = jsx(stateFromStores(tmp2[22]), { text: null });
        const tmp23 = stateFromStores(tmp2[22]);
      }
    }
    if (!stateFromStores1) {
      if (0 === memo.length) {
        if (!first) {
          obj2 = { text: null };
          const intl = tmp(tmp2[23]).intl;
          obj2[0] = intl.string(tmp(tmp2[23]).t.Dr1vko);
          tmp18 = jsx(stateFromStores(tmp2[22]), { text: null });
          const tmp17 = stateFromStores(tmp2[22]);
        }
      }
    }
    let obj3 = { data: null };
    obj3[0] = memo;
    tmp18 = jsx(stateFromStores(tmp2[24]), { data: null });
  }
  return tmp18;
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default memoResult;