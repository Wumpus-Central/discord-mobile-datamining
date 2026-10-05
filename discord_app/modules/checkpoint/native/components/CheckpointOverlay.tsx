// === Module 15536: CheckpointOverlay ===

// Module 15536 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15526 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15537 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15542 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15544 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15545 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15546 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15547 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15548 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15549 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15550 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15551 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = c.c(10);
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    const _Symbol10 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp54 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp54;
      let first = tmp54;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const statsScreen = CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      const _Symbol9 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp49 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[1] = tmp49;
        let tmp46 = tmp49;
      } else {
        tmp46 = cResult[1];
      }
      return tmp46;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      const _Symbol8 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp44 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[2] = tmp44;
        let tmp41 = tmp44;
      } else {
        tmp41 = cResult[2];
      }
      return tmp41;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      const _Symbol7 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp39 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[3] = tmp39;
        let tmp36 = tmp39;
      } else {
        tmp36 = cResult[3];
      }
      return tmp36;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      const _Symbol6 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp34 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[4] = tmp34;
        let tmp31 = tmp34;
      } else {
        tmp31 = cResult[4];
      }
      return tmp31;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      const _Symbol5 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp29 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[5] = tmp29;
        let tmp26 = tmp29;
      } else {
        tmp26 = cResult[5];
      }
      return tmp26;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      const _Symbol4 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[6] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[6];
      }
      return tmp21;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SQUAD === statsScreen) {
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = jsx(CheckpointSquadStatsScreenDefault, {});
        cResult[7] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      return tmp16;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK === statsScreen) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = jsx(CheckpointSidekickStatsScreenDefault, {});
        cResult[8] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[8];
      }
      return tmp11;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
        cResult[9] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[9];
      }
      return tmp6;
    } else {
      return null;
    }
    const tmpResult = CheckpointNavigation;
  }
}) : ((route) => {
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
});