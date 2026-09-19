// === Module 12825: useMultiPerkStatusValues ===

// Module 12825 (useMultiPerkStatusValues)
import util from "util" /* 1115 */;
import _modDef2514 from "module_2514" /* 2514 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4645 */;
import usePowerupActiveStatus from "usePowerupActiveStatus" /* 12752 */;
import size from "module_2" /* 2 */;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx");

export default function useMultiPerkStatusValues(powerups) {
  powerups = powerups.powerups;
  const powerupsActiveStatuses = usePowerupActiveStatus.usePowerupsActiveStatuses(powerups.guildId, powerups);
  const someResult = powerupsActiveStatuses.some((type) => type.type !== constants.INACTIVE);
  if (powerups.length <= 0) {
    return null;
  } else {
    const reduced = powerupsActiveStatuses.reduce((acc, sourceEntitlement) => {
      sourceEntitlement = sourceEntitlement.sourceEntitlement;
      let ends_at;
      if (sourceEntitlement != null) {
        ends_at = sourceEntitlement.ends_at;
      }
      let tmp2 = acc;
      if (null != ends_at) {
        if (null == acc) {
          let tmp3 = ends_at;
        } else {
          tmp3 = acc;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }, undefined);
    if (null != reduced) {
      const obj2 = { type: "expiring", expiringAt: reduced };
      let tmp4 = obj2;
    } else if (someResult) {
      const obj3 = { type: "active", statusText: null };
      const intl = util.intl;
      obj3.statusText = intl.string(_modDef2514.FFLkmx);
      tmp4 = obj3;
    }
    const reduced1 = powerupsActiveStatuses.reduce((acc, type) => {
      let sum = acc;
      if (type.type === constants.POWERUP_ACTIVATED) {
        sum = acc + type.powerup.cost;
      }
      return sum;
    }, 0);
    const first = powerupsActiveStatuses[0];
    let num;
    if (first != null) {
      let powerup = first.powerup;
      if (powerup != null) {
        num = powerup.cost;
      }
    }
    if (num == null) {
      num = 0;
    }
    const reduced2 = powerupsActiveStatuses.reduce((acc, powerup) => {
      powerup = powerup.powerup;
      let num;
      if (powerup != null) {
        num = powerup.cost;
      }
      if (num == null) {
        num = 0;
      }
      let tmp = acc;
      if (acc >= num) {
        let num2;
        if (powerup != null) {
          num2 = powerup.cost;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp = num2;
      }
      return tmp;
    }, num);
    const reduced3 = powerupsActiveStatuses.reduce((acc, powerup) => {
      powerup = powerup.powerup;
      let num;
      if (powerup != null) {
        num = powerup.cost;
      }
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    let tmp10 = reduced2;
    if (someResult) {
      tmp10 = reduced1;
    }
    const obj4 = { isActive: someResult, status: tmp4, cost: tmp10, costDecorator: null, expiringAt: null, activeCost: null, minCost: null, totalCost: null };
    let str;
    if (!someResult) {
      if (reduced3 > tmp10) {
        str = "+";
      }
    }
    obj4.costDecorator = str;
    obj4.expiringAt = reduced;
    obj4.activeCost = reduced1;
    obj4.minCost = reduced2;
    obj4.totalCost = reduced3;
    return obj4;
  }
};