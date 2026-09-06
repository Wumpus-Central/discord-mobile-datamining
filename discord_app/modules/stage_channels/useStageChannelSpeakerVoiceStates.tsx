// discord_app/modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";

require = fn;
function transformParticipantToSortedVoiceState(user) {
  ({ voiceState, userNick } = user);
  return { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
}
const getComparator = fn(4584).getComparator;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  _require = arg0;
  let items = [StageChannelParticipantStore, ChannelStore, FavoriteStore];
  const items1 = [arg0];
  return _slicedToArray(
    require("initialize").useStateFromStores(
      items,
      () => {
        if (obj.isFavoritesGuildId(closure_0)) {
          const keys = SnowflakeUtilsDefault.keys(FavoriteStore.getFavoriteChannels());
          const mapped = keys.map((item) => channel.getChannel(item));
          let found = mapped.filter(GlobalUtils.isNotNullish);
          let found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
        } else {
          found1 = StageChannelParticipantStore.getChannels(closure_0);
        }
        const items = [
          found1.reduce((acc, id) => {
            const mutableParticipants = closure_1_7.getMutableParticipants(
              id.id,
              closure_1_0(closure_1_2[9]).StageChannelParticipantNamedIndex.SPEAKER,
            );
            const found = mutableParticipants.filter(
              (type) => type.type === closure_1_0(closure_1_2[9]).StageChannelParticipantTypes.VOICE,
            );
            acc[id.id] = found.map(closure_1_8);
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
}
export { transformParticipantToSortedVoiceState };
