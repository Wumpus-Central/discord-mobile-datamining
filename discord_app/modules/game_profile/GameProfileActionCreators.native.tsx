// === Module 8680: GameProfileActionCreators ===

// Module 8680 (GameProfileActionCreators)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default {
  openGameProfileModal(arg0) {
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId, stackingBehavior } = arg0);
    _modDef38(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    _modDef38(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    const obj = { gameId, source, sourceUserId };
    obj.openLazy(asyncRequireImpl(8681, dependencyMap.paths), "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequireImpl(8681, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, initialScrollOffset });
  },
  setGameProfilePendingReturn(arg0) {
    ({ gameId, channelId, initialScrollOffset } = arg0);
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn(id) {
    const obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj);
  }
};