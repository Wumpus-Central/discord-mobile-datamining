// === Module 16632: maybeShowConjureFeedback ===

// Module 16632 (maybeShowConjureFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Constants from "Constants" /* 11249 */;
import FeedbackManagerDefault from "FeedbackManager" /* 16633 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/conjure/feedback/native/maybeShowConjureFeedback.tsx");

export default function maybeShowConjureFeedback(arg0) {
  let closure_0;
  let paths;
  _require = arg0;
  let obj = require("conjureFeedback");
  if (!obj.consumeFeedbackSkipForProject(arg0)) {
    const tmpResult = require("conjureFeedback");
    const countSettledTurnsResult = tmpResult.countSettledTurns(arg0);
    importDefault = countSettledTurnsResult;
    let result = countSettledTurnsResult < tmp(16617).MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
    if (!result) {
      const tmpResult2 = require("conjureFeedback");
      result = tmpResult2.hasShownFeedbackForProject(arg0);
    }
    if (!result) {
      const obj4 = FeedbackManagerDefault;
      const result1 = obj4.possiblyShowFeedbackModal(FeedbackType.VIBEGRATIONS, () => {
        let projectId;
        let obj = projectId(paths[1]);
        const result = obj.markFeedbackShownForProject(projectId);
        projectId = projectId(paths[4])(paths[3], paths.paths);
        let obj2 = projectId(paths[5]);
        obj2.runAfterInteractions(() => {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { projectId, promptCount: importDefault };
          obj.openLazy(projectId, "VibegrationsFeedback" + projectId, obj2);
        });
      });
    }
  }
};