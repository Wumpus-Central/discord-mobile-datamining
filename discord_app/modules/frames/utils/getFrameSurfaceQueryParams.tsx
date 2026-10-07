// discord_app/modules/frames/utils/getFrameSurfaceQueryParams.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaceQueryParams.tsx");

export default function getFrameSurfaceQueryParams(type) {
  const StringResult = String(type.type);
  type = type.type;
  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
    const obj2 = { surface: StringResult };
    return obj2;
  } else {
    if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
        const obj = { surface: StringResult };
        return obj;
      }
    }
    const obj3 = { surface: StringResult };
    if (null != type.channelId) {
      obj3.channel_id = type.channelId;
    }
    if (null != type.guildId) {
      obj3.guild_id = type.guildId;
    }
    return obj3;
  }
}
