// === Module 9841: guildEventDetailsParser ===

// Module 9841 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4595 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);