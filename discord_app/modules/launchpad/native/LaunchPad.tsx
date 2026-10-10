// === Module 17924: LaunchPad ===

// Module 17924 (LaunchPad)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import Text_Text from "Text/Text" /* 5088 */;
import Pressables from "Pressables" /* 6184 */;
import AutocompleterDefault from "Autocompleter" /* 8700 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 8712 */;
import RouteManagerDefault from "RouteManager" /* 11200 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 12687 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14808 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4802 */;
import ChannelListStore from "ChannelListStore" /* 7248 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 6073 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6034 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7408 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6077 */;
import GuildStore from "GuildStore" /* 2087 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 14020 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

const require = globalThis.__r;

require = fn;
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
  selectedGuildFromRoute = disabled(selectedGuildFromRoute[38]).getSelectedGuildFromRoute();
  let obj = disabled(selectedGuildFromRoute[38]);
  const selectedChannelFromRoute = disabled(selectedGuildFromRoute[38]).getSelectedChannelFromRoute();
  const tmp3 = selectedChannelFromRoute(selectedUnreadGuild.useState(undefined), 2);
  selectedUnreadGuild = tmp3[0];
  closure_5 = tmp5;
  items = [visible];
  const effect = selectedUnreadGuild.useEffect(() => {
    if (!visible) {
      closure_5(undefined);
    }
  }, items);
  selectedUnreadGuild.useRef([]);
  const obj2 = disabled(selectedGuildFromRoute[38]);
  let items1 = [PrivateChannelReadStateStore];
  const stateFromStores = disabled(selectedGuildFromRoute[26]).useStateFromStores(items1, () => {
    if (visible) {
      let current = PrivateChannelReadStateStore.getUnreadPrivateChannelIds();
    } else {
      current = ref.current;
    }
    return current;
  });
  const effect1 = selectedUnreadGuild.useEffect(() => {
    closure_6.current = stateFromStores;
  });
  selectedUnreadGuild.useRef([]);
  let obj3 = disabled(selectedGuildFromRoute[26]);
  let items2 = [SortedGuildStore, GuildReadStateStore, GuildStore];
  let items3 = [visible, selectedGuildFromRoute];
  const stateFromStoresArray = disabled(selectedGuildFromRoute[26]).useStateFromStoresArray(items2, () => {
    if (visible) {
      items = [];
      const items1 = [];
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        if (nextResult !== selectedGuildFromRoute) {
          let hasUnreadResult = GuildReadStateStore.getMentionCount(tmp9) > 0;
          let tmp31 = hasUnreadResult;
          if (!hasUnreadResult) {
            hasUnreadResult = GuildReadStateStore.hasUnread(tmp9);
          }
          if (hasUnreadResult) {
            guild = GuildStore.getGuild(tmp9);
            let hasItem;
            if (guild != null) {
              let features = guild.features;
              hasItem = features.has(constants2.HUB);
            }
            if (!hasItem) {
              if (tmp31) {
                let arr = items.push(tmp9);
              } else {
                let arr2 = items1.push(tmp9);
              }
            }
          }
        }
        continue;
      }
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(items1, 0);
      HermesBuiltin.apply(items2, items);
      return items;
    } else {
      return ref2.current;
    }
  }, items3);
  const effect2 = selectedUnreadGuild.useEffect(() => {
    closure_8.current = stateFromStoresArray;
  });
  selectedUnreadGuild.useRef([]);
  const obj4 = disabled(selectedGuildFromRoute[26]);
  let items4 = [stateFromStores, VoiceStateStore, ReadStateStore, UserGuildSettingsStore, stateFromStores1];
  let items5 = [disabled, selectedGuildFromRoute, visible, selectedUnreadGuild];
  const stateFromStoresArray1 = disabled(selectedGuildFromRoute[26]).useStateFromStoresArray(items4, () => {
    let tmp = first;
    if (first == null) {
      tmp = selectedGuildFromRoute;
    }
    if (!disabled) {
      if (null != tmp) {
        if (visible) {
          items = [];
          const items1 = [];
          const items2 = [];
          const items3 = [];
          const _Object = Object;
          const values = Object.values(ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(tmp));
          for (const item10020 of values) {
            for (const key10024 in item10020) {
              let arr = items1.push(key10024);
              continue;
            }
            continue;
          }
          const guildChannels = ChannelListStore.getGuild(tmp).guildChannels;
          guildChannels.forEachChannel((type) => {
            const tmp2 = memo(type.type);
            if (tmp2) {
              if (!channelMuted.isChannelMuted(type.guild_id, type.id)) {
                if (null == type.parent_id) {
                  if (mentionCount.getMentionCount(type.id) > 0) {
                    items.push(type.id);
                  } else {
                    if (!tmp2) {
                      if (obj3.getHasImportantUnread(type)) {
                        items1.push(type.id);
                      }
                      obj3 = disabled(selectedGuildFromRoute[39]);
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
          HermesBuiltin.arraySpread(items1, 0);
          HermesBuiltin.apply(items4, items);
          const push2 = items.push;
          const items5 = [];
          HermesBuiltin.arraySpread(items3, 0);
          HermesBuiltin.apply(items5, items);
          const push3 = items.push;
          const items6 = [];
          HermesBuiltin.arraySpread(items2, 0);
          HermesBuiltin.apply(items6, items);
          return items;
        } else {
          return ref3.current;
        }
      }
    }
    return [];
  }, items5);
  const effect3 = selectedUnreadGuild.useEffect(() => {
    closure_10.current = stateFromStoresArray1;
  });
  const obj5 = disabled(selectedGuildFromRoute[26]);
  let items6 = [stateFromStoresArray1];
  stateFromStores1 = disabled(selectedGuildFromRoute[26]).useStateFromStores(items6, () => stateFromStoresArray1.getState().history);
  selectedUnreadGuild.useRef([]);
  const items7 = [disabled, visible, selectedGuildFromRoute, stateFromStoresArray, stateFromStores1];
  const memo = selectedUnreadGuild.useMemo(() => {
    if (!disabled) {
      if (visible) {
        const _Set = Set;
        const set = new Set(stateFromStoresArray);
        if (null != selectedGuildFromRoute) {
          set.add(tmp7);
        }
        items = [];
        const _Set2 = Set;
        const set1 = new Set();
        let diff = stateFromStores1.length - 1;
        if (0 <= diff) {
          while (null != stateFromStores1[diff]) {
            if (obj3.startsWith(closure_2_8)) {
              let channel = ChannelStore.getChannel(options(obj3));
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              let tmp17 = guild_id;
            } else {
              tmp17 = options(obj3);
            }
            guild = GuildStore.getGuild(tmp17);
            let hasItem = null == tmp17 || set.has(tmp17) || set1.has(tmp17) || null == guild;
            if (!hasItem) {
              let features = guild.features;
              hasItem = features.has(constants2.HUB);
            }
            if (!hasItem) {
              let addResult1 = set1.add(tmp17);
              let arr = items.push(tmp17);
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
    closure_13.current = memo;
  });
  selectedUnreadGuild.useRef(undefined);
  const items8 = [disabled, visible, stateFromStoresArray1, selectedChannelFromRoute, selectedUnreadGuild, stateFromStores1];
  const memo1 = selectedUnreadGuild.useMemo(() => {
    if (!disabled) {
      if (visible) {
        const tmp5 = (function getChannelHistory(stateFromStores1, selectedChannelFromRoute) {
          if (null != selectedChannelFromRoute) {
            const _HermesInternal = HermesInternal;
            const combined = "" + ref2 + selectedChannelFromRoute;
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
        })(stateFromStores1, selectedChannelFromRoute);
        items = [];
        if (null == first) {
          const _Set = Set;
          const set = new Set();
          for (const item10022 of tmp5) {
            let tmp16 = createAndAppendChannel(item10022, set, items);
            continue;
          }
        }
        const items1 = [];
        const _Set2 = Set;
        const set1 = new Set();
        if (stateFromStoresArray1.length > 0) {
          for (const item10040 of tmp22) {
            let tmp26 = createAndAppendChannel(item10040, set1, items1);
            continue;
          }
        }
        if (items.length > 0) {
          const obj = { channelHistory: items, unreads: items1 };
          const tmp27 = obj;
        }
        return tmp27;
      } else {
        return ref5.current;
      }
    }
  }, items8);
  const effect5 = selectedUnreadGuild.useEffect(() => {
    closure_15.current = memo1;
  });
  const obj6 = disabled(selectedGuildFromRoute[26]);
  return { initialResults: selectedUnreadGuild.useDeferredValue(memo1), unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, selectedUnreadGuild, setSelectedUnreadGuild: tmp3[1] };
}
const View = fn(17).View;
let NavigationHistoryStore = fn(6073);
({ CHANNEL_PREFIX: closure_8, getIdFromHistoryItem: closure_9, GUILD_PREFIX: c10 } = NavigationHistoryStore);
let NavigationHistoryStore = NavigationHistoryStore_mod;
const ChannelRecord = fn(2069);
({ isGuildSelectableChannelType: map1, isGuildVocalChannelType: closure_14 } = ChannelRecord);
const Constants = fn(1085);
({ AnalyticEvents: closure_25, GuildFeatures: closure_26 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_27, jsxs: closure_28 } = jsxProd);
const md = nativeDefault.radii.md;
const createStyles = fn(5092);
let obj = { wrapper: { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" }, launchPadContent: { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }, header: { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 }, subheader: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", paddingStart: 8 }, tabs: null, tab: null, tabSelected: null };
let obj3 = { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" };
obj.tabs = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
let size = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj.tab = size;
let obj4 = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
obj.tabSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_29 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function TabButton(arg0) {
  const cResult = c.c(15);
  ({ onPress, icon, accessibilityLabel, selected, style } = arg0);
  const tmp4 = closure_29();
  let tabSelected;
  if (selected) {
    tabSelected = tmp4.tabSelected;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.tab) {
      if (cResult[2] === tabSelected) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== selected) {
        const obj2 = { selected };
        cResult[4] = selected;
        cResult[5] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[5];
      }
      const colors = nativeDefault.colors;
      const tmp9 = selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT;
      if (cResult[6] === icon) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === accessibilityLabel) {
          if (cResult[10] === onPress) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === tmp7) {
                if (cResult[13] === tmp10) {
                  let tmp12 = cResult[14];
                }
                return tmp12;
              }
            }
          }
        }
        const obj3 = { onPress, style: tmp6, accessibilityLabel, accessibilityRole: "tab", accessibilityState: tmp7, children: tmp10 };
        const tmp14 = closure_1_27(Pressables.PressableHighlight, obj3);
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
}) : (function TabButton(selected) {
  selected = selected.selected;
  ({ onPress, icon, accessibilityLabel, style } = selected);
  const tmp = closure_29();
  const obj = { onPress, style: null, accessibilityLabel: null, accessibilityRole: "tab", accessibilityState: null, children: null };
  items = [tmp.tab, style, ];
  let tabSelected;
  if (selected) {
    tabSelected = tmp.tabSelected;
  }
  items[2] = tabSelected;
  obj.style = items;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityState = { selected };
  const colors = nativeDefault.colors;
  obj.children = icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT);
  return closure_1_27(Pressables.PressableHighlight, obj);
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function TabHeader(text) {
  const cResult = c.c(3);
  text = text.text;
  const tmp4 = closure_29();
  if (cResult[0] === tmp4.subheader) {
    if (cResult[1] === text) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = closure_1_27(Text_Text.Text, { style: tmp4.subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text });
  cResult[0] = tmp4.subheader;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { style: tmp4.subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text };
}) : (function TabHeader(children) {
  const tmp = closure_29();
  return closure_1_27(Text_Text.Text, { style: closure_29().subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: children.text });
});
const constants3 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
const __initData = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
const __initData2 = { code: "function LaunchPadTsx2(sharedState_0){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState_0>0.75){runOnJS(setFocused)(true);}else{if(keyboardShown.get()&&sharedState_0<=0){runOnJS(setFocused)(false);}}}" };
const __initData3 = { code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get();}" };
const __initData4 = { code: "function LaunchPadTsx4(sharedState_0){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState_0>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState_0<=0){runOnJS(setFocused)(false);}}" };
ReactCompilerGating = fn(558);
let closure_37 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LaunchPadHeader(tab) {
  const cResult = tab(sharedState[23]).c(52);
  tab = tab.tab;
  const setTab = tab.setTab;
  ({ updateQuery, sharedState } = tab);
  const searchRef = tab.searchRef;
  let obj = tab(sharedState[23]);
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
  const tmp4 = closure_29();
  const stateFromStores = tab(sharedState[26]).useStateFromStores(tmp5, tmp6);
  noop = noop.useRef(false);
  let tmpResult = tab(sharedState[26]);
  const sharedValue = tab(sharedState[27]).useSharedValue(false);
  ActionSheetStore = noop.useRef(tab);
  if (cResult[2] !== tab) {
    const fn2 = function y() {
      closure_6.current = tab;
    };
    cResult[2] = tab;
    cResult[3] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const effect = obj3.useEffect(tmp10);
  if (cResult[4] === sharedValue) {
    if (cResult[5] === searchRef) {
      let tmp12 = cResult[6];
    }
    ChannelListStore = tmp12;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ActionSheetStore];
      class I {
        constructor() {
          return closure_6.isOpen();
        }
      }
      cResult[7] = items1;
      cResult[8] = I;
      let tmp14 = I;
      class O {
        constructor() {
          tmp = closure_7(!closure_8, closure_8);
          return;
        }
      }
    } else {
      tmp14 = cResult[8];
      const tmp13 = cResult[7];
    }
    const stateFromStores1 = tmp(sharedState[26]).useStateFromStores(tmp13, tmp14);
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp12) {
        let tmp17 = cResult[11];
        let tmp18 = cResult[12];
      }
      const effect1 = obj3.useEffect(tmp17, tmp18);
      if (cResult[13] === tmp12) {
        if (cResult[14] === sharedState) {
          if (cResult[15] === tab) {
            let tmp20 = cResult[16];
            let tmp21 = cResult[17];
          }
          const effect2 = obj3.useEffect(tmp21, tmp20);
          class L {
            constructor() {
              tmp = tab === closure_32.SEARCH;
              if (tmp) {
                tmp2 = sharedState;
                num = 1;
                tmp = 1 === sharedState.get();
              }
              if (tmp) {
                tmp3 = closure_7;
                flag = true;
                tmp4 = closure_7(true);
              }
              return;
            }
          }
          let obj2 = { sharedState };
          tmp23.__closure = obj2;
          tmp23.__workletHash = 17067823098320;
          class O {
            constructor() {
              tmp = closure_7(!closure_8, closure_8);
              return;
            }
          }
          tmp23.__initData = __initData;
          class D {
            constructor(arg0) {
              obj = closure_5;
              if (!closure_5.get()) {
                num = 0.75;
                if (tab > 0.75) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[27]);
                  tmp3 = closure_7;
                  flag = true;
                  tmp4 = obj2.runOnJS(closure_7)(true);
                }
                return;
              }
              value = obj.get();
              if (value) {
                num2 = 0;
                value = tab <= 0;
              }
              if (value) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj3 = closure_0(closure_2[27]);
                tmp8 = closure_7;
                flag2 = false;
                tmp9 = obj3.runOnJS(closure_7)(false);
              }
              return;
            }
          }
          const obj4 = { keyboardShown: sharedValue, runOnJS: tmp(sharedState[27]).runOnJS, setFocused: tmp12 };
          D.__closure = obj4;
          D.__workletHash = 15266113312724;
          D.__initData = __initData2;
          const animatedReaction = tmp(sharedState[27]).useAnimatedReaction(tmp23, D);
          if (cResult[18] === searchRef) {
            if (cResult[19] === tab) {
              if (cResult[20] === updateQuery) {
                const _Symbol2 = Symbol;
                const tabs = tmp4.tabs;
                class L {
                  constructor() {
                    tmp = tab === closure_32.SEARCH;
                    if (tmp) {
                      tmp2 = sharedState;
                      num = 1;
                      tmp = 1 === sharedState.get();
                    }
                    if (tmp) {
                      tmp3 = closure_7;
                      flag = true;
                      tmp4 = closure_7(true);
                    }
                    return;
                  }
                }
                if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
                  const fn4 = function z(color) {
                    return closure_1_27(tab(sharedState[31]).FlashIcon, { size: "sm", color });
                  };
                  const string = tmp(sharedState[30]).intl.string;
                  class L {
                    constructor() {
                      tmp = tab === closure_32.SEARCH;
                      if (tmp) {
                        tmp2 = sharedState;
                        num = 1;
                        tmp = 1 === sharedState.get();
                      }
                      if (tmp) {
                        tmp3 = closure_7;
                        flag = true;
                        tmp4 = closure_7(true);
                      }
                      return;
                    }
                  }
                  cResult[22] = fn4;
                  class W {
                    constructor() {
                      tmp = setTab(closure_32.SEARCH);
                      current = searchRef.current;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return;
                    }
                  }
                  cResult[23] = tmp40;
                  let tmp39 = tmp40;
                  class O {
                    constructor() {
                      tmp = closure_7(!closure_8, closure_8);
                      return;
                    }
                  }
                } else {
                  tmp39 = cResult[23];
                  const tmp38 = cResult[22];
                }
                if (cResult[24] === searchRef) {
                  if (cResult[25] === setTab) {
                    let tmp41 = cResult[26];
                  }
                  class L {
                    constructor() {
                      tmp = tab === closure_32.SEARCH;
                      if (tmp) {
                        tmp2 = sharedState;
                        num = 1;
                        tmp = 1 === sharedState.get();
                      }
                      if (tmp) {
                        tmp3 = closure_7;
                        flag = true;
                        tmp4 = closure_7(true);
                      }
                      return;
                    }
                  }
                  class W {
                    constructor() {
                      tmp = setTab(closure_32.SEARCH);
                      current = searchRef.current;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return;
                    }
                  }
                  tmp47[0] = tmp38;
                  tmp47[1] = tmp39;
                  class O {
                    constructor() {
                      tmp = closure_7(!closure_8, closure_8);
                      return;
                    }
                  }
                  tmp47[3] = tab === constants3.SEARCH;
                  class D {
                    constructor(arg0) {
                      obj = closure_5;
                      if (!closure_5.get()) {
                        num = 0.75;
                        if (tab > 0.75) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj2 = closure_0(closure_2[27]);
                          tmp3 = closure_7;
                          flag = true;
                          tmp4 = obj2.runOnJS(closure_7)(true);
                        }
                        return;
                      }
                      value = obj.get();
                      if (value) {
                        num2 = 0;
                        value = tab <= 0;
                      }
                      if (value) {
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        obj3 = closure_0(closure_2[27]);
                        tmp8 = closure_7;
                        flag2 = false;
                        tmp9 = obj3.runOnJS(closure_7)(false);
                      }
                      return;
                    }
                  }
                  cResult[27] = tmp41;
                  cResult[28] = tab === constants3.SEARCH;
                  cResult[29] = tmp48;
                }
                class W {
                  constructor() {
                    tmp = setTab(closure_32.SEARCH);
                    current = searchRef.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
                cResult[24] = searchRef;
                class O {
                  constructor() {
                    tmp = closure_7(!closure_8, closure_8);
                    return;
                  }
                }
                cResult[25] = setTab;
                class D {
                  constructor(arg0) {
                    obj = closure_5;
                    if (!closure_5.get()) {
                      num = 0.75;
                      if (tab > 0.75) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj2 = closure_0(closure_2[27]);
                        tmp3 = closure_7;
                        flag = true;
                        tmp4 = obj2.runOnJS(closure_7)(true);
                      }
                      return;
                    }
                    value = obj.get();
                    if (value) {
                      num2 = 0;
                      value = tab <= 0;
                    }
                    if (value) {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj3 = closure_0(closure_2[27]);
                      tmp8 = closure_7;
                      flag2 = false;
                      tmp9 = obj3.runOnJS(closure_7)(false);
                    }
                    return;
                  }
                }
                cResult[26] = W;
                tmp41 = W;
              }
            }
          }
          if (tab === constants3.SEARCH) {
            const obj5 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: null, autoComplete: "off", spellCheck: false, autoFocus: false };
            class L {
              constructor() {
                tmp = tab === closure_32.SEARCH;
                if (tmp) {
                  tmp2 = sharedState;
                  num = 1;
                  tmp = 1 === sharedState.get();
                }
                if (tmp) {
                  tmp3 = closure_7;
                  flag = true;
                  tmp4 = closure_7(true);
                }
                return;
              }
            }
            let tmp30 = closure_27(tmp(sharedState[29]).SearchField, obj5);
          } else if (tab === constants3.MEMBERS) {
            class L {
              constructor() {
                tmp = tab === closure_32.SEARCH;
                if (tmp) {
                  tmp2 = sharedState;
                  num = 1;
                  tmp = 1 === sharedState.get();
                }
                if (tmp) {
                  tmp3 = closure_7;
                  flag = true;
                  tmp4 = closure_7(true);
                }
                return;
              }
            }
            { text: null }.text = obj12.string(tmp(sharedState[30]).t["9Oq93m"]);
            class W {
              constructor() {
                tmp = setTab(closure_32.SEARCH);
                current = searchRef.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
            const obj6 = { text: null };
          } else if (tab === constants3.NOTIFICATIONS) {
            class L {
              constructor() {
                tmp = tab === closure_32.SEARCH;
                if (tmp) {
                  tmp2 = sharedState;
                  num = 1;
                  tmp = 1 === sharedState.get();
                }
                if (tmp) {
                  tmp3 = closure_7;
                  flag = true;
                  tmp4 = closure_7(true);
                }
                return;
              }
            }
            { text: null }.text = obj10.string(tmp(sharedState[30]).t.HcoRu0);
            class W {
              constructor() {
                tmp = setTab(closure_32.SEARCH);
                current = searchRef.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
            const obj7 = { text: null };
          } else {
            tmp30 = closure_27(closure_31, { text: "Dev Tools" });
          }
          cResult[18] = searchRef;
          cResult[19] = tab;
          cResult[20] = updateQuery;
          cResult[21] = tmp30;
          const tmpResult6 = tmp(sharedState[27]);
        }
      }
      class L {
        constructor() {
          tmp = tab === closure_32.SEARCH;
          if (tmp) {
            tmp2 = sharedState;
            num = 1;
            tmp = 1 === sharedState.get();
          }
          if (tmp) {
            tmp3 = closure_7;
            flag = true;
            tmp4 = closure_7(true);
          }
          return;
        }
      }
      const items2 = [tab, , tmp12];
      class O {
        constructor() {
          tmp = closure_7(!closure_8, closure_8);
          return;
        }
      }
      cResult[15] = tab;
      cResult[16] = items2;
      cResult[17] = L;
      tmp21 = L;
      tmp20 = items2;
    }
    class O {
      constructor() {
        tmp = closure_7(!closure_8, closure_8);
        return;
      }
    }
    const items3 = [, tmp12];
    cResult[9] = stateFromStores1;
    cResult[10] = tmp12;
    cResult[11] = O;
    cResult[12] = items3;
    tmp18 = items3;
    tmp17 = O;
    const tmpResult5 = tmp(sharedState[26]);
  }
  const fn3 = function v(arg0, arg1) {
    if (arg0) {
      if (ref2.current === constants.SEARCH) {
        const bestActiveInput = ChatInputUtils.getBestActiveInput();
        let isFocusedResult;
        if (bestActiveInput != null) {
          isFocusedResult = bestActiveInput.isFocused();
        }
        ref.current = true === isFocusedResult;
        if (null != searchRef.current) {
          const result = sharedValue.set(true);
          const current3 = tmp19.current;
          if (current3 != null) {
            current3.focus();
          }
        }
      }
    }
    if (!arg0) {
      let current = ref.current;
      if (current) {
        current = !arg1;
      }
      if (current) {
        const bestActiveInput1 = ChatInputUtils.getBestActiveInput();
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
  const tmpResult4 = tab(sharedState[27]);
}) : (function LaunchPadHeader(tab) {
  tab = tab.tab;
  ({ setTab: importDefault, sharedState } = tab);
  const searchRef = tab.searchRef;
  noop = undefined;
  let tmp = closure_29();
  items = [DeveloperExperimentStore];
  const stateFromStores = tab(sharedState[26]).useStateFromStores(items, () => isDeveloper.isDeveloper);
  noop = noop.useRef(false);
  let obj = tab(sharedState[26]);
  const sharedValue = tab(sharedState[27]).useSharedValue(false);
  const ref2 = noop.useRef(tab);
  const effect = noop.useEffect(() => {
    closure_6.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  const setFocused = noop.useCallback((arg0, arg1) => {
    if (arg0) {
      if (ref2.current === constants.SEARCH) {
        const bestActiveInput = ChatInputUtils.getBestActiveInput();
        let isFocusedResult;
        if (bestActiveInput != null) {
          isFocusedResult = bestActiveInput.isFocused();
        }
        ref.current = true === isFocusedResult;
        if (null != searchRef.current) {
          const result = sharedValue.set(true);
          const current3 = tmp19.current;
          if (current3 != null) {
            current3.focus();
          }
        }
      }
    }
    if (!arg0) {
      let current = ref.current;
      if (current) {
        current = !arg1;
      }
      if (current) {
        const bestActiveInput1 = ChatInputUtils.getBestActiveInput();
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
  let obj2 = tab(sharedState[27]);
  const items2 = [ref2];
  const stateFromStores1 = tab(sharedState[26]).useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, setFocused];
  const effect1 = noop.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, setFocused];
  const effect2 = noop.useEffect(() => {
    let tmp = tab === constants.SEARCH;
    if (tmp) {
      tmp = 1 === sharedState.get();
    }
    if (tmp) {
      callback(true);
    }
  }, items4);
  let obj3 = tab(sharedState[26]);
  const fn = function v() {
    return sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 15536041461010;
  fn.__initData = __initData3;
  const fn2 = function y(arg0) {
    if (!sharedValue.get()) {
      if (arg0 > 0.75) {
        ReanimatedRexport.runOnJS(callback)(true);
      }
    }
    value = sharedValue.get();
    if (value) {
      value = arg0 <= 0;
    }
    if (value) {
      ReanimatedRexport.runOnJS(callback)(false);
    }
  };
  const obj4 = tab(sharedState[27]);
  fn2.__closure = { keyboardShown: sharedValue, runOnJS: tab(sharedState[27]).runOnJS, setFocused };
  fn2.__workletHash = 7976600027348;
  fn2.__initData = __initData4;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj6 = { style: tmp.header, children: null };
  if (tab === constants3.SEARCH) {
    const obj7 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: tab.updateQuery, autoComplete: "off", spellCheck: false, autoFocus: false };
    let tmp18 = closure_27(tmp2(sharedState[29]).SearchField, obj7);
    let tmp17 = closure_27;
  } else if (tab === constants3.MEMBERS) {
    const obj8 = { text: null };
    const intl2 = tmp2(sharedState[30]).intl;
    obj8.text = intl2.string(tmp2(sharedState[30]).t["9Oq93m"]);
    tmp18 = closure_27(closure_31, obj8);
    tmp17 = closure_27;
  } else if (tab === constants3.NOTIFICATIONS) {
    const obj9 = { text: null };
    const intl = tmp2(sharedState[30]).intl;
    obj9.text = intl.string(tmp2(sharedState[30]).t.HcoRu0);
    tmp18 = closure_27(closure_31, obj9);
    tmp17 = closure_27;
  } else {
    tmp17 = closure_27;
    tmp18 = closure_27(closure_31, { text: "Dev Tools" });
  }
  const items5 = [tmp18, ];
  const obj10 = { style: tmp.tabs, children: null };
  const obj11 = {
    icon(color) {
      return closure_1_27(tab(sharedState[31]).FlashIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null
  };
  const intl3 = tmp2(sharedState[30]).intl;
  obj11.accessibilityLabel = intl3.string(tab(sharedState[30]).t.JqV7IC);
  obj11.onPress = function onPress() {
    importDefault(constants.SEARCH);
    const current = searchRef.current;
    if (current != null) {
      current.focus();
    }
  };
  obj11.selected = tab === constants3.SEARCH;
  const items6 = [tmp17(closure_30, obj11), , ];
  const obj12 = {
    icon(color) {
      return closure_1_27(tab(sharedState[32]).BellIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null
  };
  const intl4 = tmp2(sharedState[30]).intl;
  obj12.accessibilityLabel = intl4.string(tab(sharedState[30]).t.HcoRu0);
  obj12.onPress = function onPress() {
    importDefault(constants.NOTIFICATIONS);
    const current = searchRef.current;
    if (current != null) {
      current.blur();
    }
  };
  obj12.selected = tab === constants3.NOTIFICATIONS;
  items6[1] = tmp17(closure_30, obj12);
  let tmp17Result = null;
  if (stateFromStores) {
    const obj13 = {
      icon(color) {
          return closure_1_27(tab(sharedState[33]).StaffBadgeIcon, { size: "sm", color });
        },
      accessibilityLabel: "Dev Tools",
      selected: tab === constants3.DEV_TOOLS,
      onPress() {
          if (obj.isAndroid()) {
            DevToolsNavigator.navigateToDevTools();
            hideLaunchPadDefault();
            const tmpResult = DevToolsNavigator;
          } else {
            closure_1_1(constants.DEV_TOOLS);
          }
          const current = searchRef.current;
          if (current != null) {
            current.blur();
          }
          obj = PlatformUtils;
        }
    };
    tmp17Result = tmp17(closure_30, obj13);
  }
  items6[2] = tmp17Result;
  obj10.children = items6;
  items5[1] = closure_28(sharedValue, obj10);
  obj6.children = items5;
  return closure_28(sharedValue, obj6);
}));
const results = [];
let items = [fn(8699).AutocompleterResultTypes.GUILD, fn(8699).AutocompleterResultTypes.TEXT_CHANNEL, fn(8699).AutocompleterResultTypes.GROUP_DM, fn(8699).AutocompleterResultTypes.VOICE_CHANNEL, fn(8699).AutocompleterResultTypes.USER];
ReactCompilerGating = fn(558);
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWrapperStyles() {
  const cResult = c.c(5);
  const tmp2 = closure_29();
  const rect = useSafeAreaInsetsDefault();
  const diff = useWindowDimensionsDefault().height - rect.top - rect.bottom - 16;
  if (cResult[0] !== diff) {
    const obj2 = { maxHeight: diff };
    cResult[0] = diff;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp2.wrapper) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  items = [tmp2.wrapper, tmp4];
  cResult[2] = tmp2.wrapper;
  cResult[3] = tmp4;
  cResult[4] = items;
  tmp5 = items;
}) : (function useWrapperStyles() {
  const tmp = closure_29();
  const wrapper = tmp;
  const height = useWindowDimensionsDefault().height;
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const bottom = rect.bottom;
  items = [height, top, bottom, tmp];
  return noop.useMemo(() => {
    items = [wrapper.wrapper, { maxHeight: height - top - bottom - 16 }];
    return items;
  }, items);
});
ReactCompilerGating = fn(558);
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutocompleterResults(arg0) {
  _require = arg0;
  const cResult = require("c").c(17);
  const obj = require("c");
  const tmp2 = first1;
  [tmp4, importDefault] = first1(noop.useState(""), 2);
  const tmp3 = first1(noop.useState(""), 2);
  [tmp6, dependencyMap] = first1(noop.useState(closure_40), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return new AutocompleterDefault((arg0, str) => {
        str = str.trim();
        if ("" === str.trim()) {
          closure_1_2(results);
        } else {
          closure_1_2(arg0);
        }
      }, items, undefined, { frecencyBoosters: true });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  first1 = tmp2(noop.useState(first), 1)[0];
  if (cResult[1] !== first1) {
    const fn2 = function y() {
      return () => first1.clean();
    };
    items = [first1];
    cResult[1] = first1;
    cResult[2] = fn2;
    cResult[3] = items;
    let tmp10 = items;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  if (cResult[4] !== first1) {
    class R {
      constructor() {
        obj = closure_1(closure_2[44]);
        return obj.addRouteChangeListener(() => {
          items = ["user:" + id.getId()];
          const set = new Set(items);
          const selectedGuildFromRoute = closure_0(dependencyMap[38]).getSelectedGuildFromRoute();
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
    cResult[5] = R;
    cResult[6] = items1;
    let tmp13 = items1;
  } else {
    class R {
      constructor() {
        obj = closure_1(closure_2[44]);
        return obj.addRouteChangeListener(() => {
          items = ["user:" + id.getId()];
          const set = new Set(items);
          const selectedGuildFromRoute = closure_0(dependencyMap[38]).getSelectedGuildFromRoute();
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
  const effect1 = noop.useEffect(R, tmp13);
  if (cResult[7] === first1) {
    class R {
      constructor() {
        obj = closure_1(closure_2[44]);
        return obj.addRouteChangeListener(() => {
          items = ["user:" + id.getId()];
          const set = new Set(items);
          const selectedGuildFromRoute = closure_0(dependencyMap[38]).getSelectedGuildFromRoute();
          if (null != selectedGuildFromRoute) {
            const _HermesInternal = HermesInternal;
            set.add("guild:" + selectedGuildFromRoute);
          }
          options.setOptions({ blacklist: set }, true);
        });
      }
    }
    const effect2 = noop.useEffect(T, items2);
    if (cResult[11] !== first1) {
      class A {
        constructor(arg0) {
          tmp = closure_1(arg0);
          searchResult = closure_3.search(arg0);
          return;
        }
      }
      cResult[11] = first1;
      cResult[12] = A;
    } else {
      class A {
        constructor(arg0) {
          tmp = closure_1(arg0);
          searchResult = closure_3.search(arg0);
          return;
        }
      }
    }
    if (cResult[13] === tmp4) {
      class A {
        constructor(arg0) {
          tmp = closure_1(arg0);
          searchResult = closure_3.search(arg0);
          return;
        }
      }
    }
    const obj3 = { queryResults: tmp6, query: tmp4, updateQuery: A };
    cResult[13] = tmp4;
    cResult[14] = tmp6;
    cResult[15] = A;
    cResult[16] = obj3;
  }
  class T {
    constructor() {
      obj = closure_3;
      if (closure_0) {
        resumeResult = obj.resume();
      } else {
        pauseResult = obj.pause();
      }
      return;
    }
  }
  items2 = [arg0, first1];
  cResult[7] = first1;
  cResult[8] = arg0;
  cResult[9] = T;
  cResult[10] = items2;
  const tmp5 = first1(noop.useState(closure_40), 2);
}) : (function useAutocompleterResults(arg0) {
  closure_0 = arg0;
  const tmp = first(noop.useState(""), 2);
  closure_1 = tmp[1];
  [tmp3, dependencyMap] = first(noop.useState(closure_40), 2);
  first = first(noop.useState(() => new AutocompleterDefault((arg0, str) => {
    str = str.trim();
    if ("" === str.trim()) {
      closure_1_2(results);
    } else {
      closure_1_2(arg0);
    }
  }, items, undefined, { frecencyBoosters: true })), 1)[0];
  items = [first];
  const effect = noop.useEffect(() => () => first.clean(), items);
  const items1 = [first];
  const effect1 = noop.useEffect(() => RouteManagerDefault.addRouteChangeListener(() => {
    items = ["user:" + id.getId()];
    const set = new Set(items);
    const selectedGuildFromRoute = closure_0(dependencyMap[38]).getSelectedGuildFromRoute();
    if (null != selectedGuildFromRoute) {
      const _HermesInternal = HermesInternal;
      set.add("guild:" + selectedGuildFromRoute);
    }
    options.setOptions({ blacklist: set }, true);
  }), items1);
  const items2 = [arg0, first];
  const effect2 = noop.useEffect(() => {
    if (closure_0) {
      first.resume();
    } else {
      first.pause();
    }
  }, items2);
  const obj = { queryResults: tmp3, query: tmp[0], updateQuery: null };
  const items3 = [first];
  obj.updateQuery = noop.useCallback((arg0) => {
    closure_1(arg0);
    first.search(arg0);
  }, items3);
  return obj;
});
const __initData5 = { code: "function LaunchPadTsx5(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
const __initData6 = { code: "function LaunchPadTsx6(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden){return;}if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else{if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}}" };
const __initData7 = { code: "function LaunchPadTsx7(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
const __initData8 = { code: "function LaunchPadTsx8(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}" };
ReactCompilerGating = fn(558);
let closure_48 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDeferredQueryClear(arg0, arg1, sharedState) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = sharedState;
  const cResult = require("c").c(2);
  clearQuery.useRef(-1);
  clearQuery = function clearQuery() {
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
  const effect = clearQuery.useEffect(tmp4, tmp5);
  let obj = require("c");
  const fn2 = function c() {
    return 0 === sharedState.get();
  };
  fn2.__closure = { sharedState };
  fn2.__workletHash = 14085727500633;
  fn2.__initData = __initData5;
  const fn3 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (tmp) {
          ReanimatedRexport.runOnJS(clearQuery)();
        }
      }
      let tmp2 = arg0;
      if (!arg0) {
        tmp2 = arg0 === arg1;
      }
      if (!tmp2) {
        ReanimatedRexport.runOnJS(cancelTimeout)();
      }
    }
  };
  const tmpResult = require("ReanimatedRexport");
  fn3.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, clearQuery, cancelTimeout };
  fn3.__workletHash = 1856708820062;
  fn3.__initData = __initData6;
  const animatedReaction = tmpResult.useAnimatedReaction(fn2, fn3);
}) : (function useDeferredQueryClear(arg0, arg1, sharedState) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = sharedState;
  clearQuery.useRef(-1);
  items = [arg0, arg1];
  clearQuery = clearQuery.useCallback(() => {
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
  const fn = function l() {
    return 0 === sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 422837622683;
  fn.__initData = __initData7;
  const fn2 = function i(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (tmp) {
          ReanimatedRexport.runOnJS(callback)();
        }
      }
      let tmp2 = arg0;
      if (!arg0) {
        tmp2 = arg0 === arg1;
      }
      if (!tmp2) {
        ReanimatedRexport.runOnJS(callback1)();
      }
    }
  };
  let obj = require("ReanimatedRexport");
  fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, clearQuery, cancelTimeout: callback1 };
  fn2.__workletHash = 997415543952;
  fn2.__initData = __initData8;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LaunchPad(arg0) {
  const cResult = require("c").c(44);
  ({ visible, sharedState } = arg0);
  const tmp4 = closure_29();
  let obj = require("c");
  [tmp7, require] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return _require((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const ref = noop.useRef(null);
  const tmp10 = closure_43(visible);
  ({ updateQuery, queryResults } = tmp10);
  if (cResult[1] !== tmp10.query) {
    const trimmed = str.trim();
    cResult[1] = str;
    cResult[2] = trimmed;
    let arr = trimmed;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] === arr.length > 0) {
    if (cResult[4] === visible) {
      let tmp13 = cResult[5];
    }
    ({ initialResults, unreadPrivateChannelIds, unreadGuilds, guildHistory, selectedUnreadGuild, setSelectedUnreadGuild } = useInitialResults(tmp13));
    const tmp5Result = tmp5(noop.useState(false), 2);
    first1 = tmp5Result[0];
    _slicedToArray = tmp18;
    const tmp5Result2 = tmp5(noop.useState(constants3.SEARCH), 2);
    const first2 = tmp5Result2[0];
    const tmp23 = closure_42();
    if (cResult[6] === str.length) {
      if (cResult[7] === first1) {
        let tmp24 = cResult[8];
      }
      if (cResult[9] === str) {
        if (cResult[10] === first1) {
          let tmp25 = cResult[11];
        }
        const effect = noop.useEffect(tmp24, tmp25);
        closure_48(updateQuery, ref, sharedState);
        if (cResult[12] !== str) {
          const trimmed1 = str.trim();
          cResult[12] = str;
          cResult[13] = trimmed1;
        }
        if (cResult[14] === sharedState) {
          if (cResult[15] === first2) {
            if (cResult[16] === updateQuery) {
              let tmp31 = cResult[17];
            }
            if (cResult[18] === guildHistory) {
              if (cResult[19] === str) {
                if (cResult[20] === selectedUnreadGuild) {
                  if (cResult[21] === setSelectedUnreadGuild) {
                    if (cResult[22] === first2) {
                      if (cResult[23] === unreadGuilds) {
                        if (cResult[24] === unreadPrivateChannelIds) {
                          if (cResult[25] === visible) {
                            let tmp35 = cResult[26];
                          }
                          if (cResult[27] === tmp7) {
                            let channelHistory;
                            if (initialResults != null) {
                              channelHistory = initialResults.channelHistory;
                            }
                            if (cResult[28] === channelHistory) {
                              let unreads;
                              if (initialResults != null) {
                                unreads = initialResults.unreads;
                              }
                              if (cResult[29] === unreads) {
                                if (cResult[30] === tmp30) {
                                  if (cResult[31] === str) {
                                    if (cResult[32] === queryResults) {
                                      if (cResult[33] === selectedUnreadGuild) {
                                        if (cResult[34] === first2) {
                                          let tmp41 = cResult[35];
                                        }
                                        if (cResult[36] === tmp4.launchPadContent) {
                                          if (cResult[37] === tmp41) {
                                            let tmp56 = cResult[38];
                                          }
                                          if (cResult[39] === tmp56) {
                                            if (cResult[40] === tmp31) {
                                              if (cResult[41] === tmp35) {
                                                if (cResult[42] === tmp23) {
                                                  let tmp60 = cResult[43];
                                                }
                                                return tmp60;
                                              }
                                            }
                                          }
                                          const obj3 = { style: tmp23, children: null };
                                          items = [tmp31, tmp35, tmp56];
                                          obj3.children = items;
                                          cResult[39] = tmp56;
                                          cResult[40] = tmp31;
                                          cResult[41] = tmp35;
                                          cResult[42] = tmp23;
                                          class H {
                                            constructor() {
                                              arr = query;
                                              if (query.length > 0) {
                                                tmp = closure_2;
                                                if (!closure_2) {
                                                  tmp2 = closure_1;
                                                  tmp3 = closure_2;
                                                  obj = closure_1(closure_2[45]);
                                                  tmp4 = AnalyticEvents;
                                                  trackResult = obj.track(AnalyticEvents.LAUNCHPAD_SEARCHED);
                                                  tmp6 = closure_3;
                                                  flag = true;
                                                  tmp7 = closure_3(true);
                                                }
                                                return;
                                              }
                                              if (0 === arr.length) {
                                                tmp8 = closure_3;
                                                flag2 = false;
                                                tmp9 = closure_3(false);
                                              }
                                              return;
                                            }
                                          }
                                          tmp60 = closure_28(View, obj3);
                                          const tmp63 = closure_28(View, obj3);
                                        }
                                        const obj4 = { style: tmp4.launchPadContent, children: tmp41 };
                                        const tmp59 = closure_27(View, obj4);
                                        cResult[36] = tmp4.launchPadContent;
                                        cResult[37] = tmp41;
                                        cResult[38] = tmp59;
                                        tmp56 = tmp59;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (first2 === constants3.SEARCH) {
                            if (tmp30) {
                              let tmp53 = queryResults;
                              if (queryResults == null) {
                                tmp53 = closure_40;
                              }
                              const obj5 = { results: tmp53, query: str };
                              let tmp49Result = closure_27(require("LaunchPadSearchResults").SearchResults, obj5);
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
                            cResult[30] = tmp30;
                            cResult[31] = str;
                            cResult[32] = queryResults;
                            cResult[33] = selectedUnreadGuild;
                            cResult[34] = first2;
                            class H {
                              constructor() {
                                arr = query;
                                if (query.length > 0) {
                                  tmp = closure_2;
                                  if (!closure_2) {
                                    tmp2 = closure_1;
                                    tmp3 = closure_2;
                                    obj = closure_1(closure_2[45]);
                                    tmp4 = AnalyticEvents;
                                    trackResult = obj.track(AnalyticEvents.LAUNCHPAD_SEARCHED);
                                    tmp6 = closure_3;
                                    flag = true;
                                    tmp7 = closure_3(true);
                                  }
                                  return;
                                }
                                if (0 === arr.length) {
                                  tmp8 = closure_3;
                                  flag2 = false;
                                  tmp9 = closure_3(false);
                                }
                                return;
                              }
                            }
                            cResult[35] = tmp49Result;
                            tmp41 = tmp49Result;
                          }
                          if (first2 === constants3.SEARCH) {
                            const obj6 = { selectedGuildId: selectedUnreadGuild, unreads: null, history: null, expandedHistory: null, toggleExpandedHistory: null };
                            let unreads2;
                            if (initialResults != null) {
                              unreads2 = initialResults.unreads;
                            }
                            if (unreads2 == null) {
                              unreads2 = closure_40;
                            }
                            obj6.unreads = unreads2;
                            let channelHistory2;
                            if (initialResults != null) {
                              channelHistory2 = initialResults.channelHistory;
                            }
                            if (channelHistory2 == null) {
                              channelHistory2 = closure_40;
                            }
                            obj6.history = channelHistory2;
                            obj6.expandedHistory = tmp7;
                            obj6.toggleExpandedHistory = first;
                            tmp49Result = closure_27(require("LaunchPadSearchResults").InitialResults, obj6);
                          } else if (first2 === constants3.DEV_TOOLS) {
                            tmp49Result = closure_27(str(tmp2[48]), {});
                          } else if (first2 === constants3.MEMBERS) {
                            tmp49Result = closure_27(str(tmp2[49]), {});
                          } else {
                            tmp49Result = closure_27(str(tmp2[50]), {});
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let tmp36 = 0 === str.trim().length && first2 === constants3.SEARCH;
            if (tmp36) {
              const obj7 = { selectedGuildId: selectedUnreadGuild, setSelectedGuild: setSelectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, visible };
              tmp36 = closure_27(str(tmp2[46]), obj7);
            }
            cResult[18] = guildHistory;
            cResult[19] = str;
            cResult[20] = selectedUnreadGuild;
            cResult[21] = setSelectedUnreadGuild;
            cResult[22] = first2;
            cResult[23] = unreadGuilds;
            cResult[24] = unreadPrivateChannelIds;
            cResult[25] = visible;
            class H {
              constructor() {
                arr = query;
                if (query.length > 0) {
                  tmp = closure_2;
                  if (!closure_2) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[45]);
                    tmp4 = AnalyticEvents;
                    trackResult = obj.track(AnalyticEvents.LAUNCHPAD_SEARCHED);
                    tmp6 = closure_3;
                    flag = true;
                    tmp7 = closure_3(true);
                  }
                  return;
                }
                if (0 === arr.length) {
                  tmp8 = closure_3;
                  flag2 = false;
                  tmp9 = closure_3(false);
                }
                return;
              }
            }
            tmp35 = tmp36;
          }
        }
        const obj8 = { tab: first2, setTab: tmp5Result2[1], updateQuery, searchRef: ref, sharedState };
        const tmp34 = closure_27(closure_37, obj8);
        cResult[14] = sharedState;
        cResult[15] = first2;
        class H {
          constructor() {
            arr = query;
            if (query.length > 0) {
              tmp = closure_2;
              if (!closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[45]);
                tmp4 = AnalyticEvents;
                trackResult = obj.track(AnalyticEvents.LAUNCHPAD_SEARCHED);
                tmp6 = closure_3;
                flag = true;
                tmp7 = closure_3(true);
              }
              return;
            }
            if (0 === arr.length) {
              tmp8 = closure_3;
              flag2 = false;
              tmp9 = closure_3(false);
            }
            return;
          }
        }
        cResult[17] = tmp34;
        tmp31 = tmp34;
      }
      const items1 = [str, tmp18, first1];
      cResult[9] = str;
      cResult[10] = first1;
      cResult[11] = items1;
      tmp25 = items1;
    }
    class H {
      constructor() {
        arr = query;
        if (query.length > 0) {
          tmp = closure_2;
          if (!closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[45]);
            tmp4 = AnalyticEvents;
            trackResult = obj.track(AnalyticEvents.LAUNCHPAD_SEARCHED);
            tmp6 = closure_3;
            flag = true;
            tmp7 = closure_3(true);
          }
          return;
        }
        if (0 === arr.length) {
          tmp8 = closure_3;
          flag2 = false;
          tmp9 = closure_3(false);
        }
        return;
      }
    }
    cResult[6] = str.length;
    cResult[7] = first1;
    cResult[8] = H;
    tmp24 = H;
    const tmp15 = useInitialResults(tmp13);
  }
  const obj9 = { disabled: arr.length > 0, visible };
  cResult[3] = arr.length > 0;
  cResult[4] = visible;
  cResult[5] = obj9;
  tmp13 = obj9;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
}) : (function LaunchPad(arg0) {
  ({ visible, sharedState } = arg0);
  _require = undefined;
  _slicedToArray = undefined;
  const tmp = closure_29();
  [tmp3, c0] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const ref = noop.useRef(null);
  const tmp6 = closure_43(visible);
  const str = tmp6.query;
  ({ updateQuery, queryResults } = tmp6);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  let obj = { disabled: str.trim().length > 0, visible };
  ({ initialResults, selectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, setSelectedUnreadGuild } = useInitialResults({ disabled: str.trim().length > 0, visible }));
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const first = tmp8[0];
  _slicedToArray = tmp10;
  const tmp12 = _slicedToArray(noop.useState(constants3.SEARCH), 2);
  const first1 = tmp12[0];
  items = [str, tmp8[1], first];
  const tmp7 = useInitialResults({ disabled: str.trim().length > 0, visible });
  const effect = noop.useEffect(() => {
    if (str.length > 0) {
      if (!first) {
        AnalyticsUtilsDefault.track(constants.LAUNCHPAD_SEARCHED);
        closure_3(true);
      }
    }
    if (0 === str.length) {
      closure_3(false);
    }
  }, items);
  closure_48(updateQuery, ref, sharedState);
  const obj2 = { style: closure_42(), children: null };
  const tmp14 = closure_42();
  const items1 = [closure_27(closure_37, { tab: first1, setTab: tmp12[1], updateQuery, searchRef: ref, sharedState }), , ];
  let tmp20Result = 0 === str.trim().length && first1 === constants3.SEARCH;
  if (tmp20Result) {
    const obj3 = { selectedGuildId: selectedUnreadGuild, setSelectedGuild: setSelectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, visible };
    tmp20Result = closure_27(str(first[46]), obj3);
  }
  items1[1] = tmp20Result;
  const obj4 = { style: tmp.launchPadContent, children: null };
  if (first1 === constants3.SEARCH) {
    if (tmp17) {
      const obj5 = { results, query: str };
      let tmp20Result2 = closure_27(require("LaunchPadSearchResults").SearchResults, obj5);
    }
    obj4.children = tmp20Result2;
    items1[2] = closure_27(View, obj4);
    obj2.children = items1;
    return closure_28(View, obj2);
  }
  if (first1 === constants3.SEARCH) {
    const obj6 = { selectedGuildId: selectedUnreadGuild, unreads: null, history: null, expandedHistory: null, toggleExpandedHistory: null };
    let unreads;
    if (initialResults != null) {
      unreads = initialResults.unreads;
    }
    if (unreads == null) {
      unreads = results;
    }
    obj6.unreads = unreads;
    let channelHistory;
    if (initialResults != null) {
      channelHistory = initialResults.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = results;
    }
    obj6.history = channelHistory;
    obj6.expandedHistory = tmp3;
    obj6.toggleExpandedHistory = callback;
    tmp20Result2 = closure_27(require("LaunchPadSearchResults").InitialResults, obj6);
  } else if (first1 === constants3.DEV_TOOLS) {
    tmp20Result2 = closure_27(str(first[48]), {});
  } else if (first1 === constants3.MEMBERS) {
    tmp20Result2 = closure_27(str(first[49]), {});
  } else {
    tmp20Result2 = closure_27(str(first[50]), {});
  }
  tmp17 = str.trim().length > 0;
}));