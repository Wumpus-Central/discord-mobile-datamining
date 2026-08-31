// === Module 17089: withEqualityFn ===

// Module 17089 (withEqualityFn)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { AutomodTriggerType } from "AutomodEventType" /* 11397 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;
import identity from "identity" /* 700 */;

const require = arg1;
let closure_7 = {};
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = {
    rules: {},
    fetching: false,
    error: null,
    updateRule(guildId) {
      const callback = guildId;
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
        const isDefaultRuleIdResult = guildId(guildId2[6]).isDefaultRuleId(id.id);
        let tmp2 = !isDefaultRuleIdResult;
        if (isDefaultRuleIdResult) {
          tmp2 = id.triggerType !== triggerType;
        }
        return tmp2;
      });
      if (someResult) {
        let mapped = found.map((id) => {
          let tmp = id;
          if (id.id === closure_2) {
            tmp = closure_0;
          }
          return tmp;
        });
      } else {
        mapped = [];
        mapped[HermesBuiltin.arraySpread(found, 0)] = guildId;
      }
      someResult = items.some((id) => id.id === closure_2);
      callback(705).batchUpdates(() => {
        obj = { rules: null, error: null };
        obj = {};
        const merged = Object.assign(rules);
        obj = {};
        const merged1 = Object.assign(obj);
        obj[triggerType] = mapped;
        obj[guildId] = obj;
        obj[0] = obj;
        guildId(obj);
      });
    },
    removeRule(arg0, arg1) {
      const callback = arg0;
      dependencyMap = arg1;
      const rules = dependencyMap().rules;
      closure_3 = tmp;
      const keys = Object.keys(tmp);
      closure_4 = keys.reduce((arg0, arg1) => {
        const NumberResult = Number(arg1);
        let items = table[NumberResult];
        if (items == null) {
          items = [];
        }
        arg0[NumberResult] = items.filter((id) => id.id !== closure_0);
        return arg0;
      }, {});
      callback(705).batchUpdates(() => {
        let obj = { rules: null, error: null };
        obj = {};
        const merged = Object.assign(rules);
        obj[closure_1] = closure_4;
        obj[0] = obj;
        callback(obj);
      });
    },
    syncRules: null
  };
  closure_2 = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let aPIError = tmp3;
              let rules = tmp7;
              let callback2;
              rules = undefined;
              aPIError = undefined;
              if ((function isSyncNeeded(closure_0) {
                let num = table[closure_0];
                const timestamp = Date.now();
                if (num == null) {
                  num = 0;
                }
                return timestamp - num > 20000;
              })(callback)) {
                const _Date = Date;
                c7[tmp41] = Date.now();
                c4 = 1;
                callback2 = function convertToRulesByTriggerType(arr) {
                  const obj = { [closure_5.KEYWORD]: [], [closure_5.ML_SPAM]: [], [closure_5.DEFAULT_KEYWORD_LIST]: [], [closure_5.MENTION_SPAM]: [], [closure_5.USER_PROFILE]: [], [closure_5.SERVER_POLICY]: [] };
                  const item = arr.forEach((arg0) => {
                    let arr = obj[arg0.triggerType];
                    if (arr != null) {
                      arr = arr.push(arg0);
                    }
                  });
                  return obj;
                };
                c6 = 2;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = callback(closure_1_1[8]).fetchAutomodRules(tmp41);
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              c4 = closure_5;
              aPIError = new callback(closure_1_1[9]).APIError(c4);
              let obj2 = callback(closure_1_1[7]);
              obj2.batchUpdates(() => {
                callback({ error: aPIError });
              });
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback2 = callback2(arg1);
              rules = callback2().rules;
              obj = callback(closure_1_1[7]);
              obj.batchUpdates(() => {
                let obj = { rules: null, error: null };
                obj = {};
                const merged = Object.assign(rules);
                obj[callback] = closure_1;
                obj[0] = obj;
                callback(obj);
              });
              c4 = 0;
            }
            c4 = 0;
            c7 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
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
    })();
  });
  obj[5] = function() {
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
const result = require("set").fileFinishedImporting("modules/guild_automod/AutomodStore.tsx");

export const useAutomodStore = withEqualityFn;
export const getRuleCountByTriggerType = function getRuleCountByTriggerType(arg0, arg1) {
  const tmp = withEqualityFn.getState().rules[arg0];
  let items;
  if (tmp != null) {
    items = tmp[arg1];
  }
  if (items == null) {
    items = [];
  }
  return items.length;
};
export const useSyncAutomodRules = function useSyncAutomodRules(arg0) {
  const _require = arg0;
  const tmp = first(React.useState(false), 2);
  dependencyMap = tmp[1];
  const tmp2 = first(withEqualityFn((arg0) => {
    const items = [, ];
    ({ syncRules: arr[0], fetching: arr[1] } = arg0);
    return items;
  }, _require(4076).shallow), 2);
  first = tmp2[0];
  const callback = tmp4;
  const items = [tmp[0], ];
  const items1 = [arg0, tmp2[1], first];
  items[1] = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            if (!c3) {
              if (null != closure_1_0) {
                c3 = 1;
                v0(true);
                v0 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_2(tmp20);
                return obj1;
              }
            }
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          v0(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
          v0(false);
        }
        c3 = 0;
        v0(false);
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp24) {
        closure_2 = tmp24;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp24;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items1);
  return items;
};
export const useSyncAutomodRulesEffect = function useSyncAutomodRulesEffect(arg0) {
  let _require = arg0;
  const tmp = first(React.useState(false), 2);
  dependencyMap = tmp[1];
  const tmp2 = first(withEqualityFn((arg0) => {
    const items = [, ];
    ({ syncRules: arr[0], fetching: arr[1] } = arg0);
    return items;
  }, _require(4076).shallow), 2);
  first = tmp2[0];
  const callback = tmp4;
  let items = [tmp[0], ];
  const items1 = [arg0, tmp2[1], first];
  items[1] = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            if (!c3) {
              if (null != closure_1_0) {
                c3 = 1;
                v0(true);
                v0 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_2(tmp20);
                return obj1;
              }
            }
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          v0(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
          v0(false);
        }
        c3 = 0;
        v0(false);
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp24) {
        closure_2 = tmp24;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp24;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items1);
  const tmp5 = first(items, 2);
  _require = tmp6;
  const items2 = [arg0, tmp5[1]];
  const effect = React.useEffect(() => {
    callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0();
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          v0 = tmp;
          throw tmp6;
        }
      }
    })();
  }, items2);
  const items3 = [tmp5[0], tmp5[1]];
  return items3;
};
export const useAutomodRulesList = function useAutomodRulesList(arg0) {
  const _require = arg0;
  return withEqualityFn((updateRule) => {
    let tmp = closure_0;
    if (closure_0 == null) {
      tmp = closure_1_6;
    }
    let obj = updateRule.rules[tmp];
    if (obj == null) {
      obj = {};
    }
    obj = { rulesByTriggerType: obj, updateRule: updateRule.updateRule, removeRule: updateRule.removeRule };
    return obj;
  }, _require(4076).shallow);
};