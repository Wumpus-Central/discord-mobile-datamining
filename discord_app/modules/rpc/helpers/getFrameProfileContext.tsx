// discord_app/modules/rpc/helpers/getFrameProfileContext.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import getChannelIdForEmbeddedSurfaceDefault from "../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import conjurePreviewSurface from "../../conjure/preview/conjurePreviewSurface.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
