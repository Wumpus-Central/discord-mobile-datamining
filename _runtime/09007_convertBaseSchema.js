// === Module 9007: convertBaseSchema ===

// Module 9007 (convertBaseSchema)
import $output from "$output" /* 8995 */;
import _mod9001 from "module_9001" /* 9001 */;
import _mod9002 from "module_9002" /* 9002 */;
import _mod9003 from "module_9003" /* 9003 */;
import closure_2 from "_slicedToArray" /* 32 */;

const self = this;
function convertBaseSchema(not, refs) {
  let length;
  closure_0 = not;
  closure_1 = refs;
  if (undefined !== not.not) {
    if (typeof not.not === "object") {
      error = globalThis;
      const _Object5 = Object;
      if (0 === Object.keys(not.not).length) {
        error = obj;
        error = obj;
        return obj.never();
      }
    }
    error = globalThis;
    const _Error6 = Error;
    error = new.target;
    error = new.target;
    error = new Error("not is not supported in Zod (except { not: {} } for never)");
    throw error;
  } else if (undefined !== not.unevaluatedItems) {
    error = globalThis;
    const _Error5 = Error;
    error = new.target;
    error = new.target;
    error = new Error("unevaluatedItems is not supported");
    throw error;
  } else if (undefined !== not.unevaluatedProperties) {
    error = globalThis;
    const _Error4 = Error;
    error = new.target;
    error = new.target;
    error = new Error("unevaluatedProperties is not supported");
    throw error;
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
                    error = obj;
                    error = obj;
                    return obj.lazy(() => {
                      refs = refs.refs;
                      if (refs.has($ref)) {
                        const refs2 = tmp.refs;
                        return refs2.get(tmp2);
                      } else {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        error = new Error("Circular reference not resolved: " + tmp2);
                        throw error;
                      }
                      tmp = refs;
                    });
                  } else {
                    const processing2 = refs.processing;
                    error = processing2.add($ref);
                    error = convertSchema;
                    error = convertSchema;
                    error = convertSchema((function resolveRef($ref, rootSchema) {
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
                            if (found[1]) {
                              if (rootSchema.defs[tmp12]) {
                                return rootSchema.defs[tmp12];
                              }
                            }
                            const _Error3 = Error;
                            const _HermesInternal2 = HermesInternal;
                            error = new Error("Reference not found: " + $ref);
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
                    error = refs2.set($ref, error);
                    const processing3 = refs.processing;
                    error = processing3.delete($ref);
                    return error;
                  }
                }
              } else if (undefined !== not.enum) {
                const _enum = not.enum;
                if ("openapi-3.0" === refs.version) {
                  if (true === not.nullable) {
                    if (1 === _enum.length) {
                      error = null;
                      if (null === _enum[0]) {
                        error = obj;
                        error = obj;
                        return obj.null();
                      }
                    }
                  }
                }
                if (0 === _enum.length) {
                  error = obj;
                  error = obj;
                  return obj.never();
                } else if (1 === _enum.length) {
                  error = obj;
                  error = obj;
                  return obj.literal(_enum[0]);
                } else if (_enum.every((str) => typeof str === "string")) {
                  error = obj;
                  error = obj;
                  return obj.enum(_enum);
                } else {
                  const mapped = _enum.map((arg0) => closure_5.literal(arg0));
                  if (mapped.length < 2) {
                    error = mapped[0];
                  } else {
                    error = obj;
                    error = obj;
                    items = [, ];
                    [arr8[0], arr8[1]] = mapped;
                    error = items;
                    error = HermesBuiltin.arraySpread(mapped.slice(2), 2);
                    error = obj.union(items);
                  }
                  return error;
                }
              } else if (undefined !== not.const) {
                error = obj;
                error = obj;
                return obj.literal(not.const);
              } else {
                const type = not.type;
                error = globalThis;
                const _Array3 = Array;
                if (Array.isArray(type)) {
                  const mapped1 = type.map((type) => {
                    obj = {};
                    const merged = Object.assign(closure_0);
                    obj.type = type;
                    return closure_1_7(obj, closure_1);
                  });
                  if (0 === mapped1.length) {
                    error = obj;
                    error = obj;
                    error = obj.never();
                  } else if (1 === mapped1.length) {
                    error = mapped1[0];
                  } else {
                    error = obj;
                    error = obj;
                    error = obj.union(mapped1);
                  }
                  return error;
                } else if (type) {
                  if ("string" === type) {
                    error = obj;
                    const stringResult = obj.string();
                    let checkResult = stringResult;
                    if (not.format) {
                      const format = not.format;
                      if ("email" === format) {
                        checkResult = stringResult.check(obj26.email());
                      } else {
                        if ("uri" !== format) {
                          if ("uri-reference" !== format) {
                            if ("uuid" !== format) {
                              if ("guid" !== format) {
                                if ("date-time" === format) {
                                  const iso4 = obj26.iso;
                                  checkResult = stringResult.check(iso4.datetime());
                                } else if ("date" === format) {
                                  const iso3 = obj26.iso;
                                  checkResult = stringResult.check(iso3.date());
                                } else if ("time" === format) {
                                  const iso2 = obj26.iso;
                                  checkResult = stringResult.check(iso2.time());
                                } else if ("duration" === format) {
                                  const iso = obj26.iso;
                                  checkResult = stringResult.check(iso.duration());
                                } else if ("ipv4" === format) {
                                  checkResult = stringResult.check(obj26.ipv4());
                                } else if ("ipv6" === format) {
                                  checkResult = stringResult.check(obj26.ipv6());
                                } else if ("mac" === format) {
                                  checkResult = stringResult.check(obj26.mac());
                                } else if ("cidr" === format) {
                                  checkResult = stringResult.check(obj26.cidrv4());
                                } else if ("cidr-v6" === format) {
                                  checkResult = stringResult.check(obj26.cidrv6());
                                } else if ("base64" === format) {
                                  checkResult = stringResult.check(obj26.base64());
                                } else if ("base64url" === format) {
                                  checkResult = stringResult.check(obj26.base64url());
                                } else if ("e164" === format) {
                                  checkResult = stringResult.check(obj26.e164());
                                } else if ("jwt" === format) {
                                  checkResult = stringResult.check(obj26.jwt());
                                } else if ("emoji" === format) {
                                  checkResult = stringResult.check(obj26.emoji());
                                } else if ("nanoid" === format) {
                                  checkResult = stringResult.check(obj26.nanoid());
                                } else if ("cuid" === format) {
                                  checkResult = stringResult.check(obj26.cuid());
                                } else if ("cuid2" === format) {
                                  checkResult = stringResult.check(obj26.cuid2());
                                } else if ("ulid" === format) {
                                  checkResult = stringResult.check(obj26.ulid());
                                } else if ("xid" === format) {
                                  checkResult = stringResult.check(obj26.xid());
                                } else {
                                  checkResult = stringResult;
                                  if ("ksuid" === format) {
                                    checkResult = stringResult.check(obj26.ksuid());
                                  }
                                }
                              }
                            }
                            checkResult = stringResult.check(obj26.uuid());
                          }
                        }
                        checkResult = stringResult.check(obj26.url());
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
                    error = maxResult;
                    if (not.pattern) {
                      const _RegExp2 = RegExp;
                      error = new.target;
                      error = new.target;
                      error = new RegExp(not.pattern);
                      error = maxResult.regex(error);
                    }
                    let booleanResult = error;
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
                          const _Object = Object;
                          const entries = Object.entries(not.properties || {});
                          const tmp29 = entries[Symbol.iterator]();
                          while (tmp29 !== undefined) {
                            let tmp33 = $ref;
                            let tmp34 = $ref(tmp31, 2);
                            let first = tmp34[0];
                            let tmp36 = convertSchema;
                            let tmp37 = convertSchema;
                            let obj14 = convertSchema(tmp34[1], refs);
                            let tmp38 = obj14;
                            if (set.has(first)) {
                              let optionalResult = obj14;
                            } else {
                              optionalResult = obj14.optional();
                            }
                            obj[first] = optionalResult;
                            continue;
                          }
                          if (not.propertyNames) {
                            const tmp80 = convertSchema(not.propertyNames, refs);
                            if (not.additionalProperties) {
                              if (typeof not.additionalProperties === "object") {
                                let anyResult = tmp79(not.additionalProperties, refs);
                              }
                              const _Object4 = Object;
                              if (0 === Object.keys(obj).length) {
                                booleanResult = obj.record(tmp80, anyResult);
                              } else {
                                let objectResult = obj.object(obj);
                                booleanResult = obj.intersection(objectResult.passthrough(), obj.looseRecord(tmp80, anyResult));
                                const passthroughResult = objectResult.passthrough();
                              }
                            }
                            anyResult = obj.any();
                            const tmp78 = convertSchema;
                            tmp79 = convertSchema;
                          } else if (not.patternProperties) {
                            const patternProperties = not.patternProperties;
                            const _Object2 = Object;
                            const keys = Object.keys(patternProperties);
                            const items1 = [];
                            for (const item10130 of keys) {
                              let tmp48 = convertSchema;
                              let tmp49 = convertSchema;
                              let tmp51 = obj;
                              let tmp52 = obj;
                              let tmp50 = convertSchema(patternProperties[item10130], arg1);
                              let stringResult1 = obj.string();
                              let _RegExp = RegExp;
                              let tmp53 = new.target;
                              let tmp54 = new.target;
                              let tmp55 = item10130;
                              let regExp = new RegExp(item10130);
                              let tmp57 = regExp;
                              let arr = items1.push(obj.looseRecord(stringResult1.regex(regExp), tmp50));
                              continue;
                            }
                            const items2 = [];
                            const _Object3 = Object;
                            if (Object.keys(obj).length > 0) {
                              objectResult = obj.object(obj);
                              items2.push(objectResult.passthrough());
                            }
                            const push = items2.push;
                            const items3 = [];
                            HermesBuiltin.arraySpread(items1, 0);
                            HermesBuiltin.apply(items3, items2);
                            if (0 === items2.length) {
                              booleanResult = obj.object({}).passthrough();
                              const objectResult1 = obj.object({});
                            } else if (1 === items2.length) {
                              booleanResult = items2[0];
                            } else {
                              const intersectionResult = obj.intersection(items2[0], items2[1]);
                              let num5 = 2;
                              let intersectionResult1 = intersectionResult;
                              let tmp73 = intersectionResult;
                              if (2 < items2.length) {
                                do {
                                  let tmp74 = obj;
                                  let tmp75 = obj;
                                  intersectionResult1 = obj.intersection(intersectionResult1, items2[num5]);
                                  num5 = num5 + 1;
                                  tmp73 = intersectionResult1;
                                  length = items2.length;
                                } while (num5 < length);
                              }
                              booleanResult = tmp73;
                            }
                          } else {
                            const objectResult2 = obj.object(obj);
                            if (false === not.additionalProperties) {
                              let strictResult = objectResult2.strict();
                            } else if (typeof not.additionalProperties === "object") {
                              strictResult = objectResult2.catchall(convertSchema(not.additionalProperties, refs));
                            } else {
                              strictResult = objectResult2.passthrough();
                            }
                            booleanResult = strictResult;
                          }
                          const tmp22 = not.properties || {};
                        } else if ("array" === type) {
                          ({ prefixItems, items } = not);
                          if (prefixItems) {
                            const _Array = Array;
                            if (Array.isArray(prefixItems)) {
                              let tmp18;
                              const mapped2 = prefixItems.map((arg0) => closure_1_8(arg0, closure_1));
                              if (items) {
                                if (typeof items === "object") {
                                  const _Array4 = Array;
                                  if (!Array.isArray(items)) {
                                    tmp18 = convertSchema(items, refs);
                                  }
                                }
                              }
                              const tupleResult = obj.tuple(mapped2);
                              if (tmp18) {
                                let restResult = tupleResult.rest(tmp18);
                              } else {
                                restResult = tupleResult;
                              }
                              let checkResult1 = restResult;
                              if (typeof not.minItems === "number") {
                                error = tmp21;
                                checkResult1 = restResult.check(obj8.minLength(not.minItems));
                              }
                              booleanResult = checkResult1;
                              if (typeof not.maxItems === "number") {
                                error = tmp21;
                                booleanResult = checkResult1.check(obj8.maxLength(not.maxItems));
                              }
                            }
                          }
                          const _Array2 = Array;
                          if (Array.isArray(items)) {
                            let tmp15;
                            const mapped3 = items.map((arg0) => closure_1_8(arg0, closure_1));
                            if (not.additionalItems) {
                              if (typeof not.additionalItems === "object") {
                                error = convertSchema;
                                error = convertSchema;
                                tmp15 = convertSchema(not.additionalItems, refs);
                              }
                            }
                            const tupleResult1 = obj.tuple(mapped3);
                            if (tmp15) {
                              let restResult1 = tupleResult1.rest(tmp15);
                            } else {
                              restResult1 = tupleResult1;
                            }
                            let checkResult2 = restResult1;
                            if (typeof not.minItems === "number") {
                              error = tmp16;
                              checkResult2 = restResult1.check(obj4.minLength(not.minItems));
                            }
                            booleanResult = checkResult2;
                            if (typeof not.maxItems === "number") {
                              error = tmp16;
                              booleanResult = checkResult2.check(obj4.maxLength(not.maxItems));
                            }
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
                            booleanResult = maxResult1;
                          } else {
                            booleanResult = obj.array(obj.any());
                          }
                        } else {
                          let _Error = Error;
                          let _HermesInternal = HermesInternal;
                          let error1 = new Error("Unsupported type: " + type);
                          throw error1;
                        }
                      }
                    }
                    if ("integer" === type) {
                      let intResult = obj.number().int();
                      const numberResult = obj.number();
                    } else {
                      intResult = obj.number();
                    }
                    let minResult2 = intResult;
                    if (typeof not.minimum === "number") {
                      minResult2 = intResult.min(not.minimum);
                    }
                    let maxResult2 = minResult2;
                    if (typeof not.maximum === "number") {
                      maxResult2 = minResult2.max(not.maximum);
                    }
                    if (typeof not.exclusiveMinimum === "number") {
                      let gtResult = maxResult2.gt(not.exclusiveMinimum);
                    } else {
                      gtResult = maxResult2;
                      if (tmp98) {
                        gtResult = maxResult2.gt(not.minimum);
                      }
                      tmp98 = true === not.exclusiveMinimum && typeof not.minimum === "number";
                    }
                    if (typeof not.exclusiveMaximum === "number") {
                      let ltResult = gtResult.lt(not.exclusiveMaximum);
                    } else {
                      ltResult = gtResult;
                      if (tmp99) {
                        ltResult = gtResult.lt(not.maximum);
                      }
                      tmp99 = true === not.exclusiveMaximum && typeof not.maximum === "number";
                    }
                    error = ltResult;
                    if (typeof not.multipleOf === "number") {
                      error = ltResult.multipleOf(not.multipleOf);
                    }
                    booleanResult = error;
                  }
                  let describeResult = booleanResult;
                  if (not.description) {
                    describeResult = booleanResult.describe(not.description);
                  }
                  error = describeResult;
                  if (undefined !== not.default) {
                    error = describeResult.default(not.default);
                  }
                  return error;
                } else {
                  error = obj;
                  return obj.any();
                }
              }
            }
          }
          error = globalThis;
          let _Error2 = Error;
          error = new.target;
          error = new.target;
          error = new Error("dependentSchemas and dependentRequired are not supported");
          throw error;
        }
      }
    }
    error = globalThis;
    let _Error3 = Error;
    error = new.target;
    error = new.target;
    error = new Error("Conditional schemas (if/then/else) are not supported");
    throw error;
  }
}
function convertSchema(items, version) {
  let length;
  closure_0 = version;
  if (typeof items === "boolean") {
    if (items) {
      let anyResult = obj4.any();
    } else {
      anyResult = obj4.never();
    }
    return anyResult;
  } else {
    const tmp40 = convertBaseSchema(items, version);
    let tmp2 = tmp40;
    if (items.anyOf) {
      const _Array = Array;
      tmp2 = tmp40;
      if (Array.isArray(items.anyOf)) {
        const anyOf = items.anyOf;
        const unionResult = obj.union(anyOf.map((arg0) => closure_1_8(arg0, closure_0)));
        let intersectionResult = unionResult;
        if (tmp) {
          intersectionResult = obj.intersection(tmp40, unionResult);
        }
        tmp2 = intersectionResult;
      }
    }
    let anyResult1 = tmp2;
    if (items.oneOf) {
      const _Array2 = Array;
      anyResult1 = tmp2;
      if (Array.isArray(items.oneOf)) {
        const oneOf = items.oneOf;
        const xorResult = obj.xor(oneOf.map((arg0) => closure_1_8(arg0, closure_0)));
        let intersectionResult1 = xorResult;
        if (tmp) {
          intersectionResult1 = obj2.intersection(tmp2, xorResult);
        }
        anyResult1 = intersectionResult1;
        obj2 = obj;
      }
    }
    let tmp10 = anyResult1;
    if (items.allOf) {
      const _Array3 = Array;
      tmp10 = anyResult1;
      if (Array.isArray(items.allOf)) {
        if (0 === items.allOf.length) {
          if (!tmp) {
            anyResult1 = obj.any();
          }
          tmp10 = anyResult1;
        } else {
          let tmp13 = anyResult1;
          if (!tmp) {
            tmp13 = convertSchema(items.allOf[0], version);
          }
          let num2 = 1;
          if (tmp) {
            num2 = 0;
          }
          let intersectionResult2 = tmp13;
          let tmp15 = tmp13;
          if (num2 < items.allOf.length) {
            do {
              let tmp16 = obj;
              let tmp17 = convertSchema;
              intersectionResult2 = obj.intersection(intersectionResult2, convertSchema(items.allOf[num2], version));
              num2 = num2 + 1;
              tmp15 = intersectionResult2;
              length = items.allOf.length;
            } while (num2 < length);
          }
          tmp10 = tmp15;
        }
      }
    }
    let tmp19 = true === items.nullable;
    if (tmp19) {
      tmp19 = "openapi-3.0" === version.version;
    }
    let nullableResult = tmp10;
    if (tmp19) {
      nullableResult = obj.nullable(tmp10);
    }
    let readonlyResult = nullableResult;
    if (true === items.readOnly) {
      readonlyResult = obj.readonly(nullableResult);
    }
    obj = {};
    items = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
    for (const item10086 of items) {
      let tmp25 = item10086;
      if (item10086 in arg0) {
        let tmp26 = item10086;
        obj[tmp25] = arg0[tmp25];
      }
      continue;
    }
    const items1 = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (const item10096 of items1) {
      let tmp28 = item10096;
      if (item10096 in arg0) {
        let tmp29 = item10096;
        obj[tmp28] = arg0[tmp28];
      }
      continue;
    }
    const _Object = Object;
    const keys = Object.keys(items);
    for (const item10110 of keys) {
      let tmp34 = item10110;
      let tmp35 = set;
      if (!set.has(item10110)) {
        let tmp36 = item10110;
        obj[tmp34] = arg0[tmp34];
      }
      continue;
    }
    const _Object2 = Object;
    if (Object.keys(obj).length > 0) {
      const registry = version.registry;
      registry.add(readonlyResult, obj);
    }
    return readonlyResult;
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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
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
          let anyResult = obj2.any();
        } else {
          anyResult = obj2.never();
        }
        return anyResult;
      } else {
        if (defaultTarget != null) {
          let str = defaultTarget.defaultTarget;
        }
        const $schema = flag.$schema;
        let str4 = "draft-2020-12";
        if ("https://json-schema.org/draft/2020-12/schema" !== $schema) {
          str4 = "draft-7";
          if ("http://json-schema.org/draft-07/schema#" !== $schema) {
            str4 = "draft-4";
            if ("http://json-schema.org/draft-04/schema#" !== $schema) {
              if (str == null) {
                str = "draft-2020-12";
              }
              str4 = str;
            }
          }
        }
        obj = { version: null, defs: null, refs: null, processing: null, rootSchema: null, registry: null };
        obj[0] = str4;
        obj[1] = flag.$defs || flag.definitions || {};
        const _Map = Map;
        const map = new Map();
        obj[2] = map;
        const _Set = Set;
        set = new Set();
        obj[3] = set;
        obj[4] = flag;
        let registry;
        if (defaultTarget != null) {
          registry = defaultTarget.registry;
        }
        if (registry == null) {
          registry = $output.globalRegistry;
        }
        obj[5] = registry;
        return convertSchema(flag, obj);
      }
    };
    const fnResult = fn(_mod9002);
    let obj = {};
    let merged = Object.assign(fn(_mod9001));
    const merged1 = Object.assign(fnResult);
    obj.iso = fn(_mod9003);
    let _Set = Set;
    let set = new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}