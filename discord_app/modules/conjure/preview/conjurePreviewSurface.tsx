// === Module 12368: conjurePreviewSurface ===

// Module 12368 (conjurePreviewSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import FramesStore from "FramesStore" /* 10612 */;

const require = globalThis.__r;

require = fn;
const FramesConstants = fn(10613);
({ isLaunched: c3, makeFrameId: closure_4 } = FramesConstants);
let c5 = "0";
const CONJURE_PREVIEW_SURFACE = { type: fn(8586).EmbeddedSurfaceType.APP_CHANNEL, channelId: "0" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

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
  if (APP_CHANNEL === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    return obj;
  }
  if (null == stateFromStores) {
    const obj2 = { type: APP_CHANNEL, channelId };
    obj = obj2;
  } else {
    obj = { type: APP_CHANNEL, channelId, guildId: stateFromStores };
  }
};
export const getConjureBuilderPreviewFrames = function getConjureBuilderPreviewFrames(previewAppId) {
  _require = previewAppId;
  const prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_FRAME_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let APP_CHANNEL = item;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    if (APP_CHANNEL !== EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      const obj = { type: APP_CHANNEL, channelId };
    }
    return FramesStore.getFrame(React4(closure_0, obj));
  });
  return mapped.filter((item) => null != item);
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  _require = prop;
  prop = require("conjurePreviewFrameSurfaces").CONJURE_PREVIEW_FRAME_SURFACE_TYPES;
  const mapped = prop.map((item) => {
    let APP_CHANNEL = item;
    if (item === undefined) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    if (APP_CHANNEL !== EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      const obj = { type: APP_CHANNEL, channelId };
    }
    return FramesStore.getFrame(React4(closure_0, obj));
  });
  const found = mapped.filter((item) => null != item);
  let found1 = found.find(closure_3);
  if (found1 == null) {
    found1 = found[0];
  }
  return found1;
};