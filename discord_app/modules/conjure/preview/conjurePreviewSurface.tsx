// discord_app/modules/conjure/preview/conjurePreviewSurface.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces.tsx";
import FramesStore from "../../frames/FramesStore.tsx";

const require = globalThis.__r;

require = fn;
const FramesConstants = fn(10802);
({ isLaunched: c3, makeFrameId: closure_4 } = FramesConstants);
let c5 = "0";
const CONJURE_PREVIEW_SURFACE = { type: fn(8610).EmbeddedSurfaceType.APP_CHANNEL, channelId: "0" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

export const CONJURE_UNKNOWN_CHANNEL = "0";
export { CONJURE_PREVIEW_SURFACE };
export const isConjurePreviewSurface = function isConjurePreviewSurface(surface) {
  let tmp3 = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  if (!tmp3) {
    tmp3 = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
  }
  if (tmp3) {
    tmp3 = surface.channelId === c5;
  }
  return tmp3;
};
export const getConjurePreviewGuildId = function getConjurePreviewGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let guild_id;
  if ("guild" === install_scope) {
    guild_id = project.guild_id;
  }
  return guild_id;
};
export const getConjurePreviewSurface = function getConjurePreviewSurface(stateFromStores) {
  let APP_CHANNEL = frameSurface;
  if (frameSurface === undefined) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  const obj = conjurePreviewFrameSurfaces;
  const result = obj.previewFrameLaunchType(APP_CHANNEL);
  if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    if (null == stateFromStores) {
      let obj3 = obj;
    }
    return obj3;
  }
  if (null == stateFromStores) {
    const obj2 = { type: result, channelId };
    obj3 = obj2;
  } else {
    obj3 = { type: result, channelId, guildId: stateFromStores };
  }
};
export const getConjureBuilderPreviewFrames = function getConjureBuilderPreviewFrames(previewAppId) {
  _require = previewAppId;
  const prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let APP_CHANNEL = item;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    const obj = conjurePreviewFrameSurfaces;
    const result = obj.previewFrameLaunchType(APP_CHANNEL);
    if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      let obj2 = obj;
    } else {
      obj2 = { type: result, channelId };
    }
    return FramesStore.getFrame(React4(closure_0, obj2));
  });
  return mapped.filter((item) => null != item);
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  _require = prop;
  prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let APP_CHANNEL = item;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    const obj = conjurePreviewFrameSurfaces;
    const result = obj.previewFrameLaunchType(APP_CHANNEL);
    if (result === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      let obj2 = obj;
    } else {
      obj2 = { type: result, channelId };
    }
    return FramesStore.getFrame(React4(closure_0, obj2));
  });
  const found = mapped.filter((item) => null != item);
  let found1 = found.find(closure_3);
  if (found1 == null) {
    found1 = found[0];
  }
  return found1;
};
