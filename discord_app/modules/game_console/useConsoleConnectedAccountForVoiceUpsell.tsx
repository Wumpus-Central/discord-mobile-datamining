// discord_app/modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx
import closure_3 from "../../stores/ConnectedAccountsStore.tsx";
import closure_4 from "../../stores/SelfPresenceStore.tsx";
import closure_5 from "GameConsoleStore.tsx";
import { CONSOLE_VOICE_PLATFORMS } from "GameConsoleConstants.tsx";
import { ActivityTypes } from "../../Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx",
);

export default function useConsoleConnectedAccountForVoiceUpsell() {
  const items = [closure_4];
  const stateFromStores = found(589).useStateFromStores(items, () => activities.getActivities(true));
  found = stateFromStores.filter((platform) => {
    platform = platform.platform;
    let hasItem = platform.type === constants.PLAYING;
    if (hasItem) {
      hasItem = null != platform;
    }
    if (hasItem) {
      hasItem = set.has(platform);
    }
    return hasItem;
  });
  const obj = found(589);
  const items1 = [closure_5];
  const stateFromStores1 = found(589).useStateFromStores(
    items1,
    () =>
      null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() ||
      null != awaitingRemoteSessionInfo.getRemoteSessionId(),
  );
  const obj2 = found(589);
  const items2 = [closure_3];
  const stateFromStores2 = found(589).useStateFromStores(items2, () => {
    const mapped = found.map((platform) => {
      platform = platform.platform;
      if (null == platform) {
        return null;
      } else {
        const tmp3 = callback(table[6])(platform);
        let account = null;
        if (null != tmp3) {
          account = account.getAccount(null, tmp3);
        }
        return account;
      }
    });
    return mapped.find((arg0) => null != arg0);
  });
  let tmp3 = null;
  if (found.length > 0) {
    tmp3 = null;
    if (null != stateFromStores2) {
      tmp3 = null;
      if (!stateFromStores1) {
        tmp3 = stateFromStores2;
      }
    }
  }
  return tmp3;
}
