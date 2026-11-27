// === Module 18529: conjureSettingsRequest ===

// Module 18529 (conjureSettingsRequest)
import conjureSettingValues from "conjureSettingValues" /* 14759 */;
import size from "module_2" /* 2 */;

function conjureSettingsEntryRequired(kind) {
  let tmp = "secret" === kind.kind;
  if (!tmp) {
    tmp = true === kind.def.required && true !== kind.def.per_server;
    const tmp2 = true === kind.def.required && true !== kind.def.per_server;
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsRequest.tsx");

export function conjureSettingsRequestEntry(key, schema) {
  closure_0 = key;
  schema = schema.schema;
  const found = schema.find((key) => key.key === closure_0);
  const secrets = schema.secrets;
  const found1 = secrets.find((name) => name.name === closure_0);
  if (null == found1) {
    let type;
    if (found != null) {
      type = found.type;
    }
    if ("secret" !== type) {
      let tmp4 = null;
      if (null != found) {
        const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(schema, found), def: found };
        tmp4 = obj;
      }
    }
    return tmp4;
  }
  set = undefined;
  if (found1 != null) {
    set = found1.set;
  }
  tmp4 = { kind: "secret", filled: true === set, def: found };
  const obj3 = { kind: "secret", filled: true === set, def: found };
}
export function conjureSettingsRequestSections(found1, stateFromStores) {
  let found = found1.filter((item) => {
    stateFromStores = item;
    const schema = stateFromStores.schema;
    const found = schema.find((key) => key.key === closure_0);
    const secrets = stateFromStores.secrets;
    const found1 = secrets.find((name) => name.name === closure_0);
    if (null == found1) {
      let type;
      if (found != null) {
        type = found.type;
      }
      if ("secret" !== type) {
        let tmp5 = null;
        if (null != found) {
          const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(tmp, found), def: found };
          tmp5 = obj;
        }
      }
      let kind;
      if (tmp5 != null) {
        kind = tmp5.kind;
      }
      return "secret" === kind;
    }
    set = undefined;
    if (found1 != null) {
      set = found1.set;
    }
    tmp5 = { kind: "secret", filled: true === set, def: found };
    const obj3 = { kind: "secret", filled: true === set, def: found };
    tmp = stateFromStores;
  });
  found1 = found1.filter((item) => {
    stateFromStores = item;
    const schema = stateFromStores.schema;
    const found = schema.find((key) => key.key === closure_0);
    const secrets = stateFromStores.secrets;
    const found1 = secrets.find((name) => name.name === closure_0);
    if (null == found1) {
      let type;
      if (found != null) {
        type = found.type;
      }
      if ("secret" !== type) {
        let tmp5 = null;
        if (null != found) {
          const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(tmp, found), def: found };
          tmp5 = obj;
        }
      }
      let kind;
      if (tmp5 != null) {
        kind = tmp5.kind;
      }
      return "value" === kind;
    }
    set = undefined;
    if (found1 != null) {
      set = found1.set;
    }
    tmp5 = { kind: "secret", filled: true === set, def: found };
    const obj3 = { kind: "secret", filled: true === set, def: found };
    tmp = stateFromStores;
  });
  return { secretKeys: found, valueKeys: found1, sectioned: found.length > 0 && found1.length > 0 };
}
export function conjureSettingsRequestNamedKeys(scopeKeys) {
  items = scopeKeys;
  if (scopeKeys == null) {
    items = [];
  }
  const items1 = [...new Set(items)];
  return items1;
}
export function conjureSettingsRequestPresentation(request2, settings) {
  if (null == settings) {
    return "button";
  } else {
    let keys = request2.keys;
    if (keys == null) {
      keys = [];
    }
    set = new Set(keys);
    items = [];
    HermesBuiltin.arraySpread(set, 0);
    const flatMapResult = items.flatMap((item) => {
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      const secrets = settings.secrets;
      const found1 = secrets.find((name) => name.name === closure_0);
      if (null == found1) {
        let type;
        if (found != null) {
          type = found.type;
        }
        if ("secret" !== type) {
          items = null;
          if (null != found) {
            const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(tmp, found), def: found };
            items = obj;
          }
        }
        if (items == null) {
          items = [];
        }
        return items;
      }
      set = undefined;
      if (found1 != null) {
        set = found1.set;
      }
      items = { kind: "secret", filled: true === set, def: found };
      const obj3 = { kind: "secret", filled: true === set, def: found };
      tmp = settings;
    });
    if (0 !== flatMapResult.length) {
      if (flatMapResult.length <= 2) {
        let str = "inline";
      }
      return str;
    }
    str = "button";
  }
}
export function conjureSettingsRequestMissingKeys(items, arg1) {
  closure_0 = arg1;
  if (null == arg1) {
    items = [];
  } else {
    let keys = items.keys;
    if (keys == null) {
      keys = [];
    }
    set = new Set(keys);
    const items1 = [];
    HermesBuiltin.arraySpread(set, 0);
    items = items1.filter((item) => {
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      const secrets = settings.secrets;
      const found1 = secrets.find((name) => name.name === closure_0);
      if (null == found1) {
        let type;
        if (found != null) {
          type = found.type;
        }
        if ("secret" !== type) {
          let tmp5 = null;
          if (null != found) {
            const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(tmp, found), def: found };
            tmp5 = obj;
          }
        }
        let filled;
        if (tmp5 != null) {
          filled = tmp5.filled;
        }
        return false === filled;
      }
      set = undefined;
      if (found1 != null) {
        set = found1.set;
      }
      tmp5 = { kind: "secret", filled: true === set, def: found };
      const obj3 = { kind: "secret", filled: true === set, def: found };
      tmp = settings;
    });
  }
  return items;
}
export { conjureSettingsEntryRequired };
export function conjureSettingsRequestNeeded(request2, settings, saved) {
  if (null == settings) {
    return 0;
  } else {
    let keys = request2.keys;
    if (keys == null) {
      keys = [];
    }
    set = new Set(keys);
    items = [];
    HermesBuiltin.arraySpread(set, 0);
    const flatMapResult = items.flatMap((item) => {
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      const secrets = settings.secrets;
      const found1 = secrets.find((name) => name.name === closure_0);
      if (null == found1) {
        let type;
        if (found != null) {
          type = found.type;
        }
        if ("secret" !== type) {
          items = null;
          if (null != found) {
            const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(tmp, found), def: found };
            items = obj;
          }
        }
        if (items == null) {
          items = [];
        }
        return items;
      }
      set = undefined;
      if (found1 != null) {
        set = found1.set;
      }
      items = { kind: "secret", filled: true === set, def: found };
      const obj3 = { kind: "secret", filled: true === set, def: found };
      tmp = settings;
    });
    let found = flatMapResult.filter(conjureSettingsEntryRequired);
    if (found.length > 0) {
      let num3 = found.filter((filled) => !filled.filled).length;
    } else {
      num3 = 0;
      if (!saved) {
        closure_129_0 = settings;
        if (null == settings) {
          let items1 = [];
        } else {
          let keys1 = request2.keys;
          if (keys1 == null) {
            keys1 = [];
          }
          const set1 = new Set(keys1);
          const items2 = [];
          HermesBuiltin.arraySpread(set1, 0);
          items1 = items2.filter((item) => {
            settings = item;
            const schema = settings.schema;
            const found = schema.find((key) => key.key === closure_0);
            const secrets = settings.secrets;
            const found1 = secrets.find((name) => name.name === closure_0);
            if (null == found1) {
              let type;
              if (found != null) {
                type = found.type;
              }
              if ("secret" !== type) {
                let tmp5 = null;
                if (null != found) {
                  const obj = { kind: "value", filled: null != conjureSettingValues.conjureSettingAnyStoredValue(tmp, found), def: found };
                  tmp5 = obj;
                }
              }
              let filled;
              if (tmp5 != null) {
                filled = tmp5.filled;
              }
              return false === filled;
            }
            set = undefined;
            if (found1 != null) {
              set = found1.set;
            }
            tmp5 = { kind: "secret", filled: true === set, def: found };
            const obj3 = { kind: "secret", filled: true === set, def: found };
            tmp = settings;
          });
        }
        num3 = 0;
        if (0 !== items1.length) {
          num3 = flatMapResult.length;
        }
      }
    }
    return num3;
  }
}
export function conjureSettingsRequestKeys(request2, schema) {
  let keys = request2.keys;
  if (keys == null) {
    keys = [];
  }
  items = [...new Set(keys)];
  if (items.length <= 0) {
    schema = schema.schema;
    items = schema.map((key) => key.key);
  }
  return items;
}