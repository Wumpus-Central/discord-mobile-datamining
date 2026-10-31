// === Module 10878: conjureProjectMute ===

// Module 10878 (conjureProjectMute)
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
  const items = [UserSettingsProtoStore];
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
    projects = projects.projects;
    if (closure_1) {
      const ConjureProjectSettings = preloaded_user_settings.ConjureProjectSettings;
      projects[closure_0] = ConjureProjectSettings.create({ muted: true });
    } else if (null == projects[closure_0]) {
      return false;
    } else {
      const projects2 = projects.projects;
      delete tmp[tmp2];
    }
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}