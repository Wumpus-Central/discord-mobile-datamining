// discord_app/modules/premium/powerups/hooks/usePowerupActiveStatus.tsx
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildPowerupsConstants = fn(4718);
({
  GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: closure_4,
  PowerupActiveStatusType: hasOwnProperty,
  POWERUPS_INCLUDED_IN_LEVEL: metroRequire,
  BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_7,
} = GuildPowerupsConstants);
const GuildFeatures = fn(1074).GuildFeatures;
let closure_9 = fn(4719).GAME_SERVER_POWERUP_SKU_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default function usePowerupActiveStatus(arg0, arg1) {
  if (null == arg1) {
    let items = [];
  } else {
    items = [arg1];
  }
  _require = arg0;
  const items1 = [unlockedPowerups];
  stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(closure_0));
  let obj = require("initialize");
  const items2 = [flag];
  unlockedPowerups = require("initialize").useStateFromStores(items2, () =>
    GuildPowerupsStore.getStateForGuild(closure_0),
  );
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
    if (skuId.skuId === closure_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = constants.POWERUP_ACTIVATED;
        }
        const obj2 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
      }
      INACTIVE = constants.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != unlockedPowerups) {
            if (null == timestampProducer[skuId.skuId]) {
              let obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "padding" };
            } else {
              let tmp4;
              if (null != React5[tmp22]) {
                unlockedPowerups = tmp20.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != React5[tmp22]) {
                const allPowerups = tmp20.allPowerups;
                let tmp7;
                if (allPowerups != null) {
                  tmp7 = allPowerups[tmp3];
                }
                tmp6 = tmp7;
              }
              obj = { isActiveFromLevel: tmp19.premiumTier >= tmp22, levelEntitlement: tmp4, levelPowerup: tmp6 };
              const tmp = tmp19.premiumTier >= tmp22;
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = set.has(skuId.skuId);
          }
          let tmp10;
          if (unlockedPowerups != null) {
            const unlockedPowerups2 = unlockedPowerups.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          let obj3 = {
            type: constants.INACTIVE,
            powerup: skuId,
            sourceEntitlement: "r",
            sourcePowerup: "HermesInternal",
          };
          if (isActiveFromLevel) {
            const obj4 = {
              type: constants.LEVEL_ACTIVATED,
              powerup: skuId,
              sourceEntitlement: levelEntitlement,
              sourcePowerup: levelPowerup,
            };
            obj3 = obj4;
          } else if (hasItem1) {
            const obj5 = {
              type: constants.TIER_OVERRIDE_ACTIVATED,
              powerup: skuId,
              sourceEntitlement: "Array",
              sourcePowerup: skuId,
            };
            obj3 = obj5;
          } else if (null != tmp10) {
            const obj6 = {
              type: constants.POWERUP_ACTIVATED,
              powerup: skuId,
              sourceEntitlement: tmp10,
              sourcePowerup: skuId,
            };
            obj3 = obj6;
          }
          return obj3;
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "padding" };
    }
  });
  if (mapped.length <= 0) {
    let obj3 = { type: constants.INACTIVE, sourceEntitlement: "Array", sourcePowerup: "paddingHorizontal" };
    let first = obj3;
  } else {
    first = mapped[0];
  }
  return first;
}
export const isPowerupActiveStatusActive = function isPowerupActiveStatusActive(type) {
  return type.type !== constants.INACTIVE;
};
export const usePowerupsActiveStatuses = function usePowerupsActiveStatuses(guildId, powerups) {
  _require = guildId;
  const items = [closure_2];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const obj = require("initialize");
  const items1 = [flag];
  closure_2 = require("initialize").useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
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
    if (skuId.skuId === closure_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        if (hasItem) {
          let INACTIVE = constants.POWERUP_ACTIVATED;
        }
        const obj2 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
      }
      INACTIVE = constants.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != unlockedPowerups) {
            if (null == timestampProducer[skuId.skuId]) {
              let obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "padding" };
            } else {
              let tmp4;
              if (null != React5[tmp22]) {
                unlockedPowerups = tmp20.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != React5[tmp22]) {
                const allPowerups = tmp20.allPowerups;
                let tmp7;
                if (allPowerups != null) {
                  tmp7 = allPowerups[tmp3];
                }
                tmp6 = tmp7;
              }
              obj = { isActiveFromLevel: tmp19.premiumTier >= tmp22, levelEntitlement: tmp4, levelPowerup: tmp6 };
              const tmp = tmp19.premiumTier >= tmp22;
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = set.has(skuId.skuId);
          }
          let tmp10;
          if (unlockedPowerups != null) {
            const unlockedPowerups2 = unlockedPowerups.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          let obj3 = {
            type: constants.INACTIVE,
            powerup: skuId,
            sourceEntitlement: "r",
            sourcePowerup: "HermesInternal",
          };
          if (isActiveFromLevel) {
            const obj4 = {
              type: constants.LEVEL_ACTIVATED,
              powerup: skuId,
              sourceEntitlement: levelEntitlement,
              sourcePowerup: levelPowerup,
            };
            obj3 = obj4;
          } else if (hasItem1) {
            const obj5 = {
              type: constants.TIER_OVERRIDE_ACTIVATED,
              powerup: skuId,
              sourceEntitlement: "Array",
              sourcePowerup: skuId,
            };
            obj3 = obj5;
          } else if (null != tmp10) {
            const obj6 = {
              type: constants.POWERUP_ACTIVATED,
              powerup: skuId,
              sourceEntitlement: tmp10,
              sourcePowerup: skuId,
            };
            obj3 = obj6;
          }
          return obj3;
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "padding" };
    }
  });
};
