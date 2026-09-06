// discord_app/modules/launchpad/native/LaunchPad.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AutocompleterDefault from "../../autocompleter/Autocompleter.tsx";
import createAutocompleterResultForChannelIdDefault from "../../autocompleter/createAutocompleterResultForChannelId.tsx";
import hideLaunchPadDefault from "hideLaunchPad.tsx";
import RouteManagerDefault from "../../routing/RouteManager.tsx";
import DevToolsNavigator from "../../devtools/native/components/DevToolsNavigator.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import ChannelListStore from "../../guild_sidebar/ChannelListStore.tsx";
import NavigationHistoryStore from "../../main_tabs_v2/native/NavigationHistoryStore.tsx";
import ActiveJoinedThreadsStore from "../../threads/ActiveJoinedThreadsStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DeveloperExperimentStore from "../../../stores/DeveloperExperimentStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PrivateChannelReadStateStore from "../../../stores/PrivateChannelReadStateStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
function TabButton(selected) {
  selected = selected.selected;
  ({ onPress, icon, accessibilityLabel, style } = selected);
  const tmp = closure_29();
  const obj = {
    onPress,
    style: null,
    accessibilityLabel: null,
    accessibilityRole: "tab",
    accessibilityState: null,
    children: null,
  };
  items = [tmp.tab, style];
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
  return __initData5(Pressables.PressableHighlight, obj);
}
function TabHeader(children) {
  const tmp = closure_29();
  return __initData5(Text_Text.Text, {
    style: closure_29().subheader,
    variant: "heading-md/extrabold",
    maxFontSizeMultiplier: 1.75,
    accessibilityRole: "header",
    children: children.text,
  });
}
function createAndAppendChannel(item10022, set, items) {
  if (!set.has(item10022)) {
    const tmp3 = createAutocompleterResultForChannelIdDefault(item10022);
    if (null != tmp3) {
      items.push(tmp3);
      set.add(item10022);
    }
  }
}
const View = fn(17).View;
let NavigationHistoryStore = fn(7328);
({ CHANNEL_PREFIX: closure_8, getIdFromHistoryItem: closure_9, GUILD_PREFIX: c10 } = NavigationHistoryStore);
const ChannelRecord = fn(1961);
({ isGuildSelectableChannelType: map1, isGuildVocalChannelType: closure_14 } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticEvents: closure_25, GuildFeatures: closure_26 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_27, jsxs: closure_28 } = jsxProd);
const md = nativeDefault.radii.md;
fn(4560);
let obj = {
  wrapper: null,
  launchPadContent: null,
  header: null,
  subheader: null,
  tabs: null,
  tab: null,
  tabSelected: null,
};
obj = {
  flexGrow: 0,
  marginHorizontal: 16,
  marginBottom: 16,
  flexShrink: 1,
  borderRadius: 24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  overflow: "hidden",
};
obj.wrapper = obj;
obj.launchPadContent = { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 };
obj.header = { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 };
obj.subheader = {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  paddingStart: 8,
};
const createStyles = {
  marginStart: 8,
  flexDirection: "row",
  flexShrink: 0,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderRadius: md,
  padding: 5,
  alignItems: "stretch",
  justifyContent: "center",
  gap: 5,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
};
obj.tabs = createStyles;
let size = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj.tab = size;
obj.tabSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_29 = createStyles.createStyles(obj);
const constants3 = {
  SEARCH: 0,
  [0]: "SEARCH",
  MEMBERS: 1,
  [1]: "MEMBERS",
  NOTIFICATIONS: 2,
  [2]: "NOTIFICATIONS",
  DEV_TOOLS: 3,
  [3]: "DEV_TOOLS",
};
const __initData = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
const __initData2 = {
  code: "function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}",
};
let closure_35 = noop.memo((tab) => {
  tab = tab.tab;
  ({ setTab: importDefault, sharedState } = tab);
  const searchRef = tab.searchRef;
  noop = undefined;
  let tmp = closure_29();
  let obj = tab(sharedState[24]);
  items = [DeveloperExperimentStore];
  const stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
  noop = noop.useRef(false);
  let obj1 = tab(sharedState[25]);
  const sharedValue = obj1.useSharedValue(false);
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
  let obj2 = tab(sharedState[24]);
  const items2 = [ref2];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ref2.isOpen());
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
  let obj3 = tab(sharedState[25]);
  class T {
    constructor() {
      return sharedState.get();
    }
  }
  T.__closure = { sharedState };
  T.__workletHash = 17067823098320;
  T.__initData = __initData;
  const fn = function p(arg0) {
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
  obj = { keyboardShown: sharedValue, runOnJS: tab(sharedState[25]).runOnJS, setFocused };
  fn.__closure = obj;
  fn.__workletHash = 3784684686013;
  fn.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(T, fn);
  obj = { style: tmp.header, children: null };
  if (tab === constants3.SEARCH) {
    obj1 = {
      size: "md",
      returnKeyType: "done",
      ref: searchRef,
      onChange: tab.updateQuery,
      autoComplete: "off",
      spellCheck: false,
      autoFocus: false,
    };
    let tmp18 = closure_27(tmp2(tmp3[27]).SearchField, obj1);
    let tmp17 = closure_27;
  } else if (tab === tmp14.MEMBERS) {
    obj2 = { text: null };
    const intl2 = tmp2(tmp3[28]).intl;
    obj2.text = intl2.string(tmp2(tmp3[28]).t["9Oq93m"]);
    tmp18 = closure_27(TabHeader, obj2);
    tmp17 = closure_27;
  } else if (tab === tmp14.NOTIFICATIONS) {
    obj3 = { text: null };
    const intl = tmp2(tmp3[28]).intl;
    obj3.text = intl.string(tmp2(tmp3[28]).t.HcoRu0);
    tmp18 = closure_27(TabHeader, obj3);
    tmp17 = closure_27;
  } else {
    tmp17 = closure_27;
    tmp18 = closure_27(TabHeader, { text: "Dev Tools" });
  }
  const items5 = [tmp18];
  const obj4 = { style: tmp.tabs, children: null };
  const obj5 = {
    icon(color) {
      return closure_1_27(tab(sharedState[29]).FlashIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null,
  };
  const intl3 = tmp2(tmp3[28]).intl;
  obj5.accessibilityLabel = intl3.string(tab(sharedState[28]).t.JqV7IC);
  obj5.onPress = function onPress() {
    importDefault(constants.SEARCH);
    const current = searchRef.current;
    if (current != null) {
      current.focus();
    }
  };
  obj5.selected = tab === constants3.SEARCH;
  const items6 = [tmp17(TabButton, obj5), ,];
  const obj6 = {
    icon(color) {
      return closure_1_27(tab(sharedState[30]).BellIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null,
  };
  const intl4 = tmp2(tmp3[28]).intl;
  obj6.accessibilityLabel = intl4.string(tab(sharedState[28]).t.HcoRu0);
  obj6.onPress = function onPress() {
    importDefault(constants.NOTIFICATIONS);
    const current = searchRef.current;
    if (current != null) {
      current.blur();
    }
  };
  obj6.selected = tab === constants3.NOTIFICATIONS;
  items6[1] = tmp17(TabButton, obj6);
  let tmp17Result = null;
  if (stateFromStores) {
    const obj7 = {
      icon(color) {
        return closure_1_27(tab(sharedState[31]).StaffBadgeIcon, { size: "sm", color });
      },
      accessibilityLabel: "Dev Tools",
      selected: tab === tmp14.DEV_TOOLS,
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
      },
    };
    tmp17Result = tmp17(TabButton, obj7);
  }
  items6[2] = tmp17Result;
  obj4.children = items6;
  items5[1] = closure_28(sharedValue, obj4);
  obj.children = items5;
  return closure_28(sharedValue, obj);
});
let closure_37 = [];
let items = [
  fn(9835).AutocompleterResultTypes.GUILD,
  fn(9835).AutocompleterResultTypes.TEXT_CHANNEL,
  fn(9835).AutocompleterResultTypes.GROUP_DM,
  fn(9835).AutocompleterResultTypes.VOICE_CHANNEL,
  fn(9835).AutocompleterResultTypes.USER,
];
const __initData3 = {
  code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}",
};
const __initData4 = {
  code: "function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}",
};
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default noop.memo(function LaunchPad(arg0) {
  ({ visible, sharedState } = arg0);
  _require = undefined;
  let top;
  let bottom;
  let tmp = closure_29();
  [tmp3, closure_0] = bottom(noop.useState(false), 2);
  const callback = noop.useCallback(() => closure_0((arg0) => !arg0), []);
  const ref = noop.useRef(null);
  closure_129_0 = visible;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  let tmp2 = bottom(noop.useState(false), 2);
  [str, closure_129_1] = bottom(noop.useState(""), 2);
  let tmp6 = bottom(noop.useState(""), 2);
  [tmp9, closure_129_2] = bottom(noop.useState(closure_37), 2);
  const first = bottom(
    noop.useState(
      () =>
        new AutocompleterDefault(
          (arg0, str) => {
            if ("" === str.trim()) {
              top(closure_2_37);
            } else {
              top(arg0);
            }
          },
          items,
          undefined,
          { frecencyBoosters: true },
        ),
    ),
    1,
  )[0];
  closure_129_3 = first;
  items = [first];
  const effect = noop.useEffect(() => () => bottom.clean(), items);
  let items1 = [first];
  const effect1 = noop.useEffect(
    () =>
      RouteManagerDefault.addRouteChangeListener(() => {
        items = ["user:" + ref5.getId()];
        const set = new Set(items);
        const selectedGuildFromRoute = closure_0(top[36]).getSelectedGuildFromRoute();
        if (null != selectedGuildFromRoute) {
          const _HermesInternal = HermesInternal;
          set.add("guild:" + selectedGuildFromRoute);
        }
        options.setOptions({ blacklist: set }, true);
      }),
    items1,
  );
  let items2 = [visible, first];
  const effect2 = noop.useEffect(() => {
    if (closure_0) {
      obj.resume();
    } else {
      obj.pause();
    }
  }, items2);
  let items3 = [first];
  const callback1 = noop.useCallback((arg0) => {
    height(arg0);
    bottom.search(arg0);
  }, items3);
  let tmp15 = str.trim().length > 0;
  closure_130_0 = tmp15;
  closure_130_1 = visible;
  let obj = require("NavigationRouteUtils");
  let selectedGuildFromRoute = obj.getSelectedGuildFromRoute();
  closure_130_2 = selectedGuildFromRoute;
  let obj1 = require("NavigationRouteUtils");
  const selectedChannelFromRoute = obj1.getSelectedChannelFromRoute();
  closure_130_3 = selectedChannelFromRoute;
  const tmp20 = bottom(noop.useState(undefined), 2);
  const first1 = tmp20[0];
  closure_130_4 = first1;
  closure_130_5 = tmp22;
  let items4 = [visible];
  const effect3 = noop.useEffect(() => {
    if (!height) {
      View(undefined);
    }
  }, items4);
  closure_130_6 = noop.useRef([]);
  let obj2 = require("initialize");
  let items5 = [PrivateChannelReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items5, () => {
    if (height) {
      current = PrivateChannelReadStateStore.getUnreadPrivateChannelIds();
    } else {
      current = ref.current;
    }
    return current;
  });
  closure_130_7 = stateFromStores;
  const effect4 = noop.useEffect(() => {
    ref.current = current;
  });
  closure_130_8 = noop.useRef([]);
  let obj3 = require("initialize");
  let items6 = [SortedGuildStore, GuildReadStateStore, GuildStore];
  const items7 = [visible, selectedGuildFromRoute];
  const stateFromStoresArray = obj3.useStateFromStoresArray(
    items6,
    () => {
      if (height) {
        items = [];
        const items1 = [];
        const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
        const iter = flattenedGuildIds[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp9 = nextResult;
          if (nextResult !== top) {
            let obj = GuildReadStateStore;
            let hasUnreadResult = GuildReadStateStore.getMentionCount(tmp9) > 0;
            let tmp31 = hasUnreadResult;
            if (!hasUnreadResult) {
              hasUnreadResult = obj.hasUnread(tmp9);
            }
            if (hasUnreadResult) {
              let guild = GuildStore.getGuild(tmp9);
              let hasItem;
              if (guild != null) {
                let features = guild.features;
                hasItem = features.has(constants2.HUB);
              }
              if (!hasItem) {
                if (tmp31) {
                  let arr = items.push(tmp9);
                } else {
                  arr = items1.push(tmp9);
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
    },
    items7,
  );
  closure_130_9 = stateFromStoresArray;
  const effect5 = noop.useEffect(() => {
    ref2.current = current2;
  });
  closure_130_10 = noop.useRef([]);
  let obj4 = require("initialize");
  const items8 = [ChannelListStore, VoiceStateStore, ReadStateStore, UserGuildSettingsStore, ActiveJoinedThreadsStore];
  const items9 = [tmp15, selectedGuildFromRoute, visible, first1];
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(
    items8,
    () => {
      let tmp = noop;
      if (noop == null) {
        tmp = top;
      }
      if (!items) {
        if (null != tmp) {
          if (height) {
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
            guildChannels.forEachChannel(
              (type) => {
                const tmp2 = current4(type.type);
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
                          obj3 = items(top[37]);
                        }
                        if (tmp2) {
                          const keys = Object.keys();
                          if (keys !== undefined) {
                            if (keys[tmp] !== undefined) {
                              items3.push(type.id);
                            }
                          }
                        } else if (obj2.hasUnread(type.id)) {
                          items2.push(type.id);
                        }
                      }
                      obj2 = mentionCount;
                    }
                  }
                }
              },
              { ignoreRecents: true, withThreads: true },
            );
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
    },
    items9,
  );
  closure_130_11 = stateFromStoresArray1;
  const effect6 = noop.useEffect(() => {
    ref3.current = current3;
  });
  let tmp8 = bottom(noop.useState(closure_37), 2);
  const items10 = [NavigationHistoryStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items10, () => current3.getState().history);
  closure_130_12 = stateFromStores1;
  closure_130_13 = noop.useRef([]);
  const items11 = [tmp15, visible, selectedGuildFromRoute, stateFromStoresArray, stateFromStores1];
  const memo = noop.useMemo(() => {
    if (!closure_0) {
      if (height) {
        const _Set = Set;
        const set = new Set(current2);
        if (null != top) {
          set.add(tmp7);
        }
        items = [];
        const _Set2 = Set;
        const set1 = new Set();
        let diff = length.length - 1;
        if (0 <= diff) {
          while (null != length[diff]) {
            if (obj3.startsWith(React6)) {
              let channel = ChannelStore.getChannel(React7(obj3));
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              let tmp17 = guild_id;
            } else {
              tmp17 = React7(obj3);
            }
            let guild = GuildStore.getGuild(tmp17);
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
  }, items11);
  closure_130_14 = memo;
  const effect7 = noop.useEffect(() => {
    ref4.current = current4;
  });
  closure_130_15 = noop.useRef(undefined);
  const items12 = [tmp15, visible, stateFromStoresArray1, selectedChannelFromRoute, first1, stateFromStores1];
  const memo1 = noop.useMemo(() => {
    if (!closure_0) {
      if (height) {
        const tmp5 = (function getChannelHistory(arg0, bottom) {
          if (null != bottom) {
            const _HermesInternal = HermesInternal;
            const combined = "" + ref2 + bottom;
          }
          items = [];
          let diff = arg0.length - 1;
          if (0 <= diff) {
            while (null != arg0[diff]) {
              if (!obj.startsWith(ref3)) {
                if (obj !== combined) {
                  let tmp8 = current2(obj);
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
        })(length, bottom);
        items = [];
        if (null == noop) {
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
        if (current3.length > 0) {
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
  }, items12);
  closure_130_16 = memo1;
  const effect8 = noop.useEffect(() => {
    ref5.current = current5;
  });
  const deferredValue = noop.useDeferredValue(memo1);
  const tmp36 = bottom(noop.useState(false), 2);
  const first2 = tmp36[0];
  bottom = tmp38;
  const tmp40 = bottom(noop.useState(constants3.SEARCH), 2);
  const first3 = tmp40[0];
  let height;
  top = undefined;
  const tmp42 = closure_29();
  _require = tmp42;
  height = height(top[39])().height;
  const rect = height(top[40])();
  top = rect.top;
  bottom = rect.bottom;
  const items13 = [height, top, bottom, tmp42];
  const items14 = [str, tmp36[1], first2];
  const memo2 = noop.useMemo(() => {
    items = [closure_0.wrapper, { maxHeight: height - top - bottom - 16 }];
    return items;
  }, items13);
  const effect9 = noop.useEffect(() => {
    if (height.length > 0) {
      if (!top) {
        AnalyticsUtilsDefault.track(constants.LAUNCHPAD_SEARCHED);
        bottom(true);
      }
    }
    if (0 === height.length) {
      bottom(false);
    }
  }, items14);
  closure_131_0 = callback1;
  closure_131_1 = ref;
  closure_131_2 = sharedState;
  closure_131_3 = noop.useRef(-1);
  const items15 = [callback1, ref];
  const callback2 = noop.useCallback(() => {
    clearTimeout(bottom.current);
    bottom.current = setTimeout(() => {
      clearTimeout(ref2.current);
      closure_1_0("");
      current = ref.current;
      if (current != null) {
        current.setText("");
      }
    }, 100);
  }, items15);
  closure_131_4 = callback2;
  const callback3 = noop.useCallback(() => {
    clearTimeout(bottom.current);
  }, []);
  closure_131_5 = callback3;
  const effect10 = noop.useEffect(() => () => clearTimeout(ref.current), []);
  const obj6 = require("initialize");
  const fn = function l() {
    return 0 === top.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 7315121230879;
  fn.__initData = __initData3;
  const fn2 = function i(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (tmp) {
          ReanimatedRexport.runOnJS(noop)();
        }
      }
      let tmp2 = arg0;
      if (!arg0) {
        tmp2 = arg0 === arg1;
      }
      if (!tmp2) {
        ReanimatedRexport.runOnJS(View)();
      }
    }
  };
  obj = { runOnJS: require("ReanimatedRexport").runOnJS, clearQuery: callback2, cancelTimeout: callback3 };
  fn2.__closure = obj;
  fn2.__workletHash = 6379173436444;
  fn2.__initData = __initData4;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn, fn2);
  obj = { style: memo2, children: null };
  const obj7 = require("ReanimatedRexport");
  const items16 = [
    closure_27(closure_35, { tab: first3, setTab: tmp40[1], updateQuery: callback1, searchRef: ref, sharedState }),
    ,
  ];
  let tmp53Result = 0 === str.trim().length && first3 === tmp39.SEARCH;
  if (tmp53Result) {
    obj1 = {
      selectedGuildId: first1,
      setSelectedGuild: tmp22,
      unreadPrivateChannelIds: stateFromStores,
      unreadGuilds: stateFromStoresArray,
      guildHistory: memo,
      visible,
    };
    tmp53Result = tmp53(tmp43(tmp17[44]), obj1);
  }
  items16[1] = tmp53Result;
  obj2 = { style: tmp.launchPadContent, children: null };
  if (first3 === constants3.SEARCH) {
    if (tmp50) {
      obj3 = { results: tmp9, query: str };
      tmp53Result = tmp53(tmp16(tmp17[45]).SearchResults, obj3);
    }
    obj2.children = tmp53Result;
    items16[2] = tmp53(tmp52, obj2);
    obj.children = items16;
    return closure_28(tmp52, obj);
  }
  if (first3 === constants3.SEARCH) {
    obj4 = {
      selectedGuildId: first1,
      unreads: null,
      history: null,
      expandedHistory: null,
      toggleExpandedHistory: null,
    };
    let unreads;
    if (deferredValue != null) {
      unreads = deferredValue.unreads;
    }
    if (unreads == null) {
      unreads = tmp7;
    }
    obj4.unreads = unreads;
    let channelHistory;
    if (deferredValue != null) {
      channelHistory = deferredValue.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = tmp7;
    }
    obj4.history = channelHistory;
    obj4.expandedHistory = tmp3;
    obj4.toggleExpandedHistory = callback;
    tmp53Result = tmp53(tmp16(tmp17[45]).InitialResults, obj4);
  } else if (first3 === tmp39.DEV_TOOLS) {
    tmp53Result = tmp53(tmp43(tmp17[46]), {});
  } else if (first3 === tmp39.MEMBERS) {
    tmp53Result = tmp53(tmp43(tmp17[47]), {});
  } else {
    tmp53Result = tmp53(tmp43(tmp17[48]), {});
  }
});
