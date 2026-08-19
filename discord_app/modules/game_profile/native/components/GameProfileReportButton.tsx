// discord_app/modules/game_profile/native/components/GameProfileReportButton.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = React.useCallback(() => {
    let obj = trackAction(dependencyMap[2]);
    obj.hideActionSheet();
    trackAction(applicationId(dependencyMap[3]).GameProfileTrackActionActions.Feedback);
    obj = { applicationId };
    const obj2 = trackAction(dependencyMap[4]);
    obj2.pushLazy(applicationId(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), obj, applicationId(dependencyMap[7]).MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1236).intl;
  obj[2] = intl.string(applicationId(1236).t.qP2cXd);
  obj[3] = callback;
  return jsx(applicationId(4745).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};