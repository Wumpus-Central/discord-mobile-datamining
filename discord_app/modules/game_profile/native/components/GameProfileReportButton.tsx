// === Module 14246: GameProfileReportButton ===

// Module 14246 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8754 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 14247 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  items = [applicationId, trackAction];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { applicationId };
    obj2.pushLazy(asyncRequireImpl(14247, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1112).intl;
  obj.text = intl.string(applicationId(1112).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5641).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};