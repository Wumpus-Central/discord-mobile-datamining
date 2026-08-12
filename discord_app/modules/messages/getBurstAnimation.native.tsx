// discord_app/modules/messages/getBurstAnimation.native.tsx
let closure_0 = arg1;
let obj = {
  load() {
    return callback(7285);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7286);
    }
  },
  {
    load() {
      return callback(7287);
    }
  },
  {
    load() {
      return callback(7288);
    }
  },
  {
    load() {
      return callback(7289);
    }
  },
  {
    load() {
      return callback(7290);
    }
  },
  {
    load() {
      return callback(7291);
    }
  },
  {
    load() {
      return callback(7292);
    }
  },
  {
    load() {
      return callback(7293);
    }
  },
  {
    load() {
      return callback(7294);
    }
  },
  {
    load() {
      return callback(7295);
    }
  },
  {
    load() {
      return callback(7296);
    }
  },
  {
    load() {
      return callback(7297);
    }
  },
  {
    load() {
      return callback(7298);
    }
  },
  {
    load() {
      return callback(7299);
    }
  },
  {
    load() {
      return callback(7300);
    }
  },
  {
    load() {
      return callback(7301);
    }
  },
  {
    load() {
      return callback(7302);
    }
  }
];
obj = {
  load() {
    return callback(7303);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7304);
    }
  },
  {
    load() {
      return callback(7305);
    }
  },
  {
    load() {
      return callback(7306);
    }
  },
  {
    load() {
      return callback(7307);
    }
  },
  {
    load() {
      return callback(7308);
    }
  },
  {
    load() {
      return callback(7309);
    }
  },
  {
    load() {
      return callback(7310);
    }
  },
  {
    load() {
      return callback(7311);
    }
  },
  {
    load() {
      return callback(7312);
    }
  },
  {
    load() {
      return callback(7313);
    }
  },
  {
    load() {
      return callback(7314);
    }
  },
  {
    load() {
      return callback(7315);
    }
  },
  {
    load() {
      return callback(7316);
    }
  },
  {
    load() {
      return callback(7317);
    }
  },
  {
    load() {
      return callback(7318);
    }
  },
  {
    load() {
      return callback(7319);
    }
  },
  {
    load() {
      return callback(7320);
    }
  }
];
closure_0 = require("module_7289")((arg0, arg1, arg2) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let c6 = 0;
  let c7 = 0;
  const iter = (function*(arg0, arg1, arg2) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            let closure_5 = tmp5;
            let burstAnimationHash = tmp2;
            let flag;
            if (flag === undefined) {
              flag = false;
            }
            burstAnimationHash = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "ct", done: true };
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          const _HermesInternal = HermesInternal;
          burstAnimationHash = callback(table[37]).getBurstAnimationHash("" + callback + table + closure_2);
          let tmp10 = closure_5;
          if (flag) {
            let tmp6 = closure_2;
          } else {
            tmp6 = length;
          }
          tmp10 = burstAnimationHash;
          obj = tmp6[burstAnimationHash % length.length];
          obj.load();
          c7 = 3;
          const obj5 = callback(table[37]);
        }
      } catch (tmp16) {
        c7 = tmp;
        throw tmp16;
      }
    }
  })();
  iter.next();
  return iter;
});
const result = require("module_7286").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};