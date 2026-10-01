// === Module 16545: maybeShowVibegrationsFeedback ===

// Module 16545 (maybeShowVibegrationsFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import Constants from "Constants" /* 11334 */;
import FeedbackManagerDefault from "FeedbackManager" /* 16546 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  _require = arg0;
  if (!obj.consumeFeedbackSkipForProject(arg0)) {
    const countSettledTurnsResult = tmp(16534).countSettledTurns(arg0);
    importDefault = countSettledTurnsResult;
    let result = countSettledTurnsResult < tmp(16534).MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
    if (!result) {
      result = tmp(16534).hasShownFeedbackForProject(arg0);
      const tmpResult2 = tmp(16534);
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
    const tmpResult = tmp(16534);
  }
  obj = require("vibegrationsFeedback");
};