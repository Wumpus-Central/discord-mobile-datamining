// === Module 17242: layout/SearchBar ===

// Module 17242 (layout/SearchBar)
import util from "util" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4789 */;
import useChannelName from "useChannelName" /* 5418 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11990 */;
import SearchTokens from "SearchTokens" /* 11998 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12011 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12015 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import SearchQueryStore from "SearchQueryStore" /* 12004 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(9285);
({ SEARCH_BAR_HEIGHT: c10, SearchQueryTagTypes: closure_11 } = SearchConstants);
const SearchFilterAddLocations = fn(9284).SearchFilterAddLocations;
const SearchTypes = fn(1085).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_15 = createStyles.createStyles((minHeight) => {
  const obj = { searchBar: { minHeight: minHeight + 2 }, icon: { width: 32, minHeight, justifyContent: "center", zIndex: 10 } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchPlaceholder(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      type = type.type;
      const channelIds = SearchQueryStore.getChannelIds(type);
      if (SearchTypes.GUILD_CHANNEL !== type) {
        if (SearchTypes.GUILD !== type) {
          if (SearchTypes.CHANNEL === type) {
            const channel = ChannelStore.getChannel(tmp.channelId);
            if (null == channel) {
              const intl4 = util.intl;
              let stringResult = intl4.string(util.t["5h0QOP"]);
            } else {
              const obj = useChannelName;
              const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
              const intl3 = util.intl;
              const obj2 = { guildName: channelName };
              stringResult = intl3.formatToPlainString(util.t.LDpotA, obj2);
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
        guild = GuildStore.getGuild(tmp.guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (null == name) {
          const intl7 = util.intl;
          let stringResult1 = intl7.string(util.t["5h0QOP"]);
        } else {
          const intl6 = util.intl;
          const obj3 = { guildName: name };
          stringResult1 = intl6.formatToPlainString(util.t.LDpotA, obj3);
        }
      } else {
        const intl5 = util.intl;
        return intl5.string(util.t["5h0QOP"]);
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useSearchPlaceholder(arg0) {
  _require = arg0;
  const items = [SearchQueryStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    type = type.type;
    const channelIds = SearchQueryStore.getChannelIds(type);
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.GUILD !== type) {
        if (SearchTypes.CHANNEL === type) {
          const channel = ChannelStore.getChannel(tmp.channelId);
          if (null == channel) {
            const intl4 = util.intl;
            let stringResult = intl4.string(util.t["5h0QOP"]);
          } else {
            const obj = useChannelName;
            const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
            const intl3 = util.intl;
            const obj2 = { guildName: channelName };
            stringResult = intl3.formatToPlainString(util.t.LDpotA, obj2);
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
      guild = GuildStore.getGuild(tmp.guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = util.intl;
        let stringResult1 = intl7.string(util.t["5h0QOP"]);
      } else {
        const intl6 = util.intl;
        const obj3 = { guildName: name };
        stringResult1 = intl6.formatToPlainString(util.t.LDpotA, obj3);
      }
    } else {
      const intl5 = util.intl;
      return intl5.string(util.t["5h0QOP"]);
    }
  }, items1);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchBarWithRef(searchContext) {
  let v0zoRaK = searchContext;
  const cResult = searchContext(ref[15]).c(37);
  searchContext = searchContext.searchContext;
  const obj = searchContext(ref[15]);
  const setDismissed = searchContext(ref[17]).useSearchSuggestionsContext().setDismissed;
  let obj2 = searchContext(ref[17]);
  const tmp4 = closure_15(closure_10 * Math.min(2, searchContext(ref[18]).useFontScale()));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function c() {
      return SearchQueryStore.getTags(searchContext);
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj3 = searchContext(ref[18]);
  const stateFromStores = v0zoRaK(ref[16]).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    const mapped = stateFromStores.map(v0zoRaK(tmp2[19]).toSearchBarTag);
    cResult[4] = stateFromStores;
    cResult[5] = mapped;
    let tmp9 = mapped;
  } else {
    tmp9 = cResult[5];
  }
  if (0 === stateFromStores.length) {
    ref = noop.useRef(null);
    const tmp18 = closure_16(searchContext);
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          obj = {
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
                    }
          };
          return obj;
        }
      }
      cResult[9] = M;
    } else {
      class M {
        constructor() {
          obj = {
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
                    }
          };
          return obj;
        }
      }
    }
    const imperativeHandle = noop.useImperativeHandle(searchContext.ref, M);
    if (cResult[10] !== searchContext) {
      class M {
        constructor() {
          obj = {
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
                    }
          };
          return obj;
        }
      }
      const items2 = [searchContext];
      cResult[10] = searchContext;
      cResult[11] = tmp23;
      cResult[12] = items2;
      let tmp22 = items2;
    } else {
      class M {
        constructor() {
          obj = {
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
                    }
          };
          return obj;
        }
      }
      tmp22 = cResult[12];
    }
    const effect = noop.useEffect(tmp23, tmp22);
    if (cResult[13] !== searchContext) {
      class M {
        constructor() {
          obj = {
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
                    }
          };
          return obj;
        }
      }
      cResult[13] = searchContext;
      cResult[14] = tmp26;
    } else {
      class M {
        constructor() {
          obj = {
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
                    }
          };
          return obj;
        }
      }
    }
    if (cResult[15] !== searchContext) {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
      cResult[15] = searchContext;
      cResult[16] = H;
    } else {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
    }
    if (cResult[17] === searchContext) {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
      if (cResult[20] !== searchContext) {
        class H {
          constructor(arg0) {
            closure_0 = searchContext;
            obj = closure_9;
            tmp = searchContext;
            tmp2 = closure_9.getTags(searchContext)[searchContext];
            closure_1 = tmp2;
            if (null != tmp2) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
              intl = closure_0(closure_2[12]).intl;
              obj1 = { text: null };
              obj1.text = tmp2.text;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
              tmp17 = SearchQueryTagTypes;
              if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                tmp3 = closure_1;
                obj2 = closure_1(tmp15[22]);
                obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                obj8.searchContext = tmp;
                obj8.searchTokenType = tmp2.searchTokenType;
                tmp4 = SearchFilterAddLocations;
                obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                result = obj2.trackSearchFilterRemove(obj8);
              }
              tmp6 = closure_1;
              obj4 = closure_1(tmp15[20]);
              updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              obj5 = closure_1(tmp15[19]);
              result1 = obj5.syncAutocompleteDebounced(tmp);
              queryString = obj.getQueryString(tmp);
              searchResultsQuery = obj.getSearchResultsQuery(tmp);
              if (queryString !== searchResultsQuery) {
                tmp6Result = tmp6(tmp15[19]);
                if (tmp11) {
                  initialMessages = tmp6Result.fetchInitialMessages(tmp);
                } else {
                  initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                }
              }
            }
            return;
          }
        }
        const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
        cResult[20] = searchContext;
        cResult[21] = textInputValue;
      } else {
        class H {
          constructor(arg0) {
            closure_0 = searchContext;
            obj = closure_9;
            tmp = searchContext;
            tmp2 = closure_9.getTags(searchContext)[searchContext];
            closure_1 = tmp2;
            if (null != tmp2) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
              intl = closure_0(closure_2[12]).intl;
              obj1 = { text: null };
              obj1.text = tmp2.text;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
              tmp17 = SearchQueryTagTypes;
              if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                tmp3 = closure_1;
                obj2 = closure_1(tmp15[22]);
                obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                obj8.searchContext = tmp;
                obj8.searchTokenType = tmp2.searchTokenType;
                tmp4 = SearchFilterAddLocations;
                obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                result = obj2.trackSearchFilterRemove(obj8);
              }
              tmp6 = closure_1;
              obj4 = closure_1(tmp15[20]);
              updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              obj5 = closure_1(tmp15[19]);
              result1 = obj5.syncAutocompleteDebounced(tmp);
              queryString = obj.getQueryString(tmp);
              searchResultsQuery = obj.getSearchResultsQuery(tmp);
              if (queryString !== searchResultsQuery) {
                tmp6Result = tmp6(tmp15[19]);
                if (tmp11) {
                  initialMessages = tmp6Result.fetchInitialMessages(tmp);
                } else {
                  initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                }
              }
            }
            return;
          }
        }
      }
      if (cResult[22] !== searchContext) {
        class H {
          constructor(arg0) {
            closure_0 = searchContext;
            obj = closure_9;
            tmp = searchContext;
            tmp2 = closure_9.getTags(searchContext)[searchContext];
            closure_1 = tmp2;
            if (null != tmp2) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
              intl = closure_0(closure_2[12]).intl;
              obj1 = { text: null };
              obj1.text = tmp2.text;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
              tmp17 = SearchQueryTagTypes;
              if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                tmp3 = closure_1;
                obj2 = closure_1(tmp15[22]);
                obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                obj8.searchContext = tmp;
                obj8.searchTokenType = tmp2.searchTokenType;
                tmp4 = SearchFilterAddLocations;
                obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                result = obj2.trackSearchFilterRemove(obj8);
              }
              tmp6 = closure_1;
              obj4 = closure_1(tmp15[20]);
              updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              obj5 = closure_1(tmp15[19]);
              result1 = obj5.syncAutocompleteDebounced(tmp);
              queryString = obj.getQueryString(tmp);
              searchResultsQuery = obj.getSearchResultsQuery(tmp);
              if (queryString !== searchResultsQuery) {
                tmp6Result = tmp6(tmp15[19]);
                if (tmp11) {
                  initialMessages = tmp6Result.fetchInitialMessages(tmp);
                } else {
                  initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                }
              }
            }
            return;
          }
        }
        let obj4 = { searchContext };
        const tmp33 = jsx(setDismissed(tmp2[24]), { searchContext });
        cResult[22] = searchContext;
        cResult[23] = tmp33;
      } else {
        class H {
          constructor(arg0) {
            closure_0 = searchContext;
            obj = closure_9;
            tmp = searchContext;
            tmp2 = closure_9.getTags(searchContext)[searchContext];
            closure_1 = tmp2;
            if (null != tmp2) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
              intl = closure_0(closure_2[12]).intl;
              obj1 = { text: null };
              obj1.text = tmp2.text;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
              tmp17 = SearchQueryTagTypes;
              if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                tmp3 = closure_1;
                obj2 = closure_1(tmp15[22]);
                obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                obj8.searchContext = tmp;
                obj8.searchTokenType = tmp2.searchTokenType;
                tmp4 = SearchFilterAddLocations;
                obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                result = obj2.trackSearchFilterRemove(obj8);
              }
              tmp6 = closure_1;
              obj4 = closure_1(tmp15[20]);
              updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              obj5 = closure_1(tmp15[19]);
              result1 = obj5.syncAutocompleteDebounced(tmp);
              queryString = obj.getQueryString(tmp);
              searchResultsQuery = obj.getSearchResultsQuery(tmp);
              if (queryString !== searchResultsQuery) {
                tmp6Result = tmp6(tmp15[19]);
                if (tmp11) {
                  initialMessages = tmp6Result.fetchInitialMessages(tmp);
                } else {
                  initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                }
              }
            }
            return;
          }
        }
      }
      if (cResult[24] === tmp4.icon) {
        class H {
          constructor(arg0) {
            closure_0 = searchContext;
            obj = closure_9;
            tmp = searchContext;
            tmp2 = closure_9.getTags(searchContext)[searchContext];
            closure_1 = tmp2;
            if (null != tmp2) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
              intl = closure_0(closure_2[12]).intl;
              obj1 = { text: null };
              obj1.text = tmp2.text;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
              tmp17 = SearchQueryTagTypes;
              if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                tmp3 = closure_1;
                obj2 = closure_1(tmp15[22]);
                obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                obj8.searchContext = tmp;
                obj8.searchTokenType = tmp2.searchTokenType;
                tmp4 = SearchFilterAddLocations;
                obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                result = obj2.trackSearchFilterRemove(obj8);
              }
              tmp6 = closure_1;
              obj4 = closure_1(tmp15[20]);
              updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              obj5 = closure_1(tmp15[19]);
              result1 = obj5.syncAutocompleteDebounced(tmp);
              queryString = obj.getQueryString(tmp);
              searchResultsQuery = obj.getSearchResultsQuery(tmp);
              if (queryString !== searchResultsQuery) {
                tmp6Result = tmp6(tmp15[19]);
                if (tmp11) {
                  initialMessages = tmp6Result.fetchInitialMessages(tmp);
                } else {
                  initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                }
              }
            }
            return;
          }
        }
        if (cResult[27] === undefined) {
          class H {
            constructor(arg0) {
              closure_0 = searchContext;
              obj = closure_9;
              tmp = searchContext;
              tmp2 = closure_9.getTags(searchContext)[searchContext];
              closure_1 = tmp2;
              if (null != tmp2) {
                tmp14 = closure_0;
                tmp15 = closure_2;
                AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
                intl = closure_0(closure_2[12]).intl;
                obj1 = { text: null };
                obj1.text = tmp2.text;
                announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
                tmp17 = SearchQueryTagTypes;
                if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                  tmp3 = closure_1;
                  obj2 = closure_1(tmp15[22]);
                  obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                  obj8.searchContext = tmp;
                  obj8.searchTokenType = tmp2.searchTokenType;
                  tmp4 = SearchFilterAddLocations;
                  obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                  result = obj2.trackSearchFilterRemove(obj8);
                }
                tmp6 = closure_1;
                obj4 = closure_1(tmp15[20]);
                updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                  removeTag.removeTag(closure_0);
                  if (type.type === constants.PREFIX) {
                    const result = removeTag.restoreDraftTextInputValue();
                  }
                });
                obj5 = closure_1(tmp15[19]);
                result1 = obj5.syncAutocompleteDebounced(tmp);
                queryString = obj.getQueryString(tmp);
                searchResultsQuery = obj.getSearchResultsQuery(tmp);
                if (queryString !== searchResultsQuery) {
                  tmp6Result = tmp6(tmp15[19]);
                  if (tmp11) {
                    initialMessages = tmp6Result.fetchInitialMessages(tmp);
                  } else {
                    initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                  }
                }
              }
              return;
            }
          }
        }
        let obj5 = { ref, accessibilityHint: undefined, autoFocus: true, defaultValue: tmp29, style: tmp4.searchBar, tags: tmp9, icon: tmp34, onChangeText: tmp26, onRemove: H, placeholder: tmp18, onSubmitEditing: G, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false };
        class G {
          constructor() {
            tmp = setDismissed();
            obj = closure_9;
            tmp2 = searchContext;
            prefixTag = closure_9.getPrefixTag(searchContext);
            str = closure_9.getTextInputValue(searchContext);
            trimmed = str.trim();
            closure_0 = trimmed;
            result = null != prefixTag;
            if (result) {
              str2 = "";
              result = "" !== trimmed;
            }
            if (result) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[23]);
              result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
            }
            if (result) {
              tmp8 = closure_1;
              tmp9 = closure_2;
              obj3 = closure_1(closure_2[20]);
              updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
                setTextInputValue.setTextInputValue("");
                setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
                const result = setTextInputValue.restoreDraftTextInputValue();
              });
              obj4 = closure_1(closure_2[22]);
              obj1 = { searchContext: null, searchTokenType: null, location: null };
              obj1.searchContext = tmp2;
              ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
              trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
            }
            if (!obj.isQueryStringEmpty(tmp2)) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              obj6 = closure_1(closure_2[20]);
              updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
              obj7 = closure_1(closure_2[19]);
              initialMessages = obj7.fetchInitialMessages(tmp2);
            }
            return;
          }
        }
        cResult[27] = undefined;
        cResult[28] = tmp29;
        cResult[29] = H;
        cResult[30] = G;
        cResult[31] = tmp26;
        cResult[32] = tmp18;
        cResult[33] = tmp9;
        cResult[34] = tmp4.searchBar;
        cResult[35] = tmp34;
        cResult[36] = tmp41;
      }
      let obj6 = { style: tmp4.icon, children: tmp31 };
      cResult[24] = tmp4.icon;
      cResult[25] = tmp31;
      class G {
        constructor() {
          tmp = setDismissed();
          obj = closure_9;
          tmp2 = searchContext;
          prefixTag = closure_9.getPrefixTag(searchContext);
          str = closure_9.getTextInputValue(searchContext);
          trimmed = str.trim();
          closure_0 = trimmed;
          result = null != prefixTag;
          if (result) {
            str2 = "";
            result = "" !== trimmed;
          }
          if (result) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj2 = closure_0(closure_2[23]);
            result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
          }
          if (result) {
            tmp8 = closure_1;
            tmp9 = closure_2;
            obj3 = closure_1(closure_2[20]);
            updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
              setTextInputValue.setTextInputValue("");
              setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
              const result = setTextInputValue.restoreDraftTextInputValue();
            });
            obj4 = closure_1(closure_2[22]);
            obj1 = { searchContext: null, searchTokenType: null, location: null };
            obj1.searchContext = tmp2;
            ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
            trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
          }
          if (!obj.isQueryStringEmpty(tmp2)) {
            tmp12 = closure_1;
            tmp13 = closure_2;
            obj6 = closure_1(closure_2[20]);
            updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
            obj7 = closure_1(closure_2[19]);
            initialMessages = obj7.fetchInitialMessages(tmp2);
          }
          return;
        }
      }
      tmp34 = <View style={tmp4.icon}>{tmp31}</View>;
      const tmp37 = <View style={tmp4.icon}>{tmp31}</View>;
    }
    class G {
      constructor() {
        tmp = setDismissed();
        obj = closure_9;
        tmp2 = searchContext;
        prefixTag = closure_9.getPrefixTag(searchContext);
        str = closure_9.getTextInputValue(searchContext);
        trimmed = str.trim();
        closure_0 = trimmed;
        result = null != prefixTag;
        if (result) {
          str2 = "";
          result = "" !== trimmed;
        }
        if (result) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[23]);
          result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
        }
        if (result) {
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj3 = closure_1(closure_2[20]);
          updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
            setTextInputValue.setTextInputValue("");
            setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
            const result = setTextInputValue.restoreDraftTextInputValue();
          });
          obj4 = closure_1(closure_2[22]);
          obj1 = { searchContext: null, searchTokenType: null, location: null };
          obj1.searchContext = tmp2;
          ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
          trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
        }
        if (!obj.isQueryStringEmpty(tmp2)) {
          tmp12 = closure_1;
          tmp13 = closure_2;
          obj6 = closure_1(closure_2[20]);
          updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
          obj7 = closure_1(closure_2[19]);
          initialMessages = obj7.fetchInitialMessages(tmp2);
        }
        return;
      }
    }
    cResult[17] = searchContext;
    cResult[18] = setDismissed;
    cResult[19] = G;
  } else {
    class H {
      constructor(arg0) {
        closure_0 = searchContext;
        obj = closure_9;
        tmp = searchContext;
        tmp2 = closure_9.getTags(searchContext)[searchContext];
        closure_1 = tmp2;
        if (null != tmp2) {
          tmp14 = closure_0;
          tmp15 = closure_2;
          AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
          intl = closure_0(closure_2[12]).intl;
          obj1 = { text: null };
          obj1.text = tmp2.text;
          announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
          tmp17 = SearchQueryTagTypes;
          if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
            tmp3 = closure_1;
            obj2 = closure_1(tmp15[22]);
            obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
            obj8.searchContext = tmp;
            obj8.searchTokenType = tmp2.searchTokenType;
            tmp4 = SearchFilterAddLocations;
            obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
            result = obj2.trackSearchFilterRemove(obj8);
          }
          tmp6 = closure_1;
          obj4 = closure_1(tmp15[20]);
          updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
            removeTag.removeTag(closure_0);
            if (type.type === constants.PREFIX) {
              const result = removeTag.restoreDraftTextInputValue();
            }
          });
          obj5 = closure_1(tmp15[19]);
          result1 = obj5.syncAutocompleteDebounced(tmp);
          queryString = obj.getQueryString(tmp);
          searchResultsQuery = obj.getSearchResultsQuery(tmp);
          if (queryString !== searchResultsQuery) {
            tmp6Result = tmp6(tmp15[19]);
            if (tmp11) {
              initialMessages = tmp6Result.fetchInitialMessages(tmp);
            } else {
              initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
            }
          }
        }
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
      cResult[8] = V;
    } else {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
    }
    const mapped1 = stateFromStores.map(V);
    const joined = mapped1.join(", ");
    let intl = v0zoRaK(tmp2[12]).intl;
    v0zoRaK = v0zoRaK(tmp2[12]).t["0zoRaK"];
    let obj8 = { text: joined };
    const formatToPlainStringResult = intl.formatToPlainString(v0zoRaK, obj8);
    cResult[6] = stateFromStores;
    class G {
      constructor() {
        tmp = setDismissed();
        obj = closure_9;
        tmp2 = searchContext;
        prefixTag = closure_9.getPrefixTag(searchContext);
        str = closure_9.getTextInputValue(searchContext);
        trimmed = str.trim();
        closure_0 = trimmed;
        result = null != prefixTag;
        if (result) {
          str2 = "";
          result = "" !== trimmed;
        }
        if (result) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[23]);
          result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
        }
        if (result) {
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj3 = closure_1(closure_2[20]);
          updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
            setTextInputValue.setTextInputValue("");
            setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
            const result = setTextInputValue.restoreDraftTextInputValue();
          });
          obj4 = closure_1(closure_2[22]);
          obj1 = { searchContext: null, searchTokenType: null, location: null };
          obj1.searchContext = tmp2;
          ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
          trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
        }
        if (!obj.isQueryStringEmpty(tmp2)) {
          tmp12 = closure_1;
          tmp13 = closure_2;
          obj6 = closure_1(closure_2[20]);
          updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
          obj7 = closure_1(closure_2[19]);
          initialMessages = obj7.fetchInitialMessages(tmp2);
        }
        return;
      }
    }
    cResult[7] = formatToPlainStringResult;
  }
  const v0zoRaKResult = v0zoRaK(ref[16]);
}) : (function SearchBarWithRef(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let ref;
  const setDismissed = searchContext(stateFromStores[17]).useSearchSuggestionsContext().setDismissed;
  let obj = searchContext(stateFromStores[17]);
  let tmp = closure_15(closure_10 * Math.min(2, searchContext(stateFromStores[18]).useFontScale()));
  let obj2 = searchContext(stateFromStores[18]);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[16]).useStateFromStores(items, () => SearchQueryStore.getTags(searchContext), items1);
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
  let obj3 = searchContext(stateFromStores[16]);
  const imperativeHandle = ref.useImperativeHandle(searchContext.ref, () => ({
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
    }
  }));
  const items4 = [searchContext];
  const effect = ref.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
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
  }), items4);
  const items5 = [searchContext];
  const items6 = [searchContext];
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
  }, items5);
  const items7 = [searchContext, setDismissed];
  const callback1 = ref.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp2 = SearchQueryStore.getTags(searchContext)[arg0];
    const type = tmp2;
    if (null != tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj3 = { text: tmp2.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj3));
      if (tmp2.type === constants.COMPLETE) {
        const obj6 = { searchContext, searchTokenType: tmp2.searchTokenType, isDefault: tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD };
        let result = search_tracking_TrackingDefault.trackSearchFilterRemove(obj6);
      }
      SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (removeTag) => {
        removeTag.removeTag(closure_0);
        if (type.type === constants.PREFIX) {
          const result = removeTag.restoreDraftTextInputValue();
        }
      });
      const result1 = SearchPlatformUtilsDefault.syncAutocompleteDebounced(searchContext);
      const queryString = SearchQueryStore.getQueryString(searchContext);
      if (queryString !== searchResultsQuery) {
        const tmp6Result = SearchPlatformUtilsDefault;
        if (tmp11) {
          const initialMessages = tmp6Result.fetchInitialMessages(searchContext);
        } else {
          const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(searchContext);
        }
      }
      searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    }
  }, items6);
  const memo2 = ref.useMemo(() => () => {
    closure_1_1();
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    const trimmed = SearchQueryStore.getTextInputValue(searchContext).trim();
    let result = null != prefixTag;
    if (result) {
      result = "" !== trimmed;
    }
    if (result) {
      result = searchContext(stateFromStores[23]).isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
      const obj2 = searchContext(stateFromStores[23]);
    }
    if (result) {
      setDismissed(stateFromStores[20]).updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj3 = setDismissed(stateFromStores[20]);
      const obj8 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
      setDismissed(stateFromStores[22]).trackSearchFilterAdd(obj8);
      const obj4 = setDismissed(stateFromStores[22]);
    }
    if (!SearchQueryStore.isQueryStringEmpty(searchContext)) {
      setDismissed(stateFromStores[20]).updateSearchQuery(searchContext, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj6 = setDismissed(stateFromStores[20]);
      const initialMessages = setDismissed(stateFromStores[19]).fetchInitialMessages(searchContext);
      const obj7 = setDismissed(stateFromStores[19]);
    }
    const str = SearchQueryStore.getTextInputValue(searchContext);
  }, items7);
  const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
  let obj4 = { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp.searchBar, tags: memo, icon: null, onChangeText: null, onRemove: null, placeholder: null, onSubmitEditing: null, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false };
  let obj5 = { style: tmp.icon, children: null };
  const tmp6 = closure_16(searchContext);
  obj5.children = jsx(setDismissed(stateFromStores[24]), { searchContext });
  obj4.icon = <View style={tmp.icon}>{null}</View>;
  obj4.onChangeText = callback;
  obj4.onRemove = callback1;
  obj4.placeholder = tmp6;
  obj4.onSubmitEditing = memo2;
  return jsx(setDismissed(stateFromStores[25]), { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp.searchBar, tags: memo, icon: null, onChangeText: null, onRemove: null, placeholder: null, onSubmitEditing: null, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false });
}));