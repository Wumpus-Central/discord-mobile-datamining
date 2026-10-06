// === Module 15552: CheckpointOverlay ===

// Module 15552 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15542 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15553 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15558 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15560 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15561 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15562 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15563 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15564 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15565 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15566 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15567 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let route;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const obj = react;
  const cResult = obj.c(10);
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    let first;
    const _Symbol10 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp54 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp54;
      first = tmp54;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      let tmp46;
      const _Symbol9 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp49 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[1] = tmp49;
        tmp46 = tmp49;
      } else {
        tmp46 = cResult[1];
      }
      return tmp46;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      let tmp41;
      const _Symbol8 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp44 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[2] = tmp44;
        tmp41 = tmp44;
      } else {
        tmp41 = cResult[2];
      }
      return tmp41;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      let tmp36;
      const _Symbol7 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp39 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[3] = tmp39;
        tmp36 = tmp39;
      } else {
        tmp36 = cResult[3];
      }
      return tmp36;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      let tmp31;
      const _Symbol6 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp34 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[4] = tmp34;
        tmp31 = tmp34;
      } else {
        tmp31 = cResult[4];
      }
      return tmp31;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      let tmp26;
      const _Symbol5 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp29 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[5] = tmp29;
        tmp26 = tmp29;
      } else {
        tmp26 = cResult[5];
      }
      return tmp26;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      let tmp21;
      const _Symbol4 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[6] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[6];
      }
      return tmp21;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SQUAD === statsScreen) {
      let tmp16;
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = jsx(CheckpointSquadStatsScreenDefault, {});
        cResult[7] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      return tmp16;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK === statsScreen) {
      let tmp11;
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = jsx(CheckpointSidekickStatsScreenDefault, {});
        cResult[8] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[8];
      }
      return tmp11;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
      let tmp6;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
        cResult[9] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[9];
      }
      return tmp6;
    } else {
      return null;
    }
  }
}) : ((route) => {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
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
  }
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default tmp2;