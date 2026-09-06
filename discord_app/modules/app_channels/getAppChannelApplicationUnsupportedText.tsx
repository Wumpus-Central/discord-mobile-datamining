// discord_app/modules/app_channels/getAppChannelApplicationUnsupportedText.tsx
import set from "../../../_runtime/00002_set.js";
import GuildEmbeddedApplicationUnsupportedReason from "../../../discord_common/js/shared/shared-constants/GuildEmbeddedApplicationUnsupportedReason.tsx";

const result = set.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1114).intl;
      return intl3.string(tmp(1114).t.V4y5nG);
    } else if (tmp(9748).GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1114).intl;
      return intl2.string(tmp(1114).t["iUWcU/"]);
    } else {
      const intl = tmp(1114).intl;
      return intl.string(tmp(1114).t.GZa4J0);
    }
  }
}
