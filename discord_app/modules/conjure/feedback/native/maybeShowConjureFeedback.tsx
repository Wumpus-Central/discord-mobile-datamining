// discord_app/modules/conjure/feedback/native/maybeShowConjureFeedback.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "../../../feedback/Constants.tsx";
import FeedbackManagerDefault from "../../../feedback/native/FeedbackManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/conjure/feedback/native/maybeShowConjureFeedback.tsx");

export default function maybeShowConjureFeedback(arg0) {
  _require = arg0;
  if (!obj.consumeFeedbackSkipForProject(arg0)) {
    const countSettledTurnsResult = tmp(16617).countSettledTurns(arg0);
    importDefault = countSettledTurnsResult;
    let result = countSettledTurnsResult < tmp(16617).MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
    if (!result) {
      result = tmp(16617).hasShownFeedbackForProject(arg0);
      const tmpResult2 = tmp(16617);
    }
    if (!result) {
      const result1 = FeedbackManagerDefault.possiblyShowFeedbackModal(FeedbackType.VIBEGRATIONS, () => {
        const result = projectId(paths[1]).markFeedbackShownForProject(projectId);
        projectId = projectId(paths[4])(paths[3], paths.paths);
        const obj = projectId(paths[1]);
        projectId(paths[5]).runAfterInteractions(() => {
          ActionSheetActionCreatorsDefault.openLazy(projectId, "VibegrationsFeedback" + projectId, {
            projectId,
            promptCount: countSettledTurnsResult,
          });
        });
      });
    }
    const tmpResult = tmp(16617);
  }
  obj = require("conjureFeedback");
}
