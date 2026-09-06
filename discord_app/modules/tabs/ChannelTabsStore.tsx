// discord_app/modules/tabs/ChannelTabsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import TabsExperimentDefault from "TabsExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

require = fn;
function handleChannelDelete(channel) {
  channel = channel.channel;
  if (enabled) {
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    enabled = channel(1116).isDesktop();
    const obj2 = channel(1116);
  }
  if (enabled) {
    if (
      0 ===
      found.filter((kind) => {
        let tmp = "channel" === kind.kind;
        if (tmp) {
          tmp = kind.channelId === channel.id;
        }
        if (tmp) {
          tmp = kind.id !== c8;
        }
        return tmp;
      }).length
    ) {
      return false;
    } else {
      found = found.filter((kind) => {
        let tmp = "channel" === kind.kind;
        if (tmp) {
          tmp = kind.channelId === channel.id;
        }
        let tmp3 = !tmp;
        if (tmp) {
          tmp3 = kind.id === c8;
        }
        return tmp3;
      });
      let enabled2 = enabled;
      if (enabled) {
        enabled2 = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
      }
      if (enabled2) {
        enabled2 = channel(1116).isDesktop();
        const obj4 = channel(1116);
      }
      let tmp10 = !enabled2;
      if (!enabled2) {
        let tmp11 = 0 === found.length;
        if (!tmp11) {
          tmp11 = 1 === found.length && !found[0].pinned;
          const tmp12 = 1 === found.length && !found[0].pinned;
        }
        tmp10 = tmp11;
      }
      if (tmp10) {
        found = [];
        c8 = null;
      }
    }
  } else {
    return false;
  }
}
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
let tabs = [];
let c8 = null;
let closure_9 = 1;
let enabled = false;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {}
const prototype = ChannelTabsStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  this.waitFor(SelectedChannelStore, SelectedGuildStore);
  let flag;
  if (enabled != null) {
    flag = enabled.enabled;
  }
  if (flag == null) {
    flag = false;
  }
  enabled = flag;
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
  c8 = activeTabId;
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
  let someResult = null == c8;
  if (!someResult) {
    someResult = tabs.some((id) => id.id === activeTabId);
  }
  if (!someResult) {
    const first = tabs[0];
    let id;
    if (first != null) {
      id = first.id;
    }
    if (id == null) {
      id = null;
    }
    c8 = id;
  }
};
prototype["getState"] = function getState() {
  return { tabs, activeTabId, enabled };
};
prototype["getTabs"] = function getTabs() {
  return closure_7;
};
prototype["getActiveTabId"] = function getActiveTabId() {
  return c8;
};
prototype["getActiveTab"] = function getActiveTab() {
  let found = tabs.find((id) => id.id === activeTabId);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["isEnabled"] = function isEnabled() {
  if (enabled) {
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    enabled = utils_PlatformUtils.isDesktop();
  }
  return enabled;
};
prototype["isUserOptedIn"] = function isUserOptedIn() {
  return enabled;
};
prototype["isTabBarVisible"] = function isTabBarVisible() {
  if (enabled) {
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    enabled = utils_PlatformUtils.isDesktop();
  }
  if (enabled) {
    enabled = tabs.length >= 1;
  }
  return enabled;
};
prototype["isAtMaxTabs"] = function isAtMaxTabs() {
  return tabs.length >= 25;
};
prototype["canGoBackInActiveTab"] = function canGoBackInActiveTab() {
  const activeTab = this.getActiveTab();
  let tmp2 = null != activeTab;
  if (tmp2) {
    tmp2 = activeTab.index > 0;
  }
  return tmp2;
};
prototype["canGoForwardInActiveTab"] = function canGoForwardInActiveTab() {
  const activeTab = this.getActiveTab();
  let tmp2 = null != activeTab;
  if (tmp2) {
    tmp2 = activeTab.index < activeTab.entries.length - 1;
  }
  return tmp2;
};
ChannelTabsStore.displayName = "ChannelTabsStore";
ChannelTabsStore.persistKey = "ChannelTabsStore";
let items = [
  (enabled) => {
    const obj = { tabs: [], activeTabId: null, enabled: null };
    let flag;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
    obj.enabled = flag;
    return obj;
  },
];
ChannelTabsStore.migrations = items;
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, {
  CHANNEL_TABS_OPEN: function handleOpenTab(kind) {
    if (tabs.length >= 25) {
      return false;
    } else {
      if (0 === tabs.length) {
        const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
        if (null != currentlySelectedChannelId) {
          if (!isStaticChannelRoute(currentlySelectedChannelId)) {
            let obj = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
            let guildId = SelectedGuildStore.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            obj.guildId = guildId;
            obj = { id: null };
            const _String = String;
            closure_9 = tmp5 + 1;
            obj.id = String(+closure_9);
            const merged = Object.assign(obj);
            obj.pinned = false;
            const items = [obj];
            obj.entries = items;
            obj.index = 0;
            const items1 = [obj];
            tabs = items1;
            let id = obj.id;
          }
        }
      }
      if ("route" === kind.kind) {
        obj = { kind: "route", routePath: null, routeLabel: null };
        ({ routePath: obj4.routePath, routeLabel: obj4.routeLabel } = kind);
        let obj1 = obj;
      } else {
        obj1 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj3.channelId, guildId: obj3.guildId } = kind);
      }
      const obj2 = { id: null };
      const _String2 = String;
      closure_9 = tmp12 + 1;
      obj2.id = String(+closure_9);
      const merged1 = Object.assign(obj1);
      obj2.pinned = false;
      const items2 = [obj1];
      obj2.entries = items2;
      obj2.index = 0;
      const items3 = [];
      items3[HermesBuiltin.arraySpread(tabs, 0)] = obj2;
      tabs = items3;
      let tmp18 = true !== kind.active;
      if (tmp18) {
        tmp18 = null != id;
      }
      if (!tmp18) {
        id = obj2.id;
      }
    }
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else {
      if (enabled) {
        enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
      }
      if (enabled) {
        enabled = utils_PlatformUtils.isDesktop();
      }
      if (enabled) {
        if (1 === tabs.length) {
          return false;
        }
      }
      const found = tabs.filter((id) => id.id !== tabId);
      tabs = found;
      let enabled2 = enabled;
      if (enabled) {
        enabled2 = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
      }
      if (enabled2) {
        enabled2 = utils_PlatformUtils.isDesktop();
      }
      let tmp14 = !enabled2;
      if (!enabled2) {
        let tmp15 = 0 === found.length;
        if (!tmp15) {
          tmp15 = 1 === found.length && !found[0].pinned;
          const tmp16 = 1 === found.length && !found[0].pinned;
        }
        tmp14 = tmp15;
      }
      if (tmp14) {
        tabs = [];
        let id = null;
      } else if (tabs[findIndexResult].id === tmp8) {
        const _Math = Math;
        id = tabs[Math.min(Math, findIndexResult, tabs.length - 1)].id;
      }
      tmp8 = id;
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    let tmp = c8 !== tabId;
    if (tmp) {
      const tmp4 = null != tabs.find((id) => id.id === tabId);
      if (tmp4) {
        c8 = tabId;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    const bound = Math.max(0, Math.min(tabId.toIndex, tabs.length - 1));
    if (-1 !== findIndexResult) {
      if (findIndexResult !== bound) {
        const items = [];
        HermesBuiltin.arraySpread(tabs, 0);
        items.splice(bound, 0, _slicedToArray(items.splice(findIndexResult, 1), 1)[0]);
        tabs = items;
      }
    }
    return false;
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    ({ tabId: require, pinned } = arg0);
    const found = tabs.find((id) => id.id === require);
    if (null != found) {
      if (found.pinned !== pinned) {
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === require) {
            const obj = {};
            const merged = Object.assign(id);
            obj.pinned = pinned;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return false;
  },
  CHANNEL_TABS_BACK: function handleTabHistoryBack() {
    const found = tabs.find((id) => id.id === activeTabId);
    let flag = false;
    if (null != found) {
      const sum = found.index + -1;
      require = sum;
      closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === c8) {
            const obj = { id: null, pinned: null };
            ({ id: obj.id, pinned: obj.pinned } = id);
            const merged = Object.assign(closure_1);
            obj.entries = id.entries;
            obj.index = sum;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_FORWARD: function handleTabHistoryForward() {
    const found = tabs.find((id) => id.id === activeTabId);
    let flag = false;
    if (null != found) {
      const sum = found.index + 1;
      require = sum;
      closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === c8) {
            const obj = { id: null, pinned: null };
            ({ id: obj.id, pinned: obj.pinned } = id);
            const merged = Object.assign(closure_1);
            obj.entries = id.entries;
            obj.index = sum;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_SET_ENABLED: function handleSetEnabled(enabled) {
    enabled = enabled.enabled;
    if (enabled !== enabled) {
      if (enabled) {
        if (enabled) {
          let obj = TabsExperimentDefault;
          enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
        }
        if (enabled) {
          enabled = utils_PlatformUtils.isDesktop();
        }
        if (enabled) {
          if (tabs.length <= 0) {
            const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
            if (null != currentlySelectedChannelId) {
              if (!isStaticChannelRoute(currentlySelectedChannelId)) {
                obj = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
                let guildId = SelectedGuildStore.getGuildId();
                if (guildId == null) {
                  guildId = null;
                }
                obj.guildId = guildId;
                obj = { id: null };
                const _String = String;
                closure_9 = tmp16 + 1;
                obj.id = String(+closure_9);
                const merged = Object.assign(obj);
                obj.pinned = false;
                const items = [obj];
                obj.entries = items;
                obj.index = 0;
                const items1 = [obj];
                tabs = items1;
                let id = obj.id;
              }
            }
          }
        }
      } else {
        tabs = [];
        id = null;
      }
    }
    return enabled !== enabled;
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: function handleNavigateRoute(routePath) {
    routePath = routePath.routePath;
    let obj;
    if (enabled) {
      obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      enabled = obj(1116).isDesktop();
      const obj2 = obj(1116);
    }
    if (enabled) {
      if (0 !== tabs.length) {
        if (null != id) {
          const found = tabs.find((id) => id.id === id);
          if (null != found) {
            obj = { kind: "route", routePath, routeLabel: routePath.routeLabel };
            if (found.pinned) {
              if (arr.length >= 25) {
                return false;
              } else {
                obj = { id: null };
                const _String = String;
                closure_9 = tmp8 + 1;
                obj.id = String(+closure_9);
                let merged = Object.assign(obj);
                obj.pinned = false;
                let items = [obj];
                obj.entries = items;
                obj.index = 0;
                const items1 = [];
                items1[HermesBuiltin.arraySpread(tabs, 0)] = obj;
                tabs = items1;
                id = obj.id;
              }
            } else {
              tabs = arr.map((id) => {
                if (id.id !== c8) {
                  return id;
                } else {
                  const entries = id.entries;
                  const items = [];
                  items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = obj;
                  obj = { id: null, pinned: null };
                  ({ id: obj.id, pinned: obj.pinned } = id);
                  const diff = items.length - 1;
                  const merged = Object.assign(obj);
                  obj.entries = items;
                  obj.index = diff;
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
    ({ channelId, guildId } = arg0);
    let obj;
    if (enabled) {
      obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      let obj1 = obj(1116);
      enabled = obj1.isDesktop();
    }
    if (enabled) {
      if (null != channelId) {
        if (!isStaticChannelRoute(channelId)) {
          obj = { kind: "channel", channelId, guildId: null };
          if (guildId == null) {
            guildId = null;
          }
          obj.guildId = guildId;
          if (0 === tabs.length) {
            obj = { id: null };
            const _String2 = String;
            closure_9 = tmp17 + 1;
            obj.id = String(+closure_9);
            let merged = Object.assign(obj);
            obj.pinned = false;
            let items = [obj];
            obj.entries = items;
            obj.index = 0;
            const items1 = [obj];
            tabs = items1;
            let id = obj.id;
          } else if (null == id) {
            return false;
          } else {
            const found = tabs.find((id) => id.id === id);
            if (null != found) {
              if (found.pinned) {
                if (arr.length >= 25) {
                  return false;
                } else {
                  obj1 = { id: null };
                  const _String = String;
                  closure_9 = tmp9 + 1;
                  obj1.id = String(+closure_9);
                  const merged1 = Object.assign(obj);
                  obj1.pinned = false;
                  const items2 = [obj];
                  obj1.entries = items2;
                  obj1.index = 0;
                  const items3 = [];
                  items3[HermesBuiltin.arraySpread(tabs, 0)] = obj1;
                  tabs = items3;
                  id = obj1.id;
                }
              } else {
                tabs = arr.map((id) => {
                  if (id.id !== c8) {
                    return id;
                  } else {
                    const entries = id.entries;
                    const items = [];
                    items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = obj;
                    obj = { id: null, pinned: null };
                    ({ id: obj.id, pinned: obj.pinned } = id);
                    const diff = items.length - 1;
                    const merged = Object.assign(obj);
                    obj.entries = items;
                    obj.index = diff;
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
      c8 = null;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
