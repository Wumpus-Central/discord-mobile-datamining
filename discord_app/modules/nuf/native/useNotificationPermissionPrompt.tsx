// === Module 15779: useNotificationPermissionPrompt ===

// Module 15779 (useNotificationPermissionPrompt)
import noop from "noop" /* 19 */;
import handleUpdateUser from "handleUpdateUser" /* 1384 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import handleRequiredAction from "handleRequiredAction" /* 1385 */;
import set from "set" /* 11578 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(589);
  const items1 = [closure_6, closure_4];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => stateFromStores1(table[6])(closure_4, closure_6));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = stateFromStores1(dependencyMap[7]).requestPermission();
          stateFromStores1(dependencyMap[7]).shouldRequestNotification = false;
          const tmp3Result = stateFromStores1(dependencyMap[7]);
        }
        tmp5 = stateFromStores1(dependencyMap[7]).shouldRequestNotification && !closure_1_7.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(589);
  const guildOpenNudge = stateFromStores(15780).useGuildOpenNudge();
  const obj3 = stateFromStores(15780);
  const postCallDisconnectNudge = stateFromStores(15782).usePostCallDisconnectNudge();
};