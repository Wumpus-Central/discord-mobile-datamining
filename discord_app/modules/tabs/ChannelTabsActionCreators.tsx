// === Module 10087: ChannelTabsActionCreators ===

// Module 10087 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1098 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import transitionToChannel from "transitionToChannel" /* 5646 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5649 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5650 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 10086 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import ChannelTabsStore from "ChannelTabsStore" /* 10084 */;

require = fn;
function getTabProperties(kind) {
  const tabs = ChannelTabsStore.getTabs();
  const obj = { tab_kind: kind.kind, tab_route: null, channel_id: null, guild_id: null, tab_count: null, pinned_tab_count: null };
  let channelTabPageName = null;
  if ("route" === kind.kind) {
    channelTabPageName = ChannelTabRoutes.getChannelTabPageName(kind.routePath);
  }
  obj.tab_route = channelTabPageName;
  let channelId = null;
  if ("channel" === kind.kind) {
    channelId = kind.channelId;
  }
  obj.channel_id = channelId;
  let guildId = null;
  if ("channel" === kind.kind) {
    guildId = null;
    if (!obj3.isFavoritesGuildId(kind.guildId)) {
      guildId = kind.guildId;
    }
    obj3 = FavoritesUtils;
  }
  obj.guild_id = guildId;
  obj.tab_count = tabs.length;
  obj.pinned_tab_count = tabs.filter((pinned) => pinned.pinned).length;
  return obj;
}
function trackChannelTabOpened(activeTab, newTabPickerSelection) {
  let prop = newTabPickerSelection.newTabPickerSelection;
  ({ method, isNewTab, focused } = newTabPickerSelection);
  if (prop === undefined) {
    prop = null;
  }
  const tabs = ChannelTabsStore.getTabs();
  const obj = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let obj3 = ChannelTabRoutes;
      let channelTabPageName = obj3.getChannelTabPageName(tmp3.routePath);
      obj[channelTabPageName] = obj[channelTabPageName] + 1;
    }
    continue;
  }
  const obj2 = {};
  const merged = Object.assign(getTabProperties(activeTab));
  obj2.method = method;
  obj2.is_new_tab = isNewTab;
  obj2.focused = focused;
  obj2.tab_index = tabs.findIndex((id) => id.id === activeTab.id);
  obj2.is_pinned = activeTab.pinned;
  ({ friends: obj5.friends_tab_count, shop: obj5.shop_tab_count, quests: obj5.quests_tab_count, nitro: obj5.nitro_tab_count, conjure: obj5.conjure_tab_count, other: obj5.other_page_tab_count } = obj);
  let section;
  if (prop != null) {
    section = prop.section;
  }
  if (section == null) {
    section = null;
  }
  obj2.new_tab_section = section;
  let resultIndex;
  if (prop != null) {
    resultIndex = prop.resultIndex;
  }
  if (resultIndex == null) {
    resultIndex = null;
  }
  obj2.new_tab_result_index = resultIndex;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_OPENED, obj2);
}
function dispatchOpenTab(location, method) {
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  if (null == ChannelTabsStore.getActiveTab()) {
    const _location = location.location;
    const obj2 = {};
    if ("route" === _location.kind) {
      router_utils.transitionTo(_location.routePath, obj2.transitionExtras);
    } else {
      ({ channelId, guildId } = _location);
      let flag = obj2.openVoiceChat;
      if (flag === undefined) {
        flag = true;
      }
      const transitionExtras = obj2.transitionExtras;
      const channel = ChannelStore.getChannel(channelId);
      if (flag) {
        flag = null != channel;
      }
      if (flag) {
        flag = channel.isGuildVocal();
      }
      if (flag) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
      }
      if (null != guildId) {
        const obj3 = { openChannel: true };
        const obj7 = router_utils;
        const merged = Object.assign(transitionExtras);
        obj7.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj3);
        const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
      } else {
        transitionToChannel.transitionToChannel(channelId, transitionExtras);
      }
    }
    return null;
  } else {
    DispatcherDefault.dispatch(location);
    const tabs = ChannelTabsStore.getTabs();
    if (tabs.length <= ChannelTabsStore.getTabs().length) {
      return null;
    } else {
      const obj4 = { method, isNewTab: true, focused: ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id, newTabPickerSelection: tmp };
      trackChannelTabOpened(tabs[tabs.length - 1], obj4);
      return tabs[tabs.length - 1];
    }
  }
}
function navigateActiveTabHistory(arg0) {
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = ChannelTabsStore.getActiveTab();
    if (null == activeTab) {
      return ChannelTabsStore.Passthrough;
    } else {
      if ("channel" === activeTab.kind) {
        if (SelectedChannelStore.getCurrentlySelectedChannelId() !== activeTab.channelId) {
          return ChannelTabsStore.Passthrough;
        }
      }
      const sum = activeTab.index + arg0;
      if (sum >= 0) {
        if (sum < activeTab.entries.length) {
          const routePath = tmp17;
          if ("route" === activeTab.entries[sum].kind) {
            let fn = function h() {
              return router_utils.transitionTo(routePath.routePath);
            };
          } else if (null != ChannelStore.getChannel(tmp17.channelId)) {
            fn = function h() {
              ({ channelId, guildId } = closure_0);
              const obj = {};
              let flag = obj.openVoiceChat;
              if (flag === undefined) {
                flag = true;
              }
              const transitionExtras = obj.transitionExtras;
              const channel = ChannelStore.getChannel(channelId);
              if (flag) {
                flag = null != channel;
              }
              if (flag) {
                flag = channel.isGuildVocal();
              }
              if (flag) {
                ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
              }
              if (null != guildId) {
                const obj2 = { openChannel: true };
                const obj5 = router_utils;
                const merged = Object.assign(transitionExtras);
                obj5.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj2);
                const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
              } else {
                transitionToChannel.transitionToChannel(channelId, transitionExtras);
              }
            };
          } else if (null == tmp17.guildId) {
            return ChannelTabsStore.Noop;
          } else {
            ({ guildId: importDefault, channelId: dependencyMap } = tmp17);
            fn = function h() {
              return router_utils.transitionTo(metroImportDefault.CHANNEL(importDefault, dependencyMap));
            };
          }
          let str = "CHANNEL_TABS_FORWARD";
          if (-1 === arg0) {
            str = "CHANNEL_TABS_BACK";
          }
          let obj3 = { type: str };
          DispatcherDefault.dispatch(obj3);
          fn();
          return ChannelTabsStore.Navigated;
        }
      }
      return ChannelTabsStore.Noop;
    }
  } else {
    return ChannelTabsStore.Passthrough;
  }
}
function selectChannelTab(id, keyboard_cycle, arg2) {
  closure_0 = id;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    if (ChannelTabsStore.getActiveTabId() !== id) {
      const obj3 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: found.id };
      DispatcherDefault.dispatch(obj3);
      const obj7 = { method: keyboard_cycle, isNewTab: false, focused: true };
      trackChannelTabOpened(found, obj7);
      if (obj === undefined) {
        obj = {};
      }
      if ("route" === found.kind) {
        router_utils.transitionTo(found.routePath, obj.transitionExtras);
      } else {
        ({ channelId: channelId2, guildId: guildId2 } = found);
        let obj9 = obj;
        if (obj === undefined) {
          obj9 = {};
        }
        let flag3 = obj9.openVoiceChat;
        if (flag3 === undefined) {
          flag3 = true;
        }
        const transitionExtras2 = obj9.transitionExtras;
        const channel = ChannelStore.getChannel(channelId2);
        if (flag3) {
          flag3 = null != channel;
        }
        if (flag3) {
          flag3 = channel.isGuildVocal();
        }
        if (flag3) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId2, true);
          const tmp18Result = ChannelRTCActionCreatorsDefault;
        }
        if (null != guildId2) {
          const obj10 = { openChannel: true };
          const obj15 = router_utils;
          const merged = Object.assign(transitionExtras2);
          obj15.transitionTo(metroImportDefault.CHANNEL(guildId2, channelId2), obj10);
          const CHANNELResult = metroImportDefault.CHANNEL(guildId2, channelId2);
        } else {
          transitionToChannel.transitionToChannel(channelId2, transitionExtras2);
        }
      }
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        const obj11 = {};
        let flag = obj11.openVoiceChat;
        if (flag === undefined) {
          flag = true;
        }
        const transitionExtras = obj11.transitionExtras;
        const channel1 = ChannelStore.getChannel(channelId);
        if (flag) {
          flag = null != channel1;
        }
        if (flag) {
          flag = channel1.isGuildVocal();
        }
        if (flag) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
        }
        if (null != guildId) {
          const obj12 = { openChannel: true };
          const obj6 = router_utils;
          const merged1 = Object.assign(transitionExtras);
          obj6.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj12);
          const CHANNELResult1 = metroImportDefault.CHANNEL(guildId, channelId);
        } else {
          transitionToChannel.transitionToChannel(channelId, transitionExtras);
        }
      }
    }
  }
}
function trackChannelTabPinToggled(found1, source) {
  const tabs = ChannelTabsStore.getTabs();
  const obj2 = { tab_kind: found1.kind, tab_route: null, channel_id: null, guild_id: null, tab_count: null, pinned_tab_count: null };
  let channelTabPageName = null;
  if ("route" === found1.kind) {
    channelTabPageName = ChannelTabRoutes.getChannelTabPageName(found1.routePath);
  }
  obj2.tab_route = channelTabPageName;
  let channelId = null;
  if ("channel" === found1.kind) {
    channelId = found1.channelId;
  }
  obj2.channel_id = channelId;
  let guildId = null;
  if ("channel" === found1.kind) {
    guildId = null;
    if (!obj4.isFavoritesGuildId(found1.guildId)) {
      guildId = found1.guildId;
    }
    obj4 = FavoritesUtils;
  }
  const obj5 = {};
  obj2.guild_id = guildId;
  obj2.tab_count = tabs.length;
  obj2.pinned_tab_count = tabs.filter((pinned) => pinned.pinned).length;
  const merged = Object.assign(obj2);
  obj5.source = source;
  obj5.pinned = found1.pinned;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_PIN_TOGGLED, obj5);
}
const Constants = fn(1071);
({ AnalyticEvents: closure_6, Routes: metroImportDefault } = Constants);
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export function showCallViewOnJoin(id) {
  let isEnabledResult = ChannelTabsStore.isEnabled();
  if (isEnabledResult) {
    const channel = ChannelStore.getChannel(id);
    let isGuildVocalResult;
    if (channel != null) {
      isGuildVocalResult = channel.isGuildVocal();
    }
    isEnabledResult = true === isGuildVocalResult;
  }
  if (isEnabledResult) {
    ChannelRTCActionCreatorsDefault.updateChatOpen(id, false);
  }
}
export { trackChannelTabOpened };
export function openChannelTab(channelId, guildId, method) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  dispatchOpenTab({ type: "CHANNEL_TABS_OPEN", location: { kind: "channel", channelId, guildId }, background: true, sourceTabId: activeTabId }, method);
  const obj = { type: "CHANNEL_TABS_OPEN", location: { kind: "channel", channelId, guildId }, background: true, sourceTabId: activeTabId };
}
export function openChannelTabActive(id, guildId, method, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let sourceTabId = obj.sourceTabId;
  if (sourceTabId === undefined) {
    sourceTabId = ChannelTabsStore.getActiveTabId();
  }
  let prop = obj.newTabPickerSelection;
  if (prop === undefined) {
    prop = null;
  }
  let tmp3 = null != dispatchOpenTab({ type: "CHANNEL_TABS_OPEN", location: { kind: "channel", channelId: id, guildId }, sourceTabId }, method, prop);
  if (tmp3) {
    tmp3 = SelectedChannelStore.getCurrentlySelectedChannelId() !== id;
  }
  if (tmp3) {
    const obj3 = {};
    let flag = obj3.openVoiceChat;
    if (flag === undefined) {
      flag = true;
    }
    const transitionExtras = obj3.transitionExtras;
    const channel = ChannelStore.getChannel(id);
    if (flag) {
      flag = null != channel;
    }
    if (flag) {
      flag = channel.isGuildVocal();
    }
    if (flag) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const obj4 = { openChannel: true };
      const obj7 = router_utils;
      const merged = Object.assign(transitionExtras);
      obj7.transitionTo(metroImportDefault.CHANNEL(guildId, id), obj4);
      const CHANNELResult = metroImportDefault.CHANNEL(guildId, id);
    } else {
      transitionToChannel.transitionToChannel(id, transitionExtras);
    }
  }
  const obj2 = { type: "CHANNEL_TABS_OPEN", location: { kind: "channel", channelId: id, guildId }, sourceTabId };
}
export function openTabWithoutHistory(tabLocationForPath, method) {
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  return null != dispatchOpenTab({ type: "CHANNEL_TABS_OPEN", location: tabLocationForPath, sourceTabId: null }, method, tmp);
}
export function openFriendsTabActive(method) {
  const obj = { type: "CHANNEL_TABS_OPEN", location: ChannelTabRoutes.getFriendsTabLocation() };
  let tmp3 = null != dispatchOpenTab(obj, method);
  if (tmp3) {
    tmp3 = router_utils.getHistory().location.pathname !== metroImportDefault.FRIENDS;
    const tmpResult = router_utils;
  }
  if (tmp3) {
    router_utils.transitionTo(metroImportDefault.FRIENDS);
    const tmpResult2 = router_utils;
  }
}
export function navigateToRoute(routePath, routeLabel) {
  const activeTabId = ChannelTabsStore.getActiveTabId();
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel });
  const activeTab = ChannelTabsStore.getActiveTab();
  if (tmp4) {
    trackChannelTabOpened(activeTab, { method: "page_navigation", isNewTab: true, focused: true });
  }
  const obj2 = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
  tmp4 = null != activeTabId && null != activeTab && activeTab.id !== activeTabId;
}
export { TabHistoryNavResult };
export function goBackInActiveTab() {
  return navigateActiveTabHistory(-1);
}
export function goForwardInActiveTab() {
  return navigateActiveTabHistory(1);
}
export function setChannelTabsEnabled(enabled) {
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled });
}
export { selectChannelTab };
export function switchToOpenChannelTab(dMFromUserId, quick_switcher, transitionExtras) {
  closure_0 = dMFromUserId;
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = ChannelTabsStore.getActiveTab();
    let kind;
    if (activeTab != null) {
      kind = activeTab.kind;
    }
    if ("channel" === kind) {
      if (activeTab.channelId === dMFromUserId) {
        return false;
      }
    }
    const tabs = ChannelTabsStore.getTabs();
    const found = tabs.find((kind) => {
      let tmp = "channel" === kind.kind;
      if (tmp) {
        tmp = kind.channelId === closure_0;
      }
      return tmp;
    });
    let flag2 = null != found;
    if (flag2) {
      const obj2 = { openVoiceChat: false, transitionExtras };
      selectChannelTab(found.id, quick_switcher, obj2);
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
export function cycleChannelTab(arg0) {
  const tabs = ChannelTabsStore.getTabs();
  if (tabs.length > 1) {
    const findIndexResult = tabs.findIndex((id) => id.id === activeTabId.getActiveTabId());
    if (-1 !== findIndexResult) {
      selectChannelTab(tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id, "keyboard_cycle");
    }
  }
}
export function moveChannelTab(tabId, toIndex) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const findIndexResult = tabs.findIndex((id) => id.id === closure_0);
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_MOVE", tabId, toIndex });
  const tabs1 = ChannelTabsStore.getTabs();
  const findIndexResult1 = tabs1.findIndex((id) => id.id === closure_0);
  if (tmp6) {
    const tabs2 = ChannelTabsStore.getTabs();
    const obj4 = { tab_kind: tabs1[findIndexResult1].kind, tab_route: null, channel_id: null, guild_id: null, tab_count: null, pinned_tab_count: null };
    let channelTabPageName = null;
    if ("route" === tabs1[findIndexResult1].kind) {
      channelTabPageName = ChannelTabRoutes.getChannelTabPageName(tmp8.routePath);
    }
    obj4.tab_route = channelTabPageName;
    let channelId = null;
    if ("channel" === tabs1[findIndexResult1].kind) {
      channelId = tmp8.channelId;
    }
    obj4.channel_id = channelId;
    let guildId = null;
    if ("channel" === tabs1[findIndexResult1].kind) {
      guildId = null;
      if (!obj9.isFavoritesGuildId(tmp8.guildId)) {
        guildId = tmp8.guildId;
      }
      obj9 = FavoritesUtils;
    }
    const obj5 = {};
    obj4.guild_id = guildId;
    obj4.tab_count = tabs2.length;
    obj4.pinned_tab_count = tabs2.filter((pinned) => pinned.pinned).length;
    const merged = Object.assign(obj4);
    obj5.from_index = findIndexResult;
    obj5.to_index = findIndexResult1;
    obj5.is_pinned = tabs1[findIndexResult1].pinned;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_REORDERED, obj5);
    const tmp2Result = AppAnalyticsUtilsDefault;
  }
  const obj2 = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  tmp6 = -1 !== findIndexResult && -1 !== findIndexResult1 && findIndexResult1 !== findIndexResult;
}
export function setChannelTabPinned(tabId, pinned, source) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  pinned = undefined;
  if (found != null) {
    pinned = found.pinned;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId, pinned });
  const tabs1 = ChannelTabsStore.getTabs();
  const found1 = tabs1.find((id) => id.id === closure_0);
  if (tmp5) {
    trackChannelTabPinToggled(found1, source);
  }
  const obj3 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  tmp5 = null != found1 && pinned !== found1.pinned;
}
export { trackChannelTabPinToggled };
export function closeChannelTab(tabId, source) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    const tmp29 = ChannelTabsStore.getActiveTabId() === tabId;
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    DispatcherDefault.dispatch(obj2);
    const tabs1 = ChannelTabsStore.getTabs();
    const someResult = tabs1.some((id) => id.id === closure_0);
    if (!someResult) {
      const tabs2 = ChannelTabsStore.getTabs();
      const obj3 = { tab_kind: found.kind, tab_route: null, channel_id: null, guild_id: null, tab_count: null, pinned_tab_count: null };
      let channelTabPageName = null;
      if ("route" === found.kind) {
        channelTabPageName = ChannelTabRoutes.getChannelTabPageName(found.routePath);
      }
      obj3.tab_route = channelTabPageName;
      let channelId1 = null;
      if ("channel" === found.kind) {
        channelId1 = found.channelId;
      }
      obj3.channel_id = channelId1;
      let guildId1 = null;
      if ("channel" === found.kind) {
        guildId1 = null;
        if (!obj5.isFavoritesGuildId(found.guildId)) {
          guildId1 = found.guildId;
        }
        obj5 = FavoritesUtils;
      }
      const obj6 = {};
      obj3.guild_id = guildId1;
      obj3.tab_count = tabs2.length;
      obj3.pinned_tab_count = tabs2.filter((pinned) => pinned.pinned).length;
      const merged = Object.assign(obj3);
      obj6.source = source;
      obj6.was_active = tmp29;
      obj6.was_pinned = found.pinned;
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_CLOSED, obj6);
      const tmp30Result = AppAnalyticsUtilsDefault;
    }
    if (tmp29) {
      const activeTab = ChannelTabsStore.getActiveTab();
      if (null != activeTab) {
        if (!someResult) {
          trackChannelTabOpened(activeTab, { method: "close", isNewTab: false, focused: true });
        }
        const obj7 = {};
        if ("route" === activeTab.kind) {
          router_utils.transitionTo(activeTab.routePath, obj7.transitionExtras);
        } else {
          ({ channelId, guildId } = activeTab);
          let flag = obj7.openVoiceChat;
          if (flag === undefined) {
            flag = true;
          }
          const transitionExtras = obj7.transitionExtras;
          const channel = ChannelStore.getChannel(channelId);
          if (flag) {
            flag = null != channel;
          }
          if (flag) {
            flag = channel.isGuildVocal();
          }
          if (flag) {
            ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
            const tmp30Result2 = ChannelRTCActionCreatorsDefault;
          }
          if (null != guildId) {
            const obj8 = { openChannel: true };
            const obj11 = router_utils;
            const merged1 = Object.assign(transitionExtras);
            obj11.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj8);
            const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
          } else {
            transitionToChannel.transitionToChannel(channelId, transitionExtras);
          }
        }
      }
    }
  }
}