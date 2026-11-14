// _runtime/12236_assignProps.js
import _mod12160 from "metro/12160__.js";
import $output from "12233__output.js";

require = arg1;
let exports = arg5;
const dependencyMap = arg6;
function assignProps(schema) {
  const substr = [...arguments].slice();
  const iter = substr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let _Reflect = Reflect;
    let ownKeysResult = Reflect.ownKeys(nextResult);
    for (const item10019 of ownKeysResult) {
      let _Object = Object;
      let call = propertyIsEnumerable.call;
      if (typeof call === "unknown") {
        let propertyIsEnumerableResult = propertyIsEnumerable(item10019);
      } else {
        propertyIsEnumerableResult = call(tmp3, item10019);
      }
      if (propertyIsEnumerableResult) {
        let assignPropResult = _mod12160.assignProp(arg0, item10019, tmp3[item10019]);
      }
      continue;
    }
    continue;
  }
  return schema;
}
function initializeContext(target) {
  let str;
  if (target != null) {
    str = target.target;
  }
  if (str == null) {
    str = "draft-2020-12";
  }
  if ("draft-4" === str) {
    str = "draft-04";
  }
  if ("draft-7" === str) {
    str = "draft-07";
  }
  let processors = target.processors;
  if (processors == null) {
    processors = {};
  }
  const obj = { processors, metadataRegistry: null, target: null, unrepresentable: null, override: null, io: null, counter: 0, seen: null, sharedDefsExtractedFor: "Boolean", sharedEmitDoneFor: "channel_id", cycles: "<string:802636759>", reused: "<string:802619393>", intersections: "<string:603652097>", deferred: "<string:2856517633>", external: "<string:3623879100>" };
  let metadata;
  if (target != null) {
    metadata = target.metadata;
  }
  if (metadata == null) {
    metadata = $output.globalRegistry;
  }
  obj.metadataRegistry = metadata;
  obj.target = str;
  let str2;
  if (target != null) {
    str2 = target.unrepresentable;
  }
  if (str2 == null) {
    str2 = "throw";
  }
  obj.unrepresentable = str2;
  let fn;
  if (target != null) {
    fn = target.override;
  }
  if (fn == null) {
    fn = () => {

    };
  }
  obj.override = fn;
  let str3;
  if (target != null) {
    str3 = target.io;
  }
  if (str3 == null) {
    str3 = "output";
  }
  obj.io = str3;
  obj.seen = new Map();
  let str4;
  if (target != null) {
    str4 = target.cycles;
  }
  if (str4 == null) {
    str4 = "ref";
  }
  obj.cycles = str4;
  let str5;
  if (target != null) {
    str5 = target.reused;
  }
  if (str5 == null) {
    str5 = "inline";
  }
  obj.reused = str5;
  obj.intersections = [];
  obj.deferred = [];
  let external;
  if (target != null) {
    external = target.external;
  }
  obj.external = external;
  return obj;
}
function processSchema(innerType, initializeContextResult) {
  let tmp4 = path;
  if (path === undefined) {
    const obj = { path: [], schemaPath: [] };
    tmp4 = obj;
  }
  const def = innerType._zod.def;
  const seen = initializeContextResult.seen;
  value = seen.get(innerType);
  if (value) {
    value.count = value.count + 1;
    const schemaPath = tmp4.schemaPath;
    if (schemaPath.includes(innerType)) {
      value.cycle = tmp4.path;
    }
    return value.schema;
  } else {
    const obj2 = { schema: {}, count: 1, cycle: "Array", path: tmp4.path };
    const seen2 = initializeContextResult.seen;
    const result = seen2.set(innerType, obj2);
    initializeContextResult.sharedDefsExtractedFor = undefined;
    initializeContextResult.sharedEmitDoneFor = undefined;
    const _zod = innerType._zod;
    const toJSONSchema = _zod.toJSONSchema;
    let toJSONSchemaResult;
    if (toJSONSchema != null) {
      toJSONSchemaResult = toJSONSchema();
    }
    if (toJSONSchemaResult) {
      obj2.schema = toJSONSchemaResult;
    } else {
      const obj3 = {};
      const merged = Object.assign(tmp4);
      items = [];
      items[HermesBuiltin.arraySpread(tmp4.schemaPath, 0)] = innerType;
      obj3.schemaPath = items;
      obj3.path = tmp4.path;
      if (innerType._zod.processJSONSchema) {
        const _zod2 = innerType._zod;
        _zod2.processJSONSchema(initializeContextResult, obj2.schema, obj3);
      } else {
        const schema = obj2.schema;
        if (initializeContextResult.processors[def.type]) {
          tmp13(innerType, initializeContextResult, schema, obj3);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[toJSONSchema]: Non-representable type encountered: " + def.type);
          throw error;
        }
      }
      const parent = innerType._zod.parent;
      if (parent) {
        if (!obj2.ref) {
          obj2.ref = parent;
        }
        processSchema(parent, initializeContextResult, obj3);
        const seen3 = initializeContextResult.seen;
        seen3.get(parent).isParent = true;
      }
    }
    const metadataRegistry = initializeContextResult.metadataRegistry;
    const value2 = metadataRegistry.get(innerType);
    if (value2) {
      assignProps(obj2.schema, value2);
    }
    let tmp30 = "input" === initializeContextResult.io;
    if (tmp30) {
      tmp30 = isTransforming(innerType);
    }
    if (tmp30) {
      const schema2 = obj2.schema;
      delete tmp3[tmp2];
      const schema3 = obj2.schema;
      delete tmp3[tmp2];
    }
    let tmp32 = "input" === initializeContextResult.io;
    if (tmp32) {
      tmp32 = "_prefault" in obj2.schema;
    }
    if (tmp32) {
      const schema4 = obj2.schema;
      if (schema4.default == null) {
        schema4.default = obj2.schema._prefault;
      }
    }
    const schema5 = obj2.schema;
    delete tmp2[tmp];
    const seen4 = initializeContextResult.seen;
    return seen4.get(innerType).schema;
  }
}
function extractDefs(initializeContextResult, _idmap) {
  const seen = initializeContextResult.seen;
  value = seen.get(_idmap);
  exports = value;
  if (value) {
    if (!initializeContextResult.external) {
      const _Map = Map;
      const map = new Map();
      const seen2 = initializeContextResult.seen;
      const entries = seen2.entries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp17 = nextResult;
        let metadataRegistry = initializeContextResult.metadataRegistry;
        let value5 = metadataRegistry.get(nextResult[0]);
        let id1;
        if (value5 != null) {
          id1 = value5.id;
        }
        let tmp20 = id1;
        if (id1) {
          let value6 = map.get(tmp20);
          if (value6) {
            if (tmp23 !== tmp17[0]) {
              let _Error2 = Error;
              let _HermesInternal = HermesInternal;
              let str2 = "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.";
              let str3 = "Duplicate schema id \"";
              let tmp30 = new.target;
              let tmp31 = new.target;
              let error = new Error("Duplicate schema id \"" + tmp20 + "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.");
              throw error;
            }
          }
          let result = map.set(tmp20, tmp17[0]);
        }
        continue;
      }
      function extractToDef(arg0) {
        if (!arg0[1].schema.$ref) {
          let str = "definitions";
          if ("draft-2020-12" === initializeContextResult.target) {
            str = "$defs";
          }
          if (initializeContextResult.external) {
            const registry = initializeContextResult.external.registry;
            value = registry.get(arg0[0]);
            let id;
            if (value != null) {
              id = value.id;
            }
            let fn = initializeContextResult.external.uri;
            if (fn == null) {
              fn = (__shared) => __shared;
            }
            if (id) {
              const obj2 = { ref: fn(id) };
              let obj = obj2;
            } else {
              let str10 = arg0[1].defId;
              if (str10 == null) {
                str10 = arg0[1].schema.id;
              }
              if (str10 == null) {
                initializeContextResult.counter = +initializeContextResult.counter + 1;
                str10 = `schema${tmp13}`;
              }
              arg0[1].defId = str10;
              const obj3 = { defId: str10, ref: null };
              const fnResult = fn("__shared");
              const _HermesInternal2 = HermesInternal;
              obj3.ref = "" + fnResult + "#/" + str + "/" + str10.replace(/~/g, "~0").replace(/\//g, "~1");
              obj = obj3;
              const str14 = str10.replace(/~/g, "~0");
            }
          } else {
            const _HermesInternal = HermesInternal;
            const combined = "#/" + str + "/";
            if (arg0[1] === value) {
              if (!arg0[1].schema.id) {
                obj = { ref: "#" };
              }
            }
            let str5 = arg0[1].schema.id;
            if (str5 == null) {
              initializeContextResult.counter = +initializeContextResult.counter + 1;
              str5 = `__schema${tmp9}`;
            }
            const obj4 = { defId: str5, ref: combined + str5.replace(/~/g, "~0").replace(/\//g, "~1") };
            obj = obj4;
            const str8 = str5.replace(/~/g, "~0");
          }
          const defId = obj.defId;
          const obj5 = {};
          const merged = Object.assign(tmp3.schema);
          arg0[1].def = obj5;
          if (defId) {
            tmp3.defId = defId;
          }
          const schema = tmp3.schema;
          for (const key10091 in schema) {
            delete tmp[tmp2];
            continue;
          }
          schema.$ref = obj.ref;
        }
      }
      if ("throw" === initializeContextResult.cycles) {
        const seen4 = initializeContextResult.seen;
        const entries1 = seen4.entries();
        for (const item10074 of entries1) {
          let tmp35 = item10074[1];
          if (tmp35.cycle) {
            let cycle = tmp35.cycle;
            let joined;
            if (cycle != null) {
              let str5 = "/";
              joined = cycle.join("/");
            }
            let _HermesInternal2 = HermesInternal;
            let str6 = "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.";
            let str7 = "Cycle detected: #/";
            let tmp38 = new.target;
            let tmp39 = new.target;
            let error1 = new Error("Cycle detected: #/" + joined + "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.");
            throw error1;
          }
        }
      }
      const seen3 = initializeContextResult.seen;
      const entries2 = seen3.entries();
      const iter2 = entries2[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp47 = nextResult1;
        let tmp48 = nextResult1[1];
        if (_idmap !== nextResult1[0]) {
          if (initializeContextResult.external) {
            let registry = initializeContextResult.external.registry;
            let value7 = registry.get(tmp47[0]);
            if (value7 != null) {
              let id = value7.id;
            }
            if (_idmap !== tmp47[0]) {
              if (tmp53) {
                let extractToDefResult = extractToDef(tmp47);
                continue;
              }
            }
          }
          let metadataRegistry2 = initializeContextResult.metadataRegistry;
          let value8 = metadataRegistry2.get(tmp47[0]);
          let id2;
          if (value8 != null) {
            id2 = value8.id;
          }
          if (!id2) {
            id2 = tmp48.cycle;
          }
          if (!id2) {
            let tmp61 = tmp48.count > 1 && "ref" === initializeContextResult.reused;
            id2 = tmp61;
          }
          if (id2) {
            let extractToDefResult1 = extractToDef(tmp47);
          }
        } else {
          let extractToDefResult2 = extractToDef(tmp47);
        }
        continue;
      }
      if (initializeContextResult.external) {
        initializeContextResult.sharedDefsExtractedFor = initializeContextResult.external;
      }
    }
  } else {
    const _Error = Error;
    const error2 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error2;
  }
}
function compactTypeUnion(anyOf) {
  anyOf = anyOf.anyOf;
  if (Array.isArray(anyOf)) {
    if (0 !== anyOf.length) {
      if (undefined === anyOf.type) {
        items = [];
        const iter = anyOf[Symbol.iterator]();
        while (true) {
          let nextResult = iter.next();
          if (iter === undefined) {
            let str = "anyOf";
            delete tmp2[tmp];
            let first = items;
            if (1 === items.length) {
              first = items[0];
            }
            anyOf.type = first;
          } else {
            let tmp6 = nextResult;
            if (nextResult) {
              if (typeof tmp6 === "object") {
                let tmp16 = compactTypeUnion(tmp6);
                let _Object = Object;
                let keys = Object.keys(tmp6);
                if (1 === keys.length) {
                  if ("type" === tmp17[0]) {
                    let type = tmp6.type;
                    let _Array = Array;
                    let tmp8 = type;
                    if (Array.isArray(type)) {
                      let items1 = tmp8;
                    } else {
                      items1 = [tmp8];
                    }
                    tmp8 = items1;
                    let tmp9 = items1[Symbol.iterator]();
                  }
                }
                iter.return();
              }
            }
            iter.return();
          }
        }
      }
    }
  }
}
function foldObjects(allOf) {
  items = [];
  const iter = allOf[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult === "object") {
      if ("object" === tmp2.type) {
        for (const key10016 in tmp2) {
          if (set.has(key10016)) {
            continue;
          } else {
            iter.return();
            return null;
          }
        }
        let arr = items.push(tmp2);
        continue;
      }
    }
    iter.return();
    return null;
  }
  const obj = {};
  set = new Set();
  const iter2 = items[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp11 = nextResult1;
    for (const key10043 in nextResult1.properties) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10043);
      } else {
        hasOwnPropertyResult = call(obj, key10043);
      }
      if (hasOwnPropertyResult) {
        continue;
      } else {
        let items1 = [];
        let arr3 = items1;
        function _loop() {
          const properties = item10051.properties;
          let tmp2;
          if (properties != null) {
            tmp2 = properties[key10043];
          }
          if (tmp2 == null) {
            let additionalProperties = item10051.additionalProperties;
            let tmp4 = null;
            if (undefined !== additionalProperties) {
              tmp4 = null;
              if (false !== additionalProperties) {
                tmp4 = null;
                if (typeof additionalProperties === "object") {
                  tmp4 = null;
                  if (null !== additionalProperties) {
                    const _Object = Object;
                    let tmp6 = null;
                    if (Object.keys(additionalProperties).length) {
                      tmp6 = additionalProperties;
                    }
                    tmp4 = tmp6;
                  }
                }
              }
            }
            tmp2 = tmp4;
          }
          additionalProperties = tmp2;
          if (null == tmp2) {
            return 1;
          } else if (!items1.some((item) => {
            const json = JSON.stringify(item);
            return json === JSON.stringify(additionalProperties);
          })) {
            items1.push(tmp2);
          }
        }
        for (const item10051 of items) {
          let _loopResult = _loop();
          continue;
        }
        if (1 === arr3.length) {
          let first = arr3[0];
        } else {
          first = foldObjects(arr3);
          if (first == null) {
            let obj2 = { allOf: null };
            obj2.allOf = arr3;
            first = obj2;
          }
        }
        let assignPropResult = _mod12160.assignProp(obj, key10043, first);
        continue;
      }
      continue;
    }
    let required = tmp11.required;
    if (required == null) {
      required = [];
    }
    for (const item10076 of required) {
      let addResult = set.add(item10076);
      continue;
    }
    continue;
  }
  const obj3 = { type: "object", properties: obj };
  if (set.size) {
    const items2 = [];
    HermesBuiltin.arraySpread(set, 0);
    obj3.required = items2;
  }
  if (items.every((additionalProperties) => false === additionalProperties.additionalProperties)) {
    obj3.additionalProperties = false;
  } else {
    const items3 = [];
    for (const item10097 of items) {
      let tmp35Result = tmp35();
      continue;
    }
    if (1 === items3.length) {
      obj3.additionalProperties = items3[0];
    } else if (items3.length > 1) {
      const obj4 = { allOf: items3 };
      obj3.additionalProperties = obj4;
    }
  }
  return obj3;
}
function foldIntersection(item10125) {
  const allOf = item10125.allOf;
  if (Array.isArray(allOf)) {
    if (allOf.length >= 2) {
      for (const item10009 of set) {
        if (item10009 in arg0) {
          obj3.return();
        }
      }
      const found = allOf.filter((item) => closure_1_9.some((item) => Array.isArray(item[item])));
      if (found.length) {
        const first = found[0];
        const found1 = closure_9.find((item) => Array.isArray(first[item]));
        const _Object = Object;
        if (1 === Object.keys(first).length) {
          closure_1 = allOf.filter((item) => item !== first);
          const mapped = first[found1].map((item) => {
            items = [];
            items[HermesBuiltin.arraySpread(closure_1, 0)] = item;
            return foldObjects(items);
          });
          if (!mapped.some((item) => !item)) {
            const obj = {};
            obj[found1] = mapped;
            let tmp6 = obj;
          }
        }
      } else {
        tmp6 = foldObjects(allOf);
      }
      if (tmp6) {
        delete tmp[tmp2];
        assignProps(item10125, tmp6);
      }
    }
  }
}
function finalize(seen, _standard) {
  let standardJSONSchemaMethod = seen;
  _require = seen;
  seen = seen.seen;
  value = seen.get(_standard);
  if (value) {
    function flattenRef(item10035) {
      seen = seen.seen;
      value = seen.get(item10035);
      if (null !== value.ref) {
        let schema = value.def;
        if (schema == null) {
          schema = value.schema;
        }
        const obj = {};
        const merged = Object.assign(schema);
        value.ref = null;
        if (value.ref) {
          flattenRef(ref);
          const seen2 = tmp5.seen;
          const value3 = seen2.get(ref);
          const schema2 = value3.schema;
          if (!schema2.$ref) {
            assignProps(schema, schema2);
          } else {
            let allOf = schema.allOf;
            if (allOf == null) {
              allOf = [];
            }
            schema.allOf = allOf;
            const allOf1 = schema.allOf;
            allOf1.push(schema2);
          }
          assignProps(schema, obj);
          if (item10035._zod.parent === ref) {
            for (const key10044 in tmp10) {
              let tmp20 = "$ref" !== key10044;
              if (tmp20) {
                tmp20 = "allOf" !== key10044;
              }
              if (!tmp20) {
                continue;
              } else {
                if (key10044 in obj) {
                  continue;
                } else {
                  delete tmp[tmp4];
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          if (schema2.$ref) {
            if (value3.def) {
              for (const key10054 in tmp10) {
                let tmp23 = "$ref" !== key10054;
                if (tmp23) {
                  tmp23 = "allOf" !== key10054;
                }
                if (tmp23) {
                  tmp23 = key10054 in value3.def;
                }
                if (tmp23) {
                  let _JSON = JSON;
                  let _JSON2 = JSON;
                  let json = JSON.stringify(schema[key10054]);
                  tmp23 = json === JSON.stringify(value3.def[key10054]);
                }
                if (!tmp23) {
                  continue;
                } else {
                  delete tmp[tmp3];
                  continue;
                }
                continue;
              }
            }
          }
        }
        const parent = item10035._zod.parent;
        if (parent) {
          if (parent !== ref) {
            flattenRef(parent);
            const seen3 = seen.seen;
            const value4 = seen3.get(parent);
            let prop;
            if (value4 != null) {
              prop = value4.schema.$ref;
            }
            if (prop) {
              schema.$ref = value4.schema.$ref;
              if (value4.def) {
                for (const key10078 in tmp10) {
                  let tmp28 = "$ref" !== key10078;
                  if (tmp28) {
                    tmp28 = "allOf" !== key10078;
                  }
                  if (tmp28) {
                    tmp28 = key10078 in value4.def;
                  }
                  if (tmp28) {
                    let _JSON3 = JSON;
                    let _JSON4 = JSON;
                    let json1 = JSON.stringify(schema[key10078]);
                    tmp28 = json1 === JSON.stringify(value4.def[key10078]);
                  }
                  if (!tmp28) {
                    continue;
                  } else {
                    delete tmp[tmp2];
                    continue;
                  }
                  continue;
                }
              }
            }
          }
        }
        const obj2 = { zodSchema: item10035, jsonSchema: schema, path: null };
        let path = value.path;
        if (path == null) {
          path = [];
        }
        obj2.path = path;
        seen.override(obj2);
      }
    }
    if (!standardJSONSchemaMethod.external) {
      let seen2 = standardJSONSchemaMethod.seen;
      items = [];
      HermesBuiltin.arraySpread(seen2.entries(), 0);
      const reversed = items.reverse();
      for (const item10035 of reversed) {
        let flattenRefResult = flattenRef(item10035[0]);
        continue;
      }
      if ("openapi-3.0" !== standardJSONSchemaMethod.target) {
        let seen3 = standardJSONSchemaMethod.seen;
        const entries = seen3.entries();
        const iter = entries[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let schema = nextResult[1].def;
          if (schema == null) {
            schema = tmp24[1].schema;
          }
          let tmp25Result = compactTypeUnion(schema);
          continue;
        }
      }
      const deferred = standardJSONSchemaMethod.deferred;
      for (const item10063 of deferred) {
        let item10063Result = item10063();
        continue;
      }
      if (standardJSONSchemaMethod.intersections.length) {
        const _Map = Map;
        const map = new Map();
        const seen4 = standardJSONSchemaMethod.seen;
        const values = seen4.values();
        const iter2 = values[Symbol.iterator]();
        while (iter2 !== undefined) {
          let items1 = [, ];
          ({ schema: arr2[0], def: arr2[1] } = nextResult1);
          for (const item10090 of items1) {
            let allOf;
            if (item10090 != null) {
              allOf = item10090.allOf;
            }
            let tmp45 = allOf;
            let _Array = Array;
            if (Array.isArray(allOf)) {
              let value5 = map.get(tmp45);
              let arr3 = value5;
              if (value5) {
                let arr = arr3.push(item10090);
              } else {
                let items2 = [item10090];
                let result = map.set(tmp45, items2);
              }
            }
            continue;
          }
          continue;
        }
        const intersections = standardJSONSchemaMethod.intersections;
        for (const item10118 of intersections) {
          let value6 = map.get(item10118);
          if (value6 == null) {
            value6 = [];
          }
          for (const item10125 of value6) {
            let tmp59 = foldIntersection(item10125);
            continue;
          }
          continue;
        }
        nextResult1 = iter2.next();
      }
    }
    let obj = {};
    if ("draft-2020-12" === standardJSONSchemaMethod.target) {
      obj.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if ("draft-07" === standardJSONSchemaMethod.target) {
      obj.$schema = "http://json-schema.org/draft-07/schema#";
    } else if ("draft-04" === standardJSONSchemaMethod.target) {
      obj.$schema = "http://json-schema.org/draft-04/schema#";
    } else {
      const target = standardJSONSchemaMethod.target;
    }
    const external = standardJSONSchemaMethod.external;
    let uri;
    if (external != null) {
      uri = external.uri;
    }
    if (uri) {
      const registry = standardJSONSchemaMethod.external.registry;
      const value7 = registry.get(_standard);
      let id;
      if (value7 != null) {
        id = value7.id;
      }
      if (id) {
        const external2 = standardJSONSchemaMethod.external;
        obj.$id = external2.uri(id);
      } else {
        const _Error2 = Error;
        const error = new Error("Schema is missing an `id` property");
        throw error;
      }
    }
    if (value.defId) {
      let schema2 = value.schema;
    } else {
      schema2 = value.def;
      if (schema2 == null) {
        schema2 = value.schema;
      }
    }
    assignProps(obj, schema2);
    const metadataRegistry = standardJSONSchemaMethod.metadataRegistry;
    const value8 = metadataRegistry.get(_standard);
    let id1;
    if (value8 != null) {
      id1 = value8.id;
    }
    if (tmp73) {
      delete tmp3[tmp];
    }
    const external3 = standardJSONSchemaMethod.external;
    let defs;
    if (external3 != null) {
      defs = external3.defs;
    }
    if (defs == null) {
      defs = {};
    }
    if (!standardJSONSchemaMethod.external) {
      const seen5 = standardJSONSchemaMethod.seen;
      const entries1 = seen5.entries();
      const iter3 = entries1[Symbol.iterator]();
      while (iter3 !== undefined) {
        let tmp78 = iter3.next()[1];
        let tmp79 = tmp78;
        let defId = tmp78.def;
        if (defId) {
          defId = tmp79.defId;
        }
        if (defId) {
          if (tmp79.def.id === tmp79.defId) {
            let def = tmp79.def;
            delete tmp4[tmp2];
          }
          let assignPropResult = require("metro/12160__.js").assignProp(defs, tmp79.defId, tmp79.def);
        }
        continue;
      }
    }
    if (standardJSONSchemaMethod.external) {
      standardJSONSchemaMethod.sharedEmitDoneFor = standardJSONSchemaMethod.external;
    }
    if (!standardJSONSchemaMethod.external) {
      const _Object = Object;
      if (Object.keys(defs).length > 0) {
        if ("draft-2020-12" !== standardJSONSchemaMethod.target) {
          obj.definitions = defs;
        }
      }
      obj.$defs = defs;
    }
    try {
      let _JSON = JSON;
      let _JSON2 = JSON;
      defs = JSON.parse(JSON.stringify(obj));
      const _Object2 = Object;
      let obj2 = { value: null, enumerable: false, writable: false };
      const obj3 = {};
      let merged = Object.assign(_standard["~standard"]);
      obj = { input: flattenRef.createStandardJSONSchemaMethod(_standard, "input", standardJSONSchemaMethod.processors), output: null };
      standardJSONSchemaMethod = flattenRef.createStandardJSONSchemaMethod(_standard, "output", standardJSONSchemaMethod.processors);
      obj.output = standardJSONSchemaMethod;
      obj3.jsonSchema = obj;
      obj2.value = obj3;
      Object.defineProperty(defs, "~standard", obj2);
    } catch (err) {
      const _Error3 = Error;
      const error1 = new Error("Error converting schema to JSON.");
      throw error1;
    }
    tmp73 = undefined !== id1 && obj.id === id1;
  } else {
    const _Error = Error;
    const error2 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error2;
  }
}
function isTransforming(def, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    const obj = { seen: null };
    const _Set = Set;
    set = new Set();
    obj.seen = set;
    tmp = obj;
  }
  const seen = tmp.seen;
  if (seen.has(def)) {
    return false;
  } else {
    const seen2 = tmp.seen;
    seen2.add(def);
    def = def._zod.def;
    if ("transform" === def.type) {
      return true;
    } else if ("array" === def.type) {
      return isTransforming(def.element, tmp);
    } else if ("set" === def.type) {
      return isTransforming(def.valueType, tmp);
    } else if ("lazy" === def.type) {
      return isTransforming(def.getter(), tmp);
    } else {
      if ("promise" !== def.type) {
        if ("optional" !== def.type) {
          if ("nonoptional" !== def.type) {
            if ("nullable" !== def.type) {
              if ("readonly" !== def.type) {
                if ("default" !== def.type) {
                  if ("prefault" !== def.type) {
                    if ("catch" !== def.type) {
                      if ("intersection" === def.type) {
                        let tmp31Result = isTransforming(def.left, tmp);
                        if (!tmp31Result) {
                          tmp31Result = isTransforming(def.right, tmp);
                        }
                        return tmp31Result;
                      } else {
                        if ("record" !== def.type) {
                          if ("map" !== def.type) {
                            if ("pipe" === def.type) {
                              const traits = def._zod.traits;
                              let hasItem = traits.has("$ZodCodec");
                              if (!hasItem) {
                                let tmp23Result = isTransforming(def.in, tmp);
                                if (!tmp23Result) {
                                  tmp23Result = isTransforming(def.out, tmp);
                                }
                                hasItem = tmp23Result;
                              }
                              return hasItem;
                            } else if ("object" === def.type) {
                              for (const key10060 in def.shape) {
                                if (!isTransforming(def.shape[key10060], tmp)) {
                                  continue;
                                } else {
                                  let flag5 = true;
                                  return true;
                                }
                              }
                              return false;
                            } else if ("union" === def.type) {
                              const options = def.options;
                              for (const item10048 of options) {
                                if (isTransforming(item10048, tmp)) {
                                  obj3.return();
                                  let flag3 = true;
                                  return true;
                                }
                              }
                              return false;
                            } else if ("tuple" === def.type) {
                              items = def.items;
                              for (const item10028 of items) {
                                if (isTransforming(item10028, tmp)) {
                                  obj2.return();
                                  let flag2 = true;
                                  return true;
                                }
                              }
                              const rest = def.rest;
                              let tmp13 = !rest;
                              if (rest) {
                                tmp13 = !isTransforming(def.rest, tmp);
                              }
                              return !tmp13;
                            } else {
                              return false;
                            }
                          }
                        }
                        let tmp27Result = isTransforming(def.keyType, tmp);
                        if (!tmp27Result) {
                          tmp27Result = isTransforming(def.valueType, tmp);
                        }
                        return tmp27Result;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return isTransforming(def.innerType, tmp);
    }
  }
}
let set = new Set(["type", "properties", "required", "additionalProperties"]);
let closure_9 = ["oneOf", "anyOf"];
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

export { initializeContext };
export function handleUnrepresentable(zodSchema, unrepresentable, properties, path, message) {
  if (typeof unrepresentable.unrepresentable === "function") {
    const obj = { zodSchema, path: path.path, message };
    unrepresentable = unrepresentable.unrepresentable(obj);
  } else {
    unrepresentable = unrepresentable.unrepresentable;
  }
  if ("any" === unrepresentable) {
    return false;
  } else {
    if (undefined !== unrepresentable) {
      if ("throw" !== unrepresentable) {
        const _Object = Object;
        const merged = Object.assign(properties, unrepresentable);
        return true;
      }
    }
    const _Error = Error;
    const error = new Error(message);
    throw error;
  }
}
export { processSchema };
export const process = processSchema;
export { extractDefs };
export { finalize };
export (arg0) => {
  closure_0 = arg0;
  if (processors === undefined) {
    processors = {};
  }
  return (arg0) => {
    processors = {};
    const merged = Object.assign(arg0);
    processors.processors = processors;
    const tmp2 = initializeContext(processors);
    processSchema(closure_0, tmp2);
    extractDefs(tmp2, closure_0);
    return finalize(tmp2, closure_0);
  };
}
export (_standard, input) => {
  closure_0 = _standard;
  const io = input;
  if (processors === undefined) {
    processors = {};
  }
  return (arg0) => {
    processors = arg0;
    if (arg0 == null) {
      processors = {};
    }
    let libraryOptions = processors.libraryOptions;
    if (libraryOptions == null) {
      libraryOptions = {};
    }
    const obj2 = {};
    const merged = Object.assign(libraryOptions);
    obj2.target = processors.target;
    obj2.io = io;
    obj2.processors = processors;
    const tmpResult = initializeContext(obj2);
    processSchema(closure_0, tmpResult);
    extractDefs(tmpResult, closure_0);
    return finalize(tmpResult, closure_0);
  };
}