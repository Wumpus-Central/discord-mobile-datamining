// === Module 9922: guildEventDetailsParser ===

// Module 9922 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4630 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);