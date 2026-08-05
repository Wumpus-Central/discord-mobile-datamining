// discord_app/modules/launchpad/native/LaunchPad.tsx
import set from "set";
import importAllResult from "jsxProd";
import { View } from "updateVoiceState";
import setContent from "setContent";
import handleReset from "handleReset";
import getIdFromHistoryItem from "getIdFromHistoryItem";
import closure_11 from "getIdFromHistoryItem";
import rebuild from "rebuild";
import createChannelRecord from "createChannelRecord";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import init from "init";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import rebuildUnreads from "rebuildUnreads";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import jsxProd from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { createAutocompleterResultForChannelId } from "../../autocompleter/createAutocompleterResultForChannelId.tsx";

let c10;
let c9;
let closure_14;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let map1;
let metroImportAll;
const require = arg1;
function TabButton(selected) {
  let accessibilityLabel;
  let icon;
  let onPress;
  let style;
  selected = selected.selected;
  ({ onPress, icon, accessibilityLabel, style } = selected);
  const tmp = callback3();
  const obj = { onPress, style: null, accessibilityLabel: null, accessibilityRole: "tab", accessibilityState: null, children: null };
  const items = [tmp.tab, style, ];
  let tabSelected;
  if (selected) {
    tabSelected = tmp.tabSelected;
  }
  items[2] = tabSelected;
  obj[1] = items;
  obj[2] = accessibilityLabel;
  obj[4] = { selected };
  const colors = Themes.colors;
  obj[5] = icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT);
  return closure_27(PressableBase /* PressableBase */.PressableHighlight, obj);
}
function TabHeader(children) {
  const tmp = callback3();
  return callback2(Text /* Text */.Text, { style: callback3().subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: children.text });
}
function createAndAppendChannel(arg0, has, arr) {
  if (!has.has(arg0)) {
    const tmp3 = createAutocompleterResultForChannelId(arg0);
    if (null != tmp3) {
      arr.push(tmp3);
      has.add(arg0);
    }
  }
}
let c4 = importAllResult;
({ CHANNEL_PREFIX: metroImportAll, getIdFromHistoryItem: c9, GUILD_PREFIX: c10 } = getIdFromHistoryItem);
({ isGuildSelectableChannelType: map1, isGuildVocalChannelType: closure_14 } = createChannelRecord);
({ AnalyticEvents: closure_25, GuildFeatures: closure_26 } = ME);
({ jsx: closure_27, jsxs: closure_28 } = jsxProd);
const md = require("Themes").radii.md;
let obj = { wrapper: null, launchPadContent: null, header: null, subheader: null, tabs: null, tab: null, tabSelected: null };
obj = { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" };
obj[0] = obj;
obj[1] = { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 };
obj[2] = { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 };
obj[3] = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", paddingStart: 8 };
createCacheKey = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: require("Themes").colors.INPUT_BORDER_DEFAULT };
obj[4] = createCacheKey;
obj[5] = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj[6] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let closure_29 = createCacheKey.createStyles(obj);
let closure_32 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
let closure_33 = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
let closure_34 = { code: "function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}" };
let closure_35 = importAllResult.memo((tab) => {
  let importDefault;
  let sharedState;
  tab = tab.tab;
  ({ setTab: importDefault, sharedState } = tab);
  const searchRef = tab.searchRef;
  let importAllResult;
  let sharedValue;
  let setContent;
  let callback;
  let stateFromStores1;
  let tmp = callback3();
  let obj = tab(sharedState[24]);
  const items = [init];
  const stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
  importAllResult = importAllResult.useRef(false);
  let obj1 = tab(sharedState[25]);
  sharedValue = obj1.useSharedValue(false);
  setContent = importAllResult.useRef(tab);
  const effect = importAllResult.useEffect(() => {
    setContent.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  callback = importAllResult.useCallback((arg0, arg1) => {
    if (arg0) {
      if (ref2.current === outer1_32.SEARCH) {
        const bestActiveInput = tab(sharedState[26]).getBestActiveInput();
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
        const obj3 = tab(sharedState[26]);
        const tmp14 = ref;
      }
    }
    if (!arg0) {
      let current = ref.current;
      if (current) {
        current = !arg1;
      }
      if (current) {
        const bestActiveInput1 = tab(sharedState[26]).getBestActiveInput();
        if (bestActiveInput1 != null) {
          bestActiveInput1.focus();
        }
        const obj = tab(sharedState[26]);
      }
      const current2 = searchRef.current;
      if (current2 != null) {
        current2.blur();
      }
      ref.current = false;
      const result1 = sharedValue.set(false);
      const tmp3 = ref;
    }
  }, items1);
  let obj2 = tab(sharedState[24]);
  const items2 = [setContent];
  stateFromStores1 = obj2.useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, callback];
  const effect1 = importAllResult.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, callback];
  const effect2 = importAllResult.useEffect(() => {
    let tmp = tab === outer1_32.SEARCH;
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
  T.__initData = closure_33;
  const fn = function p(arg0) {
    if (!sharedValue.get()) {
      if (arg0 > 0.75) {
        tab(sharedState[25]).runOnJS(callback)(true);
        const obj2 = tab(sharedState[25]);
      }
    }
    let value = sharedValue.get();
    if (value) {
      value = arg0 <= 0;
    }
    if (value) {
      tab(sharedState[25]).runOnJS(callback)(false);
      const obj3 = tab(sharedState[25]);
    }
  };
  obj = { keyboardShown: sharedValue, runOnJS: tab(sharedState[25]).runOnJS, setFocused: callback };
  fn.__closure = obj;
  fn.__workletHash = 3784684686013;
  fn.__initData = closure_34;
  const animatedReaction = obj3.useAnimatedReaction(T, fn);
  obj = { style: tmp.header, children: null };
  if (tab === constants.SEARCH) {
    obj1 = { size: "md", returnKeyType: "done", ref: null, onChange: null, autoComplete: "off", spellCheck: false, autoFocus: false };
    obj1[2] = searchRef;
    obj1[3] = tab.updateQuery;
    let tmp18 = callback2(tmp2(tmp3[27]).SearchField, obj1);
    let tmp17 = callback2;
  } else if (tab === tmp14.MEMBERS) {
    obj2 = { text: null };
    const intl2 = tmp2(tmp3[28]).intl;
    obj2[0] = intl2.string(tmp2(tmp3[28]).t["9Oq93m"]);
    tmp18 = callback2(TabHeader, obj2);
    tmp17 = callback2;
  } else if (tab === tmp14.NOTIFICATIONS) {
    obj3 = { text: null };
    const intl = tmp2(tmp3[28]).intl;
    obj3[0] = intl.string(tmp2(tmp3[28]).t.HcoRu0);
    tmp18 = callback2(TabHeader, obj3);
    tmp17 = callback2;
  } else {
    tmp17 = callback2;
    tmp18 = callback2(TabHeader, { text: "Dev Tools" });
  }
  const items5 = [tmp18, ];
  const obj4 = { style: tmp.tabs, children: null };
  const obj5 = {
    icon(color) {
      return callback2(tab(sharedState[29]).FlashIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null
  };
  const intl3 = tmp2(tmp3[28]).intl;
  obj5[1] = intl3.string(tab(sharedState[28]).t.JqV7IC);
  obj5[2] = function onPress() {
    callback(outer1_32.SEARCH);
    const current = searchRef.current;
    if (current != null) {
      current.focus();
    }
  };
  obj5[3] = tab === constants.SEARCH;
  const items6 = [tmp17(TabButton, obj5), , ];
  const obj6 = {
    icon(color) {
      return callback2(tab(sharedState[30]).BellIcon, { size: "sm", color });
    },
    accessibilityLabel: null,
    onPress: null,
    selected: null
  };
  const intl4 = tmp2(tmp3[28]).intl;
  obj6[1] = intl4.string(tab(sharedState[28]).t.HcoRu0);
  obj6[2] = function onPress() {
    callback(outer1_32.NOTIFICATIONS);
    const current = searchRef.current;
    if (current != null) {
      current.blur();
    }
  };
  obj6[3] = tab === constants.NOTIFICATIONS;
  items6[1] = tmp17(TabButton, obj6);
  let tmp17Result = null;
  if (stateFromStores) {
    const obj7 = { icon: null, accessibilityLabel: "Dev Tools", selected: null, onPress: null };
    obj7[0] = function icon(color) {
      return callback2(tab(sharedState[31]).StaffBadgeIcon, { size: "sm", color });
    };
    obj7[2] = tab === tmp14.DEV_TOOLS;
    obj7[3] = function onPress() {
      if (obj.isAndroid()) {
        tab(tmp2[33]).navigateToDevTools();
        outer1_1(tmp2[34])();
        const tmpResult = tab(tmp2[33]);
      } else {
        callback(outer1_32.DEV_TOOLS);
      }
      const current = searchRef.current;
      if (current != null) {
        current.blur();
      }
    };
    tmp17Result = tmp17(TabButton, obj7);
  }
  items6[2] = tmp17Result;
  obj4[1] = items6;
  items5[1] = closure_28(sharedValue, obj4);
  obj[1] = items5;
  return closure_28(sharedValue, obj);
});
let closure_37 = [];
let items = [require("sortByMatchScore").AutocompleterResultTypes.GUILD, require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.GROUP_DM, require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.USER];
let closure_39 = { code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
let closure_40 = { code: "function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}" };
let obj2 = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo(function LaunchPad(arg0) {
  let callback1;
  let ref;
  let sharedState;
  let str;
  let tmp3;
  let tmp9;
  let visible;
  ({ visible, sharedState } = arg0);
  callback1 = undefined;
  ref = undefined;
  sharedState = undefined;
  let callback;
  let tmp = callback3();
  [tmp3, callback1] = callback(callback2.useState(false), 2);
  callback = callback2.useCallback(() => callback1((arg0) => !arg0), []);
  ref = callback2.useRef(null);
  callback1 = visible;
  ref = undefined;
  sharedState = undefined;
  callback = undefined;
  let tmp2 = callback(callback2.useState(false), 2);
  [str, ref] = callback(callback2.useState(""), 2);
  let tmp6 = callback(callback2.useState(""), 2);
  [tmp9, sharedState] = callback(callback2.useState(closure_37), 2);
  const first = callback(callback2.useState(() => new ref(sharedState[41])((arg0, str) => {
    if ("" === str.trim()) {
      callback(outer1_37);
    } else {
      callback(arg0);
    }
  }, outer1_38, undefined, { frecencyBoosters: true })), 1)[0];
  callback = first;
  let items = [first];
  const effect = callback2.useEffect(() => () => set.clean(), items);
  let items1 = [first];
  const effect1 = callback2.useEffect(() => ref(sharedState[42]).addRouteChangeListener(() => {
    const items = ["user:" + outer1_15.getId()];
    const set = new Set(items);
    const selectedGuildFromRoute = outer1_0(outer1_2[36]).getSelectedGuildFromRoute();
    if (null != selectedGuildFromRoute) {
      const _HermesInternal = HermesInternal;
      set.add("guild:" + selectedGuildFromRoute);
    }
    options.setOptions({ blacklist: set }, true);
  }), items1);
  let items2 = [visible, first];
  const effect2 = callback2.useEffect(() => {
    if (callback1) {
      obj.resume();
    } else {
      obj.pause();
    }
  }, items2);
  let items3 = [first];
  callback1 = callback2.useCallback((arg0) => {
    ref(arg0);
    ref.search(arg0);
  }, items3);
  ref = str;
  let tmp15 = str.trim().length > 0;
  callback1 = tmp15;
  ref = visible;
  sharedState = undefined;
  callback = undefined;
  callback2 = undefined;
  callback3 = undefined;
  let setContent;
  let stateFromStores;
  let closure_8;
  let stateFromStoresArray;
  let closure_10;
  let stateFromStoresArray1;
  let stateFromStores1;
  let closure_13;
  let memo;
  let fetchFingerprint;
  let memo1;
  let obj = callback1(sharedState[36]);
  let selectedGuildFromRoute = obj.getSelectedGuildFromRoute();
  sharedState = selectedGuildFromRoute;
  let obj1 = callback1(sharedState[36]);
  const selectedChannelFromRoute = obj1.getSelectedChannelFromRoute();
  callback = selectedChannelFromRoute;
  const tmp20 = callback(callback2.useState(undefined), 2);
  const first1 = tmp20[0];
  callback2 = first1;
  callback3 = tmp22;
  let items4 = [visible];
  const effect3 = callback2.useEffect(() => {
    if (!ref) {
      callback3(undefined);
    }
  }, items4);
  setContent = callback2.useRef([]);
  let obj2 = callback1(sharedState[24]);
  let items5 = [rebuildUnreads];
  stateFromStores = obj2.useStateFromStores(items5, () => {
    if (ref) {
      let current = outer1_20.getUnreadPrivateChannelIds();
    } else {
      current = ref2.current;
    }
    return current;
  });
  const effect4 = callback2.useEffect(() => {
    setContent.current = stateFromStores;
  });
  closure_8 = callback2.useRef([]);
  let obj3 = callback1(sharedState[24]);
  let items6 = [insertUnsortedGuilds, updateGuildUnreadSentinel, createGuildRecordFromRust];
  const items7 = [visible, selectedGuildFromRoute];
  stateFromStoresArray = obj3.useStateFromStoresArray(items6, () => {
    if (ref) {
      const items = [];
      const items1 = [];
      const flattenedGuildIds = outer1_22.getFlattenedGuildIds();
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        let tmp10 = sharedState;
        if (nextResult !== sharedState) {
          let obj = outer1_18;
          let tmp30 = nextResult;
          let hasUnreadResult = outer1_18.getMentionCount(tmp9) > 0;
          let tmp31 = hasUnreadResult;
          if (!hasUnreadResult) {
            let tmp11 = nextResult;
            hasUnreadResult = obj.hasUnread(tmp9);
          }
          if (hasUnreadResult) {
            let tmp13 = outer1_19;
            let tmp14 = nextResult;
            let guild = outer1_19.getGuild(tmp9);
            let hasItem;
            if (guild != null) {
              let features = guild.features;
              let tmp17 = outer1_26;
              hasItem = features.has(outer1_26.HUB);
            }
            if (!hasItem) {
              let tmp18 = tmp31;
              if (tmp31) {
                let tmp21 = nextResult;
                let arr = items.push(tmp9);
              } else {
                let tmp19 = nextResult;
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
      return ref3.current;
    }
  }, items7);
  const effect5 = callback2.useEffect(() => {
    closure_8.current = stateFromStoresArray;
  });
  closure_10 = callback2.useRef([]);
  let obj4 = callback1(sharedState[24]);
  const items8 = [stateFromStores, updateVoiceState, generateOldThreadCutoff, updateUserGuildSettingsInternal, stateFromStores1];
  const items9 = [tmp15, selectedGuildFromRoute, visible, first1];
  stateFromStoresArray1 = obj4.useStateFromStoresArray(items8, () => {
    let tmp = callback2;
    if (callback2 == null) {
      tmp = items2;
    }
    if (!items) {
      if (null != tmp) {
        if (items1) {
          items = [];
          items1 = [];
          items2 = [];
          const items3 = [];
          const _Object = Object;
          const values = Object.values(stateFromStores1.getActiveJoinedUnreadThreadsForGuild(tmp));
          for (const item10020 of values) {
            let tmp8 = item10020;
            for (const key10024 in item10020) {
              let tmp33 = key10024;
              let arr = items1.push(key10024);
              continue;
            }
            continue;
          }
          const guildChannels = stateFromStores.getGuild(tmp).guildChannels;
          guildChannels.forEachChannel((type) => {
            const tmp2 = outer1_14(type.type);
            if (tmp2) {
              if (!outer1_23.isChannelMuted(type.guild_id, type.id)) {
                if (null == type.parent_id) {
                  if (outer1_21.getMentionCount(type.id) > 0) {
                    items.push(type.id);
                  } else {
                    if (!tmp2) {
                      if (obj3.getHasImportantUnread(type)) {
                        items1.push(type.id);
                      }
                      obj3 = items(items2[37]);
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
                  obj2 = outer1_21;
                }
              }
              const obj = outer1_23;
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
          return ref4.current;
        }
      }
    }
    return [];
  }, items9);
  const effect6 = callback2.useEffect(() => {
    closure_10.current = stateFromStoresArray1;
  });
  let tmp8 = callback(callback2.useState(closure_37), 2);
  const items10 = [stateFromStoresArray1];
  stateFromStores1 = callback1(sharedState[24]).useStateFromStores(items10, () => stateFromStoresArray1.getState().history);
  closure_13 = callback2.useRef([]);
  const items11 = [tmp15, visible, selectedGuildFromRoute, stateFromStoresArray, stateFromStores1];
  memo = callback2.useMemo(() => {
    if (!callback1) {
      if (ref) {
        const _Set = Set;
        const set = new Set(stateFromStoresArray);
        if (null != sharedState) {
          set.add(tmp7);
        }
        const items = [];
        const _Set2 = Set;
        const set1 = new Set();
        let diff = stateFromStores1.length - 1;
        if (0 <= diff) {
          while (null != stateFromStores1[diff]) {
            let tmp28 = closure_8;
            if (obj3.startsWith(closure_8)) {
              let tmp18 = memo1;
              let tmp19 = stateFromStoresArray;
              let channel = memo1.getChannel(stateFromStoresArray(obj3));
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              let tmp17 = guild_id;
            } else {
              let tmp16 = stateFromStoresArray;
              tmp17 = stateFromStoresArray(obj3);
            }
            let tmp22 = outer1_19;
            let guild = outer1_19.getGuild(tmp17);
            let hasItem = null == tmp17 || set.has(tmp17) || set1.has(tmp17) || null == guild;
            if (!hasItem) {
              let features = guild.features;
              let tmp25 = outer1_26;
              hasItem = features.has(outer1_26.HUB);
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
    return ref5.current;
  }, items11);
  const effect7 = callback2.useEffect(() => {
    closure_13.current = memo;
  });
  fetchFingerprint = callback2.useRef(undefined);
  const items12 = [tmp15, visible, stateFromStoresArray1, selectedChannelFromRoute, first1, stateFromStores1];
  memo1 = callback2.useMemo(() => {
    if (!callback1) {
      if (ref) {
        const tmp5 = (function getChannelHistory(stateFromStores1, set) {
          if (null != set) {
            const _HermesInternal = HermesInternal;
            const combined = "" + closure_8 + set;
          }
          const items = [];
          let diff = stateFromStores1.length - 1;
          if (0 <= diff) {
            while (null != stateFromStores1[diff]) {
              let tmp6 = closure_10;
              if (!obj.startsWith(closure_10)) {
                if (obj !== combined) {
                  let tmp7 = callback;
                  let tmp8 = callback(obj);
                  let tmp9 = basicChannel;
                  basicChannel = basicChannel.getBasicChannel(tmp8);
                  if (null != basicChannel) {
                    if (null == basicChannel.guild_id) {
                      let arr = items.push(tmp8);
                      if (items.length >= 20) {
                        break;
                      }
                    } else {
                      let tmp11 = guild;
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
        })(stateFromStores1, set);
        let items = [];
        if (null == callback2) {
          const _Set = Set;
          const set = new Set();
          for (const item10022 of tmp5) {
            let tmp15 = outer1_36;
            let tmp16 = outer1_36(item10022, set, items);
            continue;
          }
        }
        const items1 = [];
        const _Set2 = Set;
        const set1 = new Set();
        if (stateFromStoresArray1.length > 0) {
          for (const item10040 of tmp22) {
            let tmp25 = outer1_36;
            let tmp26 = outer1_36(item10040, set1, items1);
            continue;
          }
        }
        if (items.length > 0) {
          const obj = { channelHistory: null, unreads: null };
          obj[0] = items;
          obj[1] = items1;
          const tmp27 = obj;
        }
        return tmp27;
      } else {
        return ref6.current;
      }
    }
  }, items12);
  const effect8 = callback2.useEffect(() => {
    fetchFingerprint.current = memo1;
  });
  const deferredValue = callback2.useDeferredValue(memo1);
  const tmp36 = callback(callback2.useState(false), 2);
  const first2 = tmp36[0];
  sharedState = first2;
  callback = tmp38;
  const tmp40 = callback(callback2.useState(constants.SEARCH), 2);
  const first3 = tmp40[0];
  callback1 = undefined;
  ref = undefined;
  sharedState = undefined;
  callback = undefined;
  const tmp42 = callback3();
  callback1 = tmp42;
  const height = ref(sharedState[39])().height;
  ref = height;
  const rect = ref(sharedState[40])();
  const top = rect.top;
  sharedState = top;
  const bottom = rect.bottom;
  callback = bottom;
  const items13 = [height, top, bottom, tmp42];
  const items14 = [str, tmp36[1], first2];
  const memo2 = callback2.useMemo(() => {
    const items = [callback1.wrapper, { maxHeight: ref - sharedState - set - 16 }];
    return items;
  }, items13);
  const effect9 = callback2.useEffect(() => {
    if (ref.length > 0) {
      if (!sharedState) {
        ref(sharedState[43]).track(outer1_25.LAUNCHPAD_SEARCHED);
        ref(true);
        const obj = ref(sharedState[43]);
      }
    }
    if (0 === ref.length) {
      ref(false);
    }
  }, items14);
  callback = undefined;
  callback2 = undefined;
  callback3 = undefined;
  callback = callback2.useRef(-1);
  const items15 = [callback1, ref];
  callback2 = callback2.useCallback(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      clearTimeout(ref2.current);
      callback("");
      const current = ref.current;
      if (current != null) {
        current.setText("");
      }
    }, 100);
  }, items15);
  callback3 = callback2.useCallback(() => {
    clearTimeout(ref.current);
  }, []);
  const effect10 = callback2.useEffect(() => () => clearTimeout(ref.current), []);
  const obj6 = callback1(sharedState[24]);
  const fn = function l() {
    return 0 === sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 7315121230879;
  fn.__initData = closure_39;
  const fn2 = function i(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (tmp) {
          callback1(sharedState[25]).runOnJS(callback2)();
          const obj2 = callback1(sharedState[25]);
        }
      }
      let tmp2 = arg0;
      if (!arg0) {
        tmp2 = arg0 === arg1;
      }
      if (!tmp2) {
        callback1(sharedState[25]).runOnJS(callback3)();
        const obj = callback1(sharedState[25]);
      }
    }
  };
  obj = { runOnJS: callback1(sharedState[25]).runOnJS, clearQuery: callback2, cancelTimeout: callback3 };
  fn2.__closure = obj;
  fn2.__workletHash = 6379173436444;
  fn2.__initData = closure_40;
  const animatedReaction = callback1(sharedState[25]).useAnimatedReaction(fn, fn2);
  obj = { style: memo2, children: null };
  const obj7 = callback1(sharedState[25]);
  const items16 = [callback2(closure_35, { tab: first3, setTab: tmp40[1], updateQuery: callback1, searchRef: ref, sharedState }), , ];
  let tmp53Result = 0 === str.trim().length && first3 === tmp39.SEARCH;
  if (tmp53Result) {
    obj1 = { selectedGuildId: null, setSelectedGuild: null, unreadPrivateChannelIds: null, unreadGuilds: null, guildHistory: null, visible: null };
    obj1[0] = first1;
    obj1[1] = tmp22;
    obj1[2] = stateFromStores;
    obj1[3] = stateFromStoresArray;
    obj1[4] = memo;
    obj1[5] = visible;
    tmp53Result = tmp53(tmp43(tmp17[44]), obj1);
  }
  items16[1] = tmp53Result;
  obj2 = { style: tmp.launchPadContent, children: null };
  if (first3 === constants.SEARCH) {
    if (tmp50) {
      obj3 = { results: null, query: null };
      obj3[0] = tmp9;
      obj3[1] = str;
      tmp53Result = tmp53(tmp16(tmp17[45]).SearchResults, obj3);
    }
    obj2[1] = tmp53Result;
    items16[2] = tmp53(tmp52, obj2);
    obj[1] = items16;
    return closure_28(tmp52, obj);
  }
  if (first3 === constants.SEARCH) {
    obj4 = { selectedGuildId: null, unreads: null, history: null, expandedHistory: null, toggleExpandedHistory: null };
    obj4[0] = first1;
    let unreads;
    if (deferredValue != null) {
      unreads = deferredValue.unreads;
    }
    if (unreads == null) {
      unreads = tmp7;
    }
    obj4[1] = unreads;
    let channelHistory;
    if (deferredValue != null) {
      channelHistory = deferredValue.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = tmp7;
    }
    obj4[2] = channelHistory;
    obj4[3] = tmp3;
    obj4[4] = callback;
    tmp53Result = tmp53(tmp16(tmp17[45]).InitialResults, obj4);
  } else if (first3 === tmp39.DEV_TOOLS) {
    tmp53Result = tmp53(tmp43(tmp17[46]), {});
  } else if (first3 === tmp39.MEMBERS) {
    tmp53Result = tmp53(tmp43(tmp17[47]), {});
  } else {
    tmp53Result = tmp53(tmp43(tmp17[48]), {});
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default memoResult;