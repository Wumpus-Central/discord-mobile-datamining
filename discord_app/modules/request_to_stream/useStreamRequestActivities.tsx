// === Module 15625: useStreamRequestActivities ===

// Module 15625 (useStreamRequestActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 10584 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 6005 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7252 */;

const require = globalThis.__r;

const require = fn;
function isStreamRequestActivity(platform) {
  let tmp = isPlayingGameActivityDefault(platform);
  if (tmp) {
    let str;
    if (platform != null) {
      str = platform.platform;
    }
    if (str == null) {
      str = "";
    }
    tmp = !set.has(str);
  }
  return tmp;
}
let items = [fn(7406).ActivityGamePlatforms.XBOX, fn(7406).ActivityGamePlatforms.PLAYSTATION_4, fn(7406).ActivityGamePlatforms.PLAYSTATION_5];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useStreamRequestActivities.tsx");

export default function useStreamRequestActivities(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() === closure_0) {
      let activities = SelfPresenceStore.getActivities();
    } else {
      activities = PresenceStore.getActivities(tmp, closure_1);
    }
    return activities;
  });
  const items1 = [stateFromStores];
  return noop.useMemo(() => stateFromStores.filter(isStreamRequestActivity), items1);
};
export { isStreamRequestActivity };
export function getStreamRequestActivities(userId, guildId) {
  if (AuthenticationStore.getId() === userId) {
    let activities = SelfPresenceStore.getActivities();
  } else {
    activities = PresenceStore.getActivities(userId, guildId);
  }
  return activities.filter(isStreamRequestActivity);
}