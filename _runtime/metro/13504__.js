// _runtime/metro/13504__.js

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require("../13505_all.js") /* all */("Symbol");
  let tmpResultResult = require("../13503_all.js") /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require("../13506_call.js") /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require("../13506_call.js") /* call */;
  }
  return tmpResultResult;
});