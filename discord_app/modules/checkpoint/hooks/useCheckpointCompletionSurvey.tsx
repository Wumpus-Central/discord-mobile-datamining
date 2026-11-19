// === Module 12710: useCheckpointCompletionSurvey ===

// Module 12710 (useCheckpointCompletionSurvey)
import DispatcherDefault from "Dispatcher" /* 572 */;
import QualtricsActionCreators from "QualtricsActionCreators" /* 6362 */;
import SurveyActionTypes from "SurveyActionTypes" /* 6369 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCompletionSurvey.tsx");

export default function useCheckpointCompletionSurvey() {
  const effect = noop.useEffect(() => {
    function handleCompleteSuccess() {
      c0 = true;
    }
    c0 = false;
    const subscription = handleCompleteSuccess(572).subscribe("CHECKPOINT_COMPLETE_SUCCESS", handleCompleteSuccess);
    return () => {
      DispatcherDefault.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", handleCompleteSuccess);
      if (c0) {
        QualtricsActionCreators.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.CHECKPOINT_COMPLETED);
      }
    };
  }, []);
};