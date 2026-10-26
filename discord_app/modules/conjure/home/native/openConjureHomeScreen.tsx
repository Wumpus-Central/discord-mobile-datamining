// discord_app/modules/conjure/home/native/openConjureHomeScreen.tsx
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureGuildExperiment from "../../experiments/ConjureGuildExperiment.tsx";
import PostConnectionCallbackStore from "../../../gateway/PostConnectionCallbackStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

PostConnectionCallbackStore.addPostConnectionCallback;
let c4 = 0;
let result = size.fileFinishedImporting("modules/conjure/home/native/openConjureHomeScreen.tsx");

export default function openConjureHomeScreen(projectId) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp3) {
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    const tmpResult = KeyboardManagerUtils;
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const obj2 = { projectId, requestId: null };
    const sum = c4 + 1;
    c4 = sum;
    obj2.requestId = sum;
    rootNavigationRef.navigate("conjure", obj2, { pop: true });
  }
  tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
}
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
        const obj = closure_0(dependencyMap[1]);
        if (tmp4) {
          const result = closure_0(dependencyMap[2]).dismissGlobalKeyboard();
          const tmp2Result = closure_0(dependencyMap[2]);
          c1(dependencyMap[3]).hideAllActionSheets();
          const obj2 = { projectId, requestId: null };
          sum = sum + 1;
          obj2.requestId = sum;
          rootNavigationRef.navigate("conjure", obj2, { pop: true });
          const obj4 = c1(dependencyMap[3]);
        }
        tmp4 = null != rootNavigationRef && rootNavigationRef.isReady();
      });
    }
  }, 10000);
  addPostConnectionCallback(() => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      let result = ConjureGuildExperiment.hasConjureGuildWithoutExposure("openConjureHomeScreen");
      if (result) {
        const result1 = RootNavigationRef.runWhenRootNavigationReady(() => {
          const rootNavigationRef = closure_0(dependencyMap[1]).getRootNavigationRef();
          const obj = closure_0(dependencyMap[1]);
          if (tmp4) {
            const result = closure_0(dependencyMap[2]).dismissGlobalKeyboard();
            const tmp2Result = closure_0(dependencyMap[2]);
            c1(dependencyMap[3]).hideAllActionSheets();
            const obj2 = { projectId, requestId: null };
            sum = sum + 1;
            obj2.requestId = sum;
            rootNavigationRef.navigate("conjure", obj2, { pop: true });
            const obj4 = c1(dependencyMap[3]);
          }
          tmp4 = null != rootNavigationRef && rootNavigationRef.isReady();
        });
      }
    }
  });
};
