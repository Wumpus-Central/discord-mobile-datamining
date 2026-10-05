// === Module 12351: ContactSyncBackToLanding ===

// Module 12351 (ContactSyncBackToLanding)
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, navigation;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  let obj2 = require("useNavigation");
  const tmp2 = navigation;
  navigation = obj2.useNavigation();
  const tmp = _require;
  if (cResult[0] === navigation) {
    let tmp5;
    if (cResult[1] === arg0) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmpResult = tmp(tmp2[3]);
  const tmp6 = tmpResult.getHeaderBackButton(() => {
    if (null != closure_0.navigateToLandingPage) {
      const result = closure_0.navigateToLandingPage();
    } else {
      const obj2 = ContactSyncModalActionCreators;
      obj2.goBackToLanding(navigation);
    }
  }, true)(arg0);
  cResult[0] = navigation;
  cResult[1] = arg0;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  const obj = require("useNavigation");
  dependencyMap = obj.useNavigation();
  let obj2 = require("NavigatorHeader");
  return obj2.getHeaderBackButton(() => {
    if (null != closure_0.navigateToLandingPage) {
      const result = closure_0.navigateToLandingPage();
    } else {
      const obj2 = ContactSyncModalActionCreators;
      obj2.goBackToLanding(closure_1);
    }
  }, true)(arg0);
});
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default tmp2;