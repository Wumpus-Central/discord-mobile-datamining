// === Module 16886: TopSoundboardSoundsActionCreators ===

// Module 16886 (TopSoundboardSoundsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5319 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 5320 */;

const require = globalThis.__r;

const require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export const maybeFetchTopSoundboardSoundsByGuild = function maybeFetchTopSoundboardSoundsByGuild(id) {
  if (null != id) {
    if (null != UserStore.getCurrentUser()) {
      const TopSoundboardSoundsMobileExperiment = require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
      if (TopSoundboardSoundsMobileExperiment.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled) {
        const topSoundboardSoundsMetadata = SoundboardStore.getTopSoundboardSoundsMetadata(id);
        if (null != topSoundboardSoundsMetadata) {
          const topSoundsTTL = topSoundboardSoundsMetadata.topSoundsTTL;
          if (null != topSoundsTTL) {
            const _Date = Date;
          }
        }
        if (!TopSoundboardSoundStore.getIsFetching(id)) {
          _require = id;
          if (!tmp9Result.isPseudoGuildId(id)) {
            const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: id };
            DispatcherDefault.dispatch(obj);
            const HTTP = tmp9(1271).HTTP;
            const obj3 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id), oldFormErrors: true, rejectWithError: true };
            value = HTTP.get(obj3);
            value.then((body) => {
              const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: null };
              const items = body.body.items;
              const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
              obj2.topSoundsMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
              return DispatcherDefault.dispatch(obj2);
            }, () => DispatcherDefault.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId }));
          }
          tmp9Result = tmp9(4673);
        }
      }
    }
  }
};
export const fetchTopSoundboardSounds = function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    DispatcherDefault.dispatch(obj3);
    const HTTP = tmp(1271).HTTP;
    const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj4);
    value.then((body) => {
      const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: null };
      const items = body.body.items;
      const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
      obj2.topSoundsMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return DispatcherDefault.dispatch(obj2);
    }, () => DispatcherDefault.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId }));
  }
  obj = require("RouteUtils");
  tmp = _require;
};