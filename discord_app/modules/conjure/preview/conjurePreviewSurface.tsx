// discord_app/modules/conjure/preview/conjurePreviewSurface.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import FramesConstants from "../../frames/FramesConstants.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const makeFrameId = FramesConstants.makeFrameId;
const CONJURE_PREVIEW_SURFACE = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL };
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewSurface.tsx");

export { CONJURE_PREVIEW_SURFACE };
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
  let obj;
  if (null != stateFromStores) {
    obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, guildId: stateFromStores };
  }
  return obj;
};
export const getConjureBuilderPreviewFrame = function getConjureBuilderPreviewFrame(prop) {
  return FramesStore.getFrame(makeFrameId(prop, obj));
};
