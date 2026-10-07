// === Module 8999: conjurePreviewSurface ===

// Module 8999 (conjurePreviewSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import FramesStore from "FramesStore" /* 9000 */;

require = fn;
const makeFrameId = fn(8738).makeFrameId;
const CONJURE_PREVIEW_SURFACE = { type: fn(8547).EmbeddedSurfaceType.APP_CHANNEL };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

export { CONJURE_PREVIEW_SURFACE };
export const getConjurePreviewGuildId = function getConjurePreviewGuildId(dependencyMap) {
  let install_scope;
  if (dependencyMap != null) {
    install_scope = dependencyMap.install_scope;
  }
  let guild_id;
  if ("guild" === install_scope) {
    guild_id = dependencyMap.guild_id;
  }
  return guild_id;
};
export const getConjurePreviewSurface = function getConjurePreviewSurface(stateFromStores) {
  if (null != stateFromStores) {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, guildId: stateFromStores };
  }
  return obj;
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  return FramesStore.getFrame(makeFrameId(prop, obj));
};