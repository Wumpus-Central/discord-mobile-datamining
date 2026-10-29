// === Module 16901: OrbsArcadeTypes ===

// Module 16901 (OrbsArcadeTypes)
import _slicedToArray from "module_32" /* 32 */;

function _rewardFromServer(type) {
  type = type.type;
  if (obj.COLLECTIBLE === type) {
    const obj3 = { type: tmp.COLLECTIBLE, id: null, skuId: null, scoreTarget: null, name: null, asset: null };
    ({ id: obj2.id, sku_id: obj2.skuId, score_target: obj2.scoreTarget, name: obj2.name, asset: obj2.asset } = type);
    return obj3;
  } else if (tmp.FRACTIONAL_PREMIUM === type) {
    obj = { type: tmp.FRACTIONAL_PREMIUM, id: null, skuId: null, scoreTarget: null, name: null, asset: null, quantity: null };
    ({ id: obj.id, sku_id: obj.skuId, score_target: obj.scoreTarget, name: obj.name, asset: obj.asset, quantity: obj.quantity } = type);
    return obj;
  }
}
function orbsArcadeGameFromServer(id) {
  obj = { id: id.id, versionId: id.version_id, applicationId: id.application_id, name: id.name, instructions: id.instructions, startsAt: id.starts_at, endsAt: id.ends_at, orbCost: id.orb_cost, numFreePlays: id.num_free_plays, windowDurationHours: id.window_duration_hours, asset: id.asset, heroVideoAsset: null, rewards: null };
  let tmp = null;
  if (null != id.hero_video_asset) {
    const size = { url: null, altText: null, mimeType: null, width: null, height: null };
    ({ url: obj2.url, alt_text: obj2.altText, mime_type: obj2.mimeType, width: obj2.width, height: obj2.height } = id.hero_video_asset);
    tmp = size;
  }
  obj.heroVideoAsset = tmp;
  const rewards = id.rewards;
  obj.rewards = rewards.map(_rewardFromServer);
  return obj;
}
function _rewardGrantFromServer(id) {
  return { id: id.id, sourceRunId: id.source_run_id, pendingAt: id.pending_at, claimedAt: id.claimed_at };
}
function orbsArcadeGameStateFromServer(game_state) {
  const rewardGrants = {};
  const entries = Object.entries(game_state.reward_grants);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    rewardGrants[tmp5[0]] = _rewardGrantFromServer(tmp5[1]);
    continue;
  }
  const obj5 = { gameId: game_state.game_id, gameVersionId: game_state.game_version_id, enrolledAt: game_state.enrolled_at, currentRun: null, rewardGrants: null, numFreePlaysUsed: null, numFreePlaysRemaining: null, enrollmentHighScore: null, allTimeHighScore: null, expiresAt: null };
  let tmp7 = null;
  if (null != game_state.current_run) {
    ({ id: obj3.id, started_at: obj3.startedAt, ended_at: obj3.endedAt, score: obj3.score, charge_type: obj3.chargeType, charge_status: obj3.chargeStatus } = game_state.current_run);
    tmp7 = { id: null, startedAt: null, endedAt: null, score: null, chargeType: null, chargeStatus: null };
    const obj6 = { id: null, startedAt: null, endedAt: null, score: null, chargeType: null, chargeStatus: null };
  }
  obj5.currentRun = tmp7;
  obj5.rewardGrants = rewardGrants;
  ({ num_free_plays_used: obj2.numFreePlaysUsed, num_free_plays_remaining: obj2.numFreePlaysRemaining, enrollment_high_score: obj2.enrollmentHighScore, all_time_high_score: obj2.allTimeHighScore, expires_at: obj2.expiresAt } = game_state);
  return obj5;
}
const OrbsArcadeRewardType = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", COLLECTIBLE: 1, [1]: "COLLECTIBLE", FRACTIONAL_PREMIUM: 2, [2]: "FRACTIONAL_PREMIUM" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeTypes.tsx");

export { OrbsArcadeRewardType };
export const OrbsArcadeRewardStatus = { LOCKED: "locked", CLAIMABLE: "claimable", CLAIMED: "claimed" };
export { orbsArcadeGameFromServer };
export { orbsArcadeGameStateFromServer };
export function orbsArcadeGamesFromServer(body) {
  const gameStateByGameId = {};
  const values = Object.values(body.game_state_by_game_id);
  for (const item10011 of values) {
    gameStateByGameId[item10011.game_id] = orbsArcadeGameStateFromServer(item10011);
    continue;
  }
  const obj2 = { games: null, gameStateByGameId };
  const games = body.games;
  obj2.games = games.map(orbsArcadeGameFromServer);
  return obj2;
}
export function orbsArcadeApplicationGameFromServer(game) {
  game = game.game;
  game = { id: game.id, versionId: game.version_id, applicationId: game.application_id, name: game.name, instructions: game.instructions, startsAt: game.starts_at, endsAt: game.ends_at, orbCost: game.orb_cost, numFreePlays: game.num_free_plays, windowDurationHours: game.window_duration_hours, asset: game.asset, heroVideoAsset: null, rewards: null };
  let tmp = null;
  if (null != game.hero_video_asset) {
    const size = { url: null, altText: null, mimeType: null, width: null, height: null };
    ({ url: obj2.url, alt_text: obj2.altText, mime_type: obj2.mimeType, width: obj2.width, height: obj2.height } = game.hero_video_asset);
    tmp = size;
  }
  const obj4 = { game: null, gameState: null, enrollmentClosesAt: null, canAffordRun: null };
  game.heroVideoAsset = tmp;
  const rewards = game.rewards;
  game.rewards = rewards.map(_rewardFromServer);
  obj4.game = game;
  let tmp2 = null;
  if (null != game.game_state) {
    tmp2 = orbsArcadeGameStateFromServer(game.game_state);
  }
  obj4.gameState = tmp2;
  ({ enrollment_closes_at: obj3.enrollmentClosesAt, can_afford_run: obj3.canAffordRun } = game);
  return obj4;
}
export function orbsArcadeClaimedRewardFromServer(body) {
  return { gameState: orbsArcadeGameStateFromServer(body.game_state), entitlements: body.entitlements };
}