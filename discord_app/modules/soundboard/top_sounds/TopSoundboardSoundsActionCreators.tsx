// discord_app/modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SoundboardStore from "../SoundboardStore.tsx";
import TopSoundboardSoundStore from "TopSoundboardSoundStore.tsx";

const require = globalThis.__r;

const require = fn;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export function maybeFetchTopSoundboardSoundsByGuild(id) {
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
          const HTTP = tmp2(1283).HTTP;
          const obj4 = {
            url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id),
            oldFormErrors: true,
            rejectWithError: true,
          };
          value = HTTP.get(obj4);
          value.then(
            (body) => {
              const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: null };
              const items = body.body.items;
              const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
              obj2.topSoundsMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
              return DispatcherDefault.dispatch(obj2);
            },
            () => DispatcherDefault.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId }),
          );
        }
        obj = require("RouteUtils");
        tmp2 = _require;
      }
    }
  }
}
export function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    DispatcherDefault.dispatch(obj3);
    const HTTP = tmp(1283).HTTP;
    const obj4 = {
      url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId),
      oldFormErrors: true,
      rejectWithError: true,
    };
    value = HTTP.get(obj4);
    value.then(
      (body) => {
        const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: null };
        const items = body.body.items;
        const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
        obj2.topSoundsMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
        return DispatcherDefault.dispatch(obj2);
      },
      () => DispatcherDefault.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId }),
    );
  }
  obj = require("RouteUtils");
  tmp = _require;
}
