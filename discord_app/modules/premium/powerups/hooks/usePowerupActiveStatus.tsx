// discord_app/modules/premium/powerups/hooks/usePowerupActiveStatus.tsx
import closure_2 from "../../../../stores/GuildStore.tsx";
import closure_3 from "../GuildPowerupsStore.tsx";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import { GAME_SERVER_POWERUP_SKU_ID as closure_9 } from "../../../game_server/GameServerConstants.tsx";

const require = arg1;
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: c4, PowerupActiveStatusType: c5, POWERUPS_INCLUDED_IN_LEVEL: closure_6, BOOSTING_TIER_TO_LEVEL_SKU_ID: error } = BoostedGuildTiers);
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

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
  const mapped = items.map((skuId) => {
    if (skuId.skuId === closure_1_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(closure_1_8.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = closure_1_5.POWERUP_ACTIVATED;
        }
        let obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
        obj[0] = INACTIVE;
        obj[1] = skuId;
      }
      INACTIVE = closure_1_5.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == closure_1_6[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "accessible" };
            } else {
              let tmp4;
              if (null != closure_1_7[tmp22]) {
                const unlockedPowerups = tmp20.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != closure_1_7[tmp22]) {
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
            hasItem1 = closure_1_4.has(skuId.skuId);
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
          obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
          obj[0] = closure_1_5.INACTIVE;
          obj[1] = skuId;
          if (isActiveFromLevel) {
            obj1 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj1[0] = tmp11.LEVEL_ACTIVATED;
            obj1[1] = skuId;
            obj1[2] = levelEntitlement;
            obj1[3] = levelPowerup;
            obj = obj1;
          } else if (hasItem1) {
            const obj2 = { type: null, powerup: null, sourceEntitlement: "Array", sourcePowerup: true };
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
    obj = { type: null, sourceEntitlement: "Array", sourcePowerup: "accessible" };
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
  return powerups.map((skuId) => {
    if (skuId.skuId === closure_1_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(closure_1_8.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = closure_1_5.POWERUP_ACTIVATED;
        }
        let obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
        obj[0] = INACTIVE;
        obj[1] = skuId;
      }
      INACTIVE = closure_1_5.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == closure_1_6[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "accessible" };
            } else {
              let tmp4;
              if (null != closure_1_7[tmp22]) {
                const unlockedPowerups = tmp20.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != closure_1_7[tmp22]) {
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
            hasItem1 = closure_1_4.has(skuId.skuId);
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
          obj = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
          obj[0] = closure_1_5.INACTIVE;
          obj[1] = skuId;
          if (isActiveFromLevel) {
            obj1 = { type: null, powerup: null, sourceEntitlement: null, sourcePowerup: null };
            obj1[0] = tmp11.LEVEL_ACTIVATED;
            obj1[1] = skuId;
            obj1[2] = levelEntitlement;
            obj1[3] = levelPowerup;
            obj = obj1;
          } else if (hasItem1) {
            const obj2 = { type: null, powerup: null, sourceEntitlement: "Array", sourcePowerup: true };
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