// === Module 12397: useConjureNativePublishButton ===

// Module 12397 (useConjureNativePublishButton)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10938 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 12398 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 12399 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

require = fn;
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_FAILED", { text, variant: "critical" });
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default function useConjureNativePublishButton(arg0, arg1) {
  _require = arg0;
  obj = require("initialize");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    obj = { integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0), previewAppId: null };
    const project = ConjureProjectStore.getProject(closure_0);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    obj.previewAppId = prop;
    return obj;
  }, items1);
  ({ integrationStatusChecked, previewAppId } = stateFromStoresObject);
  let isLoading = !integrationStatusChecked;
  const obj2 = require("ApplicationActionCreators");
  if (integrationStatusChecked) {
    isLoading = obj2.useApplication(previewAppId).isLoading;
  }
  const tmp3Result = useConjurePublishButtonDefault(arg0, arg1, isLoading, obj);
  importDefault = tmp3Result;
  const items2 = [tmp3Result.confirmation];
  const effect = noop.useEffect(() => {
    if (null != confirmation.confirmation) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp.confirmation, "polite");
    }
  }, items2);
  return tmp3Result;
};