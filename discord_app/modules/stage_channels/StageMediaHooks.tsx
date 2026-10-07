// === Module 5581: StageMediaHooks ===

// Module 5581 (StageMediaHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 5589 */;
import GuildStore from "GuildStore" /* 2074 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5582 */;

const require = globalThis.__r;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelParticipantStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      return null != mutableParticipants.find((type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.STREAM);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.STREAM);
  }, items1);
});
let closure_5 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmp4 = closure_5(arg0);
  const tmpResult = tmp(504);
  return tmp(504).useStateFromStores(first, tmp7, tmp8) || tmp4;
}) : ((arg0) => {
  _require = arg0;
  const tmp = closure_5(arg0);
  const items = [VoiceStateStore];
  const items1 = [arg0];
  const obj = require("initialize");
  return require("initialize").useStateFromStores(items, () => VoiceStateStore.hasVideo(closure_0), items1) || tmp;
});
function getStageHasStream(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = tmp2;
export const useStageHasStream = tmp3;
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  let hasVideoResult = null != mutableParticipants.find((type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM);
  if (!hasVideoResult) {
    hasVideoResult = VoiceStateStore.hasVideo(id);
  }
  return hasVideoResult;
};
export { getStageHasStream };
export const useIsStageVideoEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
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
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
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
});
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  guild = GuildStore.getGuild(guild_id);
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