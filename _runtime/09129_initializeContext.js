// === Module 9129: initializeContext ===

// Module 9129 (initializeContext)
import $output from "$output" /* 9127 */;

require = arg1;
let exports = arg5;
const dependencyMap = arg6;
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
  const obj = { processors, metadataRegistry: null, target: null, unrepresentable: null, override: null, io: null, counter: 0, seen: null, cycles: null, reused: null, external: null };
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
  let external;
  if (target != null) {
    external = target.external;
  }
  obj.external = external;
  return obj;
}
function process(_zod, seen) {
  let tmp4 = arg2;
  if (arg2 === undefined) {
    const obj = { path: [], schemaPath: [] };
    tmp4 = obj;
  }
  const def = _zod._zod.def;
  seen = seen.seen;
  value = seen.get(_zod);
  if (value) {
    value.count = value.count + 1;
    const schemaPath = tmp4.schemaPath;
    if (schemaPath.includes(_zod)) {
      value.cycle = tmp4.path;
    }
    return value.schema;
  } else {
    const obj2 = { schema: {}, count: 1, cycle: "Array", path: tmp4.path };
    const seen2 = seen.seen;
    const result = seen2.set(_zod, obj2);
    _zod = _zod._zod;
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
      const items = [];
      items[HermesBuiltin.arraySpread(tmp4.schemaPath, 0)] = _zod;
      obj3.schemaPath = items;
      obj3.path = tmp4.path;
      if (_zod._zod.processJSONSchema) {
        const _zod2 = _zod._zod;
        _zod2.processJSONSchema(seen, obj2.schema, obj3);
      } else {
        const schema = obj2.schema;
        if (seen.processors[def.type]) {
          tmp13(_zod, seen, schema, obj3);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[toJSONSchema]: Non-representable type encountered: " + def.type);
          throw error;
        }
      }
      const parent = _zod._zod.parent;
      if (parent) {
        if (!obj2.ref) {
          obj2.ref = parent;
        }
        process(parent, seen, obj3);
        const seen3 = seen.seen;
        seen3.get(parent).isParent = true;
      }
    }
    const metadataRegistry = seen.metadataRegistry;
    value2 = metadataRegistry.get(_zod);
    if (value2) {
      const _Object = Object;
      const merged1 = Object.assign(obj2.schema, value2);
    }
    let tmp30 = "input" === seen.io;
    if (tmp30) {
      tmp30 = isTransforming(_zod);
    }
    if (tmp30) {
      const schema2 = obj2.schema;
      delete tmp3[tmp2];
      const schema3 = obj2.schema;
      delete tmp3[tmp2];
    }
    if (tmp32) {
      const schema4 = obj2.schema;
      if (schema4.default == null) {
        schema4.default = obj2.schema._prefault;
      }
    }
    const schema5 = obj2.schema;
    delete tmp2[tmp];
    const seen4 = seen.seen;
    return seen4.get(_zod).schema;
  }
}
function extractDefs(initializeContextResult, _idmap) {
  const seen = initializeContextResult.seen;
  value = seen.get(_idmap);
  exports = value;
  if (value) {
    const _Map = Map;
    const map = new Map();
    const seen2 = initializeContextResult.seen;
    const entries = seen2.entries();
    const iter = entries[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp15 = nextResult;
      let metadataRegistry = initializeContextResult.metadataRegistry;
      let value5 = metadataRegistry.get(nextResult[0]);
      let id1;
      if (value5 != null) {
        id1 = value5.id;
      }
      let tmp18 = id1;
      if (id1) {
        let value6 = map.get(tmp18);
        if (value6) {
          if (tmp21 !== tmp15[0]) {
            let _Error2 = Error;
            let _HermesInternal = HermesInternal;
            let str2 = "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.";
            let str3 = "Duplicate schema id \"";
            let tmp28 = new.target;
            let tmp29 = new.target;
            let error = new Error("Duplicate schema id \"" + tmp18 + "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.");
            throw error;
          }
        }
        let result = map.set(tmp18, tmp15[0]);
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
          let id1;
          if (value != null) {
            id1 = value.id;
          }
          let fn = initializeContextResult.external.uri;
          if (fn == null) {
            fn = (__shared) => __shared;
          }
          if (id1) {
            const obj2 = { ref: fn(id1) };
            let obj = obj2;
          } else {
            let id2 = arg0[1].defId;
            if (id2 == null) {
              id2 = arg0[1].schema.id;
            }
            if (id2 == null) {
              initializeContextResult.counter = +initializeContextResult.counter + 1;
              id2 = `schema${tmp13}`;
            }
            arg0[1].defId = id2;
            const obj3 = { defId: id2, ref: null };
            const _HermesInternal2 = HermesInternal;
            obj3.ref = "" + fn("__shared") + "#/" + str + "/" + id2;
            obj = obj3;
          }
        } else if (arg0[1] === value) {
          obj = { ref: "#" };
        } else {
          const _HermesInternal = HermesInternal;
          let id = arg0[1].schema.id;
          const combined = "#/" + str + "/";
          if (id == null) {
            initializeContextResult.counter = +initializeContextResult.counter + 1;
            id = `__schema${tmp9}`;
          }
          obj = { defId: id, ref: combined + id };
        }
        const defId = obj.defId;
        const obj4 = {};
        const merged = Object.assign(tmp3.schema);
        arg0[1].def = obj4;
        if (defId) {
          tmp3.defId = defId;
        }
        const schema = tmp3.schema;
        for (const key10071 in schema) {
          delete tmp[tmp2];
          continue;
        }
        schema.$ref = obj.ref;
      }
    }
    if ("throw" === initializeContextResult.cycles) {
      const seen4 = initializeContextResult.seen;
      const entries1 = seen4.entries();
      for (const item10070 of entries1) {
        let tmp33 = item10070[1];
        if (tmp33.cycle) {
          let cycle = tmp33.cycle;
          let joined;
          if (cycle != null) {
            let str5 = "/";
            joined = cycle.join("/");
          }
          let _HermesInternal2 = HermesInternal;
          let str6 = "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.";
          let str7 = "Cycle detected: #/";
          let tmp36 = new.target;
          let tmp37 = new.target;
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
      let tmp45 = nextResult1;
      let tmp46 = nextResult1[1];
      if (_idmap !== nextResult1[0]) {
        if (initializeContextResult.external) {
          let registry = initializeContextResult.external.registry;
          let value7 = registry.get(tmp45[0]);
          if (value7 != null) {
            let id = value7.id;
          }
          if (_idmap !== tmp45[0]) {
            if (tmp51) {
              let extractToDefResult = extractToDef(tmp45);
              continue;
            }
          }
        }
        let metadataRegistry2 = initializeContextResult.metadataRegistry;
        let value8 = metadataRegistry2.get(tmp45[0]);
        let id2;
        if (value8 != null) {
          id2 = value8.id;
        }
        if (!id2) {
          id2 = tmp46.cycle;
        }
        if (!id2) {
          let tmp59 = tmp46.count > 1 && "ref" === initializeContextResult.reused;
          id2 = tmp59;
        }
        if (id2) {
          let extractToDefResult1 = extractToDef(tmp45);
        }
      } else {
        let extractToDefResult2 = extractToDef(tmp45);
      }
      continue;
    }
  } else {
    const _Error = Error;
    const error2 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error2;
  }
}
function finalize(seen, _standard) {
  let standardJSONSchemaMethod = seen;
  seen = seen.seen;
  value = seen.get(_standard);
  if (value) {
    function flattenRef(item10028) {
      seen = seen.seen;
      value = seen.get(item10028);
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
            const _Object = Object;
            const merged1 = Object.assign(schema, schema2);
          } else {
            let allOf = schema.allOf;
            if (allOf == null) {
              allOf = [];
            }
            schema.allOf = allOf;
            const allOf1 = schema.allOf;
            allOf1.push(schema2);
          }
          const _Object2 = Object;
          const merged2 = Object.assign(schema, obj);
          if (item10028._zod.parent === ref) {
            for (const key10046 in tmp10) {
              let tmp20 = "$ref" !== key10046;
              if (tmp20) {
                tmp20 = "allOf" !== key10046;
              }
              if (!tmp20) {
                continue;
              } else {
                if (key10046 in obj) {
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
              for (const key10055 in tmp10) {
                let tmp22 = "$ref" !== key10055;
                if (tmp22) {
                  tmp22 = "allOf" !== key10055;
                }
                if (tmp22) {
                  tmp22 = key10055 in value3.def;
                }
                if (tmp22) {
                  let _JSON = JSON;
                  let _JSON2 = JSON;
                  let json = JSON.stringify(schema[key10055]);
                  tmp22 = json === JSON.stringify(value3.def[key10055]);
                }
                if (!tmp22) {
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
        const parent = item10028._zod.parent;
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
                for (const key10079 in tmp10) {
                  let tmp27 = "$ref" !== key10079;
                  if (tmp27) {
                    tmp27 = "allOf" !== key10079;
                  }
                  if (tmp27) {
                    tmp27 = key10079 in value4.def;
                  }
                  if (tmp27) {
                    let _JSON3 = JSON;
                    let _JSON4 = JSON;
                    let json1 = JSON.stringify(schema[key10079]);
                    tmp27 = json1 === JSON.stringify(value4.def[key10079]);
                  }
                  if (!tmp27) {
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
        const obj2 = { zodSchema: item10028, jsonSchema: schema, path: null };
        let path = value.path;
        if (path == null) {
          path = [];
        }
        obj2.path = path;
        seen.override(obj2);
      }
    }
    let seen2 = standardJSONSchemaMethod.seen;
    const items = [];
    HermesBuiltin.arraySpread(seen2.entries(), 0);
    const reversed = items.reverse();
    for (const item10028 of reversed) {
      let flattenRefResult = flattenRef(item10028[0]);
      continue;
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
      value2 = registry.get(_standard);
      let id;
      if (value2 != null) {
        id = value2.id;
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
    let schema = value.def;
    if (schema == null) {
      schema = value.schema;
    }
    let merged = Object.assign(obj, schema);
    const external3 = standardJSONSchemaMethod.external;
    let defs;
    if (external3 != null) {
      defs = external3.defs;
    }
    if (defs == null) {
      defs = {};
    }
    let seen3 = standardJSONSchemaMethod.seen;
    const entries = seen3.entries();
    for (const item10078 of entries) {
      let tmp29 = item10078[1];
      let tmp30 = tmp29;
      let defId = tmp29.def;
      if (defId) {
        defId = tmp30.defId;
      }
      if (defId) {
        defs[tmp30.defId] = tmp30.def;
      }
      continue;
    }
    if (!standardJSONSchemaMethod.external) {
      let _Object = Object;
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
      defs = JSON.parse(JSON.stringify(Object));
      let obj2 = { value: null, enumerable: false, writable: false };
      const obj3 = {};
      let merged1 = Object.assign(_standard["~standard"]);
      const obj4 = { input: exports.createStandardJSONSchemaMethod(_standard, "input", standardJSONSchemaMethod.processors), output: null };
      standardJSONSchemaMethod = exports.createStandardJSONSchemaMethod(_standard, "output", standardJSONSchemaMethod.processors);
      obj4.output = standardJSONSchemaMethod;
      obj3.jsonSchema = obj4;
      obj2.value = obj3;
      Object.defineProperty(defs, "~standard", obj2);
    } catch (err) {
      const error1 = new tmp.Error("Error converting schema to JSON.");
      throw error1;
    }
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
    const set = new Set();
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
                    if ("intersection" === def.type) {
                      let tmp30Result = isTransforming(def.left, tmp);
                      if (!tmp30Result) {
                        tmp30Result = isTransforming(def.right, tmp);
                      }
                      return tmp30Result;
                    } else {
                      if ("record" !== def.type) {
                        if ("map" !== def.type) {
                          if ("pipe" === def.type) {
                            let tmp22Result = isTransforming(def.in, tmp);
                            if (!tmp22Result) {
                              tmp22Result = isTransforming(def.out, tmp);
                            }
                            return tmp22Result;
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
                            const items = def.items;
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
                      let tmp26Result = isTransforming(def.keyType, tmp);
                      if (!tmp26Result) {
                        tmp26Result = isTransforming(def.valueType, tmp);
                      }
                      return tmp26Result;
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

export { initializeContext };
export { process };
export { extractDefs };
export { finalize };
export (_standard) => {
  closure_0 = _standard;
  if (processors === undefined) {
    processors = {};
  }
  return (arg0) => {
    processors = {};
    const merged = Object.assign(arg0);
    processors.processors = processors;
    const tmp2 = initializeContext(processors);
    process(closure_0, tmp2);
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
    process(closure_0, tmpResult);
    extractDefs(tmpResult, closure_0);
    return finalize(tmpResult, closure_0);
  };
}