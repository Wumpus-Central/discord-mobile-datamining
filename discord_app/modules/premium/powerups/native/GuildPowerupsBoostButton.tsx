// === Module 12323: GuildPowerupsBoostButton ===

// Module 12323 (GuildPowerupsBoostButton)
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7108 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7118 */;

const GuildBoostingSubscribeButtonDefault = tmp13(7117);
const require = fn;
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBoostButton(guildId) {
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
    class S {
      constructor() {
        return closure_4.getGuild(guildId);
      }
    }
    cResult[10] = tmp21;
    class E {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
  } else {
    class S {
      constructor() {
        return closure_4.getGuild(guildId);
      }
    }
  }
  if (null == stateFromStores) {
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
    class E {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    tmp24[0] = stateFromStores;
    tmp24[1] = tmp18;
    tmp24[2] = AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR;
    tmp24[3] = fractionalState.fractionalState;
    tmp24[4] = tmp20;
    tmp24[5] = tmp17;
    tmp2 = <tmp13 {...tmp24} />;
    fractionalState = fractionalState.fractionalState;
    cResult[11] = fractionalState;
    cResult[12] = stateFromStores;
    cResult[13] = tmp17;
    cResult[14] = tmp18;
    cResult[15] = tmp2;
  }
  const tmpResult4 = guildId(504);
}) : (function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  const tmp = guildId;
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => boostSlots.boostSlots);
  let obj2 = guildId(504);
  const tmp5 = stateFromStores1;
  const tmp6 = stateFromStores1(7108)({ forceFetch: true });
  const items2 = [UserStore];
  const stateFromStores2 = guildId(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1398).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = noop.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj4 = { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp6.fractionalState, onAvailableSlotPress: tmp9, premiumGroupRole: UNSPECIFIED };
    tmp10 = jsx(tmp5(7117), { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp6.fractionalState, onAvailableSlotPress: tmp9, premiumGroupRole: UNSPECIFIED });
  }
  return tmp10;
});