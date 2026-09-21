// === Module 9314: FramesConstants ===

// Module 9314 (FramesConstants)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const EmbeddedSurfaceType = { MAIN: 0, [0]: "MAIN", APP_CHANNEL: 1, [1]: "APP_CHANNEL", VOICE_CHANNEL: 2, [2]: "VOICE_CHANNEL" };
let obj3 = { MAIN: 0, [0]: "MAIN", INLINE: 1, [1]: "INLINE" };
const result = size.fileFinishedImporting("modules/frames/FramesConstants.tsx");

export const FrameLayoutModes = { FOCUSED: 0, [0]: "FOCUSED", PIP: 1, [1]: "PIP" };
export { EmbeddedSurfaceType };
export const MAIN_SURFACE = { type: EmbeddedSurfaceType.MAIN };
export const FrameIntent = obj3;
export const getFrameIntentForSurface = function getFrameIntentForSurface(type) {
  type = type.type;
  if (obj.MAIN === type) {
    return obj3.MAIN;
  } else {
    return obj3.INLINE;
  }
};
export const makeFrameId = function makeFrameId(arg0, type) {
  type = type.type;
  if (obj.MAIN === type) {
    const _HermesInternal3 = HermesInternal;
    return "main:" + arg0;
  } else if (obj.APP_CHANNEL === type) {
    const _HermesInternal2 = HermesInternal;
    return "app-channel:" + arg0 + ":" + type.channelId;
  } else if (obj.VOICE_CHANNEL === type) {
    const _HermesInternal = HermesInternal;
    return "voice-channel:" + arg0 + ":" + type.channelId;
  }
};
export const getFrameSurfaceForChannel = function getFrameSurfaceForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_APP === type) {
    obj3 = { type: obj.APP_CHANNEL, channelId: null, guildId: null };
    ({ id: obj2.channelId, guild_id: obj2.guildId } = type);
    return obj3;
  } else if (tmp.GUILD_VOICE === type) {
    obj = { type: null, channelId: null, guildId: null };
    obj.type = obj.VOICE_CHANNEL;
    ({ id: obj.channelId, guild_id: obj.guildId } = type);
    return obj;
  } else {
    return null;
  }
};
export const getChannelIdForSurface = function getChannelIdForSurface(type) {
  if (null != type) {
    type = type.type;
    if (obj.MAIN !== type) {
      return type.channelId;
    }
  }
};
export const isLaunched = function isLaunched(mainFrame) {
  let state;
  if (mainFrame != null) {
    state = mainFrame.state;
  }
  return "launched" === state;
};
export const asLaunched = function asLaunched(frameByIframeId) {
  let state;
  if (frameByIframeId != null) {
    state = frameByIframeId.state;
  }
  let tmp2 = null;
  if ("launched" === state) {
    tmp2 = frameByIframeId;
  }
  return tmp2;
};
export const getPipOrientationLockStateForFrame = function getPipOrientationLockStateForFrame(data) {
  data = undefined;
  if (data != null) {
    data = data.data;
  }
  let pipOrientationLock;
  if (data != null) {
    pipOrientationLock = data.pipOrientationLock;
  }
  if (pipOrientationLock == null) {
    let orientationLock;
    if (data != null) {
      orientationLock = data.orientationLock;
    }
    pipOrientationLock = orientationLock;
  }
  return pipOrientationLock;
};