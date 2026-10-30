// discord_app/modules/checkpoint/native/components/CheckpointOverlay.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3059 from "../../Checkpoint.messages.js";
import _modDef3091 from "../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import CheckpointNavigation from "../../CheckpointNavigation.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointWelcomeScreenDefault from "screens/CheckpointWelcomeScreen.tsx";
import CheckpointIntroScreenDefault from "screens/CheckpointIntroScreen.tsx";
import CheckpointStatsIntroScreenDefault from "screens/stats/CheckpointStatsIntroScreen.tsx";
import CheckpointVoiceStatsScreenDefault from "screens/stats/CheckpointVoiceStatsScreen.tsx";
import CheckpointMessagesStatsScreenDefault from "screens/stats/CheckpointMessagesStatsScreen.tsx";
import CheckpointServersStatsScreenDefault from "screens/stats/CheckpointServersStatsScreen.tsx";
import CheckpointTopServerStatsScreenDefault from "screens/stats/CheckpointTopServerStatsScreen.tsx";
import EmojiSlightlySmilingFaceIcon from "../../../../design/components/Icon/native/redesign/generated/EmojiSlightlySmilingFaceIcon.tsx";
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
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      const obj2 = { icon: null, title: null, description: null };
      const obj3 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj2.icon = jsx(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl9 = util.intl;
      obj2.title = intl9.string(_modDef3091["/7XYsa"]);
      const intl10 = util.intl;
      obj2.description = intl10.string(_modDef3091["X8/G/o"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const obj4 = { icon: null, title: null, description: null };
      const obj5 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj4.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl7 = util.intl;
      obj4.title = intl7.string(_modDef3091["2BuyVC"]);
      const intl8 = util.intl;
      obj4.description = intl8.string(_modDef3091["kF+Y3a"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const obj6 = { icon: null, title: null, description: null };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj6.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl5 = util.intl;
      obj6.title = intl5.string(_modDef3059.F0fkrh);
      const intl6 = util.intl;
      obj6.description = intl6.string(_modDef3091.Xg82Gy);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      const obj8 = { icon: null, title: null, description: null };
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj8.icon = jsx(EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, {
        size: "xs",
        color: CHECKPOINT_PRIMARY,
      });
      const intl3 = util.intl;
      obj8.title = intl3.string(_modDef3091.ZTDCIv);
      const intl4 = util.intl;
      obj8.description = intl4.string(_modDef3091.y8Sr8J);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      const obj10 = { icon: null, title: null, description: null };
      const obj11 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj10.icon = jsx(GameControllerIcon.GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl = util.intl;
      obj10.title = intl.string(_modDef3091.HM2fjf);
      const intl2 = util.intl;
      obj10.description = intl2.string(_modDef3091.LQiFqJ);
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
