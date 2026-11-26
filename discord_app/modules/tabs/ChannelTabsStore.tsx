// discord_app/modules/tabs/ChannelTabsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FrecencyDefault from "../../lib/Frecency.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import DefaultRouteStore from "../../stores/DefaultRouteStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

let handleChannelSelect = fn;
function pruneOpenedChannels() {
  const keys = Object.keys(closure_23.usageHistory);
  for (const item10017 of keys) {
    if (!set.has(item10017)) {
      let usageHistory = closure_23.usageHistory;
      delete tmp2[tmp];
    }
    continue;
  }
  set = new Set(closure_23.frequently);
}
function recordClosedTab(id) {
  set.delete(id.id);
  if ("channel" === id.kind) {
    const channelId = id.channelId;
    const obj = { channelId, guildId: id.guildId, closedAt: null };
    const _Date = Date;
    obj.closedAt = Date.now();
    items = [obj];
    HermesBuiltin.arraySpread(
      closure_19.filter((channelId) => channelId.channelId !== channelId),
      1,
    );
    closure_19 = items.slice(0, 10);
  }
}
function createTab(routeTabForLocation, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = c11;
  }
  handleChannelSelect = tmp;
  let tmp2;
  if (null != tmp) {
    let found = tabs.find((id) => id.id === closure_0);
    if (found == null) {
      found = tabs.find((id) => id.id === _null);
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
    handleChannelSelect(11528);
    substr1 = mapped;
  }
  const obj2 = { id: null };
  closure_13 = tmp12 + 1;
  obj2.id = String(+closure_13);
  let merged = Object.assign(routeTabForLocation);
  obj2.pinned = false;
  obj2.entries = substr1;
  obj2.index = substr1.length - 1;
  return obj2;
}
function navigateTo(routeTabForLocation1) {
  if (tabsExperimentEnabled) {
    closure_14 = null;
    c15 = null;
    if (null == routeTabForLocation1) {
      return false;
    } else if (0 === tabs.length) {
      const tmp32 = createTab(routeTabForLocation1);
      items = [tmp32];
      tabs = items;
      id = tmp32.id;
    } else {
      const found = tabs.find((id) => id.id === id);
      let tmp5 = null != found;
      if (tmp5) {
        tmp5 = !handleChannelSelect(11528).isSameTabLocation(found, routeTabForLocation1);
        const obj = handleChannelSelect(11528);
      }
      if (!tmp5) {
        return tmp5;
      } else {
        let hasItem = null != id;
        if (hasItem) {
          let tabId;
          if (obj2 != null) {
            tabId = obj2.tabId;
          }
          hasItem = tabId === id;
        }
        if (hasItem) {
          hasItem = set.has(id);
        }
        if (!hasItem) {
          obj2 = null;
        }
        if (!found.pinned) {
          handleChannelSelect = routeTabForLocation1;
          tabs = tabs.map((id) => {
            if (id.id !== c11) {
              return id;
            } else {
              const entries = id.entries;
              items = [];
              items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = routeTabForLocation1;
              const substr = items.slice(-50);
              const obj = { id: id.id, pinned: true === id.pinned };
              const diff = substr.length - 1;
              const merged = Object.assign(routeTabForLocation1);
              obj.entries = substr;
              obj.index = diff;
              return obj;
            }
          });
        }
        closure_129_0 = routeTabForLocation1;
        const found1 = tabs.find((item) => handleChannelSelect(11528).isSameTabLocation(item, closure_0));
        if (null != found1) {
          ({ id: c15, id } = found1);
        } else {
          const currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          let num = 9;
          if (true === isStaffResult) {
            num = 25;
          }
          if (tabs.length < num) {
            const tmp18 = createTab(routeTabForLocation1);
            const items1 = [];
            items1[HermesBuiltin.arraySpread(tabs, 0)] = tmp18;
            tabs = items1;
            if (null != id) {
              obj2 = { tabId: tmp18.id, openerId: id, survivesSwitchToOpener: true };
            }
            id = tmp18.id;
          }
        }
        closure_14 = id;
        handleChannelSelect = id;
        const mapped = tabs.map((id) => {
          let tmp = id;
          if (id.id === routeTabForLocation1) {
            const obj = {};
            const merged = Object.assign(id);
            obj.pinned = false;
            tmp = obj;
          }
          return tmp;
        });
        const items2 = [];
        HermesBuiltin.arraySpread(
          mapped.filter((pinned) => !pinned.pinned),
          HermesBuiltin.arraySpread(
            mapped.filter((pinned) => pinned.pinned),
            0,
          ),
        );
        closure_130_0 = routeTabForLocation1;
        tabs = items2.map((id) => {
          if (id.id !== c11) {
            return id;
          } else {
            const entries = id.entries;
            items = [];
            items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = routeTabForLocation1;
            const substr = items.slice(-50);
            const obj = { id: id.id, pinned: true === id.pinned };
            const diff = substr.length - 1;
            const merged = Object.assign(routeTabForLocation1);
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
  } else {
    return false;
  }
}
function initializeTabs() {
  if (c17) {
    if (0 === tabs.length) {
      const _window2 = window;
      let routeTabForLocation = routeTabForLocation1(11528).getRouteTabForLocation(window.location);
      if (null == routeTabForLocation) {
        const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
        let tmp40 = null;
        if (null != currentlySelectedChannelId) {
          tmp40 = null;
          if (!isStaticChannelRoute(currentlySelectedChannelId)) {
            const obj2 = { kind: "channel", channelId: currentlySelectedChannelId, guildId: null };
            let guildId = SelectedGuildStore.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            obj2.guildId = guildId;
            tmp40 = obj2;
          }
        }
        routeTabForLocation = tmp40;
      }
      let flag3 = null != routeTabForLocation;
      if (flag3) {
        const tmp45 = createTab(routeTabForLocation);
        items = [tmp45];
        tabs = items;
        let id = tmp45.id;
        flag3 = true;
      }
      let tmp32 = flag3;
      const obj7 = routeTabForLocation1(11528);
    } else {
      tmp32 = trimToMaxTabs();
    }
    return tmp32;
  } else {
    c17 = true;
    const tmp2 = trimToMaxTabs();
    const _window = window;
    routeTabForLocation1 = routeTabForLocation1(11528).getRouteTabForLocation(window.location);
    if (null == routeTabForLocation1) {
      const currentlySelectedChannelId1 = SelectedChannelStore.getCurrentlySelectedChannelId();
      let tmp10 = null;
      if (null != currentlySelectedChannelId1) {
        tmp10 = null;
        if (!isStaticChannelRoute(currentlySelectedChannelId1)) {
          const obj3 = { kind: "channel", channelId: currentlySelectedChannelId1, guildId: null };
          let guildId1 = SelectedGuildStore.getGuildId();
          if (guildId1 == null) {
            guildId1 = null;
          }
          obj3.guildId = guildId1;
          tmp10 = obj3;
        }
      }
      routeTabForLocation1 = tmp10;
    }
    if (routeTabForLocation1 == null) {
      const obj4 = { pathname: DefaultRouteStore.defaultRoute };
      routeTabForLocation1 = tmp3(11528).getRouteTabForLocation(obj4);
      const tmp3Result = tmp3(11528);
    }
    let flag2 = false;
    if (null != routeTabForLocation1) {
      const atResult = tabs.at(-1);
      if (null == atResult) {
        const tmp27 = createTab(routeTabForLocation1, null);
        const items1 = [];
        items1[HermesBuiltin.arraySpread(tabs, 0)] = tmp27;
        tabs = items1;
        id = tmp27.id;
        flag2 = true;
      } else {
        if (atResult.pinned) {
          const currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
        }
        id = atResult.id;
        if (atResult.pinned) {
          routeTabForLocation1 = atResult.id;
          const mapped = tabs.map((id) => {
            let tmp = id;
            if (id.id === routeTabForLocation1) {
              const obj = {};
              const merged = Object.assign(id);
              obj.pinned = false;
              tmp = obj;
            }
            return tmp;
          });
          const items2 = [];
          HermesBuiltin.arraySpread(
            mapped.filter((pinned) => !pinned.pinned),
            HermesBuiltin.arraySpread(
              mapped.filter((pinned) => pinned.pinned),
              0,
            ),
          );
          tabs = items2;
          const arraySpreadResult = HermesBuiltin.arraySpread(
            mapped.filter((pinned) => pinned.pinned),
            0,
          );
        }
        flag2 = true;
        if (!tmp3Result2.isSameTabLocation(atResult, routeTabForLocation1)) {
          tabs = tabs.map((id) => {
            if (id.id !== c11) {
              return id;
            } else {
              const entries = id.entries;
              items = [];
              items[HermesBuiltin.arraySpread(entries.slice(0, id.index + 1), 0)] = routeTabForLocation1;
              const substr = items.slice(-50);
              const obj = { id: id.id, pinned: true === id.pinned };
              const diff = substr.length - 1;
              const merged = Object.assign(routeTabForLocation1);
              obj.entries = substr;
              obj.index = diff;
              return obj;
            }
          });
          flag2 = true;
        }
        tmp3Result2 = tmp3(11528);
      }
    }
    if (!flag2) {
      flag2 = tmp2;
    }
    return flag2;
  }
}
function trimToMaxTabs() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let num = 9;
  if (true === isStaffResult) {
    num = 25;
  }
  const diff = tabs.length - num;
  if (diff <= 0) {
    return false;
  } else {
    const _Set = Set;
    const found = tabs.filter((id) => id.id !== _null);
    const substr = found.slice(-diff);
    set = new Set(substr.map((id) => id.id));
    tabs = tabs.filter((id) => !set.has(id.id));
    let tmp6 = null != _null2;
    if (tmp6) {
      let hasItem = set.has(_null2.tabId);
      if (!hasItem) {
        hasItem = set.has(_null2.openerId);
      }
      tmp6 = hasItem;
    }
    if (tmp6) {
      _null2 = null;
    }
    return true;
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let isStrandedBackgroundTab;
  if (tabsExperimentEnabled) {
    isStrandedBackgroundTab = function isStrandedBackgroundTab(kind) {
      let tmp = "channel" === kind.kind;
      if (tmp) {
        tmp = kind.channelId === channel.id;
      }
      if (tmp) {
        tmp = kind.id !== c11;
      }
      return tmp;
    };
    if (tabs.some(isStrandedBackgroundTab)) {
      const _Set = Set;
      const found = tabs.filter(isStrandedBackgroundTab);
      set = new Set(found.map((id) => id.id));
      let tmp8 = null != _null2;
      if (tmp8) {
        let hasItem = set.has(_null2.tabId);
        if (!hasItem) {
          hasItem = set.has(_null2.openerId);
        }
        tmp8 = hasItem;
      }
      if (tmp8) {
        _null2 = null;
      }
      tabs = tabs.filter((kind) => {
        if (typeof isStrandedBackgroundTab === "function") {
          let tmp2 = "channel" === kind.kind;
          if (tmp2) {
            tmp2 = kind.channelId === channel.id;
          }
          if (tmp2) {
            tmp2 = kind.id !== c11;
          }
          return !tmp2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
}
const Routes = fn(1071).Routes;
const isStaticChannelRoute = fn(4899).isStaticChannelRoute;
let tabs = [];
let c11 = null;
let c12 = null;
let closure_13 = 1;
let c14 = null;
let c15 = null;
let c16 = false;
let c17 = false;
let tabsExperimentEnabled = false;
let closure_19 = [];
let set = new Set();
let frequently = null;
let closure_22 = [];
let closure_23 = new FrecencyDefault({
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
prototype["initialize"] = function initialize(tabs) {
  this.waitFor(ApexExperimentStore, DefaultRouteStore, SelectedChannelStore, SelectedGuildStore, UserStore);
  items = [ApexExperimentStore];
  this.syncWith(items, () => {
    tabsExperimentEnabled = handleChannelSelect(dependencyMap[10]).getTabsExperimentEnabled(
      "ChannelTabsStore.syncWith",
    );
    let flag = tabsExperimentEnabled !== tabsExperimentEnabled;
    if (flag) {
      if (tabsExperimentEnabled) {
        tabsExperimentEnabled = closure_1_16;
      }
      flag = true;
      if (tabsExperimentEnabled) {
        initializeTabs();
        flag = true;
      }
    }
    return flag;
  });
  tabs = undefined;
  if (tabs != null) {
    tabs = tabs.tabs;
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
  let activeTabId;
  if (tabs != null) {
    activeTabId = tabs.activeTabId;
  }
  if (activeTabId == null) {
    activeTabId = null;
  }
  c11 = activeTabId;
  closure_13 =
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
  let someResult = null == c11;
  if (!someResult) {
    someResult = tabs.some((id) => id.id === _null);
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
    c11 = id;
  }
  let openedChannels;
  if (tabs != null) {
    openedChannels = tabs.openedChannels;
  }
  closure_23.overwriteHistory(
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
  tabsExperimentEnabled = handleChannelSelect(11529).getTabsExperimentEnabled("ChannelTabsStore.initialize");
  if (tabsExperimentEnabled !== tabsExperimentEnabled) {
    if (tabsExperimentEnabled) {
      tabsExperimentEnabled = c16;
    }
    if (tabsExperimentEnabled) {
      initializeTabs();
    }
  }
  let obj = handleChannelSelect(11529);
};
prototype["getState"] = function getState() {
  const obj = {};
  const entries = Object.entries(closure_23.usageHistory);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let obj3 = { totalUses: null, recentUses: null };
    ({ totalUses: obj2.totalUses, recentUses: obj2.recentUses } = tmp5[1]);
    obj[tmp5[0]] = obj3;
    continue;
  }
  return { tabs, activeTabId: _null, openedChannels: obj };
};
prototype["getTabs"] = function getTabs() {
  return closure_10;
};
prototype["getActiveTabId"] = function getActiveTabId() {
  return c11;
};
prototype["getActiveTab"] = function getActiveTab() {
  let found = tabs.find((id) => id.id === _null);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getTabUnpinnedAtLimit"] = function getTabUnpinnedAtLimit() {
  let found = tabs.find((id) => id.id === closure_1_14);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getTabRefocusedFromPinned"] = function getTabRefocusedFromPinned() {
  let found = tabs.find((id) => id.id === closure_1_15);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getOtherTabsToClose"] = function getOtherTabsToClose(tabId, mode) {
  closure_0 = tabId;
  closure_1 = mode;
  const findIndexResult = tabs.findIndex((id) => id.id === set);
  _slicedToArray = findIndexResult;
  if (-1 === findIndexResult) {
    items = [];
  } else {
    items = tabs.filter((pinned, index) => {
      pinned = pinned.pinned;
      let tmp = !pinned;
      if (!pinned) {
        tmp = index !== c2;
      }
      if (tmp) {
        let tmp4 = "all" === mode;
        if (!tmp4) {
          tmp4 = index > c2;
        }
        tmp = tmp4;
      }
      return tmp;
    });
  }
  return items;
};
prototype["getCloseOtherTabsCount"] = function getCloseOtherTabsCount(arg0) {
  closure_0 = arg0;
  const all = "all";
  const findIndexResult = tabs.findIndex((id) => id.id === set);
  _slicedToArray = findIndexResult;
  if (-1 === findIndexResult) {
    items = [];
  } else {
    items = tabs.filter((pinned, index) => {
      pinned = pinned.pinned;
      let tmp = !pinned;
      if (!pinned) {
        tmp = index !== c2;
      }
      if (tmp) {
        let tmp4 = "all" === mode;
        if (!tmp4) {
          tmp4 = index > c2;
        }
        tmp = tmp4;
      }
      return tmp;
    });
  }
  return items.length;
};
prototype["getCloseTabsToRightCount"] = function getCloseTabsToRightCount(arg0) {
  closure_0 = arg0;
  const right = "right";
  const findIndexResult = tabs.findIndex((id) => id.id === set);
  _slicedToArray = findIndexResult;
  if (-1 === findIndexResult) {
    items = [];
  } else {
    items = tabs.filter((pinned, index) => {
      pinned = pinned.pinned;
      let tmp = !pinned;
      if (!pinned) {
        tmp = index !== c2;
      }
      if (tmp) {
        let tmp4 = "all" === mode;
        if (!tmp4) {
          tmp4 = index > c2;
        }
        tmp = tmp4;
      }
      return tmp;
    });
  }
  return items.length;
};
prototype["getRecentlyClosed"] = function getRecentlyClosed() {
  return closure_19;
};
prototype["getFrequentlyOpenedChannelIds"] = function getFrequentlyOpenedChannelIds() {
  frequently = usageHistory.frequently;
  if (frequently !== frequently) {
    closure_22 = frequently.filter((item) => {
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
  return closure_22;
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
  return navigateTo(tmp2);
};
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, {
  CHANNEL_TABS_OPEN: function handleOpenTab(location) {
    if (tabsExperimentEnabled) {
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let num = 9;
      if (true === isStaffResult) {
        num = 25;
      }
      if (tabs.length < num) {
        const _location = location.location;
        if ("route" === _location.kind) {
          ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = _location);
          let obj4 = { kind: "route", routePath: null, routeLabel: null };
          const obj = { kind: "route", routePath: null, routeLabel: null };
        } else {
          obj4 = { kind: "channel", channelId: null, guildId: null };
          ({ channelId: obj2.channelId, guildId: obj2.guildId } = _location);
        }
        const tmp23Result = createTab(obj4, undefined === location.sourceTabId ? _null : location.sourceTabId);
        items = [];
        items[HermesBuiltin.arraySpread(tabs, 0)] = tmp23Result;
        tabs = items;
        if (null == _null) {
          _null = tmp23Result.id;
        } else if (true !== location.background) {
          const obj7 = { tabId: tmp23Result.id, openerId: _null, survivesSwitchToOpener: false };
          c12 = obj7;
          _null = tmp23Result.id;
        }
        if ("route" === tmp23Result.kind) {
          if (tmp23Result.routePath === Routes.FRIENDS) {
            set.add(tmp23Result.id);
          }
        }
        set.delete(tmp23Result.id);
        let tmp13 = "channel" === tmp23Result.kind;
        if (tmp13) {
          tmp13 = !isStaticChannelRoute(tmp23Result.channelId);
        }
        if (tmp13) {
          const channelId = tmp23Result.channelId;
          closure_23.track(channelId);
          pruneOpenedChannels();
          closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
        }
      }
    }
    return false;
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    tabId = tabId.tabId;
    let channelId = tabId;
    if (tabsExperimentEnabled) {
      const findIndexResult = tabs.findIndex((id) => id.id === channelId);
      if (-1 === findIndexResult) {
        return false;
      } else if (1 === tabs.length) {
        return false;
      } else {
        if (tabs[findIndexResult].id === id2) {
          const id = tabs[findIndexResult].id;
          let tabId1;
          if (_null2 != null) {
            tabId1 = _null2.tabId;
          }
          if (tabId1 === id) {
            let openerId = _null2.openerId;
          } else {
            let openerId1;
            if (_null2 != null) {
              openerId1 = _null2.openerId;
            }
            openerId = null;
            if (openerId1 === id) {
              openerId = _null2.tabId;
            }
          }
          channelId = openerId;
          items = [];
          const substr = tabs.slice(0, findIndexResult);
          HermesBuiltin.arraySpread(substr.reverse(), HermesBuiltin.arraySpread(tabs.slice(findIndexResult + 1), 0));
          let found = items.find((id) => id.id === channelId);
          if (found == null) {
            found = items[0];
          }
          id2 = found.id;
          const arraySpreadResult = HermesBuiltin.arraySpread(tabs.slice(findIndexResult + 1), 0);
        }
        tabs = tabs.filter((id) => id.id !== channelId);
        const _Set = Set;
        const items1 = [tabId];
        set = new Set(items1);
        let tmp22 = null != _null2;
        if (tmp22) {
          let hasItem = set.has(_null2.tabId);
          if (!hasItem) {
            hasItem = set.has(_null2.openerId);
          }
          tmp22 = hasItem;
        }
        if (tmp22) {
          _null2 = null;
        }
        set.delete(tabs[findIndexResult].id);
        if ("channel" === tabs[findIndexResult].kind) {
          channelId = tmp34.channelId;
          const obj = { channelId, guildId: tmp34.guildId, closedAt: null };
          const _Date = Date;
          obj.closedAt = Date.now();
          const items2 = [obj];
          HermesBuiltin.arraySpread(
            closure_19.filter((channelId) => channelId.channelId !== channelId),
            1,
          );
          closure_19 = items2.slice(0, 10);
        }
      }
    } else {
      return false;
    }
  },
  CHANNEL_TABS_CLOSE_OTHERS: function handleCloseOtherTabs(tabId) {
    tabId = tabId.tabId;
    set = tabId;
    const mode = tabId.mode;
    const findIndexResult = tabs.findIndex((id) => id.id === set);
    c2 = findIndexResult;
    if (-1 === findIndexResult) {
      items = [];
    } else {
      items = tabs.filter((pinned, index) => {
        pinned = pinned.pinned;
        let tmp = !pinned;
        if (!pinned) {
          tmp = index !== c2;
        }
        if (tmp) {
          let tmp4 = "all" === mode;
          if (!tmp4) {
            tmp4 = index > c2;
          }
          tmp = tmp4;
        }
        return tmp;
      });
    }
    if (0 === items.length) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(items.map((id) => id.id));
      let hasItem = null != c11;
      if (hasItem) {
        hasItem = set.has(c11);
      }
      if (hasItem) {
        c11 = tabId;
      }
      tabs = tabs.filter((id) => !set.has(id.id));
      let tmp7 = null != _null2;
      if (tmp7) {
        let hasItem1 = set.has(_null2.tabId);
        if (!hasItem1) {
          hasItem1 = set.has(_null2.openerId);
        }
        tmp7 = hasItem1;
      }
      if (tmp7) {
        _null2 = null;
      }
      const reversed = items.reverse();
      const item = reversed.forEach(recordClosedTab);
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    if (tabsExperimentEnabled) {
      if (c11 !== tabId) {
        if (null == tabs.find((id) => id.id === tabId)) {
          return false;
        } else {
          if (null != _null2) {
            let tmp5 = c11 === _null2.tabId;
            if (tmp5) {
              let tmp8 = tabId === _null2.openerId;
            } else {
              tmp8 = c11 === _null2.openerId;
              if (tmp8) {
                tmp8 = tabId === _null2.tabId;
              }
            }
            let tmp11 = !tmp8;
            if (tmp8) {
              if (tmp5) {
                tmp5 = !_null2.survivesSwitchToOpener;
              }
              tmp11 = tmp5;
            }
            if (tmp11) {
              _null2 = null;
            }
          }
          c11 = tabId;
        }
      }
    }
    return false;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    if (tabsExperimentEnabled) {
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
        const tmp6 = _slicedToArray(items1, 2);
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.max(tmp6[0], Math.min(tmp, tmp6[1]));
        if (findIndexResult === bound) {
          return false;
        } else {
          const items2 = [];
          HermesBuiltin.arraySpread(tabs, 0);
          items2.splice(bound, 0, _slicedToArray(items2.splice(findIndexResult, 1), 1)[0]);
          tabs = items2;
        }
      }
    } else {
      return false;
    }
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    ({ tabId: handleChannelSelect, pinned } = arg0);
    const found = tabs.find((id) => id.id === handleChannelSelect);
    if (tabsExperimentEnabled) {
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
    }
    return false;
  },
  CHANNEL_TABS_BACK: (arg0) => {
    let found = tabs.find((id) => id.id === _null);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = set.has(found.id);
    }
    if (!hasItem) {
      return false !== tmp || hasItem;
    } else {
      if ("route" !== found.kind) {
        set.delete(found.id);
        let flag = "channel" === found.kind;
        if (flag) {
          flag = !isStaticChannelRoute(found.channelId);
        }
        if (flag) {
          const channelId = found.channelId;
          closure_2_23.track(channelId);
          dependencyMap();
          closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
          flag = true;
        }
      }
      found = set.add(found.id);
      flag = false;
    }
    tmp = handleChannelSelect(arg0);
  },
  CHANNEL_TABS_FORWARD: (arg0) => {
    let found = tabs.find((id) => id.id === _null);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = set.has(found.id);
    }
    if (!hasItem) {
      return false !== tmp || hasItem;
    } else {
      if ("route" !== found.kind) {
        set.delete(found.id);
        let flag = "channel" === found.kind;
        if (flag) {
          flag = !isStaticChannelRoute(found.channelId);
        }
        if (flag) {
          const channelId = found.channelId;
          closure_2_23.track(channelId);
          dependencyMap();
          closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
          flag = true;
        }
      }
      found = set.add(found.id);
      flag = false;
    }
    tmp = handleChannelSelect(arg0);
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: (arg0) => {
    let found = tabs.find((id) => id.id === _null);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = set.has(found.id);
    }
    if (!hasItem) {
      return false !== tmp || hasItem;
    } else {
      if ("route" !== found.kind) {
        set.delete(found.id);
        let flag = "channel" === found.kind;
        if (flag) {
          flag = !isStaticChannelRoute(found.channelId);
        }
        if (flag) {
          const channelId = found.channelId;
          closure_2_23.track(channelId);
          dependencyMap();
          closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
          flag = true;
        }
      }
      found = set.add(found.id);
      flag = false;
    }
    tmp = handleChannelSelect(arg0);
  },
  CHANNEL_SELECT: (arg0) => {
    let found = tabs.find((id) => id.id === _null);
    let hasItem = null != found;
    if (hasItem) {
      hasItem = set.has(found.id);
    }
    if (!hasItem) {
      return false !== tmp || hasItem;
    } else {
      if ("route" !== found.kind) {
        set.delete(found.id);
        let flag = "channel" === found.kind;
        if (flag) {
          flag = !isStaticChannelRoute(found.channelId);
        }
        if (flag) {
          const channelId = found.channelId;
          closure_2_23.track(channelId);
          dependencyMap();
          closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
          flag = true;
        }
      }
      found = set.add(found.id);
      flag = false;
    }
    tmp = handleChannelSelect(arg0);
  },
  CHANNEL_DELETE: handleChannelDelete,
  CONNECTION_OPEN: function handleConnectionOpen() {
    c16 = true;
    tabsExperimentEnabled = handleChannelSelect(11529).getTabsExperimentEnabled(
      "ChannelTabsStore.handleConnectionOpen",
    );
    let flag = tabsExperimentEnabled !== tabsExperimentEnabled;
    if (flag) {
      if (tabsExperimentEnabled) {
        tabsExperimentEnabled = c16;
      }
      flag = true;
      if (tabsExperimentEnabled) {
        initializeTabs();
        flag = true;
      }
    }
    let tmp4 = flag;
    if (!tmp4) {
      let tmp5 = tabsExperimentEnabled;
      if (tabsExperimentEnabled) {
        tmp5 = initializeTabs();
      }
      tmp4 = tmp5;
    }
    return tmp4;
  },
  THREAD_DELETE: handleChannelDelete,
  LOGOUT: function handleLogout() {
    closure_10 = [];
    c11 = null;
    c12 = null;
    set = new Set();
    closure_19 = [];
    closure_23.overwriteHistory({});
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
