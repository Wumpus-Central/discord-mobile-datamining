// discord_app/modules/contact_sync/native/components/ContactSyncBackToLanding.tsx
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ContactSyncBackToLanding(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      const obj = require("c");
      const tmp = _require;
      const tmp2 = navigation;
      navigation = require("useNavigation").useNavigation();
      if (cResult[0] === navigation) {
        if (cResult[1] === arg0) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      let obj2 = require("useNavigation");
      const tmp6 = tmp(tmp2[3]).getHeaderBackButton(() => {
        if (null != closure_0.navigateToLandingPage) {
          const result = closure_0.navigateToLandingPage();
        } else {
          ContactSyncModalActionCreators.goBackToLanding(navigation);
        }
      }, true)(arg0);
      cResult[0] = navigation;
      cResult[1] = arg0;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : function ContactSyncBackToLanding(arg0) {
      _require = arg0;
      dependencyMap = require("useNavigation").useNavigation();
      const obj = require("useNavigation");
      return require("NavigatorHeader").getHeaderBackButton(() => {
        if (null != closure_0.navigateToLandingPage) {
          const result = closure_0.navigateToLandingPage();
        } else {
          ContactSyncModalActionCreators.goBackToLanding(closure_1);
        }
      }, true)(arg0);
    };
