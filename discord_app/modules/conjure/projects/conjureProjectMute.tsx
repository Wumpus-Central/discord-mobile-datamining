// === Module 10686: conjureProjectMute ===

// Module 10686 (conjureProjectMute)
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
function isConjureProjectMuted(settings, id) {
  const conjure = settings.conjure;
  let muted;
  if (conjure != null) {
    if (conjure.projects[id] != null) {
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
    const fn = function n() {
      const conjure = UserSettingsProtoStore.settings.conjure;
      let muted;
      if (conjure != null) {
        if (conjure.projects[tmp] != null) {
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
    const conjure = UserSettingsProtoStore.settings.conjure;
    let muted;
    if (conjure != null) {
      if (conjure.projects[tmp] != null) {
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
};