// === Module 18437: TopSoundboardSoundsActionCreators ===

// Module 18437 (TopSoundboardSoundsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserStore from "UserStore" /* 1392 */;
import SoundboardStore from "SoundboardStore" /* 5992 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 5993 */;

const require = globalThis.__r;

const require = fn;
const Endpoints = fn(1087).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export const maybeFetchTopSoundboardSoundsByGuild = function maybeFetchTopSoundboardSoundsByGuild(id) {
  if (null != id) {
    if (null != UserStore.getCurrentUser()) {
      const topSoundboardSoundsMetadata = SoundboardStore.getTopSoundboardSoundsMetadata(id);
      if (null != topSoundboardSoundsMetadata) {
        const topSoundsTTL = topSoundboardSoundsMetadata.topSoundsTTL;
        if (null != topSoundsTTL) {
          const _Date = Date;
        }
      }
      if (!TopSoundboardSoundStore.getIsFetching(id)) {
        _require = id;
        if (!obj.isPseudoGuildId(id)) {
          const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: id };
          DispatcherDefault.dispatch(obj3);
          const HTTP = tmp2(1297).HTTP;
          const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id), oldFormErrors: true, rejectWithError: true };
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
        tmp2 = _require;
      }
    }
  }
};
export const fetchTopSoundboardSounds = function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    DispatcherDefault.dispatch(obj3);
    const HTTP = tmp(1297).HTTP;
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