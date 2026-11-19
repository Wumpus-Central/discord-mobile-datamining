// === Module 9961: ChannelTabsStore ===

// Module 9961 (ChannelTabsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import FrecencyDefault from "Frecency" /* 5549 */;
import TabsExperimentDefault from "TabsExperiment" /* 9962 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4829 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
import UserStore from "UserStore" /* 1388 */;

let handleChannelSelect = fn;
function pruneOpenedChannels() {
  const keys = Object.keys(closure_22.usageHistory);
  for (const item10017 of keys) {
    if (!set.has(item10017)) {
      let usageHistory = closure_22.usageHistory;
      delete tmp2[tmp];
    }
    continue;
  }
  set = new Set(closure_22.frequently);
}
function setFirstPage(tmp12Result) {
  if ("route" === tmp12Result.kind) {
    if (tmp12Result.routePath === Routes.FRIENDS) {
      set.add(tmp12Result.id);
      let flag = false;
    }
    return flag;
  }
  set.delete(tmp12Result.id);
  let tmp3 = "channel" !== tmp12Result.kind;
  if (!tmp3) {
    tmp3 = isStaticChannelRoute(tmp12Result.channelId);
  }
  if (!tmp3) {
    if (enabled) {
      enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore.setFirstPage" }).enabled;
    }
    if (enabled) {
      enabled = handleChannelSelect(1360).isDesktop();
      const obj2 = handleChannelSelect(1360);
    }
    tmp3 = !enabled;
  }
  flag = !tmp3;
  if (!tmp3) {
    const channelId = tmp12Result.channelId;
    closure_22.track(channelId);
    pruneOpenedChannels();
    closure_18 = closure_18.filter((channelId) => channelId.channelId !== channelId);
    flag = true;
  }
}
function activateTab(id) {
  let tmp = null != c12;
  if (tmp) {
    tmp = c12 !== id;
  }
  if (tmp) {
    closure_0 = c12;
    items = [c12];
    HermesBuiltin.arraySpread(closure_13.filter((item) => item !== closure_0), 1);
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let num2 = 9;
    if (true === isStaffResult) {
      num2 = 25;
    }
    closure_13 = items.slice(0, num2);
  }
  c12 = id;
  closure_0 = id;
  const items1 = [id, ...closure_13.filter((item) => item !== closure_0)];
  const currentUser1 = UserStore.getCurrentUser();
  let isStaffResult1;
  if (currentUser1 != null) {
    isStaffResult1 = currentUser1.isStaff();
  }
  let num4 = 9;
  if (true === isStaffResult1) {
    num4 = 25;
  }
  closure_13 = items1.slice(0, num4);
}
function createTab(routeTabForLocation, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = c12;
  }
  handleChannelSelect = tmp;
  let tmp2;
  if (null != tmp) {
    let found = tabs.find((id) => id.id === closure_0);
    if (found == null) {
      found = tabs.find((id) => id.id === activeTabId);
    }
    tmp2 = found;
  }
  if (null != tmp2) {
    const entries = tmp2.entries;
    const _Math = Math;
    const substr = entries.slice(Math.max(0, tmp2.index - 10), tmp2.index + 1);
    let mapped = substr.map((item) => {
      const merged = Object.assign(item);
      return {};
    });
  } else {
    mapped = [];
  }
  if (null == atResult) {
    items = [];
    items[HermesBuiltin.arraySpread(mapped, 0)] = routeTabForLocation;
    let substr1 = items.slice(-11);
  } else {
    handleChannelSelect(9963);
    substr1 = mapped;
  }
  const obj2 = { id: null };
  closure_14 = tmp12 + 1;
  obj2.id = String(+closure_14);
  let merged = Object.assign(routeTabForLocation);
  obj2.pinned = false;
  obj2.entries = substr1;
  obj2.index = substr1.length - 1;
  return obj2;
}
function navigateTo(routeTabForLocation1, PUSH) {
  closure_15 = null;
  if (enabled) {
    const obj2 = { location: PUSH };
    enabled = TabsExperimentDefault.getConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = handleChannelSelect(1360).isDesktop();
    const obj3 = handleChannelSelect(1360);
  }
  if (enabled) {
    if (null != routeTabForLocation1) {
      if (0 === tabs.length) {
        const tmp28 = createTab(routeTabForLocation1);
        items = [tmp28];
        tabs = items;
        activateTab(tmp28.id);
      } else {
        const found = tabs.find((id) => id.id === activeTabId);
        let tmp9 = null != found;
        if (tmp9) {
          tmp9 = !handleChannelSelect(9963).isSameTabLocation(found, routeTabForLocation1);
          const obj4 = handleChannelSelect(9963);
        }
        if (tmp9) {
          if (found.pinned) {
            const currentUser = UserStore.getCurrentUser();
            let isStaffResult;
            if (currentUser != null) {
              isStaffResult = currentUser.isStaff();
            }
            let num = 9;
            if (true === isStaffResult) {
              num = 25;
            }
            if (tabs.length >= num) {
              if (null != c12) {
                closure_15 = c12;
                handleChannelSelect = c12;
                const mapped = tabs.map((id) => {
                  let tmp = id;
                  if (id.id === id) {
                    const obj = {};
                    const merged = Object.assign(id);
                    obj.pinned = false;
                    tmp = obj;
                  }
                  return tmp;
                });
                const items1 = [];
                HermesBuiltin.arraySpread(mapped.filter((pinned) => !pinned.pinned), HermesBuiltin.arraySpread(mapped.filter((pinned) => pinned.pinned), 0));
                closure_129_0 = routeTabForLocation1;
                tabs = items1.map((id) => {
                  if (id.id !== c12) {
                    return id;
                  } else {
                    const entries = id.entries;
                    items = [];
                    items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = id;
                    const substr = items.slice(-50);
                    const obj = { id: id.id, pinned: true === id.pinned };
                    const diff = substr.length - 1;
                    const merged = Object.assign(id);
                    obj.entries = substr;
                    obj.index = diff;
                    return obj;
                  }
                });
                const arraySpreadResult = HermesBuiltin.arraySpread(mapped.filter((pinned) => pinned.pinned), 0);
              }
            }
            const tmp16 = createTab(routeTabForLocation1);
            const items2 = [];
            items2[HermesBuiltin.arraySpread(tabs, 0)] = tmp16;
            tabs = items2;
            activateTab(tmp16.id);
          } else {
            handleChannelSelect = routeTabForLocation1;
            tabs = tabs.map((id) => {
              if (id.id !== c12) {
                return id;
              } else {
                const entries = id.entries;
                items = [];
                items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = id;
                const substr = items.slice(-50);
                const obj = { id: id.id, pinned: true === id.pinned };
                const diff = substr.length - 1;
                const merged = Object.assign(id);
                obj.entries = substr;
                obj.index = diff;
                return obj;
              }
            });
          }
        }
        return tmp9;
      }
    }
  }
  return false;
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let isStrandedBackgroundTab;
  if (enabled) {
    enabled = isStrandedBackgroundTab(9962).getConfig({ location: "ChannelTabsStore.handleChannelDelete" }).enabled;
    const obj = isStrandedBackgroundTab(9962);
  }
  if (enabled) {
    enabled = channel(1360).isDesktop();
    const obj2 = channel(1360);
  }
  if (enabled) {
    isStrandedBackgroundTab = function isStrandedBackgroundTab(dependencyMap) {
      let tmp = "channel" === dependencyMap.kind;
      if (tmp) {
        tmp = dependencyMap.channelId === channel.id;
      }
      if (tmp) {
        tmp = dependencyMap.id !== c12;
      }
      return tmp;
    };
    if (tabs.some(isStrandedBackgroundTab)) {
      tabs = tabs.filter((kind) => {
        if (typeof isStrandedBackgroundTab === "function") {
          let tmp2 = "channel" === kind.kind;
          if (tmp2) {
            tmp2 = kind.channelId === channel.id;
          }
          if (tmp2) {
            tmp2 = kind.id !== c12;
          }
          return !tmp2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      closure_13 = closure_13.filter((item) => {
        closure_0 = item;
        return routeTabForLocation1.some((id) => id.id === closure_0);
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
}
const Routes = fn(1072).Routes;
const isStaticChannelRoute = fn(4648).isStaticChannelRoute;
let tabs = [];
let c12 = null;
let closure_13 = [];
let closure_14 = 1;
let c15 = null;
let c16 = false;
let enabled = false;
let closure_18 = [];
let set = new Set();
let frequently = null;
let closure_21 = [];
let closure_22 = new FrecencyDefault({
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: 10
});
const PersistedStore = initializeDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
}
const prototype = ChannelTabsStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  this.waitFor(ApexExperimentStore, DefaultRouteStore, SelectedChannelStore, SelectedGuildStore, UserStore);
  items = [ApexExperimentStore];
  this.syncWith(items, () => enabled);
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
  const mapped = tabs.map((id) => {
    if ("route" === id.kind) {
      ({ routePath: obj2.routePath, routeLabel: obj2.routeLabel } = id);
      let obj = { kind: "route", routePath: null, routeLabel: null };
      const obj3 = { kind: "route", routePath: null, routeLabel: null };
    } else {
      obj = { kind: "channel", channelId: null, guildId: null };
      ({ channelId: obj.channelId, guildId: obj.guildId } = id);
    }
    const obj4 = { id: id.id, pinned: true === id.pinned };
    ({ entries, index } = id);
    const merged = Object.assign(obj);
    obj4.entries = entries;
    obj4.index = index;
    let tmp2 = obj4;
    if (Array.isArray(obj4.entries)) {
      tmp2 = obj4;
      if (obj4.entries.length > 50) {
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.min(Math.max(obj4.index, 0), obj4.entries.length - 1);
        const _Math3 = Math;
        const bound1 = Math.min(bound, obj4.entries.length - 50);
        const obj7 = {};
        const merged1 = Object.assign(obj4);
        const entries1 = obj4.entries;
        obj7.entries = entries1.slice(bound1, bound1 + 50);
        obj7.index = bound - bound1;
        tmp2 = obj7;
      }
    }
    return tmp2;
  });
  const items1 = [...mapped.filter((pinned) => pinned.pinned), ...mapped.filter((pinned) => !pinned.pinned)];
  tabs = items1;
  activeTabId = undefined;
  if (enabled != null) {
    activeTabId = enabled.activeTabId;
  }
  if (activeTabId == null) {
    activeTabId = null;
  }
  c12 = activeTabId;
  closure_13 = [];
  closure_14 = tabs.reduce((acc, id) => {
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
  let someResult = null == c12;
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
    c12 = id;
  }
  let openedChannels;
  if (enabled != null) {
    openedChannels = enabled.openedChannels;
  }
  closure_22.overwriteHistory((function readSavedUsages(openedChannels) {
    const obj = {};
    if (null != openedChannels) {
      if (typeof openedChannels === "object") {
        const _Object = Object;
        const entries = Object.entries(openedChannels);
        const tmp20 = entries[Symbol.iterator]();
        while (tmp20 !== undefined) {
          let tmp5 = _slicedToArray(tmp2, 2);
          [tmp6, tmp7] = tmp5;
          let recentUses;
          if (tmp7 != null) {
            recentUses = tmp7.recentUses;
          }
          if (Array.isArray(recentUses)) {
            let recentUses1 = tmp7.recentUses;
            let found = recentUses1.filter((item) => {
              let tmp = typeof item === "number";
              if (typeof item === "number") {
                tmp = item > 0;
              }
              return tmp;
            });
          } else {
            found = [];
          }
          let arr3 = found;
          let totalUses;
          if (tmp7 != null) {
            totalUses = tmp7.totalUses;
          }
          let tmp13 = typeof totalUses === "number";
          if (typeof totalUses === "number") {
            tmp13 = 0 !== arr3.length;
          }
          if (tmp13) {
            let obj2 = { totalUses: tmp7.totalUses, recentUses: null, frecency: -1, score: 0 };
            obj2.recentUses = arr3;
            obj[tmp6] = obj2;
          }
          continue;
        }
        return obj;
      }
    }
    return obj;
  })(openedChannels));
  pruneOpenedChannels();
};
prototype["getState"] = function getState() {
  const obj = {};
  const entries = Object.entries(closure_22.usageHistory);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let obj3 = { totalUses: null, recentUses: null };
    ({ totalUses: obj2.totalUses, recentUses: obj2.recentUses } = tmp5[1]);
    obj[tmp5[0]] = obj3;
    continue;
  }
  return { tabs, activeTabId, enabled, openedChannels: obj };
};
prototype["getTabs"] = function getTabs() {
  return closure_11;
};
prototype["getActiveTabId"] = function getActiveTabId() {
  return c12;
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
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore.isEnabled" }).enabled;
  }
  if (enabled) {
    enabled = handleChannelSelect(1360).isDesktop();
    const obj2 = handleChannelSelect(1360);
  }
  return enabled;
};
prototype["isUserOptedIn"] = function isUserOptedIn() {
  return enabled;
};
prototype["isTabBarVisible"] = function isTabBarVisible() {
  if (enabled) {
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore.isTabBarVisible" }).enabled;
  }
  if (enabled) {
    enabled = handleChannelSelect(1360).isDesktop();
    const obj2 = handleChannelSelect(1360);
  }
  if (enabled) {
    enabled = tabs.length > 0;
  }
  return enabled;
};
prototype["getTabUnpinnedAtLimit"] = function getTabUnpinnedAtLimit() {
  let found = tabs.find((id) => id.id === closure_1_15);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getRecentlyClosed"] = function getRecentlyClosed() {
  return closure_18;
};
prototype["getFrequentlyOpenedChannelIds"] = function getFrequentlyOpenedChannelIds() {
  frequently = usageHistory.frequently;
  if (frequently !== frequently) {
    closure_21 = frequently.filter((item) => {
      let num;
      if (usageHistory.usageHistory[item] != null) {
        num = tmp.totalUses;
      }
      if (num == null) {
        num = 0;
      }
      return num >= 2;
    });
  }
  return closure_21;
};
prototype["getMaxTabs"] = function getMaxTabs() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let num = 9;
  if (true === isStaffResult) {
    num = 25;
  }
  return num;
};
prototype["isAtMaxTabs"] = function isAtMaxTabs() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let num = 9;
  if (true === isStaffResult) {
    num = 25;
  }
  return tabs.length >= num;
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
  }
];
ChannelTabsStore.migrations = items;
handleChannelSelect = function handleChannelSelect(arg0) {
  ({ channelId, guildId } = arg0);
  let tmp2 = null;
  if (null != channelId) {
    tmp2 = null;
    if (!isStaticChannelRoute(channelId)) {
      const obj = { kind: "channel", channelId, guildId: null };
      if (guildId == null) {
        guildId = null;
      }
      obj.guildId = guildId;
      tmp2 = obj;
    }
  }
  return navigateTo(tmp2, "ChannelTabsStore.handleChannelSelect");
};
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, {
  CHANNEL_TABS_OPEN: function handleOpenTab(location) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let num = 9;
    if (true === isStaffResult) {
      num = 25;
    }
    if (tabs.length >= num) {
      return false;
    } else {
      const _location = location.location;
      if ("route" === _location.kind) {
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = _location);
        let obj5 = { kind: "route", routePath: null, routeLabel: null };
        const obj = { kind: "route", routePath: null, routeLabel: null };
      } else {
        obj5 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj2.channelId, guildId: obj2.guildId } = _location);
      }
      const tmp12Result = createTab(obj5, undefined === location.sourceTabId ? c12 : location.sourceTabId);
      items = [];
      items[HermesBuiltin.arraySpread(tabs, 0)] = tmp12Result;
      tabs = items;
      let tmp5 = true === location.background;
      if (tmp5) {
        tmp5 = null != c12;
      }
      if (!tmp5) {
        activateTab(tmp12Result.id);
      }
      setFirstPage(tmp12Result);
    }
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    let channelId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === channelId);
    if (-1 === findIndexResult) {
      return false;
    } else if (1 === tabs.length) {
      return false;
    } else {
      tabs = tabs.filter((id) => id.id !== channelId);
      closure_13 = closure_13.filter((item) => {
        closure_0 = item;
        return routeTabForLocation1.some((id) => id.id === closure_0);
      });
      channelId = undefined;
      set.delete(tabs[findIndexResult].id);
      if ("channel" === tabs[findIndexResult].kind) {
        if (enabled) {
          enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore.recordClosedTab" }).enabled;
        }
        if (enabled) {
          enabled = handleChannelSelect(1360).isDesktop();
          const obj2 = handleChannelSelect(1360);
        }
        if (enabled) {
          channelId = tmp19.channelId;
          const obj3 = { channelId, guildId: tmp19.guildId, closedAt: null };
          const _Date = Date;
          obj3.closedAt = Date.now();
          items = [obj3];
          HermesBuiltin.arraySpread(closure_18.filter((channelId) => channelId.channelId !== channelId), 1);
          closure_18 = items.slice(0, 10);
        }
      }
      if (tabs[findIndexResult].id === tmp20) {
        const _Math = Math;
        c12 = null;
        let id = closure_13[0];
        if (id == null) {
          id = tabs[Math.min(Math, findIndexResult, tabs.length - 1)].id;
        }
        activateTab(id);
      }
      tmp20 = c12;
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    let tmp = c12 !== tabId;
    if (tmp) {
      const tmp4 = null != tabs.find((id) => id.id === tabId);
      if (tmp4) {
        activateTab(tabId);
      }
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else {
      length = tabs.filter((pinned) => pinned.pinned).length;
      if (tabs[findIndexResult].pinned) {
        items = [0, length - 1];
        let items1 = items;
      } else {
        items1 = [length, tabs.length - 1];
      }
      const tmp4 = _slicedToArray(items1, 2);
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(tmp4[0], Math.min(tabId.toIndex, tmp4[1]));
      if (findIndexResult === bound) {
        return false;
      } else {
        const items2 = [];
        HermesBuiltin.arraySpread(tabs, 0);
        items2.splice(bound, 0, _slicedToArray(items2.splice(findIndexResult, 1), 1)[0]);
        tabs = items2;
      }
    }
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    ({ tabId: handleChannelSelect, pinned } = arg0);
    const found = tabs.find((id) => id.id === handleChannelSelect);
    if (null != found) {
      if (found.pinned !== pinned) {
        const found1 = tabs.filter((id) => id.id !== found.id);
        length = found1.filter((pinned) => pinned.pinned).length;
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(found1.slice(0, length), 0);
        const obj = {};
        const merged = Object.assign(found);
        obj.pinned = pinned;
        items[arraySpreadResult] = obj;
        HermesBuiltin.arraySpread(found1.slice(length), arraySpreadResult + 1);
        tabs = items;
      }
    }
    return false;
  },
  CHANNEL_TABS_BACK: (arg0) => {
    const found = tabs.find((id) => id.id === activeTabId);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = closure_2_19.has(found.id);
    }
    if (hasItem) {
      hasItem = dependencyMap3(found);
    }
    const tmp = handleChannelSelect(arg0);
    return false !== handleChannelSelect(arg0) || hasItem;
  },
  CHANNEL_TABS_FORWARD: (arg0) => {
    const found = tabs.find((id) => id.id === activeTabId);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = closure_2_19.has(found.id);
    }
    if (hasItem) {
      hasItem = dependencyMap3(found);
    }
    const tmp = handleChannelSelect(arg0);
    return false !== handleChannelSelect(arg0) || hasItem;
  },
  CHANNEL_TABS_SET_ENABLED: function handleSetEnabled(enabled) {
    enabled = enabled.enabled;
    if (enabled === enabled) {
      return false;
    } else if (enabled) {
      let tmp3 = 0 === tabs.length;
      if (tmp3) {
        let enabled2 = enabled;
        if (enabled) {
          enabled2 = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore.handleSetEnabled" }).enabled;
        }
        if (enabled2) {
          enabled2 = handleChannelSelect(1360).isDesktop();
          const obj2 = handleChannelSelect(1360);
        }
        tmp3 = enabled2;
      }
      if (tmp3) {
        const _window = window;
        let routeTabForLocation = handleChannelSelect(9963).getRouteTabForLocation(window.location);
        if (null == routeTabForLocation) {
          const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
          let tmp15 = null;
          if (null != currentlySelectedChannelId) {
            tmp15 = null;
            if (!isStaticChannelRoute(currentlySelectedChannelId)) {
              const obj4 = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
              let guildId = SelectedGuildStore.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              obj4.guildId = guildId;
              tmp15 = obj4;
            }
          }
          routeTabForLocation = tmp15;
        }
        if (null != routeTabForLocation) {
          const tmp20 = createTab(routeTabForLocation);
          items = [tmp20];
          tabs = items;
          activateTab(tmp20.id);
        }
        const obj3 = handleChannelSelect(9963);
      }
    } else {
      tabs = [];
      c12 = null;
      closure_13 = [];
    }
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: (arg0) => {
    const found = tabs.find((id) => id.id === activeTabId);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = closure_2_19.has(found.id);
    }
    if (hasItem) {
      hasItem = dependencyMap3(found);
    }
    const tmp = handleChannelSelect(arg0);
    return false !== handleChannelSelect(arg0) || hasItem;
  },
  CHANNEL_SELECT: (arg0) => {
    const found = tabs.find((id) => id.id === activeTabId);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = closure_2_19.has(found.id);
    }
    if (hasItem) {
      hasItem = dependencyMap3(found);
    }
    const tmp = handleChannelSelect(arg0);
    return false !== handleChannelSelect(arg0) || hasItem;
  },
  CHANNEL_DELETE: handleChannelDelete,
  CONNECTION_OPEN: function handleConnectionOpen() {
    c16 = true;
    if (enabled) {
      enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore.handleConnectionOpen" }).enabled;
    }
    if (enabled) {
      enabled = id(1360).isDesktop();
      const obj2 = id(1360);
    }
    if (enabled) {
      let tmp6 = !tmp;
      if (!tmp6) {
        if (0 === routeTabForLocation1.length) {
          const _window2 = window;
          let routeTabForLocation = id(9963).getRouteTabForLocation(window.location);
          if (null == routeTabForLocation) {
            const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
            let tmp10 = null;
            if (null != currentlySelectedChannelId) {
              tmp10 = null;
              if (!isStaticChannelRoute(currentlySelectedChannelId)) {
                const obj3 = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
                let guildId = SelectedGuildStore.getGuildId();
                if (guildId == null) {
                  guildId = null;
                }
                obj3.guildId = guildId;
                tmp10 = obj3;
              }
            }
            routeTabForLocation = tmp10;
          }
          let flag2 = null != routeTabForLocation;
          if (flag2) {
            const tmp16 = createTab(routeTabForLocation);
            items = [tmp16];
            routeTabForLocation1 = items;
            activateTab(tmp16.id);
            flag2 = true;
          }
          return flag2;
        }
      }
      const currentUser = UserStore.getCurrentUser();
      let tmp20 = null;
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let num3 = 9;
      if (true === isStaffResult) {
        num3 = 25;
      }
      let diff = routeTabForLocation1.length - num3;
      let flag3 = false;
      if (diff > 0) {
        const _Set = Set;
        const found = routeTabForLocation1.filter((id) => id.id !== activeTabId);
        let substr = found.slice(-diff);
        set = new Set(substr.map((id) => id.id));
        id = set;
        routeTabForLocation1 = routeTabForLocation1.filter((id) => !id.has(id.id));
        closure_13 = closure_13.filter((item) => {
          closure_0 = item;
          return routeTabForLocation1.some((id) => id.id === closure_0);
        });
        flag3 = true;
      }
      if (!tmp6) {
        if (!tmp6) {
          tmp6 = flag3;
        }
        return tmp6;
      } else {
        const _window = window;
        routeTabForLocation1 = id(9963).getRouteTabForLocation(window.location);
        if (tmp20 == routeTabForLocation1) {
          const currentlySelectedChannelId1 = SelectedChannelStore.getCurrentlySelectedChannelId();
          let tmp28 = null;
          if (tmp20 != currentlySelectedChannelId1) {
            tmp28 = null;
            if (!isStaticChannelRoute(currentlySelectedChannelId1)) {
              const obj5 = { kind: "channel", channelId: currentlySelectedChannelId1, guildId: null };
              let guildId1 = SelectedGuildStore.getGuildId();
              if (guildId1 == tmp20) {
                guildId1 = null;
              }
              obj5.guildId = guildId1;
              tmp28 = obj5;
            }
          }
          routeTabForLocation1 = tmp28;
        }
        if (routeTabForLocation1 == tmp20) {
          const obj7 = { pathname: DefaultRouteStore.defaultRoute };
          routeTabForLocation1 = tmp23(9963).getRouteTabForLocation(obj7);
          const tmp23Result = tmp23(9963);
        }
        let flag4 = false;
        if (tmp20 != routeTabForLocation1) {
          const atResult = routeTabForLocation1.at(-1);
          if (tmp20 != atResult) {
            if (!atResult.pinned) {
              activateTab(atResult.id);
              if (atResult.pinned) {
                id = atResult.id;
                const mapped = routeTabForLocation1.map((id) => {
                  let tmp = id;
                  if (id.id === id) {
                    const obj = {};
                    const merged = Object.assign(id);
                    obj.pinned = false;
                    tmp = obj;
                  }
                  return tmp;
                });
                const items1 = [];
                HermesBuiltin.arraySpread(mapped.filter((pinned) => !pinned.pinned), HermesBuiltin.arraySpread(mapped.filter((pinned) => pinned.pinned), 0));
                routeTabForLocation1 = items1;
                const arraySpreadResult = HermesBuiltin.arraySpread(mapped.filter((pinned) => pinned.pinned), 0);
              }
              flag4 = true;
              if (!tmp23Result2.isSameTabLocation(atResult, routeTabForLocation1)) {
                closure_129_0 = routeTabForLocation1;
                routeTabForLocation1 = routeTabForLocation1.map((id) => {
                  if (id.id !== c12) {
                    return id;
                  } else {
                    const entries = id.entries;
                    items = [];
                    items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = id;
                    const substr = items.slice(-50);
                    const obj = { id: id.id, pinned: true === id.pinned };
                    const diff = substr.length - 1;
                    const merged = Object.assign(id);
                    obj.entries = substr;
                    obj.index = diff;
                    return obj;
                  }
                });
                flag4 = true;
              }
              tmp23Result2 = tmp23(9963);
            } else {
              const currentUser1 = UserStore.getCurrentUser();
              let isStaffResult1;
              if (currentUser1 != tmp20) {
                isStaffResult1 = currentUser1.isStaff();
              }
            }
          }
        }
        const tmp46 = createTab(routeTabForLocation1, tmp20);
        routeTabForLocation1 = [];
        routeTabForLocation1[HermesBuiltin.arraySpread(routeTabForLocation1, 0)] = tmp46;
        tmp20 = activateTab(tmp46.id);
        flag4 = true;
        const obj6 = id(9963);
      }
    } else {
      return false;
    }
    tmp = c16;
  },
  THREAD_DELETE: handleChannelDelete,
  LOGOUT: function handleLogout() {
    closure_11 = [];
    c12 = null;
    closure_13 = [];
    set = new Set();
    closure_18 = [];
    closure_22.overwriteHistory({});
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;