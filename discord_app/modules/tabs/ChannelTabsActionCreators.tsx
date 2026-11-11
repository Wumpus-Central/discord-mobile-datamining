// === Module 10212: ChannelTabsActionCreators ===

// Module 10212 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import matchPathCompat from "matchPathCompat" /* 5291 */;
import RouteUtils from "RouteUtils" /* 5304 */;
import transitionToChannel from "transitionToChannel" /* 6000 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6004 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import ChannelTabsStore from "ChannelTabsStore" /* 10208 */;

require = fn;
function navigateToTabLocation(activeTab) {
  if ("route" === activeTab.kind) {
    router_utils.transitionTo(activeTab.routePath);
  } else {
    ({ channelId, guildId } = activeTab);
    const channel = ChannelStore.getChannel(channelId);
    if (tmp) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp = null != channel && channel.isGuildVocal();
  }
}
function getPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (first === metroImportDefault.FRIENDS) {
    return "friends";
  } else if (first === metroImportDefault.COLLECTIBLES_SHOP) {
    return "shop";
  } else if (first === metroImportDefault.QUEST_HOME) {
    return "quests";
  } else if (first === metroImportDefault.APPLICATION_STORE) {
    return "nitro";
  } else {
    const RouteParam = RouteUtils.RouteParam;
    const CHANNELResult = metroImportDefault.CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
    const obj3 = { path: CHANNELResult, exact: true };
    let str2 = "other";
    if (null != obj2.matchPath(first, obj3)) {
      str2 = "conjure";
    }
    return str2;
  }
}
function getTabProperties(found) {
  const tabs = ChannelTabsStore.getTabs();
  const obj = { tab_kind: found.kind, tab_route: null, channel_id: null, guild_id: null, tab_count: null, pinned_tab_count: null };
  let tmp = null;
  if ("route" === found.kind) {
    const first = found.routePath.split(/[?#]/)[0];
    let str3 = "friends";
    if (first !== metroImportDefault.FRIENDS) {
      str3 = "shop";
      if (first !== metroImportDefault.COLLECTIBLES_SHOP) {
        str3 = "quests";
        if (first !== metroImportDefault.QUEST_HOME) {
          str3 = "nitro";
          if (first !== metroImportDefault.APPLICATION_STORE) {
            const RouteParam = RouteUtils.RouteParam;
            const CHANNELResult = metroImportDefault.CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
            const obj3 = { path: CHANNELResult, exact: true };
            let str2 = "other";
            if (null != obj2.matchPath(first, obj3)) {
              str2 = "conjure";
            }
            str3 = str2;
            obj2 = matchPathCompat;
          }
        }
      }
    }
    tmp = str3;
  }
  obj.tab_route = tmp;
  let channelId = null;
  if ("channel" === found.kind) {
    channelId = found.channelId;
  }
  obj.channel_id = channelId;
  let guildId = null;
  if ("channel" === found.kind) {
    guildId = null;
    if (!obj4.isFavoritesGuildId(found.guildId)) {
      guildId = found.guildId;
    }
    obj4 = FavoritesUtils;
  }
  obj.guild_id = guildId;
  obj.tab_count = tabs.length;
  obj.pinned_tab_count = tabs.filter((pinned) => pinned.pinned).length;
  return obj;
}
function trackChannelTabOpened(tabs, close, is_new_tab, focused) {
  tabs = ChannelTabsStore.getTabs();
  const obj = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let tmp5 = getPageName(tmp2.routePath);
      obj[tmp5] = obj[tmp5] + 1;
    }
    continue;
  }
  const obj2 = {};
  const merged = Object.assign(getTabProperties(tabs));
  obj2.method = close;
  obj2.is_new_tab = is_new_tab;
  obj2.focused = focused;
  obj2.tab_index = tabs.findIndex((id) => id.id === tabs.id);
  obj2.is_pinned = tabs.pinned;
  ({ friends: obj4.friends_tab_count, shop: obj4.shop_tab_count, quests: obj4.quests_tab_count, conjure: obj4.conjure_tab_count } = obj);
  obj2.other_page_tab_count = obj.other + obj.nitro;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_OPENED, obj2);
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
          if ("route" === activeTab.entries[sum].kind) {
            let str3 = "CHANNEL_TABS_FORWARD";
            if (-1 === arg0) {
              str3 = "CHANNEL_TABS_BACK";
            }
            const obj2 = { type: str3 };
            DispatcherDefault.dispatch(obj2);
            router_utils.transitionTo(tmp34.routePath);
            let Navigated = ChannelTabsStore.Navigated;
          } else if (null == ChannelStore.getChannel(tmp34.channelId)) {
            if (null != tmp34.guildId) {
              let str2 = "CHANNEL_TABS_FORWARD";
              if (-1 === arg0) {
                str2 = "CHANNEL_TABS_BACK";
              }
              const obj3 = { type: str2 };
              DispatcherDefault.dispatch(obj3);
              router_utils.transitionTo(metroImportDefault.CHANNEL(tmp34.guildId, tmp34.channelId));
              let Noop = ChannelTabsStore.Navigated;
            } else {
              Noop = ChannelTabsStore.Noop;
            }
          } else {
            let str = "CHANNEL_TABS_FORWARD";
            if (-1 === arg0) {
              str = "CHANNEL_TABS_BACK";
            }
            const obj4 = { type: str };
            DispatcherDefault.dispatch(obj4);
            ({ channelId, guildId } = tmp34);
            const channel = ChannelStore.getChannel(channelId);
            if (tmp8) {
              ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
              const tmp35Result = ChannelRTCActionCreatorsDefault;
            }
            if (null != guildId) {
              router_utils.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
            } else {
              transitionToChannel.transitionToChannel(channelId);
            }
            Navigated = ChannelTabsStore.Navigated;
            tmp8 = null != channel && channel.isGuildVocal();
          }
          return Navigated;
        }
      }
      return ChannelTabsStore.Noop;
    }
  } else {
    return ChannelTabsStore.Passthrough;
  }
}
function selectChannelTab(id, keyboard_cycle) {
  closure_0 = id;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    if (ChannelTabsStore.getActiveTabId() !== id) {
      const obj6 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: found.id };
      DispatcherDefault.dispatch(obj6);
      trackChannelTabOpened(found, keyboard_cycle, false, true);
      navigateToTabLocation(found);
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        const channel = ChannelStore.getChannel(channelId);
        if (tmp2) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
        }
        if (null != guildId) {
          router_utils.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
        } else {
          transitionToChannel.transitionToChannel(channelId);
        }
        tmp2 = null != channel && channel.isGuildVocal();
      }
    }
  }
}
const Constants = fn(1072);
({ AnalyticEvents: closure_6, Routes: metroImportDefault } = Constants);
const StaticChannelRoute = fn(5099).StaticChannelRoute;
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
export function openChannelTab(channelId, guildId, close) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj5 = { kind: "channel", channelId, guildId, sourceTabId: activeTabId };
    const obj7 = { type: "CHANNEL_TABS_OPEN" };
    const merged = Object.assign(obj5);
    DispatcherDefault.dispatch(obj7);
    const tabs = ChannelTabsStore.getTabs();
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
    }
  } else {
    const channel = ChannelStore.getChannel(channelId);
    if (tmp3) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp3 = null != channel && channel.isGuildVocal();
  }
}
export function openChannelTabActive(id, guildId, quick_switcher, arg3) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj5 = { kind: "channel", channelId: id, guildId, active: true, sourceTabId: activeTabId };
    const obj7 = { type: "CHANNEL_TABS_OPEN" };
    const merged = Object.assign(obj5);
    DispatcherDefault.dispatch(obj7);
    const tabs = ChannelTabsStore.getTabs();
    let tmp20 = null;
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(tabs[tabs.length - 1], quick_switcher, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
      tmp20 = tmp22;
    }
    let tmp26 = null != tmp20;
    if (tmp26) {
      tmp26 = SelectedChannelStore.getCurrentlySelectedChannelId() !== id;
    }
    if (tmp26) {
      const channel = ChannelStore.getChannel(id);
      if (tmp29) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
        const tmp14Result = ChannelRTCActionCreatorsDefault;
      }
      if (null != guildId) {
        router_utils.transitionTo(metroImportDefault.CHANNEL(guildId, id), { openChannel: true });
      } else {
        transitionToChannel.transitionToChannel(id);
      }
      tmp29 = null != channel && channel.isGuildVocal();
    }
  } else {
    const channel1 = ChannelStore.getChannel(id);
    if (tmp3) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(metroImportDefault.CHANNEL(guildId, id), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(id);
    }
    tmp3 = null != channel1 && channel1.isGuildVocal();
  }
}
export function openCopyOfActiveTab(quick_switcher) {
  const activeTab = ChannelTabsStore.getActiveTab();
  let tmp2 = null;
  if (null != activeTab) {
    const obj2 = {};
    const merged = Object.assign(activeTab.entries[activeTab.index]);
    obj2.active = true;
    obj2.fresh = true;
    const obj4 = { type: "CHANNEL_TABS_OPEN" };
    const merged1 = Object.assign(obj2);
    DispatcherDefault.dispatch(obj4);
    const tabs = ChannelTabsStore.getTabs();
    let tmp11 = null;
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(tabs[tabs.length - 1], quick_switcher, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
      tmp11 = tmp13;
    }
    let id;
    if (tmp11 != null) {
      id = tmp11.id;
    }
    if (id == null) {
      id = null;
    }
    tmp2 = id;
  }
  return tmp2;
}
export function navigateToRoute(routePath, routeLabel) {
  const activeTabId = ChannelTabsStore.getActiveTabId();
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel });
  const activeTab = ChannelTabsStore.getActiveTab();
  if (tmp4) {
    trackChannelTabOpened(activeTab, "page_navigation", true, true);
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
    const obj3 = {};
    const merged = Object.assign(getTabProperties(tabs1[findIndexResult1]));
    obj3.from_index = findIndexResult;
    obj3.to_index = findIndexResult1;
    obj3.is_pinned = tabs1[findIndexResult1].pinned;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_REORDERED, obj3);
    const tmp2Result = AppAnalyticsUtilsDefault;
  }
  const obj = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  tmp6 = -1 !== findIndexResult && -1 !== findIndexResult1 && findIndexResult1 !== findIndexResult;
}
export function setChannelTabPinned(tabId, pinned, source) {
  closure_0 = tabId;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  pinned = undefined;
  if (found != null) {
    pinned = found.pinned;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId, pinned, scope: tmp });
  const tabs1 = ChannelTabsStore.getTabs();
  const found1 = tabs1.find((id) => id.id === closure_0);
  if (tmp8) {
    const obj4 = {};
    const merged = Object.assign(getTabProperties(found1));
    obj4.source = source;
    obj4.pinned = found1.pinned;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_PIN_TOGGLED, obj4);
    const tmp4Result = AppAnalyticsUtilsDefault;
  }
  const obj3 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned, scope: tmp };
  tmp8 = null != found1 && pinned !== found1.pinned;
}
export function trackChannelTabPinToggled(pinned, source) {
  const obj2 = {};
  const merged = Object.assign(getTabProperties(pinned));
  obj2.source = source;
  obj2.pinned = pinned.pinned;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_PIN_TOGGLED, obj2);
}
export function closeChannelTab(tabId, source) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    const tmp14 = ChannelTabsStore.getActiveTabId() === tabId;
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    DispatcherDefault.dispatch(obj2);
    const tabs1 = ChannelTabsStore.getTabs();
    const someResult = tabs1.some((id) => id.id === closure_0);
    if (!someResult) {
      const obj3 = {};
      const merged = Object.assign(getTabProperties(found));
      obj3.source = source;
      obj3.was_active = tmp14;
      obj3.was_pinned = found.pinned;
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_CLOSED, obj3);
      const tmp15Result = AppAnalyticsUtilsDefault;
    }
    if (tmp14) {
      const activeTab = ChannelTabsStore.getActiveTab();
      if (null != activeTab) {
        if (!someResult) {
          trackChannelTabOpened(activeTab, "close", false, true);
        }
        navigateToTabLocation(activeTab);
      }
    }
  }
}