// discord_app/modules/premium/powerups/native/GuildPowerupsBoostButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import GuildBoostingSubscribeButtonDefault from "../../../guild_boosting/native/GuildBoostingSubscribeButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let boostSlots;
      let currentUser;
      let first;
      let tmp15;
      let tmp16;
      let tmp8;
      let tmp9;
      let obj = guildId(576);
      const cResult = obj.c(16);
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[1] = guildId;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, S);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        const items1 = [GuildBoostSlotStore];
        const fn = function _() {
          return boostSlots.boostSlots;
        };
        cResult[3] = items1;
        cResult[4] = fn;
        tmp9 = fn;
        tmp8 = items1;
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        tmp9 = cResult[4];
      }
      const tmpResult3 = guildId(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[5] = tmp12;
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmp14 = useFractionalPremiumInfoDefault(tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        const items2 = [UserStore];
        class E {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[6] = items2;
        cResult[7] = E;
        tmp16 = E;
        tmp15 = items2;
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        tmp16 = cResult[7];
      }
      const tmpResult4 = guildId(504);
      const stateFromStores2 = tmpResult4.useStateFromStores(tmp15, tmp16);
      if (null != stateFromStores2) {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      if (cResult[8] !== stateFromStores1) {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        const values = Object.values(stateFromStores1);
        const found = values.find((isAvailable) => isAvailable.isAvailable());
        class E {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[8] = stateFromStores1;
        cResult[9] = found;
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(guildId, arg1) {
            let items;
            if (null != arg1) {
              const obj2 = { guildBoostSlots: items, guildId };
              items = [arg1];
              const obj = guildId(dependencyMap[11]);
              obj.openTransferModal(obj2);
            }
          }
        }
        cResult[10] = B;
        class E {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
      } else {
        class B {
          constructor(guildId, arg1) {
            let items;
            if (null != arg1) {
              const obj2 = { guildBoostSlots: items, guildId };
              items = [arg1];
              const obj = guildId(dependencyMap[11]);
              obj.openTransferModal(obj2);
            }
          }
        }
      }
      if (null != stateFromStores) {
        class B {
          constructor(guildId, arg1) {
            let items;
            if (null != arg1) {
              const obj2 = { guildBoostSlots: items, guildId };
              items = [arg1];
              const obj = guildId(dependencyMap[11]);
              obj.openTransferModal(obj2);
            }
          }
        }
        class E {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[11] = tmp14.fractionalState;
        cResult[12] = stateFromStores;
        cResult[13] = tmp18;
        cResult[14] = tmp19;
        cResult[15] = jsx(GuildBoostingSubscribeButtonDefault, {
          guild: null,
          previousGuildSubscriptionSlot: tmp19,
          analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
          fractionalPremiumState: tmp14.fractionalState,
          onAvailableSlotPress: tmp21,
          premiumGroupRole: tmp18,
        });
        const tmp25 = jsx(GuildBoostingSubscribeButtonDefault, {
          guild: null,
          previousGuildSubscriptionSlot: tmp19,
          analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
          fractionalPremiumState: tmp14.fractionalState,
          onAvailableSlotPress: tmp21,
          premiumGroupRole: tmp18,
        });
      }
      return null;
    }
  : (guildId) => {
      let UNSPECIFIED;
      let boostSlots;
      let currentUser;
      guildId = guildId.guildId;
      let obj = guildId(504);
      let items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj2 = guildId(504);
      const items1 = [GuildBoostSlotStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
      const items2 = [UserStore];
      const tmp6 = stateFromStores1(6898)({ forceFetch: true });
      const obj3 = guildId(504);
      const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
      const tmp = guildId;
      const tmp5 = stateFromStores1;
      if (null != stateFromStores2) {
        UNSPECIFIED = stateFromStores2.premiumGroupRole;
      } else {
        UNSPECIFIED = tmp(1385).PremiumSubscriptionGroupRole.UNSPECIFIED;
      }
      const items3 = [stateFromStores1];
      const memo = react.useMemo(() => {
        const values = Object.values(stateFromStores1);
        return values.find((isAvailable) => isAvailable.isAvailable());
      }, items3);
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = jsx(tmp5(6907), {
          guild: stateFromStores,
          previousGuildSubscriptionSlot: memo,
          analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
          fractionalPremiumState: tmp6.fractionalState,
          onAvailableSlotPress: tmp9,
          premiumGroupRole: UNSPECIFIED,
        });
      }
      return tmp10;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = tmp2;
