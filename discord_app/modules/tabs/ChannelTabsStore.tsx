// discord_app/modules/tabs/ChannelTabsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import TabsExperimentDefault from "TabsExperiment.tsx";
import ChannelTabRoutes from "ChannelTabRoutes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import DefaultRouteStore from "../../stores/DefaultRouteStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function activateTab(id) {
  let tmp = null != c11;
  if (tmp) {
    tmp = c11 !== id;
  }
  if (tmp) {
    closure_0 = c11;
    items = [c11];
    HermesBuiltin.arraySpread(
      closure_12.filter((item) => item !== closure_0),
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
    closure_12 = items.slice(0, num2);
  }
  c11 = id;
  closure_0 = id;
  const items1 = [id, ...closure_12.filter((item) => item !== closure_0)];
  const currentUser1 = UserStore.getCurrentUser();
  let isStaffResult1;
  if (currentUser1 != null) {
    isStaffResult1 = currentUser1.isStaff();
  }
  let num4 = 9;
  if (true === isStaffResult1) {
    num4 = 25;
  }
  closure_12 = items1.slice(0, num4);
}
function createTab(items1) {
  let tmp = sourceTabId;
  if (sourceTabId === undefined) {
    tmp = c11;
  }
  _require = tmp;
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
    require("ChannelTabPinScope");
    substr1 = mapped;
  }
  const obj2 = { id: null };
  closure_13 = tmp12 + 1;
  obj2.id = String(+closure_13);
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
    if (null != c11) {
      closure_15 = c11;
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
      if (c14 === c11) {
        c14 = null;
      }
      items1 = items.map((id) => {
        if (id.id !== c11) {
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
  const routeTabForLocation = ChannelTabRoutes.getRouteTabForLocation(window.location);
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
    closure_10 = items;
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
          tmp = kind.id !== c11;
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
          tmp3 = kind.id === c11;
        }
        return tmp3;
      });
      closure_12 = closure_12.filter((item) => {
        closure_0 = item;
        return items1.some((id) => id.id === closure_0);
      });
    }
  } else {
    return false;
  }
}
const isStaticChannelRoute = fn(5162).isStaticChannelRoute;
let tabs = [];
let c11 = null;
let closure_12 = [];
let closure_13 = 1;
let c14 = null;
let c15 = null;
let c16 = false;
let enabled = false;
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
  c11 = activeTabId;
  closure_12 = [];
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
    c11 = id;
  }
};
prototype["getState"] = function getState() {
  return { tabs, activeTabId, enabled };
};
prototype["getTabs"] = function getTabs() {
  return closure_10;
};
prototype["getActiveTabId"] = function getActiveTabId() {
  return c11;
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
prototype["isActiveTabFresh"] = function isActiveTabFresh() {
  let tmp = null != c14;
  if (tmp) {
    tmp = c14 === c11;
  }
  return tmp;
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
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, {
  CHANNEL_TABS_OPEN: function handleOpenTab(kind) {
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
      if ("route" === kind.kind) {
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = kind);
        let obj5 = { kind: "route", routePath: null, routeLabel: null };
        const obj = { kind: "route", routePath: null, routeLabel: null };
      } else {
        obj5 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj2.channelId, guildId: obj2.guildId } = kind);
      }
      let sourceTabId = kind.sourceTabId;
      if (sourceTabId == null) {
        sourceTabId = c11;
      }
      const tmp10Result = createTab(obj5, sourceTabId);
      items = [];
      items[HermesBuiltin.arraySpread(tabs, 0)] = tmp10Result;
      tabs = items;
      let tmp5 = true !== kind.active;
      if (tmp5) {
        tmp5 = null != c11;
      }
      if (!tmp5) {
        activateTab(tmp10Result.id);
      }
      if (true === kind.fresh) {
        const id = tmp10Result.id;
      }
    }
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else if (1 === tabs.length) {
      return false;
    } else {
      if (c14 === tabId) {
        c14 = null;
      }
      tabs = tabs.filter((id) => id.id !== tabId);
      closure_12 = closure_12.filter((item) => {
        closure_0 = item;
        return items1.some((id) => id.id === closure_0);
      });
      if (tabs[findIndexResult].id === tmp14) {
        const _Math = Math;
        c11 = null;
        let id = closure_12[0];
        if (id == null) {
          id = tabs[Math.min(Math, findIndexResult, tabs.length - 1)].id;
        }
        activateTab(id);
      }
      tmp14 = c11;
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    let tmp = c11 !== tabId;
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
    ({ tabId: require, pinned } = arg0);
    const found = tabs.find((id) => id.id === _require);
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
  CHANNEL_TABS_BACK: function handleTabHistoryBack() {
    const found = tabs.find((id) => id.id === activeTabId);
    let flag = false;
    if (null != found) {
      const sum = found.index + -1;
      const require = sum;
      closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        if (c14 === c11) {
          c14 = null;
        }
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === c11) {
            const obj = { id: id.id, pinned: true === id.pinned };
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
      const require = sum;
      closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        if (c14 === c11) {
          c14 = null;
        }
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === c11) {
            const obj = { id: id.id, pinned: true === id.pinned };
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
          enabled2 = utils_PlatformUtils.isDesktop();
        }
        tmp3 = enabled2;
      }
      if (tmp3) {
        openFirstTabAtCurrentLocation();
      }
    } else {
      tabs = [];
      c11 = null;
      closure_12 = [];
      c14 = null;
    }
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: function handleNavigateRoute(routePath) {
    routePath = routePath.routePath;
    c15 = null;
    if (enabled) {
      enabled = TabsExperimentDefault.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      enabled = obj3(1360).isDesktop();
      const obj2 = obj3(1360);
    }
    if (enabled) {
      obj3 = { kind: "route", routePath, routeLabel: routePath.routeLabel };
      if (0 === tabs.length) {
        const tmp16 = createTab(obj3);
        items = [tmp16];
        tabs = items;
        activateTab(tmp16.id);
      } else {
        const found = tabs.find((id) => id.id === activeTabId);
        let tmp7 = null != found;
        if (tmp7) {
          tmp7 = "route" !== found.kind || found.routePath !== routePath;
          const tmp6 = "route" !== found.kind || found.routePath !== routePath;
        }
        if (tmp7) {
          if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
            landNavigationAroundPinnedTab(obj3);
          } else {
            if (c14 === c11) {
              c14 = null;
            }
            tabs = tabs.map((id) => {
              if (id.id !== c11) {
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
          obj4 = obj3(10277);
        }
        return tmp7;
      }
    } else {
      return false;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
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
            const tmp16 = createTab(obj3);
            items = [tmp16];
            tabs = items;
            activateTab(tmp16.id);
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
                if (c14 === c11) {
                  c14 = null;
                }
                tabs = tabs.map((id) => {
                  if (id.id !== c11) {
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
              obj4 = obj3(10277);
            }
            return tmp7;
          }
        }
      }
      return false;
    } else {
      return false;
    }
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
        closure_12 = closure_12.filter((item) => {
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
        const routeTabForLocation = set(10278).getRouteTabForLocation(obj4);
        const obj5 = set(10278);
        const tmp13 = set;
        const _window = window;
        const routeTabForLocation1 = set(10278).getRouteTabForLocation(window.location);
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
                if (c14 === c11) {
                  c14 = tmp10;
                }
                items1 = items1.map((id) => {
                  if (id.id !== c11) {
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
              tmp13Result = tmp13(10277);
            } else {
              const currentUser1 = UserStore.getCurrentUser();
              let isStaffResult1;
              if (currentUser1 != tmp10) {
                isStaffResult1 = currentUser1.isStaff();
              }
            }
          }
        }
        const tmp46 = createTab(items1, tmp10);
        items1 = [];
        items1[HermesBuiltin.arraySpread(items1, 0)] = tmp46;
        tmp10 = activateTab(tmp46.id);
        flag3 = true;
        const obj7 = set(10278);
      }
    } else {
      return false;
    }
    tmp = c16;
  },
  THREAD_DELETE: handleChannelDelete,
  LOGOUT: function handleLogout() {
    if (0 === tabs.length) {
      return false;
    } else {
      tabs = [];
      c11 = null;
      closure_12 = [];
      c14 = null;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
