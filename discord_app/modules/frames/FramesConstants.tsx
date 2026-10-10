// discord_app/modules/frames/FramesConstants.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import Constants from "../../Constants.tsx";
import EmbeddedSurfaceType from "../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
let obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN };
let obj3 = { MAIN: 0, [0]: "MAIN", INLINE: 1, [1]: "INLINE" };
const result = size.fileFinishedImporting("modules/frames/FramesConstants.tsx");

export const FrameLayoutModes = { FOCUSED: 0, [0]: "FOCUSED", PIP: 1, [1]: "PIP" };
export const MAIN_SURFACE = obj;
export const OVERLAY_SURFACE = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY };
export const FrameIntent = obj3;
export const getFrameIntentForSurface = function getFrameIntentForSurface(type) {
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    return obj3.MAIN;
  } else {
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL === type) {
            _modDef38(false, "A Frame cannot be launched at an INTERACTION_MODAL surface");
          }
        }
      }
    }
    return obj3.INLINE;
  }
};
export const makeFrameId = function makeFrameId(arg0, type) {
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    const _HermesInternal4 = HermesInternal;
    return "main:" + arg0;
  } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL === type) {
    const _HermesInternal3 = HermesInternal;
    return "app-channel:" + arg0 + ":" + type.channelId;
  } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL === type) {
    const _HermesInternal2 = HermesInternal;
    return "voice-channel:" + arg0 + ":" + type.channelId;
  } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY === type) {
    const _HermesInternal = HermesInternal;
    return "overlay:" + arg0;
  } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL === type) {
    _modDef38(false, "A Frame cannot be launched at an INTERACTION_MODAL surface");
  }
};
export const getFrameSurfaceForChannel = function getFrameSurfaceForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_APP === type) {
    obj3 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: null, guildId: null };
    ({ id: obj2.channelId, guild_id: obj2.guildId } = type);
    return obj3;
  } else if (tmp.GUILD_VOICE === type) {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: null, guildId: null };
    ({ id: obj.channelId, guild_id: obj.guildId } = type);
    return obj;
  } else {
    return null;
  }
};
export const isLaunched = function isLaunched(conjureBuilderPreviewFrame) {
  let state;
  if (conjureBuilderPreviewFrame != null) {
    state = conjureBuilderPreviewFrame.state;
  }
  return "launched" === state;
};
export const getFrameHostWindowKey = function getFrameHostWindowKey(state) {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  if ("launched" === state) {
    let hostWindowKey = state.data.hostWindowKey;
  } else {
    hostWindowKey = state.hostWindowKey;
  }
  return hostWindowKey;
};
export const asLaunched = function asLaunched(mainFrame) {
  let state;
  if (mainFrame != null) {
    state = mainFrame.state;
  }
  let tmp2 = null;
  if ("launched" === state) {
    tmp2 = mainFrame;
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
