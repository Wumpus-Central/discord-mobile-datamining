// === Module 14797: useStreamRequestActivities ===

// Module 14797 (useStreamRequestActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9260 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5750 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6557 */;

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
let items = [, , ];
({ XBOX: arr[0], PS4: arr[1], PS5: arr[2] } = fn(1084).ActivityGamePlatforms);
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useStreamRequestActivities.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useStreamRequestActivities(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp8 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp8);
    if (cResult[4] !== stateFromStores) {
      const found = stateFromStores.filter(isStreamRequestActivity);
      cResult[4] = stateFromStores;
      cResult[5] = found;
      let tmp9 = found;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const fn = function o() {
    if (AuthenticationStore.getId() === closure_0) {
      let activities = SelfPresenceStore.getActivities();
    } else {
      activities = PresenceStore.getActivities(tmp, closure_1);
    }
    return activities;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp8 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useStreamRequestActivities(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
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
});
export { isStreamRequestActivity };
export function getStreamRequestActivities(userId, guildId) {
  if (AuthenticationStore.getId() === userId) {
    let activities = SelfPresenceStore.getActivities();
  } else {
    activities = PresenceStore.getActivities(userId, guildId);
  }
  return activities.filter(isStreamRequestActivity);
}