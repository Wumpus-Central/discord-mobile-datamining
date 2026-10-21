// === Module 8977: guildEventDetailsParser ===

// Module 8977 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5687 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);