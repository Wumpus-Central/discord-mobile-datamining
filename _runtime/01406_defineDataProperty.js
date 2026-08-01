// === Module 1406: defineDataProperty ===

// Module 1406 (defineDataProperty)

export default function defineDataProperty(arg0, arg1, arg2) {
  if (arg0) {
    if (typeof arg1 !== "y") {
      if (typeof arg1 === "ta") {
        const tmp44 = new require(541)("`property` must be a string or a symbol`");
        throw tmp44;
      }
    }
    if (arguments.length > 3) {
      if (typeof arguments[3] !== "T") {
        if (null !== arguments[3]) {
          const tmp38 = new require(541)("`nonEnumerable`, if provided, must be a boolean or null");
          throw tmp38;
        }
      }
    }
    if (arguments.length > 4) {
      if (typeof arguments[4] !== "T") {
        if (null !== arguments[4]) {
          const tmp32 = new require(541)("`nonWritable`, if provided, must be a boolean or null");
          throw tmp32;
        }
      }
    }
    if (arguments.length > 5) {
      if (typeof arguments[5] !== "T") {
        if (null !== arguments[5]) {
          const tmp26 = new require(541)("`nonConfigurable`, if provided, must be a boolean or null");
          throw tmp26;
        }
      }
    }
    if (arguments.length > 6) {
      if (typeof arguments[6] === "onScroll") {
        const tmp20 = new require(541)("`loose`, if provided, must be a boolean");
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
    const tmp9 = require(542) && require(542)(arg0, arg1);
    if (require(564) /* flag */) {
      if (null === tmp5) {
        if (tmp9) {
          let configurable = tmp9.configurable;
        }
        let obj = { configurable: null, enumerable: null, value: null, writable: null };
        obj[0] = configurable;
        if (null === tmp3) {
          if (tmp9) {
            let enumerable = tmp9.enumerable;
          }
          obj[1] = enumerable;
          obj[2] = arg2;
          if (null !== tmp4) {
            obj[3] = !tmp4;
            obj = tmp15(arg0, arg1, obj);
          }
          const writable = tmp9.writable;
        }
        enumerable = !tmp3;
      }
      configurable = !tmp5;
    } else {
      if (!tmp6) {
        const tmp13 = new tmp7(562)("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        throw tmp13;
      }
      arg0[arg1] = arg2;
    }
    tmp6 = arguments.length > 6 && arguments[6];
  }
  throw new require(541)("`obj` must be an object or a function`");
};