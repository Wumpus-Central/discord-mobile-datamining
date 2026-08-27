// === Module 4918: initialize ===

// Module 4918 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let obj = { topSoundboardSoundsByGuildId: {} };
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
  return obj;
};
prototype["getTopSoundboardSoundIdsByGuildId"] = function getTopSoundboardSoundIdsByGuildId(id) {
  return obj.topSoundboardSoundsByGuildId[id];
};
prototype["getIsFetching"] = function getIsFetching(arg0) {
  return table[arg0];
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
    obj.topSoundboardSoundsByGuildId[guildId] = topSoundsMetadata.map((soundId) => soundId.soundId);
    closure_2[guildId] = false;
  }
};
const topSoundboardSoundStore = new TopSoundboardSoundStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundStore.tsx");

export default topSoundboardSoundStore;