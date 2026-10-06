// discord_app/modules/game_profile/native/components/GameProfileReportButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameDetectionReportModal from "GameDetectionReportModal.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const obj2 = { applicationId };
    ModalActionCreatorsDefault;
    const tmp4 = asyncRequire(8596, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5601).Button;
  const intl = applicationId(1126).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1126).t.qP2cXd)} onPress={callback} />;
}
