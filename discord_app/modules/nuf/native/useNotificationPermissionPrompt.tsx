// === Module 16361: useNotificationPermissionPrompt ===

// Module 16361 (useNotificationPermissionPrompt)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleUpdateUser" /* 1379 */;
import closure_5 from "_handleConnectionOpen" /* 5230 */;
import closure_6 from "handleRequiredAction" /* 1380 */;
import closure_7 from "set" /* 12209 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [closure_5];
  stateFromStores = stateFromStores(586).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(586);
  const items1 = [closure_6, closure_4];
  const stateFromStores1 = stateFromStores(586).useStateFromStores(items1, () => stateFromStores1(table[6])(closure_4, closure_6));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = tmp3(tmp4[7]).requestPermission();
          tmp3(tmp4[7]).shouldRequestNotification = false;
          const tmp3Result = tmp3(tmp4[7]);
        }
        tmp5 = stateFromStores1(closure_1_2[7]).shouldRequestNotification && !closure_1_7.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(586);
  const guildOpenNudge = stateFromStores(16362).useGuildOpenNudge();
  const obj3 = stateFromStores(16362);
  const postCallDisconnectNudge = stateFromStores(16364).usePostCallDisconnectNudge();
};