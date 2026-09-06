// discord_app/modules/app_channels/getAppChannelApplicationUnsupportedText.tsx
import util from "../../intl/index.native.tsx";
import GuildEmbeddedApplicationUnsupportedReason from "../../../discord_common/js/shared/shared-constants/GuildEmbeddedApplicationUnsupportedReason.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = util.intl;
      return intl3.string(util.t.V4y5nG);
    } else if (
      GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED ===
      reason
    ) {
      const intl2 = util.intl;
      return intl2.string(util.t["iUWcU/"]);
    } else {
      const intl = util.intl;
      return intl.string(util.t.GZa4J0);
    }
  }
}
