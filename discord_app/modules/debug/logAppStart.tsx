// === Module 1: logAppStart ===

// Module 1 (logAppStart)
import Logger from "Logger" /* 3 */;
import TTITracker from "TTITracker" /* 9 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
size.clear();
new Logger.default("app").log("Initializing app");
const loadIndex = TTITracker.default.loadIndex;
loadIndex.recordStart();
const loadImports = TTITracker.default.loadImports;
loadImports.recordStart();
let size = size_mod;
const result = size.fileFinishedImporting("modules/debug/logAppStart.tsx");

export default null;