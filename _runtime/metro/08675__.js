// === Module 8675: ? ===

// Module 8675
import $output from "$output" /* 8663 */;
import ZodType from "ZodType" /* 8669 */;
import lt2 from "lt" /* 8670 */;
import ZodISODateTime2 from "ZodISODateTime" /* 8671 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let hasOwnProperty, map;

let ZodISODateTime;
let self = this;
function convertBaseSchema(not, refs) {
  let items;
  let length;
  let prefixItems;
  function resolveRef($ref, rootSchema) {
    if ($ref.startsWith("#")) {
      const str2 = $ref.slice(1);
      const parts = str2.split("/");
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
            if (rootSchema.defs[found[1]]) {
              return rootSchema.defs[found[1]];
            }
          }
          const _Error3 = Error;
          const _HermesInternal2 = HermesInternal;
          const self5 = this;
          const self6 = this;
          const error = new Error("Reference not found: " + $ref);
          throw error;
        } else {
          const _Error2 = Error;
          const _HermesInternal = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error1 = new Error("Reference not found: " + $ref);
          throw error1;
        }
      }
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error2 = new Error("External $ref is not supported, only local refs (#/...) are allowed");
      throw error2;
    }
  }
  let closure_0 = not;
  if (undefined !== not.not) {
    if (typeof not.not === "object") {
      const _Object5 = Object;
      if (0 === Object.keys(not.not).length) {
        return obj.never();
      }
    }
    const _Error6 = Error;
    const self16 = this;
    const self17 = this;
    let error = new Error("not is not supported in Zod (except { not: {} } for never)");
    throw error;
  } else if (undefined !== not.unevaluatedItems) {
    const _Error5 = Error;
    const self14 = this;
    const self15 = this;
    let error1 = new Error("unevaluatedItems is not supported");
    throw error1;
  } else if (undefined !== not.unevaluatedProperties) {
    const _Error4 = Error;
    const self12 = this;
    const self13 = this;
    let error2 = new Error("unevaluatedProperties is not supported");
    throw error2;
  } else {
    if (undefined === not.if) {
      if (undefined === not.then) {
        if (undefined === not.else) {
          if (undefined === not.dependentSchemas) {
            if (undefined === not.dependentRequired) {
              let $ref;
              if (not.$ref) {
                $ref = not.$ref;
                refs = refs.refs;
                if (refs.has($ref)) {
                  const refs3 = refs.refs;
                  return refs3.get($ref);
                } else {
                  const processing = refs.processing;
                  if (processing.has($ref)) {
                    return obj.lazy(function() {
                      refs = refs.refs;
                      const tmp = refs;
                      if (refs.has($ref)) {
                        const refs2 = tmp.refs;
                        return refs2.get($ref);
                      } else {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        const self = this;
                        const self2 = this;
                        const error = new Error("Circular reference not resolved: " + $ref);
                        throw error;
                      }
                    });
                  } else {
                    const processing2 = refs.processing;
                    processing2.add($ref);
                    const tmp149 = convertSchema(resolveRef($ref, refs), refs);
                    let refs2 = refs.refs;
                    const result = refs2.set($ref, tmp149);
                    const processing3 = refs.processing;
                    processing3.delete($ref);
                    return tmp149;
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
                  let first;
                  const mapped = _enum.map((item) => obj.literal(item));
                  if (mapped.length < 2) {
                    first = mapped[0];
                  } else {
                    const items1 = [, ];
                    [arr8[0], arr8[1]] = mapped;
                    const union = obj.union;
                    HermesBuiltin.arraySpread(items1, mapped.slice(2), 2);
                    first = union(items1);
                  }
                  return first;
                }
              } else if (undefined !== not.const) {
                return obj.literal(not.const);
              } else {
                const type = not.type;
                const _Array3 = Array;
                if (Array.isArray(type)) {
                  let neverResult;
                  const mapped1 = type.map((type) => {
                    obj = { type };
                    const merged = Object.assign(not);
                    return convertBaseSchema(obj, refs);
                  });
                  if (0 === mapped1.length) {
                    neverResult = obj.never();
                  } else if (1 === mapped1.length) {
                    neverResult = mapped1[0];
                  } else {
                    neverResult = obj.union(mapped1);
                  }
                  return neverResult;
                } else if (type) {
                  let booleanResult;
                  if ("string" === type) {
                    const stringResult = obj.string();
                    let checkResult = stringResult;
                    if (not.format) {
                      const format = not.format;
                      let str4 = "email";
                      if ("email" === format) {
                        checkResult = stringResult.check(obj25.email());
                      } else {
                        if ("uri" !== format) {
                          if ("uri-reference" !== format) {
                            if ("uuid" !== format) {
                              if ("guid" !== format) {
                                if ("date-time" === format) {
                                  const iso4 = obj25.iso;
                                  checkResult = stringResult.check(iso4.datetime());
                                } else if ("date" === format) {
                                  const iso3 = obj25.iso;
                                  checkResult = stringResult.check(iso3.date());
                                } else if ("time" === format) {
                                  const iso2 = obj25.iso;
                                  checkResult = stringResult.check(iso2.time());
                                } else if ("duration" === format) {
                                  const iso = obj25.iso;
                                  checkResult = stringResult.check(iso.duration());
                                } else if ("ipv4" === format) {
                                  checkResult = stringResult.check(obj25.ipv4());
                                } else if ("ipv6" === format) {
                                  checkResult = stringResult.check(obj25.ipv6());
                                } else if ("mac" === format) {
                                  checkResult = stringResult.check(obj25.mac());
                                } else if ("cidr" === format) {
                                  checkResult = stringResult.check(obj25.cidrv4());
                                } else if ("cidr-v6" === format) {
                                  checkResult = stringResult.check(obj25.cidrv6());
                                } else if ("base64" === format) {
                                  checkResult = stringResult.check(obj25.base64());
                                } else if ("base64url" === format) {
                                  checkResult = stringResult.check(obj25.base64url());
                                } else if ("e164" === format) {
                                  checkResult = stringResult.check(obj25.e164());
                                } else if ("jwt" === format) {
                                  checkResult = stringResult.check(obj25.jwt());
                                } else if ("emoji" === format) {
                                  checkResult = stringResult.check(obj25.emoji());
                                } else if ("nanoid" === format) {
                                  checkResult = stringResult.check(obj25.nanoid());
                                } else if ("cuid" === format) {
                                  checkResult = stringResult.check(obj25.cuid());
                                } else if ("cuid2" === format) {
                                  checkResult = stringResult.check(obj25.cuid2());
                                } else if ("ulid" === format) {
                                  checkResult = stringResult.check(obj25.ulid());
                                } else if ("xid" === format) {
                                  checkResult = stringResult.check(obj25.xid());
                                } else {
                                  checkResult = stringResult;
                                  if ("ksuid" === format) {
                                    checkResult = stringResult.check(obj25.ksuid());
                                  }
                                }
                              }
                            }
                            checkResult = stringResult.check(obj25.uuid());
                          }
                        }
                        checkResult = stringResult.check(obj25.url());
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
                    let regex2Result = maxResult;
                    if (not.pattern) {
                      const _RegExp2 = RegExp;
                      let self6 = this;
                      const self7 = this;
                      const regex2 = maxResult.regex;
                      const regExp = new RegExp(not.pattern);
                      regex2Result = regex2(regExp);
                    }
                    booleanResult = regex2Result;
                  } else {
                    let intResult;
                    let gtResult;
                    let ltResult;
                    if ("number" !== type) {
                      if ("integer" !== type) {
                        if ("boolean" === type) {
                          booleanResult = obj.boolean();
                        } else if ("null" === type) {
                          booleanResult = obj.null();
                        } else if ("object" === type) {
                          obj = {};
                          let required = not.required;
                          const _Set = Set;
                          const tmp21 = not.properties || {};
                          if (!required) {
                            required = [];
                          }
                          let self3 = this;
                          let self4 = this;
                          const _Set1 = new _Set(required);
                          const _Object = Object;
                          const entries = Object.entries(tmp21);
                          const tmp26 = entries[Symbol.iterator]();
                          while (tmp26 !== undefined) {
                            let optionalResult;
                            let tmp31 = $ref(tmp28, 2);
                            let first1 = tmp31[0];
                            let obj14 = convertSchema(tmp31[1], refs);
                            if (_Set1.has(first1)) {
                              optionalResult = obj14;
                            } else {
                              optionalResult = obj14.optional();
                            }
                            obj[first1] = optionalResult;
                            continue;
                          }
                          if (not.propertyNames) {
                            const tmp76 = convertSchema(not.propertyNames, refs);
                            if (not.additionalProperties) {
                              let anyResult;
                              if (typeof not.additionalProperties === "object") {
                                anyResult = convertSchema(not.additionalProperties, refs);
                              }
                              const _Object4 = Object;
                              if (0 === Object.keys(obj).length) {
                                booleanResult = obj.record(tmp76, anyResult);
                              } else {
                                const objectResult = obj.object(obj);
                                const passthroughResult = objectResult.passthrough();
                                booleanResult = obj.intersection(passthroughResult, obj.looseRecord(tmp76, anyResult));
                              }
                            }
                            anyResult = obj.any();
                          } else if (not.patternProperties) {
                            const patternProperties = not.patternProperties;
                            const _Object2 = Object;
                            const keys = Object.keys(patternProperties);
                            const items2 = [];
                            for (const item10130 of keys) {
                              let tmp47 = convertSchema(patternProperties[item10130], refs);
                              let stringResult1 = obj.string();
                              let _RegExp = RegExp;
                              let self5 = this;
                              self4 = this;
                              let regex = stringResult1.regex;
                              let regExp1 = new RegExp(item10130);
                              let arr = items2.push(obj.looseRecord(regex(regExp1), tmp47));
                              continue;
                            }
                            const items3 = [];
                            const _Object3 = Object;
                            if (Object.keys(obj).length > 0) {
                              const push = items3.push;
                              const objectResult4 = obj.object(obj);
                              push(objectResult4.passthrough());
                            }
                            const push2 = items3.push;
                            const items4 = [];
                            HermesBuiltin.arraySpread(items4, items2, 0);
                            HermesBuiltin.apply(push2, items4, items3);
                            if (0 === items3.length) {
                              const objectResult5 = obj.object({});
                              booleanResult = objectResult5.passthrough();
                            } else if (1 === items3.length) {
                              booleanResult = items3[0];
                            } else {
                              const intersectionResult = obj.intersection(items3[0], items3[1]);
                              let num5 = 2;
                              let intersectionResult1 = intersectionResult;
                              let tmp69 = intersectionResult;
                              if (2 < items3.length) {
                                do {
                                  intersectionResult1 = obj.intersection(intersectionResult1, items3[num5]);
                                  num5 = num5 + 1;
                                  tmp69 = intersectionResult1;
                                  length = items3.length;
                                } while (num5 < length);
                              }
                              booleanResult = tmp69;
                            }
                          } else {
                            let strictResult;
                            const objectResult6 = obj.object(obj);
                            if (false === not.additionalProperties) {
                              strictResult = objectResult6.strict();
                            } else if (typeof not.additionalProperties === "object") {
                              strictResult = objectResult6.catchall(convertSchema(not.additionalProperties, refs));
                            } else {
                              strictResult = objectResult6.passthrough();
                            }
                            booleanResult = strictResult;
                          }
                        } else if ("array" === type) {
                          ({ prefixItems, items } = not);
                          if (prefixItems) {
                            const _Array = Array;
                            if (Array.isArray(prefixItems)) {
                              let restResult;
                              let tmp17;
                              const mapped2 = prefixItems.map((item) => convertSchema(item, refs));
                              if (items) {
                                if (typeof items === "object") {
                                  const _Array4 = Array;
                                  if (!Array.isArray(items)) {
                                    tmp17 = convertSchema(items, refs);
                                  }
                                }
                              }
                              const tupleResult = obj.tuple(mapped2);
                              if (tmp17) {
                                restResult = tupleResult.rest(tmp17);
                              } else {
                                restResult = tupleResult;
                              }
                              let checkResult1 = restResult;
                              if (typeof not.minItems === "number") {
                                checkResult1 = restResult.check(obj8.minLength(not.minItems));
                              }
                              booleanResult = checkResult1;
                              if (typeof not.maxItems === "number") {
                                booleanResult = checkResult1.check(obj8.maxLength(not.maxItems));
                              }
                            }
                          }
                          const _Array2 = Array;
                          if (Array.isArray(items)) {
                            let restResult1;
                            let tmp14;
                            const mapped3 = items.map((item) => convertSchema(item, refs));
                            if (not.additionalItems) {
                              if (typeof not.additionalItems === "object") {
                                tmp14 = convertSchema(not.additionalItems, refs);
                              }
                            }
                            const tupleResult1 = obj.tuple(mapped3);
                            if (tmp14) {
                              restResult1 = tupleResult1.rest(tmp14);
                            } else {
                              restResult1 = tupleResult1;
                            }
                            let checkResult2 = restResult1;
                            if (typeof not.minItems === "number") {
                              checkResult2 = restResult1.check(obj4.minLength(not.minItems));
                            }
                            booleanResult = checkResult2;
                            if (typeof not.maxItems === "number") {
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
                          let str2 = "Unsupported type: ";
                          let self = this;
                          let self2 = this;
                          const error3 = new Error("Unsupported type: " + type);
                          throw error3;
                        }
                      }
                    }
                    if ("integer" === type) {
                      const numberResult = obj.number();
                      intResult = numberResult.int();
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
                      gtResult = maxResult2.gt(not.exclusiveMinimum);
                    } else {
                      gtResult = maxResult2;
                      const tmp94 = true === not.exclusiveMinimum && typeof not.minimum === "number";
                      if (tmp94) {
                        gtResult = maxResult2.gt(not.minimum);
                      }
                    }
                    if (typeof not.exclusiveMaximum === "number") {
                      ltResult = gtResult.lt(not.exclusiveMaximum);
                    } else {
                      ltResult = gtResult;
                      const tmp95 = true === not.exclusiveMaximum && typeof not.maximum === "number";
                      if (tmp95) {
                        ltResult = gtResult.lt(not.maximum);
                      }
                    }
                    let multipleOfResult = ltResult;
                    if (typeof not.multipleOf === "number") {
                      multipleOfResult = ltResult.multipleOf(not.multipleOf);
                    }
                    booleanResult = multipleOfResult;
                  }
                  let describeResult = booleanResult;
                  if (not.description) {
                    describeResult = booleanResult.describe(not.description);
                  }
                  let defaultResult = describeResult;
                  if (undefined !== not.default) {
                    defaultResult = describeResult.default(not.default);
                  }
                  return defaultResult;
                } else {
                  return obj.any();
                }
              }
            }
          }
          let _Error2 = Error;
          const self8 = this;
          const self9 = this;
          const error4 = new Error("dependentSchemas and dependentRequired are not supported");
          throw error4;
        }
      }
    }
    let _Error3 = Error;
    const self10 = this;
    const self11 = this;
    const error5 = new Error("Conditional schemas (if/then/else) are not supported");
    throw error5;
  }
}
function convertSchema(items, version) {
  let length;
  let closure_0 = version;
  if (typeof items === "boolean") {
    let anyResult;
    if (items) {
      anyResult = obj.any();
    } else {
      anyResult = obj.never();
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
        const unionResult = obj.union(anyOf.map((item) => convertSchema(item, version)));
        let intersectionResult = unionResult;
        if (items.type || undefined !== items.enum || undefined !== items.const) {
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
        const xorResult = obj.xor(oneOf.map((item) => convertSchema(item, version)));
        let intersectionResult1 = xorResult;
        if (items.type || undefined !== items.enum || undefined !== items.const) {
          intersectionResult1 = obj.intersection(tmp2, xorResult);
        }
        anyResult1 = intersectionResult1;
      }
    }
    let tmp10 = anyResult1;
    if (items.allOf) {
      const _Array3 = Array;
      tmp10 = anyResult1;
      if (Array.isArray(items.allOf)) {
        if (0 === items.allOf.length) {
          if (!(items.type || undefined !== items.enum || undefined !== items.const)) {
            anyResult1 = obj.any();
          }
          tmp10 = anyResult1;
        } else {
          let tmp13 = anyResult1;
          if (!(items.type || undefined !== items.enum || undefined !== items.const)) {
            tmp13 = convertSchema(items.allOf[0], version);
          }
          let num2 = 1;
          if (items.type || undefined !== items.enum || undefined !== items.const) {
            num2 = 0;
          }
          let intersectionResult2 = tmp13;
          let tmp15 = tmp13;
          if (num2 < items.allOf.length) {
            do {
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
    let nullableResult = tmp10;
    const tmp19 = true === items.nullable && "openapi-3.0" === version.version;
    if (tmp19) {
      nullableResult = obj.nullable(tmp10);
    }
    let readonlyResult = nullableResult;
    if (true === items.readOnly) {
      readonlyResult = obj.readonly(nullableResult);
    }
    const obj3 = {};
    items = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
    for (const item10086 of items) {
      if (item10086 in items) {
        obj3[item10086] = items[item10086];
      }
      continue;
    }
    const items1 = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (const item10096 of items1) {
      if (item10096 in items) {
        obj3[item10096] = items[item10096];
      }
      continue;
    }
    const _Object = Object;
    const keys = Object.keys(items);
    for (const item10110 of keys) {
      if (!set.has(item10110)) {
        obj3[item10110] = items[item10110];
      }
      continue;
    }
    const _Object2 = Object;
    if (Object.keys(obj3).length > 0) {
      const registry = version.registry;
      registry.add(readonlyResult, obj3);
    }
    return readonlyResult;
  }
}
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_3 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_4 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_3(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_4(obj, __esModule);
  return obj;
});
let lt = tmp5(lt2);
let obj = { iso: ZodISODateTime };
ZodISODateTime = tmp5(ZodISODateTime2);
let merged = Object.assign(tmp5(ZodType));
lt = Object.assign(lt);
let set = new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);

export const fromJSONSchema = function fromJSONSchema($schema, defaultTarget) {
  let registry;
  let tmp;
  if (typeof $schema === "boolean") {
    let anyResult;
    if ($schema) {
      anyResult = obj2.any();
    } else {
      anyResult = obj2.never();
    }
    return anyResult;
  } else {
    let str;
    if (defaultTarget != null) {
      str = defaultTarget.defaultTarget;
    }
    $schema = $schema.$schema;
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
    obj = { version: str4, defs: tmp, refs: map, processing: set, rootSchema: $schema, registry };
    const _Map = Map;
    const self = this;
    const self2 = this;
    tmp = $schema.$defs || $schema.definitions || {};
    const _Set = Set;
    const self3 = this;
    const self4 = this;
    map = new Map();
    registry = undefined;
    set = new Set();
    if (defaultTarget != null) {
      registry = defaultTarget.registry;
    }
    if (registry == null) {
      registry = $output.globalRegistry;
    }
    return convertSchema($schema, obj);
  }
};