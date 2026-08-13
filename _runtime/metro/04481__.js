// _runtime/metro/04481__.js
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;