// discord_app/modules/game_profile/GameProfileActionCreators.native.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default {
  openGameProfileModal(arg0) {
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId, stackingBehavior } = arg0);
    _modDef38(
      gameProfileModalChecks.shouldOpenGameProfile,
      "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?",
    );
    _modDef38(
      gameProfileModalChecks.gameId === gameId,
      "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?",
    );
    const obj = { gameId, source, sourceUserId };
    obj.openLazy(asyncRequireImpl(8681, dependencyMap.paths), "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequireImpl(8681, dependencyMap.paths), "game-profile-" + gameId, {
      gameId,
      source,
      initialScrollOffset,
    });
  },
  setGameProfilePendingReturn(arg0) {
    ({ gameId, channelId, initialScrollOffset } = arg0);
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn(id) {
    const obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj);
  },
};
