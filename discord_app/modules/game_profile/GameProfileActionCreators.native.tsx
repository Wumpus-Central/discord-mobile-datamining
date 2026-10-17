// === Module 9156: GameProfileActionCreators ===

// Module 9156 (GameProfileActionCreators)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default {
  openGameProfileModal(arg0) {
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId, stackingBehavior } = arg0);
    _modDef38(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    _modDef38(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(9157, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, sourceUserId }, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    gameId = gameId.gameId;
    ({ source, initialScrollOffset, initialTab } = gameId);
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(9157, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, initialScrollOffset, initialTab });
  },
  setGameProfilePendingReturn(arg0) {
    ({ gameId, channelId, initialScrollOffset, tab, source } = arg0);
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset, tab, source });
  },
  clearGameProfilePendingReturn(gameId) {
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
  }
};