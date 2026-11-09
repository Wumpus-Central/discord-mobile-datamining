// === Module 13632: ChannelTabsActionCreators ===

// Module 13632 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import FavoritesUtils from "FavoritesUtils" /* 5014 */;
import matchPathCompat from "matchPathCompat" /* 5176 */;
import RouteUtils from "RouteUtils" /* 5189 */;
import transitionToChannel from "transitionToChannel" /* 5885 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5889 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
import ChannelTabsStore from "ChannelTabsStore" /* 13630 */;

require = fn;
function navigateToTabLocation(activeTab) {
  if (flag === undefined) {
    flag = false;
  }
  if ("route" === activeTab.kind) {
    router_utils.transitionTo(activeTab.routePath);
  } else {
    ({ channelId, guildId } = activeTab);
    if (flag === undefined) {
      flag = false;
    }
    const channel = ChannelStore.getChannel(channelId);
    if (tmp3) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, !flag);
    }
    if (null != guildId) {
      router_utils.transitionTo(React5.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp3 = null != channel && channel.isGuildVocal();
  }
}
function getPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (first === React5.FRIENDS) {
    return "friends";
  } else if (first === React5.COLLECTIBLES_SHOP) {
    return "shop";
  } else if (first === React5.QUEST_HOME) {
    return "quests";
  } else {
    const RouteParam = RouteUtils.RouteParam;
    const CHANNELResult = React5.CHANNEL(RouteParam.guildId(), constants2.CONJURE, ":projectId?");
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
    if (first !== React5.FRIENDS) {
      str3 = "shop";
      if (first !== React5.COLLECTIBLES_SHOP) {
        str3 = "quests";
        if (first !== React5.QUEST_HOME) {
          const RouteParam = RouteUtils.RouteParam;
          const CHANNELResult = React5.CHANNEL(RouteParam.guildId(), constants2.CONJURE, ":projectId?");
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
  const obj = { friends: 0, shop: 0, quests: 0, conjure: 0, other: 0 };
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
  ({ friends: obj4.friends_tab_count, shop: obj4.shop_tab_count, quests: obj4.quests_tab_count, conjure: obj4.conjure_tab_count, other: obj4.other_page_tab_count } = obj);
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_OPENED, obj2);
}
function openChannelTabActive(id, guildId, quick_switcher) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(id);
    if (tmp4) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(React5.CHANNEL(guildId, id), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(id);
    }
    tmp4 = null != channel && channel.isGuildVocal();
  }
  if (!ChannelTabsStore.isAtMaxTabs()) {
    const obj3 = { kind: "channel", channelId: id, guildId, active: true };
    const obj7 = { type: "CHANNEL_TABS_OPEN" };
    const merged = Object.assign(obj3);
    DispatcherDefault.dispatch(obj7);
    const tabs = ChannelTabsStore.getTabs();
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(tabs[tabs.length - 1], quick_switcher, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
    }
    if (SelectedChannelStore.getCurrentlySelectedChannelId() !== id) {
      const channel1 = ChannelStore.getChannel(id);
      if (tmp26) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
        const tmp15Result = ChannelRTCActionCreatorsDefault;
      }
      if (null != guildId) {
        router_utils.transitionTo(React5.CHANNEL(guildId, id), { openChannel: true });
      } else {
        transitionToChannel.transitionToChannel(id);
      }
      tmp26 = null != channel1 && channel1.isGuildVocal();
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
              router_utils.transitionTo(React5.CHANNEL(tmp34.guildId, tmp34.channelId));
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
              router_utils.transitionTo(React5.CHANNEL(guildId, channelId), { openChannel: true });
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
function selectChannelTab(id, quick_switcher) {
  closure_0 = id;
  if (flag === undefined) {
    flag = false;
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    if (ChannelTabsStore.getActiveTabId() !== id) {
      const obj2 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: id };
      DispatcherDefault.dispatch(obj2);
      trackChannelTabOpened(found, quick_switcher, false, true);
      navigateToTabLocation(found, flag);
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        let flag4 = flag;
        if (flag === undefined) {
          flag4 = false;
        }
        const channel = ChannelStore.getChannel(channelId);
        if (tmp9) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, !flag4);
        }
        if (null != guildId) {
          router_utils.transitionTo(React5.CHANNEL(guildId, channelId), { openChannel: true });
        } else {
          transitionToChannel.transitionToChannel(channelId);
        }
        tmp9 = null != channel && channel.isGuildVocal();
      } else {
        let tmp2 = flag;
        if (flag) {
          const channel1 = ChannelStore.getChannel(found.channelId);
          let isGuildVocalResult;
          if (channel1 != null) {
            isGuildVocalResult = channel1.isGuildVocal();
          }
          tmp2 = true === isGuildVocalResult;
        }
        if (tmp2) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(found.channelId, false);
        }
      }
    }
  }
}
const Constants = fn(1072);
({ AnalyticEvents: metroImportDefault, Routes: closure_8 } = Constants);
const ChannelConstants = fn(4996);
({ isStaticChannelRoute: closure_9, StaticChannelRoute: closure_10 } = ChannelConstants);
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export { trackChannelTabOpened };
export function openChannelTab(channelId, guildId, close) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(channelId);
    if (tmp4) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(React5.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp4 = null != channel && channel.isGuildVocal();
  }
  const merged = Object.assign({ kind: "channel", channelId, guildId });
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_OPEN" });
  const tabs = ChannelTabsStore.getTabs();
  if (tabs.length > ChannelTabsStore.getTabs().length) {
    trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
  }
  const obj2 = { kind: "channel", channelId, guildId };
  const obj6 = { type: "CHANNEL_TABS_OPEN" };
}
export { openChannelTabActive };
export function openDuplicateTab(close) {
  const activeTab = ChannelTabsStore.getActiveTab();
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!ChannelTabsStore.isAtMaxTabs()) {
        const obj4 = { kind: "route", routePath: null, routeLabel: null, active: true };
        ({ routePath: obj2.routePath, routeLabel: obj2.routeLabel } = activeTab);
        const obj6 = { type: "CHANNEL_TABS_OPEN" };
        const merged = Object.assign(obj4);
        DispatcherDefault.dispatch(obj6);
        const tabs = ChannelTabsStore.getTabs();
        if (tabs.length > ChannelTabsStore.getTabs().length) {
          trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
        }
      }
    }
  }
  let channelId;
  if (activeTab != null) {
    channelId = activeTab.channelId;
  }
  if (channelId == null) {
    channelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  }
  if (null != channelId) {
    let guildId;
    if (activeTab != null) {
      guildId = activeTab.guildId;
    }
    if (guildId == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    openChannelTabActive(channelId, guildId, close);
  }
}
export function navigateToRoute(routePath, routeLabel) {
  const activeTabId = ChannelTabsStore.getActiveTabId();
  const tabs = ChannelTabsStore.getTabs();
  const set = new Set(tabs.map((id) => id.id));
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel });
  const activeTab = ChannelTabsStore.getActiveTab();
  if (tmp4) {
    trackChannelTabOpened(activeTab, "page_navigation", !set.has(activeTab.id), true);
  }
  const obj = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
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
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  pinned = undefined;
  if (found != null) {
    pinned = found.pinned;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId, pinned });
  const tabs1 = ChannelTabsStore.getTabs();
  const found1 = tabs1.find((id) => id.id === closure_0);
  if (tmp7) {
    const obj4 = {};
    const merged = Object.assign(getTabProperties(found1));
    obj4.source = source;
    obj4.pinned = found1.pinned;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_PIN_TOGGLED, obj4);
    const tmp3Result = AppAnalyticsUtilsDefault;
  }
  const obj3 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  tmp7 = null != found1 && pinned !== found1.pinned;
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