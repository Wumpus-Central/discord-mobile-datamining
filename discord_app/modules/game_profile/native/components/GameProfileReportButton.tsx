// === Module 9461: GameProfileReportButton ===

// Module 9461 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9205 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9462 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { applicationId };
    obj2.pushLazy(asyncRequireImpl(9462, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1128).intl;
  obj.text = intl.string(applicationId(1128).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5226).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};