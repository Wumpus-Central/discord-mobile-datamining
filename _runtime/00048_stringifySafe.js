// === Module 48: stringifySafe ===

// Module 48 (stringifySafe)
import _modDef38 from "module_38" /* 38 */;

function replacer(arg0, _default) {
  let arr = closure_4;
  if (closure_4.length) {
    arr = closure_4;
    if (this !== closure_4[0]) {
      closure_4.shift();
      arr = closure_4;
      while (closure_4.length) {
        arr = closure_4;
        if (tmp2 === closure_4[0]) {
          break;
        }
      }
    }
  }
  if (typeof _default === "string") {
    let text = _default;
    if (_default.length > POSITIVE_INFINITY2 + 17) {
      text = `${_default.substring(0, tmp18)}...(truncated)...`;
    }
    return text;
  } else {
    if (typeof _default === "object") {
      if (null !== _default) {
        let combined;
        const _Array = Array;
        if (Array.isArray(_default)) {
          if (arr.length >= POSITIVE_INFINITY) {
            const _HermesInternal3 = HermesInternal;
            combined = "[ ... array with " + _default.length + " values ... ]";
          } else {
            combined = _default;
            if (_default.length > POSITIVE_INFINITY3) {
              const substr = _default.slice(0, POSITIVE_INFINITY3);
              const _HermesInternal2 = HermesInternal;
              const concat = substr.concat;
              const items = ["... extra " + _default.length - POSITIVE_INFINITY3 + " values truncated ..."];
              combined = concat(items);
            }
          }
        } else {
          _modDef38(typeof _default === "object", "This was already found earlier");
          const _Object = Object;
          const keys = Object.keys(_default);
          if (arr.length >= POSITIVE_INFINITY) {
            const _HermesInternal = HermesInternal;
            combined = "{ ... object with " + keys.length + " keys ... }";
          } else {
            combined = _default;
            if (keys.length > POSITIVE_INFINITY4) {
              const obj = { "...(truncated keys)...": keys.length - POSITIVE_INFINITY4 };
              const substr1 = keys.slice(0, tmp9);
              for (const item10028 of substr1) {
                obj[item10028] = _default[item10028];
                continue;
              }
              combined = obj;
            }
          }
        }
        closure_4.unshift(combined);
        return combined;
      }
    }
    return _default;
  }
}
let c0 = 10;
let c1 = 100;
let c2 = 50;
let c3 = 50;
let closure_4 = [];

export default function stringifySafe(name) {
  if (undefined === name) {
    return "undefined";
  } else if (null === name) {
    return "null";
  } else if (typeof name === "function") {
    try {
      return name.toString();
    } catch (err) {
      return "[function unknown]";
    }
  } else {
    const _Error = Error;
    if (name instanceof Error) {
      return name.name + ": " + name.message;
    } else {
      try {
        const _JSON = JSON;
        const json = JSON.stringify(name, replacer);
        let combined = json;
        if (undefined === json) {
          const _HermesInternal = HermesInternal;
          combined = "[\"" + typeof name + "\" failed to stringify]";
        }
        return combined;
      } catch (err) {
        if (typeof name.toString !== "function") {
          const _HermesInternal2 = HermesInternal;
          return "[\"" + typeof name + "\" failed to stringify]";
        } else {
          try {
            return name.toString();
          } catch (err) {
          }
        }
      }
    }
  }
};
export const createStringifySafeWithLimits = function createStringifySafeWithLimits(maxDepth) {
  function replacer(arg0, _default) {
    let arr = closure_4;
    if (closure_4.length) {
      arr = closure_4;
      if (this !== closure_4[0]) {
        closure_4.shift();
        arr = closure_4;
        while (closure_4.length) {
          arr = closure_4;
          if (tmp2 === closure_4[0]) {
            break;
          }
        }
      }
    }
    if (typeof _default === "string") {
      let text = _default;
      if (_default.length > POSITIVE_INFINITY2 + 17) {
        text = `${_default.substring(0, tmp18)}...(truncated)...`;
      }
      return text;
    } else {
      if (typeof _default === "object") {
        if (null !== _default) {
          let combined;
          const _Array = Array;
          if (Array.isArray(_default)) {
            if (arr.length >= POSITIVE_INFINITY) {
              const _HermesInternal3 = HermesInternal;
              combined = "[ ... array with " + _default.length + " values ... ]";
            } else {
              combined = _default;
              if (_default.length > POSITIVE_INFINITY3) {
                const substr = _default.slice(0, POSITIVE_INFINITY3);
                const _HermesInternal2 = HermesInternal;
                const concat = substr.concat;
                const items = ["... extra " + _default.length - POSITIVE_INFINITY3 + " values truncated ..."];
                combined = concat(items);
              }
            }
          } else {
            _modDef38(typeof _default === "object", "This was already found earlier");
            const _Object = Object;
            const keys = Object.keys(_default);
            if (arr.length >= POSITIVE_INFINITY) {
              const _HermesInternal = HermesInternal;
              combined = "{ ... object with " + keys.length + " keys ... }";
            } else {
              combined = _default;
              if (keys.length > POSITIVE_INFINITY4) {
                const obj = { "...(truncated keys)...": keys.length - POSITIVE_INFINITY4 };
                const substr1 = keys.slice(0, tmp9);
                for (const item10028 of substr1) {
                  obj[item10028] = _default[item10028];
                  continue;
                }
                combined = obj;
              }
            }
          }
          closure_4.unshift(combined);
          return combined;
        }
      }
      return _default;
    }
  }
  let POSITIVE_INFINITY = maxDepth.maxDepth;
  if (undefined === POSITIVE_INFINITY) {
    const _Number = Number;
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY2 = maxDepth.maxStringLimit;
  if (undefined === POSITIVE_INFINITY2) {
    const tmp2 = globalThis;
    const _Number2 = Number;
    POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY3 = maxDepth.maxArrayLimit;
  if (undefined === POSITIVE_INFINITY3) {
    const _Number3 = Number;
    POSITIVE_INFINITY3 = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY4 = maxDepth.maxObjectKeysLimit;
  if (undefined === POSITIVE_INFINITY4) {
    const _Number4 = Number;
    POSITIVE_INFINITY4 = Number.POSITIVE_INFINITY;
  }
  let closure_4 = [];
  return function stringifySafe(name) {
    if (undefined === name) {
      return "undefined";
    } else if (null === name) {
      return "null";
    } else if (typeof name === "function") {
      try {
        return name.toString();
      } catch (err) {
        return "[function unknown]";
      }
    } else {
      const _Error = Error;
      if (name instanceof Error) {
        return name.name + ": " + name.message;
      } else {
        try {
          const _JSON = JSON;
          const json = JSON.stringify(name, replacer);
          let combined = json;
          if (undefined === json) {
            const _HermesInternal = HermesInternal;
            combined = "[\"" + typeof name + "\" failed to stringify]";
          }
          return combined;
        } catch (err) {
          if (typeof name.toString !== "function") {
            const _HermesInternal2 = HermesInternal;
            return "[\"" + typeof name + "\" failed to stringify]";
          } else {
            try {
              return name.toString();
            } catch (err) {
            }
          }
        }
      }
    }
  };
};