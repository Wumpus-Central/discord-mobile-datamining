// === Module 6847: FramesConstants ===

// Module 6847 (FramesConstants)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
let obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN };
let obj3 = { MAIN: 0, [0]: "MAIN", INLINE: 1, [1]: "INLINE" };
const result = size.fileFinishedImporting("modules/frames/FramesConstants.tsx");

export const FrameLayoutModes = { FOCUSED: 0, [0]: "FOCUSED", PIP: 1, [1]: "PIP" };
export const MAIN_SURFACE = obj;
export const OVERLAY_SURFACE = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY };
export const FrameIntent = obj3;
export function getFrameIntentForSurface(type) {
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
}
export function makeFrameId(arg0, type) {
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
}
export function getFrameSurfaceForChannel(type) {
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
}
export function isLaunched(conjureBuilderPreviewFrame) {
  let state;
  if (conjureBuilderPreviewFrame != null) {
    state = conjureBuilderPreviewFrame.state;
  }
  return "launched" === state;
}
export function getFrameHostWindowKey(state) {
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
}
export function getFrameLaunchParams(state) {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  if ("launched" === state) {
    let launch = state.data.launch;
  } else {
    launch = state.launch;
  }
  return launch;
}
export function getFrameLaunchChannelId(surface) {
  let type;
  if (surface != null) {
    type = surface.surface.type;
  }
  let channelId;
  if (type === EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN) {
    channelId = surface.surface.channelId;
  }
  return channelId;
}
export function asLaunched(frame) {
  let state;
  if (frame != null) {
    state = frame.state;
  }
  let tmp2 = null;
  if ("launched" === state) {
    tmp2 = frame;
  }
  return tmp2;
}
export function getPipOrientationLockStateForFrame(data) {
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
}