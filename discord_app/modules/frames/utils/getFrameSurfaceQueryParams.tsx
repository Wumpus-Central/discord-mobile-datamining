// discord_app/modules/frames/utils/getFrameSurfaceQueryParams.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  const surface = String(type.type);
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL === type) {
            _modDef38(false, "A Frame cannot be launched at an INTERACTION_MODAL surface");
            const obj2 = { surface };
            return obj2;
          } else {
            const obj = { surface };
            return obj;
          }
        }
      }
      const obj3 = { surface, channel_id: type.channelId };
      if (null != type.guildId) {
        obj3.guild_id = type.guildId;
      }
      return obj3;
    }
  }
  return { surface };
}
