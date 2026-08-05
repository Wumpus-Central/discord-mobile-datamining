// discord_app/modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx
import _slicedToArray from "_slicedToArray";
import initializeFromUserSettings from "initializeFromUserSettings";
import ensureGuildLoaded from "ensureGuildLoaded";
import { getComparator } from "getVoiceStatesForGuild";
import getActiveStageChannelIds from "getActiveStageChannelIds";

const require = arg1;
function transformParticipantToSortedVoiceState(user) {
  let userNick;
  let voiceState;
  ({ voiceState, userNick } = user);
  return { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
}
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  const _require = arg0;
  let items = [getActiveStageChannelIds, ensureGuildLoaded, initializeFromUserSettings];
  const items1 = [arg0];
  return callback(_require(589).useStateFromStores(items, () => {
    if (obj.isFavoritesGuildId(callback)) {
      const keys = outer1_1(tmp2[7]).keys(outer1_4.getFavoriteChannels());
      const mapped = keys.map((arg0) => channel.getChannel(arg0));
      let found = mapped.filter(callback(tmp2[8]).isNotNullish);
      let found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
      const obj2 = outer1_1(tmp2[7]);
    } else {
      found1 = outer1_7.getChannels(callback);
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
  }, items1, _require(5116).isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };