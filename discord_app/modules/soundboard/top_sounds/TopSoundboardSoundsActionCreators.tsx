// discord_app/modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SoundboardStore from "../SoundboardStore.tsx";
import TopSoundboardSoundStore from "TopSoundboardSoundStore.tsx";

const require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export const maybeFetchTopSoundboardSoundsByGuild = function maybeFetchTopSoundboardSoundsByGuild(id) {
  if (null != id) {
    if (null != UserStore.getCurrentUser()) {
      const TopSoundboardSoundsMobileExperiment =
        require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
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
            let obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: id };
            DispatcherDefault.dispatch(obj);
            const HTTP = tmp9(1272).HTTP;
            obj = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id), oldFormErrors: true, rejectWithError: true };
            value = HTTP.get(obj);
            value.then(
              (body) => {
                const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: null };
                const items = body.body.items;
                const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
                obj.topSoundsMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
                return obj.dispatch(obj);
              },
              () => {
                const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId };
                return obj.dispatch(obj);
              },
            );
          }
          tmp9Result = tmp9(4399);
        }
      }
    }
  }
};
export const fetchTopSoundboardSounds = function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  let obj = require("RouteUtils");
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    DispatcherDefault.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj);
    value.then(
      (body) => {
        const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: null };
        const items = body.body.items;
        const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
        obj.topSoundsMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
        return obj.dispatch(obj);
      },
      () => {
        const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId };
        return obj.dispatch(obj);
      },
    );
  }
};
