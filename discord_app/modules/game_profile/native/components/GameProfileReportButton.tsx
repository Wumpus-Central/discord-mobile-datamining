// === Module 9420: GameProfileReportButton ===

// Module 9420 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9166 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9421 */;
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
    obj2.pushLazy(asyncRequireImpl(9421, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1128).intl;
  obj.text = intl.string(applicationId(1128).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5205).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};