// discord_app/modules/applications/ApplicationFrecencyStore.tsx
import participantFromServer from "participantFromServer";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { PersistedStore } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";

function handleUserSettingsProtoStoreChange() {
  const applicationFrecency = obj.frecencyWithoutFetchingLatest.applicationFrecency;
  let applications;
  if (applicationFrecency != null) {
    applications = applicationFrecency.applications;
  }
  if (applications == null) {
    applications = {};
  }
  tmp2.overwriteHistory(apply.mapValues(applications, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj.recentUses = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), closure_6.pendingUsages);
}
let items = [require("PermissionOverwriteType").ApplicationCommandType.CHAT, require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT];
let closure_6 = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: require("ApplicationTypes").FREQUENCY_ITEM_LIMIT
};
const error = new require("DEFAULT_FRECENCY")(obj);
class ApplicationFrecencyStore extends PersistedStore {
}
const prototype = ApplicationFrecencyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_6 = arg0;
  }
  this.waitFor(participantFromServer, handleConnectionClosedOrResumed);
  const items = [handleConnectionClosedOrResumed];
  this.syncWith(items, handleUserSettingsProtoStoreChange);
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return closure_6.pendingUsages.length > 0;
};
prototype["getApplicationFrecencyWithoutLoadingLatest"] = function getApplicationFrecencyWithoutLoadingLatest() {
  return closure_7;
};
prototype["getScoreWithoutLoadingLatest"] = function getScoreWithoutLoadingLatest(id) {
  let num = tmp2.getScore(id);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getTopApplicationsWithoutLoadingLatest"] = function getTopApplicationsWithoutLoadingLatest() {
  return tmp2.frequently;
};
ApplicationFrecencyStore.displayName = "ApplicationFrecencyStore";
ApplicationFrecencyStore.persistKey = "ApplicationFrecency";
obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    command = command.command;
    let hasItem = items.includes(command.type);
    if (hasItem) {
      launchState = launchState.getLaunchState(command.applicationId);
      let isLaunching;
      if (launchState != null) {
        isLaunching = launchState.isLaunching;
      }
      if (!isLaunching) {
        const applicationId = command.applicationId;
        const pendingUsages = closure_6.pendingUsages;
        const obj = { key: null, timestamp: null };
        obj[0] = applicationId;
        const _Date = Date;
        obj[1] = Date.now();
        pendingUsages.push(obj);
        tmp2.track(applicationId);
        tmp2.compute();
      }
      hasItem = !isLaunching;
      const tmp6 = !isLaunching;
    }
    return hasItem;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(applicationId) {
    applicationId = applicationId.applicationId;
    const pendingUsages = closure_6.pendingUsages;
    pendingUsages.push({ key: applicationId, timestamp: Date.now() });
    tmp2.track(applicationId);
    tmp2.compute();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_6.pendingUsages = [];
      }
    }
    return false;
  }
};
const applicationFrecencyStore = new ApplicationFrecencyStore(require("dispatcher"), obj);
const tmp2 = new require("DEFAULT_FRECENCY")(obj);
const result = require("ApplicationTypes").fileFinishedImporting("modules/applications/ApplicationFrecencyStore.tsx");

export default applicationFrecencyStore;