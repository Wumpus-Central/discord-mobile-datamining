// discord_app/modules/premium/powerups/native/GuildPowerupsBoostButton.tsx
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";

const GuildBoostingSubscribeButtonDefault = tmp13(6907);
const require = fn;
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp2 = dependencyMap;
      const cResult = guildId(576).c(16);
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        cResult[1] = guildId;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, S);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        const items1 = [GuildBoostSlotStore];
        const fn = function _() {
          return boostSlots.boostSlots;
        };
        cResult[3] = items1;
        cResult[4] = fn;
        let tmp9 = fn;
        const tmp8 = items1;
      } else {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        tmp9 = cResult[4];
      }
      const tmpResult = guildId(504);
      const stateFromStores1 = guildId(504).useStateFromStores(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        cResult[5] = tmp12;
      } else {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
      }
      let fractionalState = useFractionalPremiumInfoDefault(tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        const items2 = [UserStore];
        class E {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[6] = items2;
        cResult[7] = E;
        let tmp15 = E;
        const tmp14 = items2;
      } else {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        tmp15 = cResult[7];
      }
      const tmpResult3 = guildId(504);
      const stateFromStores2 = guildId(504).useStateFromStores(tmp14, tmp15);
      if (null != stateFromStores2) {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
      } else {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
      }
      if (cResult[8] !== stateFromStores1) {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
        const values = Object.values(stateFromStores1);
        const found = values.find((isAvailable) => isAvailable.isAvailable());
        class E {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[8] = stateFromStores1;
        cResult[9] = found;
      } else {
        class S {
          constructor() {
            return closure_4.getGuild(guildId);
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0, arg1) {
            if (null != arg1) {
              tmp = guildId;
              tmp2 = guildId;
              tmp3 = closure_1_2;
              obj = guildId(closure_1_2[11]);
              obj1 = { guildBoostSlots: null, guildId: null };
              items = [];
              items[0] = arg1;
              obj1.guildBoostSlots = items;
              obj1.guildId = guildId;
              openTransferModalResult = obj.openTransferModal(obj1);
            }
            return;
          }
        }
        cResult[10] = B;
        class E {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
      } else {
        class B {
          constructor(arg0, arg1) {
            if (null != arg1) {
              tmp = guildId;
              tmp2 = guildId;
              tmp3 = closure_1_2;
              obj = guildId(closure_1_2[11]);
              obj1 = { guildBoostSlots: null, guildId: null };
              items = [];
              items[0] = arg1;
              obj1.guildBoostSlots = items;
              obj1.guildId = guildId;
              openTransferModalResult = obj.openTransferModal(obj1);
            }
            return;
          }
        }
      }
      if (null == stateFromStores) {
        class B {
          constructor(arg0, arg1) {
            if (null != arg1) {
              tmp = guildId;
              tmp2 = guildId;
              tmp3 = closure_1_2;
              obj = guildId(closure_1_2[11]);
              obj1 = { guildBoostSlots: null, guildId: null };
              items = [];
              items[0] = arg1;
              obj1.guildBoostSlots = items;
              obj1.guildId = guildId;
              openTransferModalResult = obj.openTransferModal(obj1);
            }
            return;
          }
        }
      } else {
        class B {
          constructor(arg0, arg1) {
            if (null != arg1) {
              tmp = guildId;
              tmp2 = guildId;
              tmp3 = closure_1_2;
              obj = guildId(closure_1_2[11]);
              obj1 = { guildBoostSlots: null, guildId: null };
              items = [];
              items[0] = arg1;
              obj1.guildBoostSlots = items;
              obj1.guildId = guildId;
              openTransferModalResult = obj.openTransferModal(obj1);
            }
            return;
          }
        }
        class E {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        tmp23[0] = stateFromStores;
        tmp23[1] = tmp18;
        tmp23[2] = AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR;
        tmp23[3] = fractionalState.fractionalState;
        tmp23[4] = tmp20;
        tmp23[5] = tmp17;
        tmp2 = <tmp13 {...tmp23} />;
        fractionalState = fractionalState.fractionalState;
        cResult[11] = fractionalState;
        cResult[12] = stateFromStores;
        cResult[13] = tmp17;
        cResult[14] = tmp18;
        cResult[15] = tmp2;
      }
      const tmpResult4 = guildId(504);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      let items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj = guildId(504);
      const tmp = guildId;
      const items1 = [GuildBoostSlotStore];
      const stateFromStores1 = guildId(504).useStateFromStores(items1, () => boostSlots.boostSlots);
      let obj2 = guildId(504);
      const tmp5 = stateFromStores1;
      const tmp6 = stateFromStores1(6898)({ forceFetch: true });
      const items2 = [UserStore];
      const stateFromStores2 = guildId(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
      if (null != stateFromStores2) {
        let UNSPECIFIED = stateFromStores2.premiumGroupRole;
      } else {
        UNSPECIFIED = tmp(1385).PremiumSubscriptionGroupRole.UNSPECIFIED;
      }
      const items3 = [stateFromStores1];
      const memo = noop.useMemo(() => {
        const values = Object.values(stateFromStores1);
        return values.find((isAvailable) => isAvailable.isAvailable());
      }, items3);
      let tmp10 = null;
      if (null != stateFromStores) {
        const obj4 = {
          guild: stateFromStores,
          previousGuildSubscriptionSlot: memo,
          analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
          fractionalPremiumState: tmp6.fractionalState,
          onAvailableSlotPress: tmp9,
          premiumGroupRole: UNSPECIFIED,
        };
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
