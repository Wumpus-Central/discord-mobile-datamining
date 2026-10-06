// === Module 12247: useMultiPerkStatusValues ===

// Module 12247 (useMultiPerkStatusValues)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4774 */;
import usePowerupActiveStatus from "usePowerupActiveStatus" /* 12174 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let intl;
  let powerups;
  let tmp4;
  const obj = react;
  const cResult = obj.c(25);
  ({ powerups, guildId } = arg0);
  const obj2 = usePowerupActiveStatus;
  const powerupsActiveStatuses = obj2.usePowerupsActiveStatuses(guildId, powerups);
  if (cResult[0] !== powerupsActiveStatuses) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(type) {
        return type.type !== constants.INACTIVE;
      };
      let num = 2;
      cResult[2] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const someResult = powerupsActiveStatuses.some(tmp6);
    let num2 = 0;
    cResult[0] = powerupsActiveStatuses;
    cResult[1] = someResult;
    tmp4 = someResult;
  } else {
    tmp4 = cResult[1];
  }
  if (powerups.length <= 0) {
    return null;
  } else {
    let tmp8;
    let tmp13;
    let tmp18;
    if (cResult[3] !== powerupsActiveStatuses) {
      let tmp10;
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(arg0, sourceEntitlement) {
          sourceEntitlement = sourceEntitlement.sourceEntitlement;
          let ends_at;
          if (sourceEntitlement != null) {
            ends_at = sourceEntitlement.ends_at;
          }
          let tmp2 = arg0;
          if (null != ends_at) {
            let tmp3;
            if (null == arg0) {
              tmp3 = ends_at;
            } else {
              tmp3 = arg0;
            }
            tmp2 = tmp3;
          }
          return tmp2;
        };
        cResult[5] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      const reduced = powerupsActiveStatuses.reduce(tmp10, undefined);
      cResult[3] = powerupsActiveStatuses;
      cResult[4] = reduced;
      tmp8 = reduced;
    } else {
      tmp8 = cResult[4];
    }
    if (null != tmp8) {
      let tmp17;
      if (cResult[6] !== tmp8) {
        const obj3 = { type: "expiring", expiringAt: tmp8 };
        cResult[6] = tmp8;
        cResult[7] = obj3;
        tmp17 = obj3;
      } else {
        tmp17 = cResult[7];
      }
      tmp13 = tmp17;
    } else if (tmp4) {
      let tmp15;
      const _Symbol3 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { type: "active", statusText: intl.string(_modDef2553.FFLkmx) };
        intl = intl2.intl;
        cResult[8] = obj4;
        tmp15 = obj4;
      } else {
        tmp15 = cResult[8];
      }
      tmp13 = tmp15;
    }
    if (cResult[9] !== powerupsActiveStatuses) {
      let tmp20;
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function x(arg0, type) {
          let sum = arg0;
          if (type.type === constants.POWERUP_ACTIVATED) {
            sum = arg0 + type.powerup.cost;
          }
          return sum;
        };
        cResult[11] = fn3;
        tmp20 = fn3;
      } else {
        tmp20 = cResult[11];
      }
      const reduced1 = powerupsActiveStatuses.reduce(tmp20, 0);
      cResult[9] = powerupsActiveStatuses;
      cResult[10] = reduced1;
      tmp18 = reduced1;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[12] !== powerupsActiveStatuses) {
      const _Symbol5 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0, powerup) {
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
          }
        }
        cResult[14] = E;
      } else {
        class E {
          constructor(arg0, powerup) {
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
          }
        }
      }
      const reduce = powerupsActiveStatuses.reduce;
      if (powerupsActiveStatuses[0] != null) {
        class E {
          constructor(arg0, powerup) {
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
          }
        }
        if (tmp26 != null) {
          class E {
            constructor(arg0, powerup) {
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
            }
          }
        }
      }
      if (undefined == null) {
        class E {
          constructor(arg0, powerup) {
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
          }
        }
      }
      const reduced2 = reduce(E, tmp25);
      cResult[12] = powerupsActiveStatuses;
      cResult[13] = reduced2;
    } else {
      class E {
        constructor(arg0, powerup) {
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
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0, powerup) {
          powerup = powerup.powerup;
          let num;
          if (powerup != null) {
            num = powerup.cost;
          }
          if (num == null) {
            num = 0;
          }
          return arg0 + num;
        }
      }
      cResult[15] = P;
    } else {
      class P {
        constructor(arg0, powerup) {
          powerup = powerup.powerup;
          let num;
          if (powerup != null) {
            num = powerup.cost;
          }
          if (num == null) {
            num = 0;
          }
          return arg0 + num;
        }
      }
    }
    const reduced3 = powerupsActiveStatuses.reduce(P, 0);
    if (tmp4) {
      class P {
        constructor(arg0, powerup) {
          powerup = powerup.powerup;
          let num;
          if (powerup != null) {
            num = powerup.cost;
          }
          if (num == null) {
            num = 0;
          }
          return arg0 + num;
        }
      }
    }
    if (!tmp4) {
      class P {
        constructor(arg0, powerup) {
          powerup = powerup.powerup;
          let num;
          if (powerup != null) {
            num = powerup.cost;
          }
          if (num == null) {
            num = 0;
          }
          return arg0 + num;
        }
      }
      if (reduced3 > tmp22) {
        class P {
          constructor(arg0, powerup) {
            powerup = powerup.powerup;
            let num;
            if (powerup != null) {
              num = powerup.cost;
            }
            if (num == null) {
              num = 0;
            }
            return arg0 + num;
          }
        }
      }
    }
    if (cResult[16] === tmp18) {
      class P {
        constructor(arg0, powerup) {
          powerup = powerup.powerup;
          let num;
          if (powerup != null) {
            num = powerup.cost;
          }
          if (num == null) {
            num = 0;
          }
          return arg0 + num;
        }
      }
    }
    const obj5 = { isActive: tmp4, status: tmp13, cost: tmp22, costDecorator: undefined, expiringAt: tmp8, activeCost: tmp18, minCost: tmp22, totalCost: reduced3 };
    cResult[16] = tmp18;
    cResult[17] = tmp22;
    cResult[18] = undefined;
    cResult[19] = tmp8;
    cResult[20] = tmp4;
    cResult[21] = tmp22;
    cResult[22] = tmp13;
    cResult[23] = reduced3;
    cResult[24] = obj5;
  }
}) : ((powerups) => {
  let intl;
  let str;
  powerups = powerups.powerups;
  const guildId = powerups.guildId;
  const obj = usePowerupActiveStatus;
  const powerupsActiveStatuses = obj.usePowerupsActiveStatuses(guildId, powerups);
  const someResult = powerupsActiveStatuses.some((type) => type.type !== constants.INACTIVE);
  if (powerups.length <= 0) {
    return null;
  } else {
    let tmp4;
    const reduced = powerupsActiveStatuses.reduce((acc, sourceEntitlement) => {
      sourceEntitlement = sourceEntitlement.sourceEntitlement;
      let ends_at;
      if (sourceEntitlement != null) {
        ends_at = sourceEntitlement.ends_at;
      }
      let tmp2 = acc;
      if (null != ends_at) {
        let tmp3;
        if (null == acc) {
          tmp3 = ends_at;
        } else {
          tmp3 = acc;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }, undefined);
    if (null != reduced) {
      tmp4 = { type: "expiring", expiringAt: reduced };
      const obj2 = { type: "expiring", expiringAt: reduced };
    } else if (someResult) {
      const obj3 = { type: "active", statusText: intl.string(_modDef2553.FFLkmx) };
      intl = intl2.intl;
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
    const reduce = powerupsActiveStatuses.reduce;
    if (first != null) {
      let powerup = first.powerup;
      if (powerup != null) {
        num = powerup.cost;
      }
    }
    if (num == null) {
      num = 0;
    }
    const reduced2 = reduce((arg0, powerup) => {
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
    const obj4 = { isActive: someResult, status: tmp4, cost: tmp10, costDecorator: str, expiringAt: reduced, activeCost: reduced1, minCost: reduced2, totalCost: reduced3 };
    str = undefined;
    if (!someResult) {
      if (reduced3 > tmp10) {
        str = "+";
      }
    }
    return obj4;
  }
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx");

export default tmp2;