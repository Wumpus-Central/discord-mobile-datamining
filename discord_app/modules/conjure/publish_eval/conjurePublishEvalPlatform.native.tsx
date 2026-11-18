// === Module 19527: conjurePublishEvalPlatform ===

// Module 19527 (conjurePublishEvalPlatform)
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import RootNavigationRef from "RootNavigationRef" /* 5000 */;
import ToastUtils from "ToastUtils" /* 5504 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const set = new Set(["conjure", "modal"]);
let c4 = false;
let result = size.fileFinishedImporting("modules/conjure/publish_eval/conjurePublishEvalPlatform.native.tsx");

export default {
  watchNavigation(arg0) {
    _require = arg0;
    if (!c4) {
      c4 = true;
      const result = require("RootNavigationRef").runWhenRootNavigationReady(() => {
        const rootNavigationRef = closure_0(dependencyMap[0]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          rootNavigationRef.addListener("state", () => {
            const tmp = closure_0();
            const rootState = rootNavigationRef.getRootState();
            let tmp3;
            if (rootState != null) {
              tmp3 = rootState.routes[rootState.index];
            }
            let hasItem = null == tmp || null == tmp3;
            if (!hasItem) {
              hasItem = set.has(tmp3.name);
            }
            if (!hasItem) {
              const intl = util.intl;
              ToastUtils.presentError(intl.string(_modDef4121["PyD/rD"]));
              openConjureHomeScreenDefault(tmp);
            }
          });
        }
      });
      let obj = require("RootNavigationRef");
    }
  },
  openProject(projectId) {
    _require = projectId;
    const result = require("RootNavigationRef").runWhenRootNavigationReady(() => {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let rootState;
      if (rootNavigationRef != null) {
        rootState = rootNavigationRef.getRootState();
      }
      let flag = false;
      if (null != rootState) {
        const routes = rootState.routes;
        const substr = routes.slice(0, rootState.index + 1);
        const findLastResult = substr.findLast((name) => "modal" !== name.name);
        let name;
        if (findLastResult != null) {
          name = findLastResult.name;
        }
        let tmp6 = "conjure" === name;
        if (tmp6) {
          const params = findLastResult.params;
          projectId = undefined;
          if (params != null) {
            projectId = params.projectId;
          }
          tmp6 = projectId === closure_0;
        }
        flag = tmp6;
      }
      if (!flag) {
        openConjureHomeScreenDefault(closure_0);
      }
    });
  }
};