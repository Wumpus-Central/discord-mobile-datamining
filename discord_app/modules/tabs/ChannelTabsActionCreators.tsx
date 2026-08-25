// discord_app/modules/tabs/ChannelTabsActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import transitionTo from "../routing/router_utils.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import _modDef4609 from "../../actions/ChannelRTCActionCreators.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/SelectedChannelStore.tsx";
import closure_5 from "../../stores/SelectedGuildStore.tsx";
import closure_6 from "ChannelTabsStore.tsx";
import { Routes } from "../../Constants.tsx";
import { isStaticChannelRoute } from "../channel/ChannelConstants.tsx";

require = arg1;
function navigateToTabLocation(found) {
  if ("route" === found.kind) {
    transitionTo.transitionTo(found.routePath);
    const obj4 = transitionTo;
  } else {
    ({ channelId, guildId } = found);
    const channel = store.getChannel(channelId);
    if (tmp) {
      _modDef4609.updateChatOpen(channelId, true);
      obj = _modDef4609;
    }
    if (null != guildId) {
      transitionTo.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
      const obj3 = transitionTo;
    } else {
      transitionToChannel.transitionToChannel(channelId);
      const obj2 = transitionToChannel;
    }
    tmp = null != channel && channel.isGuildVocal();
  }
}
function openChannelTabActive(closure_0, guildId) {
  obj = store2;
  const currentlySelectedChannelId = store2.getCurrentlySelectedChannelId();
  if (0 === store3.getTabs().length) {
    const channel = store.getChannel(closure_0);
    if (tmp4) {
      _modDef4609.updateChatOpen(closure_0, true);
      const obj4 = _modDef4609;
    }
    if (null != guildId) {
      transitionTo.transitionTo(Routes.CHANNEL(guildId, closure_0), { openChannel: true });
      const obj6 = transitionTo;
    } else {
      transitionToChannel.transitionToChannel(closure_0);
      const obj5 = transitionToChannel;
    }
    tmp4 = null != channel && channel.isGuildVocal();
  }
  if (!store3.isAtMaxTabs()) {
    obj = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: null, guildId: null, active: true };
    obj[2] = closure_0;
    obj[3] = guildId;
    dispatcherDefault.dispatch(obj);
    if (obj.getCurrentlySelectedChannelId() !== closure_0) {
      const channel1 = store.getChannel(closure_0);
      if (tmp18) {
        tmp15(4609).updateChatOpen(closure_0, true);
        const tmp15Result = tmp15(4609);
      }
      if (null != guildId) {
        transitionTo.transitionTo(Routes.CHANNEL(guildId, closure_0), { openChannel: true });
        const obj11 = transitionTo;
      } else {
        transitionToChannel.transitionToChannel(closure_0);
        const obj10 = transitionToChannel;
      }
      tmp18 = null != channel1 && channel1.isGuildVocal();
    }
    const obj7 = dispatcherDefault;
    tmp15 = importDefault;
  }
}
function navigateActiveTabHistory(arg0) {
  obj = store3;
  if (store3.isEnabled()) {
    const activeTab = obj.getActiveTab();
    if (null == activeTab) {
      return obj.Passthrough;
    } else {
      if ("channel" === activeTab.kind) {
        if (store2.getCurrentlySelectedChannelId() !== activeTab.channelId) {
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
            obj = { type: null };
            obj[0] = str3;
            dispatcherDefault.dispatch(obj);
            const obj10 = dispatcherDefault;
            transitionTo.transitionTo(tmp34.routePath);
            let Navigated = obj.Navigated;
            const obj12 = transitionTo;
          } else {
            if (null == store.getChannel(tmp34.channelId)) {
              if (null != tmp34.guildId) {
                let str2 = "CHANNEL_TABS_FORWARD";
                if (-1 === arg0) {
                  str2 = "CHANNEL_TABS_BACK";
                }
                obj = { type: null };
                obj[0] = str2;
                dispatcherDefault.dispatch(obj);
                const obj7 = dispatcherDefault;
                transitionTo.transitionTo(Routes.CHANNEL(tmp34.guildId, tmp34.channelId));
                let Noop = obj.Navigated;
                const obj9 = transitionTo;
              } else {
                Noop = obj.Noop;
              }
            } else {
              let str = "CHANNEL_TABS_FORWARD";
              if (-1 === arg0) {
                str = "CHANNEL_TABS_BACK";
              }
              obj1 = { type: null };
              obj1[0] = str;
              dispatcherDefault.dispatch(obj1);
              ({ channelId, guildId } = tmp34);
              const channel = obj13.getChannel(channelId);
              const obj14 = dispatcherDefault;
              const tmp35 = importDefault;
              if (tmp8) {
                tmp35(4609).updateChatOpen(channelId, true);
                const tmp35Result = tmp35(4609);
              }
              if (null != guildId) {
                transitionTo.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
                const obj6 = transitionTo;
              } else {
                transitionToChannel.transitionToChannel(channelId);
                const obj5 = transitionToChannel;
              }
              Navigated = obj.Navigated;
              tmp8 = null != channel && channel.isGuildVocal();
            }
            obj13 = store;
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
let obj = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const result = require("set").fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export const openChannelTab = function openChannelTab(channelId, guildId) {
  const currentlySelectedChannelId = store2.getCurrentlySelectedChannelId();
  if (0 === store3.getTabs().length) {
    const channel = store.getChannel(channelId);
    if (tmp4) {
      _modDef4609.updateChatOpen(channelId, true);
      const obj2 = _modDef4609;
    }
    if (null != guildId) {
      transitionTo.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
      const obj4 = transitionTo;
    } else {
      transitionToChannel.transitionToChannel(channelId);
      const obj3 = transitionToChannel;
    }
    tmp4 = null != channel && channel.isGuildVocal();
  }
  dispatcherDefault.dispatch({ type: "CHANNEL_TABS_OPEN", kind: "channel", channelId, guildId });
};
export { openChannelTabActive };
export const openDuplicateTab = function openDuplicateTab() {
  obj = store3;
  const activeTab = store3.getActiveTab();
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!obj.isAtMaxTabs()) {
        obj = { type: "CHANNEL_TABS_OPEN", kind: "route", routePath: null, routeLabel: null, active: true };
        ({ routePath: obj3[2], routeLabel: obj3[3] } = activeTab);
        dispatcherDefault.dispatch(obj);
        const obj2 = dispatcherDefault;
      }
    }
  }
  let channelId;
  if (activeTab != null) {
    channelId = activeTab.channelId;
  }
  if (channelId == null) {
    channelId = store2.getCurrentlySelectedChannelId();
  }
  if (null != channelId) {
    let guildId;
    if (activeTab != null) {
      guildId = activeTab.guildId;
    }
    if (guildId == null) {
      guildId = guildId.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    openChannelTabActive(channelId, guildId);
    const tmp7 = openChannelTabActive;
  }
};
export const navigateToRoute = function navigateToRoute(arg0, arg1) {
  if (0 !== store3.getTabs().length) {
    obj = dispatcherDefault;
    obj = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: null, routeLabel: null };
    obj[1] = arg0;
    obj[2] = arg1;
    obj.dispatch(obj);
  }
};
export const TabHistoryNavResult = obj;
export const goBackInActiveTab = function goBackInActiveTab() {
  return navigateActiveTabHistory(-1);
};
export const goForwardInActiveTab = function goForwardInActiveTab() {
  return navigateActiveTabHistory(1);
};
export const setChannelTabsEnabled = function setChannelTabsEnabled(enabled) {
  obj = dispatcherDefault;
  obj = { type: "CHANNEL_TABS_SET_ENABLED", enabled };
  obj.dispatch(obj);
};
export const selectChannelTab = function selectChannelTab(arg0) {
  closure_0 = arg0;
  obj = store3;
  const tabs = store3.getTabs();
  const found = tabs.find((id) => id.id === id);
  if (tmp2) {
    obj = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: null };
    obj[1] = arg0;
    dispatcherDefault.dispatch(obj);
    navigateToTabLocation(found);
    const obj2 = dispatcherDefault;
  }
};
export const cycleChannelTab = function cycleChannelTab(arg0) {
  obj = store3;
  const tabs = store3.getTabs();
  if (tabs.length > 1) {
    const findIndexResult = tabs.findIndex((id) => id.id === activeTabId.getActiveTabId());
    if (-1 !== findIndexResult) {
      const id = tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id;
      const tabs1 = obj.getTabs();
      const found = tabs1.find((id) => id.id === id);
      if (tmp) {
        obj = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: null };
        obj[1] = id;
        dispatcherDefault.dispatch(obj);
        navigateToTabLocation(found);
        const obj2 = dispatcherDefault;
      }
      tmp = null != found && obj.getActiveTabId() !== id;
    }
  }
};
export const moveChannelTab = function moveChannelTab(tabId, toIndex) {
  obj = dispatcherDefault;
  obj = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  obj.dispatch(obj);
};
export const setChannelTabPinned = function setChannelTabPinned(tabId, pinned) {
  obj = dispatcherDefault;
  obj = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  obj.dispatch(obj);
};
export const closeChannelTab = function closeChannelTab(arg0) {
  closure_0 = arg0;
  obj = store3;
  const tabs = store3.getTabs();
  if (-1 !== tabs.findIndex((id) => id.id === closure_0)) {
    const activeTabId = obj.getActiveTabId();
    obj = { type: "CHANNEL_TABS_CLOSE", tabId: null };
    obj[1] = arg0;
    dispatcherDefault.dispatch(obj);
    if (activeTabId === arg0) {
      const activeTab = obj.getActiveTab();
      if (null != activeTab) {
        navigateToTabLocation(activeTab);
      }
    }
    const obj3 = dispatcherDefault;
  }
};