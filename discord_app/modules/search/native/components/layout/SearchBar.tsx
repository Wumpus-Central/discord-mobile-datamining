// discord_app/modules/search/native/components/layout/SearchBar.tsx
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../../stores/ChannelStore.tsx";
import closure_6 from "../../../../../stores/GuildStore.tsx";
import closure_7 from "../../../../../stores/RelationshipStore.tsx";
import closure_8 from "../../../../../stores/UserStore.tsx";
import closure_9 from "../../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../../SearchConstants.tsx";
import { SearchFilterAddLocations } from "../../tracking/TrackingConstants.tsx";
import { SearchTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ SEARCH_BAR_HEIGHT: c10, SearchQueryTagTypes: unpackModuleId } = MessageEmbedTypes);
let closure_15 = createCacheKey.createStyles((minHeight) => {
  const searchBar = { minHeight: minHeight + 2 };
  const icon = { width: 32, minHeight, justifyContent: "center", zIndex: 10 };
  return { searchBar, icon };
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((searchContext, ref) => {
  searchContext = searchContext.searchContext;
  const setSuggestionsDismissed = searchContext.setSuggestionsDismissed;
  let stateFromStores;
  ref = undefined;
  let obj = searchContext(stateFromStores[15]);
  let tmp = callback(closure_10 * Math.min(2, obj.useFontScale()));
  const items = [textInputValue];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[14]).useStateFromStores(items, () => closure_1_9.getTags(searchContext), items1);
  const items2 = [stateFromStores];
  const items3 = [stateFromStores];
  const memo = ref.useMemo(() => stateFromStores.map(searchContext(stateFromStores[16]).toSearchBarTag), items2);
  const memo1 = ref.useMemo(() => {
    if (0 !== stateFromStores.length) {
      const mapped = arr.map((text) => text.text);
      const joined = mapped.join(", ");
      const intl = searchContext(stateFromStores[12]).intl;
      const obj = { text: null };
      obj[0] = joined;
      return intl.formatToPlainString(searchContext(stateFromStores[12]).t["0zoRaK"], obj);
    }
    arr = stateFromStores;
  }, items3);
  ref = ref.useRef(null);
  let obj2 = searchContext(stateFromStores[14]);
  const items4 = [textInputValue];
  const items5 = [searchContext];
  const stateFromStores1 = searchContext(stateFromStores[14]).useStateFromStores(items4, () => {
    const type = searchContext.type;
    const channelIds = closure_1_9.getChannelIds(searchContext);
    if (closure_1_13.GUILD_CHANNEL !== type) {
      if (tmp3.GUILD !== type) {
        if (tmp3.CHANNEL === type) {
          const channel = closure_1_5.getChannel(tmp.channelId);
          if (null == channel) {
            const intl4 = searchContext(stateFromStores[12]).intl;
            let stringResult = intl4.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
          } else {
            let obj = searchContext(stateFromStores[13]);
            const channelName = obj.computeChannelName(channel, closure_1_8, closure_1_7, true);
            const intl3 = searchContext(stateFromStores[12]).intl;
            obj = { guildName: null };
            obj[0] = channelName;
            stringResult = intl3.formatToPlainString(searchContext(stateFromStores[12]).t.LDpotA, obj);
          }
          return stringResult;
        } else if (tmp3.DMS === type) {
          const intl2 = searchContext(stateFromStores[12]).intl;
          return intl2.string(searchContext(stateFromStores[12]).t.m7OrlR);
        } else {
          const intl = searchContext(stateFromStores[12]).intl;
          return intl.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
        }
      }
    }
    if (0 === channelIds.size) {
      const guild = closure_1_6.getGuild(tmp.guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = searchContext(stateFromStores[12]).intl;
        let stringResult1 = intl7.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
      } else {
        const intl6 = searchContext(stateFromStores[12]).intl;
        obj = { guildName: null };
        obj[0] = name;
        stringResult1 = intl6.formatToPlainString(searchContext(stateFromStores[12]).t.LDpotA, obj);
      }
    } else {
      const intl5 = searchContext(stateFromStores[12]).intl;
      return intl5.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
    }
  }, items5);
  const imperativeHandle = ref.useImperativeHandle(ref, () => ({
    setText(arg0) {
      const current = closure_3.current;
      let setTextResult;
      if (current != null) {
        setTextResult = current.setText(arg0);
      }
      return setTextResult;
    },
    getText() {
      const current = closure_3.current;
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
      const current = closure_3.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = closure_3.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = closure_3.current;
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
      const current = closure_3.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = closure_3.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_3.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items6 = [searchContext];
  const effect = ref.useEffect(() => setSuggestionsDismissed(stateFromStores[16]).subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
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
  }), items6);
  const items7 = [searchContext];
  const items8 = [searchContext];
  callback = ref.useCallback((arg0) => {
    closure_0 = arg0;
    if (closure_1_9.getTextInputValue(closure_0) !== arg0) {
      setSuggestionsDismissed(stateFromStores[17]).updateSearchQuery(tmp, (setTextInputValue) => {
        setTextInputValue.setTextInputValue(closure_0, true);
      });
      const obj2 = setSuggestionsDismissed(stateFromStores[17]);
      const tmp2 = setSuggestionsDismissed;
      const tmp3 = stateFromStores;
      const result = setSuggestionsDismissed(stateFromStores[16]).syncAutocompleteDebounced(tmp);
      if (!obj.isAutocompleteVisible(tmp)) {
        const tmp2Result = tmp2(tmp3[16]);
        if (isInitialSearchQueryResult) {
          const initialMessages = tmp2Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp2Result.fetchInitialMessagesDebounced(tmp);
        }
        isInitialSearchQueryResult = obj.isInitialSearchQuery(tmp);
      }
      const obj3 = setSuggestionsDismissed(stateFromStores[16]);
    }
  }, items7);
  const items9 = [searchContext, setSuggestionsDismissed];
  const callback1 = ref.useCallback((arg0) => {
    closure_0 = arg0;
    let obj = closure_1_9;
    const tmp2 = closure_1_9.getTags(closure_0)[arg0];
    closure_1 = tmp2;
    if (null != tmp2) {
      const AccessibilityAnnouncer = searchContext(stateFromStores[18]).AccessibilityAnnouncer;
      const intl = searchContext(stateFromStores[12]).intl;
      obj = { text: null };
      obj[0] = tmp2.text;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(searchContext(stateFromStores[12]).t.srlxB8, obj));
      if (tmp2.type === closure_1_11.COMPLETE) {
        obj = { searchContext: null, searchTokenType: null, isDefault: null };
        obj[0] = tmp;
        obj[1] = tmp2.searchTokenType;
        obj[2] = tmp2.location === closure_1_12.CLIENT_AUTO_ADD;
        let result = setSuggestionsDismissed(tmp15[19]).trackSearchFilterRemove(obj);
        const obj2 = setSuggestionsDismissed(tmp15[19]);
      }
      setSuggestionsDismissed(stateFromStores[17]).updateSearchQuery(tmp, (removeTag) => {
        removeTag.removeTag(closure_0);
        if (type.type === closure_1_11.PREFIX) {
          const result = removeTag.restoreDraftTextInputValue();
        }
      });
      const obj4 = setSuggestionsDismissed(stateFromStores[17]);
      const tmp6 = setSuggestionsDismissed;
      const result1 = setSuggestionsDismissed(stateFromStores[16]).syncAutocompleteDebounced(tmp);
      const queryString = obj.getQueryString(tmp);
      const obj5 = setSuggestionsDismissed(stateFromStores[16]);
      if (queryString !== searchResultsQuery) {
        const tmp6Result = tmp6(tmp15[16]);
        if (tmp11) {
          const initialMessages = tmp6Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
        }
      }
      searchResultsQuery = obj.getSearchResultsQuery(tmp);
    }
  }, items8);
  const memo2 = ref.useMemo(() => () => {
    callback();
    let obj = closure_1_9;
    const prefixTag = closure_1_9.getPrefixTag(trimmed);
    trimmed = closure_1_9.getTextInputValue(trimmed).trim();
    let result = null != prefixTag;
    if (result) {
      result = "" !== trimmed;
    }
    if (result) {
      result = closure_1_0(closure_1_2[20]).isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
      const obj2 = closure_1_0(closure_1_2[20]);
    }
    if (result) {
      closure_1_1(closure_1_2[17]).updateSearchQuery(tmp2, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: closure_1_11.ANSWER, text: trimmed });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj3 = closure_1_1(closure_1_2[17]);
      obj = { searchContext: null, searchTokenType: null, location: null };
      obj[0] = tmp2;
      ({ searchTokenType: obj5[1], location: obj5[2] } = prefixTag);
      closure_1_1(closure_1_2[19]).trackSearchFilterAdd(obj);
      const obj4 = closure_1_1(closure_1_2[19]);
    }
    if (!obj.isQueryStringEmpty(trimmed)) {
      closure_1_1(closure_1_2[17]).updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj6 = closure_1_1(closure_1_2[17]);
      const initialMessages = closure_1_1(closure_1_2[16]).fetchInitialMessages(tmp2);
      const obj7 = closure_1_1(closure_1_2[16]);
    }
  }, items9);
  textInputValue = textInputValue.getTextInputValue(searchContext);
  obj = { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp.searchBar, tags: memo, icon: null, onChangeText: null, onRemove: null, placeholder: null, onSubmitEditing: null, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false };
  obj = { style: tmp.icon, children: null };
  let obj3 = searchContext(stateFromStores[14]);
  obj[1] = jsx(setSuggestionsDismissed(stateFromStores[22]), { searchContext });
  obj[6] = <View style={tmp.icon}>{null}</View>;
  obj[7] = callback;
  obj[8] = callback1;
  obj[9] = stateFromStores1;
  obj[10] = memo2;
  return jsx(setSuggestionsDismissed(stateFromStores[21]), { style: tmp.icon, children: null });
}));
let result = require("set").fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default memoResult;