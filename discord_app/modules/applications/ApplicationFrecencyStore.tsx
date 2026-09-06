// discord_app/modules/applications/ApplicationFrecencyStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FrecencyDefault from "../../lib/Frecency.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";

function handleUserSettingsProtoStoreChange() {
  const applicationFrecency = UserSettingsProtoStore.frecencyWithoutFetchingLatest.applicationFrecency;
  let applications;
  if (applicationFrecency != null) {
    applications = applicationFrecency.applications;
  }
  if (applications == null) {
    applications = {};
  }
  closure_7.overwriteHistory(
    _modDef12.mapValues(applications, (recentUses) => {
      const obj = {};
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      const mapped = recentUses.map(Number);
      obj.recentUses = mapped.filter((item) => item > 0);
      return obj;
    }),
    global.pendingUsages,
  );
}
const UserSettingsTypes = fn(1084).UserSettingsTypes;
let items = [fn(1894).ApplicationCommandType.CHAT, fn(1894).ApplicationCommandType.PRIMARY_ENTRY_POINT];
let global = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {},
  numFrequentlyItems: fn(1350).FREQUENCY_ITEM_LIMIT,
};
let closure_7 = new FrecencyDefault(obj);
const PersistedStore = initializeDefault.PersistedStore;
class ApplicationFrecencyStore extends PersistedStore {}
const prototype = ApplicationFrecencyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    global = arg0;
  }
  this.waitFor(EmbeddedActivitiesStore, UserSettingsProtoStore);
  items = [UserSettingsProtoStore];
  this.syncWith(items, handleUserSettingsProtoStoreChange);
};
prototype["getState"] = function getState() {
  return global;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return global.pendingUsages.length > 0;
};
prototype["getApplicationFrecencyWithoutLoadingLatest"] = function getApplicationFrecencyWithoutLoadingLatest() {
  return closure_7;
};
prototype["getScoreWithoutLoadingLatest"] = function getScoreWithoutLoadingLatest(id) {
  let num = closure_7.getScore(id);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getTopApplicationsWithoutLoadingLatest"] = function getTopApplicationsWithoutLoadingLatest() {
  return closure_7.frequently;
};
ApplicationFrecencyStore.displayName = "ApplicationFrecencyStore";
ApplicationFrecencyStore.persistKey = "ApplicationFrecency";
obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    command = command.command;
    let hasItem = items.includes(command.type);
    if (hasItem) {
      const launchState = EmbeddedActivitiesStore.getLaunchState(command.applicationId);
      let isLaunching;
      if (launchState != null) {
        isLaunching = launchState.isLaunching;
      }
      if (!isLaunching) {
        const applicationId = command.applicationId;
        const pendingUsages = global.pendingUsages;
        const obj = { key: applicationId, timestamp: null };
        const _Date = Date;
        obj.timestamp = Date.now();
        pendingUsages.push(obj);
        closure_7.track(applicationId);
        closure_7.compute();
      }
      hasItem = !isLaunching;
      const tmp6 = !isLaunching;
    }
    return hasItem;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(applicationId) {
    applicationId = applicationId.applicationId;
    const pendingUsages = global.pendingUsages;
    pendingUsages.push({ key: applicationId, timestamp: Date.now() });
    closure_7.track(applicationId);
    closure_7.compute();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        global.pendingUsages = [];
      }
    }
    return false;
  },
};
const applicationFrecencyStore = new ApplicationFrecencyStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/ApplicationFrecencyStore.tsx");

export default applicationFrecencyStore;
