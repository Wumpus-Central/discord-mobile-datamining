// === Module 10875: ConjurePreviewActionCreators ===

// Module 10875 (ConjurePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10877 */;
import leaveFrame from "leaveFrame" /* 10902 */;
import conjurePausedPreviewViews from "conjurePausedPreviewViews" /* 10920 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import ConjurePreviewPauseStore from "ConjurePreviewPauseStore" /* 10876 */;

require = fn;
let closure_8 = async function _loadConjurePreviewDm() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: Endpoints.CONJURE_PROJECT_PREVIEW_DM(closure_0), rejectWithError: true });
  const body = value.body;
  closure_129_1 = closure_130_4(body);
  closure_130_1(closure_130_2[7]).dispatch({ type: "CHANNEL_CREATE", channel: closure_129_1 });
  return closure_129_1.id;
};
let closure_4 = fn(4862).createChannelRecordFromServer;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewActionCreators.tsx");

export function reloadConjureAppFrames(application_id) {
  ConjurePlatformUtilsDefault.reloadAppFrames(application_id);
}
export function reloadConjureProjectFrames(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
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
}
export function setBuilderPreviewApplicationId(applicationId) {
  DispatcherDefault.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId });
}
export function setBuilderPreviewMobile(enabled) {
  DispatcherDefault.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled });
}
export function setBuilderPreviewLandscape(landscape) {
  DispatcherDefault.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape });
}
export function pauseConjurePreview(projectId, id) {
  DispatcherDefault.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true });
  const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: true };
  leaveFrame.leaveFrame(id);
}
export function resumeConjurePreview(projectId) {
  if (ConjurePreviewPauseStore.isPaused(projectId)) {
    const obj2 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
    DispatcherDefault.dispatch(obj2);
  }
}
export function wakeConjurePreview(projectId) {
  if (obj.isConjurePausedPreviewMounted(projectId)) {
    if (ConjurePreviewPauseStore.isPaused(projectId)) {
      const obj3 = { type: "CONJURE_PREVIEW_PAUSED_SET", projectId, paused: false };
      DispatcherDefault.dispatch(obj3);
    }
  }
  obj = conjurePausedPreviewViews;
}
export function loadConjurePreviewDm() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}