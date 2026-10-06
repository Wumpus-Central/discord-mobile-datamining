// === Module 12867: usePersonalizedVoiceChannelUsers ===

// Module 12867 (usePersonalizedVoiceChannelUsers)
import Constants from "Constants" /* 1085 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7156 */;
import ConsentStore from "ConsentStore" /* 6091 */;
import UserStore from "UserStore" /* 1377 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Consents = Constants.Consents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let first;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStoresArray;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    let tmp6;
    let tmp7;
    let tmp10;
    let tmp9;
    let tmp14;
    let tmp13;
    let tmp17;
    if (cResult[2] === guild_id.id) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = require("get initialized");
    stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [stateFromStores];
      const fn2 = function b() {
        return stateFromStores.getUserAffinitiesMap();
      };
      let num2 = 5;
      cResult[5] = items1;
      cResult[6] = fn2;
      tmp10 = fn2;
      tmp9 = items1;
    } else {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const tmpResult4 = require("get initialized");
    stateFromStores = tmpResult4.useStateFromStores(tmp9, tmp10);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [stateFromStores1];
      const fn3 = function h() {
        return stateFromStores1.hasConsented(constants.PERSONALIZATION);
      };
      cResult[7] = items2;
      cResult[8] = fn3;
      tmp14 = fn3;
      tmp13 = items2;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    const tmpResult5 = require("get initialized");
    stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp14);
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [UserStore];
      cResult[9] = items3;
      tmp17 = items3;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === stateFromStores1) {
      if (cResult[11] === stateFromStores) {
        let tmp19;
        let tmp20;
        if (cResult[12] === stateFromStoresArray) {
          tmp19 = cResult[13];
          tmp20 = cResult[14];
        }
        const tmpResult6 = require("get initialized");
        return tmpResult6.useStateFromStoresArray(tmp17, tmp19, tmp20);
      }
    }
    const fn4 = function p() {
      let sorted;
      let user;
      if (stateFromStores1) {
        sorted = stateFromStoresArray.sort((arg0, arg1) => {
          const value = stateFromStores.get(arg1);
          let num;
          if (value != null) {
            num = value.vcProbability;
          }
          if (num == null) {
            num = 0;
          }
          const value2 = stateFromStores.get(arg0);
          let num2;
          if (value2 != null) {
            num2 = value2.vcProbability;
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
    };
    const items4 = [stateFromStores1, stateFromStores, stateFromStoresArray];
    cResult[10] = stateFromStores1;
    cResult[11] = stateFromStores;
    cResult[12] = stateFromStoresArray;
    cResult[13] = fn4;
    cResult[14] = items4;
    tmp20 = items4;
    tmp19 = fn4;
  }
  const fn = function c() {
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(guild_id.id, guild_id.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  };
  const items5 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = guild_id);
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.id;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp7 = items5;
  tmp6 = fn;
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStoresArray;
  _require = arg0;
  const items = [SortedVoiceStateStore];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const items2 = [stateFromStores];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  const items3 = [stateFromStores1];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items3, () => stateFromStores1.hasConsented(constants.PERSONALIZATION));
  const items4 = [UserStore];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  const obj4 = require("get initialized");
  return obj4.useStateFromStoresArray(items4, () => {
    let sorted;
    let user;
    if (stateFromStores1) {
      sorted = stateFromStoresArray.sort((arg0, arg1) => {
        const value = stateFromStores.get(arg1);
        let num;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        const value2 = stateFromStores.get(arg0);
        let num2;
        if (value2 != null) {
          num2 = value2.vcProbability;
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
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default tmp2;