// === Module 12122: usePersonalizedVoiceChannelUsers ===

// Module 12122 (usePersonalizedVoiceChannelUsers)
import recomputeAffinities from "recomputeAffinities" /* 5407 */;
import hasConsented from "hasConsented" /* 5258 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import getVoiceStatesForGuild from "getVoiceStatesForGuild" /* 4545 */;
import { Consents } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = closure_1_5.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((item, index) => item.user.id);
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
      let sorted = stateFromStoresArray.sort((arg0, arg1) => {
        let value = store.get(arg1);
        let num;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        value = store.get(arg0);
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
      sorted = stateFromStoresArray;
    }
    const mapped = sorted.map((item, index) => user.getUser(item));
    return mapped.filter((item, index) => null != item);
  }, items5);
};