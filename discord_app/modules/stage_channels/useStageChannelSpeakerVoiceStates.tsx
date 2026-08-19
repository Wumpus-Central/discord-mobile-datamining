// discord_app/modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import initializeFromUserSettings from "../favorites/FavoriteStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { getComparator } from "../../stores/views/SortedVoiceStateStore.tsx";
import getActiveStageChannelIds from "StageChannelParticipantStore.tsx";

const require = fn;
function transformParticipantToSortedVoiceState(user) {
  ({ voiceState, userNick } = user);
  return { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
}
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  const _require = arg0;
  let items = [closure_7, closure_5, closure_4];
  const items1 = [arg0];
  return callback(require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (obj.isFavoritesGuildId(callback)) {
      const keys = DISCORD_EPOCHDefault.keys(closure_1_4.getFavoriteChannels());
      const mapped = keys.map((item, index) => channel.getChannel(item));
      let found = mapped.filter(callback(dependencyMap[8]).isNotNullish);
      let found1 = found.filter((item, index) => item.isGuildStageVoice());
    } else {
      found1 = closure_1_7.getChannels(callback);
    }
    const items = [
      found1.reduce((acc, item, index) => {
        const mutableParticipants = store.getMutableParticipants(item.id, callback(table[9]).StageChannelParticipantNamedIndex.SPEAKER);
        const found = mutableParticipants.filter((item, index) => item.type === callback(table[9]).StageChannelParticipantTypes.VOICE);
        acc[item.id] = found.map(closure_8);
        return acc;
      }, {}),
      found1.reduce((acc, item, index) => acc + store.getParticipantsVersion(item.id), 0)
    ];
    return items;
  }, items1, require("../../utils/SecondaryIndexMapUtils.tsx").isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };