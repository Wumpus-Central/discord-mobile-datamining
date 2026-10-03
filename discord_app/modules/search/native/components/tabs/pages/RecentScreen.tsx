// === Module 16791: RecentScreen ===

// Module 16791 (RecentScreen)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11966 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import SmartSearchUtils from "SmartSearchUtils" /* 11997 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14630 */;
import MediaGridPlaceholder from "MediaGridPlaceholder" /* 16798 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6784 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 11990 */;
import SearchHistoryStore from "SearchHistoryStore" /* 16792 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;

require = fn;
const SearchConstants = fn(7513);
({ EMPTY_SEARCH_QUERY_STRING: c10, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_11, SearchListItemTypes: closure_12, SearchTabs: map1 } = SearchConstants);
const EMPTY_MEDIA_RESULTS = fn(11977).EMPTY_MEDIA_RESULTS;
const SearchTypes = fn(1085).SearchTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(576).c(6);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const fn = function s() {
      return SearchPlatformActionCreatorsDefault.clearSearchHistory(searchContext);
    };
    cResult[0] = searchContext;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.LFTAUp);
    cResult[2] = stringResult;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl2 = tmp(1126).intl;
    obj2.children = intl2.string(tmp(1126).t.LFTAUp);
    const tmp9 = jsx(tmp(4886).Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const obj3 = { onPress: tmp4, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: tmp5, children: tmp7 };
    const tmp12 = jsx(tmp(5909).PressableHighlight, { onPress: tmp4, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: tmp5, children: tmp7 });
    cResult[4] = tmp4;
    cResult[5] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const obj = {
    onPress() {
      return SearchPlatformActionCreatorsDefault.clearSearchHistory(searchContext);
    },
    accessibilityRole: "button",
    unstable_pressDelay: 130,
    accessibilityLabel: null,
    children: null
  };
  const intl = searchContext(1126).intl;
  obj.accessibilityLabel = intl.string(searchContext(1126).t.LFTAUp);
  const obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl2 = searchContext(1126).intl;
  obj2.children = intl2.string(searchContext(1126).t.LFTAUp);
  obj.children = jsx(searchContext(4886).Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
  return jsx(searchContext(5909).PressableHighlight, {
    onPress() {
      return SearchPlatformActionCreatorsDefault.clearSearchHistory(searchContext);
    },
    accessibilityRole: "button",
    unstable_pressDelay: 130,
    accessibilityLabel: null,
    children: null
  });
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((onJumpToMedia) => {
  const cResult = c.c(4);
  onJumpToMedia = onJumpToMedia.onJumpToMedia;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.Ofpgwh);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(util.t.Ofpgwh);
    const tmp8 = jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== onJumpToMedia) {
    const obj3 = { onPress: onJumpToMedia, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: first, children: tmp6 };
    const tmp11 = jsx(Pressables.PressableHighlight, { onPress: onJumpToMedia, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: first, children: tmp6 });
    cResult[2] = onJumpToMedia;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : ((onJumpToMedia) => {
  const obj = { onPress: onJumpToMedia.onJumpToMedia, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.Ofpgwh);
  const obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.Ofpgwh);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-brand", children: null });
  return jsx(Pressables.PressableHighlight, { onPress: onJumpToMedia.onJumpToMedia, accessibilityRole: "button", unstable_pressDelay: 130, accessibilityLabel: null, children: null });
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = require("c").c(9);
  searchContext = searchContext.searchContext;
  _require = searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { query, withGuildMembers: false, withAffinitySuggestions: true, affinitySuggestionsLimit: 3, withFriends: false, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const arr = onPressDMItem(10594)(first);
  if (cResult[1] !== searchContext) {
    let obj3 = { searchContext };
    cResult[1] = searchContext;
    cResult[2] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem(tmp6);
  if (cResult[3] === onPressDMItem) {
    if (cResult[4] === searchContext) {
      let tmp8 = cResult[5];
    }
    dependencyMap = tmp8;
    if (cResult[6] === tmp8) {
      if (cResult[7] === arr) {
        let tmp9 = cResult[8];
      }
      return tmp9;
    }
    const items = [];
    if (0 !== arr.length) {
      let item = arr.forEach((item) => {
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
    cResult[6] = tmp8;
    cResult[7] = arr;
    cResult[8] = items;
    tmp9 = items;
  }
  _require = asyncGeneratorStep(async (searchContext) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_0 = searchContext;
              closure_129_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: onPressDMItem(tmp5[19]).getOrEnsurePrivateChannel(searchContext), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_1 = value;
            const obj7 = { searchContext, channelId: closure_129_1 };
            const result = onPressDMItem(tmp5[20]).trackSuggestedSearchClicked(obj7);
            tmp2(closure_129_0, closure_129_1);
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[3] = onPressDMItem;
  cResult[4] = searchContext;
  cResult[5] = fn;
  tmp8 = fn;
  const tmpResult = require("useOnPressSearchItem");
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  importDefault = undefined;
  let onPressDMItem;
  let tmp = require("useUserListData")({ query, withGuildMembers: false, withAffinitySuggestions: true, affinitySuggestionsLimit: 3, withFriends: false, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true });
  importDefault = tmp;
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem({ searchContext });
  _require = asyncGeneratorStep(async (searchContext) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_0 = searchContext;
              closure_129_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: tmp2(onPressDMItem[19]).getOrEnsurePrivateChannel(searchContext), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_1 = value;
            const obj7 = { searchContext, channelId: closure_129_1 };
            const result = tmp2(onPressDMItem[20]).trackSuggestedSearchClicked(obj7);
            tmp5(closure_129_0, closure_129_1);
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
  return noop.useMemo(() => {
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
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(onPressGuildTextChannel[12]).c(22);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const searchContextId = tmp(tmp2[21]).getSearchContextId(searchContext);
    cResult[0] = searchContext;
    cResult[1] = searchContextId;
    let tmp4 = searchContextId;
    const tmpResult = tmp(tmp2[21]);
  } else {
    tmp4 = cResult[1];
  }
  closure_1 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchGuildChannelTabStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function l() {
      return SearchGuildChannelTabStore.getTextChannels(closure_1);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const obj = searchContext(onPressGuildTextChannel[12]);
  const stateFromStores = searchContext(onPressGuildTextChannel[22]).useStateFromStores(tmp6, tmp8);
  if (cResult[5] !== searchContext) {
    const obj2 = { searchContext };
    cResult[5] = searchContext;
    cResult[6] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[6];
  }
  const tmpResult5 = searchContext(onPressGuildTextChannel[22]);
  onPressGuildTextChannel = searchContext(onPressGuildTextChannel[18]).useOnPressGuildTextChannel(tmp9);
  if (cResult[7] !== stateFromStores) {
    let num8 = 3;
    const substr = stateFromStores.slice(0, 3);
    cResult[7] = stateFromStores;
    cResult[8] = substr;
    let arr3 = substr;
  } else {
    arr3 = cResult[8];
  }
  if (cResult[9] !== searchContext) {
    let smartSearchQuery = tmp(tmp2[23]).getSmartSearchQuery(searchContext, "");
    cResult[9] = searchContext;
    cResult[10] = smartSearchQuery;
    let tmp12 = smartSearchQuery;
    const tmpResult7 = tmp(tmp2[23]);
  } else {
    tmp12 = cResult[10];
  }
  smartSearchQuery = tmp12;
  const tmpResult6 = searchContext(onPressGuildTextChannel[18]);
  const suggestedSearches1 = searchContext(onPressGuildTextChannel[24]).useSuggestedSearches(tmp12, "guild_suggestions");
  ({ suggestedSearches, isLoadingSuggestedSearches } = suggestedSearches1);
  if (cResult[11] === onPressGuildTextChannel) {
    if (cResult[12] === searchContext) {
      let tmp15 = cResult[13];
    }
    const onPress = tmp15;
    if (cResult[14] === tmp15) {
      if (cResult[15] === isLoadingSuggestedSearches) {
        if (cResult[16] === tmp12) {
          if (cResult[17] === arr3) {
            if (cResult[18] === suggestedSearches) {
              return cResult[19];
            }
          }
        }
      }
    }
    const items1 = [];
    if (0 === suggestedSearches.length) {
      if (!isLoadingSuggestedSearches) {
        let str2 = arr3.length;
        let tmp16 = items1;
        do {
          let obj3 = { type: constants.SUGGESTED_SEARCH_PLACEHOLDER, key: null };
          let _HermesInternal = HermesInternal;
          obj3.key = str2 + num16;
          let arr = items1.push(obj3);
          num16 = num16 + 1;
          tmp16 = items1;
        } while (num16 < num8);
      }
      cResult[14] = tmp15;
      cResult[15] = isLoadingSuggestedSearches;
      cResult[16] = tmp12;
      cResult[17] = arr3;
      cResult[18] = suggestedSearches;
      num16 = 19;
      cResult[19] = tmp16;
    }
    let element = { type: constants.SECTION, props: null };
    const obj4 = { title: null };
    const intl = tmp(tmp2[14]).intl;
    obj4.title = intl.string(tmp(tmp2[14]).t.HbJ7eD);
    element.props = obj4;
    str2 = items1.push(element);
    if (null == tmp12) {
      const item = arr3.forEach((channel) => {
        const element = { type: constants.GUILD_TEXT_CHANNEL, props: { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress } };
        items1.push(element);
      });
      if (cResult[20] !== items1) {
        const substr1 = items1.slice(0, 4);
        cResult[20] = items1;
        cResult[21] = substr1;
        let tmp20 = substr1;
      } else {
        tmp20 = cResult[21];
      }
      tmp16 = tmp20;
    } else if (0 === suggestedSearches.length) {
      str2 = "suggested-search-skeleton-";
      num8 = 3;
      num16 = 0;
    } else {
      str2 = suggestedSearches.forEach((suggestedSearch) => {
        const element = { type: constants.SUGGESTED_SEARCH, props: { suggestedSearch, smartSearchQuery, variant: "compact" } };
        items1.push(element);
      });
    }
  }
  const fn2 = function y(channelId) {
    const result = search_tracking_TrackingDefault.trackSuggestedSearchClicked({ searchContext, channelId });
    onPressGuildTextChannel(channelId);
  };
  cResult[11] = onPressGuildTextChannel;
  cResult[12] = searchContext;
  cResult[13] = fn2;
  tmp15 = fn2;
  const tmpResult8 = searchContext(onPressGuildTextChannel[24]);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let memo1;
  let isLoadingSuggestedSearches;
  const searchContextId = searchContext(stateFromStores[21]).getSearchContextId(searchContext);
  let obj = searchContext(stateFromStores[21]);
  let items = [isLoadingSuggestedSearches];
  stateFromStores = searchContext(stateFromStores[22]).useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
  let obj2 = searchContext(stateFromStores[22]);
  const onPressGuildTextChannel = searchContext(stateFromStores[18]).useOnPressGuildTextChannel({ searchContext });
  const items1 = [stateFromStores];
  const memo = memo1.useMemo(() => stateFromStores.slice(0, 3), items1);
  const items2 = [searchContext];
  memo1 = memo1.useMemo(() => SmartSearchUtils.getSmartSearchQuery(searchContext, ""), items2);
  const obj3 = searchContext(stateFromStores[18]);
  const suggestedSearches1 = searchContext(stateFromStores[24]).useSuggestedSearches(memo1, "guild_suggestions");
  const suggestedSearches = suggestedSearches1.suggestedSearches;
  isLoadingSuggestedSearches = suggestedSearches1.isLoadingSuggestedSearches;
  const items3 = [onPressGuildTextChannel, searchContext];
  const onPress = memo1.useCallback((channelId) => {
    const result = search_tracking_TrackingDefault.trackSuggestedSearchClicked({ searchContext, channelId });
    onPressGuildTextChannel(channelId);
  }, items3);
  const items4 = [onPress, memo1, memo, suggestedSearches, isLoadingSuggestedSearches];
  return memo1.useMemo(() => {
    const items = [];
    if (0 === suggestedSearches.length) {
      if (!isLoadingSuggestedSearches) {
        if (0 === memo.length) {
          return items;
        }
      }
    }
    let element = { type: constants.SECTION, props: null };
    const obj = { title: null };
    const intl = searchContext(stateFromStores[14]).intl;
    obj.title = intl.string(searchContext(stateFromStores[14]).t.HbJ7eD);
    element.props = obj;
    items.push(element);
    if (null != memo1) {
      if (0 === suggestedSearches.length) {
        let num3 = 0;
        if (isLoadingSuggestedSearches) {
          do {
            let obj2 = { type: constants.SUGGESTED_SEARCH_PLACEHOLDER, key: null };
            let _HermesInternal = HermesInternal;
            obj2.key = "suggested-search-skeleton-" + num3;
            let arr4 = items.push(obj2);
            num3 = num3 + 1;
          } while (num3 < 3);
          return items;
        }
      } else {
        const item = suggestedSearches.forEach((suggestedSearch) => {
          const element = { type: constants.SUGGESTED_SEARCH, props: { suggestedSearch, smartSearchQuery: memo1, variant: "compact" } };
          items.push(element);
        });
      }
    }
    const item1 = memo.forEach((channel) => {
      const element = { type: constants.GUILD_TEXT_CHANNEL, props: { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress } };
      items.push(element);
    });
    return items.slice(0, 4);
  }, items4);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] !== arg0) {
    const fn = function i() {
      return SearchHistoryStore.getSearchHistory(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const obj = require("c");
  const tmp = _require;
  [tmp6, importDefault] = noop.useState(tmp4);
  if (cResult[2] !== arg0) {
    const fn2 = function l() {
      function handleChange() {
        closure_1_1(SearchHistoryStore.getSearchHistory(handleChange));
      }
      closure_1(SearchHistoryStore.getSearchHistory(handleChange));
      let result = SearchHistoryStore.addReactChangeListener(handleChange);
      return () => {
        const result = SearchHistoryStore.removeReactChangeListener(handleChange);
      };
    };
    cResult[2] = arg0;
    cResult[3] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  const tmp5 = _slicedToArray(noop.useState(tmp4), 2);
  const focusEffect = tmp(1491).useFocusEffect(tmp7);
  return tmp6;
}) : ((arg0) => {
  _require = arg0;
  const tmp = _slicedToArray(noop.useState(() => SearchHistoryStore.getSearchHistory(closure_0)), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => {
    function handleChange() {
      closure_1_1(SearchHistoryStore.getSearchHistory(handleChange));
    }
    closure_1(SearchHistoryStore.getSearchHistory(handleChange));
    let result = SearchHistoryStore.addReactChangeListener(handleChange);
    return () => {
      const result = SearchHistoryStore.removeReactChangeListener(handleChange);
    };
  }, items));
  return tmp[0];
});
ReactCompilerGating = fn(558);
let closure_22 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(576).c(42);
  searchContext = searchContext.searchContext;
  ({ onJumpToMedia, suggestedData } = searchContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore, SearchMessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function n() {
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
      const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, constants2.MEDIA, searchResultsQuery);
      return { messages: SearchMessageStore.getMessages(searchTabFetchId), isLoadingMediaGrid: !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId), isInitialSearchQuery: SearchQueryStore.isInitialSearchQuery(searchContext) };
    };
    cResult[1] = searchContext;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  let obj = searchContext(576);
  const stateFromStoresObject = searchContext(504).useStateFromStoresObject(first, tmp9);
  const messages = stateFromStoresObject.messages;
  ({ isLoadingMediaGrid, isInitialSearchQuery } = stateFromStoresObject);
  if (cResult[3] !== searchContext) {
    const searchContextId = tmp2(11968).getSearchContextId(searchContext);
    cResult[3] = searchContext;
    cResult[4] = searchContextId;
    let tmp11 = searchContextId;
    const tmp2Result2 = tmp2(11968);
  } else {
    tmp11 = cResult[4];
  }
  const arr3 = closure_21(tmp11);
  const tmp15 = messages(16796)(searchContext.width);
  dependencyMap = tmp15;
  if (null != messages) {
    if (0 !== messages.length) {
      if (cResult[5] === messages) {
        if (cResult[6] === searchContext) {
          let items1 = tmp16;
        }
      }
      items1 = [];
      const obj4 = messages[Symbol.iterator]();
      while (obj4 !== undefined) {
        let obj5 = searchContext(11966);
        let items2 = [tmp19];
        let media = obj5.getMedia(searchContext, items2);
        let item = media.forEach((item) => items1.push(item));
        if (items1.length >= 9) {
          obj4.return();
          break;
        }
        cResult[5] = messages;
        cResult[6] = searchContext;
        cResult[7] = items1;
        obj4.return();
        throw __exception;
      }
    }
  }
  if (cResult[8] === EMPTY_MEDIA_RESULTS) {
    if (cResult[9] === searchContext) {
      let tmp30 = cResult[10];
    }
    let num11 = searchContext;
    const onPressMediaItem = searchContext(16793).useOnPressMediaItem(tmp30);
    if (cResult[11] === messages) {
      if (cResult[12] === onPressMediaItem) {
        let tmp35 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { placeholderHeight, numColumns: 1 };
        cResult[14] = obj2;
        let tmp36 = obj2;
      } else {
        tmp36 = cResult[14];
      }
      const fullscreenPlaceholderCount = num11(16797).useFullscreenPlaceholderCount(tmp36);
      if (cResult[15] === tmp35) {
        if (cResult[16] === isInitialSearchQuery) {
          if (cResult[17] === EMPTY_MEDIA_RESULTS) {
            if (cResult[18] === tmp15) {
              if (cResult[19] === onJumpToMedia) {
                if (cResult[20] === fullscreenPlaceholderCount) {
                  if (cResult[21] === searchContext) {
                    if (cResult[22] === arr3) {
                      if (cResult[23] === suggestedData) {
                        if (cResult[36] === isLoadingMediaGrid) {
                          if (cResult[37] === tmp15) {
                            let tmp70 = cResult[38];
                          }
                          if (cResult[39] === tmp70) {
                            if (cResult[40] === tmp41) {
                              let tmp71 = cResult[41];
                            }
                            return tmp71;
                          }
                          let obj3 = { data: tmp41, ListFooterComponent: tmp70 };
                          class G {
                            constructor(arg0) {
                              media = searchContext.media;
                              arr = messages;
                              found = undefined;
                              if (messages != null) {
                                found = arr.find((id) => id.id === media.messageId);
                              }
                              tmp3 = closure_2;
                              tmp2 = closure_0;
                              obj = closure_0(closure_2[28]);
                              if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                                tmp6 = closure_1;
                                obj2 = closure_1(tmp3[29]);
                                obj1 = { entryPoint: null };
                                obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                                result = obj2.showAgeVerificationGetStartedModal(obj1);
                              } else {
                                tmp4 = closure_4;
                                tmp5 = closure_4(media, searchContext.originView);
                              }
                              return;
                            }
                          }
                          cResult[39] = tmp70;
                          cResult[40] = tmp41;
                          cResult[41] = tmp76;
                          tmp71 = tmp76;
                        }
                        let fn2 = null;
                        if (isLoadingMediaGrid) {
                          fn2 = () => jsx(MediaGridPlaceholder.RecentsMediaGridPlaceholder, { numRows: 3, visible: true, size });
                        }
                        cResult[36] = isLoadingMediaGrid;
                        cResult[37] = tmp15;
                        class G {
                          constructor(arg0) {
                            media = searchContext.media;
                            arr = messages;
                            found = undefined;
                            if (messages != null) {
                              found = arr.find((id) => id.id === media.messageId);
                            }
                            tmp3 = closure_2;
                            tmp2 = closure_0;
                            obj = closure_0(closure_2[28]);
                            if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                              tmp6 = closure_1;
                              obj2 = closure_1(tmp3[29]);
                              obj1 = { entryPoint: null };
                              obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                              result = obj2.showAgeVerificationGetStartedModal(obj1);
                            } else {
                              tmp4 = closure_4;
                              tmp5 = closure_4(media, searchContext.originView);
                            }
                            return;
                          }
                        }
                        tmp70 = fn2;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      class G {
        constructor(arg0) {
          media = searchContext.media;
          arr = messages;
          found = undefined;
          if (messages != null) {
            found = arr.find((id) => id.id === media.messageId);
          }
          tmp3 = closure_2;
          tmp2 = closure_0;
          obj = closure_0(closure_2[28]);
          if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
            tmp6 = closure_1;
            obj2 = closure_1(tmp3[29]);
            obj1 = { entryPoint: null };
            obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
            result = obj2.showAgeVerificationGetStartedModal(obj1);
          } else {
            tmp4 = closure_4;
            tmp5 = closure_4(media, searchContext.originView);
          }
          return;
        }
      }
      if (!isInitialSearchQuery) {
        if (0 === arr8.length) {
          for (let num18 = 0; num18 < fullscreenPlaceholderCount; num18 = num18 + 1) {
            let obj6 = { type: constants.MESSAGE_PLACEHOLDER, key: null };
            let _HermesInternal = HermesInternal;
            obj6.key = "message-placeholder-" + num18;
            let arr = arr8.push(obj6);
          }
        }
        cResult[15] = tmp35;
        cResult[16] = isInitialSearchQuery;
        cResult[17] = EMPTY_MEDIA_RESULTS;
        class G {
          constructor(arg0) {
            media = searchContext.media;
            arr = messages;
            found = undefined;
            if (messages != null) {
              found = arr.find((id) => id.id === media.messageId);
            }
            tmp3 = closure_2;
            tmp2 = closure_0;
            obj = closure_0(closure_2[28]);
            if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
              tmp6 = closure_1;
              obj2 = closure_1(tmp3[29]);
              obj1 = { entryPoint: null };
              obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
              result = obj2.showAgeVerificationGetStartedModal(obj1);
            } else {
              tmp4 = closure_4;
              tmp5 = closure_4(media, searchContext.originView);
            }
            return;
          }
        }
        cResult[19] = onJumpToMedia;
        cResult[20] = fullscreenPlaceholderCount;
        cResult[21] = searchContext;
        cResult[22] = arr3;
        cResult[23] = suggestedData;
        num11 = 24;
        cResult[24] = arr8;
      }
      if (arr3.length <= 0) {
        if (suggestedData != null) {
          const item1 = suggestedData.forEach((item) => arr8.push(item));
        }
        if (EMPTY_MEDIA_RESULTS.length > 0) {
          const _Symbol2 = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = num11(1126).intl;
            const stringResult = intl.string(num11(1126).t.LBYpDH);
            cResult[27] = stringResult;
            let tmp55 = stringResult;
          } else {
            tmp55 = cResult[27];
          }
          if (cResult[28] !== onJumpToMedia) {
            let element = { type: constants.SECTION, props: null };
            const obj8 = { title: tmp55, trailing: null };
            { onJumpToMedia: null }.onJumpToMedia = onJumpToMedia;
            class G {
              constructor(arg0) {
                media = searchContext.media;
                arr = messages;
                found = undefined;
                if (messages != null) {
                  found = arr.find((id) => id.id === media.messageId);
                }
                tmp3 = closure_2;
                tmp2 = closure_0;
                obj = closure_0(closure_2[28]);
                if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                  tmp6 = closure_1;
                  obj2 = closure_1(tmp3[29]);
                  obj1 = { entryPoint: null };
                  obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                  result = obj2.showAgeVerificationGetStartedModal(obj1);
                } else {
                  tmp4 = closure_4;
                  tmp5 = closure_4(media, searchContext.originView);
                }
                return;
              }
            }
            element.props = obj8;
            cResult[28] = onJumpToMedia;
            cResult[29] = element;
            let tmp59 = element;
            const obj9 = { onJumpToMedia: null };
          } else {
            tmp59 = cResult[29];
          }
          arr8.push(tmp59);
          if (cResult[30] !== EMPTY_MEDIA_RESULTS) {
            const substr = EMPTY_MEDIA_RESULTS.slice(0, 9);
            cResult[30] = EMPTY_MEDIA_RESULTS;
            cResult[31] = substr;
            let tmp64 = substr;
          } else {
            tmp64 = cResult[31];
          }
          if (cResult[32] === tmp35) {
            if (cResult[33] === tmp15) {
              if (cResult[34] === tmp64) {
                let tmp66 = cResult[35];
              }
              arr8.push(tmp66);
            }
          }
          const element1 = { type: null, props: null };
          class G {
            constructor(arg0) {
              media = searchContext.media;
              arr = messages;
              found = undefined;
              if (messages != null) {
                found = arr.find((id) => id.id === media.messageId);
              }
              tmp3 = closure_2;
              tmp2 = closure_0;
              obj = closure_0(closure_2[28]);
              if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                tmp6 = closure_1;
                obj2 = closure_1(tmp3[29]);
                obj1 = { entryPoint: null };
                obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                result = obj2.showAgeVerificationGetStartedModal(obj1);
              } else {
                tmp4 = closure_4;
                tmp5 = closure_4(media, searchContext.originView);
              }
              return;
            }
          }
          const obj10 = { media: tmp64, mediaSize: tmp15, onPress: tmp35, animate: true };
          element1.props = obj10;
          cResult[32] = tmp35;
          cResult[33] = tmp15;
          cResult[34] = tmp64;
          cResult[35] = element1;
          tmp66 = element1;
        }
      } else {
        if (cResult[25] !== searchContext) {
          const obj11 = { searchContext };
          cResult[25] = searchContext;
          cResult[26] = <closure_17 searchContext={searchContext} />;
          class G {
            constructor(arg0) {
              media = searchContext.media;
              arr = messages;
              found = undefined;
              if (messages != null) {
                found = arr.find((id) => id.id === media.messageId);
              }
              tmp3 = closure_2;
              tmp2 = closure_0;
              obj = closure_0(closure_2[28]);
              if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                tmp6 = closure_1;
                obj2 = closure_1(tmp3[29]);
                obj1 = { entryPoint: null };
                obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                result = obj2.showAgeVerificationGetStartedModal(obj1);
              } else {
                tmp4 = closure_4;
                tmp5 = closure_4(media, searchContext.originView);
              }
              return;
            }
          }
          const tmp47 = <closure_17 searchContext={searchContext} />;
        } else {
          const tmp44 = cResult[26];
        }
        const element2 = { type: constants.SECTION, props: null };
        const obj12 = { title: null, trailing: null };
        class G {
          constructor(arg0) {
            media = searchContext.media;
            arr = messages;
            found = undefined;
            if (messages != null) {
              found = arr.find((id) => id.id === media.messageId);
            }
            tmp3 = closure_2;
            tmp2 = closure_0;
            obj = closure_0(closure_2[28]);
            if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
              tmp6 = closure_1;
              obj2 = closure_1(tmp3[29]);
              obj1 = { entryPoint: null };
              obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
              result = obj2.showAgeVerificationGetStartedModal(obj1);
            } else {
              tmp4 = closure_4;
              tmp5 = closure_4(media, searchContext.originView);
            }
            return;
          }
        }
        obj12.title = tmp51(num11(1126).t.ZZpBr4);
        obj12.trailing = tmp44;
        element2.props = obj12;
        arr8.push(element2);
        const item2 = arr3.forEach((searchHistoryItem) => {
          const element = { type: constants.SEARCH_HISTORY_ITEM, props: { searchHistoryItem, searchContext } };
          arr8.push(element);
        });
      }
      const num11Result = num11(16797);
    }
    class G {
      constructor(arg0) {
        media = searchContext.media;
        arr = messages;
        found = undefined;
        if (messages != null) {
          found = arr.find((id) => id.id === media.messageId);
        }
        tmp3 = closure_2;
        tmp2 = closure_0;
        obj = closure_0(closure_2[28]);
        if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
          tmp6 = closure_1;
          obj2 = closure_1(tmp3[29]);
          obj1 = { entryPoint: null };
          obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
          result = obj2.showAgeVerificationGetStartedModal(obj1);
        } else {
          tmp4 = closure_4;
          tmp5 = closure_4(media, searchContext.originView);
        }
        return;
      }
    }
    cResult[11] = messages;
    cResult[12] = onPressMediaItem;
    cResult[13] = G;
    tmp35 = G;
    const obj7 = searchContext(16793);
  }
  const obj13 = { searchContext, allMediaResults: EMPTY_MEDIA_RESULTS };
  cResult[8] = EMPTY_MEDIA_RESULTS;
  cResult[9] = searchContext;
  cResult[10] = obj13;
  tmp30 = obj13;
  const tmp2Result = searchContext(504);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const onJumpToMedia = searchContext.onJumpToMedia;
  const suggestedData = searchContext.suggestedData;
  let length;
  let onPressMediaItem;
  let fullscreenPlaceholderCount;
  let items = [onPressMediaItem, length];
  const stateFromStoresObject = searchContext(suggestedData[22]).useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, constants2.MEDIA, searchResultsQuery);
    return { messages: SearchMessageStore.getMessages(searchTabFetchId), isLoadingMediaGrid: !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId), isInitialSearchQuery: SearchQueryStore.isInitialSearchQuery(searchContext) };
  });
  const messages = stateFromStoresObject.messages;
  const isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
  const isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
  let obj = searchContext(suggestedData[22]);
  const tmp2 = closure_21(searchContext(suggestedData[21]).getSearchContextId(searchContext));
  length = tmp2;
  const tmp3 = onJumpToMedia(suggestedData[26])(searchContext.width);
  const mediaSize = tmp3;
  let items1 = [messages, searchContext];
  const memo = isInitialSearchQuery.useMemo(() => {
    if (null != messages) {
      if (0 !== messages.length) {
        const items = [];
        const obj2 = messages[Symbol.iterator]();
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
  }, items1);
  let obj2 = searchContext(suggestedData[21]);
  onPressMediaItem = searchContext(suggestedData[18]).useOnPressMediaItem({ searchContext, allMediaResults: memo });
  const items2 = [messages, onPressMediaItem];
  const onPress = isInitialSearchQuery.useCallback((media) => {
    media = media.media;
    let found;
    if (messages != null) {
      found = messages.find((id) => id.id === media.messageId);
    }
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
    } else {
      onPressMediaItem(media, media.originView);
    }
    obj = ExplicitMediaRedactionNativeUtils;
  }, items2);
  let obj3 = searchContext(suggestedData[18]);
  fullscreenPlaceholderCount = searchContext(suggestedData[31]).useFullscreenPlaceholderCount({ placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 });
  const items3 = [onPress, isInitialSearchQuery, memo, tmp3, onJumpToMedia, fullscreenPlaceholderCount, searchContext, tmp2, suggestedData];
  const items4 = [isLoadingMediaGrid, tmp3];
  const data = isInitialSearchQuery.useMemo(() => {
    const items = [];
    if (!isInitialSearchQuery) {
      if (0 === items.length) {
        for (let num3 = 0; num3 < fullscreenPlaceholderCount; num3 = num3 + 1) {
          let obj = { type: constants.MESSAGE_PLACEHOLDER, key: null };
          let _HermesInternal = HermesInternal;
          obj.key = "message-placeholder-" + num3;
          let arr = items.push(obj);
        }
        return items;
      }
    }
    if (length.length > 0) {
      let element = { type: constants.SECTION, props: null };
      const obj2 = { title: null, trailing: null };
      const intl = searchContext(suggestedData[14]).intl;
      obj2.title = intl.string(searchContext(suggestedData[14]).t.ZZpBr4);
      const obj3 = { searchContext: items };
      obj2.trailing = <closure_1_17 searchContext={items} />;
      element.props = obj2;
      items.push(element);
      const item = length.forEach((searchHistoryItem) => {
        const element = { type: constants.SEARCH_HISTORY_ITEM, props: { searchHistoryItem, searchContext } };
        items.push(element);
      });
    }
    if (suggestedData != null) {
      const item1 = suggestedData.forEach((item) => items.push(item));
    }
    if (memo.length > 0) {
      const element1 = { type: constants.SECTION, props: null };
      const obj4 = { title: null, trailing: null };
      const intl2 = searchContext(suggestedData[14]).intl;
      obj4.title = intl2.string(searchContext(suggestedData[14]).t.LBYpDH);
      const obj5 = { onJumpToMedia };
      obj4.trailing = <closure_1_18 onJumpToMedia={onJumpToMedia} />;
      element1.props = obj4;
      items.push(element1);
      const element2 = { type: constants.MEDIA_GRID, props: null };
      const obj6 = { media: memo.slice(0, 9), mediaSize, onPress, animate: true };
      element2.props = obj6;
      items.push(element2);
    }
    return items;
  }, items3);
  const ListFooterComponent = isInitialSearchQuery.useMemo(() => {
    let fn = null;
    if (isLoadingMediaGrid) {
      fn = () => jsx(searchContext(suggestedData[32]).RecentsMediaGridPlaceholder, { numRows: 3, visible: true, size });
    }
    return fn;
  }, items4);
  return jsx(onJumpToMedia(suggestedData[33]), { data, ListFooterComponent });
}));
ReactCompilerGating = fn(558);
let closure_23 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = c.c(5);
  if (cResult[0] !== searchContext.searchContext) {
    const obj2 = { searchContext: searchContext.searchContext };
    cResult[0] = searchContext.searchContext;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_19(tmp2);
  if (cResult[2] === searchContext) {
    if (cResult[3] === tmp3) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj3 = {};
  const merged = Object.assign(searchContext);
  obj3.suggestedData = tmp3;
  const tmp6 = <closure_22 />;
  cResult[2] = searchContext;
  cResult[3] = tmp3;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : ((searchContext) => {
  const obj2 = {};
  const merged = Object.assign(searchContext);
  obj2.suggestedData = closure_19({ searchContext: searchContext.searchContext });
  return <closure_22 />;
}));
ReactCompilerGating = fn(558);
let closure_24 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = c.c(5);
  if (cResult[0] !== searchContext.searchContext) {
    const obj2 = { searchContext: searchContext.searchContext };
    cResult[0] = searchContext.searchContext;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_20(tmp2);
  if (cResult[2] === searchContext) {
    if (cResult[3] === tmp3) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj3 = {};
  const merged = Object.assign(searchContext);
  obj3.suggestedData = tmp3;
  const tmp6 = <closure_22 />;
  cResult[2] = searchContext;
  cResult[3] = tmp3;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : ((searchContext) => {
  const obj2 = {};
  const merged = Object.assign(searchContext);
  obj2.suggestedData = closure_20({ searchContext: searchContext.searchContext });
  return <closure_22 />;
}));
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    if (cResult[0] === onJumpToMedia) {
      if (cResult[1] === searchContext) {
        if (cResult[2] === width) {
          let tmp12 = cResult[3];
        }
        return tmp12;
      }
    }
    const obj2 = { searchContext, onJumpToMedia, width };
    const tmp15 = <closure_23 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
    cResult[0] = onJumpToMedia;
    cResult[1] = searchContext;
    cResult[2] = width;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else if (SearchTypes.GUILD === type) {
    if (cResult[4] === onJumpToMedia) {
      if (cResult[5] === searchContext) {
        if (cResult[6] === width) {
          let tmp8 = cResult[7];
        }
        return tmp8;
      }
    }
    const obj3 = { searchContext, onJumpToMedia, width };
    const tmp11 = <closure_24 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
    cResult[4] = onJumpToMedia;
    cResult[5] = searchContext;
    cResult[6] = width;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  } else {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.CHANNEL !== type) {
        return null;
      }
    }
    if (cResult[8] === onJumpToMedia) {
      if (cResult[9] === searchContext) {
        if (cResult[10] === width) {
          let tmp4 = cResult[11];
        }
        return tmp4;
      }
    }
    const obj4 = { searchContext, onJumpToMedia, width };
    const tmp7 = <closure_22 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
    cResult[8] = onJumpToMedia;
    cResult[9] = searchContext;
    cResult[10] = width;
    cResult[11] = tmp7;
    tmp4 = tmp7;
  }
}) : ((arg0) => {
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    const obj2 = { searchContext, onJumpToMedia, width };
    return <closure_23 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else if (SearchTypes.GUILD === type) {
    const obj3 = { searchContext, onJumpToMedia, width };
    return <closure_24 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.CHANNEL !== type) {
        return null;
      }
    }
    const obj = { searchContext, onJumpToMedia, width };
    return <closure_22 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  }
}));