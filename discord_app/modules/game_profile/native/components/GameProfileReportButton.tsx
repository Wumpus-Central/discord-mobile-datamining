// === Module 8897: GameProfileReportButton ===

// Module 8897 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 8898 */;
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
};