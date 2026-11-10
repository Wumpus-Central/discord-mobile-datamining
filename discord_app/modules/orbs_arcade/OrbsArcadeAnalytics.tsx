// === Module 17378: OrbsArcadeAnalytics ===

// Module 17378 (OrbsArcadeAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9649 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17368 */;

const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeAnalytics.tsx");

export const OrbsArcadeCta = { PLAY: "PLAY", EARN_ORBS: "EARN_ORBS", HOW_TO_PLAY: "HOW_TO_PLAY", VIEW_REWARDS: "VIEW_REWARDS", WHAT_IS_ORBS_ARCADE: "WHAT_IS_ORBS_ARCADE" };
export const OrbsArcadeSurface = { QUEST_HOME: "QUEST_HOME" };
export const OrbsArcadeCtaLocation = { GAME_TILE: "GAME_TILE", HOW_TO_PLAY_SHEET: "HOW_TO_PLAY_SHEET", INFO_SHEET: "INFO_SHEET", REWARDS_SHEET: "REWARDS_SHEET", REWARD_UNLOCKED_SHEET: "REWARD_UNLOCKED_SHEET" };
export function trackOrbsArcadeGameTileViewed(id, surface) {
  AnalyticsUtilsDefault.track(AnalyticEvents.ORBS_ARCADE_GAME_TILE_VIEWED, { orbs_arcade_game_id: id.id, orbs_arcade_game_version_id: id.versionId, application_id: id.applicationId, window_starts_at: id.windowStartsAt, surface });
}
export function trackOrbsArcadeCtaClicked(game, EARN_ORBS, GAME_TILE, surface) {
  AnalyticsUtilsDefault.track(AnalyticEvents.ORBS_ARCADE_CTA_CLICKED, { orbs_arcade_game_id: game.id, orbs_arcade_game_version_id: game.versionId, application_id: game.applicationId, window_starts_at: game.windowStartsAt, cta_name: EARN_ORBS, cta_location: GAME_TILE, surface });
}
export function trackOrbsArcadeGameClosed(id, runIdAtLaunch) {
  const game = OrbsArcadeStore.getGame(id);
  if (null != game) {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(id);
    let currentRun;
    if (gameStateForGame != null) {
      currentRun = gameStateForGame.currentRun;
    }
    if (currentRun == null) {
      currentRun = null;
    }
    let tmp3 = null;
    if (null != currentRun) {
      tmp3 = null;
      if (currentRun.id !== runIdAtLaunch) {
        tmp3 = currentRun;
      }
    }
    let prop;
    if (gameStateForGame != null) {
      prop = gameStateForGame.numFreePlaysRemaining;
    }
    if (prop == null) {
      prop = game.numFreePlays;
    }
    const obj3 = { orbs_arcade_game_id: game.id, orbs_arcade_game_version_id: null, application_id: null, window_starts_at: null, last_orbs_arcade_run_id: null, was_last_run_completed: null, num_free_plays_remaining: null, can_afford_another_run: null };
    let gameVersionId;
    if (gameStateForGame != null) {
      gameVersionId = gameStateForGame.gameVersionId;
    }
    if (gameVersionId == null) {
      gameVersionId = game.versionId;
    }
    obj3.orbs_arcade_game_version_id = gameVersionId;
    obj3.application_id = game.applicationId;
    let windowStartsAt;
    if (gameStateForGame != null) {
      windowStartsAt = gameStateForGame.windowStartsAt;
    }
    if (windowStartsAt == null) {
      windowStartsAt = game.windowStartsAt;
    }
    obj3.window_starts_at = windowStartsAt;
    id = undefined;
    if (tmp3 != null) {
      id = tmp3.id;
    }
    if (id == null) {
      id = null;
    }
    obj3.last_orbs_arcade_run_id = id;
    let tmp12 = null;
    if (null != tmp3) {
      tmp12 = null != tmp3.endedAt;
    }
    obj3.was_last_run_completed = tmp12;
    obj3.num_free_plays_remaining = prop;
    let flag = true;
    if (null != prop) {
      flag = true;
      if (prop <= 0) {
        flag = true;
        if (null != game.orbCost) {
          flag = true;
          if (0 !== game.orbCost) {
            const balance = VirtualCurrencyStore.balance;
            flag = null != balance && balance - OrbsArcadeStore.heldRunChargeTotal >= game.orbCost;
            const tmp14 = null != balance && balance - OrbsArcadeStore.heldRunChargeTotal >= game.orbCost;
          }
        }
      }
    }
    obj3.can_afford_another_run = flag;
    AnalyticsUtilsDefault.track(AnalyticEvents.ORBS_ARCADE_GAME_CLOSED, obj3);
  }
}