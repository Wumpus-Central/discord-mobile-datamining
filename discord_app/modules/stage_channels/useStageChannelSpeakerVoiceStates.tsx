// discord_app/modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function transformParticipantToSortedVoiceState(user) {
  let userNick;
  let voiceState;
  ({ voiceState, userNick } = user);
  const obj = { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
  return obj;
}
const getComparator = SortedVoiceStateStore.getComparator;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      let tmp9;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [StageChannelParticipantStore, ChannelStore, FavoriteStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let channel;
          let found1;
          const obj = FavoritesUtils;
          if (obj.isFavoritesGuildId(closure_0)) {
            const obj2 = SnowflakeUtilsDefault;
            const keys = obj2.keys(FavoriteStore.getFavoriteChannels());
            const mapped = keys.map((item) => channel.getChannel(item));
            let found = mapped.filter(GlobalUtils.isNotNullish);
            found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
          } else {
            found1 = StageChannelParticipantStore.getChannels(closure_0);
          }
          const items = [
            found1.reduce((acc, id) => {
              const mutableParticipants = closure_1_7.getMutableParticipants(
                id.id,
                closure_1_0(closure_1_2[10]).StageChannelParticipantNamedIndex.SPEAKER,
              );
              id = id.id;
              const found = mutableParticipants.filter(
                (type) => type.type === closure_1_0(closure_1_2[10]).StageChannelParticipantTypes.VOICE,
              );
              acc[id] = found.map(closure_1_8);
              return acc;
            }, {}),
            found1.reduce((acc, id) => acc + closure_1_7.getParticipantsVersion(id.id), 0),
          ];
          return items;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = require("get initialized");
      return _slicedToArray(
        tmpResult.useStateFromStores(first, tmp8, tmp9, require("SecondaryIndexMapUtils").isVersionEqual),
        1,
      )[0];
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      let items = [StageChannelParticipantStore, ChannelStore, FavoriteStore];
      const items1 = [arg0];
      return _slicedToArray(
        obj.useStateFromStores(
          items,
          () => {
            let channel;
            let found1;
            const obj = FavoritesUtils;
            if (obj.isFavoritesGuildId(closure_0)) {
              const obj2 = SnowflakeUtilsDefault;
              const keys = obj2.keys(FavoriteStore.getFavoriteChannels());
              const mapped = keys.map((item) => channel.getChannel(item));
              let found = mapped.filter(GlobalUtils.isNotNullish);
              found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
            } else {
              found1 = StageChannelParticipantStore.getChannels(closure_0);
            }
            const items = [
              found1.reduce((acc, id) => {
                const mutableParticipants = closure_1_7.getMutableParticipants(
                  id.id,
                  closure_1_0(closure_1_2[10]).StageChannelParticipantNamedIndex.SPEAKER,
                );
                id = id.id;
                const found = mutableParticipants.filter(
                  (type) => type.type === closure_1_0(closure_1_2[10]).StageChannelParticipantTypes.VOICE,
                );
                acc[id] = found.map(closure_1_8);
                return acc;
              }, {}),
              found1.reduce((acc, id) => acc + closure_1_7.getParticipantsVersion(id.id), 0),
            ];
            return items;
          },
          items1,
          require("SecondaryIndexMapUtils").isVersionEqual,
        ),
        1,
      )[0];
    };
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default tmp2;
export { transformParticipantToSortedVoiceState };
