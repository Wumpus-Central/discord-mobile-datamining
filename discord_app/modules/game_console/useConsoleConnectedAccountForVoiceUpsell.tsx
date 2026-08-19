// === Module 16341: useConsoleConnectedAccountForVoiceUpsell ===

// Module 16341 (useConsoleConnectedAccountForVoiceUpsell)
import set from "set" /* 5221 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import set2 from "set" /* 4540 */;
import { CONSOLE_VOICE_PLATFORMS } from "XBOX_URL_BASE" /* 9763 */;
import { ActivityTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default function useConsoleConnectedAccountForVoiceUpsell() {
  const items = [closure_4];
  const stateFromStores = found(589).useStateFromStores(items, () => activities.getActivities(true));
  found = stateFromStores.filter((item, index) => {
    const platform = item.platform;
    let hasItem = item.type === constants.PLAYING;
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
  const stateFromStores1 = found(589).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId());
  const obj2 = found(589);
  const items2 = [closure_3];
  const stateFromStores2 = found(589).useStateFromStores(items2, () => {
    const mapped = found.map((item, index) => {
      const platform = item.platform;
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
    return mapped.find((item, index) => null != item);
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