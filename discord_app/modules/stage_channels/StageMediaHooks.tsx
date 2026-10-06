// discord_app/modules/stage_channels/StageMediaHooks.tsx
import StageChannelParticipants from "StageChannelParticipants.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const f90590 = (type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      const tmp4 = closure_5(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VoiceStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return VoiceStateStore.hasVideo(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const tmp9 = tmpResult.useStateFromStores(first, tmp7, tmp8) || tmp4;
      return tmp9;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [VoiceStateStore];
      const items1 = [arg0];
      const tmp = closure_5(arg0);
      const obj = require("get initialized");
      const tmp2 = obj.useStateFromStores(items, () => VoiceStateStore.hasVideo(closure_0), items1) || tmp;
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageChannelParticipantStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            closure_0,
            StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
          );
          return (
            null !=
            mutableParticipants.find(
              (type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.STREAM,
            )
          );
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [StageChannelParticipantStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            closure_0,
            StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
          );
          return (
            null !=
            mutableParticipants.find(
              (type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.STREAM,
            )
          );
        },
        items1,
      );
    };
let closure_5 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return GuildStore.getGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null != stateFromStores;
      if (tmp8) {
        let num4;
        if (stateFromStores != null) {
          num4 = stateFromStores.maxStageVideoChannelUsers;
        }
        if (num4 == null) {
          num4 = 0;
        }
        tmp8 = num4 > 0;
      }
      return tmp8;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
      let tmp2 = null != stateFromStores;
      if (tmp2) {
        let num;
        if (stateFromStores != null) {
          num = stateFromStores.maxStageVideoChannelUsers;
        }
        if (num == null) {
          num = 0;
        }
        tmp2 = num > 0;
      }
      return tmp2;
    };
function getStageHasStream(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  return null != mutableParticipants.find(f90590);
}
const result = size.fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = tmp2;
export const useStageHasStream = tmp3;
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  const hasVideoResult = null != mutableParticipants.find(f90590) || VoiceStateStore.hasVideo(id);
  return hasVideoResult;
};
export { getStageHasStream };
export const useIsStageVideoEnabled = tmp4;
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  const guild = GuildStore.getGuild(guild_id);
  let tmp2 = null != guild;
  if (tmp2) {
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
