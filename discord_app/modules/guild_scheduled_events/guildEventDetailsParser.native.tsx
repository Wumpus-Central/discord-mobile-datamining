// === Module 8875: guildEventDetailsParser ===

// Module 8875 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5141 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);