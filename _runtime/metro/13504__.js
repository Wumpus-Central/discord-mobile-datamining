
export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13505) /* all */("Symbol");
  let tmpResultResult = require(13503) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13506) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13506) /* call */;
  }
  return tmpResultResult;
});