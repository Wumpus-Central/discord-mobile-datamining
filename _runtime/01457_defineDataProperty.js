// _runtime/01457_defineDataProperty.js
import _mod1283 from "metro/01283__.js";
import _mod1284 from "metro/01284__.js";
import _mod1304 from "metro/01304__.js";
import flag from "01306_flag.js";

export default function defineDataProperty(obj, str, value) {
  if (obj) {
    if (typeof str !== "string") {
      if (typeof str !== "symbol") {
        const tmp44 = new _mod1283("`property` must be a string or a symbol`");
        throw tmp44;
      }
    }
    if (arguments.length > 3) {
      if (typeof arguments[3] !== "boolean") {
        if (null !== arguments[3]) {
          const tmp38 = new _mod1283("`nonEnumerable`, if provided, must be a boolean or null");
          throw tmp38;
        }
      }
    }
    if (arguments.length > 4) {
      if (typeof arguments[4] !== "boolean") {
        if (null !== arguments[4]) {
          const tmp32 = new _mod1283("`nonWritable`, if provided, must be a boolean or null");
          throw tmp32;
        }
      }
    }
    if (arguments.length > 5) {
      if (typeof arguments[5] !== "boolean") {
        if (null !== arguments[5]) {
          const tmp26 = new _mod1283("`nonConfigurable`, if provided, must be a boolean or null");
          throw tmp26;
        }
      }
    }
    if (arguments.length > 6) {
      if (typeof arguments[6] !== "boolean") {
        const tmp20 = new _mod1283("`loose`, if provided, must be a boolean");
        throw tmp20;
      }
    }
    let tmp3 = null;
    if (arguments.length > 3) {
      tmp3 = arguments[3];
    }
    let tmp4 = null;
    if (arguments.length > 4) {
      tmp4 = arguments[4];
    }
    let tmp5 = null;
    if (arguments.length > 5) {
      tmp5 = arguments[5];
    }
    const tmp9 = _mod1284 && _mod1284(obj, str);
    if (flag) {
      if (null === tmp5) {
        if (tmp9) {
          let configurable = tmp9.configurable;
        }
        obj = { configurable, enumerable: null, value: null, writable: null };
        if (null === tmp3) {
          if (tmp9) {
            let enumerable = tmp9.enumerable;
          }
          obj.enumerable = enumerable;
          obj.value = value;
          if (null !== tmp4) {
            obj.writable = !tmp4;
            obj = tmp15(obj, str, obj);
          }
          const writable = tmp9.writable;
        }
        enumerable = !tmp3;
      }
      configurable = !tmp5;
    } else {
      if (!tmp6) {
        const tmp13 = new _mod1304(
          "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
        );
        throw tmp13;
      }
      obj[str] = value;
    }
    tmp6 = arguments.length > 6 && arguments[6];
  }
  throw new _mod1283("`obj` must be an object or a function`");
}
