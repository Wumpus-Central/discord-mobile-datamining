// === Module 12949: conjureProjectMute ===

// Module 12949 (conjureProjectMute)
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
function isConjureProjectMuted(settings, id) {
  const vibegrations = settings.vibegrations;
  let muted;
  if (vibegrations != null) {
    if (vibegrations.projects[id] != null) {
      muted = tmp3.muted;
    }
  }
  return true === muted;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectMute.tsx");

export { isConjureProjectMuted };
export const useIsConjureProjectMuted = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureProjectMuted(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const vibegrations = UserSettingsProtoStore.settings.vibegrations;
      let muted;
      if (vibegrations != null) {
        if (vibegrations.projects[tmp] != null) {
          muted = tmp3.muted;
        }
      }
      return true === muted;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useIsConjureProjectMuted(arg0) {
  _require = arg0;
  const items = [UserSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const vibegrations = UserSettingsProtoStore.settings.vibegrations;
    let muted;
    if (vibegrations != null) {
      if (vibegrations.projects[tmp] != null) {
        muted = tmp3.muted;
      }
    }
    return true === muted;
  }, items1);
});
export const setConjureProjectMuted = function setConjureProjectMuted(id, arg1) {
  _require = id;
  dependencyMap = arg1;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("vibegrations", async (projects) => {
    projects = projects.projects;
    if (closure_1) {
      const VibegrationsProjectSettings = preloaded_user_settings.VibegrationsProjectSettings;
      projects[closure_0] = VibegrationsProjectSettings.create({ muted: true });
    } else if (null == projects[closure_0]) {
      return false;
    } else {
      const projects2 = projects.projects;
      delete tmp[tmp2];
    }
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};