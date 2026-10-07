// === Module 16220: useIsGuildEligibleForRoleSubscriptionsUpsell ===

// Module 16220 (useIsGuildEligibleForRoleSubscriptionsUpsell)
import Constants from "Constants" /* 1085 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const isGuildOwner = GuildRecord.isGuildOwner;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        return closure_3.getGuild(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        return closure_3.getGuild(closure_0);
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, E);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_3.getGuild(closure_0);
      }
    }
    const items1 = [UserStore];
    const fn = function _() {
      return currentUser.getCurrentUser();
    };
    cResult[3] = items1;
    cResult[4] = fn;
    let tmp9 = fn;
    const tmp8 = items1;
  } else {
    class E {
      constructor() {
        return closure_3.getGuild(closure_0);
      }
    }
    tmp9 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[5] === stateFromStores) {
    class E {
      constructor() {
        return closure_3.getGuild(closure_0);
      }
    }
    const isUserInCreatorMonetizationEligibleCountry = tmp(6774).useIsUserInCreatorMonetizationEligibleCountry();
    if (stateFromStores != null) {
      class E {
        constructor() {
          return closure_3.getGuild(closure_0);
        }
      }
    }
    if (cResult[8] === undefined) {
      class E {
        constructor() {
          return closure_3.getGuild(closure_0);
        }
      }
    }
    let tmp17 = tmp11;
    if (tmp11) {
      class E {
        constructor() {
          return closure_3.getGuild(closure_0);
        }
      }
      if (stateFromStores != null) {
        class E {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        const hasItem = obj5.has(GuildFeatures.COMMUNITY);
      }
      if (hasItem == null) {
        class E {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
      }
      tmp17 = hasItem;
    }
    if (tmp17) {
      class E {
        constructor() {
          return closure_3.getGuild(closure_0);
        }
      }
    }
    if (tmp17) {
      class E {
        constructor() {
          return closure_3.getGuild(closure_0);
        }
      }
      if (stateFromStores != null) {
        class E {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        let hasItem1 = obj6.has(GuildFeatures.CREATOR_MONETIZABLE);
      }
      if (!hasItem1) {
        class E {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        if (stateFromStores != null) {
          class E {
            constructor() {
              return closure_3.getGuild(closure_0);
            }
          }
          const hasItem2 = obj7.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        hasItem1 = hasItem2;
      }
      if (!hasItem1) {
        class E {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        if (stateFromStores != null) {
          class E {
            constructor() {
              return closure_3.getGuild(closure_0);
            }
          }
          const hasItem3 = obj8.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
        }
        hasItem1 = hasItem3;
      }
      tmp17 = !hasItem1;
    }
    if (stateFromStores != null) {
      class E {
        constructor() {
          return closure_3.getGuild(closure_0);
        }
      }
    }
    cResult[8] = undefined;
    cResult[9] = tmp11;
    cResult[10] = isUserInCreatorMonetizationEligibleCountry;
    cResult[11] = tmp17;
    const tmpResult4 = tmp(6774);
  }
  let tmp12 = null != stateFromStores;
  if (tmp12) {
    class E {
      constructor() {
        return closure_3.getGuild(closure_0);
      }
    }
    tmp12 = isGuildOwner(stateFromStores, stateFromStores1);
  }
  cResult[5] = stateFromStores;
  cResult[6] = stateFromStores1;
  cResult[7] = tmp12;
  const tmpResult3 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  require("initialize");
  [][0] = UserStore;
  let tmp6 = null != stateFromStores;
  if (tmp6) {
    tmp6 = isGuildOwner(stateFromStores, tmp5);
  }
  const obj = require("initialize");
  const isUserInCreatorMonetizationEligibleCountry = require("CreatorMonetizationEligibilityExperimentUtils").useIsUserInCreatorMonetizationEligibleCountry();
  if (tmp6) {
    let flag;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      flag = features.has(GuildFeatures.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    tmp6 = flag;
  }
  if (tmp6) {
    tmp6 = isUserInCreatorMonetizationEligibleCountry;
  }
  if (tmp6) {
    let hasItem;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    }
    if (!hasItem) {
      let hasItem1;
      if (stateFromStores != null) {
        const features3 = stateFromStores.features;
        hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      hasItem = hasItem1;
    }
    if (!hasItem) {
      let hasItem2;
      if (stateFromStores != null) {
        const features4 = stateFromStores.features;
        hasItem2 = features4.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      }
      hasItem = hasItem2;
    }
    tmp6 = !hasItem;
  }
  return tmp6;
});