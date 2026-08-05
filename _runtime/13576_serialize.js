// _runtime/13576_serialize.js
arg5.default = undefined;
let c0 = "~~~ zero ~~~";
if (typeof BigInt !== "undefined") {
  const _BigInt = BigInt;
  BigInt.prototype.toJSON = function() {
    return this.toString();
  };
}
arg5.default = function serialize(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let closure_1 = [];
  let closure_2 = [];
  return JSON.stringify(arg0, function(arg0, obj) {
    if (true === obj) {
      return true;
    } else if (obj === Infinity) {
      return "~~~ Infinity ~~~";
    } else if (obj === -Infinity) {
      return "~~~ -Infinity ~~~";
    } else if (0 === obj) {
      return flag;
    } else if (undefined === obj) {
      return "~~~ undefined ~~~";
    } else if (null === obj) {
      return "~~~ null ~~~";
    } else if (false === obj) {
      return "~~~ false ~~~";
    } else if (-0 === obj) {
      return flag;
    } else if ("" === obj) {
      return "~~~ empty string ~~~";
    } else {
      if (flag) {
        if (typeof obj === "object") {
          if (obj.nativeEvent) {
            return obj.nativeEvent;
          }
        }
      }
      if ("string" !== typeof obj) {
        if ("number" !== tmp) {
          if ("bigint" === tmp) {
            return obj.toString();
          } else if ("function" === tmp) {
            const name = obj.name;
            let str4 = "~~~ anonymous function ~~~";
            if (null != name) {
              str4 = "~~~ anonymous function ~~~";
              if ("" !== name) {
                const _HermesInternal = HermesInternal;
                str4 = "~~~ " + name + "() ~~~";
              }
            }
            return str4;
          } else {
            const _Symbol = Symbol;
            if (obj[Symbol.iterator]) {
              const _Array = Array;
              if (!Array.isArray(obj)) {
                const items = [];
                HermesBuiltin.arraySpread(obj, 0);
                return items;
              }
            }
            let arr1 = length;
            if (length.length > 0) {
              const self = this;
              const index = arr1.indexOf(this);
              if (~index) {
                arr1.splice(index + 1);
              } else {
                arr1.push(self);
              }
              if (~index) {
                arr3.splice(index, Infinity, arg0);
              } else {
                arr3.push(arg0);
              }
              let str2 = obj;
              if (~arr1.indexOf(obj)) {
                str2 = "~~~ Circular Reference ~~~";
              }
            } else {
              arr1 = arr1.push(obj);
              str2 = obj;
            }
            return str2;
          }
        }
      }
      return obj;
    }
  });
};