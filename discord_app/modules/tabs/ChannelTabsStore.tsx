// === Module 10952: handleChannelDelete ===

// Module 10952 (handleChannelDelete)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import apexExperimentDefault from "apexExperiment" /* 10953 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "handleConnectionOpen" /* 1980 */;
import closure_5 from "handleConnectionOpen" /* 4299 */;
import { isStaticChannelRoute } from "set" /* 1393 */;

require = arg1;
function handleChannelDelete(channel) {
  channel = channel.channel;
  let enabled = c10;
  if (c10) {
    enabled = apexExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
    const obj = apexExperimentDefault;
  }
  if (enabled) {
    enabled = channel(1235).isDesktop();
    const obj2 = channel(1235);
  }
  if (enabled) {
    if (0 === found.filter((kind) => {
      let tmp = "channel" === kind.kind;
      if (tmp) {
        tmp = kind.channelId === channel.id;
      }
      if (tmp) {
        tmp = kind.id !== c8;
      }
      return tmp;
    }).length) {
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
      let enabled2 = c10;
      if (c10) {
        enabled2 = apexExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
        const obj3 = apexExperimentDefault;
      }
      if (enabled2) {
        enabled2 = channel(1235).isDesktop();
        const obj4 = channel(1235);
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
let closure_7 = [];
let c8 = null;
let c9 = 1;
let c10 = false;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
}
const prototype = ChannelTabsStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  this.waitFor(closure_4, closure_5);
  let flag;
  if (enabled != null) {
    flag = enabled.enabled;
  }
  if (flag == null) {
    flag = false;
  }
  let tabs;
  if (enabled != null) {
    tabs = enabled.tabs;
  }
  if (tabs == null) {
    tabs = [];
  }
  let activeTabId;
  if (enabled != null) {
    activeTabId = enabled.activeTabId;
  }
  if (activeTabId == null) {
    activeTabId = null;
  }
  let id = activeTabId;
  closure_9 = tabs.reduce((arg0, id) => {
    const NumberResult = Number(id.id);
    let tmp2 = arg0;
    if (Number.isFinite(NumberResult)) {
      tmp2 = arg0;
      if (NumberResult > arg0) {
        tmp2 = NumberResult;
      }
    }
    return tmp2;
  }, 0) + 1;
  let someResult = null == id;
  if (!someResult) {
    someResult = tabs.some((id) => id.id === id);
  }
  if (!someResult) {
    const first = tabs[0];
    id = undefined;
    if (first != null) {
      id = first.id;
    }
    if (id == null) {
      id = null;
    }
  }
};
prototype["getState"] = function getState() {
  return { tabs: closure_7, activeTabId: c8, enabled: c10 };
};
prototype["getTabs"] = function getTabs() {
  return closure_7;
};
prototype["getActiveTabId"] = function getActiveTabId() {
  return c8;
};
prototype["getActiveTab"] = function getActiveTab() {
  let found = closure_7.find((id) => id.id === closure_8);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["isEnabled"] = function isEnabled() {
  let enabled = c10;
  if (c10) {
    enabled = apexExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
    const obj = apexExperimentDefault;
  }
  if (enabled) {
    enabled = PlatformTypes.isDesktop();
    const obj2 = PlatformTypes;
  }
  return enabled;
};
prototype["isUserOptedIn"] = function isUserOptedIn() {
  return c10;
};
prototype["isTabBarVisible"] = function isTabBarVisible() {
  let enabled = c10;
  if (c10) {
    enabled = apexExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
    const obj = apexExperimentDefault;
  }
  if (enabled) {
    enabled = PlatformTypes.isDesktop();
    const obj2 = PlatformTypes;
  }
  if (enabled) {
    enabled = closure_7.length >= 1;
  }
  return enabled;
};
prototype["isAtMaxTabs"] = function isAtMaxTabs() {
  return closure_7.length >= 25;
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
    obj[2] = flag;
    return obj;
  }
];
ChannelTabsStore.migrations = items;
const channelTabsStore = new ChannelTabsStore(dispatcherDefault, {
  CHANNEL_TABS_OPEN: function handleOpenTab(kind) {
    if (items3.length >= 25) {
      return false;
    } else {
      if (0 === items3.length) {
        const currentlySelectedChannelId = store.getCurrentlySelectedChannelId();
        if (null != currentlySelectedChannelId) {
          if (!isStaticChannelRoute(currentlySelectedChannelId)) {
            let obj = { kind: "channel", channelId: null, guildId: null };
            obj[1] = currentlySelectedChannelId;
            let guildId = store2.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            obj[2] = guildId;
            obj = { id: null };
            const _String = String;
            closure_9 = tmp5 + 1;
            obj[0] = String(+closure_9);
            const merged = Object.assign(obj);
            obj.pinned = false;
            const items = [obj];
            obj.entries = items;
            obj.index = 0;
            const items1 = [obj];
            items3 = items1;
            let id = obj.id;
          }
        }
      }
      if ("route" === kind.kind) {
        obj = { kind: "route", routePath: null, routeLabel: null };
        ({ routePath: obj4[1], routeLabel: obj4[2] } = kind);
        obj1 = obj;
      } else {
        obj1 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj3[1], guildId: obj3[2] } = kind);
      }
      const obj2 = { id: null };
      const _String2 = String;
      closure_9 = tmp12 + 1;
      obj2[0] = String(+closure_9);
      const merged1 = Object.assign(obj1);
      obj2.pinned = false;
      const items2 = [obj1];
      obj2.entries = items2;
      obj2.index = 0;
      items3 = [];
      items3[HermesBuiltin.arraySpread(items3, 0)] = obj2;
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
    const findIndexResult = closure_7.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else {
      let enabled = c10;
      if (c10) {
        enabled = apexExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
        const obj = apexExperimentDefault;
      }
      if (enabled) {
        enabled = tabId(1235).isDesktop();
        const obj2 = tabId(1235);
      }
      if (enabled) {
        if (1 === closure_7.length) {
          return false;
        }
      }
      const found = closure_7.filter((id) => id.id !== tabId);
      closure_7 = found;
      let enabled2 = c10;
      if (c10) {
        enabled2 = apexExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
        const obj3 = apexExperimentDefault;
      }
      if (enabled2) {
        enabled2 = tabId(1235).isDesktop();
        const obj4 = tabId(1235);
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
        closure_7 = [];
        let id = null;
      } else if (closure_7[findIndexResult].id === tmp8) {
        const _Math = Math;
        id = closure_7[Math.min(Math, findIndexResult, closure_7.length - 1)].id;
      }
      tmp8 = id;
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    let tmp = tabId !== tabId;
    if (tmp) {
      const tmp4 = null != closure_7.find((id) => id.id === tabId);
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = items.findIndex((id) => id.id === tabId);
    const bound = Math.max(0, Math.min(tabId.toIndex, items.length - 1));
    if (-1 !== findIndexResult) {
      if (findIndexResult !== bound) {
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items.splice(bound, 0, callback(items.splice(findIndexResult, 1), 1)[0]);
      }
    }
    return false;
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    ({ tabId: require, pinned } = arg0);
    const found = closure_7.find((id) => id.id === closure_0);
    if (null != found) {
      if (found.pinned !== pinned) {
        closure_7 = closure_7.map((id) => {
          let tmp = id;
          if (id.id === closure_0) {
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
    const found = closure_7.find((id) => id.id === closure_8);
    let flag = false;
    if (null != found) {
      const sum = found.index + -1;
      require = sum;
      closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        closure_7 = closure_7.map((id) => {
          let tmp = id;
          if (id.id === closure_1_8) {
            const obj = { id: null, pinned: null };
            ({ id: obj[0], pinned: obj[1] } = id);
            const merged = Object.assign(closure_1);
            obj.entries = id.entries;
            obj.index = closure_0;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_FORWARD: function handleTabHistoryForward() {
    const found = closure_7.find((id) => id.id === closure_8);
    let flag = false;
    if (null != found) {
      const sum = found.index + 1;
      require = sum;
      closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        closure_7 = closure_7.map((id) => {
          let tmp = id;
          if (id.id === closure_1_8) {
            const obj = { id: null, pinned: null };
            ({ id: obj[0], pinned: obj[1] } = id);
            const merged = Object.assign(closure_1);
            obj.entries = id.entries;
            obj.index = closure_0;
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
          let obj = apexExperimentDefault;
          enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
        }
        if (enabled) {
          enabled = PlatformTypes.isDesktop();
          const obj2 = PlatformTypes;
        }
        if (enabled) {
          if (closure_7.length <= 0) {
            const currentlySelectedChannelId = store.getCurrentlySelectedChannelId();
            if (null != currentlySelectedChannelId) {
              if (!isStaticChannelRoute(currentlySelectedChannelId)) {
                obj = { kind: "channel", channelId: null, guildId: null };
                obj[1] = currentlySelectedChannelId;
                let guildId = store2.getGuildId();
                if (guildId == null) {
                  guildId = null;
                }
                obj[2] = guildId;
                obj = { id: null };
                const _String = String;
                closure_9 = tmp16 + 1;
                obj[0] = String(+closure_9);
                const merged = Object.assign(obj);
                obj.pinned = false;
                const items = [obj];
                obj.entries = items;
                obj.index = 0;
                const items1 = [obj];
                closure_7 = items1;
                let id = obj.id;
              }
            }
          }
        }
      } else {
        closure_7 = [];
        id = null;
      }
    }
    return enabled !== enabled;
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: function handleNavigateRoute(routePath) {
    routePath = routePath.routePath;
    let obj;
    let enabled = c10;
    if (c10) {
      obj = apexExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      enabled = obj(1235).isDesktop();
      const obj2 = obj(1235);
    }
    if (enabled) {
      if (0 !== closure_7.length) {
        if (null != id) {
          const found = closure_7.find((id) => id.id === id);
          if (null != found) {
            obj = { kind: "route", routePath: null, routeLabel: null };
            obj[1] = routePath;
            obj[2] = routePath.routeLabel;
            if (found.pinned) {
              if (arr.length >= 25) {
                return false;
              } else {
                obj = { id: null };
                const _String = String;
                closure_9 = tmp8 + 1;
                obj[0] = String(+closure_9);
                let merged = Object.assign(obj);
                obj.pinned = false;
                let items = [obj];
                obj.entries = items;
                obj.index = 0;
                const items1 = [];
                items1[HermesBuiltin.arraySpread(closure_7, 0)] = obj;
                closure_7 = items1;
                id = obj.id;
              }
            } else {
              closure_7 = arr.map((id) => {
                if (id.id !== id) {
                  return id;
                } else {
                  const entries = id.entries;
                  const items = [];
                  items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = obj;
                  obj = { id: null, pinned: null };
                  ({ id: obj[0], pinned: obj[1] } = id);
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
    let enabled = c10;
    if (c10) {
      obj = apexExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      obj1 = obj(1235);
      enabled = obj1.isDesktop();
    }
    if (enabled) {
      if (null != channelId) {
        if (!isStaticChannelRoute(channelId)) {
          obj = { kind: "channel", channelId: null, guildId: null };
          obj[1] = channelId;
          if (guildId == null) {
            guildId = null;
          }
          obj[2] = guildId;
          if (0 === closure_7.length) {
            obj = { id: null };
            const _String2 = String;
            closure_9 = tmp17 + 1;
            obj[0] = String(+closure_9);
            let merged = Object.assign(obj);
            obj.pinned = false;
            let items = [obj];
            obj.entries = items;
            obj.index = 0;
            const items1 = [obj];
            closure_7 = items1;
            let id = obj.id;
          } else if (null == id) {
            return false;
          } else {
            const found = closure_7.find((id) => id.id === id);
            if (null != found) {
              if (found.pinned) {
                if (arr.length >= 25) {
                  return false;
                } else {
                  obj1 = { id: null };
                  const _String = String;
                  closure_9 = tmp9 + 1;
                  obj1[0] = String(+closure_9);
                  const merged1 = Object.assign(obj);
                  obj1.pinned = false;
                  const items2 = [obj];
                  obj1.entries = items2;
                  obj1.index = 0;
                  const items3 = [];
                  items3[HermesBuiltin.arraySpread(closure_7, 0)] = obj1;
                  closure_7 = items3;
                  id = obj1.id;
                }
              } else {
                closure_7 = arr.map((id) => {
                  if (id.id !== id) {
                    return id;
                  } else {
                    const entries = id.entries;
                    const items = [];
                    items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = obj;
                    obj = { id: null, pinned: null };
                    ({ id: obj[0], pinned: obj[1] } = id);
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
    if (0 === closure_7.length) {
      return false;
    } else {
      closure_7 = [];
      c8 = null;
    }
  }
});
const result = require("set").fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;