// === Module 17389: LaunchPad ===

// Module 17389 (LaunchPad)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import _mod9496 from "module_9496" /* 9496 */;
import AutocompleterDefault from "Autocompleter" /* 9497 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9505 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 10702 */;
import RouteManagerDefault from "RouteManager" /* 12557 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14406 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore_mod from "ActionSheetStore" /* 4561 */;
import ChannelListStore_mod from "ChannelListStore" /* 7036 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 6831 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5691 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7204 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import GuildStore from "GuildStore" /* 2074 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 13564 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel, dependencyMap, tab, text;

let c10;
let c9;
let closure_14;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
function createAndAppendChannel(item10022, set, items) {
  if (!set.has(item10022)) {
    const tmp3 = createAutocompleterResultForChannelIdDefault(item10022);
    if (null != tmp3) {
      items.push(tmp3);
      set.add(item10022);
    }
  }
}
function useInitialResults(disabled) {
  disabled = disabled.disabled;
  const visible = disabled.visible;
  let selectedGuildFromRoute;
  let selectedUnreadGuild;
  let stateFromStores1;
  let obj = disabled(selectedGuildFromRoute[38]);
  selectedGuildFromRoute = obj.getSelectedGuildFromRoute();
  const obj2 = disabled(selectedGuildFromRoute[38]);
  const selectedChannelFromRoute = obj2.getSelectedChannelFromRoute();
  const tmp3 = selectedChannelFromRoute(selectedUnreadGuild.useState(undefined), 2);
  selectedUnreadGuild = tmp3[0];
  let closure_5 = tmp5;
  items = [visible];
  const effect = selectedUnreadGuild.useEffect(() => {
    if (!visible) {
      closure_5(undefined);
    }
  }, items);
  const ref = selectedUnreadGuild.useRef([]);
  let obj3 = disabled(selectedGuildFromRoute[26]);
  let items1 = [PrivateChannelReadStateStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let current;
    if (visible) {
      current = PrivateChannelReadStateStore.getUnreadPrivateChannelIds();
    } else {
      current = ref.current;
    }
    return current;
  });
  const effect1 = selectedUnreadGuild.useEffect(() => {
    ref.current = stateFromStores;
  });
  const ref2 = selectedUnreadGuild.useRef([]);
  let items2 = [SortedGuildStore, GuildReadStateStore, GuildStore];
  let items3 = [visible, selectedGuildFromRoute];
  const obj4 = disabled(selectedGuildFromRoute[26]);
  const stateFromStoresArray = obj4.useStateFromStoresArray(items2, () => {
    if (visible) {
      items = [];
      const items1 = [];
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult !== selectedGuildFromRoute) {
          let hasUnreadResult = GuildReadStateStore.getMentionCount(tmp11) > 0;
          let tmp33 = hasUnreadResult;
          if (!tmp33) {
            hasUnreadResult = GuildReadStateStore.hasUnread(tmp11);
          }
          if (hasUnreadResult) {
            let guild = GuildStore.getGuild(tmp11);
            let hasItem;
            if (guild != null) {
              let features = guild.features;
              hasItem = features.has(constants.HUB);
            }
            if (!hasItem) {
              let tmp20 = tmp33;
              if (tmp20) {
                let arr = items.push(tmp11);
              } else {
                let arr2 = items1.push(tmp11);
              }
            }
          }
        }
        continue;
      }
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(items2, items1, 0);
      HermesBuiltin.apply(push, items2, items);
      return items;
    } else {
      return ref2.current;
    }
  }, items3);
  const effect2 = selectedUnreadGuild.useEffect(() => {
    ref2.current = stateFromStoresArray;
  });
  const ref3 = selectedUnreadGuild.useRef([]);
  let items4 = [stateFromStores, VoiceStateStore, ReadStateStore, UserGuildSettingsStore, stateFromStores1];
  let items5 = [disabled, selectedGuildFromRoute, visible, selectedUnreadGuild];
  const obj5 = disabled(selectedGuildFromRoute[26]);
  const stateFromStoresArray1 = obj5.useStateFromStoresArray(items4, () => {
    let channelMuted;
    let mentionCount;
    let voiceStatesForChannel;
    let tmp2 = first;
    if (first == null) {
      tmp2 = selectedGuildFromRoute;
    }
    if (!disabled) {
      if (null != tmp2) {
        if (visible) {
          items = [];
          const items1 = [];
          const items2 = [];
          const items3 = [];
          const _Object = Object;
          const values = Object.values(ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(tmp2));
          for (const item10020 of values) {
            for (const key10024 in item10020) {
              let arr = items1.push(key10024);
              continue;
            }
            continue;
          }
          const guildChannels = ChannelListStore.getGuild(tmp2).guildChannels;
          guildChannels.forEachChannel((type) => {
            const tmp2 = memo(type.type);
            if (tmp2) {
              if (!channelMuted.isChannelMuted(type.guild_id, type.id)) {
                if (null == type.parent_id) {
                  if (mentionCount.getMentionCount(type.id) > 0) {
                    items.push(type.id);
                  } else {
                    if (!tmp2) {
                      const obj3 = disabled(selectedGuildFromRoute[39]);
                      if (obj3.getHasImportantUnread(type)) {
                        items1.push(type.id);
                      }
                    }
                    if (tmp2) {
                      const keys = Object.keys();
                      if (keys !== undefined) {
                        if (keys[tmp] !== undefined) {
                          items3.push(type.id);
                        }
                      }
                    } else if (mentionCount.hasUnread(type.id)) {
                      items2.push(type.id);
                    }
                  }
                }
              }
            }
          }, { ignoreRecents: true, withThreads: true });
          const push = items.push;
          const items4 = [];
          HermesBuiltin.arraySpread(items4, items1, 0);
          HermesBuiltin.apply(push, items4, items);
          const push2 = items.push;
          const items5 = [];
          HermesBuiltin.arraySpread(items5, items3, 0);
          HermesBuiltin.apply(push2, items5, items);
          const push3 = items.push;
          const items6 = [];
          HermesBuiltin.arraySpread(items6, items2, 0);
          HermesBuiltin.apply(push3, items6, items);
          return items;
        } else {
          return ref3.current;
        }
      }
    }
    return [];
  }, items5);
  const effect3 = selectedUnreadGuild.useEffect(() => {
    ref3.current = stateFromStoresArray1;
  });
  let items6 = [stateFromStoresArray1];
  const obj6 = disabled(selectedGuildFromRoute[26]);
  stateFromStores1 = obj6.useStateFromStores(items6, () => stateFromStoresArray1.getState().history);
  const ref4 = selectedUnreadGuild.useRef([]);
  const items7 = [disabled, visible, selectedGuildFromRoute, stateFromStoresArray, stateFromStores1];
  const memo = selectedUnreadGuild.useMemo(function() {
    if (!disabled) {
      if (visible) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(stateFromStoresArray);
        if (null != selectedGuildFromRoute) {
          set.add(tmp6);
        }
        items = [];
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const set1 = new Set();
        let diff = stateFromStores1.length - 1;
        if (0 <= diff) {
          while (null != stateFromStores1[diff]) {
            let tmp14;
            if (obj3.startsWith(metroImportAll)) {
              let channel = ChannelStore.getChannel(React4(obj3));
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              tmp14 = guild_id;
            } else {
              tmp14 = React4(obj3);
            }
            let guild = GuildStore.getGuild(tmp14);
            let hasItem = null == tmp14 || set.has(tmp14) || set1.has(tmp14) || null == guild;
            if (!hasItem) {
              let features = guild.features;
              hasItem = features.has(constants.HUB);
            }
            if (!hasItem) {
              let addResult1 = set1.add(tmp14);
              let arr = items.push(tmp14);
            }
            if (items.length >= 20) {
              break;
            } else {
              diff = diff - 1;
              if (0 > diff) {
                break;
              }
            }
          }
        }
        return items;
      }
    }
    return ref4.current;
  }, items7);
  const effect4 = selectedUnreadGuild.useEffect(() => {
    ref4.current = memo;
  });
  const ref5 = selectedUnreadGuild.useRef(undefined);
  const items8 = [disabled, visible, stateFromStoresArray1, selectedChannelFromRoute, selectedUnreadGuild, stateFromStores1];
  const memo1 = selectedUnreadGuild.useMemo(function() {
    let guild;
    function getChannelHistory(stateFromStores1, selectedChannelFromRoute) {
      let combined;
      if (null != selectedChannelFromRoute) {
        const _HermesInternal = HermesInternal;
        combined = "" + ref2 + selectedChannelFromRoute;
      }
      items = [];
      let diff = stateFromStores1.length - 1;
      if (0 <= diff) {
        while (null != stateFromStores1[diff]) {
          if (!obj.startsWith(ref3)) {
            if (obj !== combined) {
              let tmp8 = stateFromStoresArray(obj);
              basicChannel = basicChannel.getBasicChannel(tmp8);
              if (null != basicChannel) {
                if (null == basicChannel.guild_id) {
                  let arr = items.push(tmp8);
                  if (items.length >= 20) {
                    break;
                  }
                }
              }
              break;
            }
          }
          diff = diff - 1;
          if (0 > diff) {
            break;
          }
        }
      }
      return items;
    }
    if (!disabled) {
      if (visible) {
        let tmp24;
        items = [];
        let tmp8 = null;
        const tmp6 = getChannelHistory(stateFromStores1, selectedChannelFromRoute);
        if (null == first) {
          let tmp9 = globalThis;
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          for (const item10022 of tmp6) {
            let tmp15 = createAndAppendChannel(item10022, set, items);
            continue;
          }
        }
        const items1 = [];
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const set1 = new Set();
        if (stateFromStoresArray1.length > 0) {
          for (const item10040 of stateFromStoresArray1) {
            let tmp23 = createAndAppendChannel(item10040, set1, items1);
            continue;
          }
        }
        if (items.length > 0) {
          const obj = { channelHistory: items, unreads: items1 };
          tmp24 = obj;
        }
        return tmp24;
      } else {
        return ref5.current;
      }
    }
  }, items8);
  const effect5 = selectedUnreadGuild.useEffect(() => {
    ref5.current = memo1;
  });
  const obj7 = { initialResults: selectedUnreadGuild.useDeferredValue(memo1), unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, selectedUnreadGuild, setSelectedUnreadGuild: tmp3[1] };
  return obj7;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ActionSheetStore = ActionSheetStore_mod;
let ChannelListStore = ChannelListStore_mod;
let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: metroImportAll, getIdFromHistoryItem: c9, GUILD_PREFIX: c10 } = NavigationHistoryStore);
NavigationHistoryStore = NavigationHistoryStore_mod;
({ isGuildSelectableChannelType: map1, isGuildVocalChannelType: closure_14 } = ChannelRecord);
({ AnalyticEvents: closure_25, GuildFeatures: closure_26 } = Constants);
({ jsx: closure_27, jsxs: closure_28 } = Fragment);
const md = nativeDefault.radii.md;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, launchPadContent: { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }, header: { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 }, subheader: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", paddingStart: 8 }, tabs: obj3, tab: size, tabSelected: obj4 };
obj2 = { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
size = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_29 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let icon;
  let onPress;
  let selected;
  let style;
  const obj = react2;
  const cResult = obj.c(15);
  ({ onPress, icon, accessibilityLabel, selected, style } = arg0);
  const tmp4 = closure_29();
  let tabSelected;
  if (selected) {
    tabSelected = tmp4.tabSelected;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.tab) {
      let tmp6;
      let tmp7;
      if (cResult[2] === tabSelected) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== selected) {
        const obj2 = { selected };
        cResult[4] = selected;
        cResult[5] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[5];
      }
      const colors = nativeDefault.colors;
      const tmp9 = selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT;
      if (cResult[6] === icon) {
        let tmp10;
        if (cResult[7] === tmp9) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === accessibilityLabel) {
          if (cResult[10] === onPress) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === tmp7) {
                let tmp12;
                if (cResult[13] === tmp10) {
                  tmp12 = cResult[14];
                }
                return tmp12;
              }
            }
          }
        }
        const obj3 = { onPress, style: tmp6, accessibilityLabel, accessibilityRole: "tab", accessibilityState: tmp7, children: tmp10 };
        const tmp14 = closure_27(Pressables.PressableHighlight, obj3);
        cResult[9] = accessibilityLabel;
        cResult[10] = onPress;
        cResult[11] = tmp6;
        cResult[12] = tmp7;
        cResult[13] = tmp10;
        cResult[14] = tmp14;
        tmp12 = tmp14;
      }
      const iconResult = icon(tmp9);
      cResult[6] = icon;
      cResult[7] = tmp9;
      cResult[8] = iconResult;
      tmp10 = iconResult;
    }
  }
  items = [tmp4.tab, style, tabSelected];
  cResult[0] = style;
  cResult[1] = tmp4.tab;
  cResult[2] = tabSelected;
  cResult[3] = items;
  tmp6 = items;
}) : ((selected) => {
  let accessibilityLabel;
  let colors;
  let icon;
  let onPress;
  let style;
  selected = selected.selected;
  ({ onPress, icon, accessibilityLabel, style } = selected);
  const tmp = closure_29();
  const obj = { onPress, style: items, accessibilityLabel, accessibilityRole: "tab", accessibilityState: { selected }, children: icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT) };
  items = [tmp.tab, style, ];
  let tabSelected;
  const PressableHighlight = Pressables.PressableHighlight;
  if (selected) {
    tabSelected = tmp.tabSelected;
  }
  items[2] = tabSelected;
  colors = nativeDefault.colors;
  return closure_27(PressableHighlight, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const obj = react2;
  const cResult = obj.c(3);
  text = text.text;
  const tmp4 = closure_29();
  if (cResult[0] === tmp4.subheader) {
    let tmp5;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { style: tmp4.subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text };
  const tmp6 = closure_27(Text_Text.Text, obj2);
  cResult[0] = tmp4.subheader;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((text) => {
  text = text.text;
  const obj = { style: closure_29().subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text };
  return closure_27(Text_Text.Text, obj);
});
const constants3 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
const __initData = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
const __initData2 = { code: "function LaunchPadTsx2(sharedState_0){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState_0>0.75){runOnJS(setFocused)(true);}else{if(keyboardShown.get()&&sharedState_0<=0){runOnJS(setFocused)(false);}}}" };
const __initData3 = { code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get();}" };
const __initData4 = { code: "function LaunchPadTsx4(sharedState_0){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState_0>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState_0<=0){runOnJS(setFocused)(false);}}" };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((tab) => {
  let closure_7;
  let isDeveloper;
  let ref;
  let ref2;
  let sharedState;
  let tmp10;
  let tmp5;
  let tmp6;
  let updateQuery;
  let tmp = tab;
  let obj = tab(sharedState[23]);
  const cResult = obj.c(52);
  tab = tab.tab;
  const setTab = tab.setTab;
  ({ updateQuery, sharedState } = tab);
  const searchRef = tab.searchRef;
  const tmp4 = closure_29();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [DeveloperExperimentStore];
    const fn = function l() {
      return isDeveloper.isDeveloper;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmpResult = tmp(sharedState[26]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let obj3 = react;
  react = react.useRef(false);
  const tmpResult4 = tmp(sharedState[27]);
  const sharedValue = tmpResult4.useSharedValue(false);
  ActionSheetStore = react.useRef(tab);
  if (cResult[2] !== tab) {
    const fn2 = function v() {
      ref2.current = tab;
    };
    cResult[2] = tab;
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const effect = obj3.useEffect(tmp10);
  if (cResult[4] === sharedValue) {
    let tmp12;
    let tmp14;
    let tmp13;
    if (cResult[5] === searchRef) {
      tmp12 = cResult[6];
    }
    ChannelListStore = tmp12;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ActionSheetStore];
      class A {
        constructor() {
          return ref2.isOpen();
        }
      }
      cResult[7] = items1;
      cResult[8] = A;
      tmp14 = A;
      class H {
        constructor() {
          closure_7(!stateFromStores1, stateFromStores1);
        }
      }
    } else {
      tmp14 = cResult[8];
      tmp13 = cResult[7];
    }
    const tmpResult5 = tmp(sharedState[26]);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp14);
    if (cResult[9] === stateFromStores1) {
      let tmp17;
      let tmp18;
      if (cResult[10] === tmp12) {
        tmp17 = cResult[11];
        tmp18 = cResult[12];
      }
      const effect1 = obj3.useEffect(tmp17, tmp18);
      if (cResult[13] === tmp12) {
        if (cResult[14] === sharedState) {
          let tmp20;
          let tmp21;
          let tmp31;
          if (cResult[15] === tab) {
            tmp20 = cResult[16];
            tmp21 = cResult[17];
          }
          const effect2 = obj3.useEffect(tmp21, tmp20);
          const tmpResult6 = tmp(sharedState[27]);
          class D {
            constructor() {
              const tmp = tab === constants.SEARCH && 1 === sharedState.get();
              if (tmp) {
                closure_7(true);
              }
            }
          }
          let obj2 = { sharedState };
          tmp24.__closure = obj2;
          tmp24.__workletHash = 17067823098320;
          class H {
            constructor() {
              closure_7(!stateFromStores1, stateFromStores1);
            }
          }
          tmp24.__initData = __initData;
          class L {
            constructor(arg0) {
              if (!sharedValue.get()) {
                if (arg0 > 0.75) {
                  const obj2 = ReanimatedRexport;
                  obj2.runOnJS(closure_7)(true);
                }
              }
              const value = sharedValue.get() && arg0 <= 0;
              if (value) {
                const obj3 = ReanimatedRexport;
                obj3.runOnJS(closure_7)(false);
              }
            }
          }
          const useAnimatedReaction = tmpResult6.useAnimatedReaction;
          L.__closure = { keyboardShown: sharedValue, runOnJS: tmp(sharedState[27]).runOnJS, setFocused: tmp12 };
          L.__workletHash = 15266113312724;
          L.__initData = __initData2;
          const obj4 = { keyboardShown: sharedValue, runOnJS: tmp(sharedState[27]).runOnJS, setFocused: tmp12 };
          const animatedReaction = useAnimatedReaction(tmp24, L);
          if (cResult[18] === searchRef) {
            if (cResult[19] === tab) {
              let tmp39;
              let tmp38;
              const _Symbol2 = Symbol;
              const tabs = tmp4.tabs;
              class D {
                constructor() {
                  const tmp = tab === constants.SEARCH && 1 === sharedState.get();
                  if (tmp) {
                    closure_7(true);
                  }
                }
              }
              if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
                const fn4 = function z(color) {
                  const obj = { size: "sm", color };
                  return closure_1_27(tab(sharedState[31]).FlashIcon, obj);
                };
                const string = tmp(sharedState[30]).intl.string;
                class D {
                  constructor() {
                    const tmp = tab === constants.SEARCH && 1 === sharedState.get();
                    if (tmp) {
                      closure_7(true);
                    }
                  }
                }
                cResult[22] = fn4;
                class X {
                  constructor() {
                    setTab(constants.SEARCH);
                    const current = searchRef.current;
                    if (current != null) {
                      current.focus();
                    }
                  }
                }
                cResult[23] = tmp40;
                tmp39 = tmp40;
                class H {
                  constructor() {
                    closure_7(!stateFromStores1, stateFromStores1);
                  }
                }
              } else {
                tmp39 = cResult[23];
                tmp38 = cResult[22];
              }
              if (cResult[24] === searchRef) {
                let tmp41;
                if (cResult[25] === setTab) {
                  tmp41 = cResult[26];
                }
                class D {
                  constructor() {
                    const tmp = tab === constants.SEARCH && 1 === sharedState.get();
                    if (tmp) {
                      closure_7(true);
                    }
                  }
                }
                class X {
                  constructor() {
                    setTab(constants.SEARCH);
                    const current = searchRef.current;
                    if (current != null) {
                      current.focus();
                    }
                  }
                }
                tmp47[0] = tmp38;
                tmp47[1] = tmp39;
                class H {
                  constructor() {
                    closure_7(!stateFromStores1, stateFromStores1);
                  }
                }
                tmp47[3] = tab === constants3.SEARCH;
                class L {
                  constructor(arg0) {
                    if (!sharedValue.get()) {
                      if (arg0 > 0.75) {
                        const obj2 = ReanimatedRexport;
                        obj2.runOnJS(closure_7)(true);
                      }
                    }
                    const value = sharedValue.get() && arg0 <= 0;
                    if (value) {
                      const obj3 = ReanimatedRexport;
                      obj3.runOnJS(closure_7)(false);
                    }
                  }
                }
                cResult[27] = tmp41;
                cResult[28] = tab === constants3.SEARCH;
                cResult[29] = tmp48;
              }
              class X {
                constructor() {
                  setTab(constants.SEARCH);
                  const current = searchRef.current;
                  if (current != null) {
                    current.focus();
                  }
                }
              }
              cResult[24] = searchRef;
              class H {
                constructor() {
                  closure_7(!stateFromStores1, stateFromStores1);
                }
              }
              cResult[25] = setTab;
              class L {
                constructor(arg0) {
                  if (!sharedValue.get()) {
                    if (arg0 > 0.75) {
                      const obj2 = ReanimatedRexport;
                      obj2.runOnJS(closure_7)(true);
                    }
                  }
                  const value = sharedValue.get() && arg0 <= 0;
                  if (value) {
                    const obj3 = ReanimatedRexport;
                    obj3.runOnJS(closure_7)(false);
                  }
                }
              }
              cResult[26] = X;
              tmp41 = X;
            }
          }
          if (tab === constants3.SEARCH) {
            const obj5 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: null, autoComplete: "off", spellCheck: false, autoFocus: false };
            class D {
              constructor() {
                const tmp = tab === constants.SEARCH && 1 === sharedState.get();
                if (tmp) {
                  closure_7(true);
                }
              }
            }
            tmp31 = closure_27(tmp(sharedState[29]).SearchField, obj5);
          } else if (tab === constants3.MEMBERS) {
            ({ text: obj11.string(tmp(sharedState[30]).t["9Oq93m"]) });
            class D {
              constructor() {
                const tmp = tab === constants.SEARCH && 1 === sharedState.get();
                if (tmp) {
                  closure_7(true);
                }
              }
            }
            class X {
              constructor() {
                setTab(constants.SEARCH);
                const current = searchRef.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          } else if (tab === constants3.NOTIFICATIONS) {
            ({ text: obj9.string(tmp(sharedState[30]).t.HcoRu0) });
            class D {
              constructor() {
                const tmp = tab === constants.SEARCH && 1 === sharedState.get();
                if (tmp) {
                  closure_7(true);
                }
              }
            }
            class X {
              constructor() {
                setTab(constants.SEARCH);
                const current = searchRef.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          } else {
            tmp31 = closure_27(closure_31, { text: "Dev Tools" });
          }
          cResult[18] = searchRef;
          cResult[19] = tab;
          cResult[20] = updateQuery;
          cResult[21] = tmp31;
        }
      }
      class D {
        constructor() {
          const tmp = tab === constants.SEARCH && 1 === sharedState.get();
          if (tmp) {
            closure_7(true);
          }
        }
      }
      const items2 = [tab, , tmp12];
      class H {
        constructor() {
          closure_7(!stateFromStores1, stateFromStores1);
        }
      }
      cResult[15] = tab;
      cResult[16] = items2;
      cResult[17] = D;
      tmp21 = D;
      tmp20 = items2;
    }
    class H {
      constructor() {
        closure_7(!stateFromStores1, stateFromStores1);
      }
    }
    const items3 = [, tmp12];
    cResult[9] = stateFromStores1;
    cResult[10] = tmp12;
    cResult[11] = H;
    cResult[12] = items3;
    tmp18 = items3;
    tmp17 = H;
  }
  const fn3 = function y(arg0, arg1) {
    const tmp = arg0;
    if (tmp) {
      if (ref2.current === constants.SEARCH) {
        const obj3 = ChatInputUtils;
        const bestActiveInput = obj3.getBestActiveInput();
        let isFocusedResult;
        if (bestActiveInput != null) {
          isFocusedResult = bestActiveInput.isFocused();
        }
        ref.current = true === isFocusedResult;
        if (null != searchRef.current) {
          const result = sharedValue.set(true);
          const current3 = tmp20.current;
          if (current3 != null) {
            current3.focus();
          }
        }
      }
    }
    if (!arg0) {
      const current = ref.current && !arg1;
      if (current) {
        const obj = ChatInputUtils;
        const bestActiveInput1 = obj.getBestActiveInput();
        if (bestActiveInput1 != null) {
          bestActiveInput1.focus();
        }
      }
      const current2 = searchRef.current;
      if (current2 != null) {
        current2.blur();
      }
      ref.current = false;
      const result1 = sharedValue.set(false);
    }
  };
  cResult[4] = sharedValue;
  cResult[5] = searchRef;
  cResult[6] = fn3;
  tmp12 = fn3;
}) : ((tab) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isDeveloper;
  let items5;
  let items6;
  let ref;
  let sharedState;
  let tmp17;
  let tmp18;
  tab = tab.tab;
  ({ setTab: importDefault, sharedState } = tab);
  const searchRef = tab.searchRef;
  react = undefined;
  const updateQuery = tab.updateQuery;
  let tmp = closure_29();
  let obj = tab(sharedState[26]);
  items = [DeveloperExperimentStore];
  const stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
  react = react.useRef(false);
  let obj2 = tab(sharedState[27]);
  const sharedValue = obj2.useSharedValue(false);
  const ref2 = react.useRef(tab);
  const effect = react.useEffect(() => {
    ref2.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  const setFocused = react.useCallback((arg0, arg1) => {
    const tmp = arg0;
    if (tmp) {
      if (ref2.current === constants.SEARCH) {
        const obj3 = ChatInputUtils;
        const bestActiveInput = obj3.getBestActiveInput();
        let isFocusedResult;
        if (bestActiveInput != null) {
          isFocusedResult = bestActiveInput.isFocused();
        }
        ref.current = true === isFocusedResult;
        if (null != searchRef.current) {
          const result = sharedValue.set(true);
          const current3 = tmp20.current;
          if (current3 != null) {
            current3.focus();
          }
        }
      }
    }
    if (!arg0) {
      const current = ref.current && !arg1;
      if (current) {
        const obj = ChatInputUtils;
        const bestActiveInput1 = obj.getBestActiveInput();
        if (bestActiveInput1 != null) {
          bestActiveInput1.focus();
        }
      }
      const current2 = searchRef.current;
      if (current2 != null) {
        current2.blur();
      }
      ref.current = false;
      const result1 = sharedValue.set(false);
    }
  }, items1);
  let obj3 = tab(sharedState[26]);
  const items2 = [ref2];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, setFocused];
  const effect1 = react.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, setFocused];
  const effect2 = react.useEffect(() => {
    const tmp = tab === constants.SEARCH && 1 === sharedState.get();
    if (tmp) {
      callback(true);
    }
  }, items4);
  const fn = function y() {
    return sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 15536041461010;
  fn.__initData = __initData3;
  const fn2 = function v(arg0) {
    if (!sharedValue.get()) {
      if (arg0 > 0.75) {
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(callback)(true);
      }
    }
    const value = sharedValue.get() && arg0 <= 0;
    if (value) {
      const obj3 = ReanimatedRexport;
      obj3.runOnJS(callback)(false);
    }
  };
  const obj4 = tab(sharedState[27]);
  fn2.__closure = { keyboardShown: sharedValue, runOnJS: tab(sharedState[27]).runOnJS, setFocused };
  fn2.__workletHash = 7976600027348;
  fn2.__initData = __initData4;
  ({ keyboardShown: sharedValue, runOnJS: tab(sharedState[27]).runOnJS, setFocused });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj6 = { style: tmp.header, children: items5 };
  if (tab === constants3.SEARCH) {
    const obj7 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: updateQuery, autoComplete: "off", spellCheck: false, autoFocus: false };
    tmp18 = closure_27(tmp2(sharedState[29]).SearchField, obj7);
    tmp17 = closure_27;
  } else if (tab === constants3.MEMBERS) {
    const obj8 = { text: intl2.string(tab(sharedState[30]).t["9Oq93m"]) };
    intl2 = tmp2(sharedState[30]).intl;
    tmp18 = closure_27(closure_31, obj8);
    tmp17 = closure_27;
  } else if (tab === constants3.NOTIFICATIONS) {
    const obj9 = { text: intl.string(tab(sharedState[30]).t.HcoRu0) };
    intl = tmp2(sharedState[30]).intl;
    tmp18 = closure_27(closure_31, obj9);
    tmp17 = closure_27;
  } else {
    tmp17 = closure_27;
    tmp18 = closure_27(closure_31, { text: "Dev Tools" });
  }
  items5 = [tmp18, ];
  const obj10 = { style: tmp.tabs, children: items6 };
  const obj11 = {
    icon(color) {
      const obj = { size: "sm", color };
      return closure_1_27(tab(sharedState[31]).FlashIcon, obj);
    },
    accessibilityLabel: intl3.string(tab(sharedState[30]).t.JqV7IC),
    onPress() {
      importDefault(constants.SEARCH);
      const current = searchRef.current;
      if (current != null) {
        current.focus();
      }
    },
    selected: tab === constants3.SEARCH
  };
  intl3 = tmp2(sharedState[30]).intl;
  items6 = [tmp17(closure_30, obj11), , ];
  const obj12 = {
    icon(color) {
      const obj = { size: "sm", color };
      return closure_1_27(tab(sharedState[32]).BellIcon, obj);
    },
    accessibilityLabel: intl4.string(tab(sharedState[30]).t.HcoRu0),
    onPress() {
      importDefault(constants.NOTIFICATIONS);
      const current = searchRef.current;
      if (current != null) {
        current.blur();
      }
    },
    selected: tab === constants3.NOTIFICATIONS
  };
  intl4 = tmp2(sharedState[30]).intl;
  items6[1] = tmp17(closure_30, obj12);
  let tmp17Result = null;
  if (stateFromStores) {
    const obj13 = {
      icon(color) {
          const obj = { size: "sm", color };
          return closure_1_27(tab(sharedState[33]).StaffBadgeIcon, obj);
        },
      accessibilityLabel: "Dev Tools",
      selected: tab === constants3.DEV_TOOLS,
      onPress() {
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            const tmpResult = DevToolsNavigator;
            tmpResult.navigateToDevTools();
            hideLaunchPadDefault();
          } else {
            importDefault(constants.DEV_TOOLS);
          }
          const current = searchRef.current;
          if (current != null) {
            current.blur();
          }
        }
    };
    tmp17Result = tmp17(closure_30, obj13);
  }
  items6[2] = tmp17Result;
  items5[1] = closure_28(sharedValue, obj10);
  return closure_28(sharedValue, obj6);
}));
const results = [];
let items = [_mod9496.AutocompleterResultTypes.GUILD, _mod9496.AutocompleterResultTypes.TEXT_CHANNEL, _mod9496.AutocompleterResultTypes.GROUP_DM, _mod9496.AutocompleterResultTypes.VOICE_CHANNEL, _mod9496.AutocompleterResultTypes.USER];
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_29();
  const height = useWindowDimensionsDefault().height;
  const rect = useSafeAreaInsetsDefault();
  const diff = height - rect.top - rect.bottom - 16;
  if (cResult[0] !== diff) {
    const obj2 = { maxHeight: diff };
    cResult[0] = diff;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp2.wrapper) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  items = [tmp2.wrapper, tmp4];
  cResult[2] = tmp2.wrapper;
  cResult[3] = tmp4;
  cResult[4] = items;
  tmp5 = items;
}) : (() => {
  const tmp = closure_29();
  let closure_0 = tmp;
  const height = useWindowDimensionsDefault().height;
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const bottom = rect.bottom;
  items = [height, top, bottom, tmp];
  return react.useMemo(() => {
    items = [wrapper.wrapper, ];
    const obj = { maxHeight: height - top - bottom - 16 };
    items[1] = obj;
    return items;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let first1;
  let id;
  let items2;
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp6;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(17);
  [tmp4, importDefault] = first1(react.useState(""), 2);
  const tmp3 = first1(react.useState(""), 2);
  [tmp6, dependencyMap] = first1(react.useState(closure_40), 2);
  first1(react.useState(closure_40), 2);
  const tmp2 = first1;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const tmp = new AutocompleterDefault((arg0, str) => {
        str = str.trim();
        if ("" === str.trim()) {
          closure_1_2(results);
        } else {
          closure_1_2(arg0);
        }
      }, items, undefined, { frecencyBoosters: true });
      return tmp;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  first1 = tmp2(react.useState(first), 1)[0];
  if (cResult[1] !== first1) {
    const fn2 = function v() {
      return () => first1.clean();
    };
    items = [first1];
    cResult[1] = first1;
    cResult[2] = fn2;
    cResult[3] = items;
    tmp10 = items;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = react.useEffect(tmp9, tmp10);
  if (cResult[4] !== first1) {
    class E {
      constructor() {
        let options;
        const obj = RouteManagerDefault;
        return obj.addRouteChangeListener(() => {
          items = ["user:" + id.getId()];
          set = new Set(items);
          const obj2 = closure_0(dependencyMap[38]);
          const selectedGuildFromRoute = obj2.getSelectedGuildFromRoute();
          if (null != selectedGuildFromRoute) {
            const _HermesInternal = HermesInternal;
            set.add("guild:" + selectedGuildFromRoute);
          }
          options.setOptions({ blacklist: set }, true);
        });
      }
    }
    const items1 = [first1];
    cResult[4] = first1;
    cResult[5] = E;
    cResult[6] = items1;
    tmp13 = items1;
  } else {
    class E {
      constructor() {
        let options;
        const obj = RouteManagerDefault;
        return obj.addRouteChangeListener(() => {
          items = ["user:" + id.getId()];
          set = new Set(items);
          const obj2 = closure_0(dependencyMap[38]);
          const selectedGuildFromRoute = obj2.getSelectedGuildFromRoute();
          if (null != selectedGuildFromRoute) {
            const _HermesInternal = HermesInternal;
            set.add("guild:" + selectedGuildFromRoute);
          }
          options.setOptions({ blacklist: set }, true);
        });
      }
    }
    tmp13 = cResult[6];
  }
  const effect1 = react.useEffect(E, tmp13);
  if (cResult[7] === first1) {
    class E {
      constructor() {
        let options;
        const obj = RouteManagerDefault;
        return obj.addRouteChangeListener(() => {
          items = ["user:" + id.getId()];
          set = new Set(items);
          const obj2 = closure_0(dependencyMap[38]);
          const selectedGuildFromRoute = obj2.getSelectedGuildFromRoute();
          if (null != selectedGuildFromRoute) {
            const _HermesInternal = HermesInternal;
            set.add("guild:" + selectedGuildFromRoute);
          }
          options.setOptions({ blacklist: set }, true);
        });
      }
    }
    const effect2 = react.useEffect(T, items2);
    if (cResult[11] !== first1) {
      class I {
        constructor(arg0) {
          importDefault(arg0);
          first1.search(arg0);
        }
      }
      cResult[11] = first1;
      cResult[12] = I;
    } else {
      class I {
        constructor(arg0) {
          importDefault(arg0);
          first1.search(arg0);
        }
      }
    }
    if (cResult[13] === tmp4) {
      class I {
        constructor(arg0) {
          importDefault(arg0);
          first1.search(arg0);
        }
      }
    }
    const obj3 = { queryResults: tmp6, query: tmp4, updateQuery: I };
    cResult[13] = tmp4;
    cResult[14] = tmp6;
    cResult[15] = I;
    cResult[16] = obj3;
  }
  class T {
    constructor() {
      if (closure_0) {
        first1.resume();
      } else {
        first1.pause();
      }
    }
  }
  items2 = [arg0, first1];
  cResult[7] = first1;
  cResult[8] = arg0;
  cResult[9] = T;
  cResult[10] = items2;
}) : ((arg0) => {
  let first1;
  let id;
  let items3;
  let tmp4;
  let closure_0 = arg0;
  let tmp = first1(react.useState(""), 2);
  let closure_1 = tmp[1];
  const first = tmp[0];
  [tmp4, dependencyMap] = first1(react.useState(closure_40), 2);
  const tmp3 = first1(react.useState(closure_40), 2);
  first1 = first1(react.useState(() => {
    const tmp = new AutocompleterDefault((arg0, str) => {
      str = str.trim();
      if ("" === str.trim()) {
        closure_1_2(results);
      } else {
        closure_1_2(arg0);
      }
    }, items, undefined, { frecencyBoosters: true });
    return tmp;
  }), 1)[0];
  items = [first1];
  const effect = react.useEffect(() => () => first1.clean(), items);
  const items1 = [first1];
  const effect1 = react.useEffect(() => {
    let options;
    const obj = RouteManagerDefault;
    return obj.addRouteChangeListener(() => {
      items = ["user:" + id.getId()];
      set = new Set(items);
      const obj2 = closure_0(dependencyMap[38]);
      const selectedGuildFromRoute = obj2.getSelectedGuildFromRoute();
      if (null != selectedGuildFromRoute) {
        const _HermesInternal = HermesInternal;
        set.add("guild:" + selectedGuildFromRoute);
      }
      options.setOptions({ blacklist: set }, true);
    });
  }, items1);
  const items2 = [arg0, first1];
  const effect2 = react.useEffect(() => {
    if (closure_0) {
      first1.resume();
    } else {
      first1.pause();
    }
  }, items2);
  let obj = {
    queryResults: tmp4,
    query: first,
    updateQuery: react.useCallback((arg0) => {
      closure_1(arg0);
      first1.search(arg0);
    }, items3)
  };
  items3 = [first1];
  return obj;
});
const __initData5 = { code: "function LaunchPadTsx5(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
const __initData6 = { code: "function LaunchPadTsx6(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden){return;}if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else{if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}}" };
const __initData7 = { code: "function LaunchPadTsx7(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
const __initData8 = { code: "function LaunchPadTsx8(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_48 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, sharedState) => {
  let clearQuery;
  let closure_0;
  let tmp4;
  let tmp5;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = sharedState;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(2);
  let obj2 = clearQuery;
  const ref = clearQuery.useRef(-1);
  clearQuery = function clearQuery() {
    let ref2;
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      clearTimeout(ref2.current);
      closure_1_0("");
      const current = ref.current;
      if (current != null) {
        current.setText("");
      }
    }, 100);
  };
  function cancelTimeout() {
    clearTimeout(ref.current);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return () => clearTimeout(ref.current);
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  const fn2 = function c() {
    return 0 === sharedState.get();
  };
  fn2.__closure = { sharedState };
  fn2.__workletHash = 14085727500633;
  fn2.__initData = __initData5;
  const fn3 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (arg0 !== arg1) {
          const obj2 = ReanimatedRexport;
          obj2.runOnJS(clearQuery)();
        }
      }
      const tmp2 = arg0 || arg0 === arg1;
      if (!tmp2) {
        const obj = ReanimatedRexport;
        obj.runOnJS(cancelTimeout)();
      }
    }
  };
  const tmpResult = require("ReanimatedRexport");
  fn3.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, clearQuery, cancelTimeout };
  fn3.__workletHash = 1856708820062;
  fn3.__initData = __initData6;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, clearQuery, cancelTimeout });
  const animatedReaction = tmpResult.useAnimatedReaction(fn2, fn3);
}) : ((arg0, arg1, sharedState) => {
  let clearQuery;
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = sharedState;
  const ref = clearQuery.useRef(-1);
  items = [arg0, arg1];
  clearQuery = clearQuery.useCallback(() => {
    let ref2;
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      clearTimeout(ref2.current);
      closure_1_0("");
      const current = ref.current;
      if (current != null) {
        current.setText("");
      }
    }, 100);
  }, items);
  const callback1 = clearQuery.useCallback(() => {
    clearTimeout(ref.current);
  }, []);
  const effect = clearQuery.useEffect(() => () => clearTimeout(ref.current), []);
  let obj = require("ReanimatedRexport");
  const fn = function l() {
    return 0 === sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 422837622683;
  fn.__initData = __initData7;
  const fn2 = function i(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (arg0 !== arg1) {
          const obj2 = ReanimatedRexport;
          obj2.runOnJS(callback)();
        }
      }
      const tmp2 = arg0 || arg0 === arg1;
      if (!tmp2) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback1)();
      }
    }
  };
  let obj2 = { runOnJS: require("ReanimatedRexport").runOnJS, clearQuery, cancelTimeout: callback1 };
  fn2.__closure = obj2;
  fn2.__workletHash = 997415543952;
  fn2.__initData = __initData8;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let channelHistory2;
  let closure_3;
  let first;
  let first1;
  let first2;
  let guildHistory;
  let initialResults;
  let queryResults;
  let require;
  let selectedUnreadGuild;
  let setSelectedUnreadGuild;
  let sharedState;
  let tmp22;
  let tmp7;
  let unreadGuilds;
  let unreadPrivateChannelIds;
  let unreads2;
  let updateQuery;
  let visible;
  let obj = require("react");
  const cResult = obj.c(44);
  ({ visible, sharedState } = arg0);
  const tmp4 = closure_29();
  [tmp7, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return _require((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const ref = react.useRef(null);
  const tmp10 = closure_43(visible);
  const str = tmp10.query;
  ({ updateQuery, queryResults } = tmp10);
  if (cResult[1] !== str) {
    const trimmed = str.trim();
    cResult[1] = str;
    cResult[2] = trimmed;
    arr = trimmed;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] === arr.length > 0) {
    let tmp13;
    if (cResult[4] === visible) {
      tmp13 = cResult[5];
    }
    ({ initialResults, unreadPrivateChannelIds, unreadGuilds, guildHistory, selectedUnreadGuild, setSelectedUnreadGuild } = useInitialResults(tmp13));
    useInitialResults(tmp13);
    const tmp5Result = _slicedToArray(react.useState(false), 2);
    first1 = tmp5Result[0];
    _slicedToArray = tmp18;
    [first2, tmp22] = react.useState(constants3.SEARCH);
    const tmp24 = closure_42();
    if (cResult[6] === str.length) {
      let tmp25;
      if (cResult[7] === first1) {
        tmp25 = cResult[8];
      }
      if (cResult[9] === str) {
        let tmp26;
        let arr3;
        if (cResult[10] === first1) {
          tmp26 = cResult[11];
        }
        const effect = react.useEffect(tmp25, tmp26);
        closure_48(updateQuery, ref, sharedState);
        if (cResult[12] !== str) {
          const trimmed1 = str.trim();
          cResult[12] = str;
          cResult[13] = trimmed1;
          arr3 = trimmed1;
        } else {
          arr3 = cResult[13];
        }
        if (cResult[14] === sharedState) {
          if (cResult[15] === first2) {
            let tmp32;
            if (cResult[16] === updateQuery) {
              tmp32 = cResult[17];
            }
            if (cResult[18] === guildHistory) {
              if (cResult[19] === str) {
                if (cResult[20] === selectedUnreadGuild) {
                  if (cResult[21] === setSelectedUnreadGuild) {
                    if (cResult[22] === first2) {
                      if (cResult[23] === unreadGuilds) {
                        if (cResult[24] === unreadPrivateChannelIds) {
                          let tmp36;
                          let tmp44;
                          let tmp52Result;
                          if (cResult[25] === visible) {
                            tmp36 = cResult[26];
                          }
                          if (cResult[27] === tmp7) {
                            let channelHistory;
                            const tmp40 = cResult[28];
                            if (initialResults != null) {
                              channelHistory = initialResults.channelHistory;
                            }
                            if (tmp40 === channelHistory) {
                              let unreads;
                              const tmp42 = cResult[29];
                              if (initialResults != null) {
                                unreads = initialResults.unreads;
                              }
                              if (tmp42 === unreads) {
                                if (cResult[30] === arr3.length > 0) {
                                  if (cResult[31] === str) {
                                    if (cResult[32] === queryResults) {
                                      if (cResult[33] === selectedUnreadGuild) {
                                        if (cResult[34] === first2) {
                                          tmp44 = cResult[35];
                                        }
                                        if (cResult[36] === tmp4.launchPadContent) {
                                          let tmp59;
                                          if (cResult[37] === tmp44) {
                                            tmp59 = cResult[38];
                                          }
                                          if (cResult[39] === tmp59) {
                                            if (cResult[40] === tmp32) {
                                              if (cResult[41] === tmp36) {
                                                let tmp63;
                                                if (cResult[42] === tmp24) {
                                                  tmp63 = cResult[43];
                                                }
                                                return tmp63;
                                              }
                                            }
                                          }
                                          const obj3 = { style: tmp24, children: items };
                                          items = [tmp32, tmp36, tmp59];
                                          cResult[39] = tmp59;
                                          cResult[40] = tmp32;
                                          cResult[41] = tmp36;
                                          cResult[42] = tmp24;
                                          const tmp66 = closure_28(View, obj3);
                                          class O {
                                            constructor() {
                                              if (str.length > 0) {
                                                if (!first1) {
                                                  const obj = AnalyticsUtilsDefault;
                                                  obj.track(constants.LAUNCHPAD_SEARCHED);
                                                  closure_3(true);
                                                }
                                              }
                                              if (0 === str.length) {
                                                closure_3(false);
                                              }
                                            }
                                          }
                                          tmp63 = tmp66;
                                        }
                                        const obj4 = { style: tmp4.launchPadContent, children: tmp44 };
                                        const tmp62 = closure_27(View, obj4);
                                        cResult[36] = tmp4.launchPadContent;
                                        cResult[37] = tmp44;
                                        cResult[38] = tmp62;
                                        tmp59 = tmp62;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (first2 === constants3.SEARCH) {
                            if (arr3.length > 0) {
                              let tmp56 = queryResults;
                              const SearchResults = require("LaunchPadSearchResults").SearchResults;
                              if (queryResults == null) {
                                tmp56 = closure_40;
                              }
                              const obj5 = { results: tmp56, query: str };
                              tmp52Result = closure_27(SearchResults, obj5);
                            }
                            cResult[27] = tmp7;
                            let channelHistory1;
                            if (initialResults != null) {
                              channelHistory1 = initialResults.channelHistory;
                            }
                            cResult[28] = channelHistory1;
                            let unreads1;
                            if (initialResults != null) {
                              unreads1 = initialResults.unreads;
                            }
                            cResult[29] = unreads1;
                            cResult[30] = arr3.length > 0;
                            cResult[31] = str;
                            cResult[32] = queryResults;
                            cResult[33] = selectedUnreadGuild;
                            cResult[34] = first2;
                            class O {
                              constructor() {
                                if (str.length > 0) {
                                  if (!first1) {
                                    const obj = AnalyticsUtilsDefault;
                                    obj.track(constants.LAUNCHPAD_SEARCHED);
                                    closure_3(true);
                                  }
                                }
                                if (0 === str.length) {
                                  closure_3(false);
                                }
                              }
                            }
                            cResult[35] = tmp52Result;
                            tmp44 = tmp52Result;
                          }
                          if (first2 === constants3.SEARCH) {
                            const obj6 = { selectedGuildId: selectedUnreadGuild, unreads: unreads2, history: channelHistory2, expandedHistory: tmp7, toggleExpandedHistory: first };
                            unreads2 = undefined;
                            const InitialResults = require("LaunchPadSearchResults").InitialResults;
                            if (initialResults != null) {
                              unreads2 = initialResults.unreads;
                            }
                            if (unreads2 == null) {
                              unreads2 = closure_40;
                            }
                            channelHistory2 = undefined;
                            if (initialResults != null) {
                              channelHistory2 = initialResults.channelHistory;
                            }
                            if (channelHistory2 == null) {
                              channelHistory2 = closure_40;
                            }
                            tmp52Result = closure_27(InitialResults, obj6);
                          } else if (first2 === constants3.DEV_TOOLS) {
                            tmp52Result = closure_27(str(tmp2[48]), {});
                          } else if (first2 === constants3.MEMBERS) {
                            tmp52Result = closure_27(str(tmp2[49]), {});
                          } else {
                            tmp52Result = closure_27(str(tmp2[50]), {});
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let tmp37 = 0 === str.trim().length && first2 === constants3.SEARCH;
            if (tmp37) {
              const obj7 = { selectedGuildId: selectedUnreadGuild, setSelectedGuild: setSelectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, visible };
              tmp37 = closure_27(str(tmp2[46]), obj7);
            }
            cResult[18] = guildHistory;
            cResult[19] = str;
            cResult[20] = selectedUnreadGuild;
            cResult[21] = setSelectedUnreadGuild;
            cResult[22] = first2;
            cResult[23] = unreadGuilds;
            cResult[24] = unreadPrivateChannelIds;
            cResult[25] = visible;
            class O {
              constructor() {
                if (str.length > 0) {
                  if (!first1) {
                    const obj = AnalyticsUtilsDefault;
                    obj.track(constants.LAUNCHPAD_SEARCHED);
                    closure_3(true);
                  }
                }
                if (0 === str.length) {
                  closure_3(false);
                }
              }
            }
            tmp36 = tmp37;
          }
        }
        const obj8 = { tab: first2, setTab: tmp22, updateQuery, searchRef: ref, sharedState };
        const tmp35 = closure_27(closure_37, obj8);
        cResult[14] = sharedState;
        cResult[15] = first2;
        class O {
          constructor() {
            if (str.length > 0) {
              if (!first1) {
                const obj = AnalyticsUtilsDefault;
                obj.track(constants.LAUNCHPAD_SEARCHED);
                closure_3(true);
              }
            }
            if (0 === str.length) {
              closure_3(false);
            }
          }
        }
        cResult[17] = tmp35;
        tmp32 = tmp35;
      }
      const items1 = [str, tmp5Result[1], first1];
      cResult[9] = str;
      cResult[10] = first1;
      cResult[11] = items1;
      tmp26 = items1;
    }
    class O {
      constructor() {
        if (str.length > 0) {
          if (!first1) {
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.LAUNCHPAD_SEARCHED);
            closure_3(true);
          }
        }
        if (0 === str.length) {
          closure_3(false);
        }
      }
    }
    cResult[6] = str.length;
    cResult[7] = first1;
    cResult[8] = O;
    tmp25 = O;
  }
  const obj9 = { disabled: arr.length > 0, visible };
  cResult[3] = arr.length > 0;
  cResult[4] = visible;
  cResult[5] = obj9;
  tmp13 = obj9;
}) : ((arg0) => {
  let _undefined;
  let c0;
  let channelHistory;
  let closure_3;
  let first;
  let guildHistory;
  let initialResults;
  let queryResults;
  let selectedUnreadGuild;
  let setSelectedUnreadGuild;
  let sharedState;
  let tmp21Result2;
  let tmp3;
  let unreadGuilds;
  let unreadPrivateChannelIds;
  let unreads;
  let updateQuery;
  let visible;
  ({ visible, sharedState } = arg0);
  _require = undefined;
  first = undefined;
  _slicedToArray = undefined;
  const tmp = closure_29();
  [tmp3, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const ref = react.useRef(null);
  const tmp6 = closure_43(visible);
  const str = tmp6.query;
  ({ updateQuery, queryResults } = tmp6);
  let obj = { disabled: str.trim().length > 0, visible };
  ({ initialResults, selectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, setSelectedUnreadGuild } = useInitialResults(obj));
  const tmp7 = useInitialResults(obj);
  [first, items[1]] = react.useState(false);
  _slicedToArray = tmp10;
  const tmp12 = _slicedToArray(react.useState(constants3.SEARCH), 2);
  const first1 = tmp12[0];
  items = [, , ];
  const tmp14 = tmp12[1];
  items[0] = str;
  items[2] = first;
  const tmp15 = closure_42();
  const effect = react.useEffect(() => {
    if (str.length > 0) {
      if (!first) {
        const obj = AnalyticsUtilsDefault;
        obj.track(constants.LAUNCHPAD_SEARCHED);
        closure_3(true);
      }
    }
    if (0 === str.length) {
      closure_3(false);
    }
  }, items);
  closure_48(updateQuery, ref, sharedState);
  const obj2 = { style: tmp15, children: null };
  const items1 = [, , ];
  const tmp18 = str.trim().length > 0;
  items1[0] = closure_27(closure_37, { tab: first1, setTab: tmp14, updateQuery, searchRef: ref, sharedState });
  let tmp21Result = 0 === str.trim().length && first1 === constants3.SEARCH;
  if (tmp21Result) {
    const obj3 = { selectedGuildId: selectedUnreadGuild, setSelectedGuild: setSelectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, visible };
    tmp21Result = closure_27(str(first[46]), obj3);
  }
  items1[1] = tmp21Result;
  const obj4 = { style: tmp.launchPadContent, children: null };
  if (first1 === constants3.SEARCH) {
    if (tmp18) {
      const obj5 = { results, query: str };
      const SearchResults = require("LaunchPadSearchResults").SearchResults;
      tmp21Result2 = closure_27(SearchResults, obj5);
    }
    obj4.children = tmp21Result2;
    items1[2] = closure_27(View, obj4);
    obj2.children = items1;
    return closure_28(View, obj2);
  }
  if (first1 === constants3.SEARCH) {
    const obj6 = { selectedGuildId: selectedUnreadGuild, unreads, history: channelHistory, expandedHistory: tmp3, toggleExpandedHistory: callback };
    unreads = undefined;
    const InitialResults = require("LaunchPadSearchResults").InitialResults;
    if (initialResults != null) {
      unreads = initialResults.unreads;
    }
    if (unreads == null) {
      unreads = results;
    }
    channelHistory = undefined;
    if (initialResults != null) {
      channelHistory = initialResults.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = results;
    }
    tmp21Result2 = closure_27(InitialResults, obj6);
  } else if (first1 === constants3.DEV_TOOLS) {
    tmp21Result2 = closure_27(str(first[48]), {});
  } else if (first1 === constants3.MEMBERS) {
    tmp21Result2 = closure_27(str(first[49]), {});
  } else {
    tmp21Result2 = closure_27(str(first[50]), {});
  }
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default memoResult;