// discord_app/modules/guild_scheduled_events/guildEventDetailsParser.native.tsx
import MarkupUtils from "../markup/MarkupUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
