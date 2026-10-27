// === Module 10821: openConjureHomeScreen ===

// Module 10821 (openConjureHomeScreen)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import RootNavigationRef from "RootNavigationRef" /* 5152 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6809 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6861 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9567 */;
import size from "module_2" /* 2 */;

PostConnectionCallbackStore.addPostConnectionCallback;
const openConjureHomeScreen = "openConjureHomeScreen";
let c5 = 0;
let result = size.fileFinishedImporting("modules/conjure/home/native/openConjureHomeScreen.tsx");

export default function openConjureHomeScreen(projectId) {
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
    const obj2 = { projectId, requestId: null };
    const sum = c5 + 1;
    c5 = sum;
    obj2.requestId = sum;
    rootNavigationRef.navigate("conjure", obj2, { pop: true });
  }
};
export const CONJURE_HOME_LINK_WAIT_MS = 10000;
export const openConjureHomeScreenWhenReady = function openConjureHomeScreenWhenReady(projectId) {
  closure_0 = projectId;
  c1 = false;
  const timeout = setTimeout(() => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const result = RootNavigationRef.runWhenRootNavigationReady(() => {
        const rootNavigationRef = closure_0(dependencyMap[1]).getRootNavigationRef();
        let result = null != rootNavigationRef && rootNavigationRef.isReady();
        if (result) {
          result = closure_0(dependencyMap[2]).isConjureMobileEnabled(openConjureHomeScreen);
          const tmp2Result = closure_0(dependencyMap[2]);
        }
        if (result) {
          const result1 = closure_0(dependencyMap[3]).dismissGlobalKeyboard();
          const tmp2Result2 = closure_0(dependencyMap[3]);
          c1(dependencyMap[4]).hideAllActionSheets();
          const obj2 = { projectId, requestId: null };
          sum = sum + 1;
          obj2.requestId = sum;
          rootNavigationRef.navigate("conjure", obj2, { pop: true });
          const obj5 = c1(dependencyMap[4]);
        }
        const obj = closure_0(dependencyMap[1]);
      });
    }
  }, 10000);
  addPostConnectionCallback(() => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      let result = ConjureGuildExperiment.hasConjureGuildWithoutExposure(openConjureHomeScreen);
      if (result) {
        let result1 = RootNavigationRef.runWhenRootNavigationReady(() => {
          const rootNavigationRef = closure_0(dependencyMap[1]).getRootNavigationRef();
          let result = null != rootNavigationRef && rootNavigationRef.isReady();
          if (result) {
            result = closure_0(dependencyMap[2]).isConjureMobileEnabled(openConjureHomeScreen);
            const tmp2Result = closure_0(dependencyMap[2]);
          }
          if (result) {
            const result1 = closure_0(dependencyMap[3]).dismissGlobalKeyboard();
            const tmp2Result2 = closure_0(dependencyMap[3]);
            c1(dependencyMap[4]).hideAllActionSheets();
            const obj2 = { projectId, requestId: null };
            sum = sum + 1;
            obj2.requestId = sum;
            rootNavigationRef.navigate("conjure", obj2, { pop: true });
            const obj5 = c1(dependencyMap[4]);
          }
          const obj = closure_0(dependencyMap[1]);
        });
      }
    }
  });
};