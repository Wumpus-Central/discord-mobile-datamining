// === Module 16823: trackGuildViewedClickstream ===

// Module 16823 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1074 */;
import RouteUtils from "RouteUtils" /* 4446 */;
import Clickstream from "Clickstream" /* 7538 */;
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