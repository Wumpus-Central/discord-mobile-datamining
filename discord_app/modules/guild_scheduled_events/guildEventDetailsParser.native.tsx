// === Module 8887: guildEventDetailsParser ===

// Module 8887 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 6807 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;