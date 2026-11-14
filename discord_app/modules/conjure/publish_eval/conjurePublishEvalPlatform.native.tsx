// discord_app/modules/conjure/publish_eval/conjurePublishEvalPlatform.native.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4131 from "../intl/ConjureUntranslated.messages.js";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import openConjureHomeScreenDefault from "../home/native/openConjureHomeScreen.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
              ToastUtils.presentError(intl.string(_modDef4131["PyD/rD"]));
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
  },
};
