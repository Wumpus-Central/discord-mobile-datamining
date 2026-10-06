// discord_app/modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SoundboardStore from "../SoundboardStore.tsx";
import TopSoundboardSoundStore from "TopSoundboardSoundStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const f129439 = (body) => {
  let mapped;
  const items = body.body.items;
  const obj = {
    type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
    guildId,
    topSoundsMetadata: mapped.sort((rank, rank2) => rank.rank - rank2.rank),
  };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
  return dispatch(obj);
};
const f129440 = () => {
  const obj = DispatcherDefault;
  const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId };
  return obj.dispatch(obj2);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export const maybeFetchTopSoundboardSoundsByGuild = function maybeFetchTopSoundboardSoundsByGuild(id) {
  let guildId;
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
          const tmp9Result = require("RouteUtils");
          if (!tmp9Result.isPseudoGuildId(id)) {
            let obj2 = DispatcherDefault;
            let obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: id };
            obj2.dispatch(obj);
            const HTTP = tmp9(1282).HTTP;
            const get = HTTP.get;
            const obj3 = {
              url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id),
              oldFormErrors: true,
              rejectWithError: true,
            };
            const value = get(obj3);
            value.then(f129439, f129440);
          }
        }
      }
    }
  }
};
export const fetchTopSoundboardSounds = function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  const obj = require("RouteUtils");
  const tmp = _require;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
    const HTTP = tmp(1282).HTTP;
    const get = HTTP.get;
    const obj4 = {
      url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId),
      oldFormErrors: true,
      rejectWithError: true,
    };
    const value = get(obj4);
    value.then(f129439, f129440);
  }
};
