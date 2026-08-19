// === Module 15498: transformParticipantToSortedVoiceState ===

// Module 15498 (transformParticipantToSortedVoiceState)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { getComparator } from "getVoiceStatesForGuild" /* 4545 */;
import getActiveStageChannelIds from "getActiveStageChannelIds" /* 4989 */;

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
  return callback(_require(589).useStateFromStores(items, () => {
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
  }, items1, _require(6709).isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };