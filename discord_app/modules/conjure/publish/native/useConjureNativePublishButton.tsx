// discord_app/modules/conjure/publish/native/useConjureNativePublishButton.tsx
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet.tsx";
import ConjureSafetyHoldSheetDefault from "ConjureSafetyHoldSheet.tsx";
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet.tsx";
import useConjurePublishButtonDefault from "../useConjurePublishButton.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  showSafetyHold: ConjureSafetyHoldSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_FAILED", { text, variant: "critical" });
  },
  showConfirmation(intl) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SUCCEEDED", { text: intl, variant: "success" });
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default function useConjureNativePublishButton(arg0, arg1) {
  _require = arg0;
  obj = require("initialize");
  items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      obj = {
        integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0),
        previewAppId: null,
      };
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
    },
    items1,
  );
  ({ integrationStatusChecked, previewAppId } = stateFromStoresObject);
  let isLoading = !integrationStatusChecked;
  const obj2 = require("ApplicationActionCreators");
  if (integrationStatusChecked) {
    isLoading = obj2.useApplication(previewAppId).isLoading;
  }
  return useConjurePublishButtonDefault(arg0, arg1, isLoading, obj);
}
