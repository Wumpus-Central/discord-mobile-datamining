// discord_app/modules/checkpoint/native/components/CheckpointOverlay.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import CheckpointNavigation from "../../CheckpointNavigation.tsx";
import CheckpointWelcomeScreenDefault from "screens/CheckpointWelcomeScreen.tsx";
import CheckpointVoiceStatsScreenDefault from "screens/stats/CheckpointVoiceStatsScreen.tsx";
import CheckpointMessagesStatsScreenDefault from "screens/stats/CheckpointMessagesStatsScreen.tsx";
import CheckpointServersStatsScreenDefault from "screens/stats/CheckpointServersStatsScreen.tsx";
import CheckpointEmojiStatsScreenDefault from "screens/stats/CheckpointEmojiStatsScreen.tsx";
import CheckpointGamesStatsScreenDefault from "screens/stats/CheckpointGamesStatsScreen.tsx";
import CheckpointGameTimeStatsScreenDefault from "screens/stats/CheckpointGameTimeStatsScreen.tsx";
import CheckpointSquadStatsScreenDefault from "screens/stats/CheckpointSquadStatsScreen.tsx";
import CheckpointSidekickStatsScreenDefault from "screens/stats/CheckpointSidekickStatsScreen.tsx";
import CheckpointSummaryStatsScreenDefault from "screens/stats/CheckpointSummaryStatsScreen.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
