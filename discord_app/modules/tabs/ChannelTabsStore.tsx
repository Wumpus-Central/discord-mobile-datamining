// discord_app/modules/tabs/ChannelTabsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FrecencyDefault from "../../lib/Frecency.tsx";
import TabsExperimentDefault from "TabsExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import DefaultRouteStore from "../../stores/DefaultRouteStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

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
      enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
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
    HermesBuiltin.arraySpread(
      closure_13.filter((item) => item !== closure_0),
      1,
    );
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
function createTab(items1, arg1) {
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
    items[HermesBuiltin.arraySpread(mapped, 0)] = items1;
    let substr1 = items.slice(-11);
  } else {
    handleChannelSelect(9984);
    substr1 = mapped;
  }
  const obj2 = { id: null };
  closure_14 = tmp12 + 1;
  obj2.id = String(+closure_14);
  let merged = Object.assign(items1);
  obj2.pinned = false;
  obj2.entries = substr1;
  obj2.index = substr1.length - 1;
  return obj2;
}
function landNavigationAroundPinnedTab(items1) {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let num = 9;
  if (true === isStaffResult) {
    num = 25;
  }
  if (items1.length >= num) {
    if (null != c12) {
      closure_15 = c12;
      const mapped = items1.map((id) => {
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = {};
          const merged = Object.assign(id);
          obj.pinned = false;
          tmp = obj;
        }
        return tmp;
      });
      items = [];
      HermesBuiltin.arraySpread(
        mapped.filter((pinned) => !pinned.pinned),
        HermesBuiltin.arraySpread(
          mapped.filter((pinned) => pinned.pinned),
          0,
        ),
      );
      items1 = items;
      closure_0 = items1;
      items1 = items.map((id) => {
        if (id.id !== c12) {
          return id;
        } else {
          const entries = id.entries;
          items = [];
          items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = set;
          const substr = items.slice(-50);
          const obj = { id: id.id, pinned: true === id.pinned };
          const diff = substr.length - 1;
          const merged = Object.assign(set);
          obj.entries = substr;
          obj.index = diff;
          return obj;
        }
      });
      const arraySpreadResult = HermesBuiltin.arraySpread(
        mapped.filter((pinned) => pinned.pinned),
        0,
      );
    }
  }
  const tmp3 = createTab(items1);
  items1 = [];
  items1[HermesBuiltin.arraySpread(items1, 0)] = tmp3;
  activateTab(tmp3.id);
}
function openFirstTabAtCurrentLocation() {
  const routeTabForLocation = handleChannelSelect(9985).getRouteTabForLocation(window.location);
  if (null != routeTabForLocation) {
    const obj2 = { kind: "route" };
    const merged = Object.assign(routeTabForLocation);
    let tmp4 = obj2;
  } else {
    const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
    tmp4 = null;
    if (null != currentlySelectedChannelId) {
      tmp4 = null;
      if (!isStaticChannelRoute(currentlySelectedChannelId)) {
        const obj3 = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
        let guildId = SelectedGuildStore.getGuildId();
        if (guildId == null) {
          guildId = null;
        }
        obj3.guildId = guildId;
        tmp4 = obj3;
      }
    }
  }
  let flag = null != tmp4;
  if (flag) {
    const tmp12 = createTab(tmp4);
    items = [tmp12];
    closure_11 = items;
    activateTab(tmp12.id);
    flag = true;
  }
  return flag;
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  if (enabled) {
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    enabled = channel(1360).isDesktop();
    const obj2 = channel(1360);
  }
  if (enabled) {
    if (
      0 ===
      tabs.filter((kind) => {
        let tmp = "channel" === kind.kind;
        if (tmp) {
          tmp = kind.channelId === channel.id;
        }
        if (tmp) {
          tmp = kind.id !== c12;
        }
        return tmp;
      }).length
    ) {
      return false;
    } else {
      tabs = tabs.filter((kind) => {
        let tmp = "channel" === kind.kind;
        if (tmp) {
          tmp = kind.channelId === channel.id;
        }
        let tmp3 = !tmp;
        if (tmp) {
          tmp3 = kind.id === c12;
        }
        return tmp3;
      });
      closure_13 = closure_13.filter((item) => {
        closure_0 = item;
        return items1.some((id) => id.id === closure_0);
      });
    }
  } else {
    return false;
  }
}
const Routes = fn(1072).Routes;
const isStaticChannelRoute = fn(4679).isStaticChannelRoute;
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
  afterCompute() {},
  numFrequentlyItems: 10,
});
const PersistedStore = initializeDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {}
const prototype = ChannelTabsStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  this.waitFor(ApexExperimentStore, DefaultRouteStore, SelectedChannelStore, SelectedGuildStore, UserStore);
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
  items = [...mapped.filter((pinned) => pinned.pinned), ...mapped.filter((pinned) => !pinned.pinned)];
  tabs = items;
  activeTabId = undefined;
  if (enabled != null) {
    activeTabId = enabled.activeTabId;
  }
  if (activeTabId == null) {
    activeTabId = null;
  }
  c12 = activeTabId;
  closure_13 = [];
  closure_14 =
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
  closure_22.overwriteHistory(
    (function readSavedUsages(openedChannels) {
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
    })(openedChannels),
  );
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
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
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
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
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
  },
];
ChannelTabsStore.migrations = items;
handleChannelSelect = function handleChannelSelect(arg0) {
  ({ channelId, guildId } = arg0);
  c15 = null;
  if (enabled) {
    enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    enabled = obj3(1360).isDesktop();
    const obj2 = obj3(1360);
  }
  if (enabled) {
    if (null != channelId) {
      if (!isStaticChannelRoute(channelId)) {
        obj3 = { kind: "channel", channelId, guildId: null };
        if (guildId == null) {
          guildId = null;
        }
        obj3.guildId = guildId;
        if (0 === tabs.length) {
          const tmp14 = createTab(obj3);
          items = [tmp14];
          tabs = items;
          activateTab(tmp14.id);
        } else {
          const found = tabs.find((id) => id.id === activeTabId);
          let tmp7 = null != found;
          if (tmp7) {
            tmp7 = "channel" !== found.kind || found.channelId !== channelId;
            const tmp6 = "channel" !== found.kind || found.channelId !== channelId;
          }
          if (tmp7) {
            if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
              landNavigationAroundPinnedTab(obj3);
            } else {
              tabs = tabs.map((id) => {
                if (id.id !== c12) {
                  return id;
                } else {
                  const entries = id.entries;
                  items = [];
                  items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = set;
                  const substr = items.slice(-50);
                  const obj = { id: id.id, pinned: true === id.pinned };
                  const diff = substr.length - 1;
                  const merged = Object.assign(set);
                  obj.entries = substr;
                  obj.index = diff;
                  return obj;
                }
              });
            }
            obj4 = obj3(9984);
          }
          return tmp7;
        }
      }
    }
    return false;
  } else {
    return false;
  }
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
      if ("route" === location.location.kind) {
        const obj = { kind: "route", routePath: location.location.routePath, routeLabel: location.location.routeLabel };
        let obj2 = obj;
      } else {
        obj2 = { kind: "channel", channelId: location.location.channelId, guildId: location.location.guildId };
      }
      const tmp12Result = createTab(obj2, undefined === location.sourceTabId ? c12 : location.sourceTabId);
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
        return items1.some((id) => id.id === closure_0);
      });
      channelId = undefined;
      set.delete(tabs[findIndexResult].id);
      if ("channel" === tabs[findIndexResult].kind) {
        if (enabled) {
          enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
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
          HermesBuiltin.arraySpread(
            closure_18.filter((channelId) => channelId.channelId !== channelId),
            1,
          );
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
          enabled2 = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
        }
        if (enabled2) {
          enabled2 = handleChannelSelect(1360).isDesktop();
          const obj2 = handleChannelSelect(1360);
        }
        tmp3 = enabled2;
      }
      if (tmp3) {
        openFirstTabAtCurrentLocation();
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
      enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      enabled = set(1360).isDesktop();
      const obj2 = set(1360);
    }
    if (enabled) {
      let tmp6 = !tmp;
      if (!tmp6) {
        if (0 === items1.length) {
          return openFirstTabAtCurrentLocation();
        }
      }
      const currentUser = UserStore.getCurrentUser();
      let tmp10 = null;
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let num3 = 9;
      if (true === isStaffResult) {
        num3 = 25;
      }
      let diff = items1.length - num3;
      let flag2 = false;
      if (diff > 0) {
        const _Set = Set;
        const found = items1.filter((id) => id.id !== activeTabId);
        let substr = found.slice(-diff);
        set = new Set(substr.map((id) => id.id));
        items1 = items1.filter((id) => !set.has(id.id));
        closure_13 = closure_13.filter((item) => {
          closure_0 = item;
          return items1.some((id) => id.id === closure_0);
        });
        flag2 = true;
      }
      if (!tmp6) {
        if (!tmp6) {
          tmp6 = flag2;
        }
        return tmp6;
      } else {
        const obj4 = { pathname: DefaultRouteStore.defaultRoute };
        const routeTabForLocation = set(9985).getRouteTabForLocation(obj4);
        const obj5 = set(9985);
        const tmp13 = set;
        const _window = window;
        const routeTabForLocation1 = set(9985).getRouteTabForLocation(window.location);
        if (tmp10 != routeTabForLocation1) {
          const obj6 = { kind: "route" };
          let merged = Object.assign(routeTabForLocation1);
          items1 = obj6;
        } else {
          const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
          items1 = null;
          if (tmp10 != currentlySelectedChannelId) {
            items1 = null;
            if (!isStaticChannelRoute(currentlySelectedChannelId)) {
              const obj8 = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
              let guildId = SelectedGuildStore.getGuildId();
              if (guildId == tmp10) {
                guildId = null;
              }
              obj8.guildId = guildId;
              items1 = obj8;
            }
          }
        }
        if (items1 == tmp10) {
          let tmp27 = null;
          if (tmp10 != routeTabForLocation) {
            const obj9 = { kind: "route" };
            const merged1 = Object.assign(routeTabForLocation);
            tmp27 = obj9;
          }
          items1 = tmp27;
        }
        let flag3 = false;
        if (tmp10 != items1) {
          const atResult = items1.at(-1);
          set = atResult;
          if (tmp10 != atResult) {
            if (!atResult.pinned) {
              activateTab(atResult.id);
              if (atResult.pinned) {
                const mapped = items1.map((id) => {
                  let tmp = id;
                  if (id.id === set.id) {
                    const obj = {};
                    const merged = Object.assign(id);
                    obj.pinned = false;
                    tmp = obj;
                  }
                  return tmp;
                });
                items = [];
                HermesBuiltin.arraySpread(
                  mapped.filter((pinned) => !pinned.pinned),
                  HermesBuiltin.arraySpread(
                    mapped.filter((pinned) => pinned.pinned),
                    0,
                  ),
                );
                items1 = items;
                const arraySpreadResult = HermesBuiltin.arraySpread(
                  mapped.filter((pinned) => pinned.pinned),
                  0,
                );
              }
              flag3 = true;
              if (!tmp13Result.isSameTabLocation(atResult, items1)) {
                closure_129_0 = items1;
                items1 = items1.map((id) => {
                  if (id.id !== c12) {
                    return id;
                  } else {
                    const entries = id.entries;
                    items = [];
                    items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = set;
                    const substr = items.slice(-50);
                    const obj = { id: id.id, pinned: true === id.pinned };
                    const diff = substr.length - 1;
                    const merged = Object.assign(set);
                    obj.entries = substr;
                    obj.index = diff;
                    return obj;
                  }
                });
                flag3 = true;
              }
              tmp13Result = tmp13(9984);
            } else {
              const currentUser1 = UserStore.getCurrentUser();
              let isStaffResult1;
              if (currentUser1 != tmp10) {
                isStaffResult1 = currentUser1.isStaff();
              }
            }
          }
        }
        const tmp44 = createTab(items1, tmp10);
        items1 = [];
        items1[HermesBuiltin.arraySpread(items1, 0)] = tmp44;
        tmp10 = activateTab(tmp44.id);
        flag3 = true;
        const obj7 = set(9985);
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
