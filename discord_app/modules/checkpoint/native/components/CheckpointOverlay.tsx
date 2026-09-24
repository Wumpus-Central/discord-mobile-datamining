// === Module 16058: CheckpointOverlay ===

// Module 16058 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 16048 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 16059 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 16064 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 16066 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 16067 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 16068 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 16069 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 16070 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 16071 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 16072 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 16073 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = CheckpointNavigation;
  }
};