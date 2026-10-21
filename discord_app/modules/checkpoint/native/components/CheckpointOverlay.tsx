// discord_app/modules/checkpoint/native/components/CheckpointOverlay.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3056 from "../../Checkpoint.messages.js";
import _modDef3088 from "../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import CheckpointNavigation from "../../CheckpointNavigation.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointWelcomeScreenDefault from "screens/CheckpointWelcomeScreen.tsx";
import CheckpointStatsIntroScreenDefault from "screens/stats/CheckpointStatsIntroScreen.tsx";
import CheckpointVoiceStatsScreenDefault from "screens/stats/CheckpointVoiceStatsScreen.tsx";
import CheckpointMessagesStatsScreenDefault from "screens/stats/CheckpointMessagesStatsScreen.tsx";
import CheckpointServersStatsScreenDefault from "screens/stats/CheckpointServersStatsScreen.tsx";
import CheckpointStatsScreenDefault from "screens/stats/CheckpointStatsScreen.tsx";
import CheckpointEmojiStatsScreenDefault from "screens/stats/CheckpointEmojiStatsScreen.tsx";
import CheckpointGamesStatsScreenDefault from "screens/stats/CheckpointGamesStatsScreen.tsx";
import CheckpointGameTimeStatsScreenDefault from "screens/stats/CheckpointGameTimeStatsScreen.tsx";
import CheckpointFriendsStatsScreenDefault from "screens/stats/CheckpointFriendsStatsScreen.tsx";
import CheckpointSummaryStatsScreenDefault from "screens/stats/CheckpointSummaryStatsScreen.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointOverlay(arg0) {
      const cResult = c.c(15);
      ({ route, onNextStep, onPreviousStep } = arg0);
      if (route === CheckpointNavigation.CheckpointRoute.HOME) {
        const _Symbol11 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp67 = jsx(CheckpointWelcomeScreenDefault, {});
          cResult[0] = tmp67;
          let first = tmp67;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
        if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
          const _Symbol10 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { icon: null, title: null, description: null };
            const obj3 = { size: "xs", color: CHECKPOINT_PRIMARY };
            obj2.icon = jsx(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY });
            const intl3 = util.intl;
            obj2.title = intl3.string(_modDef3088["/7XYsa"]);
            const intl4 = util.intl;
            obj2.description = intl4.string(_modDef3088["X8/G/o"]);
            const tmp62 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
            cResult[1] = tmp62;
            let tmp57 = tmp62;
          } else {
            tmp57 = cResult[1];
          }
          return tmp57;
        } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
          const _Symbol9 = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp55 = jsx(CheckpointVoiceStatsScreenDefault, {});
            cResult[2] = tmp55;
            let tmp52 = tmp55;
          } else {
            tmp52 = cResult[2];
          }
          return tmp52;
        } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
          const _Symbol8 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp50 = jsx(CheckpointMessagesStatsScreenDefault, {});
            cResult[3] = tmp50;
            let tmp47 = tmp50;
          } else {
            tmp47 = cResult[3];
          }
          return tmp47;
        } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
          const _Symbol7 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { icon: null, title: null, description: null };
            const obj5 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
            obj4.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
            const intl = util.intl;
            obj4.title = intl.string(_modDef3056.F0fkrh);
            const intl2 = util.intl;
            obj4.description = intl2.string(_modDef3088.Xg82Gy);
            const tmp45 = jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
            cResult[4] = tmp45;
            let tmp40 = tmp45;
          } else {
            tmp40 = cResult[4];
          }
          return tmp40;
        } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
          const _Symbol6 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp38 = jsx(CheckpointServersStatsScreenDefault, {});
            cResult[5] = tmp38;
            let tmp35 = tmp38;
          } else {
            tmp35 = cResult[5];
          }
          return tmp35;
        } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
          const _Symbol5 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp33 = jsx(CheckpointStatsScreenDefault, { name: "Top server" });
            cResult[6] = tmp33;
            let tmp30 = tmp33;
          } else {
            tmp30 = cResult[6];
          }
          return tmp30;
        } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
          const _Symbol4 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = jsx(CheckpointEmojiStatsScreenDefault, {});
            cResult[7] = tmp28;
            let tmp25 = tmp28;
          } else {
            tmp25 = cResult[7];
          }
          return tmp25;
        } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
          const _Symbol3 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
            cResult[8] = tmp23;
            let tmp20 = tmp23;
          } else {
            tmp20 = cResult[8];
          }
          return tmp20;
        } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
            cResult[9] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[9];
          }
          return tmp15;
        } else {
          if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
            if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
              if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
                const _Symbol = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
                  cResult[14] = tmp9;
                  let tmp6 = tmp9;
                } else {
                  tmp6 = cResult[14];
                }
                return tmp6;
              } else {
                return null;
              }
            }
          }
          if (cResult[10] === onNextStep) {
            if (cResult[11] === onPreviousStep) {
              if (cResult[12] === route) {
                let tmp10 = cResult[13];
              }
              return tmp10;
            }
          }
          const obj6 = { route, onNextStep, onPreviousStep };
          const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
          cResult[10] = onNextStep;
          cResult[11] = onPreviousStep;
          cResult[12] = route;
          cResult[13] = tmp13;
          tmp10 = tmp13;
        }
        const tmpResult = CheckpointNavigation;
      }
    }
  : function CheckpointOverlay(route) {
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
          const intl3 = util.intl;
          obj2.title = intl3.string(_modDef3088["/7XYsa"]);
          const intl4 = util.intl;
          obj2.description = intl4.string(_modDef3088["X8/G/o"]);
          return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
          return jsx(CheckpointVoiceStatsScreenDefault, {});
        } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
          return jsx(CheckpointMessagesStatsScreenDefault, {});
        } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
          const obj4 = { icon: null, title: null, description: null };
          const obj5 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
          obj4.icon = jsx(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY });
          const intl = util.intl;
          obj4.title = intl.string(_modDef3056.F0fkrh);
          const intl2 = util.intl;
          obj4.description = intl2.string(_modDef3088.Xg82Gy);
          return jsx(CheckpointStatsIntroScreenDefault, { icon: null, title: null, description: null });
        } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
          return jsx(CheckpointServersStatsScreenDefault, {});
        } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
          return jsx(CheckpointStatsScreenDefault, { name: "Top server" });
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
    };
