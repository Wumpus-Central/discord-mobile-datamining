// === Module 11063: conjureProjectMute ===

// Module 11063 (conjureProjectMute)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectMute.tsx");

export function isConjureProjectMuted(settings, id) {
  const conjure = settings.conjure;
  let muted;
  if (conjure != null) {
    if (conjure.projects[id] != null) {
      muted = tmp3.muted;
    }
  }
  return true === muted;
}
export function useIsConjureProjectMuted(id) {
  _require = id;
  items = [UserSettingsProtoStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const conjure = UserSettingsProtoStore.settings.conjure;
    let muted;
    if (conjure != null) {
      if (conjure.projects[tmp] != null) {
        muted = tmp3.muted;
      }
    }
    return true === muted;
  }, items1);
}
export function setConjureProjectMuted(id, arg1) {
  _require = id;
  dependencyMap = arg1;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("conjure", async (projects) => {
    if (closure_1) {
      const ConjureProjectSettings = preloaded_user_settings.ConjureProjectSettings;
      const obj = {};
      const merged = Object.assign(tmp4);
      obj.muted = true;
      projects.projects[tmp3] = ConjureProjectSettings.create(obj);
    } else if (null == tmp4) {
      return false;
    } else {
      const _Number = Number;
      if (Number(tmp4.sidebarDismissedAt) > 0) {
        tmp4.muted = false;
      } else {
        projects = projects.projects;
        delete tmp[tmp2];
      }
    }
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}