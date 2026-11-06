// === Module 19546: useVoiceChannelAppSurface ===

// Module 19546 (useVoiceChannelAppSurface)
import voiceChannelAppSession from "voiceChannelAppSession" /* 13389 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 18975 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 19196 */;
import FramesStore from "FramesStore" /* 6926 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 16625 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppSurface.tsx");

export function useVoiceChannelAppAvailable(channel, inCall) {
  let tmp = inCall;
  useVoiceChannelApp;
  if (inCall) {
    tmp = null != tmp3;
  }
  return tmp;
}
export function useVoiceChannelAppOpen(channel, inCall) {
  _require = channel;
  let stateFromStores = inCall;
  const voiceChannelApplicationId = require("useVoiceChannelApp").useVoiceChannelApplicationId(channel);
  let obj = require("useVoiceChannelApp");
  items = [FramesStore];
  const items1 = [channel.id, voiceChannelApplicationId];
  if (inCall) {
    stateFromStores = obj2.useStateFromStores(items, () => {
      const obj = voiceChannelAppSession;
      return obj.hasVoiceChannelAppSession(FramesStore.getFramesForSurface(voiceChannelAppSession.voiceChannelAppSurface(id.id)), voiceChannelApplicationId);
    }, items1);
  }
  return stateFromStores;
}
export function useVoiceChannelAppVisible(channel) {
  _require = channel;
  const voiceChannelApplicationId = require("useVoiceChannelApp").useVoiceChannelApplicationId(channel);
  const obj = require("useVoiceChannelApp");
  items = [VoiceChannelAppStore];
  const items1 = [channel.id, voiceChannelApplicationId];
  return require("initialize").useStateFromStores(items, () => VoiceChannelAppStore.isAppVisible(id.id, null != voiceChannelApplicationId), items1);
}
export function useCurrentVoiceChannelApplicationId(channel, arg1) {
  let voiceChannelApplicationId = null;
  if (arg1) {
    voiceChannelApplicationId = obj.useVoiceChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  return voiceChannelApplicationId;
}