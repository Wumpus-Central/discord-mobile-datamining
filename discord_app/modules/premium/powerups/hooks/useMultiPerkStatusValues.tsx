// discord_app/modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import usePowerupActiveStatus from "usePowerupActiveStatus.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(25);
      ({ powerups, guildId } = arg0);
      const powerupsActiveStatuses = usePowerupActiveStatus.usePowerupsActiveStatuses(guildId, powerups);
      if (cResult[0] !== powerupsActiveStatuses) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(type) {
            return type.type !== constants.INACTIVE;
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const someResult = powerupsActiveStatuses.some(tmp6);
        cResult[0] = powerupsActiveStatuses;
        cResult[1] = someResult;
      } else if (powerups.length <= 0) {
        return null;
      } else if (cResult[3] !== powerupsActiveStatuses) {
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
              if (null == arg0) {
                let tmp3 = ends_at;
              } else {
                tmp3 = arg0;
              }
              tmp2 = tmp3;
            }
            return tmp2;
          };
          cResult[5] = fn2;
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[5];
        }
        const reduced = powerupsActiveStatuses.reduce(tmp11, undefined);
        cResult[3] = powerupsActiveStatuses;
        cResult[4] = reduced;
      } else if (null != cResult[4]) {
        if (cResult[6] !== tmp9) {
          const obj3 = { type: "expiring", expiringAt: tmp9 };
          cResult[6] = tmp9;
          cResult[7] = obj3;
        }
      } else {
        if (tmp4) {
          const _Symbol3 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { type: "active", statusText: null };
            const intl = util.intl;
            obj4.statusText = intl.string(_modDef2553.FFLkmx);
            cResult[8] = obj4;
          }
        }
        if (cResult[9] !== powerupsActiveStatuses) {
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
            let tmp23 = fn3;
          } else {
            tmp23 = cResult[11];
          }
          const reduced1 = powerupsActiveStatuses.reduce(tmp23, 0);
          cResult[9] = powerupsActiveStatuses;
          cResult[10] = reduced1;
        } else {
          if (cResult[12] !== powerupsActiveStatuses) {
            const _Symbol5 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor(arg0, arg1) {
                  powerup = arg1.powerup;
                  num = undefined;
                  if (powerup != null) {
                    num = powerup.cost;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  tmp = arg0;
                  if (arg0 >= num) {
                    num2 = undefined;
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
                constructor(arg0, arg1) {
                  powerup = arg1.powerup;
                  num = undefined;
                  if (powerup != null) {
                    num = powerup.cost;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  tmp = arg0;
                  if (arg0 >= num) {
                    num2 = undefined;
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
            if (powerupsActiveStatuses[0] != null) {
              class E {
                constructor(arg0, arg1) {
                  powerup = arg1.powerup;
                  num = undefined;
                  if (powerup != null) {
                    num = powerup.cost;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  tmp = arg0;
                  if (arg0 >= num) {
                    num2 = undefined;
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
              if (tmp30 != null) {
                class E {
                  constructor(arg0, arg1) {
                    powerup = arg1.powerup;
                    num = undefined;
                    if (powerup != null) {
                      num = powerup.cost;
                    }
                    if (num == null) {
                      num = 0;
                    }
                    tmp = arg0;
                    if (arg0 >= num) {
                      num2 = undefined;
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
                constructor(arg0, arg1) {
                  powerup = arg1.powerup;
                  num = undefined;
                  if (powerup != null) {
                    num = powerup.cost;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  tmp = arg0;
                  if (arg0 >= num) {
                    num2 = undefined;
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
            const reduced2 = powerupsActiveStatuses.reduce(E, tmp29);
            cResult[12] = powerupsActiveStatuses;
            cResult[13] = reduced2;
          } else {
            class E {
              constructor(arg0, arg1) {
                powerup = arg1.powerup;
                num = undefined;
                if (powerup != null) {
                  num = powerup.cost;
                }
                if (num == null) {
                  num = 0;
                }
                tmp = arg0;
                if (arg0 >= num) {
                  num2 = undefined;
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
              constructor(arg0, arg1) {
                powerup = arg1.powerup;
                num = undefined;
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
              constructor(arg0, arg1) {
                powerup = arg1.powerup;
                num = undefined;
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
              constructor(arg0, arg1) {
                powerup = arg1.powerup;
                num = undefined;
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
              constructor(arg0, arg1) {
                powerup = arg1.powerup;
                num = undefined;
                if (powerup != null) {
                  num = powerup.cost;
                }
                if (num == null) {
                  num = 0;
                }
                return arg0 + num;
              }
            }
            if (reduced3 > tmp35) {
              class P {
                constructor(arg0, arg1) {
                  powerup = arg1.powerup;
                  num = undefined;
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
          if (cResult[16] === cResult[10]) {
            class P {
              constructor(arg0, arg1) {
                powerup = arg1.powerup;
                num = undefined;
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
          const obj5 = {
            isActive: tmp4,
            status: tmp15,
            cost: tmp26,
            costDecorator: undefined,
            expiringAt: tmp9,
            activeCost: cResult[10],
            minCost: tmp26,
            totalCost: reduced3,
          };
          cResult[16] = cResult[10];
          cResult[17] = tmp26;
          cResult[18] = undefined;
          cResult[19] = tmp9;
          cResult[20] = tmp4;
          cResult[21] = tmp26;
          cResult[22] = tmp15;
          cResult[23] = reduced3;
          cResult[24] = obj5;
        }
      }
    }
  : (powerups) => {
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
          obj3.statusText = intl.string(_modDef2553.FFLkmx);
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
        const obj4 = {
          isActive: someResult,
          status: tmp4,
          cost: tmp10,
          costDecorator: null,
          expiringAt: null,
          activeCost: null,
          minCost: null,
          totalCost: null,
        };
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
