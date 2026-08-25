// === Module 12131: useMultiPerkStatusValues ===

// Module 12131 (useMultiPerkStatusValues)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4267 */;
import usePowerupActiveStatus from "usePowerupActiveStatus" /* 12059 */;

const PowerupActiveStatusType = BoostedGuildTiers.PowerupActiveStatusType;
const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx");

export default function useMultiPerkStatusValues(powerups) {
  powerups = powerups.powerups;
  let obj = usePowerupActiveStatus;
  const powerupsActiveStatuses = obj.usePowerupsActiveStatuses(powerups.guildId, powerups);
  const someResult = powerupsActiveStatuses.some((type) => type.type !== constants.INACTIVE);
  if (powerups.length <= 0) {
    return null;
  } else {
    const reduced = powerupsActiveStatuses.reduce((arg0, sourceEntitlement) => {
      sourceEntitlement = sourceEntitlement.sourceEntitlement;
      let ends_at;
      if (sourceEntitlement != null) {
        ends_at = sourceEntitlement.ends_at;
      }
      let tmp2 = arg0;
      if (null != ends_at) {
        if (null == arg0) {
          let tmp3 = ends_at;
        } else {
          tmp3 = arg0;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }, undefined);
    if (null != reduced) {
      obj = { type: "expiring", expiringAt: null };
      obj[1] = reduced;
      let tmp4 = obj;
    } else if (someResult) {
      obj = { type: "active", statusText: null };
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(messagesProxyDefault.FFLkmx);
      tmp4 = obj;
    }
    const reduced1 = powerupsActiveStatuses.reduce((arg0, type) => {
      let sum = arg0;
      if (type.type === constants.POWERUP_ACTIVATED) {
        sum = arg0 + type.powerup.cost;
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
    const reduced2 = powerupsActiveStatuses.reduce((arg0, powerup) => {
      powerup = powerup.powerup;
      let num;
      if (powerup != null) {
        num = powerup.cost;
      }
      if (num == null) {
        num = 0;
      }
      let tmp = arg0;
      if (arg0 >= num) {
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
    const reduced3 = powerupsActiveStatuses.reduce((arg0, powerup) => {
      powerup = powerup.powerup;
      let num;
      if (powerup != null) {
        num = powerup.cost;
      }
      if (num == null) {
        num = 0;
      }
      return arg0 + num;
    }, 0);
    let tmp10 = reduced2;
    if (someResult) {
      tmp10 = reduced1;
    }
    obj1 = { isActive: null, status: null, cost: null, costDecorator: null, expiringAt: null, activeCost: null, minCost: null, totalCost: null };
    obj1[0] = someResult;
    obj1[1] = tmp4;
    obj1[2] = tmp10;
    let str;
    if (!someResult) {
      if (reduced3 > tmp10) {
        str = "+";
      }
    }
    obj1[3] = str;
    obj1[4] = reduced;
    obj1[5] = reduced1;
    obj1[6] = reduced2;
    obj1[7] = reduced3;
    return obj1;
  }
  let tmp = require;
};