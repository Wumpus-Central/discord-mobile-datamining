// _runtime/12245_applyMinItems.js
import $output from "12233__output.js";
import _mod12240 from "metro/12240__.js";
import lt from "12241_lt.js";
import _mod12246 from "metro/12246__.js";
import _slicedToArray from "metro/00032__.js";

const require = globalThis.__r;

const self = this;
function applyMinItems(arr, minItems) {
  closure_0 = minItems;
  return arr.map((optional, index) => {
    let optionalResult = optional;
    if (index >= closure_0) {
      optionalResult = optional.optional();
    }
    return optionalResult;
  });
}
function canonicalKey(obj, has) {
  if (null === obj) {
    return "z";
  } else if (typeof obj !== "object") {
    if (typeof obj === "number") {
      const _Number = Number;
      if (Number.isNaN(obj)) {
        return null;
      }
    }
    const _String = String;
    const StringResult = String(obj);
    const _HermesInternal4 = HermesInternal;
    return "" + typeof obj[0] + StringResult.length + ":" + StringResult;
  } else if (has.has(obj)) {
    return null;
  } else {
    has.add(obj);
    try {
      const _Array = Array;
      if (Array.isArray(obj)) {
        items = [];
        const obj3 = obj[Symbol.iterator]();
        while (obj3 !== undefined) {
          let tmp28 = canonicalKey(tmp25, has);
          if (null === tmp28) {
            obj3.return();
            let deleteResult = has.delete(obj);
            return null;
          } else {
            let arr = items.push(tmp29);
            continue;
          }
        }
        const _HermesInternal3 = HermesInternal;
        const combined = "a" + length2 + ":[" + items.join(",") + "]";
        has.delete(obj);
        return combined;
      } else {
        const _Object = Object;
        const keys = Object.keys(obj);
        const sorted = keys.sort();
        const items1 = [];
        const iter = sorted[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let arr2 = nextResult;
          let tmp10 = canonicalKey(obj[nextResult], has);
          if (null === tmp10) {
            iter.return();
            let deleteResult2 = has.delete(obj);
            return null;
          } else {
            let _HermesInternal = HermesInternal;
            let str4 = "";
            let str5 = ":";
            let str6 = "=";
            let arr3 = items1.push("" + arr2.length + ":" + nextResult + "=" + tmp11);
            continue;
          }
        }
        const _HermesInternal2 = HermesInternal;
        const combined1 = "o" + length + ":{" + items1.join(",") + "}";
        has.delete(obj);
        return combined1;
      }
    } catch (tmp39) {
      obj.delete(tmp);
      throw tmp39;
    }
  }
}
function containsRef(contains) {
  let tmp = typeof contains === "object";
  if (typeof contains === "object") {
    tmp = null !== contains;
  }
  if (!tmp) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(contains)) {
      let someResult = contains.some(containsRef);
    } else {
      const $ref = contains.$ref;
      someResult = typeof $ref === "string";
      if (typeof $ref !== "string") {
        const _Object = Object;
        const entries = Object.entries(contains);
        someResult = entries.some((item) => {
          [tmp, obj] = item;
          if (closure_1_10.has(tmp)) {
            let tmp9 = typeof obj === "object";
            if (typeof obj === "object") {
              tmp9 = null !== obj;
            }
            if (!tmp9) {
              let someResult1 = tmp9;
            } else {
              let _Array = Array;
              if (Array.isArray(obj)) {
                let someResult = obj.some(closure_1_12);
              } else {
                let $ref = obj.$ref;
                someResult = typeof $ref === "string";
                if (typeof $ref !== "string") {
                  let _Object2 = Object;
                  let entries = Object.entries(obj);
                  someResult = entries.some((item) => {
                    [tmp, obj] = item;
                    if (closure_1_10.has(tmp)) {
                      let tmp9 = typeof obj === "object";
                      if (typeof obj === "object") {
                        tmp9 = null !== obj;
                      }
                      if (!tmp9) {
                        let someResult1 = tmp9;
                      } else {
                        let _Array = Array;
                        if (Array.isArray(obj)) {
                          let someResult = obj.some(closure_1_12);
                        } else {
                          let $ref = obj.$ref;
                          someResult = typeof $ref === "string";
                          if (typeof $ref !== "string") {
                            let _Object2 = Object;
                            let entries = Object.entries(obj);
                            someResult = entries.some((item) => {
                              [tmp, obj] = item;
                              if (closure_1_10.has(tmp)) {
                                let tmp9 = typeof obj === "object";
                                if (typeof obj === "object") {
                                  tmp9 = null !== obj;
                                }
                                if (!tmp9) {
                                  let someResult1 = tmp9;
                                } else {
                                  let _Array = Array;
                                  if (Array.isArray(obj)) {
                                    let someResult = obj.some(closure_1_12);
                                  } else {
                                    let $ref = obj.$ref;
                                    someResult = typeof $ref === "string";
                                    if (typeof $ref !== "string") {
                                      let _Object2 = Object;
                                      let entries = Object.entries(obj);
                                      someResult = entries.some((item) => {
                                        [tmp, obj] = item;
                                        if (closure_1_10.has(tmp)) {
                                          let tmp9 = typeof obj === "object";
                                          if (typeof obj === "object") {
                                            tmp9 = null !== obj;
                                          }
                                          if (!tmp9) {
                                            let someResult1 = tmp9;
                                          } else {
                                            let _Array = Array;
                                            if (Array.isArray(obj)) {
                                              let someResult = obj.some(closure_1_12);
                                            } else {
                                              let $ref = obj.$ref;
                                              someResult = typeof $ref === "string";
                                              if (typeof $ref !== "string") {
                                                let _Object2 = Object;
                                                let entries = Object.entries(obj);
                                                someResult = entries.some(/* F104622 */ function() { ... });
                                              }
                                            }
                                          }
                                        } else {
                                          let hasItem = closure_1_11.has(tmp);
                                          let tmp4 = !hasItem;
                                          if (hasItem) {
                                            tmp4 = typeof obj !== "object";
                                          }
                                          if (!tmp4) {
                                            tmp4 = null === obj;
                                          }
                                          someResult1 = !tmp4;
                                          if (!tmp4) {
                                            let _Object = Object;
                                            let values = Object.values(obj);
                                            someResult1 = values.some(closure_1_12);
                                          }
                                        }
                                        return someResult1;
                                      });
                                    }
                                  }
                                }
                              } else {
                                let hasItem = closure_1_11.has(tmp);
                                let tmp4 = !hasItem;
                                if (hasItem) {
                                  tmp4 = typeof obj !== "object";
                                }
                                if (!tmp4) {
                                  tmp4 = null === obj;
                                }
                                someResult1 = !tmp4;
                                if (!tmp4) {
                                  let _Object = Object;
                                  let values = Object.values(obj);
                                  someResult1 = values.some(closure_1_12);
                                }
                              }
                              return someResult1;
                            });
                          }
                        }
                      }
                    } else {
                      let hasItem = closure_1_11.has(tmp);
                      let tmp4 = !hasItem;
                      if (hasItem) {
                        tmp4 = typeof obj !== "object";
                      }
                      if (!tmp4) {
                        tmp4 = null === obj;
                      }
                      someResult1 = !tmp4;
                      if (!tmp4) {
                        let _Object = Object;
                        let values = Object.values(obj);
                        someResult1 = values.some(closure_1_12);
                      }
                    }
                    return someResult1;
                  });
                }
              }
            }
          } else {
            let hasItem = closure_1_11.has(tmp);
            let tmp4 = !hasItem;
            if (hasItem) {
              tmp4 = typeof obj !== "object";
            }
            if (!tmp4) {
              tmp4 = null === obj;
            }
            someResult1 = !tmp4;
            if (!tmp4) {
              let _Object = Object;
              let values = Object.values(obj);
              someResult1 = values.some(closure_1_12);
            }
          }
          return someResult1;
        });
      }
    }
  }
}
function plural(interval) {
  let str = "elements";
  if (1 === interval) {
    str = "element";
  }
  return str;
}
function getTupleRest(additionalItems, refs) {
  if (false !== additionalItems) {
    if (undefined !== additionalItems) {
      if (true !== additionalItems) {
        let anyResult = convertSchema(additionalItems, refs);
      }
      return anyResult;
    }
    anyResult = obj.any();
  }
}
function convertBaseSchema(not, refs) {
  _require = not;
  if (undefined !== not.not) {
    if (typeof not.not === "object") {
      const _Object5 = Object;
      if (0 === Object.keys(not.not).length) {
        return obj.never();
      }
    }
    const _Error6 = Error;
    let error = new Error("not is not supported in Zod (except { not: {} } for never)");
    throw error;
  } else if (undefined !== not.unevaluatedItems) {
    const _Error5 = Error;
    let error1 = new Error("unevaluatedItems is not supported");
    throw error1;
  } else if (undefined !== not.unevaluatedProperties) {
    const _Error4 = Error;
    let error2 = new Error("unevaluatedProperties is not supported");
    throw error2;
  } else {
    if (undefined === not.if) {
      if (undefined === not.then) {
        if (undefined === not.else) {
          if (undefined === not.dependentSchemas) {
            if (undefined === not.dependentRequired) {
              if (not.$ref) {
                const $ref = not.$ref;
                refs = refs.refs;
                if (refs.has($ref)) {
                  const refs3 = refs.refs;
                  return refs3.get($ref);
                } else {
                  const processing = refs.processing;
                  if (processing.has($ref)) {
                    return obj.lazy(() => {
                      refs = refs.refs;
                      if (refs.has($ref)) {
                        const refs2 = tmp.refs;
                        return refs2.get($ref);
                      } else {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        const error = new Error("Circular reference not resolved: " + $ref);
                        throw error;
                      }
                      tmp = refs;
                    });
                  } else {
                    const processing2 = refs.processing;
                    processing2.add($ref);
                    const tmp158 = convertSchema((function resolveRef($ref, rootSchema) {
                      if ($ref.startsWith("#")) {
                        const parts = $ref.slice(1).split("/");
                        const _Boolean = Boolean;
                        const found = parts.filter(Boolean);
                        if (0 === found.length) {
                          return rootSchema.rootSchema;
                        } else {
                          let str4 = "definitions";
                          if ("draft-2020-12" === rootSchema.version) {
                            str4 = "$defs";
                          }
                          if (found[0] === str4) {
                            let replaced;
                            if (undefined !== found[1]) {
                              replaced = found[1].replace(/~1/g, "/").replace(/~0/g, "~");
                              const str7 = found[1].replace(/~1/g, "/");
                            }
                            if (replaced) {
                              if (rootSchema.defs[replaced]) {
                                return rootSchema.defs[replaced];
                              }
                            }
                            const _Error3 = Error;
                            const _HermesInternal2 = HermesInternal;
                            const error = new Error("Reference not found: " + $ref);
                            throw error;
                          } else {
                            const _Error2 = Error;
                            const _HermesInternal = HermesInternal;
                            const error1 = new Error("Reference not found: " + $ref);
                            throw error1;
                          }
                        }
                        const str2 = $ref.slice(1);
                      } else {
                        const _Error = Error;
                        const error2 = new Error("External $ref is not supported, only local refs (#/...) are allowed");
                        throw error2;
                      }
                    })($ref, refs), refs);
                    let refs2 = refs.refs;
                    let result = refs2.set($ref, tmp158);
                    const processing3 = refs.processing;
                    processing3.delete($ref);
                    return tmp158;
                  }
                }
              } else if (undefined !== not.enum) {
                const _enum = not.enum;
                if ("openapi-3.0" === refs.version) {
                  if (true === not.nullable) {
                    if (1 === _enum.length) {
                      if (null === _enum[0]) {
                        return obj.null();
                      }
                    }
                  }
                }
                if (0 === _enum.length) {
                  return obj.never();
                } else if (1 === _enum.length) {
                  return obj.literal(_enum[0]);
                } else if (_enum.every((item) => typeof item === "string")) {
                  return obj.enum(_enum);
                } else {
                  const mapped = _enum.map((item) => obj.literal(item));
                  if (mapped.length < 2) {
                    let first = mapped[0];
                  } else {
                    const items1 = [, ];
                    [arr9[0], arr9[1]] = mapped;
                    HermesBuiltin.arraySpread(mapped.slice(2), 2);
                    first = obj.union(items1);
                  }
                  return first;
                }
              } else if (undefined !== not.const) {
                return obj.literal(not.const);
              } else {
                const type = not.type;
                const _Array4 = Array;
                if (Array.isArray(type)) {
                  const mapped1 = type.map((type) => {
                    obj = {};
                    const merged = Object.assign(closure_0);
                    obj.type = type;
                    return convertBaseSchema(obj, closure_1);
                  });
                  if (0 === mapped1.length) {
                    let neverResult = obj.never();
                  } else if (1 === mapped1.length) {
                    neverResult = mapped1[0];
                  } else {
                    neverResult = obj.union(mapped1);
                  }
                  return neverResult;
                } else if (type) {
                  if ("string" === type) {
                    const stringResult = obj.string();
                    let checkResult = stringResult;
                    if (not.format) {
                      const format = not.format;
                      if ("email" === format) {
                        checkResult = stringResult.check(obj28.email());
                      } else {
                        if ("uri" !== format) {
                          if ("uri-reference" !== format) {
                            if ("uuid" !== format) {
                              if ("guid" !== format) {
                                if ("date-time" === format) {
                                  const iso3 = obj28.iso;
                                  checkResult = stringResult.check(iso3.datetime({ offset: true }));
                                } else if ("date" === format) {
                                  const iso2 = obj28.iso;
                                  checkResult = stringResult.check(iso2.date());
                                } else if ("time" === format) {
                                  checkResult = stringResult.check(obj28.regex(closure_15));
                                } else if ("duration" === format) {
                                  const iso = obj28.iso;
                                  checkResult = stringResult.check(iso.duration());
                                } else if ("hostname" === format) {
                                  checkResult = stringResult.check(obj28.hostname());
                                } else if ("ipv4" === format) {
                                  checkResult = stringResult.check(obj28.ipv4());
                                } else if ("ipv6" === format) {
                                  checkResult = stringResult.check(obj28.ipv6());
                                } else if ("mac" === format) {
                                  checkResult = stringResult.check(obj28.mac());
                                } else if ("cidr" === format) {
                                  checkResult = stringResult.check(obj28.cidrv4());
                                } else if ("cidr-v6" === format) {
                                  checkResult = stringResult.check(obj28.cidrv6());
                                } else if ("base64" === format) {
                                  checkResult = stringResult.check(obj28.base64());
                                } else if ("base64url" === format) {
                                  checkResult = stringResult.check(obj28.base64url());
                                } else if ("e164" === format) {
                                  checkResult = stringResult.check(obj28.e164());
                                } else if ("credit_card" === format) {
                                  checkResult = stringResult.check(obj28.creditCard());
                                } else if ("iban" === format) {
                                  checkResult = stringResult.check(obj28.iban());
                                } else if ("jwt" === format) {
                                  checkResult = stringResult.check(obj28.jwt());
                                } else if ("emoji" === format) {
                                  checkResult = stringResult.check(obj28.emoji());
                                } else if ("nanoid" === format) {
                                  checkResult = stringResult.check(obj28.nanoid());
                                } else if ("cuid" === format) {
                                  checkResult = stringResult.check(obj28.cuid());
                                } else if ("cuid2" === format) {
                                  checkResult = stringResult.check(obj28.cuid2());
                                } else if ("ulid" === format) {
                                  checkResult = stringResult.check(obj28.ulid());
                                } else if ("xid" === format) {
                                  checkResult = stringResult.check(obj28.xid());
                                } else {
                                  checkResult = stringResult;
                                  if ("ksuid" === format) {
                                    checkResult = stringResult.check(obj28.ksuid());
                                  }
                                }
                              }
                            }
                            checkResult = stringResult.check(obj28.uuid());
                          }
                        }
                        checkResult = stringResult.check(obj28.url());
                      }
                    }
                    let minResult = checkResult;
                    if (typeof not.minLength === "number") {
                      minResult = checkResult.min(not.minLength);
                    }
                    let maxResult = minResult;
                    if (typeof not.maxLength === "number") {
                      maxResult = minResult.max(not.maxLength);
                    }
                    let regexResult = maxResult;
                    if (not.pattern) {
                      const _RegExp2 = RegExp;
                      let regExp = new RegExp(not.pattern);
                      regexResult = maxResult.regex(regExp);
                    }
                    let booleanResult = regexResult;
                  } else {
                    if ("number" !== type) {
                      if ("integer" !== type) {
                        if ("boolean" === type) {
                          booleanResult = obj.boolean();
                        } else if ("null" === type) {
                          booleanResult = obj.null();
                        } else if ("object" === type) {
                          obj = {};
                          let required = not.required;
                          if (!required) {
                            required = [];
                          }
                          set = new Set(required);
                          if (typeof not.additionalProperties === "object") {
                            const tmp35 = convertSchema(not.additionalProperties, refs);
                          }
                          let _Object = Object;
                          const entries = Object.entries(not.properties || {});
                          const tmp38 = entries[Symbol.iterator]();
                          while (tmp38 !== undefined) {
                            let tmp43 = _slicedToArray(tmp40, 2);
                            let first1 = tmp43[0];
                            let obj14 = convertSchema(tmp43[1], refs);
                            if (set.has(first1)) {
                              let optionalResult = obj14;
                            } else {
                              optionalResult = obj14.optional();
                            }
                            let assignPropResult = require("metro/12160__.js").assignProp(obj, first1, optionalResult);
                            continue;
                          }
                          if (not.patternProperties) {
                            const patternProperties = not.patternProperties;
                            const _Object2 = Object;
                            let keys = Object.keys(patternProperties);
                            const items2 = [];
                            for (const item10164 of keys) {
                              let tmp57 = convertSchema(patternProperties[item10164], arg1);
                              let stringResult1 = obj.string();
                              let _RegExp = RegExp;
                              let tmp60 = new.target;
                              let tmp61 = new.target;
                              let regExp1 = new RegExp(item10164);
                              let arr = items2.push(obj.looseRecord(stringResult1.regex(regExp1), tmp57));
                              continue;
                            }
                            const items3 = [];
                            const _Object3 = Object;
                            if (Object.keys(obj).length > 0) {
                              items3.push(obj.object(obj).passthrough());
                              const objectResult = obj.object(obj);
                            }
                            const push = items3.push;
                            const items4 = [];
                            HermesBuiltin.arraySpread(items2, 0);
                            HermesBuiltin.apply(items4, items3);
                            if (0 === items3.length) {
                              let passthroughResult = obj.object({}).passthrough();
                              const objectResult3 = obj.object({});
                            } else if (1 === items3.length) {
                              passthroughResult = items3[0];
                            } else {
                              const intersectionResult = obj.intersection(items3[0], items3[1]);
                              let num12 = 2;
                              let intersectionResult1 = intersectionResult;
                              passthroughResult = intersectionResult;
                              if (2 < items3.length) {
                                do {
                                  intersectionResult1 = obj.intersection(intersectionResult1, items3[num12]);
                                  num12 = num12 + 1;
                                  passthroughResult = intersectionResult1;
                                  length = items3.length;
                                } while (num12 < length);
                              }
                            }
                            let checkResult1 = passthroughResult;
                            if (false === not.additionalProperties) {
                              const _Object4 = Object;
                              _slicedToArray = Object.keys(obj);
                              closure_4 = keys.map((item) => {
                                const regExp = new RegExp(item);
                                return regExp;
                              });
                              __setModuleDefault = passthroughResult;
                              checkResult1 = passthroughResult.check((value) => {
                                if (not($ref[4]).isPlainObject(value.value)) {
                                  items = [];
                                  const _Object = Object;
                                  function _loop(iter) {
                                    closure_0 = iter;
                                    let num = 0;
                                    if (!closure_3.includes(iter)) {
                                      num = 0;
                                      if (!closure_4.some((test) => test.test(closure_0))) {
                                        items.push(iter);
                                      }
                                    }
                                    return num;
                                  }
                                  const keys = Object.keys(value.value);
                                  const iter = keys[Symbol.iterator]();
                                  while (iter !== undefined) {
                                    let _loopResult = _loop(iter.next());
                                    continue;
                                  }
                                  if (items.length) {
                                    const issues = value.issues;
                                    obj = { code: "unrecognized_keys", keys: items, input: value.value, inst };
                                    issues.push(obj);
                                  }
                                }
                              });
                            }
                          } else {
                            const objectResult4 = obj.object(obj);
                            if (false === not.additionalProperties) {
                              checkResult1 = objectResult4.strict();
                            } else if (tmp35) {
                              checkResult1 = objectResult4.catchall(tmp35);
                            } else {
                              checkResult1 = objectResult4.passthrough();
                            }
                          }
                          let tmp84 = undefined !== not.propertyNames;
                          if (tmp84) {
                            tmp84 = true !== not.propertyNames;
                          }
                          if (typeof not.minProperties === "number") {
                            const minProperties = not.minProperties;
                          }
                          if (typeof not.maxProperties === "number") {
                            const maxProperties = not.maxProperties;
                          }
                          if (!tmp84) {
                            if (undefined === minProperties) {
                              booleanResult = checkResult1;
                            }
                          }
                          if (!tmp84) {
                            let obj2 = { keySchema: undefined, minProperties, maxProperties };
                            booleanResult = (function checkObjectGuards(checkResult1, arg1) {
                              inst = checkResult1;
                              closure_1 = arg1;
                              const transformResult = obj.transform((arg0) => arg0);
                              return obj.transform((arg0) => arg0).check((value) => {
                                value = value.value;
                                if (typeof value === "object") {
                                  if (null !== value) {
                                    const _Array = Array;
                                    if (!Array.isArray(value)) {
                                      const _Object = Object;
                                      const ownPropertyNames = Object.getOwnPropertyNames(value);
                                      let tmp3 = undefined !== closure_1.minProperties;
                                      if (tmp3) {
                                        tmp3 = ownPropertyNames.length < closure_1.minProperties;
                                      }
                                      if (tmp3) {
                                        const issues = value.issues;
                                        obj = { origin: "object", code: "too_small", minimum: closure_1.minProperties, inclusive: true, message: null, input: null, inst: null, continue: true };
                                        const _HermesInternal = HermesInternal;
                                        obj.message = "Too small: expected object to have >=" + closure_1.minProperties + " properties";
                                        obj.input = value;
                                        obj.inst = inst;
                                        issues.push(obj);
                                      }
                                      let tmp9 = undefined !== closure_1.maxProperties;
                                      if (tmp9) {
                                        tmp9 = ownPropertyNames.length > closure_1.maxProperties;
                                      }
                                      if (tmp9) {
                                        const issues1 = value.issues;
                                        const obj2 = { origin: "object", code: "too_big", maximum: closure_1.maxProperties, inclusive: true, message: null, input: null, inst: null, continue: true };
                                        const _HermesInternal2 = HermesInternal;
                                        obj2.message = "Too big: expected object to have <=" + closure_1.maxProperties + " properties";
                                        obj2.input = value;
                                        obj2.inst = inst;
                                        issues1.push(obj2);
                                      }
                                      if (closure_1.keySchema) {
                                        for (const item10052 of ownPropertyNames) {
                                          let keySchema = closure_1.keySchema;
                                          let safeParseResult = keySchema.safeParse(item10052);
                                          if (!safeParseResult.success) {
                                            let issues2 = arg0.issues;
                                            let obj3 = { code: "invalid_key", origin: "record", issues: null, input: null, path: null, continue: true };
                                            obj3.issues = tmp21.error.issues;
                                            obj3.input = item10052;
                                            items = [item10052];
                                            obj3.path = items;
                                            let arr3 = issues2.push(obj3);
                                          }
                                          continue;
                                        }
                                      }
                                    }
                                  }
                                }
                              }).pipe(checkResult1);
                            })(checkResult1, obj2);
                          } else {
                            if (typeof not.propertyNames !== "object") {
                              tmp85(not.propertyNames, refs);
                            }
                            const obj4 = { type: "string" };
                            let merged = Object.assign(not.propertyNames);
                          }
                          const tmp30 = not.properties || {};
                        } else if ("array" === type) {
                          ({ prefixItems, items } = not);
                          if (prefixItems) {
                            let _Array = Array;
                            if (Array.isArray(prefixItems)) {
                              let num5 = 0;
                              if (typeof not.minItems === "number") {
                                num5 = not.minItems;
                              }
                              const _Array3 = Array;
                              let tmp21;
                              if (!Array.isArray(items)) {
                                tmp21 = getTupleRest(items, refs);
                              }
                              const tupleResult = obj.tuple(applyMinItems(prefixItems.map((item) => convertSchema(item, closure_1)), num5));
                              let restResult = tupleResult;
                              if (tmp21) {
                                restResult = tupleResult.rest(tmp21);
                              }
                              let checkResult2 = restResult;
                              if (typeof not.minItems === "number") {
                                checkResult2 = restResult.check(obj7.minLength(not.minItems));
                              }
                              let checkResult3 = checkResult2;
                              if (typeof not.maxItems === "number") {
                                checkResult3 = checkResult2.check(obj7.maxLength(not.maxItems));
                              }
                              const tmp20 = applyMinItems(prefixItems.map((item) => convertSchema(item, closure_1)), num5);
                            }
                            booleanResult = checkResult3;
                            if (!tmp24) {
                              const obj5 = { uniqueItems: true === not.uniqueItems, containsSchema: null, minContains: null, maxContains: null };
                              let tmp26;
                              if (undefined !== not.contains) {
                                tmp26 = convertSchema(not.contains, refs);
                              }
                              obj5.containsSchema = tmp26;
                              let minContains;
                              if (typeof not.minContains === "number") {
                                minContains = not.minContains;
                              }
                              obj5.minContains = minContains;
                              let maxContains;
                              if (typeof not.maxContains === "number") {
                                maxContains = not.maxContains;
                              }
                              obj5.maxContains = maxContains;
                              booleanResult = (function checkArrayGuards(checkResult3, arg1) {
                                closure_0 = arg1;
                                const transformResult = closure_6.transform((arg0) => arg0);
                                return closure_6.transform((arg0) => arg0).check((value) => {
                                  value = value.value;
                                  if (Array.isArray(value)) {
                                    if (true === closure_0.uniqueItems) {
                                      const _Map = Map;
                                      const map = new Map();
                                      for (let num = 0; num < value.length; num = num + 1) {
                                        let _Set = Set;
                                        let tmp4 = new.target;
                                        let tmp5 = new.target;
                                        set = new Set();
                                        let tmp8 = canonicalKey(value[num], set);
                                        if (null !== tmp8) {
                                          let value2 = map.get(tmp8);
                                          if (undefined !== value2) {
                                            let issues = value.issues;
                                            obj = { code: "custom", message: null, input: null, path: null, continue: true };
                                            let _HermesInternal = HermesInternal;
                                            obj.message = "Array items must be unique: element at index " + num + " duplicates the one at index " + value2;
                                            obj.input = value;
                                            items = [num];
                                            obj.path = items;
                                            let arr = issues.push(obj);
                                          } else {
                                            let result = map.set(tmp8, num);
                                          }
                                        }
                                      }
                                    }
                                    if (closure_0.containsSchema) {
                                      if (undefined !== closure_0.maxContains) {
                                        const sum = closure_0.maxContains + 1;
                                      } else {
                                        const _Number = Number;
                                      }
                                      value[Symbol.iterator]();
                                    }
                                  }
                                }).pipe(checkResult3);
                              })(checkResult3, obj5);
                            }
                            tmp24 = true !== not.uniqueItems && undefined === not.contains;
                          }
                          const _Array2 = Array;
                          if (Array.isArray(items)) {
                            let num3 = 0;
                            if (typeof not.minItems === "number") {
                              num3 = not.minItems;
                            }
                            const tmp17 = getTupleRest(not.additionalItems, refs);
                            const tupleResult1 = obj.tuple(applyMinItems(items.map((item) => convertSchema(item, closure_1)), num3));
                            let restResult1 = tupleResult1;
                            if (tmp17) {
                              restResult1 = tupleResult1.rest(tmp17);
                            }
                            let checkResult4 = restResult1;
                            if (typeof not.minItems === "number") {
                              checkResult4 = restResult1.check(obj3.minLength(not.minItems));
                            }
                            checkResult3 = checkResult4;
                            if (typeof not.maxItems === "number") {
                              checkResult3 = checkResult4.check(obj3.maxLength(not.maxItems));
                            }
                            const tmp15 = applyMinItems(items.map((item) => convertSchema(item, closure_1)), num3);
                          } else if (undefined !== items) {
                            const arrayResult = obj.array(convertSchema(items, refs));
                            let minResult1 = arrayResult;
                            if (typeof not.minItems === "number") {
                              minResult1 = arrayResult.min(not.minItems);
                            }
                            let maxResult1 = minResult1;
                            if (typeof not.maxItems === "number") {
                              maxResult1 = minResult1.max(not.maxItems);
                            }
                            checkResult3 = maxResult1;
                          } else {
                            checkResult3 = obj.array(obj.any());
                          }
                        } else {
                          let _Error = Error;
                          let _HermesInternal = HermesInternal;
                          const error3 = new Error("Unsupported type: " + type);
                          throw error3;
                        }
                      }
                    }
                    if ("integer" === type) {
                      let intResult = obj.number().int();
                      const numberResult = obj.number();
                    } else {
                      intResult = obj.number();
                    }
                    const minimum = not.minimum;
                    let tmp98 = typeof minimum === "number";
                    if (typeof minimum === "number") {
                      tmp98 = true !== not.exclusiveMinimum;
                    }
                    let minResult2 = intResult;
                    if (tmp98) {
                      minResult2 = intResult.min(not.minimum);
                    }
                    const maximum = not.maximum;
                    let tmp99 = typeof maximum === "number";
                    if (typeof maximum === "number") {
                      tmp99 = true !== not.exclusiveMaximum;
                    }
                    let maxResult2 = minResult2;
                    if (tmp99) {
                      maxResult2 = minResult2.max(not.maximum);
                    }
                    if (typeof not.exclusiveMinimum === "number") {
                      let gtResult = maxResult2.gt(not.exclusiveMinimum);
                    } else {
                      gtResult = maxResult2;
                      if (tmp100) {
                        gtResult = maxResult2.gt(not.minimum);
                      }
                      tmp100 = true === not.exclusiveMinimum && typeof not.minimum === "number";
                    }
                    if (typeof not.exclusiveMaximum === "number") {
                      let ltResult = gtResult.lt(not.exclusiveMaximum);
                    } else {
                      ltResult = gtResult;
                      if (tmp101) {
                        ltResult = gtResult.lt(not.maximum);
                      }
                      tmp101 = true === not.exclusiveMaximum && typeof not.maximum === "number";
                    }
                    let multipleOfResult = ltResult;
                    if (typeof not.multipleOf === "number") {
                      multipleOfResult = ltResult.multipleOf(not.multipleOf);
                    }
                    booleanResult = multipleOfResult;
                  }
                  return booleanResult;
                } else {
                  return obj.any();
                }
              }
            }
          }
          let _Error2 = Error;
          const error4 = new Error("dependentSchemas and dependentRequired are not supported");
          throw error4;
        }
      }
    }
    let _Error3 = Error;
    const error5 = new Error("Conditional schemas (if/then/else) are not supported");
    throw error5;
  }
}
function convertSchema(additionalProperties, version) {
  _require = version;
  if (typeof additionalProperties === "boolean") {
    if (additionalProperties) {
      let anyResult = obj.any();
    } else {
      anyResult = obj.never();
    }
    return anyResult;
  } else {
    const tmp53 = convertBaseSchema(additionalProperties, version);
    let tmp2 = tmp53;
    if (additionalProperties.anyOf) {
      const _Array = Array;
      tmp2 = tmp53;
      if (Array.isArray(additionalProperties.anyOf)) {
        const anyOf = additionalProperties.anyOf;
        const unionResult = obj.union(anyOf.map((item) => convertSchema(item, closure_0)));
        let intersectionResult = unionResult;
        if (tmp) {
          intersectionResult = obj.intersection(tmp53, unionResult);
        }
        tmp2 = intersectionResult;
      }
    }
    let anyResult1 = tmp2;
    if (additionalProperties.oneOf) {
      const _Array2 = Array;
      anyResult1 = tmp2;
      if (Array.isArray(additionalProperties.oneOf)) {
        const oneOf = additionalProperties.oneOf;
        const xorResult = obj.xor(oneOf.map((item) => convertSchema(item, closure_0)));
        let intersectionResult1 = xorResult;
        if (tmp) {
          intersectionResult1 = obj.intersection(tmp2, xorResult);
        }
        anyResult1 = intersectionResult1;
      }
    }
    let tmp10 = anyResult1;
    if (additionalProperties.allOf) {
      const _Array3 = Array;
      tmp10 = anyResult1;
      if (Array.isArray(additionalProperties.allOf)) {
        if (0 === additionalProperties.allOf.length) {
          if (!tmp) {
            anyResult1 = obj.any();
          }
          tmp10 = anyResult1;
        } else {
          let tmp13 = anyResult1;
          if (!tmp) {
            tmp13 = convertSchema(additionalProperties.allOf[0], version);
          }
          let num2 = 1;
          if (tmp) {
            num2 = 0;
          }
          let intersectionResult2 = tmp13;
          let tmp15 = tmp13;
          if (num2 < additionalProperties.allOf.length) {
            do {
              intersectionResult2 = obj.intersection(intersectionResult2, convertSchema(additionalProperties.allOf[num2], version));
              num2 = num2 + 1;
              tmp15 = intersectionResult2;
              length = additionalProperties.allOf.length;
            } while (num2 < length);
          }
          tmp10 = tmp15;
        }
      }
    }
    let tmp19 = true === additionalProperties.nullable;
    if (tmp19) {
      tmp19 = "openapi-3.0" === version.version;
    }
    let nullableResult = tmp10;
    if (tmp19) {
      nullableResult = obj.nullable(tmp10);
    }
    let readonlyResult = nullableResult;
    if (true === additionalProperties.readOnly) {
      readonlyResult = obj.readonly(nullableResult);
    }
    let defaultResult = readonlyResult;
    if (undefined !== additionalProperties.default) {
      defaultResult = readonlyResult.default(additionalProperties.default);
    }
    const obj3 = {};
    items = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
    for (const item10092 of items) {
      if (item10092 in arg0) {
        obj3[item10092] = arg0[item10092];
      }
      continue;
    }
    const items1 = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (const item10102 of items1) {
      if (item10102 in arg0) {
        obj3[item10102] = arg0[item10102];
      }
      continue;
    }
    if ("object" === additionalProperties.type) {
      if (undefined === additionalProperties.$ref) {
        let tmp29 = undefined === additionalProperties.propertyNames;
        if (!tmp29) {
          tmp29 = containsRef(additionalProperties.propertyNames);
        }
        if (!tmp29) {
          obj3.propertyNames = additionalProperties.propertyNames;
        }
        const items2 = ["minProperties", "maxProperties"];
        for (const item10120 of items2) {
          if (undefined !== arg0[item10120]) {
            obj3[item10120] = arg0[item10120];
          }
          continue;
        }
      }
    }
    if ("array" === additionalProperties.type) {
      if (undefined === additionalProperties.$ref) {
        let tmp34 = undefined === additionalProperties.contains;
        if (!tmp34) {
          tmp34 = containsRef(additionalProperties.contains);
        }
        if (!tmp34) {
          obj3.contains = additionalProperties.contains;
        }
        const items3 = ["uniqueItems", "minContains", "maxContains"];
        for (const item10138 of items3) {
          if (undefined !== arg0[item10138]) {
            obj3[item10138] = arg0[item10138];
          }
          continue;
        }
      }
    }
    const _Object = Object;
    const keys = Object.keys(additionalProperties);
    for (const item10152 of keys) {
      if (!set.has(item10152)) {
        let assignPropResult = require("metro/12160__.js").assignProp(obj3, item10152, arg0[item10152]);
      }
      continue;
    }
    const _Object2 = Object;
    if (Object.keys(obj3).length > 0) {
      const registry = version.registry;
      registry.add(defaultResult, obj3);
    }
    let describeResult = defaultResult;
    if (additionalProperties.description) {
      describeResult = defaultResult.describe(additionalProperties.description);
    }
    return describeResult;
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
        obj = {};
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
    exports.fromJSONSchema = function fromJSONSchema(flag, defaultTarget) {
      if (typeof flag === "boolean") {
        if (flag) {
          let anyResult = obj3.any();
        } else {
          anyResult = obj3.never();
        }
        return anyResult;
      } else {
        try {
          const _JSON = JSON;
          const _JSON2 = JSON;
          const parsed = JSON.parse(JSON.stringify(flag));
          defaultTarget = undefined;
          if (defaultTarget != null) {
            defaultTarget = defaultTarget.defaultTarget;
          }
          let prop = parsed.$defs;
          if (!prop) {
            prop = parsed.definitions;
          }
          if (!prop) {
            prop = {};
          }
          obj = {
            version: (function detectVersion(parsed, defaultTarget) {
                  const $schema = parsed.$schema;
                  if ("https://json-schema.org/draft/2020-12/schema" === $schema) {
                    return "draft-2020-12";
                  } else if ("http://json-schema.org/draft-07/schema#" === $schema) {
                    return "draft-7";
                  } else if ("http://json-schema.org/draft-04/schema#" === $schema) {
                    return "draft-4";
                  } else {
                    let str3 = defaultTarget;
                    if (defaultTarget == null) {
                      str3 = "draft-2020-12";
                    }
                    return str3;
                  }
                })(parsed, defaultTarget),
            defs: prop,
            refs: null,
            processing: null,
            rootSchema: null,
            registry: null
          };
          const _Map = Map;
          const map = new Map();
          obj.refs = map;
          const _Set = Set;
          set = new Set();
          obj.processing = set;
          obj.rootSchema = parsed;
          let registry;
          if (defaultTarget != null) {
            registry = defaultTarget.registry;
          }
          if (registry == null) {
            registry = $output.globalRegistry;
          }
          obj.registry = registry;
          return convertSchema(parsed, obj);
        } catch (err) {
          const _Error = Error;
          const error = new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
          throw error;
        }
      }
    };
    const fnResult = fn(lt);
    let obj = {};
    let merged = Object.assign(fn(_mod12240));
    const merged1 = Object.assign(fnResult);
    obj.iso = fn(_mod12246);
    let _Set = Set;
    let set = new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
    const _Set2 = Set;
    const set1 = new Set(["items", "prefixItems", "additionalItems", "additionalProperties", "contains", "propertyNames", "not", "if", "then", "else", "allOf", "anyOf", "oneOf", "unevaluatedItems", "unevaluatedProperties", "contentSchema"]);
    const _Set3 = Set;
    const set2 = new Set(["properties", "patternProperties", "dependentSchemas", "dependencies", "$defs", "definitions"]);
    const re15 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/;
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
                  obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
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