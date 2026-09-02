// discord_app/modules/game_profile/GameProfileActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import asyncRequireImpl from "../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

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
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { gameId, source, sourceUserId };
    obj.openLazy(asyncRequireImpl(8822, dependencyMap.paths), "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    dispatcherDefault.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const obj = dispatcherDefault;
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
    obj2.openLazy(asyncRequireImpl(8822, dependencyMap.paths), "game-profile-" + gameId, {
      gameId,
      source,
      initialScrollOffset,
    });
  },
  setGameProfilePendingReturn(arg0) {
    ({ gameId, channelId, initialScrollOffset } = arg0);
    dispatcherDefault.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn(id) {
    let obj = dispatcherDefault;
    obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj);
  },
};
