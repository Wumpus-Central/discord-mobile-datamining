// discord_app/modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import useChannelName from "../../../../../channel/useChannelName.tsx";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import search_tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../../../SearchPlatformActionCreators.tsx";
import AutocompleteScreenUtils from "AutocompleteScreenUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SearchAutocompleteStore from "../../../../SearchAutocompleteStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

require = fn;
const SearchConstants = fn(8207);
({ SearchListItemTypes: c10, SearchQueryTagTypes: closure_11, USER_ESTIMATED_ITEM_SIZE: closure_12 } = SearchConstants);
const Constants = fn(1074);
({ SearchPopoutModes: map1, SearchTokenTypes: closure_14 } = Constants);
const jsx = fn(21).jsx;
let closure_16 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default noop.memo(function AutocompleteScreen(searchContext) {
  searchContext = searchContext.searchContext;
  first = undefined;
  _slicedToArray = undefined;
  let fullscreenPlaceholderCount;
  let callback3;
  let items = [callback3];
  const items1 = [searchContext];
  const stateFromStores = searchContext(first[10]).useStateFromStores(
    items,
    () => SearchAutocompleteStore.getState(searchContext),
    items1,
    searchContext(first[10]).statesWillNeverBeEqual,
  );
  [first, _slicedToArray] = fullscreenPlaceholderCount.useState(false);
  let obj = searchContext(first[10]);
  const items2 = [SearchQueryStore];
  const items3 = [searchContext];
  const stateFromStores1 = searchContext(first[10]).useStateFromStores(
    items2,
    () => SearchQueryStore.isTextInputValueEmpty(searchContext),
    items3,
  );
  let obj2 = searchContext(first[10]);
  fullscreenPlaceholderCount = searchContext(first[11]).useFullscreenPlaceholderCount({
    placeholderHeight,
    numColumns: 1,
  });
  const items4 = [searchContext];
  const callback = fullscreenPlaceholderCount.useCallback(() => {
    SearchPlatformUtilsDefault.syncAutocomplete(searchContext);
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(searchContext);
  }, items4);
  const items5 = [callback, searchContext];
  const callback1 = fullscreenPlaceholderCount.useCallback((text) => {
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    if (null != prefixTag) {
      SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: constants2.ANSWER, text });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj4 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
      search_tracking_TrackingDefault.trackSearchFilterAdd(obj4);
      callback();
    }
  }, items5);
  const items6 = [callback, searchContext];
  const callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = UserStore.getUser(arg0);
    if (null != user) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants2.ANSWER, text: stateFromStores(first[15]).getUserTag(user), userId: user.id };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        const obj4 = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        search_tracking_TrackingDefault.trackSearchFilterAdd(obj4);
        callback();
      }
    }
  }, items6);
  const items7 = [callback, searchContext];
  callback3 = fullscreenPlaceholderCount.useCallback((channelId) => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let userTag = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        if (channel.isDM()) {
          const user = UserStore.getUser(channel.getRecipientId());
          if (null != user) {
            userTag = UserUtilsDefault.getUserTag(user);
          }
        }
        SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = {
            type: constants2.ANSWER,
            text: searchContext(first[17]).quoteChannelName(closure_1),
            channelId,
          };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        let obj = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
        search_tracking_TrackingDefault.trackSearchFilterAdd(obj);
        callback();
      }
    }
  }, items7);
  const items8 = [searchContext];
  const effect = fullscreenPlaceholderCount.useEffect(
    () =>
      SearchPlatformUtilsDefault.subscribeSearchQueryState(
        searchContext,
        (isAutocompleteVisible) => {
          const obj = {
            isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(),
            textInputValue: isAutocompleteVisible.getTextInputValue(),
            prefixTag: null,
          };
          let prefixTag = isAutocompleteVisible.getPrefixTag();
          if (prefixTag == null) {
            prefixTag = null;
          }
          obj.prefixTag = prefixTag;
          return obj;
        },
        (isAutocompleteVisible, textInputValue) => {
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
              closure_1_3(true);
            }
          }
        },
        true,
      ),
    items8,
  );
  const items9 = [stateFromStores.autocompletes];
  const effect1 = fullscreenPlaceholderCount.useEffect(() => {
    closure_3(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    const items = [];
    if (set1) {
      for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
        let obj2 = { type: constants.MESSAGE_PLACEHOLDER, key: null };
        let _HermesInternal = HermesInternal;
        obj2.key = "message-placeholder-" + num2;
        let arr = items.push(obj2);
      }
      return items;
    } else {
      const _Set = Set;
      const set = new Set(searchContext(first[18]).getSearchQueryUserIds(items));
      const _Set2 = Set;
      let obj = searchContext(first[18]);
      set1 = new Set(searchContext(first[18]).getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((item) => {
        if (mode.type === constants3.FILTER) {
          ({ results, group: items } = item);
          if (0 !== results.length) {
            item = results.forEach((item) => {
              ({ user, channel, text } = item);
              const toSearchListUserItemResult = AutocompleteScreenUtils.toSearchListUserItem(
                searchContext,
                user,
                callback2,
              );
              let id;
              if (user != null) {
                id = user.id;
              }
              let hasItem = null == toSearchListUserItemResult || null == id;
              if (!hasItem) {
                hasItem = set.has(id);
              }
              if (!hasItem) {
                hasItem = blockedOrIgnored.isBlockedOrIgnored(id);
              }
              if (!hasItem) {
                set.add(id);
                items.push(toSearchListUserItemResult);
              }
              const result = AutocompleteScreenUtils.toSearchListChannelItem(channel, callback3);
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
                items.push(result);
              }
              let tmp22 = closure_1_0 === constants2.FILTER_HAS;
              if (tmp22) {
                tmp22 = null != text;
              }
              if (tmp22) {
                const element = { type: constants.GENERIC, props: null };
                const obj2 = { text, icon: AutocompleteScreenUtils.getSearchFilterHasIcon(text), onPress: callback1 };
                element.props = obj2;
                items.push(element);
                const tmpResult3 = AutocompleteScreenUtils;
              }
              if (tmp27) {
                const element1 = { type: constants.GENERIC, props: null };
                const obj3 = {
                  text,
                  icon: AutocompleteScreenUtils.getSearchFilterAuthorTypeIcon(text),
                  onPress: callback1,
                };
                element1.props = obj3;
                items.push(element1);
                const tmpResult4 = AutocompleteScreenUtils;
              }
              tmp27 = closure_1_0 === constants2.FILTER_AUTHOR_TYPE && null != text;
              const tmpResult = AutocompleteScreenUtils;
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== constants3.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const token = new searchContext(first[19]).Token(tmp32);
            if (token.type === constants4.ANSWER_USERNAME_FROM) {
              if (tmp2Result.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  let toSearchListUserItemResult = searchContext(first[18]).toSearchListUserItem(tmp4, user, callback2);
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
                  const tmp2Result3 = searchContext(first[18]);
                }
              }
              tmp2Result = searchContext(first[20]);
            }
            if (token.type === constants4.ANSWER_IN) {
              if (tmp2Result4.isValidChannelAutocomplete(token, tmp4)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((item) => {
                    const channel = ChannelStore.getChannel(item);
                    const result = AutocompleteScreenUtils.toSearchListChannelItem(channel, callback3);
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
              tmp2Result4 = searchContext(first[20]);
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
  let obj3 = searchContext(first[11]);
  let obj4 = { placeholderHeight, numColumns: 1 };
  const messageTabCountsErrorText = searchContext(first[21]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj6 = { text: messageTabCountsErrorText };
    let tmp18 = jsx(stateFromStores(tmp2[22]), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        let obj7 = { text: null };
        const intl2 = tmp(tmp2[23]).intl;
        obj7.text = intl2.string(tmp(tmp2[23]).t["E4HqQ+"]);
        tmp18 = jsx(stateFromStores(tmp2[22]), { text: null });
        const tmp23 = stateFromStores(tmp2[22]);
      }
    }
    if (!stateFromStores1) {
      if (0 === memo.length) {
        if (!first) {
          const obj8 = { text: null };
          const intl = tmp(tmp2[23]).intl;
          obj8.text = intl.string(tmp(tmp2[23]).t.Dr1vko);
          tmp18 = jsx(stateFromStores(tmp2[22]), { text: null });
          const tmp17 = stateFromStores(tmp2[22]);
        }
      }
    }
    const obj9 = { data: memo };
    tmp18 = jsx(stateFromStores(tmp2[24]), { data: memo });
  }
  return tmp18;
});
