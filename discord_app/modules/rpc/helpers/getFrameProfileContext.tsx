// === Module 16688: getFrameProfileContext ===

// Module 16688 (getFrameProfileContext)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6907 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11014 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getFrameProfileContext.tsx");

export default function getFrameProfileContext(surface) {
  surface = surface.surface;
  let guildId;
  if (surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY) {
    guildId = surface.guildId;
  }
  const tmp4 = getChannelIdForEmbeddedSurfaceDefault(surface);
  const obj = { guildId, channelId: null };
  let tmp5;
  if (tmp4 !== conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
    tmp5 = tmp4;
  }
  obj.channelId = tmp5;
  return obj;
};