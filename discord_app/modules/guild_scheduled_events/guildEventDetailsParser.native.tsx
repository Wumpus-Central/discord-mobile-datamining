// === Module 9661: guildEventDetailsParser ===

// Module 9661 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4435 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;