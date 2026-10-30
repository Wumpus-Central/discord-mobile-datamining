// _runtime/metro/12823__.js
import _mod12800 from "12800__.js";

function isValidLocation(start) {
  let BooleanResult = Boolean(start);
  if (BooleanResult) {
    const offset = start.offset;
    let isFiniteResult = typeof offset === "number";
    if (typeof offset === "number") {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(offset);
    }
    if (isFiniteResult) {
      const _Math = Math;
      isFiniteResult = Math.floor(offset) === offset;
    }
    if (isFiniteResult) {
      isFiniteResult = offset >= 0;
    }
    BooleanResult = isFiniteResult;
  }
  if (BooleanResult) {
    const line = start.line;
    let isFiniteResult1 = typeof line === "number";
    if (typeof line === "number") {
      const _isFinite2 = isFinite;
      isFiniteResult1 = isFinite(line);
    }
    if (isFiniteResult1) {
      const _Math2 = Math;
      isFiniteResult1 = Math.floor(line) === line;
    }
    if (isFiniteResult1) {
      isFiniteResult1 = line >= 0;
    }
    BooleanResult = isFiniteResult1;
  }
  if (BooleanResult) {
    const column = start.column;
    let isFiniteResult2 = typeof column === "number";
    if (typeof column === "number") {
      const _isFinite3 = isFinite;
      isFiniteResult2 = isFinite(column);
    }
    if (isFiniteResult2) {
      const _Math3 = Math;
      isFiniteResult2 = Math.floor(column) === column;
    }
    if (isFiniteResult2) {
      isFiniteResult2 = column >= 0;
    }
    BooleanResult = isFiniteResult2;
  }
  return BooleanResult;
}

