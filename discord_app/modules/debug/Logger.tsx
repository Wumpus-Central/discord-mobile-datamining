// discord_app/modules/debug/Logger.tsx
import set from "set" /* 2 */;
import reportAll from "report" /* 7 */;
import log from "log" /* 4 */;

let timestamp = Date.now();
log.setLogFn((name) => {
  const substr = [...arguments].slice();
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const result1 = (timestamp - timestamp) / 1000;
  const toFixedResult = result.toFixed(3);
  const toFixedResult1 = result1.toFixed(3);
  const tmp5 = reportAll;
  const items = [{ name, timing: "\u03A3:" + toFixedResult + "s, \u0394:" + toFixedResult1 + "s" }, arg2, ...substr];
  tmp5.report.apply(items);
  const obj = { name, timing: "\u03A3:" + toFixedResult + "s, \u0394:" + toFixedResult1 + "s" };
  const items1 = [name, arg1, arg2, ...substr];
  log.defaultLogFn.apply(items1);
});
let result = set.fileFinishedImporting("modules/debug/Logger.tsx");

export default log.Logger;