// discord_app/modules/game_profile/GameProfileActionCreators.native.tsx
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { 00038__ } from "../../../_runtime/metro/00038__.js";
import { dispatcher } from "../../Dispatcher.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("GetButton").fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default {
  openGameProfileModal(arg0) {
    let gameId;
    let gameProfileModalChecks;
    let source;
    let sourceUserId;
    let stackingBehavior;
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId, stackingBehavior } = arg0);
    00038__(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    00038__(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    let obj = ACTION_SHEET_HEIGHT_HALF;
    obj = { gameId, source, sourceUserId };
    obj.openLazy(asyncRequireImpl(9213, dependencyMap.paths), "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    let initialScrollOffset;
    let source;
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    dispatcher.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const obj = dispatcher;
    const obj2 = ACTION_SHEET_HEIGHT_HALF;
    obj2.openLazy(asyncRequireImpl(9213, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, initialScrollOffset });
  },
  setGameProfilePendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    dispatcher.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn(id) {
    let obj = dispatcher;
    obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj);
  }
};