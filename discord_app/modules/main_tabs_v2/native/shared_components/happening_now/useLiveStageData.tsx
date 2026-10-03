// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import StageChannelParticipants from "../../../../stage_channels/StageChannelParticipants.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import StageChannelParticipantStore from "../../../../stage_channels/StageChannelParticipantStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx",
);

export const useLiveStageData = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel_id) => {
      _require = channel_id;
      const cResult = require("c").c(37);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageChannelParticipantStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [StageChannelParticipantStore];
        cResult[4] = items2;
        let tmp9 = items2;
      } else {
        tmp9 = cResult[4];
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
        let tmp12 = items3;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStoresArray1 = require("useStateFromStores").useStateFromStoresArray(tmp9, tmp11, tmp12);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [StageChannelParticipantStore];
        cResult[8] = items4;
        let tmp14 = items4;
      } else {
        tmp14 = cResult[8];
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
        let tmp17 = items5;
        let tmp16 = fn3;
      } else {
        tmp16 = cResult[10];
        tmp17 = cResult[11];
      }
      const tmpResult4 = require("useStateFromStores");
      const stateFromStoresArray2 = require("useStateFromStores").useStateFromStoresArray(tmp14, tmp16, tmp17);
      if (cResult[12] === stateFromStoresArray) {
        if (cResult[13] === stateFromStoresArray1) {
          if (cResult[16] === stateFromStoresArray) {
            if (cResult[17] === stateFromStoresArray1) {
              let tmp21 = cResult[18];
            }
            if (cResult[19] === stateFromStoresArray2) {
              if (cResult[20] === stateFromStoresArray) {
                let tmp24 = cResult[21];
              }
              if (cResult[22] === tmp21) {
                if (cResult[23] === tmp24) {
                  let tmp27 = cResult[24];
                }
                const _Symbol = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const items6 = [ChannelStore];
                  cResult[25] = items6;
                  let tmp33 = items6;
                } else {
                  tmp33 = cResult[25];
                }
                if (cResult[26] !== channel_id.channel_id) {
                  class B {
                    constructor() {
                      return closure_5.getChannel(closure_0.channel_id);
                    }
                  }
                  const items7 = [channel_id.channel_id];
                  cResult[26] = channel_id.channel_id;
                  cResult[27] = B;
                  cResult[28] = items7;
                  let tmp36 = items7;
                } else {
                  class B {
                    constructor() {
                      return closure_5.getChannel(closure_0.channel_id);
                    }
                  }
                  tmp36 = cResult[28];
                }
                const stateFromStores = tmp(573).useStateFromStores(tmp33, B, tmp36);
                if (cResult[29] === stateFromStoresArray2.length) {
                  class B {
                    constructor() {
                      return closure_5.getChannel(closure_0.channel_id);
                    }
                  }
                }
                const obj2 = {
                  friends: stateFromStoresArray,
                  speakers: stateFromStoresArray1,
                  audienceCount: stateFromStoresArray2.length,
                  users: tmp18,
                  audiencePrefixedFriends: tmp27,
                  audienceFriends: tmp21,
                  channel: stateFromStores,
                };
                cResult[29] = stateFromStoresArray2.length;
                cResult[30] = tmp21;
                cResult[31] = tmp27;
                cResult[32] = stateFromStores;
                cResult[33] = stateFromStoresArray;
                cResult[34] = stateFromStoresArray1;
                cResult[35] = tmp18;
                cResult[36] = obj2;
                const tmpResult6 = tmp(573);
              }
              const items8 = [];
              HermesBuiltin.arraySpread(tmp24, HermesBuiltin.arraySpread(tmp21, 0));
              cResult[22] = tmp21;
              cResult[23] = tmp24;
              cResult[24] = items8;
              tmp27 = items8;
            }
            const differenceByResult = _modDef12.differenceBy(stateFromStoresArray2, stateFromStoresArray, "id");
            cResult[19] = stateFromStoresArray2;
            cResult[20] = stateFromStoresArray;
            cResult[21] = differenceByResult;
            tmp24 = differenceByResult;
          }
          const differenceByResult1 = _modDef12.differenceBy(stateFromStoresArray, stateFromStoresArray1, "id");
          cResult[16] = stateFromStoresArray;
          cResult[17] = stateFromStoresArray1;
          cResult[18] = differenceByResult1;
          tmp21 = differenceByResult1;
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_5.getChannel(closure_0.channel_id);
          }
        }
        cResult[15] = I;
      } else {
        class B {
          constructor() {
            return closure_5.getChannel(closure_0.channel_id);
          }
        }
      }
      const tmpResult5 = require("useStateFromStores");
      const items9 = [...stateFromStoresArray1];
      cResult[12] = stateFromStoresArray;
      cResult[13] = stateFromStoresArray1;
      cResult[14] = _modDef12.uniqBy(items9, I);
      const uniqByResult = _modDef12.uniqBy(items9, I);
    }
  : (channel_id) => {
      _require = channel_id;
      let items = [memo1];
      const items1 = [channel_id.channel_id];
      const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(
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
      const obj = require("useStateFromStores");
      const items2 = [memo1];
      const items3 = [channel_id.channel_id];
      stateFromStoresArray1 = require("useStateFromStores").useStateFromStoresArray(
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
      const obj2 = require("useStateFromStores");
      const items4 = [memo1];
      const items5 = [channel_id.channel_id];
      const stateFromStoresArray2 = require("useStateFromStores").useStateFromStoresArray(
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
        return _modDef12.uniqBy(items, (id) => id.id);
      }, items6);
      memo1 = stateFromStoresArray2.useMemo(
        () => _modDef12.differenceBy(stateFromStoresArray, stateFromStoresArray1, "id"),
        items7,
      );
      const items8 = [stateFromStoresArray, stateFromStoresArray2];
      const memo2 = stateFromStoresArray2.useMemo(
        () => _modDef12.differenceBy(stateFromStoresArray2, stateFromStoresArray, "id"),
        items8,
      );
      const items9 = [memo1, memo2];
      const memo3 = stateFromStoresArray2.useMemo(() => {
        const items = [...memo2];
        return items;
      }, items9);
      const obj3 = require("useStateFromStores");
      const items10 = [memo2];
      const items11 = [channel_id.channel_id];
      const obj4 = require("useStateFromStores");
      return {
        friends: stateFromStoresArray,
        speakers: stateFromStoresArray1,
        audienceCount: stateFromStoresArray2.length,
        users: memo,
        audiencePrefixedFriends: memo3,
        audienceFriends: memo1,
        channel: require("useStateFromStores").useStateFromStores(
          items10,
          () => ChannelStore.getChannel(channel_id.channel_id),
          items11,
        ),
      };
    };
