// === Module 5688: TopSoundboardSoundStore ===

// Module 5688 (TopSoundboardSoundStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2;

const obj = { topSoundboardSoundsByGuildId: {} };
const React2 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class TopSoundboardSoundStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_1 = tmp;
  }
  getState() {
    return closure_1;
  }
  getTopSoundboardSoundIdsByGuildId(id) {
    return closure_1.topSoundboardSoundsByGuildId[id];
  }
  getIsFetching(arg0) {
    return closure_2[arg0];
  }
}
const prototype = TopSoundboardSoundStore.prototype;
TopSoundboardSoundStore.displayName = "TopSoundboardSoundStore";
TopSoundboardSoundStore.persistKey = "TopSoundboardSoundStore";
const obj2 = {
  LOGOUT: function handleLogout() {
    closure_1 = obj;
    closure_2 = {};
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH: function handleTopSoundboardSoundsFetching(guildId) {
    closure_2[guildId.guildId] = true;
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function handleTopSoundboardSoundsLoaded(arg0) {
    let guildId;
    let topSoundsMetadata;
    ({ guildId, topSoundsMetadata } = arg0);
    closure_1.topSoundboardSoundsByGuildId[guildId] = topSoundsMetadata.map((soundId) => soundId.soundId);
    closure_2[guildId] = false;
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE: function handleTopSoundboardSoundsFetchFailure(guildId) {
    closure_2[guildId.guildId] = false;
  }
};
const topSoundboardSoundStore = new TopSoundboardSoundStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundStore.tsx");

export default topSoundboardSoundStore;