// discord_app/modules/nuf/native/useNotificationPermissionPrompt.tsx
import noop from "noop";
import handleUpdateUser from "handleUpdateUser";
import _handleConnectionOpen from "_handleConnectionOpen";
import handleRequiredAction from "handleRequiredAction";
import set from "set";

const require = arg1;
const result = require("_handleConnectionOpen").fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [_handleConnectionOpen];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(589);
  const items1 = [handleRequiredAction, handleUpdateUser];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => stateFromStores1(table[6])(handleUpdateUser, handleRequiredAction));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = tmp3(tmp4[7]).requestPermission();
          tmp3(tmp4[7]).shouldRequestNotification = false;
          const tmp3Result = tmp3(tmp4[7]);
        }
        tmp5 = stateFromStores1(outer1_2[7]).shouldRequestNotification && !outer1_7.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(589);
  const guildOpenNudge = stateFromStores(15730).useGuildOpenNudge();
  const obj3 = stateFromStores(15730);
  const postCallDisconnectNudge = stateFromStores(15732).usePostCallDisconnectNudge();
};