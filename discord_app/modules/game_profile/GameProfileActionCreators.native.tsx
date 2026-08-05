// discord_app/modules/game_profile/GameProfileActionCreators.native.tsx
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
    require("../../../_runtime/metro/00038__.js")(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    require("../../../_runtime/metro/00038__.js")(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    let obj = require("../action_sheet/native/ActionSheetActionCreators.tsx");
    obj = { gameId, source, sourceUserId };
    obj.openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9195, dependencyMap.paths), "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    let initialScrollOffset;
    let source;
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    require("../../Dispatcher.tsx").dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const obj = require("../../Dispatcher.tsx");
    const obj2 = require("../action_sheet/native/ActionSheetActionCreators.tsx");
    obj2.openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9195, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, initialScrollOffset });
  },
  setGameProfilePendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    require("../../Dispatcher.tsx").dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn(id) {
    let obj = require("../../Dispatcher.tsx");
    obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj);
  }
};