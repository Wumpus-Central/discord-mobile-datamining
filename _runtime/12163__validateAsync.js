// === Module 12163: _validateAsync ===

// Module 12163 (_validateAsync)
import _mod12159 from "module_12159" /* 12159 */;
import finalizeParams from "finalizeParams" /* 12161 */;
import _mod12164 from "module_12164" /* 12164 */;
import _mod12165 from "module_12165" /* 12165 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

let self = this;
let closure_12 = async function _validateAsync(arg0) {
  let _zod = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    const obj4 = { async: true };
    closure_131_0 = obj4;
    closure_2 = toStandardResult;
    _zod = _zod._zod;
    await _zod.run({ value, issues: [] }, obj4);
    return closure_2(value, closure_131_0);
  })();
};
function canParseURL(arg0) {
  try {
    const _URL = URL;
    if (typeof URL !== "undefined") {
      const _URL4 = URL;
      if (typeof URL.canParse === "function") {
        const _URL3 = URL;
        let flag = URL.canParse(arg0);
      }
      return flag;
    }
    const _URL2 = URL;
    const uRL = new URL(arg0);
    flag = true;
  } catch (err) {
    return false;
  }
}
function validateURL(arg0, protocol) {
  if (!("normalize" in protocol)) {
    if (!("hostname" in protocol)) {
      if (!("protocol" in protocol)) {
        let URL_UNPARSEABLE = canParseURL(arg0);
        if (!URL_UNPARSEABLE) {
          URL_UNPARSEABLE = exports.URL_UNPARSEABLE;
        }
      }
      return URL_UNPARSEABLE;
    }
  }
  URL_UNPARSEABLE = parseURLObject(arg0, protocol);
}
function parseURLObject(arg0, protocol) {
  if (!protocol.normalize) {
    protocol = protocol.protocol;
    let source;
    if (protocol != null) {
      source = protocol.source;
    }
    if (source === closure_9.httpProtocol.source) {
      if (!obj.test(arg0)) {
        return exports.URL_BAD_FORMAT;
      }
      obj = /^https?:\/\//i;
    }
  }
  try {
    const _URL = URL;
    if (typeof URL !== "undefined") {
      const _URL4 = URL;
      if (typeof URL.parse === "function") {
        const _URL3 = URL;
        let URL_UNPARSEABLE = _URL4.parse(arg0);
        if (URL_UNPARSEABLE == null) {
          URL_UNPARSEABLE = exports.URL_UNPARSEABLE;
        }
        return URL_UNPARSEABLE;
      }
    }
    const _URL2 = URL;
    const uRL = new URL(arg0);
    return uRL;
  } catch (err) {
    return exports.URL_UNPARSEABLE;
  }
}
function stripTabAndNewline(trimmed) {
  return trimmed.replace(re16, "");
}
function urlHostnameOk(hostname, hostname) {
  hostname.lastIndex = 0;
  return hostname.test(hostname.hostname);
}
function urlProtocolOk(protocol, protocol) {
  protocol.lastIndex = 0;
  protocol = protocol.protocol;
  const protocol1 = protocol.protocol;
  if (protocol.endsWith(":")) {
    let substr = protocol1.slice(0, -1);
  } else {
    substr = protocol1;
  }
  return protocol.test(substr);
}
function isValidBase64(value) {
  if ("" === value) {
    return true;
  } else {
    if (obj.test(value)) {
      return false;
    } else if (value.length % 4 !== 0) {
      return false;
    } else {
      try {
        const _atob = atob;
        atob(value);
        return true;
      } catch (err) {
        return false;
      }
    }
    obj = /\s/;
  }
}
function isValidIBAN(value) {
  let result;
  const iban = closure_9.iban;
  let isMatch = iban.test(value);
  if (isMatch) {
    let num9 = 4;
    let num10 = 0;
    let num11 = 0;
    if (4 < value.length) {
      do {
        let charCodeAtResult = value.charCodeAt(num9);
        if (charCodeAtResult >= 65) {
          let sum = 100 * num10 + (charCodeAtResult - 55);
        } else {
          sum = 10 * num10 + (charCodeAtResult - 48);
        }
        num10 = sum % 97;
        num9 = num9 + 1;
        num11 = num10;
      } while (num9 < length);
    }
    let num12 = 0;
    do {
      let charCodeAtResult1 = value.charCodeAt(num12);
      if (charCodeAtResult1 >= 65) {
        let sum1 = 100 * num11 + (charCodeAtResult1 - 55);
      } else {
        sum1 = 10 * num11 + (charCodeAtResult1 - 48);
      }
      result = sum1 % 97;
      num12 = num12 + 1;
      num11 = result;
    } while (num12 < 4);
    isMatch = 1 === result;
  }
  return isMatch;
}
function isValidJWT(str) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  try {
    const parts = str.split(".");
    if (3 !== parts.length) {
      return false;
    } else {
      const first = _slicedToArray(tmp3, 1)[0];
      if (first) {
        const _JSON = JSON;
        const _atob = atob;
        const parsed = JSON.parse(atob(first));
        let tmp7 = !("typ" in parsed);
        if (!tmp7) {
          let typ;
          if (tmp6 != null) {
            typ = tmp6.typ;
          }
          tmp7 = "JWT" === typ;
        }
        if (tmp7) {
          let alg = tmp6.alg;
          if (alg) {
            let tmp13 = !tmp;
            if (tmp) {
              let tmp15 = "alg" in tmp6;
              if (tmp15) {
                tmp15 = parsed.alg === tmp;
              }
              tmp13 = tmp15;
            }
            alg = tmp13;
          }
          tmp7 = alg;
        }
        return tmp7;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
}
function normalizeDef(shape) {
  const keys = Object.keys(shape.shape);
  let ownPropertySymbols = Object.getOwnPropertySymbols(shape.shape);
  if (!ownPropertySymbols.length) {
    ownPropertySymbols = closure_28;
  }
  let tmp = keys;
  if (ownPropertySymbols.length) {
    items = [];
    HermesBuiltin.arraySpread(ownPropertySymbols, HermesBuiltin.arraySpread(keys, 0));
    tmp = items;
  }
  const iter = tmp[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp8 = nextResult;
    shape = shape.shape;
    let hasItem;
    if (shape != null) {
      let tmp11 = shape[tmp8];
      if (tmp11 != null) {
        let _zod = tmp11._zod;
        if (_zod != null) {
          let traits = _zod.traits;
          if (traits != null) {
            hasItem = traits.has("$ZodType");
          }
        }
      }
    }
    if (hasItem) {
      continue;
    } else {
      let _Error = Error;
      let _String = String;
      let _HermesInternal = HermesInternal;
      let str = "\": expected a Zod schema";
      let str2 = "Invalid element at key \"";
      let tmp13 = new.target;
      let tmp14 = new.target;
      let error = new Error("Invalid element at key \"" + String(tmp8) + "\": expected a Zod schema");
      throw error;
    }
  }
  const obj = {};
  const merged = Object.assign(shape);
  obj.allKeys = tmp;
  obj.symbolKeys = ownPropertySymbols;
  const optionalKeysResult = closure_10.optionalKeys(shape.shape);
  obj.keySet = new Set(keys);
  obj.numKeys = keys.length;
  const set = new Set(keys);
  obj.optionalKeys = new Set(optionalKeysResult);
  return obj;
}
function handleCatchall(items, value, value, abortEarly, value2, inst, arg6) {
  closure_0 = value;
  let iter = value;
  closure_1 = value;
  items = [];
  const keySet = value2.keySet;
  const _zod = value2.catchall._zod;
  const type = _zod.def.type;
  const optin = _zod.optin;
  const optout = _zod.optout;
  let num = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp5 = num;
    while (keys[tmp] !== undefined) {
      closure_0 = tmp6;
      length = tmp5;
      if (arg6) {
        length = tmp5;
        if (iter.issues.length !== tmp5) {
          let num2 = 0;
          if (!closure_10.aborted(iter, tmp5)) {
            length = iter.issues.length;
          }
        }
        num = tmp5;
        if (0 === num2) {
          break;
        }
      }
      tmp5 = length;
      num2 = 1;
      if (!keySet.has(tmp6)) {
        if ("__proto__" === tmp6) {
          tmp5 = length;
          num2 = 1;
          if ("never" === type) {
            let arr = items.push(tmp6);
            tmp5 = length;
            num2 = 1;
          }
        } else if ("never" === type) {
          let arr2 = items.push(tmp6);
          tmp5 = length;
          num2 = 1;
        } else {
          let obj2 = { value: value[tmp6], issues: [] };
          let runResult = _zod.run(obj2, abortEarly);
          let _Promise2 = Promise;
          if (runResult instanceof Promise) {
            let arr3 = items.push(runResult.then((issues) => {
              let tmp3 = closure_0 in require;
              if (issues.issues.length) {
                issues = exports.issues;
                const push = issues.push;
                items = [];
                HermesBuiltin.arraySpread(closure_10.prefixIssues(closure_0, issues.issues), 0);
                HermesBuiltin.apply(items, issues);
              }
              if (!tmp3) {
                if (undefined === dependencyMap) {
                  if (!issues.issues.length) {
                    const issues1 = exports.issues;
                    const obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID" };
                    const items1 = [closure_0];
                    obj.path = items1;
                    issues1.push(obj);
                  }
                }
              }
              if (undefined === issues.value) {
                if (!tmp3) {
                  tmp3 = "defaulted" === dependencyMap && !tmp4;
                  const tmp13 = "defaulted" === dependencyMap && !tmp4;
                }
                if (tmp3) {
                  exports.value[closure_0] = undefined;
                }
              } else {
                exports.value[closure_0] = issues.value;
              }
              tmp4 = "optional" === _slicedToArray;
            }));
            tmp5 = length;
          } else {
            let tmp8 = tmp6 in value;
            if (!tmp8) {
              if (tmp3) {
                tmp5 = length;
              }
            }
            if (runResult.issues.length) {
              if (undefined !== optin) {
                if (tmp3) {
                  tmp5 = length;
                }
              }
              let issues = iter.issues;
              let push = issues.push;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(closure_10.prefixIssues(tmp6, runResult.issues), 0);
              let applyResult = HermesBuiltin.apply(items1, issues);
            }
            if (!tmp8) {
              if (undefined === optin) {
                tmp5 = length;
                if (!runResult.issues.length) {
                  let issues1 = iter.issues;
                  let obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID" };
                  let items2 = [tmp6];
                  obj.path = items2;
                  let arr4 = issues1.push(obj);
                  tmp5 = length;
                }
              }
            }
            if (undefined === runResult.value) {
              if (!tmp8) {
                let tmp17 = tmp2;
                if (tmp2) {
                  tmp17 = !tmp3;
                }
                tmp8 = tmp17;
              }
              tmp5 = length;
              if (tmp8) {
                iter.value[tmp6] = undefined;
                tmp5 = length;
              }
            } else {
              iter.value[tmp6] = runResult.value;
              tmp5 = length;
            }
          }
        }
      }
    }
  }
  if (items.length) {
    const issues2 = iter.issues;
    const obj3 = { code: "unrecognized_keys", keys: items, input: value, inst, continue: true };
    issues2.push(obj3);
  }
  if (items.length) {
    iter = Promise.all(items).then(() => closure_1);
    const allPromises = Promise.all(items);
  }
  return iter;
}
function handleUnionResults(arr, issues, inst, arg3) {
  closure_0 = arg3;
  const iter = arr[Symbol.iterator]();
  const iter2 = iter.next();
  while (iter !== undefined) {
    if (0 === iter2.issues.length) {
      issues.value = iter2.value;
      iter.return();
      return issues;
    }
  }
  const found = arr.filter((item) => !closure_1_10.aborted(item));
  if (1 === found.length) {
    issues.value = found[0].value;
    let first = found[0];
  } else {
    issues = issues.issues;
    const obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
        })
    };
    arr = issues.push(obj);
    first = issues;
  }
  return first;
}
function handleExclusiveUnionResults(arr, issues, inst, arg3) {
  closure_0 = arg3;
  items = [];
  for (let num = 0; num < arr.length; num = num + 1) {
    if (0 === arr[num].issues.length) {
      arr = items.push(num);
    }
  }
  if (1 === items.length) {
    issues.value = arr[items[0]].value;
  } else if (0 === items.length) {
    issues = issues.issues;
    const obj2 = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
        })
    };
    issues.push(obj2);
  } else {
    const issues1 = issues.issues;
    const obj = { code: "invalid_union", input: issues.value, inst, errors: [], inclusive: false, matches: items };
    issues1.push(obj);
  }
  return issues;
}
function discriminatorMap(def) {
  const map = new Map();
  const iter = def.options[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let propValues = nextResult._zod.propValues;
    let tmp3;
    let tmp2 = nextResult;
    if (propValues != null) {
      tmp3 = propValues[def.discriminator];
    }
    let tmp4 = tmp3;
    if (tmp3) {
      if (0 !== tmp4.size) {
        for (const item10029 of tmp3) {
          if (map.has(item10029)) {
            if (undefined !== item10029) {
              let _Error = Error;
              let _String = String;
              let _HermesInternal = HermesInternal;
              let str = "\"";
              let str2 = "Duplicate discriminator value \"";
              let tmp15 = new.target;
              let tmp16 = new.target;
              let error = new Error("Duplicate discriminator value \"" + String(item10029) + "\"");
              throw error;
            } else {
              let result = map.set(item10029, null);
            }
          } else {
            let result1 = map.set(item10029, tmp2);
          }
          continue;
        }
        continue;
      }
    }
    let _Error2 = Error;
    let options = def.options;
    let _HermesInternal2 = HermesInternal;
    let str3 = "\"";
    let str4 = "Invalid discriminated union option at index \"";
    let tmp19 = new.target;
    let tmp20 = new.target;
    let error1 = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
    throw error1;
  }
  return map;
}
function mergeValues(data, arg1) {
  if (data === arg1) {
    const obj2 = { valid: true, data };
    return obj2;
  } else {
    const _Date2 = Date;
    if (data instanceof Date) {
      const _Date = Date;
      if (arg1 instanceof Date) {
        if (+data === +arg1) {
          const obj3 = { valid: true, data };
          return obj3;
        }
      }
    }
    if (closure_10.isPlainObject(data)) {
      if (closure_10.isPlainObject(arg1)) {
        const _Object = Object;
        closure_0 = Object.keys(arg1);
        const _Object2 = Object;
        const keys = Object.keys(data);
        const found = keys.filter((item) => -1 !== closure_0.indexOf(item));
        const obj4 = {};
        const merged = Object.assign(data);
        const merged1 = Object.assign(arg1);
        const _Object3 = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("__proto__");
        } else {
          hasOwnPropertyResult = call(obj4, "__proto__");
        }
        if (hasOwnPropertyResult) {
          delete tmp[tmp2];
        }
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp21 = nextResult;
          if ("__proto__" !== nextResult) {
            let tmp24 = mergeValues(data[tmp21], arg1[tmp21]);
            let tmp25 = tmp24;
            if (tmp24.valid) {
              obj4[tmp21] = tmp25.data;
            } else {
              let obj5 = { valid: false, mergeErrorPath: null };
              items = [tmp21];
              let arraySpreadResult = HermesBuiltin.arraySpread(tmp25.mergeErrorPath, 1);
              obj5.mergeErrorPath = items;
              iter.return();
              return obj5;
            }
          }
          continue;
        }
        const obj6 = { valid: true, data: obj4 };
        return obj6;
      }
    }
    const _Array = Array;
    if (Array.isArray(data)) {
      const _Array2 = Array;
      if (Array.isArray(arg1)) {
        if (data.length !== arg1.length) {
          const obj7 = { valid: false, mergeErrorPath: [] };
          return obj7;
        } else {
          const items1 = [];
          let num2 = 0;
          if (0 < data.length) {
            const tmp4 = mergeValues(data[num2], arg1[num2]);
            while (tmp4.valid) {
              let arr = items1.push(tmp4.data);
              num2 = num2 + 1;
            }
            const obj8 = { valid: false, mergeErrorPath: null };
            const items2 = [num2];
            HermesBuiltin.arraySpread(tmp4.mergeErrorPath, 1);
            obj8.mergeErrorPath = items2;
            return obj8;
          }
          const obj9 = { valid: true, data: items1 };
          return obj9;
        }
      }
    }
    const obj10 = { valid: false, mergeErrorPath: [] };
    return obj10;
  }
}
function handleIntersectionResults(nextPromise, runResult, runResult1) {
  const map1 = new Map();
  function collect(nextResult, l) {
    if ("unrecognized_keys" === nextResult.code) {
      const path = nextResult.path;
      length = undefined;
      if (path != null) {
        length = path.length;
      }
      if (!length) {
        if (closure_0 == null) {
          closure_0 = nextResult;
        }
        let keys = nextResult.keys;
      }
      keys[Symbol.iterator]();
    }
    if ("invalid_key" === nextResult.code) {
      if ("record" === nextResult.origin) {
        const path1 = nextResult.path;
        let length1;
        if (path1 != null) {
          length1 = path1.length;
        }
        if (1 === length1) {
          const _String = String;
          const StringResult = String(nextResult.path[0]);
          if (!map1.has(StringResult)) {
            const result = map1.set(StringResult, nextResult);
          }
          items = [StringResult];
          keys = items;
        }
      }
    }
    return false;
  }
  const iter = runResult.issues[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (!collect(nextResult, "l")) {
      let issues = nextPromise.issues;
      let arr = issues.push(tmp3);
    }
    continue;
  }
  const iter2 = runResult1.issues[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp7 = nextResult1;
    if (!collect(nextResult1, "r")) {
      let issues1 = nextPromise.issues;
      let arr2 = issues1.push(tmp7);
    }
    continue;
  }
  items = [...new Map()];
  const found = items.filter((item) => {
    [, tmp] = item;
    return tmp.l && tmp.r;
  });
  const mapped = found.map((item) => {
    [tmp] = item;
    return tmp;
  });
  if (mapped.length) {
    if (nextPromise) {
      let found1 = mapped.filter((item) => {
        const keys = nextPromise.keys;
        return keys.includes(item);
      });
    } else {
      found1 = [];
    }
    if (found1.length) {
      const issues2 = nextPromise.issues;
      const obj = {};
      const merged = Object.assign(nextPromise);
      obj.keys = found1;
      issues2.push(obj);
    }
    for (const item10075 of mapped) {
      let hasItem = found1.includes(item10075);
      let hasItem1 = !hasItem;
      if (!hasItem) {
        hasItem1 = map1.has(item10075);
      }
      if (hasItem1) {
        let issues3 = arg0.issues;
        let arr4 = issues3.push(map1.get(item10075));
      }
      continue;
    }
  }
  const tmp23 = mergeValues(runResult.value, runResult1.value);
  if (tmp23.valid) {
    nextPromise.value = tmp23.data;
    return nextPromise;
  } else if (closure_10.aborted(nextPromise)) {
    return nextPromise;
  } else {
    const _Error = Error;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unmergable intersection. Error path: " + JSON.stringify(tmp23.mergeErrorPath));
    throw error;
  }
  const map = new Map();
}
function getTupleOptStart(items, optin) {
  let diff = items.length - 1;
  if (0 <= diff) {
    while (true) {
      if ("optin" === optin) {
        let tmp3 = undefined !== items[diff]._zod.optin;
      } else {
        tmp3 = "optional" === items[diff]._zod.optout;
      }
      if (!tmp3) {
        break;
      } else {
        diff = diff - 1;
      }
    }
    return diff + 1;
  }
  return 0;
}
function handleTupleResult(issues, issues2, keys) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    items = [];
    HermesBuiltin.arraySpread(closure_10.prefixIssues(keys, issues.issues), 0);
    HermesBuiltin.apply(items, issues);
  }
  issues2.value[keys] = issues.value;
}
function handleTupleResults(array, value, items, value, tupleOptStart) {
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let iter = array[num];
      let tmp = num < value.length;
      if (!tmp) {
        if (num >= tupleOptStart) {
          if ("optional" === items[num]._zod.optin) {
            break;
          }
        }
      }
      if (iter.issues.length) {
        if (!tmp) {
          if (num >= tupleOptStart) {
            value.value.length = num;
          }
        }
        let issues = value.issues;
        let push = issues.push;
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(closure_10.prefixIssues(num, iter.issues), 0);
        let applyResult = HermesBuiltin.apply(items, issues);
      }
      value.value[num] = iter.value;
      num = num + 1;
    }
    value.value.length = num;
  }
  let diff = value.value.length - 1;
  if (diff >= value.length) {
    if ("optional" === items[diff]._zod.optout) {
      if (undefined === value.value[diff]) {
        value.value.length = diff;
        const diff1 = diff - 1;
        while (diff1 >= value.length) {
          if ("optional" !== items[diff1]._zod.optout) {
            break;
          } else {
            diff = diff1;
            if (undefined !== value.value[diff1]) {
              break;
            }
          }
        }
      }
    }
  }
  return value;
}
function handleMapResult(issues, issues2, issues3, key, value, inst, abortEarly) {
  closure_0 = abortEarly;
  if (issues.issues.length) {
    const propertyKeyTypes = closure_10.propertyKeyTypes;
    issues = issues3.issues;
    const push = issues.push;
    if (propertyKeyTypes.has(typeof key)) {
      items = [];
      HermesBuiltin.arraySpread(closure_10.prefixIssues(key, issues.issues), 0);
      HermesBuiltin.apply(items, issues);
    } else {
      const obj2 = { code: "invalid_key", origin: "map", input: value, inst, issues: null };
      const issues1 = issues.issues;
      obj2.issues = issues1.map((item) => closure_10.finalizeIssue(item, closure_0, fnResult.config()));
      push(obj2);
    }
  }
  if (issues2.issues.length) {
    const propertyKeyTypes2 = closure_10.propertyKeyTypes;
    issues2 = issues3.issues;
    const push2 = issues2.push;
    if (propertyKeyTypes2.has(typeof key)) {
      const items1 = [];
      HermesBuiltin.arraySpread(closure_10.prefixIssues(key, issues2.issues), 0);
      HermesBuiltin.apply(items1, issues2);
    } else {
      const obj4 = { origin: "map", code: "invalid_element", input: value, inst, key, issues: null };
      issues3 = issues2.issues;
      obj4.issues = issues3.map((item) => closure_10.finalizeIssue(item, closure_0, fnResult.config()));
      push2(obj4);
    }
  }
  value = issues3.value;
  const result = value.set(issues.value, issues2.value);
}
function handleSetResult(promise, nextPromise) {
  if (promise.issues.length) {
    const issues = nextPromise.issues;
    const push = issues.push;
    items = [];
    HermesBuiltin.arraySpread(promise.issues, 0);
    HermesBuiltin.apply(items, issues);
  }
  value = nextPromise.value;
  value.add(promise.value);
}
function handleCodecAResult(issues, transform, direction) {
  closure_1 = transform;
  closure_2 = direction;
  if (issues.issues.length) {
    issues.aborted = true;
    return issues;
  } else {
    if ("forward" === tmp) {
      const transformResult = transform.transform(issues.value, issues);
      if (transformResult instanceof Promise) {
        let nextPromise = transformResult.then((value) => {
          if (issues.issues.length) {
            issues.aborted = true;
            let runResult = issues;
          } else {
            const _zod = tmp2._zod;
            const obj = { value, issues: issues.issues };
            runResult = _zod.run(obj, tmp3);
          }
          return runResult;
        });
      } else if (issues.issues.length) {
        issues.aborted = true;
        nextPromise = issues;
      } else {
        const _zod2 = tmp5._zod;
        const obj2 = { value: transformResult, issues: issues.issues };
        nextPromise = _zod2.run(obj2, direction);
      }
      return nextPromise;
    } else {
      const reverseTransformResult = transform.reverseTransform(issues.value, issues);
      if (reverseTransformResult instanceof Promise) {
        let nextPromise1 = reverseTransformResult.then((value) => {
          if (issues.issues.length) {
            issues.aborted = true;
            let runResult = issues;
          } else {
            const _zod = tmp2._zod;
            const obj = { value, issues: issues.issues };
            runResult = _zod.run(obj, tmp3);
          }
          return runResult;
        });
      } else if (issues.issues.length) {
        issues.aborted = true;
        nextPromise1 = issues;
      } else {
        let _zod = tmp2._zod;
        let obj = { value: reverseTransformResult, issues: issues.issues };
        nextPromise1 = _zod.run(obj, direction);
      }
      return nextPromise1;
    }
    tmp = direction.direction || "forward";
  }
}
function handleReadonlyResult(memo) {
  if (!memo.memo) {
    const _Object = Object;
    memo.value = Object.freeze(memo.value);
  }
  return memo;
}
function partPattern(innerType) {
  let def = innerType._zod.def;
  const pattern = innerType._zod.pattern;
  innerType = def.innerType;
  if (innerType == null) {
    innerType = innerType._zod.innerType;
  }
  if (innerType) {
    let pattern2 = innerType._zod.pattern;
    if (pattern2 != null) {
      let source = pattern2.source;
    }
    let tmp4 = partPattern(innerType);
    closure_0 = tmp4;
    let replaced = str;
    if (str) {
      replaced = str;
      if (source) {
        replaced = str;
        if (tmp4) {
          replaced = str;
          if (tmp4 !== source) {
            replaced = str.replace(closure_10.cleanRegex(source), () => closure_10.cleanRegex(closure_0));
          }
        }
      }
    }
    return replaced;
  } else {
    if (def.options) {
      const options = def.options;
      const mapped = options.map(partPattern);
      const _Boolean = Boolean;
      if (mapped.every(Boolean)) {
        const mapped1 = mapped.map((item) => closure_1_10.cleanRegex(item));
        const _HermesInternal = HermesInternal;
        return "^(" + mapped1.join("|") + ")$";
      }
    }
    return (function leafPattern(_zod) {
      let tmp;
      let tmp2;
      const def = _zod._zod.def;
      ({ pattern, format } = def);
      let hasItem;
      if (format != null) {
        hasItem = format.includes("int");
      }
      let tmp4 = hasItem;
      let checks = def.checks;
      if (checks == null) {
        checks = [];
      }
      const iter = checks[Symbol.iterator]();
      while (iter !== undefined) {
        let def2 = iter.next()._zod.def;
        let arr2 = def2;
        if (def2.pattern) {
          pattern = arr2.pattern;
        }
        if (!tmp4) {
          let format2 = arr2.format;
          let hasItem1;
          if (format2 != null) {
            hasItem1 = format2.includes("int");
          }
          tmp4 = hasItem1;
        }
        length = arr2.minimum;
        if (length == null) {
          length = arr2.length;
        }
        let tmp11 = length;
        let length2 = arr2.maximum;
        if (length2 == null) {
          length2 = arr2.length;
        }
        let tmp14 = length2;
        let tmp16 = undefined !== tmp11;
        if (tmp16) {
          let tmp18 = undefined === tmp;
          if (!tmp18) {
            tmp18 = tmp11 > tmp;
          }
          tmp16 = tmp18;
        }
        if (tmp16) {
          tmp = length;
        }
        let tmp22 = undefined !== tmp14;
        if (tmp22) {
          let tmp24 = undefined === tmp2;
          if (!tmp24) {
            tmp24 = tmp14 < tmp2;
          }
          tmp22 = tmp24;
        }
        if (tmp22) {
          tmp2 = length2;
        }
        continue;
      }
      if (pattern) {
        return pattern.source;
      } else {
        if (undefined !== tmp) {
          if (undefined !== tmp2) {
            if (tmp > tmp2) {
              return "(?!)";
            }
          }
        }
        if (undefined === tmp) {
          if (undefined === tmp2) {
            const pattern2 = _zod._zod.pattern;
            let integer = pattern2;
            if (tmp4) {
              integer = pattern2;
              if (pattern2 === closure_1_9.number) {
                integer = closure_1_9.integer;
              }
            }
            let source;
            if (integer != null) {
              source = integer.source;
            }
            return source;
          }
        }
        const obj = { minimum: tmp, maximum: tmp2 };
        return closure_1_9.string(obj).source;
      }
    })(innerType);
  }
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let _Object3 = Object;
    function standardProps(arg0) {
      closure_0 = arg0;
      return {
        validate(value) {
          try {
            const obj = { async: false };
            const _zod = self._zod;
            const obj2 = { value, issues: [] };
            const runResult = _zod.run(obj2, obj);
            if (runResult instanceof Promise) {
              return (function validateAsync(self, value) {
                self = this;
                const apply = closure_1_12.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(self, value);
            } else {
              return toStandardResult(tmp3, obj);
            }
          } catch (err) {
          }
        },
        vendor: "zod",
        version: 1
      };
    }
    function isValidIPv6(arg0) {
      let isMatch = re20.test(arg0);
      if (isMatch) {
        const _HermesInternal = HermesInternal;
        isMatch = canParseURL("http://[" + arg0 + "]");
      }
      return isMatch;
    }
    function isValidCIDRv6(str) {
      const parts = str.split("/");
      if (2 !== parts.length) {
        return false;
      } else {
        [tmp11, tmp12] = parts;
        if (tmp12) {
          const _Number = Number;
          const NumberResult = Number(tmp12);
          const _HermesInternal = HermesInternal;
          let tmp3 = "" + NumberResult === tmp12;
          if (tmp3) {
            let tmp4 = NumberResult < 0;
            if (!tmp4) {
              tmp4 = NumberResult > 128;
            }
            let tmp5 = !tmp4;
            if (!tmp4) {
              let isMatch = re20.test(tmp11);
              if (isMatch) {
                const _HermesInternal2 = HermesInternal;
                isMatch = canParseURL("http://[" + tmp11 + "]");
              }
              tmp5 = isMatch;
            }
            tmp3 = tmp5;
          }
          return tmp3;
        } else {
          return false;
        }
        const tmp10 = _slicedToArray(parts, 2);
      }
    }
    function isValidBase64URL(str) {
      const base64urlCharset = exports.base64urlCharset;
      if (base64urlCharset.test(str)) {
        const replaced = str.replace(/[-_]/g, (arg0) => {
          let str = "/";
          if ("-" === arg0) {
            str = "+";
          }
          return str;
        });
        const _Math = Math;
        return isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
      } else {
        return false;
      }
    }
    function isValidCreditCard(str) {
      let diff;
      const creditCard = closure_9.creditCard;
      let isMatch = creditCard.test(str);
      if (isMatch) {
        const replaced = str.replace(re22, "");
        length = replaced.length;
        let num4 = 0;
        let num5 = 1;
        let num6 = 0;
        if (length) {
          do {
            diff = length - 1;
            let diff1 = replaced.charCodeAt(diff) - 48;
            let tmp5 = num5 ^ 1;
            let tmp7 = diff1;
            if (tmp5) {
              tmp7 = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][diff1];
            }
            num4 = num4 + tmp7;
            num5 = tmp5;
            num6 = num4;
            length = diff;
          } while (diff);
        }
        isMatch = num6 % 10 === 0;
      }
      return isMatch;
    }
    exports.$ZodType = undefined;
    exports.clone = undefined;
    exports.$ZodString = undefined;
    exports.$ZodStringFormat = undefined;
    exports.$ZodGUID = undefined;
    exports.$ZodUUID = undefined;
    exports.$ZodEmail = undefined;
    exports.URL_BAD_FORMAT = undefined;
    exports.URL_UNPARSEABLE = undefined;
    exports.$ZodURL = undefined;
    exports.$ZodEmoji = undefined;
    exports.$ZodNanoID = undefined;
    exports.$ZodCUID = undefined;
    exports.$ZodCUID2 = undefined;
    exports.$ZodULID = undefined;
    exports.$ZodXID = undefined;
    exports.$ZodKSUID = undefined;
    exports.$ZodISODateTime = undefined;
    exports.$ZodISODate = undefined;
    exports.$ZodISOTime = undefined;
    exports.$ZodISODuration = undefined;
    exports.$ZodIPv4 = undefined;
    exports.$ZodIPv6 = undefined;
    exports.$ZodMAC = undefined;
    exports.$ZodCIDRv4 = undefined;
    exports.$ZodCIDRv6 = undefined;
    exports.base64Charset = undefined;
    exports.$ZodBase64 = undefined;
    exports.base64urlCharset = undefined;
    exports.$ZodBase64URL = undefined;
    exports.$ZodE164 = undefined;
    exports.$ZodCreditCard = undefined;
    exports.$ZodIBAN = undefined;
    exports.$ZodJWT = undefined;
    exports.$ZodCustomStringFormat = undefined;
    exports.$ZodNumber = undefined;
    exports.$ZodNumberFormat = undefined;
    exports.$ZodBoolean = undefined;
    exports.$ZodBigInt = undefined;
    exports.$ZodBigIntFormat = undefined;
    exports.$ZodSymbol = undefined;
    exports.$ZodUndefined = undefined;
    exports.$ZodNull = undefined;
    exports.$ZodAny = undefined;
    exports.$ZodUnknown = undefined;
    exports.$ZodNever = undefined;
    exports.$ZodVoid = undefined;
    exports.$ZodDate = undefined;
    exports.$ZodArray = undefined;
    exports.$ZodObject = undefined;
    exports.$ZodObjectJIT = undefined;
    exports.$ZodUnion = undefined;
    exports.$ZodXor = undefined;
    exports.$ZodDiscriminatedUnion = undefined;
    exports.$ZodIntersection = undefined;
    exports.$ZodTuple = undefined;
    exports.$ZodRecord = undefined;
    exports.$ZodMap = undefined;
    exports.$ZodSet = undefined;
    exports.$ZodEnum = undefined;
    exports.$ZodLiteral = undefined;
    exports.$ZodFile = undefined;
    exports.$ZodTransform = undefined;
    exports.$ZodOptional = undefined;
    exports.$ZodExactOptional = undefined;
    exports.$ZodNullable = undefined;
    exports.$ZodDefault = undefined;
    exports.$ZodPrefault = undefined;
    exports.$ZodNonOptional = undefined;
    exports.$ZodSuccess = undefined;
    exports.$ZodCatch = undefined;
    exports.$ZodNaN = undefined;
    exports.$ZodPipe = undefined;
    exports.$ZodCodec = undefined;
    exports.$ZodPreprocess = undefined;
    exports.$ZodReadonly = undefined;
    exports.$ZodTemplateLiteral = undefined;
    exports.$ZodFunction = undefined;
    exports.$ZodPromise = undefined;
    exports.$ZodLazy = undefined;
    exports.$ZodCustom = undefined;
    exports.standardProps = standardProps;
    exports.canParseURL = canParseURL;
    exports.validateURL = validateURL;
    exports.parseURLObject = parseURLObject;
    exports.stripTabAndNewline = stripTabAndNewline;
    exports.urlHostnameOk = urlHostnameOk;
    exports.urlProtocolOk = urlProtocolOk;
    exports.isValidIPv6 = isValidIPv6;
    exports.isValidCIDRv6 = isValidCIDRv6;
    exports.isValidBase64 = isValidBase64;
    exports.isValidBase64URL = isValidBase64URL;
    exports.isValidCreditCard = isValidCreditCard;
    exports.isValidIBAN = isValidIBAN;
    exports.isValidJWT = isValidJWT;
    exports.getDiscriminatedOption = function getDiscriminatedOption(_zod, arg1) {
      _zod = _zod._zod;
      let optionsMap = _zod.bag.optionsMap;
      if (!optionsMap) {
        const tmp2 = discriminatorMap(_zod.def);
        _zod.bag.optionsMap = tmp2;
        optionsMap = tmp2;
      }
      value = optionsMap.get(arg1);
      if (null === value) {
        const _Error = Error;
        const _String = String;
        const _HermesInternal = HermesInternal;
        const error = new Error("Ambiguous discriminator value \"" + String(arg1) + "\"");
        throw error;
      } else {
        return value;
      }
    };
    exports.mergeValues = mergeValues;
    let closure_7 = fn(_mod12164);
    let fnResult = fn(_mod12159);
    let closure_9 = fn(_mod12165);
    let closure_10 = fn(require("module_12160"));
    let obj = {};
    Object.defineProperty(obj, "~standard", {
      get: function() {
            let self = this;
            return closure_10.hide(this, "~standard", {
              validate(value) {
                try {
                  const obj = { async: false };
                  const _zod = self._zod;
                  const obj2 = { value, issues: [] };
                  const runResult = _zod.run(obj2, obj);
                  if (runResult instanceof Promise) {
                    return (function validateAsync(self, value) {
                      self = this;
                      const apply = closure_1_12.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(self, value);
                  } else {
                    return toStandardResult(tmp3, obj);
                  }
                } catch (err) {
                }
              },
              vendor: "zod",
              version: 1
            });
          },
      set: function(value) {
            closure_10.own(this, "~standard", value);
          }
    });
    exports.$ZodType = fnResult.$constructor("$ZodType", (arg0, def) => {
      let tmp = arg0;
      let obj = arg0;
      if (arg0 == null) {
        obj = {};
        tmp = obj;
      }
      tmp._zod.def = def;
      let bag = tmp._zod.bag;
      if (!bag) {
        bag = {};
      }
      tmp._zod.bag = bag;
      tmp._zod.version = obj(12166).version;
      let checks = tmp._zod.def.checks;
      const traits = tmp._zod.traits;
      if (traits.has("$ZodCheck")) {
        items = [tmp];
        let items1 = checks;
        if (checks == null) {
          items1 = [];
        }
        HermesBuiltin.arraySpread(items1, 1);
        let tmp3 = items;
      } else {
        length = undefined;
        if (checks != null) {
          length = checks.length;
        }
        let items2 = [];
        if (length) {
          HermesBuiltin.arraySpread(checks, 0);
          tmp3 = items2;
        } else {
          tmp3 = items2;
        }
      }
      items2 = tmp3;
      checks = tmp3[Symbol.iterator]();
    }, obj);
    function toStandardResult(issues, arg1) {
      closure_0 = arg1;
      if (issues.issues.length) {
        const obj2 = { issues: null };
        issues = issues.issues;
        obj2.issues = issues.map((item) => closure_10.finalizeIssue(item, closure_0, fnResult.config()));
        let obj = obj2;
      } else {
        obj = { value: issues.value };
      }
      return obj;
    }
    const _Object4 = Object;
    let obj2 = {
      enumerable: true,
      get() {
            return require("module_12160").clone;
          }
    };
    Object.defineProperty(exports, "clone", obj2);
    exports.$ZodString = fnResult.$constructor("$ZodString", (_zod, pattern) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, pattern);
      let anyString = pattern.pattern;
      if (anyString == null) {
        anyString = closure_9.anyString;
      }
      _zod._zod.pattern = anyString;
      _zod._zod.parse = (value, arg1) => {
        if (pattern.coerce) {
          try {
            const _String = String;
            value.value = String(value.value);
          } catch (err) {
          }
        }
        if (typeof value.value !== "string") {
          const issues = value.issues;
          const obj = { expected: "string", code: "invalid_type", input: value.value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodStringFormat = fnResult.$constructor("$ZodStringFormat", (arg0, arg1) => {
      const $ZodCheckStringFormat = closure_7.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, arg1);
      const $ZodString = exports.$ZodString;
      $ZodString.init(arg0, arg1);
    });
    exports.$ZodGUID = fnResult.$constructor("$ZodGUID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.guid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodUUID = fnResult.$constructor("$ZodUUID", (arg0, version) => {
      if (version.version) {
        const tmp3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[version.version];
        if (undefined === tmp3) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid UUID version: \"" + version.version + "\"");
          throw error;
        } else if (version.pattern == null) {
          version.pattern = closure_9.uuid(tmp3);
        }
      } else if (version.pattern == null) {
        version.pattern = closure_9.uuid();
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, version);
    });
    exports.$ZodEmail = fnResult.$constructor("$ZodEmail", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.email;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.URL_BAD_FORMAT = 1;
    exports.URL_UNPARSEABLE = 2;
    const re16 = /[\t\n\r]/g;
    exports.$ZodURL = fnResult.$constructor("$ZodURL", (_zod, arg1) => {
      const inst = _zod;
      _exports = arg1;
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        try {
          const trimmed = value.value.trim();
          const url = abort;
          const tmp6 = validateURL(trimmed, abort);
          if (tmp6 === exports.URL_BAD_FORMAT) {
            const issues = value.issues;
            const obj2 = { code: "invalid_format", format: "url", note: "Invalid URL format", input: value.value, inst, continue: !url.abort };
            issues.push(obj2);
          } else if (tmp7 === tmp8.URL_UNPARSEABLE) {
            const issues1 = value.issues;
            const obj3 = { code: "invalid_format", format: "url", input: value.value, inst, continue: !url.abort };
            issues1.push(obj3);
          } else if (true === tmp7) {
            value.value = stripTabAndNewline(trimmed);
          } else {
            let hostname = url.hostname;
            if (hostname) {
              hostname = !urlHostnameOk(tmp7, url.hostname);
            }
            if (hostname) {
              const issues2 = value.issues;
              const obj = { code: "invalid_format", format: "url", note: "Invalid hostname", pattern: url.hostname.source, input: value.value, inst, continue: !url.abort };
              issues2.push(obj);
            }
            let protocol = url.protocol;
            if (protocol) {
              protocol = !urlProtocolOk(tmp7, url.protocol);
            }
            if (protocol) {
              const issues3 = value.issues;
              const obj4 = { code: "invalid_format", format: "url", note: "Invalid protocol", pattern: url.protocol.source, input: value.value, inst, continue: !url.abort };
              issues3.push(obj4);
            }
            if (url.normalize) {
              let href = tmp6.href;
            } else {
              href = stripTabAndNewline(trimmed);
            }
            value.value = href;
          }
          return tmp25;
        } catch (err) {
          const issues4 = iter.issues;
          const obj5 = { code: "invalid_format", format: "url", input: iter.value, inst, continue: !abort.abort };
          issues4.push(obj5);
          return tmp;
        }
      };
    });
    exports.$ZodEmoji = fnResult.$constructor("$ZodEmoji", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.emoji();
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodNanoID = fnResult.$constructor("$ZodNanoID", (arg0, pattern) => {
      if (undefined !== pattern.length) {
        const _Number = Number;
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid nanoid length: " + pattern.length);
        throw error;
      }
      if (pattern.pattern != null) {
        const $ZodStringFormat = exports.$ZodStringFormat;
        $ZodStringFormat.init(arg0, pattern);
      } else {
        if (undefined === pattern.length) {
          let nanoid = closure_9.nanoid;
        } else {
          nanoid = closure_9.nanoidOfLength(pattern.length);
        }
        pattern.pattern = nanoid;
      }
    });
    exports.$ZodCUID = fnResult.$constructor("$ZodCUID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cuid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCUID2 = fnResult.$constructor("$ZodCUID2", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cuid2;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodULID = fnResult.$constructor("$ZodULID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ulid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodXID = fnResult.$constructor("$ZodXID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.xid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodKSUID = fnResult.$constructor("$ZodKSUID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ksuid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODateTime = fnResult.$constructor("$ZodISODateTime", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.datetime(pattern);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODate = fnResult.$constructor("$ZodISODate", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.date;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISOTime = fnResult.$constructor("$ZodISOTime", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.time(pattern);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODuration = fnResult.$constructor("$ZodISODuration", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.duration;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodIPv4 = fnResult.$constructor("$ZodIPv4", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ipv4;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    const re20 = /^[0-9a-fA-F:.]+$/;
    exports.$ZodIPv6 = fnResult.$constructor("$ZodIPv6", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ipv6;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        value = value.value;
        let isMatch = re20.test(value);
        if (isMatch) {
          const _HermesInternal = HermesInternal;
          isMatch = canParseURL("http://[" + value + "]");
        }
        if (!isMatch) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "ipv6", input: value.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodMAC = fnResult.$constructor("$ZodMAC", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.mac(pattern.delimiter);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCIDRv4 = fnResult.$constructor("$ZodCIDRv4", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cidrv4;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCIDRv6 = fnResult.$constructor("$ZodCIDRv6", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cidrv6;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        const parts = value.value.split("/");
        let flag = false;
        if (2 === parts.length) {
          [tmp14, tmp15] = parts;
          flag = false;
          if (tmp15) {
            const _Number = Number;
            const NumberResult = Number(tmp15);
            const _HermesInternal = HermesInternal;
            let tmp3 = "" + NumberResult === tmp15;
            if (tmp3) {
              let tmp4 = NumberResult < 0;
              if (!tmp4) {
                tmp4 = NumberResult > 128;
              }
              let tmp5 = !tmp4;
              if (!tmp4) {
                let isMatch = re20.test(tmp14);
                if (isMatch) {
                  const _HermesInternal2 = HermesInternal;
                  isMatch = canParseURL("http://[" + tmp14 + "]");
                }
                tmp5 = isMatch;
              }
              tmp3 = tmp5;
            }
            flag = tmp3;
          }
          const tmp13 = _slicedToArray(parts, 2);
        }
        if (!flag) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "cidrv6", input: value.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
    exports.$ZodBase64 = fnResult.$constructor("$ZodBase64", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = _exports.base64Charset;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        if (!isValidBase64(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "base64", input: value.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.base64urlCharset = /^[A-Za-z0-9_-]*$/;
    exports.$ZodBase64URL = fnResult.$constructor("$ZodBase64URL", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = _exports.base64urlCharset;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        const base64urlCharset = exports.base64urlCharset;
        let flag = false;
        if (base64urlCharset.test(value.value)) {
          const replaced = str.replace(/[-_]/g, (arg0) => {
            let str = "/";
            if ("-" === arg0) {
              str = "+";
            }
            return str;
          });
          const _Math = Math;
          flag = isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
        }
        if (!flag) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "base64url", input: value.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodE164 = fnResult.$constructor("$ZodE164", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.e164;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    const re22 = /[- ]/g;
    exports.$ZodCreditCard = fnResult.$constructor("$ZodCreditCard", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = creditCard.creditCard;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        let diff;
        creditCard = creditCard.creditCard;
        let isMatch = creditCard.test(str);
        if (isMatch) {
          const replaced = str.replace(re22, "");
          length = replaced.length;
          let num4 = 0;
          let num5 = 1;
          let num6 = 0;
          if (length) {
            do {
              diff = length - 1;
              let diff1 = replaced.charCodeAt(diff) - 48;
              let tmp5 = num5 ^ 1;
              let tmp7 = diff1;
              if (tmp5) {
                tmp7 = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][diff1];
              }
              num4 = num4 + tmp7;
              num5 = tmp5;
              num6 = num4;
              length = diff;
            } while (diff);
          }
          isMatch = num6 % 10 === 0;
        }
        if (!isMatch) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "credit_card", input: value.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodIBAN = fnResult.$constructor("$ZodIBAN", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.iban;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        if (!isValidIBAN(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "iban", input: value.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodJWT = fnResult.$constructor("$ZodJWT", (_zod, arg1) => {
      const inst = _zod;
      _exports = arg1;
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        if (!isValidJWT(value.value, alg.alg)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "jwt", input: value.value, inst, continue: !alg.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCustomStringFormat = fnResult.$constructor("$ZodCustomStringFormat", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        if (!closure_1.fn(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: closure_1.format, input: value.value, inst, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodNumber = fnResult.$constructor("$ZodNumber", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.number;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _Number = Number;
            value.value = Number(value.value);
          } catch (err) {
          }
        }
        value = value.value;
        if (typeof value === "number") {
          const _Number4 = Number;
          if (!Number.isNaN(value)) {
            const _Number2 = Number;
            if (Number.isFinite(value)) {
              return value;
            }
          }
        }
        let tmp2;
        if (typeof value === "number") {
          const _Number5 = Number;
          let str = "NaN";
          if (!Number.isNaN(value)) {
            const _Number3 = Number;
            let StringResult;
            if (!Number.isFinite(value)) {
              const _String = String;
              StringResult = String(value);
            }
            str = StringResult;
          }
          tmp2 = str;
        }
        const issues = value.issues;
        if (tmp2) {
          const obj2 = { received: tmp2 };
          let obj3 = obj2;
        } else {
          obj3 = {};
        }
        const merged = Object.assign(obj3);
        issues.push({ expected: "number", code: "invalid_type", input: value, inst });
        return value;
      };
    });
    exports.$ZodNumberFormat = fnResult.$constructor("$ZodNumberFormat", (arg0, arg1) => {
      const $ZodCheckNumberFormat = closure_7.$ZodCheckNumberFormat;
      $ZodCheckNumberFormat.init(arg0, arg1);
      const $ZodNumber = exports.$ZodNumber;
      $ZodNumber.init(arg0, arg1);
    });
    exports.$ZodBoolean = fnResult.$constructor("$ZodBoolean", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.boolean;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _Boolean = Boolean;
            value.value = Boolean(value.value);
          } catch (err) {
          }
        }
        value = value.value;
        if (typeof value !== "boolean") {
          const issues = value.issues;
          const obj = { expected: "boolean", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodBigInt = fnResult.$constructor("$ZodBigInt", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.bigint;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _BigInt = BigInt;
            value.value = BigInt(value.value);
          } catch (err) {
          }
        }
        if (typeof value.value !== "bigint") {
          const issues = value.issues;
          const obj = { expected: "bigint", code: "invalid_type", input: value.value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodBigIntFormat = fnResult.$constructor("$ZodBigIntFormat", (arg0, arg1) => {
      const $ZodCheckBigIntFormat = closure_7.$ZodCheckBigIntFormat;
      $ZodCheckBigIntFormat.init(arg0, arg1);
      const $ZodBigInt = exports.$ZodBigInt;
      $ZodBigInt.init(arg0, arg1);
    });
    exports.$ZodSymbol = fnResult.$constructor("$ZodSymbol", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (typeof value !== "symbol") {
          const issues = value.issues;
          const obj = { expected: "symbol", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodUndefined = fnResult.$constructor("$ZodUndefined", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.undefined;
      items = [undefined];
      _zod._zod.values = new Set(items);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (undefined !== value) {
          const issues = value.issues;
          const obj = { expected: "undefined", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodNull = fnResult.$constructor("$ZodNull", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.null;
      _zod._zod.values = new Set([null]);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (null !== value) {
          const issues = value.issues;
          const obj = { expected: "null", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodAny = fnResult.$constructor("$ZodAny", (_zod, arg1) => {
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0) => arg0;
    });
    exports.$ZodUnknown = fnResult.$constructor("$ZodUnknown", (_zod, arg1) => {
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0) => arg0;
    });
    exports.$ZodNever = fnResult.$constructor("$ZodNever", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (input, arg1) => {
        const issues = input.issues;
        issues.push({ expected: "never", code: "invalid_type", input: input.value, inst });
        return input;
      };
    });
    exports.$ZodVoid = fnResult.$constructor("$ZodVoid", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (undefined !== value) {
          const issues = value.issues;
          const obj = { expected: "void", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodDate = fnResult.$constructor("$ZodDate", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _Date = Date;
            const date = new Date(value.value);
            value.value = date;
          } catch (err) {
          }
        }
        value = value.value;
        let tmp7 = tmp6;
        if (value instanceof Date) {
          const _Number = Number;
          tmp7 = !Number.isNaN(value.getTime());
        }
        if (tmp7) {
          return value;
        } else {
          const issues = value.issues;
          let obj = { expected: "date", code: "invalid_type", input: value };
          const tmp8 = tmp6 ? { received: "Invalid Date" } : {};
          const merged = Object.assign(tmp8);
          obj.inst = inst;
          obj = issues.push(obj);
        }
      };
    });
    function arraySize(arg0) {
      let num = -1;
      if (Array.isArray(arg0)) {
        num = arg0.length;
      }
      return num;
    }
    function mapSize(size) {
      let num = -1;
      if (size instanceof Map) {
        num = size.size;
      }
      return num;
    }
    function setSize(size) {
      let num = -1;
      if (size instanceof Set) {
        num = size.size;
      }
      return num;
    }
    exports.$ZodArray = fnResult.$constructor("$ZodArray", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let memoizer = closure_8.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.attach(_zod);
      }
      _zod._zod.parse = (value, abortEarly) => {
        let nextPromise = value;
        inst = value;
        value = value.value;
        memoizer = value;
        if (Array.isArray(value)) {
          if (memoizer) {
            const _Array2 = Array;
            let allocResult = obj2.alloc(inst, nextPromise, Array(value.length), abortEarly);
          } else {
            const _Array = Array;
            allocResult = Array(value.length);
          }
          nextPromise.value = allocResult;
          items = [];
          abortEarly = undefined;
          if (abortEarly != null) {
            abortEarly = abortEarly.abortEarly;
          }
          if (0 < value.length) {
            function _loop2(sum) {
              const _zod = abortEarly.element._zod;
              const runResult = _zod.run({ value: value[sum], issues: [] }, abortEarly);
              if (runResult instanceof Promise) {
                items.push(runResult.then((issues) => {
                  if (issues.issues.length) {
                    issues = sum.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_10.prefixIssues(sum, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                  sum.value[sum] = issues.value;
                }));
              } else {
                if (runResult.issues.length) {
                  let issues = iter.issues;
                  let push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(closure_2_10.prefixIssues(sum, runResult.issues), 0);
                  HermesBuiltin.apply(items, issues);
                }
                sum.value[sum] = runResult.value;
                if (abortEarly) {
                  if (0 !== runResult.issues.length) {
                    if (closure_2_10.aborted(runResult)) {
                      return 1;
                    }
                  }
                }
              }
              const obj = { value: value[sum], issues: [] };
            }
            let num3 = 0;
            if (!_loop2(0)) {
              const sum = num3 + 1;
              while (sum < value.length) {
                num3 = sum;
                if (_loop2(sum)) {
                  break;
                }
              }
            }
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          let issues = nextPromise.issues;
          let obj = { expected: "array", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return nextPromise;
        }
      };
      closure_129_0 = _zod;
      closure_129_1 = arraySize;
      closure_129_2 = undefined;
      let parse;
      const sizeCapsResult = closure_10.sizeCaps(_zod._zod.def.checks);
      if (sizeCapsResult.length) {
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(sizeCapsResult.map((item) => item[0]), 0);
        const _Math2 = Math;
        closure_129_2 = HermesBuiltin.apply(items, Math);
        parse = _zod._zod.parse;
        _zod._zod.parse = (value, skipChecks) => {
          const tmp = closure_1(value.value);
          if (tmp > memoizer) {
            skipChecks = undefined;
            if (skipChecks != null) {
              skipChecks = skipChecks.skipChecks;
            }
            if (!skipChecks) {
              let direction;
              if (skipChecks != null) {
                direction = skipChecks.direction;
              }
              if ("backward" !== direction) {
                const sizeCapsResult = closure_10.sizeCaps(inst._zod.def.checks);
                const obj = sizeCapsResult[Symbol.iterator]();
                while (obj !== undefined) {
                  let tmp8 = _slicedToArray(tmp5, 2);
                  let tmp9 = tmp8[1];
                  if (tmp > tmp8[0]) {
                    let def = tmp9._zod.def;
                    if (def.when(value)) {
                      length = value.issues.length;
                      let _zod = tmp9._zod;
                      let checkResult = _zod.check(value);
                      let flag = false;
                      value.issues[length].continue = false;
                      let attachSchemaResult = closure_10.attachSchema(value.issues, length, inst);
                      obj.return();
                      return value;
                    }
                  }
                  continue;
                }
              }
            }
          }
          return closure_1_3(value, skipChecks);
        };
      }
    });
    let closure_28 = [];
    exports.$ZodObject = fnResult.$constructor("$ZodObject", (_zod, shape) => {
      let inst = _zod;
      _exports = shape;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, shape);
      const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(shape, "shape");
      let get1;
      if (ownPropertyDescriptor != null) {
        get1 = ownPropertyDescriptor.get;
      }
      if (get1) {
        let raw = ownPropertyDescriptor.get.raw;
      } else {
        raw = shape.shape;
        if (raw == null) {
          raw = {};
        }
      }
      if (raw) {
        function get() {
          const obj = {};
          const merged = Object.assign(raw);
          Object.defineProperty(closure_1, "shape", { value: obj });
          get.raw = obj;
          return obj;
        }
        get.raw = raw;
        let _Object = Object;
        let obj = { get };
        Object.defineProperty(shape, "shape", obj);
      }
      closure_4 = closure_10.cached(() => normalizeDef(closure_1));
      closure_10.defineLazyInternal(_zod, "propValues", (def) => {
        shape = def.def.shape;
        const obj = {};
        for (const key10008 in shape) {
          let _zod = shape[key10008]._zod;
          if (!_zod.values) {
            continue;
          } else {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10008);
            } else {
              hasOwnPropertyResult = call(obj, key10008);
            }
            if (!hasOwnPropertyResult) {
              let _Set = Set;
              let tmp3 = new.target;
              let tmp4 = new.target;
              let set = new Set();
              let assignPropResult = closure_1_10.assignProp(obj, key10008, set);
            }
            let values = _zod.values;
            for (const item10026 of values) {
              let obj2 = obj[key10008];
              let addResult = obj2.add(item10026);
              continue;
            }
            if (undefined === _zod.optin) {
              continue;
            } else {
              let obj3 = obj[key10008];
              let addResult1 = obj3.add(undefined);
              continue;
            }
            continue;
          }
          continue;
        }
        return obj;
      });
      const isObject = closure_10.isObject;
      const catchall = shape.catchall;
      memoizer = memoizer.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.attach(_zod);
      }
      _zod._zod.parse = (value, abortEarly) => {
        inst = value;
        closure_1 = abortEarly;
        if (value == null) {
          value = closure_4.value;
        }
        value = value.value;
        raw = value;
        if (isObject(value)) {
          const obj3 = {};
          if (memoizer) {
            let allocResult = memoizer.alloc(inst, value, obj3, abortEarly);
          } else {
            allocResult = obj3;
          }
          value.value = allocResult;
          items = [];
          shape = value.shape;
          abortEarly = undefined;
          if (abortEarly != null) {
            abortEarly = abortEarly.abortEarly;
          }
          const allKeys = value.allKeys;
          function _loop4(iter) {
            value = iter;
            if (abortEarly) {
              if (value.issues.length !== length) {
                if (closure_1_10.aborted(tmp, length)) {
                  return 0;
                }
              }
            }
            if ("__proto__" === iter) {
              return 1;
            } else {
              const optin = tmp19._zod.optin;
              const optout = tmp19._zod.optout;
              const _zod = tmp19._zod;
              const obj2 = { value: optout[iter], issues: [] };
              const runResult = _zod.run(obj2, optin);
              if (runResult instanceof Promise) {
                items.push(runResult.then((issues) => {
                  let tmp3 = iter in value;
                  if (issues.issues.length) {
                    issues = iter.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_3_10.prefixIssues(iter, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                  if (!tmp3) {
                    if (undefined === optin) {
                      if (!issues.issues.length) {
                        const issues1 = iter.issues;
                        const obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID" };
                        const items1 = [iter];
                        obj.path = items1;
                        issues1.push(obj);
                      }
                    }
                  }
                  if (undefined === issues.value) {
                    if (!tmp3) {
                      tmp3 = "defaulted" === optin && !tmp4;
                      const tmp13 = "defaulted" === optin && !tmp4;
                    }
                    if (tmp3) {
                      iter.value[iter] = undefined;
                    }
                  } else {
                    iter.value[iter] = issues.value;
                  }
                  tmp4 = "optional" === optout;
                }));
              } else {
                let tmp5 = iter in tmp20;
                if (runResult.issues.length) {
                  let issues = iter.issues;
                  let push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(closure_1_10.prefixIssues(iter, runResult.issues), 0);
                  HermesBuiltin.apply(items, issues);
                }
                if (!tmp5) {
                  if (undefined === optin) {
                    if (!runResult.issues.length) {
                      let issues1 = iter.issues;
                      let obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID" };
                      let items1 = [iter];
                      obj.path = items1;
                      issues1.push(obj);
                    }
                  }
                }
                if (undefined === runResult.value) {
                  if (!tmp5) {
                    tmp5 = "defaulted" === optin && !tmp6;
                    const tmp15 = "defaulted" === optin && !tmp6;
                  }
                  if (tmp5) {
                    iter.value[iter] = undefined;
                  }
                } else {
                  iter.value[iter] = runResult.value;
                }
                tmp6 = "optional" === optout;
              }
              tmp20 = optout;
            }
          }
          const iter = allKeys[Symbol.iterator]();
          while (iter !== undefined) {
            if (0 === _loop4(iter.next())) {
              iter.return();
              break;
            }
            if (catchall) {
              let flag = true;
              let nextPromise = handleCatchall(items, value, value, abortEarly, closure_4.value, inst, true === abortEarly);
            } else {
              nextPromise = value;
              if (items.length) {
                let tmp19 = globalThis;
                let _Promise = Promise;
                let allPromises = Promise.all(items);
                nextPromise = allPromises.then(() => closure_0);
              }
            }
            return nextPromise;
          }
        } else {
          let issues = value.issues;
          let obj = { expected: "object", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return value;
        }
      };
    });
    exports.$ZodObjectJIT = fnResult.$constructor("$ZodObjectJIT", (_zod, catchall) => {
      const inst = _zod;
      _exports = catchall;
      const $ZodObject = _exports.$ZodObject;
      $ZodObject.init(_zod, catchall);
      const parse = _zod._zod.parse;
      value = catchall.cached(() => normalizeDef(closure_1));
      const memoizer = value.globalConfig.memoizer;
      const isObject = catchall.isObject;
      const jitless = value.globalConfig.jitless;
      value = !jitless;
      if (!jitless) {
        value = catchall.allowsEval.value;
      }
      catchall = catchall.catchall;
      _zod._zod.parse = (value, abortEarly) => {
        let tmp = null;
        if (value == null) {
          value = value.value;
        }
        let tmp3 = value;
        value = value.value;
        if (isObject(value)) {
          let flag = value;
          if (value) {
            if (value) {
              let async;
              if (abortEarly != tmp) {
                async = abortEarly.async;
              }
              flag = false;
              if (false === async) {
                flag = true;
              }
              let tmp12 = closure_2;
              if (!closure_2) {
                let tmp14 = ((shape) => {
                  value = value.value;
                  const symbolKeys = value.symbolKeys;
                  const doc = new inst(closure_2[7]).Doc(["payload", "ctx"], { shape, inst, memo, syms: symbolKeys });
                  function prefixStr(arg0, arg1) {
                    return "\n          let " + arg0 + "_ab = false;\n          for (let i = 0; i < " + arg0 + ".issues.length; i++) {\n            const iss = " + arg0 + ".issues[i];\n            iss.path = iss.path ? [" + arg1 + ", ...iss.path] : [" + arg1 + "];\n            payload.issues.push(iss);\n            if (iss.continue !== true) " + arg0 + "_ab = true;\n          }\n          if (" + arg0 + "_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }";
                  }
                  function parseStr(arg0) {
                    return "shape[" + arg0 + "]._zod.run({ value: input[" + arg0 + "], issues: [] }, ctx)";
                  }
                  doc.write("const input = payload.value;");
                  const obj2 = Object.create(null);
                  let num = 0;
                  while (tmp3 !== undefined) {
                    let tmp6 = +num;
                    num = tmp6 + 1;
                    obj2[tmp4] = `key_${tmp6}`;
                    continue;
                  }
                  let str = "const newResult = {};";
                  if (memo) {
                    str = "const newResult = memo.alloc(inst, payload, {}, ctx);";
                  }
                  doc.write(str);
                  const iter = value.allKeys[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp9 = nextResult;
                    if ("__proto__" !== nextResult) {
                      let tmp75 = obj2[tmp9];
                      if (typeof tmp9 === "symbol") {
                        let _HermesInternal = HermesInternal;
                        let combined = "syms[" + symbolKeys.indexOf(tmp9) + "]";
                      } else {
                        combined = catchall.esc(tmp9);
                      }
                      let tmp12 = combined;
                      let _HermesInternal2 = HermesInternal;
                      let combined1 = "" + combined + " in input";
                      let tmp15 = shape[tmp9];
                      let tmp16 = tmp15;
                      let optin;
                      if (tmp15 != null) {
                        let _zod = tmp15._zod;
                        if (_zod != null) {
                          optin = _zod.optin;
                        }
                      }
                      let tmp18 = optin;
                      let tmp19 = undefined !== optin;
                      let optout;
                      if (tmp16 != null) {
                        let _zod2 = tmp16._zod;
                        if (_zod2 != null) {
                          optout = _zod2.optout;
                        }
                      }
                      let tmp22 = "optional" === optout;
                      let _HermesInternal3 = HermesInternal;
                      let str2 = "const ";
                      let str3 = " = ";
                      let str4 = ";";
                      let writeResult2 = doc.write("const " + tmp75 + " = " + parseStr(tmp12) + ";");
                      if (tmp19) {
                        if (tmp22) {
                          if ("optional" === tmp18) {
                            let _HermesInternal9 = HermesInternal;
                            let combined2 = "" + tmp75 + "_present";
                          } else {
                            let _HermesInternal8 = HermesInternal;
                            let str27 = "";
                            let str28 = ".value !== undefined || ";
                            let str29 = "_present";
                            combined2 = "" + tmp75 + ".value !== undefined || " + tmp75 + "_present";
                          }
                          let _HermesInternal10 = HermesInternal;
                          let str30 = "\n        const ";
                          let str31 = "_present = ";
                          let str32 = ";\n        if (!";
                          let str33 = ".issues.length || ";
                          let str34 = "_present) {\n          if (";
                          let str35 = ".issues.length) {";
                          let str36 = "\n          }\n\n          if (";
                          let str37 = ") {\n            newResult[";
                          let str38 = "] = ";
                          let str39 = ".value;\n          }\n        }\n\n      ";
                          let writeResult3 = doc.write("\n        const " + tmp75 + "_present = " + combined1 + ";\n        if (!" + tmp75 + ".issues.length || " + tmp75 + "_present) {\n          if (" + tmp75 + ".issues.length) {" + prefixStr(tmp75, tmp12) + "\n          }\n\n          if (" + combined2 + ") {\n            newResult[" + combined + "] = " + tmp75 + ".value;\n          }\n        }\n\n      ");
                        }
                      }
                      let write = doc.write;
                      let tmp30 = tmp75;
                      if (tmp19) {
                        let _HermesInternal5 = HermesInternal;
                        let str16 = "\n        if (";
                        let str17 = ".issues.length) {";
                        let str18 = "\n        }\n      ";
                        let writeResult4 = write("\n        if (" + tmp30 + ".issues.length) {" + prefixStr(tmp75, tmp12) + "\n        }\n      ");
                        if ("defaulted" === tmp18) {
                          let _HermesInternal7 = HermesInternal;
                          let str24 = "newResult[";
                          let str25 = "] = ";
                          let str26 = ".value;";
                          let writeResult5 = doc.write("newResult[" + tmp12 + "] = " + tmp75 + ".value;");
                        } else {
                          let _HermesInternal6 = HermesInternal;
                          let str19 = "\n        if (";
                          let str20 = ".value !== undefined || ";
                          let str21 = ") {\n          newResult[";
                          let str22 = "] = ";
                          let str23 = ".value;\n        }\n      ";
                          let writeResult6 = doc.write("\n        if (" + tmp75 + ".value !== undefined || " + combined1 + ") {\n          newResult[" + tmp12 + "] = " + tmp75 + ".value;\n        }\n      ");
                        }
                      } else {
                        let _HermesInternal4 = HermesInternal;
                        let str5 = "\n        const ";
                        let str6 = "_present = ";
                        let str7 = ";\n        if (";
                        let str8 = ".issues.length) {";
                        let str9 = "\n        }\n        if (!";
                        let str10 = "_present && !";
                        let str11 = ".issues.length) {\n          payload.issues.push({\n            code: \"invalid_type\",\n            expected: \"nonoptional\",\n            input: undefined,\n            path: [";
                        let str12 = "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (";
                        let str13 = "_present) {\n          newResult[";
                        let str14 = "] = ";
                        let str15 = ".value;\n        }\n\n      ";
                        let writeResult7 = write("\n        const " + tmp30 + "_present = " + combined1 + ";\n        if (" + tmp30 + ".issues.length) {" + prefixStr(tmp75, tmp12) + "\n        }\n        if (!" + tmp30 + "_present && !" + tmp30 + ".issues.length) {\n          payload.issues.push({\n            code: \"invalid_type\",\n            expected: \"nonoptional\",\n            input: undefined,\n            path: [" + combined + "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (" + tmp30 + "_present) {\n          newResult[" + combined + "] = " + tmp30 + ".value;\n        }\n\n      ");
                      }
                    }
                    continue;
                  }
                  doc.write("payload.value = newResult;");
                  doc.write("return payload;");
                  return doc.compile();
                })(shape.shape);
                closure_2 = tmp14;
                tmp12 = tmp14;
              }
              const tmp12Result = tmp12(tmp3, abortEarly);
              tmp3 = catchall;
              let tmp17Result = tmp12Result;
              if (catchall) {
                tmp3 = inst;
                tmp = abortEarly == tmp;
                abortEarly = undefined;
                if (!tmp) {
                  abortEarly = abortEarly.abortEarly;
                }
                tmp17Result = handleCatchall([], value, tmp12Result, abortEarly, tmp18, tmp3, flag === abortEarly);
              }
            }
          }
          const tmp11 = parse(tmp3, abortEarly);
        } else {
          const issues = tmp3.issues;
          const obj = { expected: "object", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return tmp3;
        }
      };
    });
    exports.$ZodUnion = fnResult.$constructor("$ZodUnion", (_zod, options) => {
      closure_0 = _zod;
      _exports = options;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, options);
      closure_10.defineLazyInternal(_zod, "optin", (def) => {
        options = def.def.options;
        let str = "defaulted";
        if (!options.some((_zod) => "defaulted" === _zod._zod.optin)) {
          const options2 = def.def.options;
          let str2;
          if (options2.some((_zod) => undefined !== _zod._zod.optin)) {
            str2 = "optional";
          }
          str = str2;
        }
        return str;
      });
      closure_10.defineLazyInternal(_zod, "optout", (def) => {
        options = def.def.options;
        let str;
        if (options.some((_zod) => "optional" === _zod._zod.optout)) {
          str = "optional";
        }
        return str;
      });
      closure_10.defineLazyInternal(_zod, "values", (def) => {
        options = def.def.options;
        if (options.every((_zod) => _zod._zod.values)) {
          const _Set = Set;
          const options2 = def.def.options;
          const set = new Set(options2.flatMap((_zod) => Array.from(_zod._zod.values)));
          return set;
        }
      });
      closure_10.defineLazyInternal(_zod, "pattern", (def) => {
        options = def.def.options;
        if (options.every((_zod) => _zod._zod.pattern)) {
          const options1 = def.def.options;
          const mapped = options1.map((_zod) => _zod._zod.pattern);
          const _RegExp = RegExp;
          const mapped1 = mapped.map((source) => closure_1_10.cleanRegex(source.source));
          const _HermesInternal = HermesInternal;
          const regExp = new RegExp("^(" + mapped1.join("|") + ")$");
          return regExp;
        }
      });
      let run = null;
      if (1 === options.options.length) {
        run = options.options[0]._zod.run;
      }
      _zod._zod.parse = (value, arg1) => {
        closure_0 = value;
        options = arg1;
        if (run) {
          return run(value, arg1);
        } else {
          let flag = false;
          items = [];
          options = options.options;
          const iter = options[Symbol.iterator]();
          while (iter !== undefined) {
            _zod = iter.next()._zod;
            let obj = { value: value.value, issues: [] };
            let runResult = _zod.run(obj, arg1);
            let tmp7 = runResult;
            let _Promise = Promise;
            if (runResult instanceof Promise) {
              let arr = items.push(tmp7);
              flag = true;
            } else if (0 === tmp7.issues.length) {
              iter.return();
              return tmp7;
            } else {
              let arr3 = items.push(tmp7);
            }
            continue;
          }
          if (flag) {
            let nextPromise = Promise.all(items).then((result) => handleUnionResults(result, closure_0, closure_0, closure_1));
            const allPromises = Promise.all(items);
          } else {
            nextPromise = handleUnionResults(items, value, closure_0, arg1);
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodXor = fnResult.$constructor("$ZodXor", (_zod, options) => {
      closure_0 = _zod;
      _exports = options;
      const $ZodUnion = _exports.$ZodUnion;
      $ZodUnion.init(_zod, options);
      options.inclusive = false;
      let run = null;
      if (1 === options.options.length) {
        run = options.options[0]._zod.run;
      }
      _zod._zod.parse = (value, arg1) => {
        closure_0 = value;
        options = arg1;
        if (run) {
          return run(value, arg1);
        } else {
          let flag = false;
          items = [];
          options = options.options;
          const iter = options[Symbol.iterator]();
          while (iter !== undefined) {
            _zod = iter.next()._zod;
            let obj = { value: value.value, issues: [] };
            let runResult = _zod.run(obj, arg1);
            let _Promise = Promise;
            let tmp8 = runResult instanceof Promise;
            let arr = items.push(runResult);
            if (tmp8) {
              flag = true;
            }
            continue;
          }
          if (flag) {
            let nextPromise = Promise.all(items).then((arr) => {
              closure_0 = closure_1;
              items = [];
              for (let num = 0; num < arr.length; num = num + 1) {
                if (0 === arr[num].issues.length) {
                  arr = items.push(num);
                }
              }
              if (1 === items.length) {
                iter.value = arr[items[0]].value;
              } else if (0 === items.length) {
                let issues = iter.issues;
                const obj2 = {
                  code: "invalid_union",
                  input: iter.value,
                  inst: tmp,
                  errors: arr.map((issues) => {
                      issues = issues.issues;
                      return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
                    })
                };
                issues.push(obj2);
              } else {
                const issues1 = iter.issues;
                const obj = { code: "invalid_union", input: iter.value, inst: tmp, errors: [], inclusive: false, matches: items };
                issues1.push(obj);
              }
              return closure_0;
            });
            const allPromises = Promise.all(items);
          } else {
            handleExclusiveUnionResults(items, value, closure_0, arg1);
            nextPromise = value;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodDiscriminatedUnion = fnResult.$constructor("$ZodDiscriminatedUnion", (_zod, options) => {
      const inst = _zod;
      _exports = options;
      options.inclusive = false;
      const $ZodUnion = _exports.$ZodUnion;
      $ZodUnion.init(_zod, options);
      const parse = _zod._zod.parse;
      closure_10.defineLazyInternal(_zod, "propValues", (def) => {
        const obj = {};
        let num = 0;
        const iter = def.def.options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let propValues = nextResult._zod.propValues;
          let tmp3 = propValues;
          if (propValues) {
            let _Object = Object;
            if (0 !== Object.keys(tmp3).length) {
              let obj4 = tmp3[def.def.discriminator];
              let hasItem;
              if (obj4 != null) {
                hasItem = obj4.has(undefined);
              }
              if (hasItem) {
                num = num + 1;
              }
              let _Object2 = Object;
              let entries = Object.entries(tmp3);
              for (const item10039 of entries) {
                let tmp12 = closure_3(item10039, 2);
                let first = tmp12[0];
                let tmp14 = first;
                let tmp15 = tmp12[1];
                let _Object3 = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown") {
                  let hasOwnPropertyResult = hasOwnProperty(first);
                } else {
                  hasOwnPropertyResult = call(obj, first);
                }
                if (!hasOwnPropertyResult) {
                  let _Set = Set;
                  let tmp19 = new.target;
                  let tmp20 = new.target;
                  let set = new Set();
                  let assignPropResult = closure_1_10.assignProp(obj, tmp14, set);
                }
                for (const item10064 of tmp15) {
                  let obj2 = obj[tmp14];
                  let addResult = obj2.add(item10064);
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          let _Error = Error;
          options = def.def.options;
          let _HermesInternal = HermesInternal;
          let str = "\"";
          let str2 = "Invalid discriminated union option at index \"";
          let tmp28 = new.target;
          let tmp29 = new.target;
          let error = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
          throw error;
        }
        const unionFallback = def.def.unionFallback;
        let tmp32 = !unionFallback;
        if (!unionFallback) {
          tmp32 = num > 1;
        }
        if (tmp32) {
          if (obj[def.def.discriminator] != null) {
            obj3.delete(undefined);
          }
        }
        return obj;
      });
      options = options.options;
      const item = options.forEach((_zod, index) => {
        const rawShapeResult = closure_10.rawShape(_zod._zod.def);
        if (rawShapeResult) {
          const _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          const call = hasOwnProperty.call;
          const discriminator = options.discriminator;
          if (!(typeof call === "unknown" ? hasOwnProperty(discriminator) : call(rawShapeResult, discriminator))) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Invalid discriminated union option at index \"" + index + "\"");
            throw error;
          }
        }
      });
      closure_3 = closure_10.cached(() => discriminatorMap(closure_1));
      _zod._zod.parse = (value, direction) => {
        value = value.value;
        if (closure_10.isObject(value)) {
          let tmp4;
          if (value != null) {
            tmp4 = value[options.discriminator];
          }
          const value2 = value.value;
          const value3 = value2.get(tmp4);
          if (value3) {
            const _zod = value3._zod;
            return _zod.run(value, direction);
          }
          if (!options.unionFallback) {
            if ("backward" !== direction.direction) {
              const issues = value.issues;
              const obj2 = { code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: options.discriminator, options: null, input: null, path: null, inst: null };
              const _Array = Array;
              const value6 = iter.value;
              obj2.options = Array.from(value6.keys()).filter((item) => {
                value = value.value;
                return null !== value.get(item);
              });
              obj2.input = value;
              items = [options.discriminator];
              obj2.path = items;
              obj2.inst = inst;
              issues.push(obj2);
              const arr = Array.from(value6.keys());
            }
          }
          const tmp10 = parse(value, direction);
          iter = value;
        } else {
          const issues1 = value.issues;
          const obj = { code: "invalid_type", expected: "object", input: value, inst };
          issues1.push(obj);
          return value;
        }
      };
    });
    exports.$ZodIntersection = fnResult.$constructor("$ZodIntersection", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        let nextPromise = value;
        closure_0 = value;
        value = value.value;
        const _zod = closure_0.left._zod;
        const runResult = _zod.run({ value, issues: [] }, arg1);
        const _zod2 = closure_0.right._zod;
        const runResult1 = _zod2.run({ value, issues: [] }, arg1);
        if (!(runResult instanceof Promise)) {
          if (!(runResult1 instanceof Promise)) {
            handleIntersectionResults(nextPromise, runResult, runResult1);
          }
          return nextPromise;
        }
        items = [runResult, runResult1];
        nextPromise = Promise.all(items).then((result) => {
          [tmp, tmp2] = result;
          handleIntersectionResults(closure_0, tmp, tmp2);
          return closure_0;
        });
        const allPromises = Promise.all(items);
      };
    });
    exports.$ZodTuple = fnResult.$constructor("$ZodTuple", (_zod, items) => {
      let inst = _zod;
      _exports = items;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, items);
      items = items.items;
      const memoizer = closure_8.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.attach(_zod);
      }
      _zod._zod.parse = (value, abortEarly) => {
        let nextPromise = value;
        inst = value;
        value = value.value;
        items = value;
        if (Array.isArray(value)) {
          items = [];
          if (items1) {
            let allocResult = obj2.alloc(inst, nextPromise, items, abortEarly);
          } else {
            allocResult = items;
          }
          nextPromise.value = allocResult;
          items1 = [];
          let arr5 = items;
          const tmp11 = getTupleOptStart(items, "optin");
          const tmp12 = getTupleOptStart(items, "optout");
          closure_4 = tmp12;
          if (!items.rest) {
            if (value.length < tmp11) {
              let issues = nextPromise.issues;
              const obj3 = { code: "too_small", minimum: tmp11, inclusive: true, input: value, inst, origin: "array" };
              issues.push(obj3);
              return nextPromise;
            } else if (value.length > arr5.length) {
              const issues1 = nextPromise.issues;
              const obj4 = { code: "too_big", maximum: arr5.length, inclusive: true, input: value, inst, origin: "array" };
              issues1.push(obj4);
            }
          }
          const _Array = Array;
          const array = new Array(arr5.length);
          let tmp24;
          if (items.rest) {
            abortEarly = undefined;
            if (abortEarly != null) {
              abortEarly = abortEarly.abortEarly;
            }
            tmp24 = abortEarly;
          }
          abortEarly = tmp24;
          c7 = false;
          let num3 = 0;
          if (0 < arr5.length) {
            do {
              let tmp27 = (function _loop5(arg0) {
                closure_0 = arg0;
                const _zod = value[arg0]._zod;
                const runResult = _zod.run({ value: value[arg0], issues: [] }, closure_1);
                if (runResult instanceof Promise) {
                  items1.push(runResult.then((result) => {
                    array[closure_0] = result;
                  }));
                } else {
                  array[arg0] = runResult;
                  length = abortEarly;
                  if (abortEarly) {
                    length = !closure_7;
                  }
                  if (length) {
                    length = runResult.issues.length;
                  }
                  if (length) {
                    closure_7 = closure_2_10.aborted(runResult);
                  }
                }
                const obj = { value: value[arg0], issues: [] };
              })(num3);
              num3 = num3 + 1;
              arr5 = items;
              length = items.length;
            } while (num3 < length);
          }
          if (items.rest) {
            if (!c7) {
              const diff = arr5.length - 1;
              let tmp33 = diff;
              let sum = diff;
              const substr = value.slice(arr5.length);
              let length2 = nextPromise.issues.length;
              for (const item10087 of substr) {
                if (tmp24) {
                  if (nextPromise.issues.length !== length2) {
                    if (closure_1_10.aborted(nextPromise, length2)) {
                      obj5.return();
                      break;
                    } else {
                      length2 = nextPromise.issues.length;
                    }
                    break;
                  }
                  break;
                }
                sum = tmp33 + 1;
                tmp33 = sum;
                let _zod = items.rest._zod;
                let obj6 = { value: item10087, issues: [] };
                let runResult = _zod.run(obj6, arg1);
                let promise = runResult;
                let _Promise = Promise;
                if (runResult instanceof Promise) {
                  let arr3 = items1.push(promise.then((issues) => {
                    if (issues.issues.length) {
                      issues = value.issues;
                      const push = issues.push;
                      items = [];
                      HermesBuiltin.arraySpread(closure_10.prefixIssues(sum, issues.issues), 0);
                      HermesBuiltin.apply(items, issues);
                    }
                    value.value[sum] = issues.value;
                  }));
                } else {
                  let tmp50 = handleTupleResult(promise, nextPromise, tmp33);
                }
                continue;
              }
            }
          }
          if (items1.length) {
            nextPromise = Promise.all(items1).then(() => {
              handleTupleResults(array, closure_0, items, value, closure_4);
              return closure_0;
            });
            const allPromises = Promise.all(items1);
          } else {
            handleTupleResults(array, nextPromise, items, value, tmp12);
          }
          return nextPromise;
        } else {
          const issues2 = nextPromise.issues;
          let obj = { input: value, inst, expected: "tuple", code: "invalid_type" };
          issues2.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodRecord = fnResult.$constructor("$ZodRecord", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let memoizer = closure_8.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.attach(_zod);
      }
      _zod._zod.parse = (value, abortEarly) => {
        inst = value;
        value = value.value;
        memoizer = value;
        if (closure_1_10.isPlainObject(value)) {
          closure_3 = [];
          let num = abortEarly.keyType._zod.values;
          if (num) {
            if (!abortEarly.partial) {
              let _loop6 = {};
              if (memoizer) {
                let allocResult = obj2.alloc(inst, value, _loop6, abortEarly);
              } else {
                allocResult = _loop6;
              }
              value.value = allocResult;
              const _Set = Set;
              const set = new Set();
              _loop6 = function _loop6(value) {
                inst = value;
                let str1 = value;
                if (typeof value === "number") {
                  str1 = value.toString();
                }
                set.add(str1);
                if ("__proto__" === value) {
                  return 0;
                } else {
                  const _zod = abortEarly.keyType._zod;
                  const obj2 = { value, issues: [] };
                  const iter = _zod.run(obj2, abortEarly);
                  if (iter instanceof Promise) {
                    const _Error = Error;
                    const error = new Error("Async schemas not supported in object keys currently");
                    throw error;
                  } else if (iter.issues.length) {
                    let issues = inst.issues;
                    const obj = { code: "invalid_key", origin: "record", issues: null, input: null, path: null, inst: null };
                    const issues1 = iter.issues;
                    obj.issues = issues1.map((item) => closure_3_10.finalizeIssue(item, value, closure_3_8.config()));
                    obj.input = value;
                    items = [value];
                    obj.path = items;
                    obj.inst = inst;
                    issues.push(obj);
                    return 0;
                  } else {
                    value = iter.value;
                    abortEarly = value;
                    if ("__proto__" === value) {
                      return 0;
                    } else {
                      const _zod2 = tmp22.valueType._zod;
                      const obj3 = { value: value[value], issues: [] };
                      const runResult = _zod2.run(obj3, tmp23);
                      if (runResult instanceof Promise) {
                        closure_3.push(runResult.then((issues) => {
                          if (issues.issues.length) {
                            issues = value.issues;
                            const push = issues.push;
                            items = [];
                            HermesBuiltin.arraySpread(closure_10.prefixIssues(value, issues.issues), 0);
                            HermesBuiltin.apply(items, issues);
                          }
                          value.value[value] = issues.value;
                        }));
                      } else {
                        if (runResult.issues.length) {
                          const issues2 = inst.issues;
                          let push = issues2.push;
                          const items1 = [];
                          HermesBuiltin.arraySpread(closure_2_10.prefixIssues(value, runResult.issues), 0);
                          HermesBuiltin.apply(items1, issues2);
                        }
                        inst.value[value] = runResult.value;
                      }
                    }
                  }
                  tmp22 = abortEarly;
                  tmp23 = abortEarly;
                }
              };
              num[Symbol.iterator]();
              num = 0;
            }
          }
          let _loop7 = memoizer;
          let obj3 = {};
          if (memoizer) {
            let allocResult1 = _loop7.alloc(inst, value, obj3, abortEarly);
          } else {
            allocResult1 = obj3;
          }
          value.value = allocResult1;
          _loop7 = function _loop7(value) {
            inst = value;
            if ("__proto__" === value) {
              return 0;
            } else {
              const _Object = Object;
              const call = propertyIsEnumerable.call;
              if (typeof call === "unknown" ? propertyIsEnumerable(value) : call(value, value)) {
                const _zod = abortEarly.keyType._zod;
                const obj = { value, issues: [] };
                const runResult = _zod.run(obj, abortEarly);
                if (runResult instanceof Promise) {
                  const _Error2 = Error;
                  const error = new Error("Async schemas not supported in object keys currently");
                  throw error;
                } else {
                  let iter = runResult;
                  if (typeof value === "string") {
                    number = number.number;
                    iter = runResult;
                    if (number.test(value)) {
                      iter = runResult;
                      if (runResult.issues.length) {
                        const _zod2 = tmp.keyType._zod;
                        const obj2 = { value: null, issues: null };
                        const _Number = Number;
                        obj2.value = Number(value);
                        obj2.issues = [];
                        const runResult1 = _zod2.run(obj2, tmp2);
                        if (runResult1 instanceof Promise) {
                          const _Error = Error;
                          const error1 = new Error("Async schemas not supported in object keys currently");
                          throw error1;
                        } else {
                          iter = runResult;
                          if (0 === runResult1.issues.length) {
                            iter = runResult1;
                          }
                        }
                      }
                    }
                  }
                  if (iter.issues.length) {
                    if ("loose" === tmp.mode) {
                      inst.value[value] = value[value];
                    } else if (num) {
                      if (items == null) {
                        items = [];
                      }
                      items.push(value);
                    } else {
                      let issues = inst.issues;
                      const obj3 = { code: "invalid_key", origin: "record", issues: null, input: null, path: null, inst: null };
                      const issues1 = iter.issues;
                      obj3.issues = issues1.map((item) => closure_3_10.finalizeIssue(item, value, closure_3_8.config()));
                      obj3.input = value;
                      const items1 = [value];
                      obj3.path = items1;
                      obj3.inst = inst;
                      issues.push(obj3);
                    }
                    return 0;
                  } else {
                    value = iter.value;
                    abortEarly = value;
                    if ("__proto__" === value) {
                      return 0;
                    } else {
                      const _zod3 = tmp.valueType._zod;
                      const obj4 = { value: value[value], issues: [] };
                      const runResult2 = _zod3.run(obj4, tmp2);
                      if (runResult2 instanceof Promise) {
                        closure_3.push(runResult2.then((issues) => {
                          if (issues.issues.length) {
                            issues = value.issues;
                            const push = issues.push;
                            items = [];
                            HermesBuiltin.arraySpread(closure_10.prefixIssues(value, issues.issues), 0);
                            HermesBuiltin.apply(items, issues);
                          }
                          value.value[value] = issues.value;
                        }));
                      } else {
                        if (runResult2.issues.length) {
                          const issues2 = inst.issues;
                          let push = issues2.push;
                          const items2 = [];
                          HermesBuiltin.arraySpread(closure_2_10.prefixIssues(value, runResult2.issues), 0);
                          HermesBuiltin.apply(items2, issues2);
                        }
                        inst.value[value] = runResult2.value;
                      }
                    }
                  }
                }
              } else {
                return 0;
              }
            }
          };
          const _Reflect = Reflect;
          const ownKeysResult = Reflect.ownKeys(value);
          obj3 = ownKeysResult;
          ownKeysResult[Symbol.iterator]();
        } else {
          let issues = value.issues;
          let obj = { expected: "record", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return value;
        }
      };
    });
    exports.$ZodMap = fnResult.$constructor("$ZodMap", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let memoizer = closure_8.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.attach(_zod);
      }
      _zod._zod.parse = (value, abortEarly) => {
        let nextPromise = value;
        inst = value;
        value = value.value;
        memoizer = value;
        if (value instanceof Map) {
          items = [];
          if (memoizer) {
            const _Map2 = Map;
            const map = new Map();
            let allocResult = obj2.alloc(inst, nextPromise, map, abortEarly);
          } else {
            const _Map = Map;
            allocResult = new Map();
          }
          nextPromise.value = allocResult;
          abortEarly = undefined;
          if (abortEarly != null) {
            abortEarly = abortEarly.abortEarly;
          }
          function _loop8(value) {
            if (abortEarly) {
              if (value.issues.length !== length) {
                if (closure_2_10.aborted(tmp, length)) {
                  return 1;
                }
              }
            }
            const _zod = abortEarly.keyType._zod;
            const runResult = _zod.run({ value, issues: [] }, abortEarly);
            const _zod2 = abortEarly.valueType._zod;
            const runResult1 = _zod2.run({ value: value2, issues: [] }, abortEarly);
            if (!(runResult instanceof Promise)) {
              if (!(runResult1 instanceof Promise)) {
                handleMapResult(runResult, runResult1, value, value, closure_2, value, abortEarly);
              }
            }
            items = [runResult, runResult1];
            items.push(Promise.all(items).then((result) => {
              [tmp, tmp2] = result;
              handleMapResult(tmp, tmp2, closure_0, closure_0, value, closure_0, closure_1);
            }));
            const allPromises = Promise.all(items);
            const obj = { value, issues: [] };
            const obj2 = { value: value2, issues: [] };
          }
          const obj3 = value[Symbol.iterator]();
          while (obj3 !== undefined) {
            let tmp22 = _slicedToArray(tmp19, 2);
            let value2 = tmp22[1];
            if (_loop8(tmp22[0])) {
              obj3.return();
              break;
            }
            if (items.length) {
              let _Promise = Promise;
              let allPromises = Promise.all(items);
              nextPromise = allPromises.then(() => closure_0);
            }
            return nextPromise;
          }
        } else {
          const issues = nextPromise.issues;
          let obj = { expected: "map", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return nextPromise;
        }
      };
      closure_129_0 = _zod;
      closure_129_1 = mapSize;
      closure_129_2 = undefined;
      let parse;
      const sizeCapsResult = closure_10.sizeCaps(_zod._zod.def.checks);
      if (sizeCapsResult.length) {
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(sizeCapsResult.map((item) => item[0]), 0);
        const _Math2 = Math;
        closure_129_2 = HermesBuiltin.apply(items, Math);
        parse = _zod._zod.parse;
        _zod._zod.parse = (value, skipChecks) => {
          const tmp = closure_1(value.value);
          if (tmp > memoizer) {
            skipChecks = undefined;
            if (skipChecks != null) {
              skipChecks = skipChecks.skipChecks;
            }
            if (!skipChecks) {
              let direction;
              if (skipChecks != null) {
                direction = skipChecks.direction;
              }
              if ("backward" !== direction) {
                const sizeCapsResult = closure_10.sizeCaps(inst._zod.def.checks);
                const obj = sizeCapsResult[Symbol.iterator]();
                while (obj !== undefined) {
                  let tmp8 = _slicedToArray(tmp5, 2);
                  let tmp9 = tmp8[1];
                  if (tmp > tmp8[0]) {
                    let def = tmp9._zod.def;
                    if (def.when(value)) {
                      length = value.issues.length;
                      let _zod = tmp9._zod;
                      let checkResult = _zod.check(value);
                      let flag = false;
                      value.issues[length].continue = false;
                      let attachSchemaResult = closure_10.attachSchema(value.issues, length, inst);
                      obj.return();
                      return value;
                    }
                  }
                  continue;
                }
              }
            }
          }
          return closure_1_3(value, skipChecks);
        };
      }
    });
    exports.$ZodSet = fnResult.$constructor("$ZodSet", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      const memoizer = closure_8.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.attach(_zod);
      }
      _zod._zod.parse = (value, abortEarly) => {
        let nextPromise = value;
        inst = value;
        value = value.value;
        if (value instanceof Set) {
          items = [];
          if (memoizer) {
            const _Set2 = Set;
            const set = new Set();
            let allocResult = memoizer.alloc(inst, nextPromise, set, abortEarly);
          } else {
            const _Set = Set;
            allocResult = new Set();
          }
          nextPromise.value = allocResult;
          if (abortEarly != null) {
            abortEarly = abortEarly.abortEarly;
          }
          length = nextPromise.issues.length;
          const iter = value[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp21 = nextResult;
            if (abortEarly) {
              if (nextPromise.issues.length !== length) {
                if (closure_10.aborted(nextPromise, length)) {
                  iter.return();
                  break;
                } else {
                  length = nextPromise.issues.length;
                }
                break;
              }
              if (items.length) {
                let _Promise2 = Promise;
                let allPromises = Promise.all(items);
                nextPromise = allPromises.then(() => closure_0);
              }
              return nextPromise;
            }
            let _zod = closure_1.valueType._zod;
            let obj3 = { value: null, issues: null };
            obj3.value = tmp21;
            obj3.issues = [];
            let runResult = _zod.run(obj3, abortEarly);
            let promise = runResult;
            let _Promise = Promise;
            if (runResult instanceof Promise) {
              let arr = items.push(promise.then((issues) => {
                if (issues.issues.length) {
                  issues = value.issues;
                  const push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(issues.issues, 0);
                  HermesBuiltin.apply(items, issues);
                }
                value = value.value;
                value.add(issues.value);
              }));
            } else {
              let tmp30 = handleSetResult(promise, nextPromise);
            }
            continue;
          }
        } else {
          let issues = nextPromise.issues;
          const obj = { input: value, inst, expected: "set", code: "invalid_type" };
          issues.push(obj);
          return nextPromise;
        }
      };
      closure_129_0 = _zod;
      closure_129_1 = setSize;
      closure_129_2 = undefined;
      let parse;
      let sizeCapsResult = closure_10.sizeCaps(_zod._zod.def.checks);
      if (sizeCapsResult.length) {
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(sizeCapsResult.map((item) => item[0]), 0);
        const _Math2 = Math;
        closure_129_2 = HermesBuiltin.apply(items, Math);
        parse = _zod._zod.parse;
        _zod._zod.parse = (value, skipChecks) => {
          const tmp = closure_1(value.value);
          if (tmp > memoizer) {
            skipChecks = undefined;
            if (skipChecks != null) {
              skipChecks = skipChecks.skipChecks;
            }
            if (!skipChecks) {
              let direction;
              if (skipChecks != null) {
                direction = skipChecks.direction;
              }
              if ("backward" !== direction) {
                const sizeCapsResult = closure_10.sizeCaps(inst._zod.def.checks);
                const obj = sizeCapsResult[Symbol.iterator]();
                while (obj !== undefined) {
                  let tmp8 = _slicedToArray(tmp5, 2);
                  let tmp9 = tmp8[1];
                  if (tmp > tmp8[0]) {
                    let def = tmp9._zod.def;
                    if (def.when(value)) {
                      length = value.issues.length;
                      let _zod = tmp9._zod;
                      let checkResult = _zod.check(value);
                      let flag = false;
                      value.issues[length].continue = false;
                      let attachSchemaResult = closure_10.attachSchema(value.issues, length, inst);
                      obj.return();
                      return value;
                    }
                  }
                  continue;
                }
              }
            }
          }
          return closure_1_3(value, skipChecks);
        };
      }
    });
    exports.$ZodEnum = fnResult.$constructor("$ZodEnum", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = enumValues.$ZodType;
      $ZodType.init(_zod, arg1);
      enumValues = enumValues.getEnumValues(arg1.entries);
      const set = new Set(enumValues);
      _zod._zod.values = set;
      enumValues.defineLazyInternal(_zod, "pattern", (def) => {
        enumValues = enumValues.getEnumValues(def.def.entries);
        const found = enumValues.filter((item) => {
          const propertyKeyTypes = enumValues.propertyKeyTypes;
          return propertyKeyTypes.has(typeof item);
        });
        let str = "^[^\\s\\S]$";
        if (found.length) {
          const mapped = found.map((item) => enumValues.escapeRegex(item.toString()));
          const _HermesInternal = HermesInternal;
          str = "^(" + mapped.join("|") + ")$";
        }
        const regExp = new RegExp(str);
        return regExp;
      });
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (!set.has(value)) {
          const issues = value.issues;
          const obj = { code: "invalid_value", values: enumValues, input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodLiteral = fnResult.$constructor("$ZodLiteral", (_zod, arg1) => {
      const inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      const set = new Set(arg1.values);
      _zod._zod.values = set;
      closure_10.defineLazyInternal(_zod, "pattern", (def) => {
        values = def.def.values;
        let str = "^[^\\s\\S]$";
        if (values.length) {
          const mapped = values.map((item) => {
            if (typeof item === "string") {
              let escapeRegexResult = closure_1_10.escapeRegex(item);
            } else if (item) {
              escapeRegexResult = closure_1_10.escapeRegex(item.toString());
            } else {
              const _String = String;
              escapeRegexResult = String(item);
            }
            return escapeRegexResult;
          });
          const _HermesInternal = HermesInternal;
          str = "^(" + mapped.join("|") + ")$";
        }
        const regExp = new RegExp(str);
        return regExp;
      });
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (!set.has(value)) {
          const issues = value.issues;
          const obj = { code: "invalid_value", values: values.values, input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodFile = fnResult.$constructor("$ZodFile", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (!(value instanceof File)) {
          const issues = value.issues;
          const obj = { expected: "file", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodTransform = fnResult.$constructor("$ZodTransform", (_zod, arg1) => {
      let constructor = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      const memoizer = closure_8.globalConfig.memoizer;
      if (memoizer != null) {
        memoizer.guard(_zod);
      }
      _zod._zod.parse = (value, direction) => {
        constructor = value;
        if ("backward" === direction.direction) {
          const ZodEncodeError = new fnResult.$ZodEncodeError(constructor.constructor.name);
          throw ZodEncodeError;
        } else {
          const transformResult = closure_1.transform(value.value, value);
          if (direction.async) {
            let resolved = transformResult;
            if (!tmp15) {
              resolved = Promise.resolve(transformResult);
            }
            return resolved.then((value) => {
              closure_0.value = value;
              return closure_0;
            });
          } else if (tmp15) {
            const ZodAsyncError = new fnResult.$ZodAsyncError();
            throw ZodAsyncError;
          } else {
            value.value = transformResult;
            return value;
          }
        }
      };
    });
    exports.$ZodOptional = fnResult.$constructor("$ZodOptional", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "optin", (def) => {
        let str = "optional";
        if ("defaulted" === def.def.innerType._zod.optin) {
          str = "defaulted";
        }
        return str;
      });
      _zod._zod.optout = "optional";
      closure_10.defineLazyInternal(_zod, "values", (def) => {
        const values = def.def.innerType._zod.values;
        let set;
        if (values) {
          const _Set = Set;
          items = [];
          items[HermesBuiltin.arraySpread(values, 0)] = undefined;
          set = new Set(items);
        }
        return set;
      });
      closure_10.defineLazyInternal(_zod, "pattern", (def) => {
        const pattern = def.def.innerType._zod.pattern;
        let regExp;
        if (pattern) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          regExp = new RegExp("^(" + closure_1_10.cleanRegex(pattern.source) + ")?$");
        }
        return regExp;
      });
      _zod._zod.parse = (value, arg1) => {
        closure_0 = value;
        if (undefined === value.value) {
          if ("defaulted" !== closure_0.innerType._zod.optin) {
            return value;
          } else {
            const _zod2 = tmp2.innerType._zod;
            const obj = { value: value.value, issues: [] };
            const runResult = _zod2.run(obj, arg1);
            if (runResult instanceof Promise) {
              let nextPromise = runResult.then((issues) => {
                value = undefined;
                if (!issues.issues.length) {
                  value = issues.value;
                }
                closure_0.value = value;
                return closure_0;
              });
            } else {
              value = undefined;
              if (!runResult.issues.length) {
                value = runResult.value;
              }
              value.value = value;
              nextPromise = value;
            }
            return nextPromise;
          }
        } else {
          const _zod = closure_0.innerType._zod;
          return _zod.run(value, arg1);
        }
      };
    });
    exports.$ZodExactOptional = fnResult.$constructor("$ZodExactOptional", (_zod, arg1) => {
      const innerType = arg1;
      const $ZodOptional = exports.$ZodOptional;
      $ZodOptional.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
      closure_10.defineLazyInternal(_zod, "pattern", (def) => def.def.innerType._zod.pattern);
      _zod._zod.parse = (arg0, arg1) => {
        const _zod = innerType.innerType._zod;
        return _zod.run(arg0, arg1);
      };
    });
    exports.$ZodNullable = fnResult.$constructor("$ZodNullable", (_zod, arg1) => {
      const innerType = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "optin", (def) => def.def.innerType._zod.optin);
      closure_10.defineLazyInternal(_zod, "optout", (def) => def.def.innerType._zod.optout);
      closure_10.defineLazyInternal(_zod, "pattern", (def) => {
        const pattern = def.def.innerType._zod.pattern;
        let regExp;
        if (pattern) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          regExp = new RegExp("^(" + closure_1_10.cleanRegex(pattern.source) + "|null)$");
        }
        return regExp;
      });
      closure_10.defineLazyInternal(_zod, "values", (def) => {
        let set;
        if (def.def.innerType._zod.values) {
          const _Set = Set;
          items = [];
          items[HermesBuiltin.arraySpread(def.def.innerType._zod.values, 0)] = null;
          set = new Set(items);
        }
        return set;
      });
      _zod._zod.parse = (value, arg1) => {
        let runResult = value;
        if (null !== value.value) {
          const _zod = innerType.innerType._zod;
          runResult = _zod.run(value, arg1);
        }
        return runResult;
      };
    });
    exports.$ZodDefault = fnResult.$constructor("$ZodDefault", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "defaulted";
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        if ("backward" === direction.direction) {
          const _zod2 = defaultValue.innerType._zod;
          return _zod2.run(value, direction);
        } else if (undefined === value.value) {
          value.value = defaultValue.defaultValue;
          return value;
        } else {
          const _zod = defaultValue.innerType._zod;
          const runResult = _zod.run(value, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((value) => {
              if (undefined === value.value) {
                value.value = defaultValue.defaultValue;
              }
              return value;
            });
          } else {
            nextPromise = runResult;
            if (undefined === runResult.value) {
              runResult.value = defaultValue.defaultValue;
              nextPromise = runResult;
            }
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodPrefault = fnResult.$constructor("$ZodPrefault", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "defaulted";
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        if ("backward" !== direction.direction) {
          if (undefined === value.value) {
            value.value = closure_0.defaultValue;
          }
        }
        const _zod = closure_0.innerType._zod;
        return _zod.run(value, direction);
      };
    });
    exports.$ZodNonOptional = fnResult.$constructor("$ZodNonOptional", (_zod, arg1) => {
      const inst = _zod;
      const innerType = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "values", (def) => {
        const values = def.def.innerType._zod.values;
        let set;
        if (values) {
          const _Set = Set;
          items = [];
          HermesBuiltin.arraySpread(values, 0);
          set = new Set(items.filter((item) => undefined !== item));
        }
        return set;
      });
      _zod._zod.parse = (arg0, arg1) => {
        const _zod = innerType.innerType._zod;
        const runResult = _zod.run(arg0, arg1);
        if (runResult instanceof Promise) {
          let nextPromise = runResult.then((issues) => {
            length = issues.issues.length;
            if (!length) {
              length = undefined !== issues.value;
            }
            if (!length) {
              issues = issues.issues;
              const obj = { code: "invalid_type", expected: "nonoptional", input: issues.value, inst: _zod };
              issues.push(obj);
            }
            return issues;
          });
        } else {
          length = runResult.issues.length;
          if (!length) {
            length = undefined !== runResult.value;
          }
          nextPromise = runResult;
          if (!length) {
            let issues = runResult.issues;
            let obj = { code: "invalid_type", expected: "nonoptional", input: runResult.value, inst };
            issues.push(obj);
            nextPromise = runResult;
          }
        }
        return nextPromise;
      };
    });
    exports.$ZodSuccess = fnResult.$constructor("$ZodSuccess", (_zod, arg1) => {
      let innerType = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0, direction) => {
        let nextPromise = arg0;
        innerType = arg0;
        if ("backward" === direction.direction) {
          const ZodEncodeError = new fnResult.$ZodEncodeError("ZodSuccess");
          throw ZodEncodeError;
        } else {
          const _zod = innerType.innerType._zod;
          const runResult = _zod.run(nextPromise, direction);
          if (runResult instanceof Promise) {
            nextPromise = runResult.then((issues) => {
              closure_0.value = 0 === issues.issues.length;
              return closure_0;
            });
          } else {
            nextPromise.value = 0 === runResult.issues.length;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodCatch = fnResult.$constructor("$ZodCatch", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "optin", (def) => {
        let str = "optional";
        if ("defaulted" === def.def.innerType._zod.optin) {
          str = "defaulted";
        }
        return str;
      });
      closure_10.defineLazyInternal(_zod, "optout", (def) => def.def.innerType._zod.optout);
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        direction = value;
        closure_1 = direction;
        if ("backward" === direction.direction) {
          const _zod = direction.innerType._zod;
          return _zod.run(value, direction);
        } else {
          const _zod2 = direction.innerType._zod;
          let obj2 = { value: value.value, issues: [] };
          const runResult = _zod2.run(obj2, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((issues) => {
              direction = closure_1;
              if (issues.issues.length) {
                const obj2 = {};
                const merged = Object.assign(issues);
                obj2.value = iter.value;
                const obj3 = { issues: null };
                issues = issues.issues;
                obj3.issues = issues.map((item) => closure_2_10.finalizeIssue(item, closure_0, closure_2_8.config()));
                obj2.error = obj3;
                obj2.input = iter.value;
                iter.value = direction.catchValue(obj2);
              } else {
                iter.value = issues.value;
                if (issues.memo) {
                  iter.memo = true;
                }
              }
              return direction;
            });
          } else if (runResult.issues.length) {
            const obj = {};
            let merged = Object.assign(runResult);
            obj.value = value.value;
            const obj4 = { issues: null };
            let issues = runResult.issues;
            obj4.issues = issues.map((item) => closure_2_10.finalizeIssue(item, closure_0, closure_2_8.config()));
            obj.error = obj4;
            obj.input = value.value;
            value.value = direction.catchValue(obj);
            nextPromise = value;
          } else {
            value.value = runResult.value;
            nextPromise = value;
            if (runResult.memo) {
              value.memo = true;
              nextPromise = value;
            }
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodNaN = fnResult.$constructor("$ZodNaN", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        let isNaNResult = typeof value === "number";
        if (typeof value === "number") {
          const _Number = Number;
          isNaNResult = Number.isNaN(value.value);
        }
        if (!isNaNResult) {
          const issues = value.issues;
          const obj = { input: value.value, inst, expected: "nan", code: "invalid_type" };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodPipe = fnResult.$constructor("$ZodPipe", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.in._zod.values);
      closure_10.defineLazyInternal(_zod, "optin", (def) => def.def.in._zod.optin);
      closure_10.defineLazyInternal(_zod, "optout", (def) => def.def.out._zod.optout);
      closure_10.defineLazyInternal(_zod, "propValues", (def) => def.def.in._zod.propValues);
      _zod._zod.parse = (arg0, direction) => {
        if ("backward" === direction.direction) {
          const _zod2 = direction.out._zod;
          let runResult = _zod2.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((issues) => {
              issues = issues.issues;
              if (issues.some((code) => "unrecognized_keys" !== code.code)) {
                issues.aborted = true;
                let runResult = issues;
              } else {
                const _zod = direction.in._zod;
                const obj = { value: null, issues: null };
                ({ value: obj.value, issues: obj.issues } = issues);
                runResult = _zod.run(obj, direction);
              }
              return runResult;
            });
          } else {
            const issues2 = runResult.issues;
            if (issues2.some((code) => "unrecognized_keys" !== code.code)) {
              runResult.aborted = true;
              nextPromise = runResult;
            } else {
              const _zod3 = direction.in._zod;
              ({ value: obj2.value, issues: obj2.issues } = runResult);
              nextPromise = _zod3.run({ value: null, issues: null }, direction);
              const obj3 = { value: null, issues: null };
            }
          }
          return nextPromise;
        } else {
          const _zod4 = direction.in._zod;
          const runResult1 = _zod4.run(arg0, direction);
          if (runResult1 instanceof Promise) {
            let nextPromise1 = runResult1.then((issues) => {
              issues = issues.issues;
              if (issues.some((code) => "unrecognized_keys" !== code.code)) {
                issues.aborted = true;
                let runResult = issues;
              } else {
                const _zod = direction.out._zod;
                const obj = { value: null, issues: null };
                ({ value: obj.value, issues: obj.issues } = issues);
                runResult = _zod.run(obj, direction);
              }
              return runResult;
            });
          } else {
            let issues = runResult1.issues;
            if (issues.some((code) => "unrecognized_keys" !== code.code)) {
              runResult1.aborted = true;
              nextPromise1 = runResult1;
            } else {
              let _zod = direction.out._zod;
              let obj = { value: null, issues: null };
              ({ value: obj.value, issues: obj.issues } = runResult1);
              nextPromise1 = _zod.run(obj, direction);
            }
          }
          return nextPromise1;
        }
      };
    });
    exports.$ZodCodec = fnResult.$constructor("$ZodCodec", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.in._zod.values);
      closure_10.defineLazyInternal(_zod, "optin", (def) => def.def.in._zod.optin);
      closure_10.defineLazyInternal(_zod, "optout", (def) => def.def.out._zod.optout);
      closure_10.defineLazyInternal(_zod, "propValues", (def) => def.def.in._zod.propValues);
      _zod._zod.parse = (arg0, direction) => {
        closure_0 = direction;
        if ("forward" === tmp) {
          const _zod2 = closure_0.in._zod;
          const runResult = _zod2.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((result) => handleCodecAResult(result, closure_0, closure_0));
          } else {
            nextPromise = handleCodecAResult(runResult, closure_0, direction);
          }
          return nextPromise;
        } else {
          const _zod = closure_0.out._zod;
          const runResult1 = _zod.run(arg0, direction);
          if (runResult1 instanceof Promise) {
            let nextPromise1 = runResult1.then((result) => handleCodecAResult(result, closure_0, closure_0));
          } else {
            nextPromise1 = handleCodecAResult(runResult1, closure_0, direction);
          }
          return nextPromise1;
        }
        tmp = direction.direction || "forward";
      };
    });
    exports.$ZodPreprocess = fnResult.$constructor("$ZodPreprocess", (arg0, arg1) => {
      const $ZodPipe = exports.$ZodPipe;
      $ZodPipe.init(arg0, arg1);
    });
    exports.$ZodReadonly = fnResult.$constructor("$ZodReadonly", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazyInternal(_zod, "propValues", (def) => def.def.innerType._zod.propValues);
      closure_10.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
      closure_10.defineLazyInternal(_zod, "optin", (def) => {
        const innerType = def.def.innerType;
        let optin;
        if (innerType != null) {
          const _zod = innerType._zod;
          if (_zod != null) {
            optin = _zod.optin;
          }
        }
        return optin;
      });
      closure_10.defineLazyInternal(_zod, "optout", (def) => {
        const innerType = def.def.innerType;
        let optout;
        if (innerType != null) {
          const _zod = innerType._zod;
          if (_zod != null) {
            optout = _zod.optout;
          }
        }
        return optout;
      });
      _zod._zod.parse = (arg0, direction) => {
        if ("backward" === direction.direction) {
          const _zod2 = closure_0.innerType._zod;
          return _zod2.run(arg0, direction);
        } else {
          const _zod = closure_0.innerType._zod;
          const runResult = _zod.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then(handleReadonlyResult);
          } else {
            nextPromise = runResult;
            if (!runResult.memo) {
              const _Object = Object;
              runResult.value = Object.freeze(runResult.value);
              nextPromise = runResult;
            }
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodTemplateLiteral = fnResult.$constructor("$ZodTemplateLiteral", (_zod, arg1) => {
      const inst = _zod;
      const format = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      items = [];
      const iter = arg1.parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (typeof nextResult === "object") {
          if (null !== tmp3) {
            let tmp17 = partPattern(tmp3);
            if (tmp17) {
              let arr = items.push(closure_10.cleanRegex(tmp18));
              continue;
            } else {
              let _Error2 = Error;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(tmp3._zod.traits, 0);
              let _HermesInternal3 = HermesInternal;
              let str2 = "Invalid template literal part, no pattern found: ";
              let tmp22 = new.target;
              let tmp23 = new.target;
              let error = new Error("Invalid template literal part, no pattern found: " + items1.shift());
              throw error;
            }
          }
        }
        if (null !== tmp3) {
          let primitiveTypes = closure_10.primitiveTypes;
          if (!primitiveTypes.has(typeof tmp3)) {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Invalid template literal part: ";
            let tmp8 = new.target;
            let tmp9 = new.target;
            let error1 = new Error("Invalid template literal part: " + tmp3);
            throw error1;
          }
        }
        let _HermesInternal2 = HermesInternal;
        let arr2 = items.push(closure_10.escapeRegex("" + tmp3));
      }
      const regExp = new RegExp("^" + items.join("") + "$");
      _zod._zod.pattern = regExp;
      _zod._zod.parse = (value, arg1) => {
        if (typeof value.value !== "string") {
          const issues = value.issues;
          const obj2 = { input: value.value, inst, expected: "string", code: "invalid_type" };
          issues.push(obj2);
        } else {
          inst._zod.pattern.lastIndex = 0;
          const pattern = inst._zod.pattern;
          if (!pattern.test(value.value)) {
            const issues1 = value.issues;
            const obj = { input: value.value, inst, code: "invalid_format", format: null, pattern: null };
            let str = format.format;
            if (str == null) {
              str = "template_literal";
            }
            obj.format = str;
            obj.pattern = inst._zod.pattern.source;
            issues1.push(obj);
          }
        }
        return value;
      };
    });
    exports.$ZodFunction = fnResult.$constructor("$ZodFunction", (_zod, value) => {
      let inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, value);
      Object.defineProperty(_zod, "_def", { value });
      _zod._zod.def = value;
      _zod.implement = (fn) => {
        inst = fn;
        if (typeof fn !== "function") {
          const _Error = Error;
          const error = new Error("implement() must be called with a function");
          throw error;
        } else {
          const _Object = Object;
          const obj = { value: inst._zod, enumerable: false };
          return Object.defineProperty(function() {
            items = [...arguments];
            let parsed = items;
            if (_def._def.input) {
              parsed = finalizeParams.parse(_def._def.input, items);
            }
            const applyResult = Reflect.apply(_def, this, parsed);
            let parsed1 = applyResult;
            if (_def._def.output) {
              parsed1 = finalizeParams.parse(_def._def.output, applyResult);
            }
            return parsed1;
          }, "_zod", obj);
        }
      };
      _zod.implementAsync = (fn) => {
        inst = fn;
        if (typeof fn !== "function") {
          const _Error = Error;
          const error = new Error("implementAsync() must be called with a function");
          throw error;
        } else {
          const _Object = Object;
          const obj = { value: inst._zod, enumerable: false };
          return Object.defineProperty(asyncGeneratorStep(async function() {
            const self = this;
            closure_1 = [...arguments];
            c5 = 0;
            c6 = 0;
            const iter = (async (arg0) => {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else if (self._def.input) {
                  c5 = 2;
                  c6 = 1;
                  return { value: _self(12161).parseAsync(self._def.input, closure_130_0), done: false };
                } else {
                  let tmp12 = closure_130_0;
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else {
                  tmp12 = value;
                  if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  }
                }
              } else {
                if (3 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    closure_130_2 = value;
                    if (self._def.output) {
                      c5 = 4;
                      c6 = 1;
                      return { value: _self(12161).parseAsync(self._def.output, closure_130_2), done: false };
                    } else {
                      let tmp6 = closure_130_2;
                    }
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else {
                  tmp6 = value;
                  if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  }
                }
                c6 = 3;
                return { value: tmp6, done: true };
              }
              closure_130_1 = tmp12;
              const _Reflect = Reflect;
              await Reflect.apply(closure_131_0, closure_4, closure_130_1);
              closure_4 = self;
              closure_3 = self;
              closure_2 = tmp2;
              closure_130_0 = closure_1;
              return "Path";
            })();
            iter.next();
            return iter;
          }), "_zod", obj);
        }
      };
      _zod._zod.parse = (value, arg1) => {
        if (typeof value.value !== "function") {
          const issues = value.issues;
          const obj = { code: "invalid_type", expected: "function", input: value.value, inst };
          issues.push(obj);
          return value;
        } else {
          let output = inst._def.output;
          if (output) {
            output = "promise" === inst._def.output._zod.def.type;
          }
          if (output) {
            let implementAsyncResult = inst.implementAsync(value.value);
          } else {
            implementAsyncResult = inst.implement(value.value);
          }
          value.value = implementAsyncResult;
          return value;
        }
      };
      _zod.input = () => {
        items = [...arguments];
        const constructor = inst.constructor;
        const obj = { type: "function", input: null, output: null };
        if (Array.isArray(items[0])) {
          const obj3 = { type: "tuple", items: null, rest: null };
          [obj2.items, obj2.rest] = items;
          const ZodTuple = new exports.$ZodTuple(obj3);
          obj.input = ZodTuple;
          obj.output = inst._def.output;
          let constructor1 = new constructor(obj);
        } else {
          obj.input = items[0];
          obj.output = inst._def.output;
          constructor1 = new constructor(obj);
        }
        return constructor1;
      };
      _zod.output = (output) => {
        const constructor = new inst.constructor({ type: "function", input: inst._def.input, output });
        return constructor;
      };
      return _zod;
    });
    exports.$ZodPromise = fnResult.$constructor("$ZodPromise", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        const innerType = arg1;
        const resolved = Promise.resolve(value.value);
        return resolved.then((value) => {
          const _zod = innerType.innerType._zod;
          return _zod.run({ value, issues: [] }, innerType);
        });
      };
    });
    exports.$ZodLazy = fnResult.$constructor("$ZodLazy", (_zod, arg1) => {
      const _cachedInner = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "innerType", () => {
        if (!_cachedInner._cachedInner) {
          _cachedInner._cachedInner = _cachedInner.getter();
        }
        return _cachedInner._cachedInner;
      });
      closure_10.defineLazyInternal(_zod, "pattern", (innerType) => {
        innerType = innerType.innerType;
        let pattern;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            pattern = _zod.pattern;
          }
        }
        return pattern;
      });
      closure_10.defineLazyInternal(_zod, "propValues", (innerType) => {
        innerType = innerType.innerType;
        let propValues;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            propValues = _zod.propValues;
          }
        }
        return propValues;
      });
      closure_10.defineLazyInternal(_zod, "optin", (innerType) => {
        innerType = innerType.innerType;
        let optin;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            optin = _zod.optin;
          }
        }
        return optin;
      });
      closure_10.defineLazyInternal(_zod, "optout", (innerType) => {
        innerType = innerType.innerType;
        let optout;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            optout = _zod.optout;
          }
        }
        return optout;
      });
      _zod._zod.parse = (arg0, arg1) => {
        _zod = _zod._zod.innerType._zod;
        return _zod.run(arg0, arg1);
      };
    });
    exports.$ZodCustom = fnResult.$constructor("$ZodCustom", (_zod, arg1) => {
      closure_0 = _zod;
      _exports = arg1;
      const $ZodCheck = closure_7.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0, arg1) => arg0;
      _zod._zod.check = (value) => {
        const inst = value;
        value = value.value;
        closure_1 = value;
        fnResult = closure_1.fn(value);
        if (fnResult instanceof Promise) {
          return fnResult.then((result) => {
            if (!result) {
              const obj = { code: "custom", input: tmp2, inst, path: null, continue: null };
              let path = inst._zod.def.path;
              if (path == null) {
                path = [];
              }
              items = [];
              HermesBuiltin.arraySpread(path, 0);
              obj.path = items;
              obj.continue = !inst._zod.def.abort;
              if (inst._zod.def.params) {
                obj.params = inst._zod.def.params;
              }
              const issues = tmp.issues;
              issues.push(closure_10.issue(obj));
            }
          });
        } else if (!fnResult) {
          let obj = { code: "custom", input: value, inst: tmp, path: null, continue: null };
          let path = tmp._zod.def.path;
          if (path == null) {
            path = [];
          }
          items = [];
          HermesBuiltin.arraySpread(path, 0);
          obj.path = items;
          obj.continue = !tmp._zod.def.abort;
          if (tmp._zod.def.params) {
            obj.params = tmp._zod.def.params;
          }
          let issues = value.issues;
          issues.push(closure_1_10.issue(obj));
        }
      };
    });
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}