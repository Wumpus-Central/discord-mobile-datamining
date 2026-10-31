// === Module 13385: ChannelTabsActionCreators ===

// Module 13385 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import transitionToChannel from "transitionToChannel" /* 5756 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5759 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import ChannelTabsStore from "ChannelTabsStore" /* 13383 */;

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
      router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      transitionToChannel.transitionToChannel(channelId);
    }
    tmp3 = null != channel && channel.isGuildVocal();
  }
}
function openChannelTabActive(id, guildId) {
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
    const obj3 = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: id, guildId, active: true };
    DispatcherDefault.dispatch(obj3);
    if (SelectedChannelStore.getCurrentlySelectedChannelId() !== id) {
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
              router_utils.transitionTo(Routes.CHANNEL(tmp34.guildId, tmp34.channelId));
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
              router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
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
function selectChannelTab(id) {
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
          router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
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
const Routes = fn(1072).Routes;
const isStaticChannelRoute = fn(4870).isStaticChannelRoute;
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export function openChannelTab(channelId, guildId) {
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
}
export { openChannelTabActive };
export function openDuplicateTab() {
  const activeTab = ChannelTabsStore.getActiveTab();
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!ChannelTabsStore.isAtMaxTabs()) {
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = activeTab);
        DispatcherDefault.dispatch({ type: "CHANNEL_TABS_OPEN", kind: "route", routePath: null, routeLabel: null, active: true });
        const obj4 = { type: "CHANNEL_TABS_OPEN", kind: "route", routePath: null, routeLabel: null, active: true };
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
}
export function navigateToRoute(routePath, routeLabel) {
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel });
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
      selectChannelTab(tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id);
    }
  }
}
export function moveChannelTab(tabId, toIndex) {
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_MOVE", tabId, toIndex });
}
export function setChannelTabPinned(tabId, pinned) {
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId, pinned });
}
export function closeChannelTab(tabId) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  if (-1 !== tabs.findIndex((id) => id.id === closure_0)) {
    const activeTabId = ChannelTabsStore.getActiveTabId();
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    DispatcherDefault.dispatch(obj2);
    if (activeTabId === tabId) {
      const activeTab = ChannelTabsStore.getActiveTab();
      if (null != activeTab) {
        navigateToTabLocation(activeTab);
      }
    }
  }
}