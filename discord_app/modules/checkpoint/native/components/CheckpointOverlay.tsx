// === Module 13201: CheckpointOverlay ===

// Module 13201 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import _modDef3057 from "module_3057" /* 3057 */;
import _modDef3089 from "module_3089" /* 3089 */;
import CheckpointConstants from "CheckpointConstants" /* 6050 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6399 */;
import ChatIcon from "ChatIcon" /* 8579 */;
import GameControllerIcon from "GameControllerIcon" /* 9650 */;
import ServerIcon from "ServerIcon" /* 9680 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11686 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13202 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13207 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13208 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13218 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13221 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13225 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 13226 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13228 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13244 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13245 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13248 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13252 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  const cResult = c.c(18);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    const _Symbol14 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp88 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp88;
      let first = tmp88;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      const _Symbol13 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { icon: null, title: null, description: null };
        const obj3 = { size: "xs", color: CHECKPOINT_PRIMARY };
        obj2.icon = jsx(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
        const intl9 = util.intl;
        obj2.title = intl9.string(_modDef3089["/7XYsa"]);
        const intl10 = util.intl;
        obj2.description = intl10.string(_modDef3089["X8/G/o"]);
        const tmp83 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[1] = tmp83;
        let tmp78 = tmp83;
      } else {
        tmp78 = cResult[1];
      }
      return tmp78;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      const _Symbol12 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp76 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[2] = tmp76;
        let tmp73 = tmp76;
      } else {
        tmp73 = cResult[2];
      }
      return tmp73;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const _Symbol11 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { icon: null, title: null, description: null };
        const obj5 = { size: "xs", color: CHECKPOINT_PRIMARY };
        obj4.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
        const intl7 = util.intl;
        obj4.title = intl7.string(_modDef3089["2BuyVC"]);
        const intl8 = util.intl;
        obj4.description = intl8.string(_modDef3089["kF+Y3a"]);
        const tmp71 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[3] = tmp71;
        let tmp66 = tmp71;
      } else {
        tmp66 = cResult[3];
      }
      return tmp66;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      const _Symbol10 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp64 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[4] = tmp64;
        let tmp61 = tmp64;
      } else {
        tmp61 = cResult[4];
      }
      return tmp61;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const _Symbol9 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { icon: null, title: null, description: null };
        const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
        obj6.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
        const intl5 = util.intl;
        obj6.title = intl5.string(_modDef3057.F0fkrh);
        const intl6 = util.intl;
        obj6.description = intl6.string(_modDef3089.Xg82Gy);
        const tmp59 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[5] = tmp59;
        let tmp54 = tmp59;
      } else {
        tmp54 = cResult[5];
      }
      return tmp54;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      const _Symbol8 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp52 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[6] = tmp52;
        let tmp49 = tmp52;
      } else {
        tmp49 = cResult[6];
      }
      return tmp49;
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      const _Symbol7 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp47 = jsx(CheckpointTopServerStatsScreenDefault, {});
        cResult[7] = tmp47;
        let tmp44 = tmp47;
      } else {
        tmp44 = cResult[7];
      }
      return tmp44;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      const _Symbol6 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { icon: null, title: null, description: null };
        const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
        obj8.icon = jsx(EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
        const intl3 = util.intl;
        obj8.title = intl3.string(_modDef3089.ZTDCIv);
        const intl4 = util.intl;
        obj8.description = intl4.string(_modDef3089.y8Sr8J);
        const tmp42 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[8] = tmp42;
        let tmp37 = tmp42;
      } else {
        tmp37 = cResult[8];
      }
      return tmp37;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      const _Symbol5 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp35 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[9] = tmp35;
        let tmp32 = tmp35;
      } else {
        tmp32 = cResult[9];
      }
      return tmp32;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      const _Symbol4 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj10 = { icon: null, title: null, description: null };
        const obj11 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
        obj10.icon = jsx(GameControllerIcon.GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
        const intl = util.intl;
        obj10.title = intl.string(_modDef3089.HM2fjf);
        const intl2 = util.intl;
        obj10.description = intl2.string(_modDef3089.LQiFqJ);
        const tmp30 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[10] = tmp30;
        let tmp25 = tmp30;
      } else {
        tmp25 = cResult[10];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[11] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[11];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[12] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[12];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            const _Symbol = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[17] = tmp9;
              let tmp6 = tmp9;
            } else {
              tmp6 = cResult[17];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[13] === onNextStep) {
        if (cResult[14] === onPreviousStep) {
          if (cResult[15] === route) {
            let tmp10 = cResult[16];
          }
          return tmp10;
        }
      }
      const obj12 = { route, onNextStep, onPreviousStep };
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[13] = onNextStep;
      cResult[14] = onPreviousStep;
      cResult[15] = route;
      cResult[16] = tmp13;
      tmp10 = tmp13;
    }
    const tmpResult = CheckpointNavigation;
  }
}) : (function CheckpointOverlay(route) {
  route = route.route;
  ({ onNextStep, onPreviousStep } = route);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      const obj2 = { icon: null, title: null, description: null };
      const obj3 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj2.icon = jsx(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl9 = util.intl;
      obj2.title = intl9.string(_modDef3089["/7XYsa"]);
      const intl10 = util.intl;
      obj2.description = intl10.string(_modDef3089["X8/G/o"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const obj4 = { icon: null, title: null, description: null };
      const obj5 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj4.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl7 = util.intl;
      obj4.title = intl7.string(_modDef3089["2BuyVC"]);
      const intl8 = util.intl;
      obj4.description = intl8.string(_modDef3089["kF+Y3a"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const obj6 = { icon: null, title: null, description: null };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj6.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl5 = util.intl;
      obj6.title = intl5.string(_modDef3057.F0fkrh);
      const intl6 = util.intl;
      obj6.description = intl6.string(_modDef3089.Xg82Gy);
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
      obj8.title = intl3.string(_modDef3089.ZTDCIv);
      const intl4 = util.intl;
      obj8.description = intl4.string(_modDef3089.y8Sr8J);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      const obj10 = { icon: null, title: null, description: null };
      const obj11 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj10.icon = jsx(GameControllerIcon.GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl = util.intl;
      obj10.title = intl.string(_modDef3089.HM2fjf);
      const intl2 = util.intl;
      obj10.description = intl2.string(_modDef3089.LQiFqJ);
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
});