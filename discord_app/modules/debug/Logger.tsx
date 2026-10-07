// === Module 3: Logger ===

// Module 3 (Logger)
import LogAggregatorAll from "LogAggregator" /* 7 */;
import Logger from "logger/Logger" /* 4 */;
import size from "module_2" /* 2 */;

let timestamp = Date.now();
Logger.setLogFn((name, arg1, arg2) => {
  const substr = [...arguments].slice();
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const result1 = (timestamp - timestamp) / 1000;
  const toFixedResult = result.toFixed(3);
  const toFixedResult1 = result1.toFixed(3);
  const tmp5 = LogAggregatorAll;
  const items = [{ name, timing: "\u03A3:" + toFixedResult + "s, \u0394:" + toFixedResult1 + "s" }, arg2, ...substr];
  tmp5.report.apply(items);
  const obj = { name, timing: "\u03A3:" + toFixedResult + "s, \u0394:" + toFixedResult1 + "s" };
  const items1 = [name, arg1, arg2, ...substr];
  Logger.defaultLogFn.apply(items1);
});
let result = size.fileFinishedImporting("modules/debug/Logger.tsx");

export default Logger.Logger;