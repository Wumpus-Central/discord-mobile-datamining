// === Module 16939: useConsoleConnectedAccountForVoiceUpsell ===

// Module 16939 (useConsoleConnectedAccountForVoiceUpsell)
import closure_3 from "set" /* 5233 */;
import closure_4 from "filterPlayingActivities" /* 5231 */;
import closure_5 from "set" /* 4495 */;
import { CONSOLE_VOICE_PLATFORMS } from "XBOX_URL_BASE" /* 9326 */;
import { ActivityTypes } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default function useConsoleConnectedAccountForVoiceUpsell() {
  const items = [closure_4];
  const stateFromStores = found(586).useStateFromStores(items, () => activities.getActivities(true));
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
  const obj = found(586);
  const items1 = [closure_5];
  const stateFromStores1 = found(586).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId());
  const obj2 = found(586);
  const items2 = [closure_3];
  const stateFromStores2 = found(586).useStateFromStores(items2, () => {
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
};