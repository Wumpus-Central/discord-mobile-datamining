// discord_app/modules/guild_scheduled_events/guildEventDetailsParser.native.tsx
import MarkupUtils from "../markup/MarkupUtils.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
