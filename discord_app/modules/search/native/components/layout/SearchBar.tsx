// discord_app/modules/search/native/components/layout/SearchBar.tsx
import util from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import SearchPlatformUtils from "../../SearchPlatformUtils.tsx";
import search_tracking_TrackingDefault from "../../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../../SearchPlatformActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import SearchQueryStore from "../../stores/SearchQueryStore.tsx";

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(7878);
({ SEARCH_BAR_HEIGHT: c10, SearchQueryTagTypes: closure_11 } = SearchConstants);
const SearchFilterAddLocations = fn(7877).SearchFilterAddLocations;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles((minHeight) => {
  let obj = { searchBar: null, icon: null };
  obj = { minHeight: minHeight + 2 };
  obj.searchBar = obj;
  obj.icon = { width: 32, minHeight, justifyContent: "center", zIndex: 10 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default noop.memo(
  noop.forwardRef((searchContext, arg1) => {
    searchContext = searchContext.searchContext;
    const setSuggestionsDismissed = searchContext.setSuggestionsDismissed;
    let stateFromStores;
    let ref;
    let obj = searchContext(stateFromStores[15]);
    let tmp = closure_15(closure_10 * Math.min(2, obj.useFontScale()));
    const items = [SearchQueryStore];
    const items1 = [searchContext];
    stateFromStores = searchContext(stateFromStores[14]).useStateFromStores(
      items,
      () => SearchQueryStore.getTags(searchContext),
      items1,
    );
    const items2 = [stateFromStores];
    const items3 = [stateFromStores];
    const memo = ref.useMemo(() => stateFromStores.map(SearchPlatformUtils.toSearchBarTag), items2);
    const memo1 = ref.useMemo(() => {
      if (0 !== stateFromStores.length) {
        const mapped = stateFromStores.map((text) => text.text);
        const joined = mapped.join(", ");
        const intl = util.intl;
        const obj = { text: joined };
        return intl.formatToPlainString(util.t["0zoRaK"], obj);
      }
    }, items3);
    ref = ref.useRef(null);
    closure_129_0 = searchContext;
    let obj2 = searchContext(stateFromStores[14]);
    const items4 = [SearchQueryStore];
    const items5 = [searchContext];
    const stateFromStores1 = searchContext(stateFromStores[14]).useStateFromStores(
      items4,
      () => {
        const type = searchContext.type;
        const channelIds = SearchQueryStore.getChannelIds(searchContext);
        if (SearchTypes.GUILD_CHANNEL !== type) {
          if (SearchTypes.GUILD !== type) {
            if (SearchTypes.CHANNEL === type) {
              const channel = ChannelStore.getChannel(searchContext.channelId);
              if (null == channel) {
                const intl4 = util.intl;
                let stringResult = intl4.string(util.t["5h0QOP"]);
              } else {
                let obj = useChannelName;
                const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
                const intl3 = util.intl;
                obj = { guildName: channelName };
                stringResult = intl3.formatToPlainString(util.t.LDpotA, obj);
              }
              return stringResult;
            } else if (SearchTypes.DMS === type) {
              const intl2 = util.intl;
              return intl2.string(util.t.m7OrlR);
            } else {
              const intl = util.intl;
              return intl.string(util.t["5h0QOP"]);
            }
          }
        }
        if (0 === channelIds.size) {
          const guild = GuildStore.getGuild(searchContext.guildId);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          if (null == name) {
            const intl7 = util.intl;
            let stringResult1 = intl7.string(util.t["5h0QOP"]);
          } else {
            const intl6 = util.intl;
            obj = { guildName: name };
            stringResult1 = intl6.formatToPlainString(util.t.LDpotA, obj);
          }
        } else {
          const intl5 = util.intl;
          return intl5.string(util.t["5h0QOP"]);
        }
      },
      items5,
    );
    const imperativeHandle = ref.useImperativeHandle(arg1, () => ({
      setText(arg0) {
        const current = ref.current;
        let setTextResult;
        if (current != null) {
          setTextResult = current.setText(arg0);
        }
        return setTextResult;
      },
      getText() {
        const current = ref.current;
        let str;
        if (current != null) {
          str = current.getText();
        }
        if (str == null) {
          str = "";
        }
        return str;
      },
      blur() {
        const current = ref.current;
        let blurResult;
        if (current != null) {
          blurResult = current.blur();
        }
        return blurResult;
      },
      focus() {
        const current = ref.current;
        let focusResult;
        if (current != null) {
          focusResult = current.focus();
        }
        return focusResult;
      },
      isFocused() {
        const current = ref.current;
        let flag;
        if (current != null) {
          flag = current.isFocused();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      },
      measure(arg0) {
        const current = ref.current;
        let measureResult;
        if (current != null) {
          measureResult = current.measure(arg0);
        }
        return measureResult;
      },
      measureInWindow(arg0) {
        const current = ref.current;
        let measureInWindowResult;
        if (current != null) {
          measureInWindowResult = current.measureInWindow(arg0);
        }
        return measureInWindowResult;
      },
      measureLayout(arg0, arg1, arg2) {
        const current = ref.current;
        let measureLayoutResult;
        if (current != null) {
          measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
        }
        return measureLayoutResult;
      },
    }));
    const items6 = [searchContext];
    const effect = ref.useEffect(
      () =>
        SearchPlatformUtilsDefault.subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
          let tmp = arg2;
          if (!arg2) {
            tmp = null == arg0;
          }
          if (!tmp) {
            const current = ref.current;
            if (current != null) {
              current.setText(arg0);
            }
          }
        }),
      items6,
    );
    const items7 = [searchContext];
    const items8 = [searchContext];
    const callback = ref.useCallback((arg0) => {
      closure_0 = arg0;
      if (SearchQueryStore.getTextInputValue(searchContext) !== arg0) {
        SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue(closure_0, true);
        });
        const result = SearchPlatformUtilsDefault.syncAutocompleteDebounced(searchContext);
        if (!SearchQueryStore.isAutocompleteVisible(searchContext)) {
          const tmp2Result = SearchPlatformUtilsDefault;
          if (isInitialSearchQueryResult) {
            const initialMessages = tmp2Result.fetchInitialMessages(searchContext);
          } else {
            const initialMessagesDebounced = tmp2Result.fetchInitialMessagesDebounced(searchContext);
          }
          isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
        }
      }
    }, items7);
    const items9 = [searchContext, setSuggestionsDismissed];
    const callback1 = ref.useCallback((arg0) => {
      closure_0 = arg0;
      let obj = SearchQueryStore;
      const tmp2 = SearchQueryStore.getTags(searchContext)[arg0];
      const type = tmp2;
      if (null != tmp2) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const intl = util.intl;
        obj = { text: tmp2.text };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
        if (tmp2.type === constants.COMPLETE) {
          obj = {
            searchContext,
            searchTokenType: tmp2.searchTokenType,
            isDefault: tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD,
          };
          let result = search_tracking_TrackingDefault.trackSearchFilterRemove(obj);
        }
        SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (removeTag) => {
          removeTag.removeTag(closure_0);
          if (type.type === constants.PREFIX) {
            const result = removeTag.restoreDraftTextInputValue();
          }
        });
        const result1 = SearchPlatformUtilsDefault.syncAutocompleteDebounced(searchContext);
        const queryString = obj.getQueryString(searchContext);
        if (queryString !== searchResultsQuery) {
          const tmp6Result = SearchPlatformUtilsDefault;
          if (tmp11) {
            const initialMessages = tmp6Result.fetchInitialMessages(searchContext);
          } else {
            const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(searchContext);
          }
        }
        searchResultsQuery = obj.getSearchResultsQuery(searchContext);
      }
    }, items8);
    const memo2 = ref.useMemo(
      () => () => {
        closure_1_1();
        let obj = SearchQueryStore;
        const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
        const trimmed = SearchQueryStore.getTextInputValue(searchContext).trim();
        let result = null != prefixTag;
        if (result) {
          result = "" !== trimmed;
        }
        if (result) {
          result = searchContext(stateFromStores[20]).isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
          const obj2 = searchContext(stateFromStores[20]);
        }
        if (result) {
          setSuggestionsDismissed(stateFromStores[17]).updateSearchQuery(searchContext, (setTextInputValue) => {
            setTextInputValue.setTextInputValue("");
            setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
            const result = setTextInputValue.restoreDraftTextInputValue();
          });
          const obj3 = setSuggestionsDismissed(stateFromStores[17]);
          obj = { searchContext, searchTokenType: null, location: null };
          ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
          setSuggestionsDismissed(stateFromStores[19]).trackSearchFilterAdd(obj);
          const obj4 = setSuggestionsDismissed(stateFromStores[19]);
        }
        if (!obj.isQueryStringEmpty(searchContext)) {
          setSuggestionsDismissed(stateFromStores[17]).updateSearchQuery(searchContext, (markExplicitSearchSubmitted) =>
            markExplicitSearchSubmitted.markExplicitSearchSubmitted(),
          );
          const obj6 = setSuggestionsDismissed(stateFromStores[17]);
          const initialMessages = setSuggestionsDismissed(stateFromStores[16]).fetchInitialMessages(searchContext);
          const obj7 = setSuggestionsDismissed(stateFromStores[16]);
        }
        const str = SearchQueryStore.getTextInputValue(searchContext);
      },
      items9,
    );
    const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
    obj = {
      ref,
      accessibilityHint: memo1,
      autoFocus: true,
      defaultValue: textInputValue,
      style: tmp.searchBar,
      tags: memo,
      icon: null,
      onChangeText: null,
      onRemove: null,
      placeholder: null,
      onSubmitEditing: null,
      leadingFade: true,
      horizontal: true,
      autoClearInputOnTagAdd: false,
    };
    obj = { style: tmp.icon, children: null };
    let obj3 = searchContext(stateFromStores[14]);
    obj.children = jsx(setSuggestionsDismissed(stateFromStores[22]), { searchContext });
    obj.icon = <View style={tmp.icon}>{null}</View>;
    obj.onChangeText = callback;
    obj.onRemove = callback1;
    obj.placeholder = stateFromStores1;
    obj.onSubmitEditing = memo2;
    return jsx(setSuggestionsDismissed(stateFromStores[21]), { style: tmp.icon, children: null });
  }),
);
