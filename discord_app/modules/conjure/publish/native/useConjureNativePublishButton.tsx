// discord_app/modules/conjure/publish/native/useConjureNativePublishButton.tsx
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet.tsx";
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet.tsx";
import useConjurePublishButtonDefault from "../useConjurePublishButton.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_FAILED", { text, variant: "critical" });
  },
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureNativePublishButton(arg0, arg1) {
      _require = arg0;
      obj = require("c");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
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
      const tmpResult2 = require("ApplicationActionCreators");
      if (integrationStatusChecked) {
        isLoading = tmpResult2.useApplication(previewAppId).isLoading;
      }
      return useConjurePublishButtonDefault(arg0, arg1, isLoading, obj);
    }
  : function useConjureNativePublishButton(arg0, arg1) {
      _require = arg0;
      obj = require("initialize");
      const items = [ConjureProjectStore];
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
    };
