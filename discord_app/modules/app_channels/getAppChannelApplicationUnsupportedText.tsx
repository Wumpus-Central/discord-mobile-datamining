// === Module 9747: getAppChannelApplicationUnsupportedText ===

// Module 9747 (getAppChannelApplicationUnsupportedText)
import util from "util" /* 1114 */;
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9748 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = util.intl;
      return intl3.string(util.t.V4y5nG);
    } else if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = util.intl;
      return intl2.string(util.t["iUWcU/"]);
    } else {
      const intl = util.intl;
      return intl.string(util.t.GZa4J0);
    }
  }
};