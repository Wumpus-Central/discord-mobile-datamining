// === Module 16039: CheckpointOverlay ===

// Module 16039 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 16033 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 16040 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 16044 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 16046 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 16047 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 16048 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 16049 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 16050 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 16051 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 16052 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 16053 */;
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