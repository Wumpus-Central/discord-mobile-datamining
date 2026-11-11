// discord_app/modules/checkpoint/native/components/CheckpointOverlay.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3237 from "../../Checkpoint.messages.js";
import _modDef3269 from "../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import CheckpointNavigation from "../../CheckpointNavigation.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointUnavailableScreenDefault from "screens/CheckpointUnavailableScreen.tsx";
import EmojiSlightlySmilingFaceIcon from "../../../../design/components/Icon/native/redesign/generated/EmojiSlightlySmilingFaceIcon.tsx";
import CheckpointWelcomeScreenDefault from "screens/CheckpointWelcomeScreen.tsx";
import CheckpointIntroScreenDefault from "screens/CheckpointIntroScreen.tsx";
import CheckpointStatsIntroScreenDefault from "screens/stats/CheckpointStatsIntroScreen.tsx";
import CheckpointVoiceStatsScreenDefault from "screens/stats/CheckpointVoiceStatsScreen.tsx";
import CheckpointMessagesStatsScreenDefault from "screens/stats/CheckpointMessagesStatsScreen.tsx";
import CheckpointServersStatsScreenDefault from "screens/stats/CheckpointServersStatsScreen.tsx";
import CheckpointTopServerStatsScreenDefault from "screens/stats/CheckpointTopServerStatsScreen.tsx";
import CheckpointEmojiStatsScreenDefault from "screens/stats/CheckpointEmojiStatsScreen.tsx";
import CheckpointGamesStatsScreenDefault from "screens/stats/CheckpointGamesStatsScreen.tsx";
import CheckpointGameTimeStatsScreenDefault from "screens/stats/CheckpointGameTimeStatsScreen.tsx";
import CheckpointFriendsStatsScreenDefault from "screens/stats/CheckpointFriendsStatsScreen.tsx";
import CheckpointSummaryStatsScreenDefault from "screens/stats/CheckpointSummaryStatsScreen.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  ({ onNextStep, onPreviousStep } = route);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    return jsx(CheckpointIntroScreenDefault, {});
  } else {
    const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.CHARACTER_UNAVAILABLE === statsScreen) {
      const obj2 = { message: null };
      const intl11 = util.intl;
      obj2.message = intl11.string(_modDef3269.vcRnnQ);
      return jsx(CheckpointUnavailableScreenDefault, { message: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      const obj3 = { icon: null, title: null, description: null };
      const obj4 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj3.icon = jsx(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl9 = util.intl;
      obj3.title = intl9.string(_modDef3269["/7XYsa"]);
      const intl10 = util.intl;
      obj3.description = intl10.string(_modDef3269["X8/G/o"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const obj5 = { icon: null, title: null, description: null };
      const obj6 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj5.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl7 = util.intl;
      obj5.title = intl7.string(_modDef3269["2BuyVC"]);
      const intl8 = util.intl;
      obj5.description = intl8.string(_modDef3269["kF+Y3a"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const obj7 = { icon: null, title: null, description: null };
      const obj8 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj7.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl5 = util.intl;
      obj7.title = intl5.string(_modDef3237.F0fkrh);
      const intl6 = util.intl;
      obj7.description = intl6.string(_modDef3269.Xg82Gy);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      const obj9 = { icon: null, title: null, description: null };
      const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj9.icon = jsx(EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, {
        size: "xs",
        color: CHECKPOINT_PRIMARY,
      });
      const intl3 = util.intl;
      obj9.title = intl3.string(_modDef3269.ZTDCIv);
      const intl4 = util.intl;
      obj9.description = intl4.string(_modDef3269.y8Sr8J);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      const obj11 = { icon: null, title: null, description: null };
      const obj12 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj11.icon = jsx(GameControllerIcon.GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl = util.intl;
      obj11.title = intl.string(_modDef3269.HM2fjf);
      const intl2 = util.intl;
      obj11.description = intl2.string(_modDef3269.LQiFqJ);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            return jsx(CheckpointSummaryStatsScreenDefault, {});
          } else {
            return null;
          }
        }
      }
      const obj = { route, onNextStep, onPreviousStep };
      return jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
    }
    const tmpResult = CheckpointNavigation;
  }
}
