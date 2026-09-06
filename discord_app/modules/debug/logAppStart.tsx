// === Module 1: logAppStart ===

// Module 1 (logAppStart)
import Logger from "Logger" /* 3 */;
import TTITracker from "TTITracker" /* 9 */;
import size from "module_2" /* 2 */;

size.clear();
new Logger.default("app").log("Initializing app");
const loadIndex = TTITracker.default.loadIndex;
loadIndex.recordStart();
const loadImports = TTITracker.default.loadImports;
loadImports.recordStart();
const result = size.fileFinishedImporting("modules/debug/logAppStart.tsx");

export default null;