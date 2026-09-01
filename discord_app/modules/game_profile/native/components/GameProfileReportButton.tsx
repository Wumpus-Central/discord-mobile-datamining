// discord_app/modules/game_profile/native/components/GameProfileReportButton.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileReportButton.tsx",
);

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
    obj2.pushLazy(
      applicationId(closure_1_2[6])(closure_1_2[5], closure_1_2.paths),
      obj,
      applicationId(closure_1_2[7]).MODAL_KEY,
    );
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1236).intl;
  obj[2] = intl.string(applicationId(1236).t.qP2cXd);
  obj[3] = callback;
  return jsx(applicationId(4928).Button, { variant: "secondary", size: "md", text: null, onPress: null });
}
