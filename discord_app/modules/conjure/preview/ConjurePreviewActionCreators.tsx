// === Module 10967: ConjurePreviewActionCreators ===

// Module 10967 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7166 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10918 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10885 */;

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