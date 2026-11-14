// === Module 19866: LaunchPad ===

// Module 19866 (LaunchPad)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ChatInputUtils from "ChatInputUtils" /* 5501 */;
import Text_Text from "Text/Text" /* 5929 */;
import Pressables from "Pressables" /* 7428 */;
import AutocompleterDefault from "Autocompleter" /* 10248 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 10259 */;
import RouteManagerDefault from "RouteManager" /* 13121 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 15146 */;
import DevToolsNavigator from "DevToolsNavigator" /* 17057 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5553 */;
import ChannelListStore from "ChannelListStore" /* 8729 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 7049 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 7014 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8827 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7060 */;
import GuildStore from "GuildStore" /* 5177 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 16256 */;
import ReadStateStore from "ReadStateStore" /* 7015 */;
import SortedGuildStore from "SortedGuildStore" /* 6956 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6958 */;
import VoiceStateStore from "VoiceStateStore" /* 5981 */;

const require = globalThis.__r;

require = fn;
function TabButton(selected) {
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
  colors = nativeDefault.colors;
  obj.children = icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT);
  return closure_1_27(Pressables.PressableHighlight, obj);
}
function TabHeader(children) {
  const tmp = closure_29();
  return closure_1_27(Text_Text.Text, { style: closure_29().subheader, variant: "heading-sm/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: children.text });
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
let NavigationHistoryStore = fn(7049);
({ CHANNEL_PREFIX: closure_8, getIdFromHistoryItem: closure_9, GUILD_PREFIX: closure_10 } = NavigationHistoryStore);
let NavigationHistoryStore = NavigationHistoryStore_mod;
const ChannelRecord = fn(5159);
({ isGuildSelectableChannelType: map1, isGuildVocalChannelType: closure_14 } = ChannelRecord);
const Constants = fn(1072);
({ AnalyticEvents: closure_25, GuildFeatures: closure_26 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_27, jsxs: closure_28 } = jsxProd);
const md = nativeDefault.radii.md;
const createStyles = fn(5306);
let obj = { wrapper: { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" }, launchPadContent: { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }, header: { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 }, subheader: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", paddingStart: 8 }, tabs: null, tab: null, tabSelected: null };
let obj3 = { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" };
obj.tabs = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
let size = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj.tab = size;
let obj4 = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
obj.tabSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_29 = createStyles.createStyles(obj);
const constants3 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
let closure_33 = { code: "(function LaunchPadTsx1(){let[sharedState]=this.__closure;return sharedState.get();})" };
let closure_34 = { code: "(function LaunchPadTsx2(sharedState){let[keyboardShown,scheduleOnRN,setFocused]=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){scheduleOnRN(setFocused,true);}else if(keyboardShown.get()&&sharedState<=0){scheduleOnRN(setFocused,false);}})" };
let closure_35 = noop.memo(function LaunchPadHeader(tab) {
  tab = tab.tab;
  _require = tab;
  ({ setTab: c1, sharedState } = tab);
  dependencyMap = sharedState;
  const searchRef = tab.searchRef;
  noop = undefined;
  let tmp = closure_29();
  items = [DeveloperExperimentStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => isDeveloper.isDeveloper);
  noop = noop.useRef(false);
  let obj = require("initialize");
  const sharedValue = require("module_1655").useSharedValue(false);
  const ref2 = noop.useRef(tab);
  const effect = noop.useEffect(() => {
    closure_6.current = current;
  });
  const items1 = [sharedValue, searchRef];
  const callback = noop.useCallback((arg0, arg1) => {
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
      current = ref.current;
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
  const obj2 = require("module_1655");
  const items2 = [ref2];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, callback];
  const effect1 = noop.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, callback];
  const effect2 = noop.useEffect(() => {
    let tmp = c0 === constants.SEARCH;
    if (tmp) {
      tmp = 1 === _undefined2.get();
    }
    if (tmp) {
      callback(true);
    }
  }, items4);
  let obj3 = require("initialize");
  const items5 = [closure_33, sharedState];
  _require = undefined;
  [tmp11, tmp12] = items5;
  class LaunchPadTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items6 = [tmp12];
  LaunchPadTsx1.__closure = items6;
  LaunchPadTsx1.__workletHash = 5288317841417;
  LaunchPadTsx1.__initData = tmp11;
  const items7 = [closure_34, sharedValue, require("module_1708").scheduleOnRN, callback];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items7;
  class LaunchPadTsx2 {
    constructor(arg0) {
      obj = closure_0;
      if (!closure_0.get()) {
        num = 0.75;
        if (tab > 0.75) {
          tmp = closure_1;
          tmp2 = closure_2;
          flag = true;
          tmp3 = closure_1(closure_2, true);
        }
        return;
      }
      value = obj.get();
      if (value) {
        num2 = 0;
        value = tab <= 0;
      }
      if (value) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        flag2 = false;
        tmp7 = closure_1(closure_2, false);
      }
      return;
    }
  }
  const items8 = [tmp14, tmp15, tmp16];
  LaunchPadTsx2.__closure = items8;
  LaunchPadTsx2.__workletHash = 4752313458637;
  LaunchPadTsx2.__initData = tmp13;
  const animatedReaction = require("module_1655").useAnimatedReaction(LaunchPadTsx1, LaunchPadTsx2);
  const obj5 = { style: tmp.header, children: null };
  if (tab === constants3.SEARCH) {
    const obj6 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: tab.updateQuery, autoComplete: "off", spellCheck: false, autoFocus: false };
    let tmp24 = closure_27(tmp2(7825).SearchBar, obj6);
    let tmp23 = closure_27;
  } else if (tab === constants3.MEMBERS) {
    const obj7 = { text: null };
    const intl2 = tmp2(1113).intl;
    obj7.text = intl2.string(tmp2(1113).t["9Oq93m"]);
    tmp24 = closure_27(TabHeader, obj7);
    tmp23 = closure_27;
  } else if (tab === constants3.NOTIFICATIONS) {
    const obj8 = { text: null };
    const intl = tmp2(1113).intl;
    obj8.text = intl.string(tmp2(1113).t.HcoRu0);
    tmp24 = closure_27(TabHeader, obj8);
    tmp23 = closure_27;
  } else {
    tmp23 = closure_27;
    tmp24 = closure_27(TabHeader, { text: "Dev Tools" });
  }
  const items9 = [tmp24, ];
  const obj9 = { style: tmp.tabs, children: null };
  const obj10 = {
    icon(color) {
      return closure_1_27(current(_undefined2[30]).FlashIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null
  };
  const intl3 = tmp2(1113).intl;
  obj10.accessibilityLabel = intl3.string(require("util").t.JqV7IC);
  obj10.onPress = function onPress() {
    _undefined(constants.SEARCH);
    current = searchRef.current;
    if (current != null) {
      current.focus();
    }
  };
  obj10.selected = tab === constants3.SEARCH;
  const items10 = [tmp23(TabButton, obj10), , ];
  const obj11 = {
    icon(color) {
      return closure_1_27(current(_undefined2[31]).BellIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null
  };
  const intl4 = tmp2(1113).intl;
  obj11.accessibilityLabel = intl4.string(require("util").t.HcoRu0);
  obj11.onPress = function onPress() {
    _undefined(constants.NOTIFICATIONS);
    current = searchRef.current;
    if (current != null) {
      current.blur();
    }
  };
  obj11.selected = tab === constants3.NOTIFICATIONS;
  items10[1] = tmp23(TabButton, obj11);
  let tmp23Result = null;
  if (stateFromStores) {
    const obj12 = {
      icon(color) {
          return closure_1_27(current(_undefined2[32]).StaffBadgeIcon, { size: "sm", color });
        },
      accessibilityLabel: "Dev Tools",
      selected: tab === constants3.DEV_TOOLS,
      onPress() {
          if (obj.isAndroid()) {
            DevToolsNavigator.navigateToDevTools();
            hideLaunchPadDefault();
            const tmpResult = DevToolsNavigator;
          } else {
            _undefined(constants.DEV_TOOLS);
          }
          current = searchRef.current;
          if (current != null) {
            current.blur();
          }
          obj = PlatformUtils;
        }
    };
    tmp23Result = tmp23(TabButton, obj12);
  }
  items10[2] = tmp23Result;
  obj9.children = items10;
  items9[1] = closure_28(sharedValue, obj9);
  obj5.children = items9;
  return closure_28(sharedValue, obj5);
});
const results = [];
let items = [fn(10247).AutocompleterResultTypes.GUILD, fn(10247).AutocompleterResultTypes.TEXT_CHANNEL, fn(10247).AutocompleterResultTypes.GROUP_DM, fn(10247).AutocompleterResultTypes.VOICE_CHANNEL, fn(10247).AutocompleterResultTypes.USER];
let closure_39 = { code: "(function LaunchPadTsx3(){let[sharedState]=this.__closure;return sharedState.get()===0;})" };
let closure_40 = { code: "(function LaunchPadTsx4(hidden,prevHidden){let[scheduleOnRN,clearQuery,cancelTimeout]=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){scheduleOnRN(clearQuery);}else if(!hidden&&hidden!==prevHidden){scheduleOnRN(cancelTimeout);}})" };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default noop.memo(function LaunchPad(arg0) {
  ({ visible, sharedState } = arg0);
  _require = undefined;
  let bottom;
  let tmp = closure_29();
  [tmp3, c0] = bottom(noop.useState(false), 2);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const ref = noop.useRef(null);
  closure_129_0 = visible;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  let tmp2 = bottom(noop.useState(false), 2);
  [str, closure_129_1] = bottom(noop.useState(""), 2);
  const tmp6 = bottom(noop.useState(""), 2);
  [tmp9, closure_129_2] = bottom(noop.useState(results), 2);
  const first = bottom(noop.useState(() => new AutocompleterDefault((arg0, str) => {
    str = str.trim();
    if ("" === str.trim()) {
      _undefined3(results);
    } else {
      _undefined3(arg0);
    }
  }, items, undefined, { frecencyBoosters: true })), 1)[0];
  closure_129_3 = first;
  items = [first];
  const effect = noop.useEffect(() => () => bottom.clean(), items);
  let items1 = [first];
  const effect1 = noop.useEffect(() => RouteManagerDefault.addRouteChangeListener(() => {
    items = ["user:" + ref5.getId()];
    const set = new Set(items);
    const selectedGuildFromRoute = c0(c2[37]).getSelectedGuildFromRoute();
    if (null != selectedGuildFromRoute) {
      const _HermesInternal = HermesInternal;
      set.add("guild:" + selectedGuildFromRoute);
    }
    options.setOptions({ blacklist: set }, true);
  }), items1);
  let items2 = [visible, first];
  const effect2 = noop.useEffect(() => {
    if (c0) {
      bottom.resume();
    } else {
      bottom.pause();
    }
  }, items2);
  let items3 = [first];
  const callback1 = noop.useCallback((arg0) => {
    _undefined2(arg0);
    bottom.search(arg0);
  }, items3);
  const tmp15 = str.trim().length > 0;
  closure_130_0 = tmp15;
  closure_130_1 = visible;
  let tmp8 = bottom(noop.useState(results), 2);
  let selectedGuildFromRoute = require("NavigationRouteUtils").getSelectedGuildFromRoute();
  closure_130_2 = selectedGuildFromRoute;
  let obj = require("NavigationRouteUtils");
  const selectedChannelFromRoute = require("NavigationRouteUtils").getSelectedChannelFromRoute();
  closure_130_3 = selectedChannelFromRoute;
  const tmp20 = bottom(noop.useState(undefined), 2);
  const first1 = tmp20[0];
  closure_130_4 = first1;
  closure_130_5 = tmp22;
  let items4 = [visible];
  const effect3 = noop.useEffect(() => {
    if (!c1) {
      View(undefined);
    }
  }, items4);
  closure_130_6 = noop.useRef([]);
  const obj2 = require("NavigationRouteUtils");
  let items5 = [PrivateChannelReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items5, () => {
    if (c1) {
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
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items6, () => {
    if (c1) {
      items = [];
      const items1 = [];
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        if (nextResult !== c2) {
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
  }, items7);
  closure_130_9 = stateFromStoresArray;
  const effect5 = noop.useEffect(() => {
    ref2.current = current2;
  });
  closure_130_10 = noop.useRef([]);
  const obj4 = require("initialize");
  const items8 = [ChannelListStore, VoiceStateStore, ReadStateStore, UserGuildSettingsStore, ActiveJoinedThreadsStore];
  const items9 = [tmp15, selectedGuildFromRoute, visible, first1];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items8, () => {
    let tmp = noop;
    if (noop == null) {
      tmp = c2;
    }
    if (!c0) {
      if (null != tmp) {
        if (c1) {
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
                      obj3 = items(items2[38]);
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
  }, items9);
  closure_130_11 = stateFromStoresArray1;
  const effect6 = noop.useEffect(() => {
    ref3.current = current3;
  });
  const obj5 = require("initialize");
  const items10 = [NavigationHistoryStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items10, () => current3.getState().history);
  closure_130_12 = stateFromStores1;
  closure_130_13 = noop.useRef([]);
  const items11 = [tmp15, visible, selectedGuildFromRoute, stateFromStoresArray, stateFromStores1];
  const memo = noop.useMemo(() => {
    if (!c0) {
      if (c1) {
        const _Set = Set;
        const set = new Set(current2);
        if (null != c2) {
          set.add(tmp7);
        }
        items = [];
        const _Set2 = Set;
        const set1 = new Set();
        let diff = length.length - 1;
        if (0 <= diff) {
          while (null != length[diff]) {
            if (obj3.startsWith(React5)) {
              let channel = ChannelStore.getChannel(React6(obj3));
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              let tmp17 = guild_id;
            } else {
              tmp17 = React6(obj3);
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
  }, items11);
  closure_130_14 = memo;
  const effect7 = noop.useEffect(() => {
    ref4.current = current4;
  });
  closure_130_15 = noop.useRef(undefined);
  const items12 = [tmp15, visible, stateFromStoresArray1, selectedChannelFromRoute, first1, stateFromStores1];
  const memo1 = noop.useMemo(() => {
    if (!c0) {
      if (c1) {
        const tmp5 = (function getChannelHistory(length, bottom) {
          if (null != bottom) {
            const _HermesInternal = HermesInternal;
            const combined = "" + ref2 + bottom;
          }
          items = [];
          let diff = length.length - 1;
          if (0 <= diff) {
            while (null != length[diff]) {
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
  const tmp42 = closure_29();
  const height = useWindowDimensionsDefault().height;
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  bottom = rect.bottom;
  const items13 = [height, top, bottom, tmp42];
  const items14 = [str, tmp36[1], first2];
  const memo2 = noop.useMemo(() => {
    items = [_undefined.wrapper, { maxHeight: c1 - c2 - bottom - 16 }];
    return items;
  }, items13);
  const effect9 = noop.useEffect(() => {
    if (_undefined2.length > 0) {
      if (!c2) {
        AnalyticsUtilsDefault.track(constants.LAUNCHPAD_SEARCHED);
        bottom(true);
      }
    }
    if (0 === _undefined2.length) {
      bottom(false);
    }
  }, items14);
  _require = callback1;
  importDefault = ref;
  dependencyMap = noop.useRef(-1);
  const items15 = [callback1, ref];
  const callback2 = noop.useCallback(() => {
    clearTimeout(_undefined3.current);
    _undefined3.current = setTimeout(() => {
      clearTimeout(ref2.current);
      _undefined("");
      current = ref.current;
      if (current != null) {
        current.setText("");
      }
    }, 100);
  }, items15);
  const callback3 = noop.useCallback(() => {
    clearTimeout(_undefined3.current);
  }, []);
  const effect10 = noop.useEffect(() => () => clearTimeout(ref.current), []);
  const obj6 = require("initialize");
  const items16 = [closure_39, sharedState];
  _require = undefined;
  [tmp49, tmp50] = items16;
  class LaunchPadTsx3 {
    constructor() {
      return 0 === closure_0.get();
    }
  }
  const items17 = [tmp50];
  LaunchPadTsx3.__closure = items17;
  LaunchPadTsx3.__workletHash = 375435467238;
  LaunchPadTsx3.__initData = tmp49;
  const items18 = [closure_40, require("module_1708").scheduleOnRN, callback2, callback3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp51, tmp52, tmp53, tmp54] = items18;
  class LaunchPadTsx4 {
    constructor(arg0, arg1) {
      tmp = arg0 !== arg1;
      if (tmp) {
        if (arg0) {
          if (tmp) {
            tmp6 = closure_0;
            tmp7 = closure_1;
            tmp8 = closure_0(closure_1);
          }
        }
        tmp2 = arg0;
        if (!arg0) {
          tmp2 = arg0 === arg1;
        }
        if (!tmp2) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp5 = closure_0(closure_2);
        }
      }
      return;
    }
  }
  const items19 = [tmp52, tmp53, tmp54];
  LaunchPadTsx4.__closure = items19;
  LaunchPadTsx4.__workletHash = 5415003155916;
  LaunchPadTsx4.__initData = tmp51;
  const animatedReaction = require("module_1655").useAnimatedReaction(LaunchPadTsx3, LaunchPadTsx4);
  const obj8 = { style: memo2, children: null };
  const obj7 = require("module_1655");
  const items20 = [closure_27(closure_35, { tab: first3, setTab: tmp40[1], updateQuery: callback1, searchRef: ref, sharedState }), , ];
  let tmp59Result = 0 === str.trim().length && first3 === constants3.SEARCH;
  if (tmp59Result) {
    const obj9 = { selectedGuildId: first1, setSelectedGuild: tmp22, unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, visible };
    tmp59Result = closure_27(tmp43(19867), obj9);
  }
  items20[1] = tmp59Result;
  const obj10 = { style: tmp.launchPadContent, children: null };
  if (first3 === constants3.SEARCH) {
    if (tmp56) {
      const obj11 = { results, query: str };
      let tmp59Result2 = closure_27(tmp16(19874).SearchResults, obj11);
    }
    obj10.children = tmp59Result2;
    items20[2] = closure_27(View, obj10);
    obj8.children = items20;
    return closure_28(View, obj8);
  }
  if (first3 === constants3.SEARCH) {
    const obj12 = { selectedGuildId: first1, unreads: null, history: null, expandedHistory: null, toggleExpandedHistory: null };
    let unreads;
    if (deferredValue != null) {
      unreads = deferredValue.unreads;
    }
    if (unreads == null) {
      unreads = results;
    }
    obj12.unreads = unreads;
    let channelHistory;
    if (deferredValue != null) {
      channelHistory = deferredValue.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = results;
    }
    obj12.history = channelHistory;
    obj12.expandedHistory = tmp3;
    obj12.toggleExpandedHistory = callback;
    tmp59Result2 = closure_27(tmp16(19874).InitialResults, obj12);
  } else if (first3 === constants3.DEV_TOOLS) {
    tmp59Result2 = closure_27(tmp43(18398), {});
  } else if (first3 === constants3.MEMBERS) {
    tmp59Result2 = closure_27(tmp43(19887), {});
  } else {
    tmp59Result2 = closure_27(tmp43(19888), {});
  }
  tmp56 = str.trim().length > 0;
});