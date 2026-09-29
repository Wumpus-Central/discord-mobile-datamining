// === Module 16493: maybeShowVibegrationsFeedback ===

// Module 16493 (maybeShowVibegrationsFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Constants from "Constants" /* 11290 */;
import FeedbackManagerDefault from "FeedbackManager" /* 16494 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  _require = arg0;
  if (!obj.consumeFeedbackSkipForProject(arg0)) {
    const countSettledTurnsResult = tmp(16483).countSettledTurns(arg0);
    importDefault = countSettledTurnsResult;
    let result = countSettledTurnsResult < tmp(16483).MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
    if (!result) {
      result = tmp(16483).hasShownFeedbackForProject(arg0);
      const tmpResult2 = tmp(16483);
    }
    if (!result) {
      const result1 = FeedbackManagerDefault.possiblyShowFeedbackModal(FeedbackType.VIBEGRATIONS, () => {
        const result = projectId(paths[1]).markFeedbackShownForProject(projectId);
        projectId = projectId(paths[4])(paths[3], paths.paths);
        const obj = projectId(paths[1]);
        projectId(paths[5]).runAfterInteractions(() => {
          ActionSheetActionCreatorsDefault.openLazy(projectId, "VibegrationsFeedback" + projectId, { projectId, promptCount: countSettledTurnsResult });
        });
      });
    }
    const tmpResult = tmp(16483);
  }
  obj = require("vibegrationsFeedback");
};