// === Module 9224: getAppChannelApplicationUnsupportedText ===

// Module 9224 (getAppChannelApplicationUnsupportedText)
import intl4 from "intl" /* 1126 */;
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9225 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = intl4.intl;
      return intl3.string(intl4.t.V4y5nG);
    } else if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = intl4.intl;
      return intl2.string(intl4.t["iUWcU/"]);
    } else {
      const intl = intl4.intl;
      return intl.string(intl4.t.GZa4J0);
    }
  }
};