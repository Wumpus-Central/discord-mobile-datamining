// discord_app/modules/conjure/publish/native/useConjureNativePublishButton.tsx
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet.tsx";
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet.tsx";
import useConjurePublishButtonDefault from "../useConjurePublishButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
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
      const cResult = obj.c(7);
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
      const tmp9Result = useConjurePublishButtonDefault(arg0, arg1, isLoading, obj);
      importDefault = tmp9Result;
      if (cResult[4] !== tmp9Result.confirmation) {
        const fn2 = function v() {
          if (null != confirmation.confirmation) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(tmp.confirmation, "polite");
          }
        };
        const items2 = [tmp9Result.confirmation];
        cResult[4] = tmp9Result.confirmation;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp12 = items2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      return tmp9Result;
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
