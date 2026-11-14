// discord_app/modules/guild_action_sheet/native/GuildActionSheetAnalyticsUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetAnalyticsUtils.tsx");

export function trackGuildActionSheetOptionPressed(arg0) {
  ({ guildId, option, canAccessSettings, gameId } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_ACTION_SHEET_OPTION_PRESSED, {
    guild_id: guildId,
    action_sheet_option: option,
    can_access_settings: canAccessSettings,
    game_id: gameId,
  });
}
