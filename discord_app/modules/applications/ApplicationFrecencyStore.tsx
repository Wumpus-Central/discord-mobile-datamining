// discord_app/modules/applications/ApplicationFrecencyStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ApplicationConstants from "ApplicationConstants.tsx";
import Server from "../../flow/Server.tsx";
import FrecencyDefault from "../../lib/Frecency.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_6, recentUses;

function handleUserSettingsProtoStoreChange() {
  const applicationFrecency = UserSettingsProtoStore.frecencyWithoutFetchingLatest.applicationFrecency;
  let applications;
  if (applicationFrecency != null) {
    applications = applicationFrecency.applications;
  }
  if (applications == null) {
    applications = {};
  }
  const overwriteHistory = closure_7.overwriteHistory;
  const obj2 = _modDef12;
  overwriteHistory(
    obj2.mapValues(applications, (recentUses) => {
      let mapped;
      const obj = { recentUses: mapped.filter((item) => item > 0) };
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      mapped = recentUses.map(Number);
      return obj;
    }),
    closure_6.pendingUsages,
  );
}
const FREQUENCY_ITEM_LIMIT = ApplicationConstants.FREQUENCY_ITEM_LIMIT;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let items = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
const metroRequire = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {},
  numFrequentlyItems: FREQUENCY_ITEM_LIMIT,
};
const metroImportDefault = new FrecencyDefault(obj);
new FrecencyDefault(obj);
const PersistedStore = get_initializedDefault.PersistedStore;
class ApplicationFrecencyStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      closure_6 = arg0;
    }
    this.waitFor(EmbeddedActivitiesStore, UserSettingsProtoStore);
    items = [UserSettingsProtoStore];
    this.syncWith(items, handleUserSettingsProtoStoreChange);
  }
  getState() {
    return closure_6;
  }
  hasPendingUsage() {
    return closure_6.pendingUsages.length > 0;
  }
  getApplicationFrecencyWithoutLoadingLatest() {
    return closure_7;
  }
  getScoreWithoutLoadingLatest(id) {
    let num = closure_7.getScore(id);
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getTopApplicationsWithoutLoadingLatest() {
    return closure_7.frequently;
  }
}
const prototype = ApplicationFrecencyStore.prototype;
ApplicationFrecencyStore.displayName = "ApplicationFrecencyStore";
ApplicationFrecencyStore.persistKey = "ApplicationFrecency";
let obj2 = {
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
        const pendingUsages = closure_6.pendingUsages;
        const _Date = Date;
        const push = pendingUsages.push;
        const obj = { key: applicationId, timestamp: Date.now() };
        push(obj);
        closure_7.track(applicationId);
        closure_7.compute();
      }
      hasItem = tmp6;
    }
    return hasItem;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(applicationId) {
    applicationId = applicationId.applicationId;
    const pendingUsages = closure_6.pendingUsages;
    const obj = { key: applicationId, timestamp: Date.now() };
    pendingUsages.push(obj);
    closure_7.track(applicationId);
    closure_7.compute();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_6.pendingUsages = [];
      }
    }
    return false;
  },
};
const applicationFrecencyStore = new ApplicationFrecencyStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/applications/ApplicationFrecencyStore.tsx");

export default applicationFrecencyStore;
