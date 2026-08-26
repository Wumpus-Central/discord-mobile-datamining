// === Module 12931: DeleteMessageElement ===

// Module 12931 (DeleteMessageElement)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "reinjectEphemerals" /* 4687 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx");

export default function DeleteMessageElement(message) {
  message = message.message;
  const reportId = message.reportId;
  dependencyMap = undefined;
  let stateFromStores;
  const tmp = stateFromStores(React.useState(false), 2);
  dependencyMap = tmp[1];
  let obj = message(589);
  const items = [closure_5];
  const items1 = [message];
  stateFromStores = obj.useStateFromStores(items, () => null == closure_1_5.getMessage(message.getChannelId(), message.id), items1);
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    dependencyMap(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  const callback = React.useCallback(() => {
    dependencyMap(true);
    let obj = reportId(4652);
    obj = { report_id: reportId };
    obj.trackWithMetadata(closure_1_6.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj);
    reportId(7129).deleteMessage(message.getChannelId(), message.id);
  }, items3);
  obj = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
  const intl = message(1236).intl;
  obj[0] = intl.string(message(1236).t.c9BHL9);
  const intl2 = message(1236).intl;
  obj[1] = intl2.string(message(1236).t.AT2KSd);
  const intl3 = message(1236).intl;
  obj[2] = intl3.string(message(1236).t.dK8S0w);
  obj[3] = tmp[0];
  obj[5] = callback;
  obj[6] = jsx(message(4402).TrashIcon, { color: "text-feedback-critical" });
  return jsx(reportId(12927), { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null });
};