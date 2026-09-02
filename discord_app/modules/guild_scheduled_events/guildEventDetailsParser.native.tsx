// === Module 9762: guildEventDetailsParser ===

// Module 9762 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4468 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;