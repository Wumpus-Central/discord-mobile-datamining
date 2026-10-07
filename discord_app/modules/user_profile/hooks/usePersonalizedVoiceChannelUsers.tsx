// discord_app/modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const Consents = fn(1085).Consents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id) => {
      _require = guild_id;
      const cResult = require("c").c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedVoiceStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guild_id.guild_id) {
        if (cResult[2] === guild_id.id) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        stateFromStoresArray = tmp(tmp2[7]).useStateFromStoresArray(first, tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [stateFromStores];
          const fn2 = function b() {
            return stateFromStores.getUserAffinitiesMap();
          };
          cResult[5] = items1;
          cResult[6] = fn2;
          let tmp10 = fn2;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const tmpResult = tmp(tmp2[7]);
        stateFromStores = tmp(tmp2[7]).useStateFromStores(tmp9, tmp10);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [stateFromStores1];
          const fn3 = function h() {
            return stateFromStores1.hasConsented(constants.PERSONALIZATION);
          };
          cResult[7] = items2;
          cResult[8] = fn3;
          let tmp14 = fn3;
          let tmp13 = items2;
        } else {
          tmp13 = cResult[7];
          tmp14 = cResult[8];
        }
        const tmpResult4 = tmp(tmp2[7]);
        stateFromStores1 = tmp(tmp2[7]).useStateFromStores(tmp13, tmp14);
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [UserStore];
          cResult[9] = items3;
          let tmp17 = items3;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === stateFromStores1) {
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === stateFromStoresArray) {
              let tmp19 = cResult[13];
              let tmp20 = cResult[14];
            }
            return tmp(tmp2[7]).useStateFromStoresArray(tmp17, tmp19, tmp20);
          }
        }
        const fn4 = function p() {
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
              value2 = stateFromStores.get(arg0);
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
        const tmpResult5 = tmp(tmp2[7]);
      }
      const fn = function c() {
        const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(
          guild_id.id,
          guild_id.guild_id,
        );
        return voiceStatesForChannelAlt.map((user) => user.user.id);
      };
      const items5 = [,];
      ({ id: arr2[0], guild_id: arr2[1] } = guild_id);
      cResult[1] = guild_id.guild_id;
      cResult[2] = guild_id.id;
      cResult[3] = fn;
      cResult[4] = items5;
      tmp7 = items5;
      tmp6 = fn;
      const obj = require("c");
    }
  : (arg0) => {
      _require = arg0;
      const items = [SortedVoiceStateStore];
      const items1 = [,];
      ({ id: arr2[0], guild_id: arr2[1] } = arg0);
      stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items,
        () => {
          const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(
            closure_0.id,
            closure_0.guild_id,
          );
          return voiceStatesForChannelAlt.map((user) => user.user.id);
        },
        items1,
      );
      const obj = require("initialize");
      const items2 = [stateFromStores];
      stateFromStores = require("initialize").useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
      const obj2 = require("initialize");
      const items3 = [stateFromStores1];
      stateFromStores1 = require("initialize").useStateFromStores(items3, () =>
        stateFromStores1.hasConsented(constants.PERSONALIZATION),
      );
      const obj3 = require("initialize");
      const items4 = [UserStore];
      const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
      return require("initialize").useStateFromStoresArray(
        items4,
        () => {
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
              value2 = stateFromStores.get(arg0);
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
        },
        items5,
      );
    };
