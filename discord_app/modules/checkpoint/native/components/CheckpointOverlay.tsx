// === Module 12890: CheckpointOverlay ===

// Module 12890 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6002 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6349 */;
import ChatIcon from "ChatIcon" /* 8527 */;
import ServerIcon from "ServerIcon" /* 9615 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11591 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12891 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12896 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12897 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12905 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12907 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12910 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 12911 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12913 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12929 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12930 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12932 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12936 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  const cResult = c.c(17);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    const _Symbol13 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp81 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp81;
      let first = tmp81;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      const _Symbol12 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { icon: null, title: null, description: null };
        const obj3 = { size: "xs", color: CHECKPOINT_PRIMARY };
        obj2.icon = jsx(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
        const intl7 = util.intl;
        obj2.title = intl7.string(_modDef3088["/7XYsa"]);
        const intl8 = util.intl;
        obj2.description = intl8.string(_modDef3088["X8/G/o"]);
        const tmp76 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[1] = tmp76;
        let tmp71 = tmp76;
      } else {
        tmp71 = cResult[1];
      }
      return tmp71;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      const _Symbol11 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp69 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[2] = tmp69;
        let tmp66 = tmp69;
      } else {
        tmp66 = cResult[2];
      }
      return tmp66;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const _Symbol10 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { icon: null, title: null, description: null };
        const obj5 = { size: "xs", color: CHECKPOINT_PRIMARY };
        obj4.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
        const intl5 = util.intl;
        obj4.title = intl5.string(_modDef3088["2BuyVC"]);
        const intl6 = util.intl;
        obj4.description = intl6.string(_modDef3088["kF+Y3a"]);
        const tmp64 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[3] = tmp64;
        let tmp59 = tmp64;
      } else {
        tmp59 = cResult[3];
      }
      return tmp59;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      const _Symbol9 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp57 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[4] = tmp57;
        let tmp54 = tmp57;
      } else {
        tmp54 = cResult[4];
      }
      return tmp54;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const _Symbol8 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { icon: null, title: null, description: null };
        const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
        obj6.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
        const intl3 = util.intl;
        obj6.title = intl3.string(_modDef3056.F0fkrh);
        const intl4 = util.intl;
        obj6.description = intl4.string(_modDef3088.Xg82Gy);
        const tmp52 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[5] = tmp52;
        let tmp47 = tmp52;
      } else {
        tmp47 = cResult[5];
      }
      return tmp47;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      const _Symbol7 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp45 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[6] = tmp45;
        let tmp42 = tmp45;
      } else {
        tmp42 = cResult[6];
      }
      return tmp42;
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      const _Symbol6 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp40 = jsx(CheckpointTopServerStatsScreenDefault, {});
        cResult[7] = tmp40;
        let tmp37 = tmp40;
      } else {
        tmp37 = cResult[7];
      }
      return tmp37;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      const _Symbol5 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { icon: null, title: null, description: null };
        const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
        obj8.icon = jsx(EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
        const intl = util.intl;
        obj8.title = intl.string(_modDef3088.ZTDCIv);
        const intl2 = util.intl;
        obj8.description = intl2.string(_modDef3088.y8Sr8J);
        const tmp35 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        cResult[8] = tmp35;
        let tmp30 = tmp35;
      } else {
        tmp30 = cResult[8];
      }
      return tmp30;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      const _Symbol4 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[9] = tmp28;
        let tmp25 = tmp28;
      } else {
        tmp25 = cResult[9];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[10] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[10];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[11] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[11];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[16] = tmp9;
              let tmp6 = tmp9;
            } else {
              tmp6 = cResult[16];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[12] === onNextStep) {
        if (cResult[13] === onPreviousStep) {
          if (cResult[14] === route) {
            let tmp10 = cResult[15];
          }
          return tmp10;
        }
      }
      const obj10 = { route, onNextStep, onPreviousStep };
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[12] = onNextStep;
      cResult[13] = onPreviousStep;
      cResult[14] = route;
      cResult[15] = tmp13;
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
      const intl7 = util.intl;
      obj2.title = intl7.string(_modDef3088["/7XYsa"]);
      const intl8 = util.intl;
      obj2.description = intl8.string(_modDef3088["X8/G/o"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      const obj4 = { icon: null, title: null, description: null };
      const obj5 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj4.icon = jsx(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl5 = util.intl;
      obj4.title = intl5.string(_modDef3088["2BuyVC"]);
      const intl6 = util.intl;
      obj4.description = intl6.string(_modDef3088["kF+Y3a"]);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      const obj6 = { icon: null, title: null, description: null };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      obj6.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
      const intl3 = util.intl;
      obj6.title = intl3.string(_modDef3056.F0fkrh);
      const intl4 = util.intl;
      obj6.description = intl4.string(_modDef3088.Xg82Gy);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      const obj8 = { icon: null, title: null, description: null };
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      obj8.icon = jsx(EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
      const intl = util.intl;
      obj8.title = intl.string(_modDef3088.ZTDCIv);
      const intl2 = util.intl;
      obj8.description = intl2.string(_modDef3088.y8Sr8J);
      return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
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