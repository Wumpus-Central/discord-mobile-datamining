// discord_app/modules/guild_automod/AutomodStore.tsx
import _mod4690 from "../../../_runtime/metro/04690__.js";
import SystemRulesUtils from "SystemRulesUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const AutomodTriggerType = fn(11473).AutomodTriggerType;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
let closure_7 = {};
const identity = fn(1266);
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  let obj = {
    rules: {},
    fetching: false,
    error: null,
    updateRule(guildId) {
      guildId = guildId.guildId;
      ({ id: closure_2, triggerType } = guildId);
      const rules = guildId().rules;
      let obj = rules[guildId];
      if (obj == null) {
        obj = {};
      }
      let items = obj[triggerType];
      if (items == null) {
        items = [];
      }
      const found = items.filter((id) => {
        const isDefaultRuleIdResult = SystemRulesUtils.isDefaultRuleId(id.id);
        let tmp2 = !isDefaultRuleIdResult;
        if (isDefaultRuleIdResult) {
          tmp2 = id.triggerType !== triggerType;
        }
        return tmp2;
      });
      if (someResult) {
        let mapped = found.map((id) => {
          let tmp = id;
          if (id.id === closure_1_2) {
            tmp = closure_0;
          }
          return tmp;
        });
      } else {
        mapped = [];
        mapped[HermesBuiltin.arraySpread(found, 0)] = guildId;
      }
      someResult = items.some((id) => id.id === closure_1_2);
      guildId(1271).batchUpdates(() => {
        obj = { rules: null, error: null };
        const obj2 = {};
        const merged = Object.assign(rules);
        const obj3 = {};
        const merged1 = Object.assign(obj);
        obj3[triggerType] = mapped;
        obj2[guildId] = obj3;
        obj.rules = obj2;
        guildId(obj);
      });
    },
    removeRule(arg0, arg1) {
      closure_0 = arg0;
      dependencyMap = arg1;
      const rules = dependencyMap().rules;
      closure_3 = tmp;
      const keys = Object.keys(tmp);
      closure_4 = keys.reduce((acc, item) => {
        const NumberResult = Number(item);
        let items = closure_3[NumberResult];
        if (items == null) {
          items = [];
        }
        acc[NumberResult] = items.filter((id) => id.id !== closure_1_0);
        return acc;
      }, {});
      closure_0(1271).batchUpdates(() => {
        const obj = { rules: null, error: null };
        const obj2 = {};
        const merged = Object.assign(rules);
        obj2[closure_1] = closure_4;
        obj.rules = obj2;
        closure_0(obj);
      });
    },
    syncRules: null,
  };
  closure_2 = asyncGeneratorStep(async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const error = tmp3;
            closure_2 = tmp7;
            closure_130_0 = closure_0;
            closure_130_1 = undefined;
            let rules;
            closure_130_3 = undefined;
            if (
              (function isSyncNeeded(arg0) {
                let num = closure_1_7[arg0];
                const timestamp = Date.now();
                if (num == null) {
                  num = 0;
                }
                return timestamp - num > 20000;
              })(closure_0)
            ) {
              const _Date = Date;
              c7[closure_0] = Date.now();
              c4 = 1;
              function convertToRulesByTriggerType(arr) {
                const obj = {
                  [closure_1_5.KEYWORD]: [],
                  [closure_1_5.ML_SPAM]: [],
                  [closure_1_5.DEFAULT_KEYWORD_LIST]: [],
                  [closure_1_5.MENTION_SPAM]: [],
                  [closure_1_5.USER_PROFILE]: [],
                  [closure_1_5.SERVER_POLICY]: [],
                  [closure_1_5.APPLICATION]: [],
                };
                const item = arr.forEach((item) => {
                  if (obj[item.triggerType] != null) {
                    arr.push(item);
                  }
                });
                return obj;
              }
              c6 = 2;
              c7 = 1;
              const obj6 = {
                value: closure_0(convertToRulesByTriggerType[8]).fetchAutomodRules(closure_0),
                done: false,
              };
              return obj6;
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            closure_130_4 = closure_5;
            const aPIError = new closure_0(convertToRulesByTriggerType[9]).APIError(closure_130_4);
            closure_130_3 = aPIError;
            closure_0(convertToRulesByTriggerType[7]).batchUpdates(() => {
              closure_0({ error });
            });
            const obj3 = closure_0(convertToRulesByTriggerType[7]);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_1 = convertToRulesByTriggerType(value);
            rules = closure_131_1().rules;
            closure_0(convertToRulesByTriggerType[7]).batchUpdates(() => {
              const obj = { rules: null, error: null };
              const obj2 = {};
              const merged = Object.assign(closure_1_2);
              obj2[closure_1_0] = convertToRulesByTriggerType;
              obj.rules = obj2;
              closure_0(obj);
            });
            c4 = 0;
            let obj = closure_0(convertToRulesByTriggerType[7]);
          }
          c4 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
        c7 = 3;
      } catch (tmp32) {
        closure_5 = tmp32;
        if (tmp4 === c4) {
          c7 = tmp2;
          throw tmp32;
        } else {
          c6 = tmp;
        }
      }
    }
  });
  obj.syncRules = function syncRules() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSyncAutomodRulesEffect(arg0) {
      const cResult = require("c").c(8);
      _require = arg0;
      let first;
      const tmp2 = first(noop.useState(false), 2);
      dependencyMap = tmp2[1];
      const tmp3 = first(
        withEqualityFn((arg0) => {
          const items = [,];
          ({ syncRules: arr[0], fetching: arr[1] } = arg0);
          return items;
        }, require("../../../_runtime/metro/04690__.js").shallow),
        2,
      );
      first = tmp3[0];
      asyncGeneratorStep = tmp5;
      const items = [tmp2[0]];
      const items1 = [arg0, tmp3[1], first];
      items[1] = noop.useCallback(
        asyncGeneratorStep(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  if (!closure_3) {
                    if (null != closure_0) {
                      c3 = 1;
                      v2(true);
                      c1 = 2;
                      c4 = 1;
                      const obj4 = { value: first(tmp20), done: false };
                      return obj4;
                    }
                  }
                  c4 = 3;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                closure_128_1(false);
                throw closure_2;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c3 = 0;
                closure_128_1(false);
              }
              c3 = 0;
              closure_128_1(false);
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } catch (tmp24) {
              closure_2 = tmp24;
              if (tmp4 === c3) {
                c4 = tmp2;
                throw tmp24;
              } else {
                c1 = tmp;
              }
            }
          }
        }),
        items1,
      );
      let obj = require("c");
      [tmp7, tmp8] = first(items, 2);
      _require = tmp8;
      if (cResult[0] !== tmp8) {
        const fn = function o() {
          (async () => {
            if (c0 === 2) {
              c0 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c0 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    c1 = 1;
                    c0 = 1;
                    const obj4 = { value: closure_2_0(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp6) {
                c0 = tmp;
                throw tmp6;
              }
            }
          })();
        };
        cResult[0] = tmp8;
        cResult[1] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp8) {
          let tmp10 = cResult[4];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        if (cResult[5] === tmp7) {
          if (cResult[6] === tmp8) {
            let tmp12 = cResult[7];
          }
          return tmp12;
        }
        const items2 = [tmp7, tmp8];
        cResult[5] = tmp7;
        cResult[6] = tmp8;
        cResult[7] = items2;
        tmp12 = items2;
      }
      const items3 = [arg0, tmp8];
      cResult[2] = arg0;
      cResult[3] = tmp8;
      cResult[4] = items3;
      tmp10 = items3;
      const tmp6 = first(items, 2);
    }
  : function useSyncAutomodRulesEffect(arg0) {
      _require = arg0;
      const tmp = first(noop.useState(false), 2);
      dependencyMap = tmp[1];
      const tmp2 = first(
        withEqualityFn((arg0) => {
          const items = [,];
          ({ syncRules: arr[0], fetching: arr[1] } = arg0);
          return items;
        }, require("../../../_runtime/metro/04690__.js").shallow),
        2,
      );
      first = tmp2[0];
      asyncGeneratorStep = tmp4;
      let items = [tmp[0]];
      const items1 = [arg0, tmp2[1], first];
      items[1] = noop.useCallback(
        asyncGeneratorStep(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  if (!closure_3) {
                    if (null != closure_0) {
                      c3 = 1;
                      v2(true);
                      c1 = 2;
                      c4 = 1;
                      const obj4 = { value: first(tmp20), done: false };
                      return obj4;
                    }
                  }
                  c4 = 3;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                closure_128_1(false);
                throw closure_2;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c3 = 0;
                closure_128_1(false);
              }
              c3 = 0;
              closure_128_1(false);
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } catch (tmp24) {
              closure_2 = tmp24;
              if (tmp4 === c3) {
                c4 = tmp2;
                throw tmp24;
              } else {
                c1 = tmp;
              }
            }
          }
        }),
        items1,
      );
      const tmp5 = first(items, 2);
      _require = tmp6;
      const items2 = [arg0, tmp5[1]];
      const effect = noop.useEffect(() => {
        (async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c1 = 1;
                  c0 = 1;
                  const obj4 = { value: closure_2_0(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp6) {
              c0 = tmp;
              throw tmp6;
            }
          }
        })();
      }, items2);
      const items3 = [tmp5[0], tmp5[1]];
      return items3;
    };
