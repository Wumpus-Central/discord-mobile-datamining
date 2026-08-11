// _runtime/13639___core-js_shared__.js
import all from "all";

let closure_0 = require("call")(Function.toString);
if (!all(require("__core-js_shared__").inspectSource)) {
  require("__core-js_shared__").inspectSource = (arg0) => callback(arg0);
}

export { inspectSource as default } from "__core-js_shared__";