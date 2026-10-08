// === Module 6953: canReviewGuildMemberApplications ===

// Module 6953 (canReviewGuildMemberApplications)
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export const canReviewGuildMemberApplications = function canReviewGuildMemberApplications(arg0) {
  guild = GuildStore.getGuild(arg0);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if (hasItem) {
      hasItem = PermissionStore.can(constants2.KICK_MEMBERS, guild);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useCanReviewGuildMemberApplications = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanReviewGuildMemberApplications(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (hasItem) {
      hasItem = PermissionStore.can(constants2.KICK_MEMBERS, stateFromStores);
    }
    if (hasItem) {
      hasItem = tmp(6175).guildHasVerificationGate(stateFromStores);
      const tmpResult2 = tmp(6175);
    }
    cResult[3] = stateFromStores;
    cResult[4] = hasItem;
    let tmp8 = hasItem;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function useCanReviewGuildMemberApplications(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = PermissionStore.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = require("MemberVerificationUtils").guildHasVerificationGate(stateFromStores);
    const tmpResult = require("MemberVerificationUtils");
  }
  return hasItem;
});