function useSyncAutomodRules(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  const tmp2 = _slicedToArray(
    withEqualityFn((arg0) => {
      const items = [,];
      ({ syncRules: arr[0], fetching: arr[1] } = arg0);
      return items;
    }, _mod4690.shallow),
    2,
  );
  const first = tmp2[0];
  closure_3 = tmp4;
  const items = [tmp[0]];
  const items1 = [arg0, tmp2[1], first];
  items[1] = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp3;
              if (!closure_3) {
                if (null != closure_0) {
                  c3 = 1;
                  v2(true);
                  c1 = 2;
                  c4 = 1;
                  const obj4 = { value: first(tmp20), done: false };
                  return obj4;
                }
              }
              c4 = 3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
            closure_128_1(false);
          }
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c1 = tmp;
          }
        }
      }
    }),
    items1,
  );
  return items;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodStore.tsx");

export const useAutomodStore = withEqualityFn;
export const getRuleCountByTriggerType = function getRuleCountByTriggerType(guildId, triggerType) {
  const tmp = withEqualityFn.getState().rules[guildId];
  let items;
  if (tmp != null) {
    items = tmp[triggerType];
  }
  if (items == null) {
    items = [];
  }
  return items.length;
};
export { useSyncAutomodRules };
export const useSyncAutomodRulesEffect = tmp3;
export const useAutomodRulesList = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAutomodRulesList(arg0) {
      _require = arg0;
      const cResult = require("c").c(2);
      if (cResult[0] !== arg0) {
        const fn = function u(updateRule) {
          let tmp = closure_0;
          if (closure_0 == null) {
            tmp = EMPTY_STRING_SNOWFLAKE_ID;
          }
          let obj = updateRule.rules[tmp];
          if (obj == null) {
            obj = {};
          }
          return { rulesByTriggerType: obj, updateRule: updateRule.updateRule, removeRule: updateRule.removeRule };
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      return withEqualityFn(tmp4, require("../../../_runtime/metro/04690__.js").shallow);
    }
  : function useAutomodRulesList(arg0) {
      _require = arg0;
      return withEqualityFn((updateRule) => {
        let tmp = closure_0;
        if (closure_0 == null) {
          tmp = EMPTY_STRING_SNOWFLAKE_ID;
        }
        let obj = updateRule.rules[tmp];
        if (obj == null) {
          obj = {};
        }
        return { rulesByTriggerType: obj, updateRule: updateRule.updateRule, removeRule: updateRule.removeRule };
      }, require("../../../_runtime/metro/04690__.js").shallow);
    };
