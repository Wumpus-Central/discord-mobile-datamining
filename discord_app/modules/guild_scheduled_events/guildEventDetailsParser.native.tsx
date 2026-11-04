// === Module 9231: guildEventDetailsParser ===

// Module 9231 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5888 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);