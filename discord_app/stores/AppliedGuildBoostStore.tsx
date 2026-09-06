// === Module 12562: AppliedGuildBoostStore ===

// Module 12562 (AppliedGuildBoostStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

function handleModifyingAppliedBoostStart() {
  c4 = true;
}
const dependencyMap = {};
let endsAt = null;
let closure_2 = [];
let c3 = false;
let c4 = false;
let error = null;
const Store = initializeDefault.Store;
class AppliedGuildBoostStore extends Store {
}
const prototype = AppliedGuildBoostStore.prototype;
prototype["getAppliedGuildBoostsForGuild"] = function getAppliedGuildBoostsForGuild(arg0) {
  let subscriptions = null;
  if (null != dependencyMap[arg0]) {
    subscriptions = dependencyMap[arg0].subscriptions;
  }
  return subscriptions;
};
prototype["getLastFetchedAtForGuild"] = function getLastFetchedAtForGuild(arg0) {
  let lastFetchedAt = null;
  if (null != dependencyMap[arg0]) {
    lastFetchedAt = dependencyMap[arg0].lastFetchedAt;
  }
  return lastFetchedAt;
};
prototype["getCurrentUserAppliedBoosts"] = function getCurrentUserAppliedBoosts() {
  return closure_2;
};
prototype["getAppliedGuildBoost"] = function getAppliedGuildBoost(arg0) {
  closure_0 = arg0;
  return closure_2.find((id) => id.id === closure_0);
};
Object.defineProperty(prototype, "isModifyingAppliedBoost", {
  get: function isModifyingAppliedBoost() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "applyBoostError", {
  get: function applyBoostError() {
    return error;
  },
  set: undefined
});
Object.defineProperty(prototype, "unapplyBoostError", {
  get: function unapplyBoostError() {
    return error;
  },
  set: undefined
});
Object.defineProperty(prototype, "cooldownEndsAt", {
  get: function cooldownEndsAt() {
    return endsAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingCurrentUserAppliedBoosts", {
  get: function isFetchingCurrentUserAppliedBoosts() {
    return c3;
  },
  set: undefined
});
AppliedGuildBoostStore.displayName = "AppliedGuildBoostStore";
const appliedGuildBoostStore = new AppliedGuildBoostStore(DispatcherDefault, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function handleAppliedBoostsForGuildFetchSuccess(appliedBoosts) {
    closure_0[appliedBoosts.guildId] = { subscriptions: appliedBoosts.appliedBoosts, lastFetchedAt: Date.now() };
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function handleAppliedBoostsForuserFetchSuccess(appliedGuildBoosts) {
    c3 = false;
    appliedGuildBoosts = appliedGuildBoosts.appliedGuildBoosts;
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function handleAppliedBoostCooldownFetch(endsAt) {
    endsAt = endsAt.endsAt;
  },
  GUILD_UNAPPLY_BOOST_START: handleModifyingAppliedBoostStart,
  GUILD_APPLY_BOOST_START: handleModifyingAppliedBoostStart,
  GUILD_APPLY_BOOST_SUCCESS: function handleApplyBoostSuccess(appliedGuildBoost) {
    appliedGuildBoost = appliedGuildBoost.appliedGuildBoost;
    const set = new Set(appliedGuildBoost.map((id) => id.id));
    const items = [...appliedGuildBoost, ...closure_2.filter((id) => !set.has(id.id))];
    closure_2 = items;
    error = null;
    c4 = false;
  },
  GUILD_APPLY_BOOST_FAIL: function handleApplyBoostFail(error) {
    c4 = false;
    error = error.error;
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function handleUnapplyBoostSuccess(boostId) {
    boostId = boostId.boostId;
    closure_2 = closure_2.filter((id) => id.id !== boostId);
    c4 = false;
  },
  GUILD_UNAPPLY_BOOST_FAIL: function handleUnapplyBoostFail(error) {
    c4 = false;
    error = error.error;
  },
  USER_APPLIED_BOOSTS_FETCH_START: function handleUserAppliedBoostsFetchStart() {
    c3 = true;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/AppliedGuildBoostStore.tsx");

export default appliedGuildBoostStore;