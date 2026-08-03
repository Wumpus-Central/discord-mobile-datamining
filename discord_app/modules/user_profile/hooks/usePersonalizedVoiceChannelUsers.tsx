import recomputeAffinities from "recomputeAffinities";
import hasConsented from "hasConsented";
import mergeGuildAvatar from "mergeGuildAvatar";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { Consents } from "ME";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  const _require = arg0;
  const items = [getVoiceStatesForGuild];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = outer1_5.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const obj = _require(stateFromStoresArray[5]);
  const items2 = [stateFromStores];
  stateFromStores = _require(stateFromStoresArray[5]).useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  const obj2 = _require(stateFromStoresArray[5]);
  const items3 = [stateFromStores1];
  stateFromStores1 = _require(stateFromStoresArray[5]).useStateFromStores(items3, () => stateFromStores1.hasConsented(constants.PERSONALIZATION));
  const obj3 = _require(stateFromStoresArray[5]);
  const items4 = [mergeGuildAvatar];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  return _require(stateFromStoresArray[5]).useStateFromStoresArray(items4, () => {
    if (stateFromStores1) {
      let sorted = obj.sort((arg0, arg1) => {
        let value = recomputeAffinities.get(arg1);
        let num;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        value = recomputeAffinities.get(arg0);
        let num2;
        if (value != null) {
          num2 = value.vcProbability;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return num - num2;
      });
    } else {
      sorted = obj;
    }
    const mapped = sorted.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items5);
};