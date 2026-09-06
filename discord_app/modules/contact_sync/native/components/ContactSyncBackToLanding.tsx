// === Module 12702: ContactSyncBackToLanding ===

// Module 12702 (ContactSyncBackToLanding)
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
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