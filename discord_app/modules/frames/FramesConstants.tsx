// discord_app/modules/frames/FramesConstants.tsx
let obj = { MAIN: 0, [0]: "MAIN", APP_CHANNEL: 1, [1]: "APP_CHANNEL" };
obj = { type: obj.MAIN };
obj = { MAIN: 0, [0]: "MAIN", INLINE: 1, [1]: "INLINE" };
const result = require("set").fileFinishedImporting("modules/frames/FramesConstants.tsx");

export const FrameLayoutModes = { FOCUSED: 0, [0]: "FOCUSED", PIP: 1, [1]: "PIP" };
export const EmbeddedSurfaceType = obj;
export const MAIN_SURFACE = obj;
export const FrameIntent = obj;
export const getFrameIntentForSurface = function getFrameIntentForSurface(type) {
  type = type.type;
  return obj.MAIN;
};
export const makeFrameId = function makeFrameId(arg0, type) {
  type = type.type;
  if (obj.MAIN === type) {
    const _HermesInternal2 = HermesInternal;
    return "main:" + arg0;
  } else if (tmp.APP_CHANNEL === type) {
    const _HermesInternal = HermesInternal;
    return "app-channel:" + arg0 + ":" + type.channelId;
  }
};
export const getChannelIdForSurface = function getChannelIdForSurface(type) {
  if (null != type) {
    type = type.type;
    if (obj.MAIN !== type) {
      if (tmp.APP_CHANNEL === type) {
        return type.channelId;
      }
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