// discord_app/modules/game_profile/native/components/GameProfileReportButton.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameDetectionReportModal from "GameDetectionReportModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    obj = { applicationId };
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequireImpl(8898, dependencyMap.paths), obj, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1114).intl;
  obj.text = intl.string(applicationId(1114).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(4975).Button, { variant: "secondary", size: "md", text: null, onPress: null });
}
