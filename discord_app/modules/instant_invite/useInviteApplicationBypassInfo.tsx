// === Module 18487: useInviteApplicationBypassInfo ===

// Module 18487 (useInviteApplicationBypassInfo)
import PermissionStore from "PermissionStore" /* 4709 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ GuildFeatures: c3, Permissions: closure_4 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = ReactCompilerGating.isReactCompilerEnabled() ? (function useInviteApplicationBypassInfo(features) {
  _require = features;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== features) {
    const fn = function p() {
      return PermissionStore.can(constants2.KICK_MEMBERS, closure_0);
    };
    const items1 = [features];
    cResult[1] = features;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  let features1;
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (features != null) {
    features1 = features.features;
  }
  if (cResult[4] !== features1) {
    let hasItem;
    if (features != null) {
      features = features.features;
      hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (hasItem) {
      let hasItem1;
      if (features != null) {
        const features2 = features.features;
        hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
      }
      hasItem = hasItem1;
    }
    let features3;
    if (features != null) {
      features3 = features.features;
    }
    cResult[4] = features3;
    cResult[5] = hasItem;
    let tmp10 = hasItem;
  } else {
    tmp10 = cResult[5];
  }
  let tmp17 = tmp16;
  if (tmp10) {
    tmp17 = stateFromStores;
  }
  if (cResult[6] === tmp10) {
    if (cResult[7] === tmp17) {
      let tmp18 = cResult[8];
    }
    return tmp18;
  }
  const obj2 = { canCreateApplicationBypassInvites: tmp17, isManualApprovalGuild: tmp10 };
  cResult[6] = tmp10;
  cResult[7] = tmp17;
  cResult[8] = obj2;
  tmp18 = obj2;
  const tmpResult = require("initialize");
}) : (function useInviteApplicationBypassInfo(features) {
  _require = features;
  const items = [PermissionStore];
  const items1 = [features];
  let hasItem;
  const stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(constants2.KICK_MEMBERS, closure_0), items1);
  if (features != null) {
    features = features.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  let tmp4 = !hasItem;
  if (hasItem) {
    let hasItem1;
    if (features != null) {
      const features2 = features.features;
      hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
    }
    tmp4 = !hasItem1;
  }
  const isManualApprovalGuild = !tmp4;
  let canCreateApplicationBypassInvites = isManualApprovalGuild;
  if (isManualApprovalGuild) {
    canCreateApplicationBypassInvites = stateFromStores;
  }
  return { canCreateApplicationBypassInvites, isManualApprovalGuild };
});