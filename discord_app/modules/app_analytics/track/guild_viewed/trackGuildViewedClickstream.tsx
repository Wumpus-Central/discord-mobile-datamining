// === Module 16738: trackGuildViewedClickstream ===

// Module 16738 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1074 */;
import RouteUtils from "RouteUtils" /* 4399 */;
import Clickstream from "Clickstream" /* 7465 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx");

export default function trackGuildViewedClickstream(guildId) {
  guildId = guildId.guildId;
  let isPseudoGuildIdResult = null == guildId;
  if (!isPseudoGuildIdResult) {
    let obj = RouteUtils;
    isPseudoGuildIdResult = obj.isPseudoGuildId(guildId);
  }
  if (!isPseudoGuildIdResult) {
    obj = { guild_id: guildId };
    Clickstream.trackClickstream(AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, obj);
  }
};