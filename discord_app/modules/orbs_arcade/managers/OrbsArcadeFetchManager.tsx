// === Module 19377: OrbsArcadeFetchManager ===

// Module 19377 (OrbsArcadeFetchManager)
import DurationsDefault from "Durations" /* 1104 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16400 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16395 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;

require = fn;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_4 = 5 * DurationsDefault.Millis.MINUTE;
let closure_5 = 5 * DurationsDefault.Millis.MINUTE;
const DAY = DurationsDefault.Millis.DAY;
class OrbsArcadeFetchManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.reconnectRefetchTimerId = null;
    applyArgumentsResult.boundaryRefetchTimerId = null;
    applyArgumentsResult.scheduledBoundaryAt = null;
    applyArgumentsResult.lastLocaleRefetchAt = 0;
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      window.clearTimeout(applyArgumentsResult.reconnectRefetchTimerId);
      if (applyArgumentsResult.hasFetched()) {
        const _window = window;
        const _Math = Math;
        const _Math2 = Math;
        applyArgumentsResult.reconnectRefetchTimerId = window.setTimeout(() => closure_1_0(dependencyMap[3]).fetchOrbsArcadeGames(), Math.floor(Math.random() * MINUTE));
      }
    };
    applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate(settings) {
      let wasSaved = !("localization" in settings.settings.proto);
      if (!wasSaved) {
        wasSaved = !settings.partial;
      }
      if (!wasSaved) {
        wasSaved = settings.wasSaved;
      }
      if (!wasSaved) {
        wasSaved = !applyArgumentsResult.hasFetched();
      }
      if (!wasSaved) {
        const _Date = Date;
        wasSaved = Date.now() - applyArgumentsResult.lastLocaleRefetchAt <= closure_4;
      }
      if (!wasSaved) {
        const _Date2 = Date;
        applyArgumentsResult.lastLocaleRefetchAt = Date.now();
        const orbsArcadeGames = OrbsArcadeActionCreators.fetchOrbsArcadeGames();
      }
    };
    applyArgumentsResult.handleGameStateUpdate = function handleGameStateUpdate(game_state) {
      game_state = game_state.game_state;
      game = game.getGame(game_state.game_id);
      if (null != game) {
        let tmp4 = null != game.endsAt;
        if (tmp4) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(game.endsAt);
          tmp4 = parsed <= Date.now();
        }
        let result = !tmp4;
        if (!tmp4) {
          const obj = applyArgumentsResult(16401);
          result = obj.isOrbsArcadeEnrollmentOver(applyArgumentsResult(16396).orbsArcadeGameStateFromServer(game_state));
          const obj2 = applyArgumentsResult(16396);
        }
        if (tmp8) {
          const orbsArcadeGames = applyArgumentsResult(16400).fetchOrbsArcadeGames();
          const obj3 = applyArgumentsResult(16400);
        }
        tmp8 = game.versionId !== game_state.game_version_id || result;
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      applyArgumentsResult.clearTimers();
      applyArgumentsResult.lastLocaleRefetchAt = 0;
    };
    applyArgumentsResult.handleStoreChange = function handleStoreChange() {
      let tmp2 = null;
      if (applyArgumentsResult.hasFetched()) {
        const _Date = Date;
        closure_0 = Date.now();
        let orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
        let items = [];
        HermesBuiltin.arraySpread(orbsArcadeGames.flatMap((id) => {
          const items = [, , ];
          ({ startsAt: arr[0], endsAt: arr[1] } = id);
          gameStateForGame = gameStateForGame.getGameStateForGame(id.id);
          let expiresAt;
          if (gameStateForGame != null) {
            expiresAt = gameStateForGame.expiresAt;
          }
          items[2] = expiresAt;
          return items;
        }), 0);
        const found = items.filter((item) => null != item);
        const mapped = found.map((item) => Date.parse(item));
        const found1 = mapped.filter((item) => item > closure_0);
        let applyResult = null;
        if (found1.length > 0) {
          const _Math = Math;
          const items1 = [];
          HermesBuiltin.arraySpread(found1, 0);
          const _Math2 = Math;
          applyResult = HermesBuiltin.apply(items1, Math);
        }
        tmp2 = applyResult;
      }
      if (tmp2 !== applyArgumentsResult.scheduledBoundaryAt) {
        const _window2 = window;
        window.clearTimeout(applyArgumentsResult.boundaryRefetchTimerId);
        applyArgumentsResult.boundaryRefetchTimerId = null;
        applyArgumentsResult.scheduledBoundaryAt = tmp2;
        if (null != tmp2) {
          const _Math3 = Math;
          const _Date2 = Date;
          const _Math4 = Math;
          const _Math5 = Math;
          const diff = tmp2 - Date.now();
          const _window = window;
          applyArgumentsResult.boundaryRefetchTimerId = window.setTimeout(() => {
            closure_0.boundaryRefetchTimerId = null;
            closure_0.scheduledBoundaryAt = null;
            const orbsArcadeGames = applyArgumentsResult(16400).fetchOrbsArcadeGames();
          }, Math.min(diff + Math.floor(Math.random() * closure_5), DAY));
        }
      }
    };
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate, ORBS_ARCADE_GAME_STATE_UPDATE: applyArgumentsResult.handleGameStateUpdate, LOGOUT: applyArgumentsResult.handleLogout };
    items = [, ];
    items[0] = closure_2;
    items[1] = applyArgumentsResult.handleStoreChange;
    items1 = [];
    items1[0] = items;
    map = new Map(items1);
    applyArgumentsResult.stores = map;
    return applyArgumentsResult;
  }
}
const prototype = OrbsArcadeFetchManager.prototype;
prototype["hasFetched"] = function hasFetched() {
  return null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt;
};
prototype["clearTimers"] = function clearTimers() {
  window.clearTimeout(this.reconnectRefetchTimerId);
  window.clearTimeout(this.boundaryRefetchTimerId);
  this.reconnectRefetchTimerId = null;
  this.boundaryRefetchTimerId = null;
  this.scheduledBoundaryAt = null;
};
const orbsArcadeFetchManager = new OrbsArcadeFetchManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/managers/OrbsArcadeFetchManager.tsx");

export default orbsArcadeFetchManager;