// discord_app/modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "../../feedback/Constants.tsx";
import FeedbackManagerDefault from "../../feedback/native/FeedbackManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  _require = arg0;
  const countSettledTurnsResult = require("vibegrationsFeedback").countSettledTurns(arg0);
  importDefault = countSettledTurnsResult;
  let result = countSettledTurnsResult < require("vibegrationsFeedback").MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
  if (!result) {
    result = tmp(17095).hasShownFeedbackForProject(arg0);
    const tmpResult = tmp(17095);
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
  let obj = require("vibegrationsFeedback");
  tmp = _require;
}
