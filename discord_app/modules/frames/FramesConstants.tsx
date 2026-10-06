// === Module 8738: FramesConstants ===

// Module 8738 (FramesConstants)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
let obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN };
const obj2 = { MAIN: 0, [0]: "MAIN", INLINE: 1, [1]: "INLINE" };
const result = size.fileFinishedImporting("modules/frames/FramesConstants.tsx");

export const FrameLayoutModes = { FOCUSED: 0, [0]: "FOCUSED", PIP: 1, [1]: "PIP" };
export const MAIN_SURFACE = obj;
export const FrameIntent = obj2;
export const getFrameIntentForSurface = function getFrameIntentForSurface(type) {
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    return obj2.MAIN;
  } else {
    return obj2.INLINE;
  }
};
export const makeFrameId = function makeFrameId(prop, type) {
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    const _HermesInternal4 = HermesInternal;
    return "main:" + prop;
  } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL === type) {
    let combined;
    if (null != type.channelId) {
      const _HermesInternal3 = HermesInternal;
      combined = "app-channel:" + prop + ":" + type.channelId;
    } else {
      const _HermesInternal2 = HermesInternal;
      combined = "app-channel:" + prop;
    }
    return combined;
  } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL === type) {
    const _HermesInternal = HermesInternal;
    return "voice-channel:" + prop + ":" + type.channelId;
  }
};
export const getFrameSurfaceForChannel = function getFrameSurfaceForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_APP === type) {
    ({ id: obj2.channelId, guild_id: obj2.guildId } = type);
    const obj3 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: null, guildId: null };
    return obj3;
  } else if (tmp.GUILD_VOICE === type) {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: null, guildId: null };
    ({ id: obj.channelId, guild_id: obj.guildId } = type);
    return obj;
  } else {
    return null;
  }
};
export const getChannelIdForSurface = function getChannelIdForSurface(type) {
  if (null != type) {
    type = type.type;
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
      return type.channelId;
    }
  }
};
export const isLaunched = function isLaunched(conjureBuilderPreviewFrame) {
  let state;
  if (conjureBuilderPreviewFrame != null) {
    state = conjureBuilderPreviewFrame.state;
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