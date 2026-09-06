// === Module 17123: useConsoleConnectedAccountForVoiceUpsell ===

// Module 17123 (useConsoleConnectedAccountForVoiceUpsell)
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;

const require = fn;
const CONSOLE_VOICE_PLATFORMS = fn(9233).CONSOLE_VOICE_PLATFORMS;
const ActivityTypes = fn(1074).ActivityTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default function useConsoleConnectedAccountForVoiceUpsell() {
  const items = [SelfPresenceStore];
  const stateFromStores = found(504).useStateFromStores(items, () => activities.getActivities(true));
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
  const obj = found(504);
  const items1 = [GameConsoleStore];
  const stateFromStores1 = found(504).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId());
  const obj2 = found(504);
  const items2 = [ConnectedAccountsStore];
  const stateFromStores2 = found(504).useStateFromStores(items2, () => {
    const mapped = found.map((platform) => {
      platform = platform.platform;
      if (null == platform) {
        return null;
      } else {
        const tmp3 = closure_1_1(closure_1_2[6])(platform);
        account = null;
        if (null != tmp3) {
          account = account.getAccount(null, tmp3);
        }
        return account;
      }
    });
    return mapped.find((item) => null != item);
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