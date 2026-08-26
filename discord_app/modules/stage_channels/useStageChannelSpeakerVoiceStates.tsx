// === Module 15674: transformParticipantToSortedVoiceState ===

// Module 15674 (transformParticipantToSortedVoiceState)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "initializeFromUserSettings" /* 1394 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import { getComparator } from "getVoiceStatesForGuild" /* 4519 */;
import closure_7 from "getActiveStageChannelIds" /* 5309 */;

const require = arg1;
function transformParticipantToSortedVoiceState(user) {
  ({ voiceState, userNick } = user);
  return { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
}
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  const _require = arg0;
  let items = [closure_7, closure_5, closure_4];
  const items1 = [arg0];
  return callback(_require(589).useStateFromStores(items, () => {
    if (obj.isFavoritesGuildId(callback)) {
      const keys = closure_1_1(tmp2[7]).keys(closure_1_4.getFavoriteChannels());
      const mapped = keys.map((arg0) => channel.getChannel(arg0));
      let found = mapped.filter(callback(tmp2[8]).isNotNullish);
      let found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
      const obj2 = closure_1_1(tmp2[7]);
    } else {
      found1 = closure_1_7.getChannels(callback);
    }
    const items = [
      found1.reduce((arg0, id) => {
        const mutableParticipants = store.getMutableParticipants(id.id, callback(table[9]).StageChannelParticipantNamedIndex.SPEAKER);
        const found = mutableParticipants.filter((type) => type.type === callback(table[9]).StageChannelParticipantTypes.VOICE);
        arg0[id.id] = found.map(closure_8);
        return arg0;
      }, {}),
      found1.reduce((arg0, id) => arg0 + store.getParticipantsVersion(id.id), 0)
    ];
    return items;
  }, items1, _require(5322).isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };