// === Module 9701: guildEventDetailsParser ===

// Module 9701 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4438 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;