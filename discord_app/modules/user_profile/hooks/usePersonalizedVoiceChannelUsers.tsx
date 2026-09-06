// === Module 13025: usePersonalizedVoiceChannelUsers ===

// Module 13025 (usePersonalizedVoiceChannelUsers)
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import ConsentStore from "ConsentStore" /* 6595 */;
import UserStore from "UserStore" /* 1371 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

const require = fn;
const Consents = fn(1074).Consents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  _require = arg0;
  const items = [SortedVoiceStateStore];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const obj = require("initialize");
  const items2 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  const obj2 = require("initialize");
  const items3 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items3, () => stateFromStores1.hasConsented(constants.PERSONALIZATION));
  const obj3 = require("initialize");
  const items4 = [UserStore];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  return require("initialize").useStateFromStoresArray(items4, () => {
    if (stateFromStores1) {
      let sorted = stateFromStoresArray.sort((arg0, arg1) => {
        value = stateFromStores.get(arg1);
        let num;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        value = stateFromStores.get(arg0);
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
    const mapped = sorted.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items5);
};