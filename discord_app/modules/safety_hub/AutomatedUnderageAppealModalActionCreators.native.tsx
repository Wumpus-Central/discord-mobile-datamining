// discord_app/modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const SafetyHubConstants = fn(8419);
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_4, AGE_CHECK_POLL_DELAY_MS: hasOwnProperty } = SafetyHubConstants);
let closure_6 = fn(8412).AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
const jsx = fn(21).jsx;
let obj = {
  open(classificationId, onClose) {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11884, dependencyMap.paths), React4, obj);
  },
  openV2(classificationId, onClose) {
    _require = classificationId;
    importDefault = onClose;
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    if (obj2.isCurrentUserSuspended()) {
      if (tmp4Result.isExpressiveModalV2Enabled(tmp4(8413).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS)) {
        const _Math = Math;
        const _Date = Date;
        dependencyMap = Math.floor(Date.now() / 1000);
        let tmpResult = tmp(4763);
        obj = { onClose };
        tmpResult.pushLazy(
          asyncGeneratorStep(async () => {
            await tmp2(paths[8])(paths[13], paths.paths);
            closure_128_0 = arg1.default;
            return () => (
              <closure_1_0
                entryPoint={closure_0(8413).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS}
                onClose={function onClose() {
                  let tmp;
                  if (closure_1_1 != null) {
                    tmp = closure_1_1();
                  }
                  return tmp;
                }}
                onComplete={function onComplete() {
                  closure_0 = dependencyMap;
                  closure_2_0(11881).resetAgeCheckStatus();
                  obj = closure_2_0(11881);
                  closure_2_1(573).dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" });
                  const obj2 = closure_2_1(573);
                  closure_2_1(573).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
                  const timerId = setTimeout(
                    () => closure_2_0(dependencyMap[4]).checkSuspendedUserAgeVerificationV2(closure_0),
                    closure_2_5,
                  );
                }}
              />
            );
          }),
          obj,
          closure_6,
        );
      }
    }
    tmpResult = tmp(4763);
    obj = { onClose };
    tmpResult.pushLazy(
      asyncGeneratorStep(async () => {
        await tmp2(paths[8])(paths[14], paths.paths);
        closure_128_0 = arg1.default;
        return () => (
          <closure_1_0
            classificationId={classificationId}
            entryPoint={classificationId(closure_2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS}
            isRetry={false}
            useEmbeddedMethods
            onComplete={function onComplete() {
              closure_2_8.success();
              if (closure_1_1 != null) {
                closure_1_1();
              }
              const result = closure_2_8.start_verification_check();
            }}
          />
        );
      }),
      obj,
      closure_6,
    );
  },
  close() {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(
      () => require("SafetyHubActionCreators").checkSuspendedUserAgeVerification(),
      hasOwnProperty,
    );
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;
