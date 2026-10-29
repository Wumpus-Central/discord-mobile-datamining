// discord_app/modules/conjure/home/native/openConjureHomeScreen.tsx
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureGuildExperiment from "../../experiments/ConjureGuildExperiment.tsx";
import PostConnectionCallbackStore from "../../../gateway/PostConnectionCallbackStore.tsx";
import ConjureMobileExperiment from "../../experiments/ConjureMobileExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function openConjureHomeScreen(projectId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.focusComposer;
  if (flag === undefined) {
    flag = false;
  }
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let result = null != rootNavigationRef && rootNavigationRef.isReady();
  if (result) {
    result = ConjureMobileExperiment.isConjureMobileEnabled(openConjureHomeScreen);
    const tmpResult = ConjureMobileExperiment;
  }
  if (result) {
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
    const tmpResult2 = KeyboardManagerUtils;
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const obj3 = { projectId, requestId: null };
    const sum = c5 + 1;
    c5 = sum;
    obj3.requestId = sum;
    if (null != projectId) {
      let obj4 = {};
      const merged = Object.assign(obj4);
      tmp9("conjure", obj3, { pop: true });
    }
    const obj5 = { focusComposer: flag };
    obj4 = obj5;
  }
}
PostConnectionCallbackStore.addPostConnectionCallback;
openConjureHomeScreen = "openConjureHomeScreen";
let c5 = 0;
let result = size.fileFinishedImporting("modules/conjure/home/native/openConjureHomeScreen.tsx");

export default openConjureHomeScreen;
export const CONJURE_HOME_LINK_WAIT_MS = 10000;
export function openConjureHomeScreenWhenReady(projectId) {
  closure_0 = projectId;
  c1 = false;
  const timeout = setTimeout(() => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const result = RootNavigationRef.runWhenRootNavigationReady(() => {
        openConjureHomeScreen(projectId);
      });
    }
  }, 10000);
  addPostConnectionCallback(() => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const result = ConjureGuildExperiment.hasConjureGuildWithoutExposure(openConjureHomeScreen);
      if (result) {
        const result1 = RootNavigationRef.runWhenRootNavigationReady(() => {
          openConjureHomeScreen(projectId);
        });
      }
    }
  });
}
