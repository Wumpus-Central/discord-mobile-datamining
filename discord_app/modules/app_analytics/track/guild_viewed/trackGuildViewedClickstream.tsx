// === Module 16738: trackGuildViewedClickstream ===

// Module 16738 (trackGuildViewedClickstream)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import RouteParam from "RouteParam" /* 4399 */;
import isClickstreamEnabled from "isClickstreamEnabled" /* 7465 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx");

export default function trackGuildViewedClickstream(guildId) {
  guildId = guildId.guildId;
  let isPseudoGuildIdResult = null == guildId;
  if (!isPseudoGuildIdResult) {
    let obj = RouteParam;
    isPseudoGuildIdResult = obj.isPseudoGuildId(guildId);
  }
  if (!isPseudoGuildIdResult) {
    obj = { guild_id: null };
    obj[0] = guildId;
    isClickstreamEnabled.trackClickstream(AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, obj);
    const obj2 = isClickstreamEnabled;
  }
};