// _runtime/metro/00623__.js
const tmp = require("_process") && require("_process").isTypedArray;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsTypedArray");
}

export default _module;