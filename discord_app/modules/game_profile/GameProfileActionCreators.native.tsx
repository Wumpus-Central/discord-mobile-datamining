// discord_app/modules/game_profile/GameProfileActionCreators.native.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  openGameProfileModal(arg0) {
    let gameId;
    let gameProfileModalChecks;
    let source;
    let sourceUserId;
    let stackingBehavior;
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
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { gameId, source, sourceUserId };
    const tmp4 = asyncRequire(8359, dependencyMap.paths);
    openLazy(tmp4, "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    let initialScrollOffset;
    let source;
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequire(8359, dependencyMap.paths);
    openLazy(tmp3, "game-profile-" + gameId, { gameId, source, initialScrollOffset });
  },
  setGameProfilePendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj2);
  },
};
const result = size.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default obj;
