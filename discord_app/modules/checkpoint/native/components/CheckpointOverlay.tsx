// === Module 13861: CheckpointOverlay ===

// Module 13861 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef3187 from "module_3187" /* 3187 */;
import _modDef3219 from "module_3219" /* 3219 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6570 */;
import ChatIcon from "ChatIcon" /* 8784 */;
import GameControllerIcon from "GameControllerIcon" /* 9877 */;
import ServerIcon from "ServerIcon" /* 9908 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12168 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 13665 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13862 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 13867 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13873 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13874 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13880 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13883 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13888 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13889 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13894 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13895 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13898 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13902 */;
import size from "module_2" /* 2 */;

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
      obj2.title = intl9.string(_modDef3219["/7XYsa"]);
      const intl10 = util.intl;
      obj2.description = intl10.string(_modDef3219["X8/G/o"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const obj4 = { icon: null, title: null, description: null };
      const obj5 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj4.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl7 = util.intl;
      obj4.title = intl7.string(_modDef3219["2BuyVC"]);
      const intl8 = util.intl;
      obj4.description = intl8.string(_modDef3219["kF+Y3a"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const obj6 = { icon: null, title: null, description: null };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj6.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl5 = util.intl;
      obj6.title = intl5.string(_modDef3187.F0fkrh);
      const intl6 = util.intl;
      obj6.description = intl6.string(_modDef3219.Xg82Gy);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      const obj8 = { icon: null, title: null, description: null };
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj8.icon = jsx(EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl3 = util.intl;
      obj8.title = intl3.string(_modDef3219.ZTDCIv);
      const intl4 = util.intl;
      obj8.description = intl4.string(_modDef3219.y8Sr8J);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      const obj10 = { icon: null, title: null, description: null };
      const obj11 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj10.icon = jsx(GameControllerIcon.GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl = util.intl;
      obj10.title = intl.string(_modDef3219.HM2fjf);
      const intl2 = util.intl;
      obj10.description = intl2.string(_modDef3219.LQiFqJ);
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
};