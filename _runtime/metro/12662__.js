// _runtime/metro/12662__.js
function noop() {}

export default function createWalker(node) {
  let obj = {};
  for (const key10012 in arg0.node) {
    let tmp22 = c0;
    let call = c0.call;
    node = arg0.node;
    if (typeof call === "unknown") {
      let callResult = tmp22(key10012);
    } else {
      callResult = call(node, key10012);
    }
    if (!callResult) {
      continue;
    } else {
      let tmp2 = arg0.node[key10012];
      if (tmp2.structure) {
        let structure = tmp2.structure;
        let items = [];
        for (const key10030 in structure) {
          let tmp24 = c0;
          let call2 = c0.call;
          if (typeof call2 === "unknown") {
            let call2Result = tmp24(key10030);
          } else {
            call2Result = call2(structure, key10030);
          }
          if (false === call2Result) {
            continue;
          } else {
            let arr2 = structure[key10030];
            let obj2 = { name: key10030, type: false, nullable: false };
            let _Array = Array;
            if (!Array.isArray(structure[key10030])) {
              let items1 = [structure[key10030]];
              arr2 = items1;
            }
            for (let num = 0; num < arr2.length; num = num + 1) {
              let tmp9 = arr2[num];
              if (null === tmp9) {
                obj2.nullable = true;
              } else if (typeof tmp9 === "string") {
                obj2.type = "node";
              } else {
                let _Array2 = Array;
                if (Array.isArray(tmp9)) {
                  obj2.type = "list";
                }
              }
            }
            if (!obj2.type) {
              continue;
            } else {
              let arr = items.push(obj2);
              continue;
            }
            continue;
          }
          continue;
        }
        let tmp12 = null;
        if (items.length) {
          let obj3 = { context: tmp2.walkContext, fields: items };
          tmp12 = obj3;
        }
        obj[key10012] = tmp12;
        continue;
      } else {
        let _Error = Error;
        let str = "Missed `structure` field in `";
        let tmp3 = new.target;
        let str2 = "` node type definition";
        let tmp4 = new.target;
        let error = new Error("Missed `structure` field in `" + key10012 + "` node type definition");
        throw error;
      }
    }
    continue;
  }
  c0 = obj;
  const obj4 = {};
  let substr = obj4;
  const obj5 = {};
  let context2 = obj5;
  const SymbolResult = Symbol("break-walk");
  closure_3 = SymbolResult;
  let keys = Object.keys();
  if (keys !== undefined) {
    const first = keys[0];
    while (first !== undefined) {
      let tmp26 = c0;
      let call3 = c0.call;
      let tmp17 = (typeof call3 === "unknown" ? tmp26(first) : call3(obj, first)) && null !== obj[first];
      if (!tmp17) {
        continue;
      } else {
        let tmp18 = obj[first];
        let fields = tmp18.fields;
        fields.slice();
        let context = tmp18.context;
        closure_3 = typeof context === "string";
        obj4[first] = (arg0, arg1, fn, arg3) => {
          if (closure_3) {
            arg1[context2] = arg0;
            const tmp = arg1[context2];
          }
          let num = 0;
          if (0 < substr.length) {
            while (true) {
              let tmp3 = substr[num];
              let arr2 = arg0[tmp3.name];
              if (!tmp3.nullable) {
                if ("list" === tmp3.type) {
                  if (c0) {
                    let reduceRightResult = arr2.reduceRight(arg3, false);
                  } else {
                    reduceRightResult = arr2.reduce(arg3, false);
                  }
                  if (reduceRightResult) {
                    let flag2 = true;
                    return true;
                  }
                } else if (fn(arr2)) {
                  break;
                }
              }
              num = num + 1;
            }
            return true;
          }
          if (closure_3) {
            arg1[context2] = tmp;
          }
        };
        let tmp19 = obj[first];
        c0 = true;
        let fields1 = tmp19.fields;
        substr = fields1.slice();
        context2 = tmp19.context;
        closure_3 = typeof context2 === "string";
        let reversed = substr.reverse();
        obj5[first] = (arg0, arg1, fn, arg3) => {
          if (closure_3) {
            arg1[context2] = arg0;
            const tmp = arg1[context2];
          }
          let num = 0;
          if (0 < substr.length) {
            while (true) {
              let tmp3 = substr[num];
              let arr2 = arg0[tmp3.name];
              if (!tmp3.nullable) {
                if ("list" === tmp3.type) {
                  if (c0) {
                    let reduceRightResult = arr2.reduceRight(arg3, false);
                  } else {
                    reduceRightResult = arr2.reduce(arg3, false);
                  }
                  if (reduceRightResult) {
                    let flag2 = true;
                    return true;
                  }
                } else if (fn(arr2)) {
                  break;
                }
              }
              num = num + 1;
            }
            return true;
          }
          if (closure_3) {
            arg1[context2] = tmp;
          }
        };
        continue;
      }
      continue;
    }
  }
  function walk(root, enter) {
    function walkNode(type, arg1, arg2) {
      const call = fn.call;
      if (typeof call === "unknown") {
        let callResult = fn(type, arg1, arg2);
      } else {
        callResult = call(obj, type, arg1, arg2);
      }
      let tmp5 = callResult === closure_3;
      if (!tmp5) {
        let tmp7 = callResult !== SymbolResult1;
        if (tmp7) {
          const hasOwnPropertyResult = closure_4.hasOwnProperty(type.type);
          let tmp10 = !hasOwnPropertyResult;
          if (hasOwnPropertyResult) {
            tmp10 = !closure_4[type.type](type, obj, leave, visit);
          }
          if (!tmp10) {
            tmp7 = !tmp10;
          } else {
            const call2 = fn2.call;
            if (typeof call2 === "unknown") {
              let call2Result = fn2(type, arg1, arg2);
            } else {
              call2Result = call2(obj, type, arg1, arg2);
            }
          }
        }
        tmp5 = tmp7;
      }
      return tmp5;
    }
    let leave = walkNode;
    function walkReducer(arg0, type, arg2, arg3) {
      let tmp = arg0;
      if (!arg0) {
        const call = fn.call;
        if (typeof call === "unknown") {
          let callResult = fn(type, arg2, arg3);
        } else {
          callResult = call(obj, type, arg2, arg3);
        }
        let tmp9 = callResult === closure_3;
        if (!tmp9) {
          let tmp11 = callResult !== SymbolResult1;
          if (tmp11) {
            const hasOwnPropertyResult = closure_4.hasOwnProperty(type.type);
            let tmp14 = !hasOwnPropertyResult;
            if (hasOwnPropertyResult) {
              tmp14 = !closure_4[type.type](type, obj, leave, visit);
            }
            if (!tmp14) {
              tmp11 = !tmp14;
            } else {
              const call2 = fn2.call;
              if (typeof call2 === "unknown") {
                let call2Result = fn2(type, arg2, arg3);
              } else {
                call2Result = call2(obj, type, arg2, arg3);
              }
            }
          }
          tmp9 = tmp11;
        }
        tmp = tmp9;
      }
      return tmp;
    }
    let visit = walkReducer;
    let fn = substr;
    let fn2 = substr;
    skip = visit;
    const obj = {
      break: fn2,
      skip,
      root,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null,
    };
    if (typeof enter === "function") {
      fn = enter;
      let obj2 = tmp2;
      let tmp7 = substr;
      let tmp8 = enter;
      let tmp9 = substr;
      let tmp10 = enter;
    } else {
      obj2 = tmp2;
      tmp7 = substr;
      tmp8 = substr;
      tmp9 = substr;
      tmp10 = substr;
      if (enter) {
        enter = enter.enter;
        if (typeof enter !== "function") {
          enter = substr;
        }
        fn = enter;
        leave = enter.leave;
        if (typeof leave !== "function") {
          leave = substr;
        }
        fn2 = leave;
        let tmp5 = tmp2;
        if (enter.reverse) {
          skip = fn;
          tmp5 = fn;
        }
        obj2 = tmp5;
        tmp7 = leave;
        tmp8 = enter;
        tmp9 = leave;
        tmp10 = enter;
        if (enter.visit) {
          if (obj.hasOwnProperty(enter.visit)) {
            if (enter.reverse) {
              let tmp19 = obj7[enter.visit];
            } else {
              tmp19 = tmp11[enter.visit];
            }
            skip = tmp19;
          } else {
            if (leave.hasOwnProperty(enter.visit)) {
              leave = enter;
              fn = function (type, arg1, arg2) {
                if (type.type === visit) {
                  const self = this;
                  const call = leave.call;
                  if (typeof call === "unknown") {
                    leave(type, arg1, arg2);
                  } else {
                    call(self, type, arg1, arg2);
                  }
                }
              };
              visit = enter.visit;
              fn2 = function (type, arg1, arg2) {
                if (type.type === visit) {
                  const self = this;
                  const call = leave.call;
                  if (typeof call === "unknown") {
                    leave(type, arg1, arg2);
                  } else {
                    call(self, type, arg1, arg2);
                  }
                }
              };
              obj2 = tmp5;
              tmp7 = fn2;
              tmp8 = fn;
              tmp9 = fn2;
              tmp10 = fn;
            } else {
              const _Error = Error;
              const _Object = Object;
              const text = `Bad value \`${enter.visit}`;
              const keys = Object.keys(tmp12);
              const error = new Error(
                `Bad value \`${enter.visit}` + "` for `visit` option (should be: " + keys.join(", ") + ")",
              );
              throw error;
            }
            tmp12 = leave;
          }
          tmp11 = obj;
        }
      }
    }
    if (tmp10 === substr) {
      if (tmp9 === substr) {
        const _Error2 = Error;
        const error1 = new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        throw error1;
      }
    }
    let call = tmp8.call;
    if (typeof call === "unknown") {
      let callResult = tmp8(root, undefined, undefined);
    } else {
      callResult = call(obj, root, undefined, undefined);
    }
    if (callResult !== tmp3) {
      if (callResult !== tmp4) {
        let hasOwnPropertyResult = obj2.hasOwnProperty(root.type);
        let tmp24 = !hasOwnPropertyResult;
        if (hasOwnPropertyResult) {
          tmp24 = !obj2[root.type](root, obj, walkNode, walkReducer);
        }
        if (tmp24) {
          let call2 = tmp7.call;
          if (typeof call2 === "unknown") {
            tmp7(root, undefined, undefined);
          } else {
            call2(obj, root, undefined, undefined);
          }
        }
      }
    }
    tmp3 = fn2;
    tmp4 = skip;
  }
  walk.break = SymbolResult;
  walk.skip = Symbol("skip-node");
  walk.find = (arg0, arg1) => {
    closure_0 = arg1;
    closure_1 = null;
    walk(arg0, function (arg0, arg1, arg2) {
      const self = this;
      const call = closure_0.call;
      if (typeof call === "unknown") {
        let callResult = closure_0(arg0, arg1, arg2);
      } else {
        callResult = call(self, arg0, arg1, arg2);
      }
      if (callResult) {
        closure_1 = arg0;
        return closure_3;
      }
    });
    return closure_1;
  };
  walk.findLast = (arg0, arg1) => {
    closure_0 = arg1;
    closure_1 = null;
    walk(arg0, {
      reverse: true,
      enter(arg0, arg1, arg2) {
        const self = this;
        const call = closure_0.call;
        if (typeof call === "unknown") {
          let callResult = closure_0(arg0, arg1, arg2);
        } else {
          callResult = call(self, arg0, arg1, arg2);
        }
        if (callResult) {
          closure_1 = arg0;
          return closure_3;
        }
      },
    });
    return closure_1;
  };
  walk.findAll = (arg0, arg1) => {
    closure_0 = arg1;
    const items = [];
    walk(arg0, function (arg0, arg1, arg2) {
      const self = this;
      const call = closure_0.call;
      if (typeof call === "unknown") {
        let callResult = closure_0(arg0, arg1, arg2);
      } else {
        callResult = call(self, arg0, arg1, arg2);
      }
      if (callResult) {
        items.push(arg0);
      }
    });
    return items;
  };
  return walk;
}
