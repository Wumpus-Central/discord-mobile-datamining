// discord_app/modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
import Constants from "../../Constants.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const isGuildOwner = GuildRecord.isGuildOwner;
const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let currentUser;
      let first;
      let tmp8;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class E {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        cResult[1] = arg0;
        cResult[2] = E;
      } else {
        class E {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, E);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        const items1 = [UserStore];
        const fn = function _() {
          return currentUser.getCurrentUser();
        };
        cResult[3] = items1;
        cResult[4] = fn;
        tmp9 = fn;
        tmp8 = items1;
      } else {
        class E {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        tmp9 = cResult[4];
      }
      const tmpResult3 = require("get initialized");
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      if (cResult[5] === stateFromStores) {
        class E {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        const tmpResult4 = require("CreatorMonetizationEligibilityExperimentUtils");
        const isUserInCreatorMonetizationEligibleCountry = tmpResult4.useIsUserInCreatorMonetizationEligibleCountry();
        const tmp14 = cResult[8];
        if (stateFromStores != null) {
          class E {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
        }
        if (tmp14 === undefined) {
          class E {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
        }
        let tmp18 = tmp11;
        if (tmp18) {
          let hasItem;
          class E {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
          if (stateFromStores != null) {
            class E {
              constructor() {
                return GuildStore.getGuild(closure_0);
              }
            }
            hasItem = obj5.has(GuildFeatures.COMMUNITY);
          }
          if (hasItem == null) {
            class E {
              constructor() {
                return GuildStore.getGuild(closure_0);
              }
            }
          }
          tmp18 = hasItem;
        }
        if (tmp18) {
          class E {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
        }
        if (tmp18) {
          let hasItem1;
          class E {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
          if (stateFromStores != null) {
            class E {
              constructor() {
                return GuildStore.getGuild(closure_0);
              }
            }
            hasItem1 = obj6.has(GuildFeatures.CREATOR_MONETIZABLE);
          }
          if (!hasItem1) {
            let hasItem2;
            class E {
              constructor() {
                return GuildStore.getGuild(closure_0);
              }
            }
            if (stateFromStores != null) {
              class E {
                constructor() {
                  return GuildStore.getGuild(closure_0);
                }
              }
              hasItem2 = obj7.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
            }
            hasItem1 = hasItem2;
          }
          if (!hasItem1) {
            let hasItem3;
            class E {
              constructor() {
                return GuildStore.getGuild(closure_0);
              }
            }
            if (stateFromStores != null) {
              class E {
                constructor() {
                  return GuildStore.getGuild(closure_0);
                }
              }
              hasItem3 = obj8.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
            }
            hasItem1 = hasItem3;
          }
          tmp18 = !hasItem1;
        }
        if (stateFromStores != null) {
          class E {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
        }
        cResult[8] = undefined;
        cResult[9] = tmp11;
        cResult[10] = isUserInCreatorMonetizationEligibleCountry;
        cResult[11] = tmp18;
      }
      let tmp12 = null != stateFromStores;
      if (tmp12) {
        class E {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        tmp12 = isGuildOwner(stateFromStores, stateFromStores1);
      }
      cResult[5] = stateFromStores;
      cResult[6] = stateFromStores1;
      cResult[7] = tmp12;
    }
  : (arg0) => {
      let closure_0;
      let currentUser;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
      require("get initialized");
      [][0] = UserStore;
      let tmp6 = null != stateFromStores;
      const tmp = _require;
      if (tmp6) {
        tmp6 = isGuildOwner(stateFromStores, tmp5);
      }
      const tmpResult = tmp(6764);
      const isUserInCreatorMonetizationEligibleCountry = tmpResult.useIsUserInCreatorMonetizationEligibleCountry();
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
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx",
);

export default tmp2;
