// === Module 12080: GameProfileReportButton ===

// Module 12080 (GameProfileReportButton)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = React.useCallback(() => {
    let obj = trackAction(closure_1_2[2]);
    obj.hideActionSheet();
    trackAction(applicationId(closure_1_2[3]).GameProfileTrackActionActions.Feedback);
    obj = { applicationId };
    const obj2 = trackAction(closure_1_2[4]);
    obj2.pushLazy(applicationId(closure_1_2[6])(closure_1_2[5], closure_1_2.paths), obj, applicationId(closure_1_2[7]).MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1236).intl;
  obj[2] = intl.string(applicationId(1236).t.qP2cXd);
  obj[3] = callback;
  return jsx(applicationId(4750).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};