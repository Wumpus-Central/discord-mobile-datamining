// === Module 11031: ConjurePreviewActionCreators ===

// Module 11031 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6722 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11033 */;
import leaveFrame from "leaveFrame" /* 11056 */;
import conjurePausedPreviewViews from "conjurePausedPreviewViews" /* 11069 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6721 */;
import ConjurePreviewPauseStore from "ConjurePreviewPauseStore" /* 11032 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewActionCreators.tsx");

export const reloadConjureAppFrames = function reloadConjureAppFrames(application_id) {
  ConjurePlatformUtilsDefault.reloadAppFrames(application_id);
};
export const reloadConjureProjectFrames = function reloadConjureProjectFrames(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  if (null != project) {
    ConjurePlatformUtilsDefault.reloadAppFrames(project.application_id);
    if (!obj2.isPreviewlessProject(project)) {
      let prop = project.preview_application_id;
      if (prop == null) {
        prop = null;
      }
      ConjurePlatformUtilsDefault.reloadAppFrames(prop);
      const tmp2Result = ConjurePlatformUtilsDefault;
    }
    obj2 = ConjureProjectTypes;
  }
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  DispatcherDefault.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId });
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  DispatcherDefault.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled });
};
export const setBuilderPreviewLandscape = function setBuilderPreviewLandscape(landscape) {
  DispatcherDefault.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape });
};
export const pauseConjurePreview = function pauseConjurePreview(projectId, id) {
  DispatcherDefault.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true });
  const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true };
  leaveFrame.leaveFrame(id);
};
export const resumeConjurePreview = function resumeConjurePreview(projectId) {
  if (ConjurePreviewPauseStore.isPaused(projectId)) {
    const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
    DispatcherDefault.dispatch(obj2);
  }
};
export const wakeConjurePreview = function wakeConjurePreview(projectId) {
  if (obj.isConjurePausedPreviewMounted(projectId)) {
    if (ConjurePreviewPauseStore.isPaused(projectId)) {
      const obj3 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
      DispatcherDefault.dispatch(obj3);
    }
  }
  obj = conjurePausedPreviewViews;
};