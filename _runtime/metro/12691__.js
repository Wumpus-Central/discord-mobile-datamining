// _runtime/metro/12691__.js
import _slicedToArray from "00032__.js";

function isObject(arg0) {
  let tmp = arg0;
  if (arg0) {
    const _Object = Object;
    tmp = arg0.constructor === Object;
  }
  return tmp;
}
function copy(arg0) {
  let tmp = arg0;
  if (arg0) {
    const _Object = Object;
    tmp = arg0.constructor === Object;
  }
  let merged = arg0;
  if (tmp) {
    const _Object2 = Object;
    merged = Object.assign({}, arg0);
  }
  return merged;
}
function appendOrAssign(str, str2) {
  if (typeof str2 === "string") {
    if (typeof str2 === "string") {
      if (obj2.test(str2)) {
        if (typeof str === "string") {
          let sum = str + str2;
        } else {
          sum = str2.replace(/^\s*\|\s*/, "");
        }
      }
      obj2 = /^\s*\|/;
    }
    let tmp7 = str2;
    if (!str2) {
      tmp7 = null;
    }
    return tmp7;
  } else {
    const _Object = Object;
    const merged = Object.assign({}, str);
    for (const key10002 in arg1) {
      let call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let call2Result = hasOwnProperty(key10002);
      } else {
        call2Result = call2(arg1, key10002);
      }
      if (!call2Result) {
        continue;
      } else {
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let callResult = hasOwnProperty(key10002);
        } else {
          callResult = call(arg0, key10002);
        }
        if (callResult) {
          let tmp3 = arg0[key10002];
        }
        str = arg1[key10002];
        if (typeof str === "string") {
          obj = /^\s*\|/;
          if (obj.test(str)) {
            if (typeof tmp3 === "string") {
              let sum1 = tmp3 + str;
            } else {
              sum1 = str.replace(/^\s*\|\s*/, "");
            }
          }
        }
        let tmp4 = str;
        if (!str) {
          tmp4 = null;
        }
        merged[key10002] = tmp4;
        continue;
      }
      continue;
    }
    return merged;
  }
}
function appendOrAssignOrNull(arg0, arg1) {
  const tmp = appendOrAssign(arg0, arg1);
  let tmp2 = tmp;
  if (tmp) {
    const _Object = Object;
    tmp2 = tmp.constructor === Object;
  }
  if (!tmp2) {
    let tmp5 = tmp;
  } else {
    const _Object2 = Object;
    tmp5 = null;
  }
  return tmp5;
}
function mix(arg0, arg1, obj) {
  for (const key10012 in arg2) {
    let call2 = hasOwnProperty.call;
    if (typeof call2 === "unknown") {
      let call2Result = hasOwnProperty(key10012);
    } else {
      call2Result = call2(arg2, key10012);
    }
    if (false === call2Result) {
      continue;
    } else {
      if (true === arg2[key10012]) {
        let tmp22 = key10012 in arg1;
        if (!tmp22) {
          if (!tmp22) {
            continue;
          } else {
            arg0[key10012] = copy(arg1[key10012]);
            continue;
          }
          continue;
        } else {
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let callResult = hasOwnProperty(key10012);
          } else {
            callResult = call(arg1, key10012);
          }
        }
      } else {
        if (!arg2[key10012]) {
          continue;
        } else {
          if (typeof arg2[key10012] === "function") {
            let tmp21 = arg2[key10012];
            arg0[key10012] = tmp21({}, arg0[key10012]);
            let obj2 = arg0[key10012];
            if (!obj2) {
              obj2 = {};
            }
            arg0[key10012] = tmp21(obj2, arg1[key10012]);
            continue;
          } else {
            if (isObject(arg2[key10012])) {
              let obj3 = {};
              for (const key10064 in arg0[key10012]) {
                let obj4 = {};
                let tmp34 = mix(obj4, arg0[key10012][key10064], arg2[key10012]);
                obj3[key10064] = obj4;
                continue;
              }
              for (const key10067 in arg1[key10012]) {
                let obj5 = obj3[key10067];
                if (!obj5) {
                  obj5 = {};
                }
                let tmp36Result = mix(obj5, arg1[key10012][key10067], arg2[key10012]);
                obj3[key10067] = obj5;
                continue;
              }
              arg0[key10012] = obj3;
              continue;
            } else {
              let _Array = Array;
              if (!Array.isArray(arg2[key10012])) {
                continue;
              } else {
                obj = {};
                let arr = arg2[key10012];
                let reduced = arr.reduce((acc, item) => {
                  acc[item] = true;
                  return acc;
                }, {});
                let obj6 = arg0[key10012];
                if (!obj6) {
                  obj6 = {};
                }
                let entries = Object.entries(obj6);
                for (const item10033 of entries) {
                  let tmp7 = _slicedToArray(item10033, 2);
                  [tmp8, tmp10] = tmp7;
                  obj[tmp8] = {};
                  if (tmp10) {
                    let tmp15 = mix(obj[tmp9], tmp11, reduced);
                  }
                  continue;
                }
                for (const key10050 in arg1[key10012]) {
                  let call3 = hasOwnProperty.call;
                  let tmp31 = arg1[key10012];
                  if (typeof call3 === "unknown") {
                    let call3Result = hasOwnProperty(key10050);
                  } else {
                    call3Result = call3(tmp31, key10050);
                  }
                  if (!call3Result) {
                    continue;
                  } else {
                    if (!obj[key10050]) {
                      obj[key10050] = {};
                    }
                    let tmp17 = arg1[key10012];
                    if (tmp17) {
                      tmp17 = arg1[key10012][key10050];
                    }
                    if (!tmp17) {
                      continue;
                    } else {
                      let tmp19 = mix(obj[key10050], arg1[key10012][key10050], reduced);
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                arg0[key10012] = obj;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  return arg0;
}
let obj = {
  generic: true,
  types: appendOrAssign,
  atrules: { prelude: appendOrAssignOrNull, descriptors: appendOrAssignOrNull },
  properties: appendOrAssign,
  parseContext: function assign(arg0, arg1) {
    return Object.assign(arg0, arg1);
  },
  scope: null,
  atrule: ["parse"],
  pseudo: ["parse"],
  node: ["name", "structure", "parse", "generate", "walkContext"],
};
function deepAssign(arg0, obj) {
  for (const key10006 in arg1) {
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let callResult = hasOwnProperty(key10006);
    } else {
      callResult = call(arg1, key10006);
    }
    if (!callResult) {
      continue;
    } else {
      let tmp2 = arg0[key10006];
      let tmp3 = tmp2;
      if (tmp2) {
        let _Object = Object;
        tmp3 = tmp2.constructor === Object;
      }
      if (tmp3) {
        let tmp8 = arg1[key10006];
        let tmp9 = tmp8;
        if (tmp8) {
          let _Object4 = Object;
          tmp9 = tmp8.constructor === Object;
        }
        let merged = tmp8;
        if (tmp9) {
          let _Object5 = Object;
          merged = Object.assign({}, tmp8);
        }
        let tmp7Result = deepAssign(arg0[key10006], merged);
        continue;
      } else {
        let tmp4 = arg1[key10006];
        let tmp5 = tmp4;
        if (tmp4) {
          let _Object2 = Object;
          tmp5 = tmp4.constructor === Object;
        }
        let merged1 = tmp4;
        if (tmp5) {
          let _Object3 = Object;
          merged1 = Object.assign({}, tmp4);
        }
        arg0[key10006] = merged1;
        continue;
      }
      continue;
    }
    continue;
  }
  return arg0;
}
obj.scope = deepAssign;

export default (arg0, arg1) => {
  mix(arg0, arg1, obj);
  return arg0;
};
