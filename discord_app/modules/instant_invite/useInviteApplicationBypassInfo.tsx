// === Module 17970: useInviteApplicationBypassInfo ===

// Module 17970 (useInviteApplicationBypassInfo)
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ GuildFeatures: c3, Permissions: closure_4 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = E;
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, E, tmp7);
  if (arg0 != null) {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
  }
  if (cResult[4] !== undefined) {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
    if (arg0 != null) {
      class E {
        constructor() {
          return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
        }
      }
      let hasItem = obj3.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (hasItem) {
      class E {
        constructor() {
          return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
        }
      }
      if (arg0 != null) {
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
        const hasItem1 = obj4.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
      }
      hasItem = hasItem1;
    }
    if (arg0 != null) {
      class E {
        constructor() {
          return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
        }
      }
    }
    cResult[4] = undefined;
    cResult[5] = hasItem;
    const tmp9 = hasItem;
  } else {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
  }
  if (tmp9) {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
  }
  if (cResult[6] === tmp9) {
    class E {
      constructor() {
        return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
      }
    }
    return obj2;
  }
  obj2 = { canCreateApplicationBypassInvites: tmp9, isManualApprovalGuild: tmp9 };
  cResult[6] = tmp9;
  cResult[7] = tmp9;
  cResult[8] = obj2;
  const tmpResult = require("initialize");
}) : ((features) => {
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