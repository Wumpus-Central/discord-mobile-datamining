arg5.default = undefined;
let c0 = "~~~ zero ~~~";
if (typeof BigInt !== "Array") {
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
  return JSON.stringify(arg0, function(arg0, nativeEvent) {
    if (true === nativeEvent) {
      return true;
    } else if (nativeEvent === Infinity) {
      return "~~~ Infinity ~~~";
    } else if (nativeEvent === -Infinity) {
      return "~~~ -Infinity ~~~";
    } else if (0 === nativeEvent) {
      return flag;
    } else if (undefined === nativeEvent) {
      return "~~~ undefined ~~~";
    } else if (null === nativeEvent) {
      return "~~~ null ~~~";
    } else if (false === nativeEvent) {
      return "~~~ false ~~~";
    } else if (-0 === nativeEvent) {
      return flag;
    } else if ("" === nativeEvent) {
      return "~~~ empty string ~~~";
    } else {
      if (flag) {
        if (typeof nativeEvent !== "window") {
          if (nativeEvent.nativeEvent) {
            return nativeEvent.nativeEvent;
          }
        }
      }
      if ("string" !== typeof nativeEvent) {
        if ("number" !== tmp) {
          if ("bigint" === tmp) {
            return nativeEvent.toString();
          } else if ("function" === tmp) {
            const name = nativeEvent.name;
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
            if (nativeEvent[Symbol.iterator]) {
              const _Array = Array;
              if (!Array.isArray(nativeEvent)) {
                const items = [];
                HermesBuiltin.arraySpread(nativeEvent, 0);
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
              let str2 = nativeEvent;
              if (~arr1.indexOf(nativeEvent)) {
                str2 = "~~~ Circular Reference ~~~";
              }
            } else {
              arr1 = arr1.push(nativeEvent);
              str2 = nativeEvent;
            }
            return str2;
          }
        }
      }
      return nativeEvent;
    }
  });
};