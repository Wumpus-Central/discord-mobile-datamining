// discord_app/modules/premium/powerups/hooks/usePowerupActiveStatus.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import BoostedGuildTiers from "BoostedGuildTiers";
import { GuildFeatures } from "ME";
import { GAME_SERVER_POWERUP_SKU_ID as closure_9 } from "str11";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: c4, PowerupActiveStatusType: c5, POWERUPS_INCLUDED_IN_LEVEL: closure_6, BOOSTING_TIER_TO_LEVEL_SKU_ID: error } = BoostedGuildTiers);
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default function usePowerupActiveStatus(arg0, arg1) {
  if (null == arg1) {
    let items = [];
  } else {
    items = [arg1];
  }
  const _require = arg0;
  let obj = _require(stateFromStores[5]);
  const items1 = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items1, () => guild.getGuild(closure_0));
  const items2 = [flag];
  createGuildRecordFromRust = _require(stateFromStores[5]).useStateFromStores(items2, () => flag.getStateForGuild(closure_0));
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
  const mapped = items.map((skuId) => {
    let isActiveFromLevel;
    let levelEntitlement;
    let levelPowerup;
    if (skuId.skuId === outer1_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(outer1_8.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = outer1_5.POWERUP_ACTIVATED;
        }
        let obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "T" };
        obj[0] = INACTIVE;
        obj[1] = skuId;
      }
      INACTIVE = outer1_5.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == outer1_6[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "accessible" };
            } else {
              let tmp4;
              if (null != outer1_7[tmp22]) {
                const unlockedPowerups = tmp20.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != outer1_7[tmp22]) {
                const allPowerups = tmp20.allPowerups;
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
              const tmp = tmp19.premiumTier >= tmp22;
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = outer1_4.has(skuId.skuId);
          }
          let tmp10;
          if (guild != null) {
            const unlockedPowerups2 = guild.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "T" };
          obj[0] = outer1_5.INACTIVE;
          obj[1] = skuId;
          if (isActiveFromLevel) {
            const obj1 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj1[0] = tmp11.LEVEL_ACTIVATED;
            obj1[1] = skuId;
            obj1[2] = levelEntitlement;
            obj1[3] = levelPowerup;
            obj = obj1;
          } else if (hasItem1) {
            const obj2 = { type: null, powerup: null, sourceEntitlement: "Array", sourcePowerup: "\u{1F9DB}\u{1F3FE}" };
            obj2[0] = tmp11.TIER_OVERRIDE_ACTIVATED;
            obj2[1] = skuId;
            obj2[3] = skuId;
            obj = obj2;
          } else if (null != tmp10) {
            const obj3 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj3[0] = tmp11.POWERUP_ACTIVATED;
            obj3[1] = skuId;
            obj3[2] = tmp10;
            obj3[3] = skuId;
            obj = obj3;
          }
          return obj;
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "accessible" };
    }
  });
  if (mapped.length <= 0) {
    obj = { type: null, sourceEntitlement: "Array", sourcePowerup: "marginTop" };
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
  const items = [createGuildRecordFromRust];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => guild.getGuild(closure_0));
  const obj = _require(stateFromStores[5]);
  const items1 = [flag];
  createGuildRecordFromRust = _require(stateFromStores[5]).useStateFromStores(items1, () => flag.getStateForGuild(closure_0));
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
  return powerups.map((skuId) => {
    let isActiveFromLevel;
    let levelEntitlement;
    let levelPowerup;
    if (skuId.skuId === outer1_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(outer1_8.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = outer1_5.POWERUP_ACTIVATED;
        }
        let obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "T" };
        obj[0] = INACTIVE;
        obj[1] = skuId;
      }
      INACTIVE = outer1_5.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == outer1_6[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "accessible" };
            } else {
              let tmp4;
              if (null != outer1_7[tmp22]) {
                const unlockedPowerups = tmp20.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != outer1_7[tmp22]) {
                const allPowerups = tmp20.allPowerups;
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
              const tmp = tmp19.premiumTier >= tmp22;
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = outer1_4.has(skuId.skuId);
          }
          let tmp10;
          if (guild != null) {
            const unlockedPowerups2 = guild.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "T" };
          obj[0] = outer1_5.INACTIVE;
          obj[1] = skuId;
          if (isActiveFromLevel) {
            const obj1 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj1[0] = tmp11.LEVEL_ACTIVATED;
            obj1[1] = skuId;
            obj1[2] = levelEntitlement;
            obj1[3] = levelPowerup;
            obj = obj1;
          } else if (hasItem1) {
            const obj2 = { type: null, powerup: null, sourceEntitlement: "Array", sourcePowerup: "\u{1F9DB}\u{1F3FE}" };
            obj2[0] = tmp11.TIER_OVERRIDE_ACTIVATED;
            obj2[1] = skuId;
            obj2[3] = skuId;
            obj = obj2;
          } else if (null != tmp10) {
            const obj3 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj3[0] = tmp11.POWERUP_ACTIVATED;
            obj3[1] = skuId;
            obj3[2] = tmp10;
            obj3[3] = skuId;
            obj = obj3;
          }
          return obj;
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "accessible" };
    }
  });
};