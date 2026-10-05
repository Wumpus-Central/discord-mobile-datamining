// _runtime/metro/08665__.js
import $output from "../08663__output.js";

let map, set;

function initializeContext(target) {
  let external;
  let fn;
  let metadata;
  let str2;
  let str3;
  let str4;
  let str5;
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
  const obj = {
    processors,
    metadataRegistry: metadata,
    target: str,
    unrepresentable: str2,
    override: fn,
    io: str3,
    counter: 0,
    seen: new Map(),
    cycles: str4,
    reused: str5,
    external,
  };
  metadata = undefined;
  if (target != null) {
    metadata = target.metadata;
  }
  if (metadata == null) {
    metadata = $output.globalRegistry;
  }
  str2 = undefined;
  if (target != null) {
    str2 = target.unrepresentable;
  }
  if (str2 == null) {
    str2 = "throw";
  }
  fn = undefined;
  if (target != null) {
    fn = target.override;
  }
  if (fn == null) {
    fn = () => {};
  }
  str3 = undefined;
  if (target != null) {
    str3 = target.io;
  }
  if (str3 == null) {
    str3 = "output";
  }
  str4 = undefined;
  new Map();
  if (target != null) {
    str4 = target.cycles;
  }
  if (str4 == null) {
    str4 = "ref";
  }
  str5 = undefined;
  if (target != null) {
    str5 = target.reused;
  }
  if (str5 == null) {
    str5 = "inline";
  }
  external = undefined;
  if (target != null) {
    external = target.external;
  }
  return obj;
}
function process(_zod, seen) {
  let items;
  let tmp2 = arg2;
  if (arg2 === undefined) {
    tmp2 = { path: [], schemaPath: [] };
    const obj = { path: [], schemaPath: [] };
  }
  const def = _zod._zod.def;
  seen = seen.seen;
  const value = seen.get(_zod);
  if (value) {
    value.count = value.count + 1;
    const schemaPath = tmp2.schemaPath;
    if (schemaPath.includes(_zod)) {
      value.cycle = tmp2.path;
    }
    return value.schema;
  } else {
    const obj3 = { schema: {}, count: 1, cycle: "Array", path: tmp2.path };
    const seen2 = seen.seen;
    const result = seen2.set(_zod, obj3);
    _zod = _zod._zod;
    const toJSONSchema = _zod.toJSONSchema;
    let toJSONSchemaResult;
    if (toJSONSchema != null) {
      toJSONSchemaResult = toJSONSchema();
    }
    if (toJSONSchemaResult) {
      obj3.schema = toJSONSchemaResult;
    } else {
      const obj5 = { schemaPath: items, path: tmp2.path };
      const merged = Object.assign(tmp2);
      items = [];
      items[HermesBuiltin.arraySpread(items, tmp2.schemaPath, 0)] = _zod;
      if (_zod._zod.processJSONSchema) {
        const _zod2 = _zod._zod;
        _zod2.processJSONSchema(seen, obj3.schema, obj5);
      } else {
        const schema = obj3.schema;
        if (seen.processors[def.type]) {
          seen.processors[def.type](_zod, seen, schema, obj5);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("[toJSONSchema]: Non-representable type encountered: " + def.type);
          throw error;
        }
      }
      const parent = _zod._zod.parent;
      if (parent) {
        if (!obj3.ref) {
          obj3.ref = parent;
        }
        process(parent, seen, obj5);
        const seen3 = seen.seen;
        seen3.get(parent).isParent = true;
      }
    }
    const metadataRegistry = seen.metadataRegistry;
    const value2 = metadataRegistry.get(_zod);
    if (value2) {
      const _Object = Object;
      const merged1 = Object.assign(obj3.schema, value2);
    }
    const tmp26 = "input" === seen.io && isTransforming(_zod);
    if (tmp26) {
      delete obj2.schema["examples"];
      delete obj2.schema["default"];
    }
    const tmp28 = "input" === seen.io && obj3.schema._prefault;
    if (tmp28) {
      const schema2 = obj3.schema;
      if (schema2.default == null) {
        schema2.default = obj3.schema._prefault;
      }
    }
    delete obj2.schema["_prefault"];
    const seen4 = seen.seen;
    return seen4.get(_zod).schema;
  }
}
function extractDefs(initializeContextResult, _idmap) {
  const seen = initializeContextResult.seen;
  const value = seen.get(_idmap);
  exports = value;
  if (exports) {
    const _Map = Map;
    const self3 = this;
    const self4 = this;
    map = new Map();
    const seen2 = initializeContextResult.seen;
    const entries = seen2.entries();
    const iter = entries[Symbol.iterator]();
    const tmp7 = null;
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      let metadataRegistry = initializeContextResult.metadataRegistry;
      let value5 = metadataRegistry.get(nextResult[0]);
      let id1;
      if (value5 != null) {
        id1 = value5.id;
      }
      let tmp14 = id1;
      if (tmp14) {
        let value6 = map.get(tmp14);
        if (value6) {
          if (tmp17 !== tmp11[0]) {
            let _Error2 = Error;
            let _HermesInternal = HermesInternal;
            let str2 =
              '" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.';
            let str3 = 'Duplicate schema id "';
            let self5 = this;
            let self6 = this;
            let error = new Error(
              'Duplicate schema id "' +
                tmp14 +
                '" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.',
            );
            throw error;
          }
        }
        let result = map.set(tmp14, tmp11[0]);
      }
      continue;
    }
    function extractToDef(arg0) {
      if (!arg0[1].schema.$ref) {
        let obj;
        let str = "definitions";
        if ("draft-2020-12" === initializeContextResult.target) {
          str = "$defs";
        }
        if (initializeContextResult.external) {
          const registry = initializeContextResult.external.registry;
          exports = registry.get(arg0[0]);
          let id1;
          if (exports != null) {
            id1 = exports.id;
          }
          let fn = initializeContextResult.external.uri;
          if (fn == null) {
            fn = (__shared) => __shared;
          }
          if (id1) {
            obj = { ref: fn(id1) };
            const obj2 = { ref: fn(id1) };
          } else {
            let id2 = arg0[1].defId;
            if (id2 == null) {
              id2 = arg0[1].schema.id;
            }
            if (id2 == null) {
              initializeContextResult.counter = +initializeContextResult.counter + 1;
              id2 = `schema${tmp11}`;
            }
            arg0[1].defId = id2;
            const _HermesInternal2 = HermesInternal;
            obj = { defId: id2, ref: "" + fn("__shared") + "#/" + str + "/" + id2 };
            const obj3 = { defId: id2, ref: "" + fn("__shared") + "#/" + str + "/" + id2 };
          }
        } else if (arg0[1] === exports) {
          obj = { ref: "#" };
        } else {
          const _HermesInternal = HermesInternal;
          let id = arg0[1].schema.id;
          const combined = "#/" + str + "/";
          if (id == null) {
            initializeContextResult.counter = +initializeContextResult.counter + 1;
            id = `__schema${tmp7}`;
          }
          obj = { defId: id, ref: combined + id };
        }
        const defId = obj.defId;
        const obj4 = {};
        const ref = obj.ref;
        const merged = Object.assign(tmp.schema);
        arg0[1].def = obj4;
        if (defId) {
          arg0[1].defId = defId;
        }
        const schema = tmp.schema;
        for (const key10071 in schema) {
          delete schema[key10071];
          continue;
        }
        schema.$ref = ref;
      }
    }
    if ("throw" === initializeContextResult.cycles) {
      const seen4 = initializeContextResult.seen;
      const entries1 = seen4.entries();
      for (const item10070 of entries1) {
        let tmp27 = item10070[1];
        if (tmp27.cycle) {
          let cycle = tmp27.cycle;
          let joined;
          let _Error3 = Error;
          if (cycle != null) {
            let str5 = "/";
            joined = cycle.join("/");
          }
          let _HermesInternal2 = HermesInternal;
          let str6 = '/<root>\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.';
          let str7 = "Cycle detected: #/";
          let self7 = this;
          let self8 = this;
          let _Error31 = new _Error3(
            "Cycle detected: #/" +
              joined +
              '/<root>\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.',
          );
          throw _Error31;
        }
      }
    }
    const seen3 = initializeContextResult.seen;
    const entries2 = seen3.entries();
    const iter2 = entries2[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp37 = nextResult1;
      let tmp38 = nextResult1[1];
      if (_idmap !== nextResult1[0]) {
        if (initializeContextResult.external) {
          let registry = initializeContextResult.external.registry;
          let value7 = registry.get(tmp37[0]);
          if (value7 != null) {
            let id = value7.id;
          }
          if (_idmap !== tmp37[0]) {
            if (tmp43) {
              let extractToDefResult = extractToDef(tmp37);
              continue;
            }
          }
        }
        let metadataRegistry2 = initializeContextResult.metadataRegistry;
        let value8 = metadataRegistry2.get(tmp37[0]);
        let id2;
        if (value8 != null) {
          id2 = value8.id;
        }
        if (!id2) {
          id2 = tmp38.cycle;
        }
        if (!id2) {
          let tmp51 = tmp38.count > 1 && "ref" === initializeContextResult.reused;
          id2 = tmp51;
        }
        if (id2) {
          let extractToDefResult1 = extractToDef(tmp37);
        }
      } else {
        let extractToDefResult2 = extractToDef(tmp37);
      }
      continue;
    }
  } else {
    const _Error = Error;
    const self = this;
    let str = "Unprocessed schema. This is a bug in Zod.";
    const self2 = this;
    const error1 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error1;
  }
}
function finalize(seen, _standard) {
  let obj4;
  let obj5;
  let closure_0 = seen;
  seen = seen.seen;
  let value = seen.get(_standard);
  if (value) {
    function flattenRef(item10028) {
      let path;
      const seen = closure_0.seen;
      const value = seen.get(item10028);
      if (null !== value.ref) {
        let schema = value.def;
        if (schema == null) {
          schema = value.schema;
        }
        const obj = {};
        const merged = Object.assign(schema);
        value.ref = null;
        if (value.ref) {
          flattenRef(value.ref);
          const seen2 = closure_0.seen;
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
          if (item10028._zod.parent === value.ref) {
            for (const key10046 in tmp6) {
              let tmp16 = "$ref" !== key10046 && "allOf" !== key10046;
              if (!tmp16) {
                continue;
              } else {
                if (key10046 in obj) {
                  continue;
                } else {
                  delete tmp6[key10046];
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          if (schema2.$ref) {
            if (value3.def) {
              for (const key10055 in tmp6) {
                let tmp18 = "$ref" !== key10055 && "allOf" !== key10055 && key10055 in value3.def;
                if (tmp18) {
                  let _JSON = JSON;
                  let _JSON2 = JSON;
                  let json = JSON.stringify(schema[key10055]);
                  tmp18 = json === JSON.stringify(value3.def[key10055]);
                }
                if (!tmp18) {
                  continue;
                } else {
                  delete tmp6[key10055];
                  continue;
                }
                continue;
              }
            }
          }
        }
        const parent = item10028._zod.parent;
        if (parent) {
          if (parent !== value.ref) {
            flattenRef(parent);
            const seen3 = closure_0.seen;
            const value4 = seen3.get(parent);
            let prop;
            if (value4 != null) {
              prop = value4.schema.$ref;
            }
            if (prop) {
              schema.$ref = value4.schema.$ref;
              if (value4.def) {
                for (const key10079 in tmp6) {
                  let tmp23 = "$ref" !== key10079 && "allOf" !== key10079 && key10079 in value4.def;
                  if (tmp23) {
                    let _JSON3 = JSON;
                    let _JSON4 = JSON;
                    let json1 = JSON.stringify(schema[key10079]);
                    tmp23 = json1 === JSON.stringify(value4.def[key10079]);
                  }
                  if (!tmp23) {
                    continue;
                  } else {
                    delete tmp6[key10079];
                    continue;
                  }
                  continue;
                }
              }
            }
          }
        }
        const obj2 = { zodSchema: item10028, jsonSchema: schema, path };
        path = value.path;
        const override = closure_0.override;
        if (path == null) {
          path = [];
        }
        override(obj2);
      }
    }
    let seen2 = seen.seen;
    const items = [];
    const tmp6 = items;
    HermesBuiltin.arraySpread(items, seen2.entries(), 0);
    const reversed = items.reverse();
    for (const item10028 of reversed) {
      let flattenRefResult = flattenRef(item10028[0]);
      continue;
    }
    let obj = {};
    if ("draft-2020-12" === seen.target) {
      obj.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if ("draft-07" === seen.target) {
      obj.$schema = "http://json-schema.org/draft-07/schema#";
    } else if ("draft-04" === seen.target) {
      obj.$schema = "http://json-schema.org/draft-04/schema#";
    } else {
      const target = seen.target;
    }
    const external = seen.external;
    let uri;
    if (external != null) {
      uri = external.uri;
    }
    if (uri) {
      const registry = seen.external.registry;
      const value2 = registry.get(_standard);
      let id;
      if (value2 != null) {
        id = value2.id;
      }
      if (id) {
        const external2 = seen.external;
        obj.$id = external2.uri(id);
      } else {
        let tmp16 = globalThis;
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Schema is missing an `id` property");
        let tmp18 = error;
        throw error;
      }
    }
    let schema = value.def;
    let _Object = Object;
    if (schema == null) {
      schema = value.schema;
    }
    let obj2 = assign(obj, schema);
    const external3 = seen.external;
    let defs;
    if (external3 != null) {
      defs = external3.defs;
    }
    if (defs == null) {
      defs = {};
    }
    let seen3 = seen.seen;
    const entries = seen3.entries();
    let tmp23 = entries;
    for (const item10078 of entries) {
      let tmp24 = item10078[1];
      let tmp25 = tmp24;
      let defId = tmp24.def;
      if (defId) {
        defId = tmp25.defId;
      }
      if (defId) {
        defs[tmp25.defId] = tmp25.def;
      }
      continue;
    }
    if (!seen.external) {
      let _Object2 = Object;
      if (Object.keys(defs).length > 0) {
        if ("draft-2020-12" === seen.target) {
          obj.$defs = defs;
        } else {
          obj.definitions = defs;
        }
      }
    }
    try {
      let _JSON = JSON;
      let _JSON2 = JSON;
      const parsed = JSON.parse(JSON.stringify(obj));
      const _Object3 = Object;
      const obj3 = { value: obj4, enumerable: false, writable: false };
      obj4 = { jsonSchema: obj5 };
      let merged = Object.assign(_standard["~standard"]);
      obj5 = {
        input: exports.createStandardJSONSchemaMethod(_standard, "input", seen.processors),
        output: exports.createStandardJSONSchemaMethod(_standard, "output", seen.processors),
      };
      defineProperty(parsed, "~standard", obj3);
      return parsed;
    } catch (err) {
      const _Error3 = Error;
      const self5 = this;
      const self6 = this;
      const error1 = new Error("Error converting schema to JSON.");
      throw error1;
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error2 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error2;
  }
}
function isTransforming(def, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const obj = { seen: set };
    tmp = obj;
    set = new Set();
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
                      const tmp28Result = isTransforming(def.left, tmp) || isTransforming(def.right, tmp);
                      return tmp28Result;
                    } else {
                      if ("record" !== def.type) {
                        if ("map" !== def.type) {
                          if ("pipe" === def.type) {
                            const tmp20Result = isTransforming(def.in, tmp) || isTransforming(def.out, tmp);
                            return tmp20Result;
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
                            let tmp11 = !rest;
                            if (rest) {
                              tmp11 = !isTransforming(def.rest, tmp);
                            }
                            return !tmp11;
                          } else {
                            return false;
                          }
                        }
                      }
                      const tmp24Result = isTransforming(def.keyType, tmp) || isTransforming(def.valueType, tmp);
                      return tmp24Result;
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
export const createToJSONSchemaMethod = (_standard) => {
  let processors;
  let closure_0 = _standard;
  if (processors === undefined) {
    processors = {};
  }
  return (arg0) => {
    processors = { processors };
    const merged = Object.assign(arg0);
    const tmp2 = initializeContext(processors);
    process(closure_0, tmp2);
    extractDefs(tmp2, closure_0);
    return finalize(tmp2, closure_0);
  };
};
export const createStandardJSONSchemaMethod = (_standard, input) => {
  let processors;
  let closure_0 = _standard;
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
    const obj2 = { target: processors.target, io, processors };
    const merged = Object.assign(libraryOptions);
    const tmpResult = initializeContext(obj2);
    process(closure_0, tmpResult);
    extractDefs(tmpResult, closure_0);
    return finalize(tmpResult, closure_0);
  };
};
