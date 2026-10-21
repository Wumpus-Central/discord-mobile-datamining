// === Module 18381: useVoiceChannelAppSurface ===

// Module 18381 (useVoiceChannelAppSurface)
import voiceChannelAppSession from "voiceChannelAppSession" /* 13752 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 17883 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 18095 */;
import FramesStore from "FramesStore" /* 6754 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 17876 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelAppAvailable(arg0, arg1) {
  let tmp = arg1;
  useVoiceChannelApp;
  if (arg1) {
    tmp = null != tmp3;
  }
  return tmp;
}) : (function useVoiceChannelAppAvailable(arg0, arg1) {
  let tmp = arg1;
  useVoiceChannelApp;
  if (arg1) {
    tmp = null != tmp3;
  }
  return tmp;
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelAppOpen(id, arg1) {
  _require = id;
  const cResult = require("c").c(5);
  let obj = require("c");
  const voiceChannelApplicationId = require("useVoiceChannelApp").useVoiceChannelApplicationId(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === voiceChannelApplicationId) {
    if (cResult[2] === id.id) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    let stateFromStores = arg1;
    if (arg1) {
      stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
    return stateFromStores;
  }
  const fn = function p() {
    const obj = voiceChannelAppSession;
    return obj.hasVoiceChannelAppSession(FramesStore.getFramesForSurface(voiceChannelAppSession.voiceChannelAppSurface(id.id)), voiceChannelApplicationId);
  };
  const items1 = [id.id, voiceChannelApplicationId];
  cResult[1] = voiceChannelApplicationId;
  cResult[2] = id.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj2 = require("useVoiceChannelApp");
}) : (function useVoiceChannelAppOpen(id, arg1) {
  _require = id;
  let stateFromStores = arg1;
  const voiceChannelApplicationId = require("useVoiceChannelApp").useVoiceChannelApplicationId(id);
  let obj = require("useVoiceChannelApp");
  const items = [FramesStore];
  const items1 = [id.id, voiceChannelApplicationId];
  if (arg1) {
    stateFromStores = obj2.useStateFromStores(items, () => {
      const obj = voiceChannelAppSession;
      return obj.hasVoiceChannelAppSession(FramesStore.getFramesForSurface(voiceChannelAppSession.voiceChannelAppSurface(id.id)), voiceChannelApplicationId);
    }, items1);
  }
  return stateFromStores;
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelAppVisible(id) {
  _require = id;
  const cResult = require("c").c(5);
  const obj = require("c");
  const tmp = _require;
  const voiceChannelApplicationId = require("useVoiceChannelApp").useVoiceChannelApplicationId(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceChannelAppStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === voiceChannelApplicationId) {
    if (cResult[2] === id.id) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function c() {
    return VoiceChannelAppStore.isAppVisible(id.id, null != voiceChannelApplicationId);
  };
  const items1 = [id.id, voiceChannelApplicationId];
  cResult[1] = voiceChannelApplicationId;
  cResult[2] = id.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj2 = require("useVoiceChannelApp");
}) : (function useVoiceChannelAppVisible(id) {
  _require = id;
  const voiceChannelApplicationId = require("useVoiceChannelApp").useVoiceChannelApplicationId(id);
  const obj = require("useVoiceChannelApp");
  const items = [VoiceChannelAppStore];
  const items1 = [id.id, voiceChannelApplicationId];
  return require("initialize").useStateFromStores(items, () => VoiceChannelAppStore.isAppVisible(id.id, null != voiceChannelApplicationId), items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppSurface.tsx");

export const useVoiceChannelAppAvailable = tmp2;
export const useVoiceChannelAppOpen = tmp3;
export const useVoiceChannelAppVisible = tmp4;
export const useCurrentVoiceChannelApplicationId = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentVoiceChannelApplicationId(application_id, arg1) {
  let voiceChannelApplicationId = null;
  if (arg1) {
    voiceChannelApplicationId = obj.useVoiceChannelApplicationId(application_id);
  }
  useChannelAppFrameTeardownDefault(application_id);
  return voiceChannelApplicationId;
}) : (function useCurrentVoiceChannelApplicationId(application_id, arg1) {
  let voiceChannelApplicationId = null;
  if (arg1) {
    voiceChannelApplicationId = obj.useVoiceChannelApplicationId(application_id);
  }
  useChannelAppFrameTeardownDefault(application_id);
  return voiceChannelApplicationId;
});