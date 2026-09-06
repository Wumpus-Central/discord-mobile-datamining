// === Module 16724: ? ===

// Module 16724
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1957 */;
import closure_6 from "markAllUserIdListsStale" /* 4209 */;
import closure_7 from "mergeGuildAvatar" /* 1371 */;
import closure_8 from "handleUserSearchResults" /* 12342 */;
import closure_9 from "prototype" /* 12339 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7878 */;
import ME from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
({ SearchListItemTypes: c10, SearchQueryTagTypes: unpackModuleId, USER_ESTIMATED_ITEM_SIZE: closure_12 } = MessageEmbedTypes);
({ SearchPopoutModes: map1, SearchTokenTypes: closure_14 } = ME);
let closure_16 = [];
const memoResult = importAllResult.memo(function AutocompleteScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let first;
  let callback;
  let fullscreenPlaceholderCount;
  callback = undefined;
  let callback1;
  let callback2;
  let callback3;
  let obj = searchContext(first[10]);
  let items = [callback3];
  const items1 = [searchContext];
  stateFromStores = obj.useStateFromStores(items, () => callback3.getState(searchContext), items1, searchContext(first[10]).statesWillNeverBeEqual);
  const tmp4 = callback(fullscreenPlaceholderCount.useState(false), 2);
  first = tmp4[0];
  callback = tmp4[1];
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
  callback1 = fullscreenPlaceholderCount.useCallback((arg0) => {
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
  callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = callback2.getUser(arg0);
    if (null != user) {
      const prefixTag = closure_1_9.getPrefixTag(user);
      if (null != prefixTag) {
        let obj = stateFromStores(first[13]);
        obj.updateSearchQuery(tmp9, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: closure_1_11.ANSWER, text: closure_1_1(closure_1_2[15]).getUserTag(user), userId: user.id };
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
          const user = obj6.getUser(channel.getRecipientId());
          if (null != user) {
            userTag = stateFromStores(tmp11[15]).getUserTag(user);
            const obj7 = stateFromStores(tmp11[15]);
          }
        }
        const obj5 = searchContext(first[16]);
        obj6 = callback2;
        stateFromStores(first[13]).updateSearchQuery(tmp8, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: closure_1_11.ANSWER, text: callback(closure_1_2[17]).quoteChannelName(closure_1), channelId: callback };
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
      let num2 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = { type: null, key: null };
          let tmp28 = closure_1_10;
          obj[0] = closure_1_10.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj[1] = "message-placeholder-" + num2;
          let arr = items.push(obj);
          num2 = num2 + 1;
          let tmp30 = fullscreenPlaceholderCount;
        } while (num2 < fullscreenPlaceholderCount);
      }
      return items;
    } else {
      const _Set = Set;
      obj = searchContext(first[18]);
      const set = new Set(obj.getSearchQueryUserIds(items));
      const _Set2 = Set;
      set1 = new Set(searchContext(first[18]).getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((arg0) => {
        if (mode.type === closure_2_13.FILTER) {
          ({ results, group: items } = arg0);
          if (0 !== results.length) {
            const item = results.forEach((arg0) => {
              ({ user, channel, text } = arg0);
              let obj = searchContext(first[18]);
              const toSearchListUserItemResult = obj.toSearchListUserItem(items, user, closure_2_7);
              let id;
              if (user != null) {
                id = user.id;
              }
              let hasItem = null == toSearchListUserItemResult || null == id;
              if (!hasItem) {
                hasItem = closure_1_1.has(id);
              }
              if (!hasItem) {
                hasItem = closure_2_6.isBlockedOrIgnored(id);
              }
              if (!hasItem) {
                closure_1_1.add(id);
                closure_1_0.push(toSearchListUserItemResult);
              }
              let tmpResult = tmp(tmp2[18]);
              const result = tmpResult.toSearchListChannelItem(channel, closure_2_8);
              let id1;
              if (channel != null) {
                id1 = channel.id;
              }
              let hasItem1 = null == result || null == id1;
              if (!hasItem1) {
                hasItem1 = closure_1_2.has(id1);
              }
              if (!hasItem1) {
                closure_1_2.add(id1);
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
                tmpResult = tmp(tmp2[18]);
                obj[1] = tmpResult.getSearchFilterHasIcon(text);
                obj[2] = closure_2_6;
                obj[1] = obj;
                closure_1_0.push(obj);
              }
              if (tmp27) {
                obj1 = { type: null, props: null };
                obj1[0] = closure_3_10.GENERIC;
                const obj2 = { text: null, icon: null, onPress: null };
                obj2[0] = text;
                obj2[1] = tmp(tmp2[18]).getSearchFilterAuthorTypeIcon(text);
                obj2[2] = closure_2_6;
                obj1[1] = obj2;
                closure_1_0.push(obj1);
                const tmpResult1 = tmp(tmp2[18]);
              }
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== closure_1_13.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const token = new tmp2(tmp3[19]).Token(tmp32);
            if (token.type === closure_1_14.ANSWER_USERNAME_FROM) {
              let tmp2Result = tmp2(tmp3[20]);
              if (tmp2Result.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  tmp2Result = tmp2(tmp3[18]);
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
                  const item1 = data1.forEach((arg0) => {
                    const channel = callback.getChannel(arg0);
                    const result = searchContext(first[18]).toSearchListChannelItem(channel, closure_1_8);
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
                  });
                }
              }
              tmp2Result1 = tmp2(tmp3[20]);
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
let result = require("set").fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default memoResult;