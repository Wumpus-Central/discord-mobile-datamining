// === Module 10976: openConjureHomeScreen ===

// Module 10976 (openConjureHomeScreen)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1888 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6879 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6932 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9676 */;
import size from "module_2" /* 2 */;

function openConjureHomeScreen(projectId, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.focusComposer;
  if (flag === undefined) {
    flag = false;
  }
  const entryPoint = obj.entryPoint;
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
    if (null == projectId) {
      if (flag) {
        const obj4 = { focusComposer: flag };
        let obj8 = obj4;
      }
      const merged = Object.assign(obj8);
      if (null == projectId) {
        let obj5 = {};
        const merged1 = Object.assign(obj5);
        tmp9("conjure", obj3, { pop: true });
      }
      const obj7 = { entryPoint };
      obj5 = obj7;
    }
    obj8 = {};
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
        openConjureHomeScreen(projectId, { entryPoint: "deep_link" });
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
          openConjureHomeScreen(projectId, { entryPoint: "deep_link" });
        });
      }
    }
  });
}