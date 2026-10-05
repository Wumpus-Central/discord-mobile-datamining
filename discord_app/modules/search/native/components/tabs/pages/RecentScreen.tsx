// discord_app/modules/search/native/components/tabs/pages/RecentScreen.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../../Constants.tsx";
import intl3 from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../../design/void/Pressables/native/Pressables.tsx";
import AgeVerificationActionCreatorsDefault from "../../../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import SearchPlatformUtils from "../../../SearchPlatformUtils.tsx";
import SearchUtils from "../../../../SearchUtils.tsx";
import SearchPlatformConstants from "../../../SearchPlatformConstants.tsx";
import search_tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../../../SearchPlatformActionCreators.tsx";
import SmartSearchUtils from "../../../../../intelligence_layer/search/SmartSearchUtils.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import MediaGridPlaceholder from "placeholders/MediaGridPlaceholder.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../../_runtime/00019_react.js";
import SearchMessageStore from "../../../../SearchMessageStore.tsx";
import SearchGuildChannelTabStore from "../../../stores/SearchGuildChannelTabStore.tsx";
import SearchHistoryStore from "../../../stores/SearchHistoryStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";
import SearchConstants from "../../../../SearchConstants.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1;

let c10;
let closure_12;
let map1;
let unpackModuleId;
({
  EMPTY_SEARCH_QUERY_STRING: c10,
  MESSAGE_PLACEHOLDER_ITEM_SIZE: unpackModuleId,
  SearchListItemTypes: closure_12,
  SearchTabs: map1,
} = SearchConstants);
const EMPTY_MEDIA_RESULTS = SearchPlatformConstants.EMPTY_MEDIA_RESULTS;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (searchContext) => {
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp7;
      let obj = searchContext(576);
      const cResult = obj.c(6);
      searchContext = searchContext.searchContext;
      if (cResult[0] !== searchContext) {
        const fn = function s() {
          const obj = SearchPlatformActionCreatorsDefault;
          return obj.clearSearchHistory(searchContext);
        };
        cResult[0] = searchContext;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(searchContext(1126).t.LFTAUp);
        cResult[2] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const Text = tmp(4886).Text;
        const intl2 = tmp(1126).intl;
        const tmp9 = (
          <Text variant="text-sm/semibold" color="text-brand">
            {intl2.string(searchContext(1126).t.LFTAUp)}
          </Text>
        );
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp4) {
        const tmp12 = jsx(searchContext(5909).PressableHighlight, {
          onPress: tmp4,
          accessibilityRole: "button",
          unstable_pressDelay: 130,
          accessibilityLabel: tmp5,
          children: tmp7,
        });
        cResult[4] = tmp4;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  : (searchContext) => {
      let intl2;
      searchContext = searchContext.searchContext;
      const PressableHighlight = searchContext(5909).PressableHighlight;
      const intl = searchContext(1126).intl;
      ({ variant: "text-sm/semibold", color: "text-brand", children: intl2.string(searchContext(1126).t.LFTAUp) });
      const Text = searchContext(4886).Text;
      intl2 = searchContext(1126).intl;
      return (
        <PressableHighlight
          onPress={function onPress() {
            const obj = SearchPlatformActionCreatorsDefault;
            return obj.clearSearchHistory(searchContext);
          }}
          accessibilityRole="button"
          unstable_pressDelay={130}
          accessibilityLabel={intl.string(searchContext(1126).t.LFTAUp)}
        >
          {null}
        </PressableHighlight>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onJumpToMedia) => {
      let first;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(4);
      onJumpToMedia = onJumpToMedia.onJumpToMedia;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.Ofpgwh);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const Text = Text_Text.Text;
        const intl2 = intl3.intl;
        const tmp8 = (
          <Text variant="text-sm/semibold" color="text-brand">
            {intl2.string(intl3.t.Ofpgwh)}
          </Text>
        );
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== onJumpToMedia) {
        const tmp11 = jsx(Pressables.PressableHighlight, {
          onPress: onJumpToMedia,
          accessibilityRole: "button",
          unstable_pressDelay: 130,
          accessibilityLabel: first,
          children: tmp6,
        });
        cResult[2] = onJumpToMedia;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : (onJumpToMedia) => {
      let intl2;
      const PressableHighlight = Pressables.PressableHighlight;
      const intl = intl3.intl;
      ({ variant: "text-sm/semibold", color: "text-brand", children: intl2.string(intl3.t.Ofpgwh) });
      const Text = Text_Text.Text;
      intl2 = intl3.intl;
      return (
        <PressableHighlight
          onPress={onJumpToMedia.onJumpToMedia}
          accessibilityRole="button"
          unstable_pressDelay={130}
          accessibilityLabel={intl.string(intl3.t.Ofpgwh)}
        >
          {null}
        </PressableHighlight>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (searchContext) => {
      let first;
      let onPressDMItem;
      let tmp6;
      let tmp = searchContext;
      let obj = searchContext(576);
      const cResult = obj.c(9);
      searchContext = searchContext.searchContext;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          query,
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
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const arr = onPressDMItem(10594)(first);
      if (cResult[1] !== searchContext) {
        const obj3 = { searchContext };
        cResult[1] = searchContext;
        cResult[2] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(16812);
      onPressDMItem = tmpResult.useOnPressDMItem(tmp6);
      if (cResult[3] === onPressDMItem) {
        let tmp8;
        if (cResult[4] === searchContext) {
          tmp8 = cResult[5];
        }
        dependencyMap = tmp8;
        if (cResult[6] === tmp8) {
          let tmp9;
          if (cResult[7] === arr) {
            tmp9 = cResult[8];
          }
          return tmp9;
        }
        const items = [];
        if (0 !== arr.length) {
          let item = arr.forEach((item) => {
            let obj;
            let onPress;
            let title;
            ({ title, items } = item);
            const tmp = 0 !== items.length && null != title;
            if (tmp) {
              let element = { type: constants.SECTION, props: obj };
              obj = { title };
              items.push(element);
              item = items.forEach((user) => {
                let obj;
                const element = { type: constants.DM, props: obj };
                obj = { user: user.user, onPress };
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
      let closure_0 = _asyncToGenerator(async (searchContext) => {
        let c3 = 0;
        let c4 = 0;
        return (async (arg0) => {
          let obj4;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
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
                  return { value, done: true };
                } else {
                  closure_2 = tmp4;
                  channelId = undefined;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: obj4.getOrEnsurePrivateChannel(searchContext), done: false };
                  obj4 = onPressDMItem(closure_2_2[19]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                channelId = value;
                const obj7 = { searchContext, channelId };
                const obj = onPressDMItem(closure_2_2[20]);
                const result = obj.trackSuggestedSearchClicked(obj7);
                channelId(searchContext, channelId);
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              c4 = 3;
              throw tmp19;
            }
          }
        })();
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[3] = onPressDMItem;
      cResult[4] = searchContext;
      cResult[5] = fn;
      tmp8 = fn;
    }
  : (searchContext) => {
      let length;
      searchContext = searchContext.searchContext;
      importDefault = undefined;
      let onPressDMItem;
      let obj = {
        query,
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
      let tmp = require("useUserListData")(obj);
      importDefault = tmp;
      let obj2 = searchContext(onPressDMItem[18]);
      onPressDMItem = obj2.useOnPressDMItem({ searchContext });
      const useCallback = react.useCallback;
      let closure_0 = _asyncToGenerator(async (searchContext) => {
        let closure_2;
        let c3 = 0;
        let c4 = 0;
        return (async (arg0) => {
          let obj4;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
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
                  return { value, done: true };
                } else {
                  channelId = undefined;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: obj4.getOrEnsurePrivateChannel(searchContext), done: false };
                  obj4 = length(onPressDMItem[19]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                channelId = value;
                const obj7 = { searchContext, channelId };
                const obj = length(onPressDMItem[20]);
                const result = obj.trackSuggestedSearchClicked(obj7);
                tmp4(searchContext, channelId);
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              c4 = 3;
              throw tmp19;
            }
          }
        })();
      });
      let items = [onPressDMItem, searchContext];
      const callback = useCallback(function () {
        return closure_0(...arguments);
      }, items);
      const items1 = [callback, tmp];
      return react.useMemo(() => {
        let onPress;
        const items = [];
        if (0 !== length.length) {
          let item = length.forEach((item) => {
            let obj;
            let title;
            ({ title, items } = item);
            const tmp = 0 !== items.length && null != title;
            if (tmp) {
              let element = { type: constants.SECTION, props: obj };
              obj = { title };
              items.push(element);
              item = items.forEach((user) => {
                let obj;
                const element = { type: constants.DM, props: obj };
                obj = { user: user.user, onPress };
                items.push(element);
              });
            }
          });
        }
        return items;
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (searchContext) => {
      let arr3;
      let intl;
      let isLoadingSuggestedSearches;
      let obj3;
      let onPressGuildTextChannel;
      let suggestedSearches;
      let tmp12;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = searchContext(onPressGuildTextChannel[12]);
      const cResult = obj.c(22);
      searchContext = searchContext.searchContext;
      if (cResult[0] !== searchContext) {
        const tmpResult = searchContext(onPressGuildTextChannel[21]);
        const searchContextId = tmpResult.getSearchContextId(searchContext);
        cResult[0] = searchContext;
        cResult[1] = searchContextId;
        tmp4 = searchContextId;
      } else {
        tmp4 = cResult[1];
      }
      let closure_1 = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchGuildChannelTabStore];
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const fn = function l() {
          return SearchGuildChannelTabStore.getTextChannels(closure_1);
        };
        cResult[3] = tmp4;
        cResult[4] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      const tmpResult5 = searchContext(onPressGuildTextChannel[22]);
      const stateFromStores = tmpResult5.useStateFromStores(tmp6, tmp8);
      if (cResult[5] !== searchContext) {
        let obj2 = { searchContext };
        cResult[5] = searchContext;
        cResult[6] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[6];
      }
      const tmpResult6 = searchContext(onPressGuildTextChannel[18]);
      onPressGuildTextChannel = tmpResult6.useOnPressGuildTextChannel(tmp9);
      if (cResult[7] !== stateFromStores) {
        const substr = stateFromStores.slice(0, 3);
        cResult[7] = stateFromStores;
        cResult[8] = substr;
        arr3 = substr;
      } else {
        arr3 = cResult[8];
      }
      if (cResult[9] !== searchContext) {
        const tmpResult7 = searchContext(onPressGuildTextChannel[23]);
        let smartSearchQuery = tmpResult7.getSmartSearchQuery(searchContext, "");
        cResult[9] = searchContext;
        cResult[10] = smartSearchQuery;
        tmp12 = smartSearchQuery;
      } else {
        tmp12 = cResult[10];
      }
      smartSearchQuery = tmp12;
      const tmpResult8 = searchContext(onPressGuildTextChannel[24]);
      const suggestedSearches1 = tmpResult8.useSuggestedSearches(tmp12, "guild_suggestions");
      ({ suggestedSearches, isLoadingSuggestedSearches } = suggestedSearches1);
      if (cResult[11] === onPressGuildTextChannel) {
        let tmp15;
        let tmp16;
        let tmp17;
        let tmp23;
        if (cResult[12] === searchContext) {
          tmp15 = cResult[13];
        }
        const onPress = tmp15;
        if (cResult[14] === tmp15) {
          if (cResult[15] === isLoadingSuggestedSearches) {
            if (cResult[16] === tmp12) {
              if (cResult[17] === arr3) {
                if (cResult[18] === suggestedSearches) {
                  tmp16 = cResult[19];
                }
                return tmp16;
              }
            }
          }
        }
        const items1 = [];
        if (0 === suggestedSearches.length) {
          if (!isLoadingSuggestedSearches) {
            tmp17 = items1;
          }
          cResult[14] = tmp15;
          cResult[15] = isLoadingSuggestedSearches;
          cResult[16] = tmp12;
          cResult[17] = arr3;
          cResult[18] = suggestedSearches;
          cResult[19] = tmp17;
          tmp16 = tmp17;
        }
        let element = { type: constants.SECTION, props: obj3 };
        const push = items1.push;
        obj3 = { title: intl.string(searchContext(onPressGuildTextChannel[14]).t.HbJ7eD) };
        intl = tmp(tmp2[14]).intl;
        push(element);
        if (null != tmp12) {
          if (0 === suggestedSearches.length) {
            let num17 = 0;
            if (isLoadingSuggestedSearches) {
              do {
                let obj4 = { type: constants.SUGGESTED_SEARCH_PLACEHOLDER, key: "suggested-search-skeleton-" + num17 };
                let _HermesInternal = HermesInternal;
                let push2 = items1.push;
                let push2Result = push2(obj4);
                num17 = num17 + 1;
                tmp17 = items1;
              } while (num17 < 3);
            }
          } else {
            const item = suggestedSearches.forEach((suggestedSearch) => {
              let obj;
              const element = { type: constants.SUGGESTED_SEARCH, props: obj };
              obj = { suggestedSearch, smartSearchQuery, variant: "compact" };
              items1.push(element);
            });
          }
        }
        const item1 = arr3.forEach((channel) => {
          let obj;
          const element = { type: constants.GUILD_TEXT_CHANNEL, props: obj };
          obj = { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress };
          items1.push(element);
        });
        if (cResult[20] !== items1) {
          const substr1 = items1.slice(0, 4);
          cResult[20] = items1;
          cResult[21] = substr1;
          tmp23 = substr1;
        } else {
          tmp23 = cResult[21];
        }
        tmp17 = tmp23;
      }
      const fn2 = function y(channelId) {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId };
        const result = obj.trackSuggestedSearchClicked(obj2);
        onPressGuildTextChannel(channelId);
      };
      cResult[11] = onPressGuildTextChannel;
      cResult[12] = searchContext;
      cResult[13] = fn2;
      tmp15 = fn2;
    }
  : (searchContext) => {
      let closure_1;
      searchContext = searchContext.searchContext;
      let stateFromStores;
      let memo1;
      let isLoadingSuggestedSearches;
      let obj = searchContext(stateFromStores[21]);
      const searchContextId = obj.getSearchContextId(searchContext);
      let obj2 = searchContext(stateFromStores[22]);
      let items = [isLoadingSuggestedSearches];
      stateFromStores = obj2.useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
      const obj3 = searchContext(stateFromStores[18]);
      const onPressGuildTextChannel = obj3.useOnPressGuildTextChannel({ searchContext });
      const items1 = [stateFromStores];
      const memo = memo1.useMemo(() => stateFromStores.slice(0, 3), items1);
      const items2 = [searchContext];
      memo1 = memo1.useMemo(() => {
        const obj = SmartSearchUtils;
        return obj.getSmartSearchQuery(searchContext, "");
      }, items2);
      const obj4 = searchContext(stateFromStores[24]);
      const suggestedSearches1 = obj4.useSuggestedSearches(memo1, "guild_suggestions");
      const suggestedSearches = suggestedSearches1.suggestedSearches;
      isLoadingSuggestedSearches = suggestedSearches1.isLoadingSuggestedSearches;
      const items3 = [onPressGuildTextChannel, searchContext];
      const onPress = memo1.useCallback((channelId) => {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId };
        const result = obj.trackSuggestedSearchClicked(obj2);
        onPressGuildTextChannel(channelId);
      }, items3);
      const items4 = [onPress, memo1, memo, suggestedSearches, isLoadingSuggestedSearches];
      return memo1.useMemo(() => {
        let intl;
        let obj;
        const items = [];
        if (0 === suggestedSearches.length) {
          if (!isLoadingSuggestedSearches) {
            if (0 === memo.length) {
              return items;
            }
          }
        }
        let element = { type: constants.SECTION, props: obj };
        obj = { title: intl.string(searchContext(stateFromStores[14]).t.HbJ7eD) };
        const push = items.push;
        intl = searchContext(stateFromStores[14]).intl;
        push(element);
        if (null != memo1) {
          if (0 === suggestedSearches.length) {
            let num3 = 0;
            if (isLoadingSuggestedSearches) {
              do {
                let obj2 = { type: constants.SUGGESTED_SEARCH_PLACEHOLDER, key: "suggested-search-skeleton-" + num3 };
                let _HermesInternal = HermesInternal;
                let push2 = items.push;
                let push2Result = push2(obj2);
                num3 = num3 + 1;
              } while (num3 < 3);
              return items;
            }
          } else {
            const item = suggestedSearches.forEach((suggestedSearch) => {
              let obj;
              const element = { type: constants.SUGGESTED_SEARCH, props: obj };
              obj = { suggestedSearch, smartSearchQuery: memo1, variant: "compact" };
              items.push(element);
            });
          }
        }
        const item1 = memo.forEach((channel) => {
          let obj;
          const element = { type: constants.GUILD_TEXT_CHANNEL, props: obj };
          obj = { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress };
          items.push(element);
        });
        return items.slice(0, 4);
      }, items4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp4;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] !== arg0) {
        const fn = function i() {
          return SearchHistoryStore.getSearchHistory(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      [tmp6, importDefault] = react.useState(tmp4);
      _slicedToArray(react.useState(tmp4), 2);
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
        tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(1491);
      const focusEffect = tmpResult.useFocusEffect(tmp7);
      return tmp6;
    }
  : (arg0) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      [first, closure_1] = react.useState(() => SearchHistoryStore.getSearchHistory(closure_0));
      const items = [arg0];
      const obj = require("Link");
      const focusEffect = obj.useFocusEffect(
        react.useCallback(() => {
          function handleChange() {
            closure_1_1(SearchHistoryStore.getSearchHistory(handleChange));
          }
          closure_1(SearchHistoryStore.getSearchHistory(handleChange));
          let result = SearchHistoryStore.addReactChangeListener(handleChange);
          return () => {
            const result = SearchHistoryStore.removeReactChangeListener(handleChange);
          };
        }, items),
      );
      return first;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let first;
        let isInitialSearchQuery;
        let isLoadingMediaGrid;
        let obj10;
        let obj12;
        let obj9;
        let onJumpToMedia;
        let suggestedData;
        let tmp11;
        let tmp16;
        let tmp9;
        let obj = searchContext(576);
        const cResult = obj.c(42);
        searchContext = searchContext.searchContext;
        ({ onJumpToMedia, suggestedData } = searchContext);
        const width = searchContext.width;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SearchQueryStore, SearchMessageStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== searchContext) {
          const fn = function n() {
            const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
            const obj = SearchUtils;
            const searchTabFetchId = obj.getSearchTabFetchId(searchContext, map1.MEDIA, searchResultsQuery);
            const obj2 = {
              messages: SearchMessageStore.getMessages(searchTabFetchId),
              isLoadingMediaGrid: !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId),
              isInitialSearchQuery: SearchQueryStore.isInitialSearchQuery(searchContext),
            };
            return obj2;
          };
          cResult[1] = searchContext;
          cResult[2] = fn;
          tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        const tmp2Result = searchContext(504);
        const stateFromStoresObject = tmp2Result.useStateFromStoresObject(first, tmp9);
        const messages = stateFromStoresObject.messages;
        ({ isLoadingMediaGrid, isInitialSearchQuery } = stateFromStoresObject);
        if (cResult[3] !== searchContext) {
          const tmp2Result2 = searchContext(11968);
          const searchContextId = tmp2Result2.getSearchContextId(searchContext);
          cResult[3] = searchContext;
          cResult[4] = searchContextId;
          tmp11 = searchContextId;
        } else {
          tmp11 = cResult[4];
        }
        const arr3 = closure_21(tmp11);
        const tmp15 = messages(16815)(width);
        dependencyMap = tmp15;
        if (null != messages) {
          let arr4;
          if (0 !== messages.length) {
            let items1;
            if (cResult[5] === messages) {
              if (cResult[6] === searchContext) {
                items1 = cResult[7];
              }
              arr4 = tmp16;
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
              tmp16 = items1;
            }
          }
          if (cResult[8] === arr4) {
            let tmp27;
            if (cResult[9] === searchContext) {
              tmp27 = cResult[10];
            }
            const obj7 = searchContext(16812);
            const onPressMediaItem = obj7.useOnPressMediaItem(tmp27);
            if (cResult[11] === messages) {
              let tmp33;
              let tmp34;
              let tmp39;
              if (cResult[12] === onPressMediaItem) {
                tmp33 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { placeholderHeight, numColumns: 1 };
                cResult[14] = obj2;
                tmp34 = obj2;
              } else {
                tmp34 = cResult[14];
              }
              const tmp29Result = searchContext(16816);
              const fullscreenPlaceholderCount = tmp29Result.useFullscreenPlaceholderCount(tmp34);
              if (cResult[15] === tmp33) {
                if (cResult[16] === isInitialSearchQuery) {
                  if (cResult[17] === arr4) {
                    if (cResult[18] === tmp15) {
                      if (cResult[19] === onJumpToMedia) {
                        if (cResult[20] === fullscreenPlaceholderCount) {
                          if (cResult[21] === searchContext) {
                            if (cResult[22] === arr3) {
                              if (cResult[23] === suggestedData) {
                                tmp39 = cResult[24];
                              }
                              if (cResult[36] === isLoadingMediaGrid) {
                                let tmp67;
                                if (cResult[37] === tmp15) {
                                  tmp67 = cResult[38];
                                }
                                if (cResult[39] === tmp67) {
                                  let tmp68;
                                  if (cResult[40] === tmp39) {
                                    tmp68 = cResult[41];
                                  }
                                  return tmp68;
                                }
                                class G {
                                  constructor(arg0) {
                                    media = searchContext.media;
                                    arr = messages;
                                    found = undefined;
                                    originView = searchContext.originView;
                                    if (messages != null) {
                                      found = arr.find((id) => id.id === media.messageId);
                                    }
                                    tmp3 = closure_2;
                                    tmp2 = closure_0;
                                    obj = closure_0(closure_2[28]);
                                    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                                      tmp6 = closure_1;
                                      tmp7 = closure_1(tmp3[29]);
                                      obj1 = { entryPoint: null };
                                      showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                                      obj1.entryPoint = tmp2(
                                        tmp3[30],
                                      ).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                                      result = showAgeVerificationGetStartedModal(obj1);
                                    } else {
                                      tmp4 = closure_4;
                                      tmp5 = closure_4(media, originView);
                                    }
                                    return;
                                  }
                                }
                                cResult[39] = tmp67;
                                cResult[40] = tmp39;
                                cResult[41] = tmp73;
                                tmp68 = tmp73;
                              }
                              let fn2 = null;
                              if (isLoadingMediaGrid) {
                                fn2 = () =>
                                  jsx(MediaGridPlaceholder.RecentsMediaGridPlaceholder, {
                                    numRows: 3,
                                    visible: true,
                                    size,
                                  });
                              }
                              cResult[36] = isLoadingMediaGrid;
                              cResult[37] = tmp15;
                              class G {
                                constructor(arg0) {
                                  media = searchContext.media;
                                  arr = messages;
                                  found = undefined;
                                  originView = searchContext.originView;
                                  if (messages != null) {
                                    found = arr.find((id) => id.id === media.messageId);
                                  }
                                  tmp3 = closure_2;
                                  tmp2 = closure_0;
                                  obj = closure_0(closure_2[28]);
                                  if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                                    tmp6 = closure_1;
                                    tmp7 = closure_1(tmp3[29]);
                                    obj1 = { entryPoint: null };
                                    showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                                    obj1.entryPoint = tmp2(
                                      tmp3[30],
                                    ).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                                    result = showAgeVerificationGetStartedModal(obj1);
                                  } else {
                                    tmp4 = closure_4;
                                    tmp5 = closure_4(media, originView);
                                  }
                                  return;
                                }
                              }
                              tmp67 = fn2;
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
                  originView = searchContext.originView;
                  if (messages != null) {
                    found = arr.find((id) => id.id === media.messageId);
                  }
                  tmp3 = closure_2;
                  tmp2 = closure_0;
                  obj = closure_0(closure_2[28]);
                  if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                    tmp6 = closure_1;
                    tmp7 = closure_1(tmp3[29]);
                    obj1 = { entryPoint: null };
                    showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                    obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                    result = showAgeVerificationGetStartedModal(obj1);
                  } else {
                    tmp4 = closure_4;
                    tmp5 = closure_4(media, originView);
                  }
                  return;
                }
              }
              if (!isInitialSearchQuery) {
                if (0 === arr8.length) {
                  let num20;
                  for (let num20 = 0; num20 < fullscreenPlaceholderCount; num20 = num20 + 1) {
                    let obj6 = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num20 };
                    let _HermesInternal = HermesInternal;
                    let push = arr8.push;
                    let arr = push(obj6);
                  }
                }
                cResult[15] = tmp33;
                cResult[16] = isInitialSearchQuery;
                cResult[17] = arr4;
                class G {
                  constructor(arg0) {
                    media = searchContext.media;
                    arr = messages;
                    found = undefined;
                    originView = searchContext.originView;
                    if (messages != null) {
                      found = arr.find((id) => id.id === media.messageId);
                    }
                    tmp3 = closure_2;
                    tmp2 = closure_0;
                    obj = closure_0(closure_2[28]);
                    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                      tmp6 = closure_1;
                      tmp7 = closure_1(tmp3[29]);
                      obj1 = { entryPoint: null };
                      showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                      obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                      result = showAgeVerificationGetStartedModal(obj1);
                    } else {
                      tmp4 = closure_4;
                      tmp5 = closure_4(media, originView);
                    }
                    return;
                  }
                }
                cResult[19] = onJumpToMedia;
                cResult[20] = fullscreenPlaceholderCount;
                cResult[21] = searchContext;
                cResult[22] = arr3;
                cResult[23] = suggestedData;
                cResult[24] = arr8;
                tmp39 = arr8;
              }
              if (arr3.length > 0) {
                let tmp42;
                if (cResult[25] !== searchContext) {
                  cResult[25] = searchContext;
                  cResult[26] = <closure_17 searchContext={searchContext} />;
                  class G {
                    constructor(arg0) {
                      media = searchContext.media;
                      arr = messages;
                      found = undefined;
                      originView = searchContext.originView;
                      if (messages != null) {
                        found = arr.find((id) => id.id === media.messageId);
                      }
                      tmp3 = closure_2;
                      tmp2 = closure_0;
                      obj = closure_0(closure_2[28]);
                      if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                        tmp6 = closure_1;
                        tmp7 = closure_1(tmp3[29]);
                        obj1 = { entryPoint: null };
                        showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                        obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                        result = showAgeVerificationGetStartedModal(obj1);
                      } else {
                        tmp4 = closure_4;
                        tmp5 = closure_4(media, originView);
                      }
                      return;
                    }
                  }
                } else {
                  tmp42 = cResult[26];
                }
                let element = { type: constants.SECTION, props: obj9 };
                const push2 = arr8.push;
                obj9 = { title: tmp49(searchContext(1126).t.ZZpBr4), trailing: tmp42 };
                const intl = tmp29(1126).intl;
                class G {
                  constructor(arg0) {
                    media = searchContext.media;
                    arr = messages;
                    found = undefined;
                    originView = searchContext.originView;
                    if (messages != null) {
                      found = arr.find((id) => id.id === media.messageId);
                    }
                    tmp3 = closure_2;
                    tmp2 = closure_0;
                    obj = closure_0(closure_2[28]);
                    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                      tmp6 = closure_1;
                      tmp7 = closure_1(tmp3[29]);
                      obj1 = { entryPoint: null };
                      showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                      obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                      result = showAgeVerificationGetStartedModal(obj1);
                    } else {
                      tmp4 = closure_4;
                      tmp5 = closure_4(media, originView);
                    }
                    return;
                  }
                }
                push2(element);
                const item1 = arr3.forEach((searchHistoryItem) => {
                  let obj;
                  const element = { type: constants.SEARCH_HISTORY_ITEM, props: obj };
                  obj = { searchHistoryItem, searchContext };
                  arr8.push(element);
                });
              }
              if (suggestedData != null) {
                const item2 = suggestedData.forEach((item) => arr8.push(item));
              }
              if (arr4.length > 0) {
                let tmp53;
                let tmp57;
                let tmp62;
                const _Symbol2 = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp29(1126).intl;
                  const stringResult = intl2.string(searchContext(1126).t.LBYpDH);
                  cResult[27] = stringResult;
                  tmp53 = stringResult;
                } else {
                  tmp53 = cResult[27];
                }
                if (cResult[28] !== onJumpToMedia) {
                  const element1 = { type: constants.SECTION, props: obj10 };
                  obj10 = { title: tmp53, trailing: null };
                  class G {
                    constructor(arg0) {
                      media = searchContext.media;
                      arr = messages;
                      found = undefined;
                      originView = searchContext.originView;
                      if (messages != null) {
                        found = arr.find((id) => id.id === media.messageId);
                      }
                      tmp3 = closure_2;
                      tmp2 = closure_0;
                      obj = closure_0(closure_2[28]);
                      if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                        tmp6 = closure_1;
                        tmp7 = closure_1(tmp3[29]);
                        obj1 = { entryPoint: null };
                        showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                        obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                        result = showAgeVerificationGetStartedModal(obj1);
                      } else {
                        tmp4 = closure_4;
                        tmp5 = closure_4(media, originView);
                      }
                      return;
                    }
                  }
                  cResult[28] = onJumpToMedia;
                  cResult[29] = element1;
                  tmp57 = element1;
                } else {
                  tmp57 = cResult[29];
                }
                arr8.push(tmp57);
                if (cResult[30] !== arr4) {
                  const substr = arr4.slice(0, 9);
                  cResult[30] = arr4;
                  cResult[31] = substr;
                  tmp62 = substr;
                } else {
                  tmp62 = cResult[31];
                }
                if (cResult[32] === tmp33) {
                  if (cResult[33] === tmp15) {
                    let tmp64;
                    if (cResult[34] === tmp62) {
                      tmp64 = cResult[35];
                    }
                    arr8.push(tmp64);
                  }
                }
                const element2 = { type: null, props: obj12 };
                class G {
                  constructor(arg0) {
                    media = searchContext.media;
                    arr = messages;
                    found = undefined;
                    originView = searchContext.originView;
                    if (messages != null) {
                      found = arr.find((id) => id.id === media.messageId);
                    }
                    tmp3 = closure_2;
                    tmp2 = closure_0;
                    obj = closure_0(closure_2[28]);
                    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                      tmp6 = closure_1;
                      tmp7 = closure_1(tmp3[29]);
                      obj1 = { entryPoint: null };
                      showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                      obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                      result = showAgeVerificationGetStartedModal(obj1);
                    } else {
                      tmp4 = closure_4;
                      tmp5 = closure_4(media, originView);
                    }
                    return;
                  }
                }
                obj12 = { media: tmp62, mediaSize: tmp15, onPress: tmp33, animate: true };
                cResult[32] = tmp33;
                cResult[33] = tmp15;
                cResult[34] = tmp62;
                cResult[35] = element2;
                tmp64 = element2;
              }
            }
            class G {
              constructor(arg0) {
                media = searchContext.media;
                arr = messages;
                found = undefined;
                originView = searchContext.originView;
                if (messages != null) {
                  found = arr.find((id) => id.id === media.messageId);
                }
                tmp3 = closure_2;
                tmp2 = closure_0;
                obj = closure_0(closure_2[28]);
                if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
                  tmp6 = closure_1;
                  tmp7 = closure_1(tmp3[29]);
                  obj1 = { entryPoint: null };
                  showAgeVerificationGetStartedModal = tmp7.showAgeVerificationGetStartedModal;
                  obj1.entryPoint = tmp2(tmp3[30]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW;
                  result = showAgeVerificationGetStartedModal(obj1);
                } else {
                  tmp4 = closure_4;
                  tmp5 = closure_4(media, originView);
                }
                return;
              }
            }
            cResult[11] = messages;
            cResult[12] = onPressMediaItem;
            cResult[13] = G;
            tmp33 = G;
          }
          const obj13 = { searchContext, allMediaResults: arr4 };
          cResult[8] = arr4;
          cResult[10] = obj13;
          tmp27 = obj13;
        }
        arr4 = EMPTY_MEDIA_RESULTS;
      }
    : (searchContext) => {
        searchContext = searchContext.searchContext;
        const onJumpToMedia = searchContext.onJumpToMedia;
        const suggestedData = searchContext.suggestedData;
        let length;
        let onPressMediaItem;
        let fullscreenPlaceholderCount;
        const width = searchContext.width;
        let obj = searchContext(suggestedData[22]);
        let items = [onPressMediaItem, length];
        const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
          const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
          const obj = SearchUtils;
          const searchTabFetchId = obj.getSearchTabFetchId(searchContext, map1.MEDIA, searchResultsQuery);
          const obj2 = {
            messages: SearchMessageStore.getMessages(searchTabFetchId),
            isLoadingMediaGrid: !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId),
            isInitialSearchQuery: SearchQueryStore.isInitialSearchQuery(searchContext),
          };
          return obj2;
        });
        const messages = stateFromStoresObject.messages;
        const isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
        const isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
        let obj2 = searchContext(suggestedData[21]);
        const tmp2 = closure_21(obj2.getSearchContextId(searchContext));
        length = tmp2;
        const tmp3 = onJumpToMedia(suggestedData[26])(width);
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
        const obj3 = searchContext(suggestedData[18]);
        onPressMediaItem = obj3.useOnPressMediaItem({ searchContext, allMediaResults: memo });
        const items2 = [messages, onPressMediaItem];
        const onPress = isInitialSearchQuery.useCallback((media) => {
          media = media.media;
          let found;
          const originView = media.originView;
          if (messages != null) {
            found = messages.find((id) => id.id === media.messageId);
          }
          const obj = ExplicitMediaRedactionNativeUtils;
          if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
            const obj2 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW,
            };
            const showAgeVerificationGetStartedModal =
              AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
            AgeVerificationActionCreatorsDefault;
            const result = showAgeVerificationGetStartedModal(obj2);
          } else {
            onPressMediaItem(media, originView);
          }
        }, items2);
        let obj4 = searchContext(suggestedData[31]);
        const obj5 = { placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 };
        fullscreenPlaceholderCount = obj4.useFullscreenPlaceholderCount(obj5);
        const items3 = [
          onPress,
          isInitialSearchQuery,
          memo,
          tmp3,
          onJumpToMedia,
          fullscreenPlaceholderCount,
          searchContext,
          tmp2,
          suggestedData,
        ];
        const items4 = [isLoadingMediaGrid, tmp3];
        const data = isInitialSearchQuery.useMemo(() => {
          let intl;
          let intl2;
          let obj2;
          let obj4;
          let obj6;
          const items = [];
          if (!isInitialSearchQuery) {
            if (0 === items.length) {
              let num3;
              for (let num3 = 0; num3 < fullscreenPlaceholderCount; num3 = num3 + 1) {
                let obj = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num3 };
                let _HermesInternal = HermesInternal;
                let push = items.push;
                let arr = push(obj);
              }
              return items;
            }
          }
          if (length.length > 0) {
            let element = { type: constants.SECTION, props: obj2 };
            const push2 = items.push;
            obj2 = { title: intl.string(searchContext(suggestedData[14]).t.ZZpBr4), trailing: null };
            intl = searchContext(suggestedData[14]).intl;
            push2(element);
            const item = length.forEach((searchHistoryItem) => {
              let obj;
              const element = { type: constants.SEARCH_HISTORY_ITEM, props: obj };
              obj = { searchHistoryItem, searchContext };
              items.push(element);
            });
          }
          if (suggestedData != null) {
            const item1 = suggestedData.forEach((item) => items.push(item));
          }
          if (memo.length > 0) {
            const element1 = { type: constants.SECTION, props: obj4 };
            const push3 = items.push;
            obj4 = { title: intl2.string(searchContext(suggestedData[14]).t.LBYpDH), trailing: null };
            intl2 = searchContext(suggestedData[14]).intl;
            push3(element1);
            const element2 = { type: constants.MEDIA_GRID, props: obj6 };
            const push4 = items.push;
            obj6 = { media: memo.slice(0, 9), mediaSize, onPress, animate: true };
            push4(element2);
          }
          return items;
        }, items3);
        const ListFooterComponent = isInitialSearchQuery.useMemo(() => {
          let fn = null;
          if (isLoadingMediaGrid) {
            fn = () =>
              jsx(searchContext(suggestedData[32]).RecentsMediaGridPlaceholder, { numRows: 3, visible: true, size });
          }
          return fn;
        }, items4);
        return jsx(onJumpToMedia(suggestedData[33]), { data, ListFooterComponent });
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let tmp2;
        const obj = react2;
        const cResult = obj.c(5);
        if (cResult[0] !== searchContext.searchContext) {
          const obj2 = { searchContext: searchContext.searchContext };
          cResult[0] = searchContext.searchContext;
          cResult[1] = obj2;
          tmp2 = obj2;
        } else {
          tmp2 = cResult[1];
        }
        const tmp3 = closure_19(tmp2);
        if (cResult[2] === searchContext) {
          let tmp4;
          if (cResult[3] === tmp3) {
            tmp4 = cResult[4];
          }
          return tmp4;
        }
        const merged = Object.assign(searchContext);
        const tmp6 = <closure_22 suggestedData={tmp3} />;
        cResult[2] = searchContext;
        cResult[3] = tmp3;
        cResult[4] = tmp6;
        tmp4 = tmp6;
      }
    : (searchContext) => {
        const obj = { searchContext: searchContext.searchContext };
        const tmp = closure_19(obj);
        const merged = Object.assign(searchContext);
        return <closure_22 suggestedData={tmp} />;
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let tmp2;
        const obj = react2;
        const cResult = obj.c(5);
        if (cResult[0] !== searchContext.searchContext) {
          const obj2 = { searchContext: searchContext.searchContext };
          cResult[0] = searchContext.searchContext;
          cResult[1] = obj2;
          tmp2 = obj2;
        } else {
          tmp2 = cResult[1];
        }
        const tmp3 = closure_20(tmp2);
        if (cResult[2] === searchContext) {
          let tmp4;
          if (cResult[3] === tmp3) {
            tmp4 = cResult[4];
          }
          return tmp4;
        }
        const merged = Object.assign(searchContext);
        const tmp6 = <closure_22 suggestedData={tmp3} />;
        cResult[2] = searchContext;
        cResult[3] = tmp3;
        cResult[4] = tmp6;
        tmp4 = tmp6;
      }
    : (searchContext) => {
        const obj = { searchContext: searchContext.searchContext };
        const tmp = closure_20(obj);
        const merged = Object.assign(searchContext);
        return <closure_22 suggestedData={tmp} />;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let onJumpToMedia;
        let searchContext;
        let width;
        const obj = react2;
        const cResult = obj.c(12);
        ({ searchContext, onJumpToMedia, width } = arg0);
        const type = searchContext.type;
        if (SearchTypes.DMS === type) {
          if (cResult[0] === onJumpToMedia) {
            if (cResult[1] === searchContext) {
              let tmp12;
              if (cResult[2] === width) {
                tmp12 = cResult[3];
              }
              return tmp12;
            }
          }
          const tmp15 = <closure_23 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
          cResult[0] = onJumpToMedia;
          cResult[1] = searchContext;
          cResult[2] = width;
          cResult[3] = tmp15;
          tmp12 = tmp15;
        } else if (SearchTypes.GUILD === type) {
          if (cResult[4] === onJumpToMedia) {
            if (cResult[5] === searchContext) {
              let tmp8;
              if (cResult[6] === width) {
                tmp8 = cResult[7];
              }
              return tmp8;
            }
          }
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
              let tmp4;
              if (cResult[10] === width) {
                tmp4 = cResult[11];
              }
              return tmp4;
            }
          }
          const tmp7 = <closure_22 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
          cResult[8] = onJumpToMedia;
          cResult[9] = searchContext;
          cResult[10] = width;
          cResult[11] = tmp7;
          tmp4 = tmp7;
        }
      }
    : (arg0) => {
        let onJumpToMedia;
        let searchContext;
        let width;
        ({ searchContext, onJumpToMedia, width } = arg0);
        const type = searchContext.type;
        if (SearchTypes.DMS === type) {
          return <closure_23 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
        } else if (SearchTypes.GUILD === type) {
          return <closure_24 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
        } else {
          if (SearchTypes.GUILD_CHANNEL !== type) {
            if (SearchTypes.CHANNEL !== type) {
              return null;
            }
          }
          return <closure_22 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
        }
      },
);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default memoResult;
