// discord_app/modules/guild_automod/AutomodStore.tsx
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import _slicedToArray2 from "../../../_runtime/metro/04492__slicedToArray.js";
import Constants2 from "Constants.tsx";
import SystemRulesUtils from "SystemRulesUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import 01254__ from "../../../_runtime/metro/01254__.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _require, c0, c1, c6, c7, closure_5;

const f131576 = (arg0) => {
  const items = [, ];
  ({ syncRules: arr[0], fetching: arr[1] } = arg0);
  return items;
};
const AutomodTriggerType = Constants2.AutomodTriggerType;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let closure_7 = {};
const withEqualityFn = module_1254.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    rules: {},
    fetching: false,
    error: null,
    updateRule(guildId) {
      let mapped;
      let triggerType;
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
      const someResult = items.some((id) => id.id === closure_2);
      const found = items.filter((id) => {
        obj = SystemRulesUtils;
        const isDefaultRuleIdResult = obj.isDefaultRuleId(id.id);
        let tmp2 = !isDefaultRuleIdResult;
        if (isDefaultRuleIdResult) {
          tmp2 = id.triggerType !== triggerType;
        }
        return tmp2;
      });
      if (someResult) {
        mapped = found.map((id) => {
          let tmp = id;
          if (id.id === closure_2) {
            tmp = guildId;
          }
          return tmp;
        });
      } else {
        mapped = [];
        mapped[HermesBuiltin.arraySpread(mapped, found, 0)] = guildId;
      }
      let obj2 = guildId(closure_1[7]);
      obj2.batchUpdates(() => {
        let obj2;
        obj = { rules: obj2, error: null };
        obj2 = {};
        const merged = Object.assign(rules);
        const obj3 = {};
        const merged1 = Object.assign(obj);
        obj3[triggerType] = mapped;
        obj2[guildId] = obj3;
        guildId(obj);
      });
    },
    removeRule(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const rules = closure_1().rules;
      let closure_3 = tmp;
      const keys = Object.keys(tmp);
      let closure_4 = keys.reduce((acc, item) => {
        const NumberResult = Number(item);
        let items = closure_3[NumberResult];
        if (items == null) {
          items = [];
        }
        acc[NumberResult] = items.filter((id) => id.id !== closure_1_0);
        return acc;
      }, {});
      let obj = closure_0(closure_1[7]);
      obj.batchUpdates(() => {
        let obj2;
        const obj = { rules: obj2, error: null };
        obj2 = {};
        const merged = Object.assign(rules);
        obj2[closure_1] = closure_4;
        closure_0(obj);
      });
    },
    syncRules: function() {
      return closure_2(...arguments);
    }
  };
  let closure_2 = _asyncToGenerator(async function(arg0) {
    let closure_3;
    let obj4;
    function isSyncNeeded(arg0) {
      let num = closure_1_7[arg0];
      const timestamp = Date.now();
      if (num == null) {
        num = 0;
      }
      return timestamp - num > 20000;
    }
    closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let convertToRulesByTriggerType;
        let num = 2;
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
            const error = tmp;
            closure_2 = tmp4;
            closure_1 = undefined;
            let rules;
            let aPIError;
            if (isSyncNeeded(closure_0)) {
              const _Date = Date;
              c7[closure_0] = Date.now();
              c4 = 1;
              convertToRulesByTriggerType = function convertToRulesByTriggerType(arr) {
                const obj = { [closure_1_5.KEYWORD]: [], [closure_1_5.ML_SPAM]: [], [closure_1_5.DEFAULT_KEYWORD_LIST]: [], [closure_1_5.MENTION_SPAM]: [], [closure_1_5.USER_PROFILE]: [], [closure_1_5.SERVER_POLICY]: [], [closure_1_5.APPLICATION]: [] };
                const item = arr.forEach((item) => {
                  if (obj[item.triggerType] != null) {
                    obj[item.triggerType].push(item);
                  }
                });
                return obj;
              };
              c6 = 2;
              c7 = 1;
              const obj6 = { value: obj4.fetchAutomodRules(closure_0), done: false };
              obj4 = closure_0(convertToRulesByTriggerType[8]);
              return obj6;
            }
          }
        } else if (1 === c6) {
          c4 = 0;
          let closure_4 = closure_5;
          const self = this;
          const self2 = this;
          aPIError = new closure_0(convertToRulesByTriggerType[9]).APIError(closure_4);
          const obj3 = closure_0(convertToRulesByTriggerType[7]);
          obj3.batchUpdates(() => {
            const obj = { error };
            closure_0(obj);
          });
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_1 = convertToRulesByTriggerType(value);
          rules = closure_131_1().rules;
          let obj = closure_0(convertToRulesByTriggerType[7]);
          obj.batchUpdates(() => {
            let obj2;
            const obj = { rules: obj2, error: null };
            obj2 = {};
            const merged = Object.assign(closure_1_2);
            obj2[closure_1_0] = convertToRulesByTriggerType;
            closure_0(obj);
          });
          c4 = 0;
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp27) {
        closure_5 = tmp27;
        if (0 === c4) {
          c7 = 3;
          throw tmp27;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  let tmp10;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(8);
  tmp9 = arg0;
  closure_1 = undefined;
  first1 = undefined;
  [first, closure_1] = react.useState(false);
  [first1, tmp6] = withEqualityFn(f131576, _slicedToArray2.shallow);
  let closure_3 = tmp6;
  const items = [first, ];
  const items1 = [arg0, tmp6, first1];
  items[1] = react.useCallback(_asyncToGenerator(async () => {
    if (c4 === 2) {
      c4 = 3;
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
      let c3;
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
            closure_0 = tmp;
            if (!closure_3) {
              if (null != closure_0) {
                c3 = 1;
                v1(true);
                c1 = 2;
                c4 = 1;
                const obj4 = { value: first1(tmp17), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else {
          c1 = 1;
        }
      }
    }
  }), items1);
  [tmp8, tmp9] = _slicedToArray(items, 2);
  const require = tmp9;
  const tmp7 = _slicedToArray(items, 2);
  if (cResult[0] !== tmp9) {
    const fn = function n() {
      (async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
                const obj4 = { value: tmp9(), done: false };
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
          } catch (tmp5) {
            c0 = 3;
            throw tmp5;
          }
        }
      })();
    };
    cResult[0] = tmp9;
    cResult[1] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp11;
    if (cResult[3] === tmp9) {
      tmp11 = cResult[4];
    }
    const effect = react.useEffect(tmp10, tmp11);
    if (cResult[5] === tmp8) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
    const items2 = [tmp8, tmp9];
    cResult[5] = tmp8;
    cResult[6] = tmp9;
    cResult[7] = items2;
    tmp13 = items2;
  }
  const items3 = [arg0, tmp9];
  cResult[2] = arg0;
  cResult[3] = tmp9;
  cResult[4] = items3;
  tmp11 = items3;
}) : ((arg0) => {
  let closure_1;
  let first;
  let first1;
  let first2;
  let tmp5;
  let tmp8;
  _require = arg0;
  [first, closure_1] = react.useState(false);
  [first1, tmp5] = withEqualityFn(f131576, require("_slicedToArray").shallow);
  let closure_3 = tmp5;
  let items = [first, ];
  const items1 = [arg0, tmp5, first1];
  items[1] = react.useCallback(_asyncToGenerator(async () => {
    if (c4 === 2) {
      c4 = 3;
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
      let c3;
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
            closure_0 = tmp;
            if (!closure_3) {
              if (null != closure_0) {
                c3 = 1;
                v1(true);
                c1 = 2;
                c4 = 1;
                const obj4 = { value: first1(tmp17), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else {
          c1 = 1;
        }
      }
    }
  }), items1);
  [first2, tmp8] = items;
  _require = tmp8;
  const items2 = [arg0, tmp8];
  const effect = react.useEffect(() => {
    (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
        } catch (tmp5) {
          c0 = 3;
          throw tmp5;
        }
      }
    })();
  }, items2);
  const items3 = [first2, tmp8];
  return items3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp4;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function u(rules) {
      let tmp = closure_0;
      rules = rules.rules;
      if (closure_0 == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      let obj = rules[tmp];
      if (obj == null) {
        obj = {};
      }
      return { rulesByTriggerType: obj, updateRule: rules.updateRule, removeRule: rules.removeRule };
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return withEqualityFn(tmp4, tmp(4492).shallow);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  return withEqualityFn((rules) => {
    let tmp = closure_0;
    rules = rules.rules;
    if (closure_0 == null) {
      tmp = EMPTY_STRING_SNOWFLAKE_ID;
    }
    let obj = rules[tmp];
    if (obj == null) {
      obj = {};
    }
    return { rulesByTriggerType: obj, updateRule: rules.updateRule, removeRule: rules.removeRule };
  }, require("_slicedToArray").shallow);
});
function useSyncAutomodRules(arg0) {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(false);
  const tmp3 = _slicedToArray(withEqualityFn(f131576, _slicedToArray2.shallow), 2);
  const first1 = tmp3[0];
  let closure_3 = tmp5;
  const items = [first, ];
  const items1 = [arg0, tmp3[1], first1];
  items[1] = react.useCallback(_asyncToGenerator(async () => {
    if (c4 === 2) {
      c4 = 3;
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
      let c3;
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
            closure_0 = tmp;
            if (!closure_3) {
              if (null != closure_0) {
                c3 = 1;
                v1(true);
                c1 = 2;
                c4 = 1;
                const obj4 = { value: first1(tmp17), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else {
          c1 = 1;
        }
      }
    }
  }), items1);
  return items;
}
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
export const useAutomodRulesList = tmp4;