// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import StageChannelParticipants from "../../../../stage_channels/StageChannelParticipants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import StageChannelParticipantStore from "../../../../stage_channels/StageChannelParticipantStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel_id) => {
      let first;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp17;
      let tmp18;
      let tmp7;
      let tmp8;
      _require = channel_id;
      const obj = require("react");
      const cResult = obj.c(37);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageChannelParticipantStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel_id.channel_id) {
        const fn = function s() {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            channel_id.channel_id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.FRIEND,
          );
          const found = mutableParticipants.filter(
            (type) => type.type === channel_id(closure_1_2[5]).StageChannelParticipantTypes.VOICE,
          );
          return found.map((user) => user.user);
        };
        const items1 = [channel_id.channel_id];
        cResult[1] = channel_id.channel_id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmp2Result = require("useStateFromStores");
      const stateFromStoresArray = tmp2Result.useStateFromStoresArray(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [StageChannelParticipantStore];
        cResult[4] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== channel_id.channel_id) {
        const fn2 = function p() {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            channel_id.channel_id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
          );
          const found = mutableParticipants.filter(
            (type) => type.type === channel_id(closure_1_2[5]).StageChannelParticipantTypes.VOICE,
          );
          return found.map((user) => user.user);
        };
        const items3 = [channel_id.channel_id];
        cResult[5] = channel_id.channel_id;
        cResult[6] = fn2;
        cResult[7] = items3;
        tmp13 = items3;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmp2Result4 = require("useStateFromStores");
      const stateFromStoresArray1 = tmp2Result4.useStateFromStoresArray(tmp10, tmp12, tmp13);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [StageChannelParticipantStore];
        cResult[8] = items4;
        tmp15 = items4;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== channel_id.channel_id) {
        const fn3 = function f() {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            channel_id.channel_id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
          );
          const found = mutableParticipants.filter(
            (type) => type.type === channel_id(closure_1_2[5]).StageChannelParticipantTypes.VOICE,
          );
          return found.map((user) => user.user);
        };
        const items5 = [channel_id.channel_id];
        cResult[9] = channel_id.channel_id;
        cResult[10] = fn3;
        cResult[11] = items5;
        tmp18 = items5;
        tmp17 = fn3;
      } else {
        tmp17 = cResult[10];
        tmp18 = cResult[11];
      }
      const tmp2Result5 = require("useStateFromStores");
      const stateFromStoresArray2 = tmp2Result5.useStateFromStoresArray(tmp15, tmp17, tmp18);
      if (cResult[12] === stateFromStoresArray) {
        let tmp19;
        if (cResult[13] === stateFromStoresArray1) {
          tmp19 = cResult[14];
        }
        if (cResult[16] === stateFromStoresArray) {
          let tmp22;
          if (cResult[17] === stateFromStoresArray1) {
            tmp22 = cResult[18];
          }
          if (cResult[19] === stateFromStoresArray2) {
            let tmp25;
            if (cResult[20] === stateFromStoresArray) {
              tmp25 = cResult[21];
            }
            if (cResult[22] === tmp22) {
              let tmp28;
              let tmp34;
              let tmp37;
              if (cResult[23] === tmp25) {
                tmp28 = cResult[24];
              }
              const _Symbol = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const items6 = [ChannelStore];
                cResult[25] = items6;
                tmp34 = items6;
              } else {
                tmp34 = cResult[25];
              }
              if (cResult[26] !== channel_id.channel_id) {
                class B {
                  constructor() {
                    return ChannelStore.getChannel(channel_id.channel_id);
                  }
                }
                const items7 = [channel_id.channel_id];
                cResult[26] = channel_id.channel_id;
                cResult[27] = B;
                cResult[28] = items7;
                tmp37 = items7;
              } else {
                class B {
                  constructor() {
                    return ChannelStore.getChannel(channel_id.channel_id);
                  }
                }
                tmp37 = cResult[28];
              }
              const tmp2Result6 = require("useStateFromStores");
              const stateFromStores = tmp2Result6.useStateFromStores(tmp34, B, tmp37);
              if (cResult[29] === stateFromStoresArray2.length) {
                class B {
                  constructor() {
                    return ChannelStore.getChannel(channel_id.channel_id);
                  }
                }
              }
              const obj2 = {
                friends: stateFromStoresArray,
                speakers: stateFromStoresArray1,
                audienceCount: stateFromStoresArray2.length,
                users: tmp19,
                audiencePrefixedFriends: tmp28,
                audienceFriends: tmp22,
                channel: stateFromStores,
              };
              cResult[29] = stateFromStoresArray2.length;
              cResult[30] = tmp22;
              cResult[31] = tmp28;
              cResult[32] = stateFromStores;
              cResult[33] = stateFromStoresArray;
              cResult[34] = stateFromStoresArray1;
              cResult[35] = tmp19;
              cResult[36] = obj2;
            }
            const items8 = [];
            HermesBuiltin.arraySpread(items8, tmp25, HermesBuiltin.arraySpread(items8, tmp22, 0));
            cResult[22] = tmp22;
            cResult[23] = tmp25;
            cResult[24] = items8;
            tmp28 = items8;
          }
          const obj7 = _modDef12;
          const differenceByResult = obj7.differenceBy(stateFromStoresArray2, stateFromStoresArray, "id");
          cResult[19] = stateFromStoresArray2;
          cResult[20] = stateFromStoresArray;
          cResult[21] = differenceByResult;
          tmp25 = differenceByResult;
        }
        const obj6 = _modDef12;
        const differenceByResult1 = obj6.differenceBy(stateFromStoresArray, stateFromStoresArray1, "id");
        cResult[16] = stateFromStoresArray;
        cResult[17] = stateFromStoresArray1;
        cResult[18] = differenceByResult1;
        tmp22 = differenceByResult1;
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return ChannelStore.getChannel(channel_id.channel_id);
          }
        }
        cResult[15] = I;
      } else {
        class B {
          constructor() {
            return ChannelStore.getChannel(channel_id.channel_id);
          }
        }
      }
      const items9 = [...stateFromStoresArray1];
      const obj5 = _modDef12;
      const uniqByResult = obj5.uniqBy(items9, I);
      cResult[12] = stateFromStoresArray;
      cResult[13] = stateFromStoresArray1;
      cResult[14] = uniqByResult;
      tmp19 = uniqByResult;
    }
  : (channel_id) => {
      let memo1;
      let stateFromStoresArray1;
      _require = channel_id;
      let obj = require("useStateFromStores");
      let items = [memo1];
      const items1 = [channel_id.channel_id];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            channel_id.channel_id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.FRIEND,
          );
          const found = mutableParticipants.filter(
            (type) => type.type === channel_id(stateFromStoresArray1[5]).StageChannelParticipantTypes.VOICE,
          );
          return found.map((user) => user.user);
        },
        items1,
      );
      const items2 = [memo1];
      const items3 = [channel_id.channel_id];
      const obj2 = require("useStateFromStores");
      stateFromStoresArray1 = obj2.useStateFromStoresArray(
        items2,
        () => {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            channel_id.channel_id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
          );
          const found = mutableParticipants.filter(
            (type) => type.type === channel_id(stateFromStoresArray1[5]).StageChannelParticipantTypes.VOICE,
          );
          return found.map((user) => user.user);
        },
        items3,
      );
      const items4 = [memo1];
      const items5 = [channel_id.channel_id];
      const obj3 = require("useStateFromStores");
      const stateFromStoresArray2 = obj3.useStateFromStoresArray(
        items4,
        () => {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            channel_id.channel_id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
          );
          const found = mutableParticipants.filter(
            (type) => type.type === channel_id(stateFromStoresArray1[5]).StageChannelParticipantTypes.VOICE,
          );
          return found.map((user) => user.user);
        },
        items5,
      );
      const items6 = [stateFromStoresArray, stateFromStoresArray1];
      const items7 = [stateFromStoresArray, stateFromStoresArray1];
      const memo = stateFromStoresArray2.useMemo(() => {
        const items = [...stateFromStoresArray1];
        const obj = _modDef12;
        return obj.uniqBy(items, (id) => id.id);
      }, items6);
      memo1 = stateFromStoresArray2.useMemo(() => {
        const obj = _modDef12;
        return obj.differenceBy(stateFromStoresArray, stateFromStoresArray1, "id");
      }, items7);
      const items8 = [stateFromStoresArray, stateFromStoresArray2];
      const memo2 = stateFromStoresArray2.useMemo(() => {
        const obj = _modDef12;
        return obj.differenceBy(stateFromStoresArray2, stateFromStoresArray, "id");
      }, items8);
      const items9 = [memo1, memo2];
      const memo3 = stateFromStoresArray2.useMemo(() => {
        const items = [...memo2];
        return items;
      }, items9);
      const items10 = [memo2];
      const items11 = [channel_id.channel_id];
      const obj4 = require("useStateFromStores");
      const obj5 = {
        friends: stateFromStoresArray,
        speakers: stateFromStoresArray1,
        audienceCount: stateFromStoresArray2.length,
        users: memo,
        audiencePrefixedFriends: memo3,
        audienceFriends: memo1,
        channel: obj4.useStateFromStores(items10, () => ChannelStore.getChannel(channel_id.channel_id), items11),
      };
      return obj5;
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx",
);

export const useLiveStageData = tmp2;
