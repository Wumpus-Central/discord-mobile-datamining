// === Module 16024: useNotificationPermissionPrompt ===

// Module 16024 (useNotificationPermissionPrompt)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleUpdateUser" /* 1384 */;
import closure_5 from "_handleConnectionOpen" /* 5173 */;
import closure_6 from "handleRequiredAction" /* 1385 */;
import closure_7 from "set" /* 11892 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

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
          const permission = tmp3(tmp4[7]).requestPermission();
          tmp3(tmp4[7]).shouldRequestNotification = false;
          const tmp3Result = tmp3(tmp4[7]);
        }
        tmp5 = stateFromStores1(closure_1_2[7]).shouldRequestNotification && !closure_1_7.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(589);
  const guildOpenNudge = stateFromStores(16025).useGuildOpenNudge();
  const obj3 = stateFromStores(16025);
  const postCallDisconnectNudge = stateFromStores(16027).usePostCallDisconnectNudge();
};