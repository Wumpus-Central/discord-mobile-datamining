// === Module 12906: conjureProjectMute ===

// Module 12906 (conjureProjectMute)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, projects;

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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [UserSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
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
const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectMute.tsx");

export { isConjureProjectMuted };
export const useIsConjureProjectMuted = tmp2;
export const setConjureProjectMuted = function setConjureProjectMuted(id, arg1) {
  let closure_1;
  _require = id;
  dependencyMap = arg1;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("vibegrations", async (projects) => {
    projects = projects.projects;
    if (closure_1) {
      const VibegrationsProjectSettings = preloaded_user_settings.VibegrationsProjectSettings;
      projects[id] = VibegrationsProjectSettings.create({ muted: true });
    } else if (null == projects[id]) {
      return false;
    } else {
      delete projects.projects[id];
    }
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};