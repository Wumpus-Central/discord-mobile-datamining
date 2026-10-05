// discord_app/modules/search/native/components/layout/SearchBar.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import intl8 from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import TrackingConstants from "../../tracking/TrackingConstants.tsx";
import SearchPlatformUtils from "../../SearchPlatformUtils.tsx";
import SearchTokens from "../../../tokens/SearchTokens.tsx";
import search_tracking_TrackingDefault from "../../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../../SearchPlatformActionCreators.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import SearchQueryStore from "../../stores/SearchQueryStore.tsx";
import SearchConstants from "../../../SearchConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const SearchPlatformUtilsDefault = SearchPlatformUtils;
let _require, obj1, str2, tmp13, trackSearchFilterAddResult, type, updateSearchQueryResult, updateSearchQueryResult1;

let c10;
let unpackModuleId;
const View = react_native.View;
({ SEARCH_BAR_HEIGHT: c10, SearchQueryTagTypes: unpackModuleId } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_15 = createStyles.createStyles((minHeight) => {
  const obj = { searchBar: obj2, icon: { width: 32, minHeight, justifyContent: "center", zIndex: 10 } };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchQueryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let stringResult2;
          type = type.type;
          const channelIds = SearchQueryStore.getChannelIds(type);
          if (SearchTypes.GUILD_CHANNEL !== type) {
            if (SearchTypes.GUILD !== type) {
              if (SearchTypes.CHANNEL === type) {
                let stringResult;
                const channel = ChannelStore.getChannel(tmp.channelId);
                if (null == channel) {
                  const intl4 = intl8.intl;
                  stringResult = intl4.string(intl8.t["5h0QOP"]);
                } else {
                  const obj = useChannelName;
                  const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
                  const intl3 = intl8.intl;
                  const obj2 = { guildName: channelName };
                  stringResult = intl3.formatToPlainString(intl8.t.LDpotA, obj2);
                }
                return stringResult;
              } else if (SearchTypes.DMS === type) {
                const intl2 = intl8.intl;
                return intl2.string(intl8.t.m7OrlR);
              } else {
                const intl = intl8.intl;
                return intl.string(intl8.t["5h0QOP"]);
              }
            }
          }
          if (0 === channelIds.size) {
            let stringResult1;
            const guild = GuildStore.getGuild(tmp.guildId);
            let name;
            if (guild != null) {
              name = guild.name;
            }
            if (null == name) {
              const intl7 = intl8.intl;
              stringResult1 = intl7.string(intl8.t["5h0QOP"]);
            } else {
              const intl6 = intl8.intl;
              const obj3 = { guildName: name };
              stringResult1 = intl6.formatToPlainString(intl8.t.LDpotA, obj3);
            }
            stringResult2 = stringResult1;
          } else {
            const intl5 = intl8.intl;
            stringResult2 = intl5.string(intl8.t["5h0QOP"]);
          }
          return stringResult2;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      _require = arg0;
      let obj = require("get initialized");
      const items = [SearchQueryStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          let stringResult2;
          type = type.type;
          const channelIds = SearchQueryStore.getChannelIds(type);
          if (SearchTypes.GUILD_CHANNEL !== type) {
            if (SearchTypes.GUILD !== type) {
              if (SearchTypes.CHANNEL === type) {
                let stringResult;
                const channel = ChannelStore.getChannel(tmp.channelId);
                if (null == channel) {
                  const intl4 = intl8.intl;
                  stringResult = intl4.string(intl8.t["5h0QOP"]);
                } else {
                  const obj = useChannelName;
                  const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
                  const intl3 = intl8.intl;
                  const obj2 = { guildName: channelName };
                  stringResult = intl3.formatToPlainString(intl8.t.LDpotA, obj2);
                }
                return stringResult;
              } else if (SearchTypes.DMS === type) {
                const intl2 = intl8.intl;
                return intl2.string(intl8.t.m7OrlR);
              } else {
                const intl = intl8.intl;
                return intl.string(intl8.t["5h0QOP"]);
              }
            }
          }
          if (0 === channelIds.size) {
            let stringResult1;
            const guild = GuildStore.getGuild(tmp.guildId);
            let name;
            if (guild != null) {
              name = guild.name;
            }
            if (null == name) {
              const intl7 = intl8.intl;
              stringResult1 = intl7.string(intl8.t["5h0QOP"]);
            } else {
              const intl6 = intl8.intl;
              const obj3 = { guildName: name };
              stringResult1 = intl6.formatToPlainString(intl8.t.LDpotA, obj3);
            }
            stringResult2 = stringResult1;
          } else {
            const intl5 = intl8.intl;
            stringResult2 = intl5.string(intl8.t["5h0QOP"]);
          }
          return stringResult2;
        },
        items1,
      );
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (searchContext, arg1) => {
          let first;
          let ref;
          let tmp11;
          let tmp21;
          let tmp7;
          let tmp8;
          let tmp9;
          let tmp = searchContext;
          let tmp2 = ref;
          let obj = searchContext(ref[15]);
          const cResult = obj.c(37);
          searchContext = searchContext.searchContext;
          let obj2 = searchContext(ref[17]);
          const setDismissed = obj2.useSearchSuggestionsContext().setDismissed;
          let obj3 = searchContext(ref[18]);
          const tmp4 = closure_15(closure_10 * min(2, obj3.useFontScale()));
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [SearchQueryStore];
            cResult[0] = items;
            first = items;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== searchContext) {
            const fn = function l() {
              return SearchQueryStore.getTags(searchContext);
            };
            const items1 = [searchContext];
            cResult[1] = searchContext;
            cResult[2] = fn;
            cResult[3] = items1;
            tmp8 = items1;
            tmp7 = fn;
          } else {
            tmp7 = cResult[2];
            tmp8 = cResult[3];
          }
          const tmpResult = tmp(tmp2[16]);
          const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
          if (cResult[4] !== stateFromStores) {
            const mapped = stateFromStores.map(tmp(tmp2[19]).toSearchBarTag);
            cResult[4] = stateFromStores;
            cResult[5] = mapped;
            tmp9 = mapped;
          } else {
            tmp9 = cResult[5];
          }
          if (0 !== stateFromStores.length) {
            let tmp12;
            if (cResult[6] !== stateFromStores) {
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                class V {
                  constructor(text) {
                    return text.text;
                  }
                }
                cResult[8] = V;
              } else {
                class V {
                  constructor(text) {
                    return text.text;
                  }
                }
              }
              const mapped1 = stateFromStores.map(V);
              let str = ", ";
              const joined = mapped1.join(", ");
              let intl = tmp(tmp2[12]).intl;
              let obj4 = { text: joined };
              const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[12]).t["0zoRaK"], obj4);
              cResult[6] = stateFromStores;
              cResult[7] = formatToPlainStringResult;
              tmp12 = formatToPlainStringResult;
            } else {
              class V {
                constructor(text) {
                  return text.text;
                }
              }
            }
            tmp11 = tmp12;
          }
          ref = react.useRef(null);
          const tmp17 = closure_16(searchContext);
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
                  },
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
                  },
                };
                return obj;
              }
            }
          }
          const imperativeHandle = react.useImperativeHandle(arg1, M);
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
                  },
                };
                return obj;
              }
            }
            const items2 = [searchContext];
            cResult[10] = searchContext;
            cResult[11] = tmp22;
            cResult[12] = items2;
            tmp21 = items2;
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
                  },
                };
                return obj;
              }
            }
            tmp21 = cResult[12];
          }
          const effect = react.useEffect(tmp22, tmp21);
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
                  },
                };
                return obj;
              }
            }
            cResult[13] = searchContext;
            cResult[14] = tmp25;
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
                  },
                };
                return obj;
              }
            }
          }
          if (cResult[15] !== searchContext) {
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
                  },
                };
                return obj;
              }
            }
            cResult[15] = searchContext;
            cResult[16] = tmp27;
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
                  },
                };
                return obj;
              }
            }
          }
          if (cResult[17] === searchContext) {
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
                  },
                };
                return obj;
              }
            }
            if (cResult[20] !== searchContext) {
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
                    },
                  };
                  return obj;
                }
              }
              const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
              cResult[20] = searchContext;
              cResult[21] = textInputValue;
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
                    },
                  };
                  return obj;
                }
              }
            }
            if (cResult[22] !== searchContext) {
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
                    },
                  };
                  return obj;
                }
              }
              cResult[22] = searchContext;
              cResult[23] = jsx(setDismissed(tmp2[24]), { searchContext });
              const tmp33 = jsx(setDismissed(tmp2[24]), { searchContext });
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
                    },
                  };
                  return obj;
                }
              }
            }
            if (cResult[24] === tmp4.icon) {
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
                    },
                  };
                  return obj;
                }
              }
              if (cResult[27] === tmp11) {
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
                      },
                    };
                    return obj;
                  }
                }
              }
              cResult[27] = tmp11;
              cResult[28] = tmp29;
              cResult[29] = tmp27;
              cResult[30] = G;
              cResult[31] = tmp25;
              cResult[32] = tmp17;
              cResult[33] = tmp9;
              cResult[34] = tmp4.searchBar;
              cResult[35] = tmp34;
              cResult[36] = jsx(setDismissed(tmp2[25]), {
                ref,
                accessibilityHint: tmp11,
                autoFocus: true,
                defaultValue: tmp29,
                style: tmp4.searchBar,
                tags: tmp9,
                icon: tmp34,
                onChangeText: tmp25,
                onRemove: tmp27,
                placeholder: tmp17,
                onSubmitEditing: G,
                leadingFade: true,
                horizontal: true,
                autoClearInputOnTagAdd: false,
              });
              const tmp41 = jsx(setDismissed(tmp2[25]), {
                ref,
                accessibilityHint: tmp11,
                autoFocus: true,
                defaultValue: tmp29,
                style: tmp4.searchBar,
                tags: tmp9,
                icon: tmp34,
                onChangeText: tmp25,
                onRemove: tmp27,
                placeholder: tmp17,
                onSubmitEditing: G,
                leadingFade: true,
                horizontal: true,
                autoClearInputOnTagAdd: false,
              });
            }
            const tmp37 = <View style={tmp4.icon}>{tmp31}</View>;
            cResult[24] = tmp4.icon;
            cResult[25] = tmp31;
            cResult[26] = tmp37;
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
                  const obj = { type: constants.ANSWER, text: trimmed };
                  setTextInputValue.addTag(obj);
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
                updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) =>
                  markExplicitSearchSubmitted.markExplicitSearchSubmitted(),
                );
                obj7 = closure_1(closure_2[19]);
                initialMessages = obj7.fetchInitialMessages(tmp2);
              }
              return;
            }
          }
          cResult[17] = searchContext;
          cResult[18] = setDismissed;
          cResult[19] = G;
        }
      : (searchContext, arg1) => {
          searchContext = searchContext.searchContext;
          let stateFromStores;
          let ref;
          let obj = searchContext(stateFromStores[17]);
          const setDismissed = obj.useSearchSuggestionsContext().setDismissed;
          let obj2 = searchContext(stateFromStores[18]);
          let tmp = closure_15(closure_10 * min(2, obj2.useFontScale()));
          let obj3 = searchContext(stateFromStores[16]);
          const items = [SearchQueryStore];
          const items1 = [searchContext];
          stateFromStores = obj3.useStateFromStores(items, () => SearchQueryStore.getTags(searchContext), items1);
          const items2 = [stateFromStores];
          const items3 = [stateFromStores];
          const memo = ref.useMemo(() => stateFromStores.map(SearchPlatformUtils.toSearchBarTag), items2);
          const memo1 = ref.useMemo(() => {
            if (0 !== stateFromStores.length) {
              const mapped = stateFromStores.map((text) => text.text);
              const joined = mapped.join(", ");
              const intl = intl8.intl;
              const obj = { text: joined };
              return intl.formatToPlainString(intl8.t["0zoRaK"], obj);
            }
          }, items3);
          ref = ref.useRef(null);
          const tmp6 = closure_16(searchContext);
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
          const items4 = [searchContext];
          const effect = ref.useEffect(() => {
            const obj = SearchPlatformUtilsDefault;
            return obj.subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
              const tmp = arg2 || null == arg0;
              if (!tmp) {
                const current = ref.current;
                if (current != null) {
                  current.setText(arg0);
                }
              }
            });
          }, items4);
          const items5 = [searchContext];
          const items6 = [searchContext];
          const callback = ref.useCallback((arg0) => {
            let closure_0 = arg0;
            if (SearchQueryStore.getTextInputValue(searchContext) !== arg0) {
              const obj2 = SearchPlatformActionCreatorsDefault;
              obj2.updateSearchQuery(searchContext, (setTextInputValue) => {
                setTextInputValue.setTextInputValue(closure_0, true);
              });
              const obj3 = SearchPlatformUtilsDefault;
              const result = obj3.syncAutocompleteDebounced(searchContext);
              if (!SearchQueryStore.isAutocompleteVisible(searchContext)) {
                const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
                const tmp2Result = SearchPlatformUtilsDefault;
                if (isInitialSearchQueryResult) {
                  const initialMessages = tmp2Result.fetchInitialMessages(searchContext);
                } else {
                  const initialMessagesDebounced = tmp2Result.fetchInitialMessagesDebounced(searchContext);
                }
              }
            }
          }, items5);
          const items7 = [searchContext, setDismissed];
          const callback1 = ref.useCallback((arg0) => {
            let closure_0 = arg0;
            const tmp2 = SearchQueryStore.getTags(searchContext)[arg0];
            let closure_1 = tmp2;
            if (null != tmp2) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = intl8.intl;
              const obj3 = { text: tmp2.text };
              announce(intl.formatToPlainString(intl8.t.srlxB8, obj3));
              if (tmp2.type === unpackModuleId.COMPLETE) {
                const obj6 = {
                  searchContext,
                  searchTokenType: tmp2.searchTokenType,
                  isDefault: tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD,
                };
                const obj2 = search_tracking_TrackingDefault;
                let result = obj2.trackSearchFilterRemove(obj6);
              }
              const obj4 = SearchPlatformActionCreatorsDefault;
              obj4.updateSearchQuery(searchContext, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              const obj5 = SearchPlatformUtilsDefault;
              const result1 = obj5.syncAutocompleteDebounced(searchContext);
              const queryString = SearchQueryStore.getQueryString(searchContext);
              const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
              if (queryString !== searchResultsQuery) {
                const tmp6Result = SearchPlatformUtilsDefault;
                if (tmp11) {
                  const initialMessages = tmp6Result.fetchInitialMessages(searchContext);
                } else {
                  const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(searchContext);
                }
              }
            }
          }, items6);
          const memo2 = ref.useMemo(
            () => () => {
              closure_1_1();
              const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
              const str = SearchQueryStore.getTextInputValue(searchContext);
              const trimmed = str.trim();
              let result = null != prefixTag && "" !== trimmed;
              if (result) {
                const obj2 = searchContext(stateFromStores[23]);
                result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
              }
              if (result) {
                const obj3 = setDismissed(stateFromStores[20]);
                obj3.updateSearchQuery(searchContext, (setTextInputValue) => {
                  setTextInputValue.setTextInputValue("");
                  const obj = { type: constants.ANSWER, text: trimmed };
                  setTextInputValue.addTag(obj);
                  const result = setTextInputValue.restoreDraftTextInputValue();
                });
                const obj8 = { searchContext, searchTokenType: null, location: null };
                ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
                const obj4 = setDismissed(stateFromStores[22]);
                obj4.trackSearchFilterAdd(obj8);
              }
              if (!SearchQueryStore.isQueryStringEmpty(searchContext)) {
                const obj6 = setDismissed(stateFromStores[20]);
                obj6.updateSearchQuery(searchContext, (markExplicitSearchSubmitted) =>
                  markExplicitSearchSubmitted.markExplicitSearchSubmitted(),
                );
                const obj7 = setDismissed(stateFromStores[19]);
                const initialMessages = obj7.fetchInitialMessages(searchContext);
              }
            },
            items7,
          );
          const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
          let obj5 = { style: tmp.icon, children: null };
          setDismissed(stateFromStores[25]);
          return (
            <tmp13
              ref={ref}
              accessibilityHint={memo1}
              autoFocus
              defaultValue={textInputValue}
              style={tmp.searchBar}
              tags={memo}
              icon={null}
              onChangeText={callback}
              onRemove={callback1}
              placeholder={tmp6}
              onSubmitEditing={memo2}
              leadingFade
              horizontal
              autoClearInputOnTagAdd={false}
            />
          );
        },
  ),
);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default memoResult;
