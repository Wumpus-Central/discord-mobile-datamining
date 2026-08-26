// === Module 16497: maybeFetchTopSoundboardSoundsByGuild ===

// Module 16497 (maybeFetchTopSoundboardSoundsByGuild)
import dispatcherDefault from "dispatcher" /* 709 */;
import apexExperimentDefault from "apexExperiment" /* 16496 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import closure_4 from "handleSoundCreateOrUpdate" /* 4916 */;
import closure_5 from "initialize" /* 4917 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export const maybeFetchTopSoundboardSoundsByGuild = function maybeFetchTopSoundboardSoundsByGuild(id) {
  if (null != id) {
    if (null != currentUser.getCurrentUser()) {
      if (obj5.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled) {
        topSoundboardSoundsMetadata = topSoundboardSoundsMetadata.getTopSoundboardSoundsMetadata(id);
        if (null != topSoundboardSoundsMetadata) {
          const topSoundsTTL = topSoundboardSoundsMetadata.topSoundsTTL;
          if (null != topSoundsTTL) {
            const _Date = Date;
          }
        }
        if (!isFetching.getIsFetching(id)) {
          const _require = id;
          let obj = _require(4284);
          if (!obj.isPseudoGuildId(id)) {
            obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: null };
            obj[1] = id;
            tmp9(709).dispatch(obj);
            const HTTP = tmp4(530).HTTP;
            obj = { url: null, oldFormErrors: true, rejectWithError: true };
            obj[0] = Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id);
            const value = HTTP.get(obj);
            value.then((body) => {
              let obj = closure_1_1(closure_1_2[6]);
              obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId: closure_0, topSoundsMetadata: null };
              const items = body.body.items;
              const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
              obj[2] = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
              return obj.dispatch(obj);
            }, () => {
              let obj = closure_1_1(closure_1_2[6]);
              obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: closure_0 };
              return obj.dispatch(obj);
            });
            const tmp9Result = tmp9(709);
          }
          tmp4 = _require;
        }
      }
      obj5 = apexExperimentDefault;
      tmp9 = importDefault;
    }
  }
};
export const fetchTopSoundboardSounds = function fetchTopSoundboardSounds(id) {
  const _require = id;
  let obj = _require(4284);
  if (!obj.isPseudoGuildId(id)) {
    obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: null };
    obj[1] = id;
    dispatcherDefault.dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id);
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = closure_1_1(closure_1_2[6]);
      obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId: closure_0, topSoundsMetadata: null };
      const items = body.body.items;
      const mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
      obj[2] = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      let obj = closure_1_1(closure_1_2[6]);
      obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: closure_0 };
      return obj.dispatch(obj);
    });
    const obj2 = dispatcherDefault;
  }
};