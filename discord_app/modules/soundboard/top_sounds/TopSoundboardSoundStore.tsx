// === Module 5013: TopSoundboardSoundStore ===

// Module 5013 (TopSoundboardSoundStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let obj = { topSoundboardSoundsByGuildId: {} };
let closure_1 = obj;
let closure_2 = {};
const PersistedStore = initializeDefault.PersistedStore;
class TopSoundboardSoundStore extends PersistedStore {
}
const prototype = TopSoundboardSoundStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_1 = tmp;
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getTopSoundboardSoundIdsByGuildId"] = function getTopSoundboardSoundIdsByGuildId(id) {
  return closure_1.topSoundboardSoundsByGuildId[id];
};
prototype["getIsFetching"] = function getIsFetching(arg0) {
  return closure_2[arg0];
};
TopSoundboardSoundStore.displayName = "TopSoundboardSoundStore";
TopSoundboardSoundStore.persistKey = "TopSoundboardSoundStore";
obj = {
  LOGOUT: function handleLogout() {
    closure_1 = obj;
    closure_2 = {};
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH: function handleTopSoundboardSoundsFetching(guildId) {
    closure_2[guildId.guildId] = true;
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function handleTopSoundboardSoundsLoaded(arg0) {
    ({ guildId, topSoundsMetadata } = arg0);
    closure_1.topSoundboardSoundsByGuildId[guildId] = topSoundsMetadata.map((soundId) => soundId.soundId);
    closure_2[guildId] = false;
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE: function handleTopSoundboardSoundsFetchFailure(guildId) {
    closure_2[guildId.guildId] = false;
  }
};
const topSoundboardSoundStore = new TopSoundboardSoundStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundStore.tsx");

export default topSoundboardSoundStore;