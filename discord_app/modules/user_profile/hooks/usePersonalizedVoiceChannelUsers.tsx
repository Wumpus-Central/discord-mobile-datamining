// === Module 9437: usePersonalizedVoiceChannelUsers ===

// Module 9437 (usePersonalizedVoiceChannelUsers)
import closure_2 from "recomputeAffinities" /* 7413 */;
import closure_3 from "hasConsented" /* 6062 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import closure_5 from "getVoiceStatesForGuild" /* 4555 */;
import { Consents } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = closure_1_5.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const obj = _require(stateFromStoresArray[5]);
  const items2 = [stateFromStores];
  stateFromStores = _require(stateFromStoresArray[5]).useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  const obj2 = _require(stateFromStoresArray[5]);
  const items3 = [stateFromStores1];
  stateFromStores1 = _require(stateFromStoresArray[5]).useStateFromStores(items3, () => stateFromStores1.hasConsented(constants.PERSONALIZATION));
  const obj3 = _require(stateFromStoresArray[5]);
  const items4 = [closure_4];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  return _require(stateFromStoresArray[5]).useStateFromStoresArray(items4, () => {
    if (stateFromStores1) {
      let sorted = obj.sort((arg0, arg1) => {
        let value = closure_2.get(arg1);
        let num;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        value = closure_2.get(arg0);
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