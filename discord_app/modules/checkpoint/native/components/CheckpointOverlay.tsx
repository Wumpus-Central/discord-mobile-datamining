// === Module 15968: CheckpointOverlay ===

// Module 15968 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15962 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15969 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15973 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15975 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15976 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15977 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15978 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15979 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15980 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15981 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15982 */;
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