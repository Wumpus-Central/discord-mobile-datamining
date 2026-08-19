// === Module 11668: usePowerupActiveStatus ===

// Module 11668 (usePowerupActiveStatus)
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import calculateAppliedBoosts from "calculateAppliedBoosts" /* 4261 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4262 */;
import { GuildFeatures } from "ME" /* 676 */;
import { GAME_SERVER_POWERUP_SKU_ID as closure_9 } from "str11" /* 4263 */;

const require = fn;
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: c4, PowerupActiveStatusType: c5, POWERUPS_INCLUDED_IN_LEVEL: closure_6, BOOSTING_TIER_TO_LEVEL_SKU_ID: error } = BoostedGuildTiers);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default function usePowerupActiveStatus(arg0, arg1) {
  if (null == arg1) {
    let items = [];
  } else {
    items = [arg1];
  }
  const _require = arg0;
  let obj = _require(stateFromStores[5]);
  const items1 = [closure_2];
  stateFromStores = obj.useStateFromStores(items1, () => guild.getGuild(closure_0));
  const items2 = [flag];
  closure_2 = _require(stateFromStores[5]).useStateFromStores(items2, () => flag.getStateForGuild(closure_0));
  flag = undefined;
  if (stateFromStores != null) {
    let features = stateFromStores.features;
    if (features != null) {
      flag = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
  }
  if (flag == null) {
    flag = false;
  }
  const mapped = items.map((item, index) => {
    if (item.skuId === closure_1_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = closure_1_5.POWERUP_ACTIVATED;
        }
        let obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
        obj[0] = INACTIVE;
        obj[1] = item;
      }
      INACTIVE = closure_1_5.INACTIVE;
    } else {
      if (null != item) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == closure_1_6[item.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "HermesInternal" };
            } else {
              let tmp4;
              if (null != closure_1_7[tmp22]) {
                const unlockedPowerups = guild.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != closure_1_7[tmp22]) {
                const allPowerups = guild.allPowerups;
                let tmp7;
                if (allPowerups != null) {
                  tmp7 = allPowerups[tmp3];
                }
                tmp6 = tmp7;
              }
              obj = { isActiveFromLevel: null, levelEntitlement: null, levelPowerup: null };
              obj[0] = tmp19.premiumTier >= tmp22;
              obj[1] = tmp4;
              obj[2] = tmp6;
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = closure_1_4.has(item.skuId);
          }
          let tmp10;
          if (guild != null) {
            const unlockedPowerups2 = guild.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[item.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
          obj[0] = closure_1_5.INACTIVE;
          obj[1] = item;
          if (isActiveFromLevel) {
            obj1 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj1[0] = closure_1_5.LEVEL_ACTIVATED;
            obj1[1] = item;
            obj1[2] = levelEntitlement;
            obj1[3] = levelPowerup;
            obj = obj1;
          } else if (hasItem1) {
            const obj2 = { type: null, powerup: null, sourceEntitlement: "Array", sourcePowerup: true };
            obj2[0] = closure_1_5.TIER_OVERRIDE_ACTIVATED;
            obj2[1] = item;
            obj2[3] = item;
            obj = obj2;
          } else if (null != tmp10) {
            const obj3 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj3[0] = closure_1_5.POWERUP_ACTIVATED;
            obj3[1] = item;
            obj3[2] = tmp10;
            obj3[3] = item;
            obj = obj3;
          }
          return obj;
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "HermesInternal" };
    }
  });
  if (mapped.length <= 0) {
    obj = { type: null, sourceEntitlement: "Array", sourcePowerup: "text" };
    obj[0] = constants.INACTIVE;
    let first = obj;
  } else {
    first = mapped[0];
  }
  return first;
};
export const isPowerupActiveStatusActive = function isPowerupActiveStatusActive(type) {
  return type.type !== constants.INACTIVE;
};
export const usePowerupsActiveStatuses = function usePowerupsActiveStatuses(guildId, powerups) {
  const _require = guildId;
  const items = [closure_2];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => guild.getGuild(closure_0));
  const obj = _require(stateFromStores[5]);
  const items1 = [flag];
  closure_2 = _require(stateFromStores[5]).useStateFromStores(items1, () => flag.getStateForGuild(closure_0));
  flag = undefined;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    if (features != null) {
      flag = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
  }
  if (flag == null) {
    flag = false;
  }
  return powerups.map((item, index) => {
    if (item.skuId === closure_1_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = closure_1_5.POWERUP_ACTIVATED;
        }
        let obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
        obj[0] = INACTIVE;
        obj[1] = item;
      }
      INACTIVE = closure_1_5.INACTIVE;
    } else {
      if (null != item) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == closure_1_6[item.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "HermesInternal" };
            } else {
              let tmp4;
              if (null != closure_1_7[tmp22]) {
                const unlockedPowerups = guild.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != closure_1_7[tmp22]) {
                const allPowerups = guild.allPowerups;
                let tmp7;
                if (allPowerups != null) {
                  tmp7 = allPowerups[tmp3];
                }
                tmp6 = tmp7;
              }
              obj = { isActiveFromLevel: null, levelEntitlement: null, levelPowerup: null };
              obj[0] = tmp19.premiumTier >= tmp22;
              obj[1] = tmp4;
              obj[2] = tmp6;
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = closure_1_4.has(item.skuId);
          }
          let tmp10;
          if (guild != null) {
            const unlockedPowerups2 = guild.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[item.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
          obj[0] = closure_1_5.INACTIVE;
          obj[1] = item;
          if (isActiveFromLevel) {
            obj1 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj1[0] = closure_1_5.LEVEL_ACTIVATED;
            obj1[1] = item;
            obj1[2] = levelEntitlement;
            obj1[3] = levelPowerup;
            obj = obj1;
          } else if (hasItem1) {
            const obj2 = { type: null, powerup: null, sourceEntitlement: "Array", sourcePowerup: true };
            obj2[0] = closure_1_5.TIER_OVERRIDE_ACTIVATED;
            obj2[1] = item;
            obj2[3] = item;
            obj = obj2;
          } else if (null != tmp10) {
            const obj3 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj3[0] = closure_1_5.POWERUP_ACTIVATED;
            obj3[1] = item;
            obj3[2] = tmp10;
            obj3[3] = item;
            obj = obj3;
          }
          return obj;
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "HermesInternal" };
    }
  });
};