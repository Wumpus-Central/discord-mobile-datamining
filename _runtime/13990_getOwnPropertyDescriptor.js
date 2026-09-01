// _runtime/13990_getOwnPropertyDescriptor.js
let propertyIsEnumerable = {}.propertyIsEnumerable;
if (!getOwnPropertyDescriptor) {
  if (getOwnPropertyDescriptor) {
    propertyIsEnumerable = function propertyIsEnumerable(SymbolResult) {
      const tmp = getOwnPropertyDescriptor(this, SymbolResult);
      return tmp && tmp.enumerable;
    };
  }
  arg5.f = propertyIsEnumerable;
} else {
  const call = propertyIsEnumerable.call;
  if (typeof call === "unknown") {
    let propertyIsEnumerableResult = require("../discord_app/modules/debug/logAppStart.tsx");
  } else {
    propertyIsEnumerableResult = call(obj, 1);
  }
  obj = { 1: 2 };
}
