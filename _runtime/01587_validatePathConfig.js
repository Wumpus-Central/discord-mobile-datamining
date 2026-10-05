// === Module 1587: validatePathConfig ===

// Module 1587 (validatePathConfig)
function formatToList(arg0) {

}
function validatePathConfig(config) {
  const f84339 = (item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "- " + tmp + " (" + tmp2 + ")";
  };
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj2;
  let obj = null;
  if (!flag) {
    obj = { alias: "array", exact: "boolean", stringify: "object", parse: "object" };
  }
  obj2 = { path: "string", initialRouteName: "string", screens: "object" };
  const merged = Object.assign(obj);
  if (typeof config === "object") {
    if (null !== config) {
      const _Object4 = Object;
      const _Object5 = Object;
      const keys = Object.keys(config);
      const mapped = keys.map((item) => {
        if (item in obj2) {
          if (undefined !== config[item]) {
            if ("array" === obj2[item]) {
              const _Array = Array;
              if (!Array.isArray(config[item])) {
                const items = [item, ];
                const _HermesInternal2 = HermesInternal;
                items[1] = "expected 'Array', got '" + typeof config[item] + "'";
                return items;
              }
            } else if (typeof config[item] !== obj2[item]) {
              const items1 = [item, ];
              const _HermesInternal = HermesInternal;
              items1[1] = "expected '" + obj2[item] + "', got '" + typeof config[item] + "'";
              return items1;
            }
          }
          return null;
        } else {
          const items2 = [item, "extraneous"];
          return items2;
        }
      });
      const _Boolean = Boolean;
      const fromEntriesResult = fromEntries(mapped.filter(Boolean));
      const _Object6 = Object;
      if (Object.keys(fromEntriesResult).length) {
        if (typeof config === "function") {
          const _Object2 = Object;
          const entries = Object.entries(fromEntriesResult);
          const mapped1 = entries.map(f84339);
          const joined = mapped1.join("\n");
          if (typeof tmp7 === "function") {
            const _Object3 = Object;
            const entries1 = Object.entries(obj2);
            const mapped2 = entries1.map(f84339);
            let _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const tmp62 = new tmp6("Found invalid properties in the configuration:\n" + joined + "\n\nYou can only specify the following properties:\n" + mapped2.join("\n") + "\n\nIf you want to specify configuration for screens, you need to specify them under a 'screens' property.\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
            throw tmp62;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        if (flag) {
          if ("path" in config) {
            if (typeof config.path === "string") {
              const path = config.path;
              if (path.includes(":")) {
                const _Error = Error;
                let _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("Found invalid path '" + config.path + "'. The 'path' in the top-level configuration cannot contain patterns for params.");
                throw error;
              }
            }
          }
        }
        const tmp2 = "screens" in config && config.screens;
        if (tmp2) {
          const _Object = Object;
          const entries2 = Object.entries(config.screens);
          const item = entries2.forEach((item) => {
            let tmp;
            [, tmp] = item;
            if (typeof tmp !== "string") {
              obj2(tmp, false);
            }
          });
        }
      }
    }
  }
  const error1 = new Error("Expected the configuration to be an object, but got " + JSON.stringify(config) + ".");
  throw error1;
}

export { validatePathConfig };