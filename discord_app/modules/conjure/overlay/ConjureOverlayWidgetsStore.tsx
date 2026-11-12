// === Module 16060: ConjureOverlayWidgetsStore ===

// Module 16060 (ConjureOverlayWidgetsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureOverlayApps from "conjureOverlayApps" /* 16067 */;
import LayoutStore from "LayoutStore" /* 16061 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;

require = fn;
function syncProjects() {
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  let found = ownedProjects.filter(require("conjureOverlayApps").isConjureOverlayApp);
  _require = found;
  if (!tmp) {
    if (0 === found.length) {
      found = items;
    }
  }
  tmp = found.length === found.length && found.every((item, index) => item === set[index]);
  new Set(found.map((application_id) => application_id.application_id));
  dependencyMap = (function getLayoutApplicationIds() {
    set = new Set();
    widgetsByTypeAndLayout = widgetsByTypeAndLayout.getWidgetsByTypeAndLayout(constants.CONJURE, OVERLAY_V3_LAYOUT_ID);
    for (const item10017 of widgetsByTypeAndLayout) {
      let applicationId = item10017.meta.applicationId;
      if (typeof applicationId === "string") {
        let addResult = set.add(tmp2);
      }
      continue;
    }
    return set;
  })();
  items = [...found];
  const items1 = [];
  let set = new Set(found.map((application_id) => application_id.application_id));
  const arraySpreadResult = HermesBuiltin.arraySpread(closure_9, 0);
  closure_129_0 = new Set(closure_9.map((application_id) => application_id.application_id));
  const ownedProjects1 = ConjureProjectStore.getOwnedProjects();
  HermesBuiltin.arraySpread(ownedProjects1.filter((application_id) => {
    let result = conjureOverlayApps.isConjureServerOverlayApp(application_id);
    if (result) {
      result = !set.has(application_id.application_id);
    }
    return result;
  }), arraySpreadResult);
  HermesBuiltin.arraySpread(items1.filter((application_id) => {
    const hasItem = set.has(application_id.application_id);
    let hasItem1 = !hasItem;
    if (!hasItem) {
      hasItem1 = set2.has(application_id.application_id);
    }
    return hasItem1;
  }), tmp3);
  _require = items;
  items.length === items.length && items.every((item, index) => item === set[index]);
  const set1 = new Set(closure_9.map((application_id) => application_id.application_id));
}
function handleLayoutChange() {
  syncProjects();
  return closure_7 !== closure_7;
}
function markServerListStale(guildId) {
  items = [];
  const set = new Set(closure_9.map((application_id) => application_id.application_id));
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  HermesBuiltin.arraySpread(ownedProjects.filter((application_id) => {
    let result = conjureOverlayApps.isConjureServerOverlayApp(application_id);
    if (result) {
      result = !set.has(application_id.application_id);
    }
    return result;
  }), HermesBuiltin.arraySpread(closure_9, 0));
  if (items.some((guild_id) => guild_id.guild_id === set)) {
    closure_12 = closure_12 + 1;
  } else {
    return false;
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(closure_9, 0);
}
const OverlayWidgets = fn(1072).OverlayWidgets;
const OVERLAY_V3_LAYOUT_ID = fn(16064).OVERLAY_V3_LAYOUT_ID;
let items = [];
let closure_7 = items;
let closure_8 = items;
let closure_9 = items;
let c10 = false;
let c11 = 0;
let closure_12 = 0;
const Store = initializeDefault.Store;
class ConjureOverlayWidgetsStore extends Store {
}
const prototype = ConjureOverlayWidgetsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ConjureProjectStore, LayoutStore);
  LayoutStore.initializeIfNeeded();
  syncProjects();
  items = [ConjureProjectStore];
  this.syncWith(items, () => {
    syncProjects();
    return true;
  });
  const items1 = [LayoutStore];
  this.syncWith(items1, handleLayoutChange);
};
prototype["getProjects"] = function getProjects() {
  return closure_7;
};
prototype["getOwnedProjects"] = function getOwnedProjects() {
  return closure_8;
};
prototype["getServerProjects"] = function getServerProjects() {
  return closure_9;
};
prototype["getProject"] = function getProject(arg0) {
  closure_0 = arg0;
  if (null != arg0) {
    let found = closure_7.find((application_id) => application_id.application_id === closure_0);
    if (found == null) {
      found = closure_9.find((application_id) => application_id.application_id === closure_0);
    }
    return found;
  }
};
prototype["isServerProjectEnabled"] = function isServerProjectEnabled(arg0) {
  closure_0 = arg0;
  return closure_7.some((application_id) => application_id.application_id === closure_0);
};
prototype["getServerStaleVersion"] = function getServerStaleVersion() {
  return closure_12;
};
prototype["hasOwnedFetchSucceeded"] = function hasOwnedFetchSucceeded() {
  return ConjureProjectStore.hasFetchedOwnedProjects();
};
prototype["hasServerFetchSucceeded"] = function hasServerFetchSucceeded() {
  return c10;
};
prototype["getServerFetchFailures"] = function getServerFetchFailures() {
  return c11;
};
ConjureOverlayWidgetsStore.displayName = "ConjureOverlayWidgetsStore";
const conjureOverlayWidgetsStore = new ConjureOverlayWidgetsStore(DispatcherDefault, {
  CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_SUCCESS: function handleServerFetchSuccess(projects) {
    projects = projects.projects;
    let found = projects.filter(conjureOverlayApps.isConjureServerOverlayApp);
    if (0 === found.length) {
      found = items;
    }
    closure_9 = found;
    c10 = true;
    c11 = 0;
    syncProjects();
  },
  CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_FAIL: function handleServerFetchFail() {
    c11 = c11 + 1;
  },
  INTEGRATION_DELETE: markServerListStale,
  GUILD_INTEGRATIONS_UPDATE: markServerListStale,
  CONJURE_SERVER_OVERLAY_WIDGETS_GUILD_REMOVE: function handleServerGuildRemove(guildId) {
    guildId = guildId.guildId;
    let found = closure_9.filter((guild_id) => guild_id.guild_id !== guildId);
    if (found.length === closure_9.length) {
      return false;
    } else {
      if (0 === found.length) {
        found = items;
      }
      closure_9 = found;
      syncProjects();
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    c10 = false;
    c11 = 0;
    closure_12 = closure_12 + 1;
    syncProjects();
  },
  LOGOUT: function handleLogout() {
    closure_7 = items;
    closure_8 = items;
    closure_9 = items;
    c10 = false;
    c11 = 0;
    closure_12 = closure_12 + 1;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/overlay/ConjureOverlayWidgetsStore.tsx");

export default conjureOverlayWidgetsStore;