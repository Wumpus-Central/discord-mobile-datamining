// discord_app/modules/checkpoint/hooks/useCheckpointCompletionSurvey.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import QualtricsActionCreators from "../../qualtrics/QualtricsActionCreators.tsx";
import SurveyActionTypes from "../../../../discord_common/js/shared/shared-constants/SurveyActionTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