export default {
  getStructureFromConfig(node) {
    const obj = {};
    if (node.node) {
      for (const key10016 in arg0.node) {
        let call = hasOwnProperty.call;
        node = arg0.node;
        if (typeof call === "unknown") {
          let callResult = hasOwnProperty(key10016);
        } else {
          callResult = call(node, key10016);
        }
        if (!callResult) {
          continue;
        } else {
          let tmp4 = arg0.node[key10016];
          if (tmp4.structure) {
            let structure = tmp4.structure;
            let obj2 = { type: null, loc: true };
            let _String = String;
            obj2.type = String;
            let obj3 = { type: '"' + key10016 + '"' };
            for (const key10038 in structure) {
              let call2 = hasOwnProperty.call;
              if (typeof call2 === "unknown") {
                let call2Result = hasOwnProperty(key10038);
              } else {
                call2Result = call2(structure, key10038);
              }
              if (false === call2Result) {
                continue;
              } else {
                let _Array = Array;
                let arr = structure[key10038];
                if (Array.isArray(structure[key10038])) {
                  let substr = arr.slice();
                } else {
                  substr = [arr];
                }
                let items = [];
                obj2[key10038] = substr;
                let num3 = 0;
                if (0 < substr.length) {
                  while (true) {
                    let tmp11 = substr[num3];
                    let _String2 = String;
                    if (tmp11 !== String) {
                      let _Boolean = Boolean;
                      if (tmp11 !== Boolean) {
                        if (null === tmp11) {
                          let arr2 = items.push("null");
                        } else if (typeof tmp11 === "string") {
                          let arr3 = items.push("<" + tmp11 + ">");
                        } else {
                          let _Array2 = Array;
                          if (Array.isArray(tmp11)) {
                            let arr7 = items.push("List");
                          } else {
                            let _Error2 = Error;
                            let str9 = "Wrong value `";
                            let str10 = "` in `";
                            let str11 = ".";
                            let tmp13 = new.target;
                            let str12 = "` structure definition";
                            let tmp14 = new.target;
                            let error = new Error(
                              "Wrong value `" + tmp11 + "` in `" + key10016 + "." + key10038 + "` structure definition",
                            );
                            throw error;
                          }
                        }
                      }
                      num3 = num3 + 1;
                      if (num3 >= substr.length) {
                        break;
                      }
                    }
                    let arr8 = items.push(tmp11.name);
                  }
                }
                obj3[key10038] = items.join(" | ");
                continue;
              }
              continue;
            }
            let obj4 = {
              docs: obj3,
              check: function checkNode(type, fn) {
                if (type) {
                  const _Object = Object;
                  if (type.constructor === Object) {
                    for (const key10005 in arg0) {
                      let call2 = hasOwnProperty.call;
                      if (typeof call2 === "unknown") {
                        let call2Result = hasOwnProperty(key10005);
                      } else {
                        call2Result = call2(arg0, key10005);
                      }
                      if (false === call2Result) {
                        continue;
                      } else {
                        if ("type" === key10005) {
                          let flag = true;
                          let tmp5 = key10005;
                          if (arg0.type !== key10016) {
                            let tmp15 = arg1(arg0, "Wrong node type `" + arg0.type + "`, expected `" + tmp14 + "`");
                            flag = true;
                            tmp5 = key10005;
                          }
                          if (flag) {
                            continue;
                          } else {
                            let tmp17 = arg1(arg0, "Bad value for `" + key10016 + "." + tmp5 + "`");
                            continue;
                          }
                          continue;
                        } else if ("loc" === key10005) {
                          if (null === arg0.loc) {
                            continue;
                          } else {
                            let text = key10005;
                            if (arg0.loc) {
                              let _Object2 = Object;
                              text = key10005;
                              if (arg0.loc.constructor === Object) {
                                if (typeof arg0.loc.source !== "string") {
                                  text = `${key10005}.source`;
                                } else if (isValidLocation(arg0.loc.start)) {
                                  if (isValidLocation(arg0.loc.end)) {
                                    continue;
                                  } else {
                                    text = `${key10005}.end`;
                                  }
                                } else {
                                  text = `${key10005}.start`;
                                }
                                continue;
                              }
                            }
                            tmp5 = text;
                            flag = false;
                          }
                        } else if (obj2.hasOwnProperty(key10005)) {
                          let num = 0;
                          let flag2 = false;
                          flag = false;
                          tmp5 = key10005;
                          if (0 < obj2[key10005].length) {
                            while (true) {
                              let tmp7 = obj2[key10005][num];
                              let _String = String;
                              let tmp9 = flag2;
                              if (String === tmp7) {
                                tmp9 = typeof arg0[key10005] === "string";
                              } else {
                                let _Boolean = Boolean;
                                if (Boolean === tmp7) {
                                  tmp9 = typeof arg0[key10005] === "boolean";
                                } else if (null === tmp7) {
                                  tmp9 = null === arg0[key10005];
                                } else if (typeof tmp7 === "string") {
                                  let tmp12 = arg0[key10005];
                                  if (tmp12) {
                                    tmp12 = arg0[key10005].type === tmp7;
                                  }
                                  tmp9 = tmp12;
                                } else {
                                  let _Array = Array;
                                  if (Array.isArray(tmp7)) {
                                    tmp9 = arg0[key10005] instanceof _mod12800;
                                  }
                                }
                              }
                              flag = tmp9;
                              tmp5 = key10005;
                              if (tmp9) {
                                break;
                              } else {
                                num = num + 1;
                                flag2 = tmp9;
                                flag = tmp9;
                                tmp5 = key10005;
                                if (num < obj2[key10005].length) {
                                  continue;
                                } else {
                                  break;
                                }
                                break;
                              }
                            }
                          }
                        } else {
                          let tmp4 = arg1(arg0, "Unknown field `" + key10005 + "` for " + key10016 + " node type");
                          flag = true;
                          tmp5 = key10005;
                        }
                        continue;
                      }
                      continue;
                    }
                    const keys = Object.keys();
                    if (keys !== undefined) {
                      const first = keys[0];
                      while (first !== undefined) {
                        let call3 = hasOwnProperty.call;
                        let tmp21 = typeof call3 === "unknown" ? hasOwnProperty(first) : call3(obj2, first);
                        if (!tmp21) {
                          if (!tmp21) {
                            continue;
                          } else {
                            let tmp25 = fn(type, `Field \`${key10016}.${tmp20}\` is missed`);
                            continue;
                          }
                          continue;
                        } else {
                          let call = hasOwnProperty.call;
                          let tmp23 = false === (typeof call === "unknown" ? hasOwnProperty(first) : call(type, first));
                        }
                      }
                    }
                  }
                }
                return fn(type, "Type of node should be an Object");
              },
            };
            obj[key10016] = obj4;
            continue;
          } else {
            let _Error = Error;
            let str7 = "Missed `structure` field in `";
            let tmp5 = new.target;
            let str8 = "` node type definition";
            let tmp6 = new.target;
            let error1 = new Error("Missed `structure` field in `" + key10016 + "` node type definition");
            throw error1;
          }
        }
        continue;
      }
    }
    return obj;
  },
};
