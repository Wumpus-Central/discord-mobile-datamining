// === Module 10719: ChannelTabsActionCreators ===

// Module 10719 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import ChannelTabsStore from "ChannelTabsStore" /* 10720 */;
import size from "module_2" /* 2 */;

function navigateToTabLocation(found) {
  let channelId;
  let guildId;
  if ("route" === found.kind) {
    const obj4 = router_utils;
    obj4.transitionTo(found.routePath);
  } else {
    ({ channelId, guildId } = found);
    const channel = ChannelStore.getChannel(channelId);
    const tmp = null != channel && channel.isGuildVocal();
    if (tmp) {
      const obj = ChannelRTCActionCreatorsDefault;
      obj.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj3 = router_utils;
      obj3.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj2 = transitionToChannel;
      obj2.transitionToChannel(channelId);
    }
  }
}
function openChannelTabActive(id, guildId) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(id);
    const tmp4 = null != channel && channel.isGuildVocal();
    if (tmp4) {
      const obj4 = ChannelRTCActionCreatorsDefault;
      obj4.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const obj6 = router_utils;
      obj6.transitionTo(Routes.CHANNEL(guildId, id), { openChannel: true });
    } else {
      const obj5 = transitionToChannel;
      obj5.transitionToChannel(id);
    }
  }
  if (!ChannelTabsStore.isAtMaxTabs()) {
    const obj3 = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: id, guildId, active: true };
    const obj7 = DispatcherDefault;
    obj7.dispatch(obj3);
    if (SelectedChannelStore.getCurrentlySelectedChannelId() !== id) {
      const channel1 = ChannelStore.getChannel(id);
      const tmp18 = null != channel1 && channel1.isGuildVocal();
      if (tmp18) {
        const tmp15Result = ChannelRTCActionCreatorsDefault;
        tmp15Result.updateChatOpen(id, true);
      }
      if (null != guildId) {
        const obj11 = router_utils;
        obj11.transitionTo(Routes.CHANNEL(guildId, id), { openChannel: true });
      } else {
        const obj10 = transitionToChannel;
        obj10.transitionToChannel(id);
      }
    }
  }
}
function navigateActiveTabHistory(arg0) {
  let channelId;
  let guildId;
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
          let Navigated;
          if ("route" === activeTab.entries[sum].kind) {
            let str3 = "CHANNEL_TABS_FORWARD";
            const dispatch2 = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (-1 === arg0) {
              str3 = "CHANNEL_TABS_BACK";
            }
            const obj2 = { type: str3 };
            dispatch2(obj2);
            const obj10 = router_utils;
            obj10.transitionTo(activeTab.entries[sum].routePath);
            Navigated = ChannelTabsStore.Navigated;
          } else if (null == ChannelStore.getChannel(activeTab.entries[sum].channelId)) {
            let Noop;
            if (null != activeTab.entries[sum].guildId) {
              let str2 = "CHANNEL_TABS_FORWARD";
              const dispatch = DispatcherDefault.dispatch;
              DispatcherDefault;
              if (-1 === arg0) {
                str2 = "CHANNEL_TABS_BACK";
              }
              const obj3 = { type: str2 };
              dispatch(obj3);
              const obj8 = router_utils;
              obj8.transitionTo(Routes.CHANNEL(activeTab.entries[sum].guildId, activeTab.entries[sum].channelId));
              Noop = ChannelTabsStore.Navigated;
            } else {
              Noop = ChannelTabsStore.Noop;
            }
            Navigated = Noop;
          } else {
            let str = "CHANNEL_TABS_FORWARD";
            const dispatch3 = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (-1 === arg0) {
              str = "CHANNEL_TABS_BACK";
            }
            const obj4 = { type: str };
            dispatch3(obj4);
            ({ channelId, guildId } = activeTab.entries[sum]);
            const channel = ChannelStore.getChannel(channelId);
            const tmp8 = null != channel && channel.isGuildVocal();
            if (tmp8) {
              const tmp36Result = ChannelRTCActionCreatorsDefault;
              tmp36Result.updateChatOpen(channelId, true);
            }
            if (null != guildId) {
              const obj6 = router_utils;
              obj6.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
            } else {
              const obj5 = transitionToChannel;
              obj5.transitionToChannel(channelId);
            }
            Navigated = ChannelTabsStore.Navigated;
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
const Routes = Constants.Routes;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export const openChannelTab = function openChannelTab(channelId, guildId) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(channelId);
    const tmp4 = null != channel && channel.isGuildVocal();
    if (tmp4) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      obj2.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj4 = router_utils;
      obj4.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(channelId);
    }
  }
  const obj = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId, guildId };
  const obj5 = DispatcherDefault;
  obj5.dispatch(obj);
};
export { openChannelTabActive };
export const openDuplicateTab = function openDuplicateTab() {
  const activeTab = ChannelTabsStore.getActiveTab();
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!ChannelTabsStore.isAtMaxTabs()) {
        const obj4 = { type: "CHANNEL_TABS_OPEN", kind: "route", routePath: null, routeLabel: null, active: true };
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = activeTab);
        const obj2 = DispatcherDefault;
        obj2.dispatch(obj4);
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
    openChannelTabActive(channelId, guildId);
  }
};
export const navigateToRoute = function navigateToRoute(routePath, routeLabel) {
  if (0 !== ChannelTabsStore.getTabs().length) {
    const obj2 = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export { TabHistoryNavResult };
export const goBackInActiveTab = function goBackInActiveTab() {
  return navigateActiveTabHistory(-1);
};
export const goForwardInActiveTab = function goForwardInActiveTab() {
  return navigateActiveTabHistory(1);
};
export const setChannelTabsEnabled = function setChannelTabsEnabled(enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_SET_ENABLED", enabled };
  obj.dispatch(obj2);
};
export const selectChannelTab = function selectChannelTab(tabId) {
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === id);
  const tmp2 = null != found && ChannelTabsStore.getActiveTabId() !== tabId;
  if (tmp2) {
    const obj3 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
    navigateToTabLocation(found);
  }
};
export const cycleChannelTab = function cycleChannelTab(arg0) {
  let activeTabId;
  const tabs = ChannelTabsStore.getTabs();
  if (tabs.length > 1) {
    const findIndexResult = tabs.findIndex((id) => id.id === activeTabId.getActiveTabId());
    if (-1 !== findIndexResult) {
      const id = tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id;
      const tabs1 = ChannelTabsStore.getTabs();
      const found = tabs1.find((id) => id.id === id);
      const tmp = null != found && ChannelTabsStore.getActiveTabId() !== id;
      if (tmp) {
        const obj3 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: id };
        const obj2 = DispatcherDefault;
        obj2.dispatch(obj3);
        navigateToTabLocation(found);
      }
    }
  }
};
export const moveChannelTab = function moveChannelTab(tabId, toIndex) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  obj.dispatch(obj2);
};
export const setChannelTabPinned = function setChannelTabPinned(tabId, pinned) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  obj.dispatch(obj2);
};
export const closeChannelTab = function closeChannelTab(tabId) {
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  if (-1 !== tabs.findIndex((id) => id.id === closure_0)) {
    const activeTabId = ChannelTabsStore.getActiveTabId();
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj2);
    if (activeTabId === tabId) {
      const activeTab = ChannelTabsStore.getActiveTab();
      if (null != activeTab) {
        navigateToTabLocation(activeTab);
      }
    }
  }
};