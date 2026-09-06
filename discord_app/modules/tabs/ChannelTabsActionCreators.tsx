// === Module 10989: ChannelTabsActionCreators ===

// Module 10989 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1100 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import ChannelTabsStore from "ChannelTabsStore" /* 10990 */;

require = fn;
function navigateToTabLocation(found) {
  if ("route" === found.kind) {
    router_utils.transitionTo(found.routePath);
  } else {
    ({ channelId, guildId } = found);
    const channel = ChannelStore.getChannel(channelId);
    if (tmp) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp = null != channel && channel.isGuildVocal();
  }
}
function openChannelTabActive(id, guildId) {
  let obj = SelectedChannelStore;
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(id);
    if (tmp4) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(Routes.CHANNEL(guildId, id), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(id);
    }
    tmp4 = null != channel && channel.isGuildVocal();
  }
  if (!ChannelTabsStore.isAtMaxTabs()) {
    obj = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: id, guildId, active: true };
    DispatcherDefault.dispatch(obj);
    if (obj.getCurrentlySelectedChannelId() !== id) {
      const channel1 = ChannelStore.getChannel(id);
      if (tmp18) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
        const tmp15Result = ChannelRTCActionCreatorsDefault;
      }
      if (null != guildId) {
        router_utils.transitionTo(Routes.CHANNEL(guildId, id), { openChannel: true });
      } else {
        transitionToChannel.transitionToChannel(id);
      }
      tmp18 = null != channel1 && channel1.isGuildVocal();
    }
  }
}
function navigateActiveTabHistory(arg0) {
  let obj = ChannelTabsStore;
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = obj.getActiveTab();
    if (null == activeTab) {
      return obj.Passthrough;
    } else {
      if ("channel" === activeTab.kind) {
        if (SelectedChannelStore.getCurrentlySelectedChannelId() !== activeTab.channelId) {
          return obj.Passthrough;
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
            obj = { type: str3 };
            DispatcherDefault.dispatch(obj);
            router_utils.transitionTo(tmp34.routePath);
            let Navigated = obj.Navigated;
          } else if (null == ChannelStore.getChannel(tmp34.channelId)) {
            if (null != tmp34.guildId) {
              let str2 = "CHANNEL_TABS_FORWARD";
              if (-1 === arg0) {
                str2 = "CHANNEL_TABS_BACK";
              }
              obj = { type: str2 };
              DispatcherDefault.dispatch(obj);
              router_utils.transitionTo(Routes.CHANNEL(tmp34.guildId, tmp34.channelId));
              let Noop = obj.Navigated;
            } else {
              Noop = obj.Noop;
            }
          } else {
            let str = "CHANNEL_TABS_FORWARD";
            if (-1 === arg0) {
              str = "CHANNEL_TABS_BACK";
            }
            const obj1 = { type: str };
            DispatcherDefault.dispatch(obj1);
            ({ channelId, guildId } = tmp34);
            const channel = ChannelStore.getChannel(channelId);
            if (tmp8) {
              ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
              const tmp35Result = ChannelRTCActionCreatorsDefault;
            }
            if (null != guildId) {
              router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
            } else {
              transitionToChannel.transitionToChannel(channelId);
            }
            Navigated = obj.Navigated;
            tmp8 = null != channel && channel.isGuildVocal();
          }
          return Navigated;
        }
      }
      return obj.Noop;
    }
  } else {
    return obj.Passthrough;
  }
}
const Routes = fn(1074).Routes;
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export const openChannelTab = function openChannelTab(channelId, guildId) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(channelId);
    if (tmp4) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp4 = null != channel && channel.isGuildVocal();
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_OPEN", kind: "channel", channelId, guildId });
  const obj = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId, guildId };
};
export { openChannelTabActive };
export const openDuplicateTab = function openDuplicateTab() {
  let obj = ChannelTabsStore;
  const activeTab = ChannelTabsStore.getActiveTab();
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!obj.isAtMaxTabs()) {
        obj = { type: "CHANNEL_TABS_OPEN", kind: "route", routePath: null, routeLabel: null, active: true };
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = activeTab);
        DispatcherDefault.dispatch(obj);
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
    const obj = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
    obj.dispatch(obj);
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
  const obj = { type: "CHANNEL_TABS_SET_ENABLED", enabled };
  obj.dispatch(obj);
};
export const selectChannelTab = function selectChannelTab(tabId) {
  closure_0 = tabId;
  let obj = ChannelTabsStore;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === id);
  if (tmp2) {
    obj = { type: "CHANNEL_TABS_SET_ACTIVE", tabId };
    DispatcherDefault.dispatch(obj);
    navigateToTabLocation(found);
  }
  tmp2 = null != found && obj.getActiveTabId() !== tabId;
};
export const cycleChannelTab = function cycleChannelTab(arg0) {
  let obj = ChannelTabsStore;
  const tabs = ChannelTabsStore.getTabs();
  if (tabs.length > 1) {
    const findIndexResult = tabs.findIndex((id) => id.id === activeTabId.getActiveTabId());
    if (-1 !== findIndexResult) {
      const id = tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id;
      const tabs1 = obj.getTabs();
      const found = tabs1.find((id) => id.id === id);
      if (tmp) {
        obj = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: id };
        DispatcherDefault.dispatch(obj);
        navigateToTabLocation(found);
      }
      tmp = null != found && obj.getActiveTabId() !== id;
    }
  }
};
export const moveChannelTab = function moveChannelTab(tabId, toIndex) {
  const obj = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  obj.dispatch(obj);
};
export const setChannelTabPinned = function setChannelTabPinned(tabId, pinned) {
  const obj = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  obj.dispatch(obj);
};
export const closeChannelTab = function closeChannelTab(tabId) {
  closure_0 = tabId;
  let obj = ChannelTabsStore;
  const tabs = ChannelTabsStore.getTabs();
  if (-1 !== tabs.findIndex((id) => id.id === closure_0)) {
    const activeTabId = obj.getActiveTabId();
    obj = { type: "CHANNEL_TABS_CLOSE", tabId };
    DispatcherDefault.dispatch(obj);
    if (activeTabId === tabId) {
      const activeTab = obj.getActiveTab();
      if (null != activeTab) {
        navigateToTabLocation(activeTab);
      }
    }
  }
};