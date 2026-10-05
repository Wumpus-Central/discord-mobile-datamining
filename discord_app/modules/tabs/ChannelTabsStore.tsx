// discord_app/modules/tabs/ChannelTabsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import TabsExperimentDefault from "TabsExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f105009 = (id) => id.id === activeTabId;
function handleChannelDelete(channel) {
  let found;
  channel = channel.channel;
  let enabled = flag;
  if (enabled) {
    const obj = TabsExperimentDefault;
    enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    let tmp3 = channel;
    const obj2 = channel(1370);
    enabled = obj2.isDesktop();
  }
  if (enabled) {
    if (
      0 ===
      found.filter((kind) => "channel" === kind.kind && kind.channelId === channel.id && kind.id !== activeTabId).length
    ) {
      return false;
    } else {
      found = found.filter((kind) => {
        let tmp3 = !tmp;
        if ("channel" === kind.kind && kind.channelId === channel.id) {
          tmp3 = kind.id === activeTabId;
        }
        return tmp3;
      });
      let enabled2 = flag;
      if (enabled2) {
        const obj3 = TabsExperimentDefault;
        enabled2 = obj3.getConfig({ location: "ChannelTabsStore" }).enabled;
      }
      if (enabled2) {
        const obj4 = channel(1370);
        enabled2 = obj4.isDesktop();
      }
      let tmp10 = !enabled2;
      if (tmp10) {
        let tmp11 = 0 === found.length;
        if (!tmp11) {
          tmp11 = 1 === found.length && !found[0].pinned;
        }
        tmp10 = tmp11;
      }
      if (tmp10) {
        found = [];
        let c8 = null;
      }
    }
  } else {
    return false;
  }
}
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let tabs = [];
let activeTabId = null;
let closure_9 = 1;
let flag = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
  initialize(enabled) {
    this.waitFor(SelectedChannelStore, SelectedGuildStore);
    flag = undefined;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
    tabs = undefined;
    if (enabled != null) {
      tabs = enabled.tabs;
    }
    if (tabs == null) {
      tabs = [];
    }
    activeTabId = undefined;
    if (enabled != null) {
      activeTabId = enabled.activeTabId;
    }
    if (activeTabId == null) {
      activeTabId = null;
    }
    closure_9 =
      tabs.reduce((acc, id) => {
        const NumberResult = Number(id.id);
        let tmp2 = acc;
        if (Number.isFinite(NumberResult)) {
          tmp2 = acc;
          if (NumberResult > acc) {
            tmp2 = NumberResult;
          }
        }
        return tmp2;
      }, 0) + 1;
    const someResult = null == activeTabId || tabs.some((id) => id.id === activeTabId);
    if (!someResult) {
      const first = tabs[0];
      let id;
      if (first != null) {
        id = first.id;
      }
      if (id == null) {
        id = null;
      }
      activeTabId = id;
    }
  }
  getState() {
    return { tabs, activeTabId, enabled: flag };
  }
  getTabs() {
    return tabs;
  }
  getActiveTabId() {
    return activeTabId;
  }
  getActiveTab() {
    let found = tabs.find((id) => id.id === activeTabId);
    if (found == null) {
      found = null;
    }
    return found;
  }
  isEnabled() {
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = utils_PlatformUtils;
      enabled = obj2.isDesktop();
    }
    return enabled;
  }
  isUserOptedIn() {
    return flag;
  }
  isTabBarVisible() {
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = utils_PlatformUtils;
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      enabled = tabs.length >= 1;
    }
    return enabled;
  }
  isAtMaxTabs() {
    return tabs.length >= 25;
  }
  canGoBackInActiveTab() {
    const activeTab = this.getActiveTab();
    return null != activeTab && activeTab.index > 0;
  }
  canGoForwardInActiveTab() {
    const activeTab = this.getActiveTab();
    return null != activeTab && activeTab.index < activeTab.entries.length - 1;
  }
}
const prototype = ChannelTabsStore.prototype;
ChannelTabsStore.displayName = "ChannelTabsStore";
ChannelTabsStore.persistKey = "ChannelTabsStore";
let items = [
  (enabled) => {
    const obj = { tabs: [], activeTabId: null, enabled: flag };
    flag = undefined;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
    return obj;
  },
];
ChannelTabsStore.migrations = items;
let obj = {
  CHANNEL_TABS_OPEN: function handleOpenTab(kind) {
    let guildId;
    let items;
    let items2;
    if (tabs.length >= 25) {
      return false;
    } else {
      let obj9;
      if (0 === tabs.length) {
        const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
        if (null != currentlySelectedChannelId) {
          if (!isStaticChannelRoute(currentlySelectedChannelId)) {
            const obj = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
            guildId = SelectedGuildStore.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            const obj2 = { id: String(+closure_9), pinned: false, entries: items, index: 0 };
            const _String = String;
            closure_9 = tmp6 + 1;
            const merged = Object.assign(obj);
            items = [obj];
            const items1 = [obj2];
            tabs = items1;
            activeTabId = obj2.id;
          }
        }
      }
      if ("route" === kind.kind) {
        const obj5 = { kind: "route", routePath: null, routeLabel: null };
        ({ routePath: obj4.routePath, routeLabel: obj4.routeLabel } = kind);
        obj9 = obj5;
      } else {
        obj9 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj3.channelId, guildId: obj3.guildId } = kind);
      }
      const obj10 = { id: String(+closure_9), pinned: false, entries: items2, index: 0 };
      const _String2 = String;
      closure_9 = tmp13 + 1;
      const merged1 = Object.assign(obj9);
      items2 = [obj9];
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items3, tabs, 0)] = obj10;
      tabs = items3;
      const tmp19 = true !== kind.active && null != activeTabId;
      if (!tmp19) {
        activeTabId = obj10.id;
      }
    }
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else {
      let enabled = flag;
      if (enabled) {
        const obj = TabsExperimentDefault;
        enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
      }
      if (enabled) {
        const obj2 = utils_PlatformUtils;
        enabled = obj2.isDesktop();
      }
      if (enabled) {
        if (1 === tabs.length) {
          return false;
        }
      }
      const id = tabs[findIndexResult].id;
      const found = tabs.filter((id) => id.id !== tabId);
      tabs = found;
      let enabled2 = flag;
      const tmp8 = activeTabId;
      if (enabled2) {
        const obj3 = TabsExperimentDefault;
        enabled2 = obj3.getConfig({ location: "ChannelTabsStore" }).enabled;
      }
      if (enabled2) {
        const obj4 = utils_PlatformUtils;
        enabled2 = obj4.isDesktop();
      }
      let tmp14 = !enabled2;
      if (tmp14) {
        let tmp15 = 0 === found.length;
        if (!tmp15) {
          tmp15 = 1 === found.length && !found[0].pinned;
        }
        tmp14 = tmp15;
      }
      if (tmp14) {
        tabs = [];
        activeTabId = null;
      } else if (id === tmp8) {
        const _Math = Math;
        activeTabId = tabs[Math.min(Math, findIndexResult, tabs.length - 1)].id;
      }
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    let tmp = activeTabId !== tabId;
    if (tmp) {
      const tmp4 = null != tabs.find((id) => id.id === tabId);
      if (tmp4) {
        activeTabId = tabId;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    const toIndex = tabId.toIndex;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    const bound = Math.max(0, Math.min(toIndex, tabs.length - 1));
    if (-1 !== findIndexResult) {
      if (findIndexResult !== bound) {
        const items = [];
        HermesBuiltin.arraySpread(items, tabs, 0);
        items.splice(bound, 0, _slicedToArray(items.splice(findIndexResult, 1), 1)[0]);
        tabs = items;
      }
    }
    return false;
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    let closure_129_0;
    let pinned;
    ({ tabId: closure_129_0, pinned } = arg0);
    const found = tabs.find((id) => id.id === closure_1_0);
    if (null != found) {
      if (found.pinned !== pinned) {
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === closure_1_0) {
            const obj = { pinned };
            const merged = Object.assign(id);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return false;
  },
  CHANNEL_TABS_BACK: function handleTabHistoryBack() {
    let closure_7;
    const found = tabs.find(f105009);
    flag = false;
    if (null != found) {
      const sum = found.index + -1;
      require = sum;
      let closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        tabs = tabs.map((id) => {
          let entries;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: null, pinned: null, entries, index: require };
            ({ id: obj.id, pinned: obj.pinned } = id);
            entries = id.entries;
            const merged = Object.assign(closure_1);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_FORWARD: function handleTabHistoryForward() {
    let closure_7;
    const found = tabs.find(f105009);
    flag = false;
    if (null != found) {
      const sum = found.index + 1;
      require = sum;
      let closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        tabs = tabs.map((id) => {
          let entries;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: null, pinned: null, entries, index: require };
            ({ id: obj.id, pinned: obj.pinned } = id);
            entries = id.entries;
            const merged = Object.assign(closure_1);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_SET_ENABLED: function handleSetEnabled(enabled) {
    let guildId;
    let items;
    enabled = enabled.enabled;
    if (flag !== enabled) {
      flag = enabled;
      if (flag) {
        if (enabled) {
          const obj = TabsExperimentDefault;
          enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
        }
        if (enabled) {
          const obj2 = utils_PlatformUtils;
          enabled = obj2.isDesktop();
        }
        if (enabled) {
          if (tabs.length <= 0) {
            const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
            if (null != currentlySelectedChannelId) {
              if (!isStaticChannelRoute(currentlySelectedChannelId)) {
                const obj3 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
                guildId = SelectedGuildStore.getGuildId();
                if (guildId == null) {
                  guildId = null;
                }
                const obj4 = { id: String(+closure_9), pinned: false, entries: items, index: 0 };
                const _String = String;
                closure_9 = tmp16 + 1;
                const merged = Object.assign(obj3);
                flag = false;
                items = [obj3];
                const items1 = [obj4];
                tabs = items1;
                activeTabId = obj4.id;
              }
            }
          }
        }
      } else {
        tabs = [];
        activeTabId = null;
      }
    }
    return flag !== enabled;
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: function handleNavigateRoute(routePath) {
    let closure_7;
    let id;
    let items;
    routePath = routePath.routePath;
    let obj3;
    let enabled = flag;
    const routeLabel = routePath.routeLabel;
    if (flag) {
      let obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = obj3(1370);
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      if (0 !== tabs.length) {
        if (null != id) {
          const found = tabs.find((id) => id.id === id);
          if (null != found) {
            obj3 = { kind: "route", routePath, routeLabel };
            if (found.pinned) {
              if (tabs.length >= 25) {
                return false;
              } else {
                const obj4 = { id: String(+closure_9), pinned: false, entries: items, index: 0 };
                const _String = String;
                closure_9 = tmp9 + 1;
                let merged = Object.assign(obj3);
                items = [obj3];
                const items1 = [];
                items1[HermesBuiltin.arraySpread(items1, tabs, 0)] = obj4;
                tabs = items1;
                id = obj4.id;
              }
            } else {
              tabs = arr.map((id) => {
                let diff;
                if (id.id !== activeTabId) {
                  return id;
                } else {
                  const entries = id.entries;
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj3;
                  const obj = { id: null, pinned: null, entries: items, index: diff };
                  ({ id: obj.id, pinned: obj.pinned } = id);
                  diff = items.length - 1;
                  const merged = Object.assign(obj3);
                  return obj;
                }
              });
            }
          }
          return false;
        }
      }
    }
    return false;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let closure_7;
    let guildId;
    let items;
    let items2;
    ({ channelId, guildId } = arg0);
    let obj3;
    let enabled = flag;
    if (enabled) {
      let obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = obj3(1370);
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      if (null != channelId) {
        if (!isStaticChannelRoute(channelId)) {
          let id;
          obj3 = { kind: "channel", channelId, guildId };
          if (guildId == null) {
            guildId = null;
          }
          if (0 === tabs.length) {
            const obj4 = { id: String(+closure_9), pinned: false, entries: items, index: 0 };
            const _String2 = String;
            closure_9 = tmp18 + 1;
            let merged = Object.assign(obj3);
            items = [obj3];
            const items1 = [obj4];
            tabs = items1;
            id = obj4.id;
          } else if (null == id) {
            return false;
          } else {
            const found = tabs.find((id) => id.id === id);
            if (null != found) {
              if (found.pinned) {
                if (tabs.length >= 25) {
                  return false;
                } else {
                  const obj5 = { id: String(+closure_9), pinned: false, entries: items2, index: 0 };
                  const _String = String;
                  closure_9 = tmp10 + 1;
                  const merged1 = Object.assign(obj3);
                  items2 = [obj3];
                  const items3 = [];
                  items3[HermesBuiltin.arraySpread(items3, tabs, 0)] = obj5;
                  tabs = items3;
                  id = obj5.id;
                }
              } else {
                tabs = arr.map((id) => {
                  let diff;
                  if (id.id !== activeTabId) {
                    return id;
                  } else {
                    const entries = id.entries;
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj3;
                    const obj = { id: null, pinned: null, entries: items, index: diff };
                    ({ id: obj.id, pinned: obj.pinned } = id);
                    diff = items.length - 1;
                    const merged = Object.assign(obj3);
                    return obj;
                  }
                });
              }
            }
            return false;
          }
        }
      }
      return false;
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  LOGOUT: function handleLogout() {
    if (0 === tabs.length) {
      return false;
    } else {
      tabs = [];
      activeTabId = null;
    }
  },
};
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
