// === Module 12207: useConjureNativePublishOptions ===

// Module 12207 (useConjureNativePublishOptions)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10779 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 12208 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;

const require = globalThis.__r;

const require = fn;
let platform = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_FAILED", { text, variant: "critical" });
  },
  showConfirmation(intl) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SUCCEEDED", { text: intl, variant: "success" });
  }
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureNativePublishOptions(arg0, guildId) {
  _require = arg0;
  platform = require("c");
  const cResult = platform.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      const obj = { integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0), previewAppId: null };
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
  ({ integrationStatusChecked, previewAppId } = stateFromStoresObject);
  const tmpResult = require("initialize");
  let isLoading = !integrationStatusChecked;
  if (integrationStatusChecked) {
    isLoading = tmpResult2.useApplication(previewAppId).isLoading;
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === isLoading) {
      let tmp9 = cResult[6];
    }
    return tmp9;
  }
  const obj2 = { guildId, platform, busy: isLoading };
  cResult[4] = guildId;
  cResult[5] = isLoading;
  cResult[6] = obj2;
  tmp9 = obj2;
  tmpResult2 = require("ApplicationActionCreators");
}) : (function useConjureNativePublishOptions(arg0, guildId) {
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const obj = { integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0), previewAppId: null };
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
  integrationStatusChecked = stateFromStoresObject.integrationStatusChecked;
  const previewAppId = stateFromStoresObject.previewAppId;
  let obj = require("initialize");
  const isLoading = require("ApplicationActionCreators").useApplication(previewAppId).isLoading;
  const items2 = [guildId, integrationStatusChecked, isLoading];
  return isLoading.useMemo(() => {
    platform = { guildId, platform, busy: null };
    let tmp = !integrationStatusChecked;
    if (integrationStatusChecked) {
      tmp = isLoading;
    }
    platform.busy = tmp;
    return platform;
  }, items2);
});