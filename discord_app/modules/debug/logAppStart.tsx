// === Module 1: ? ===

// Module 1
import timestamp from "timestamp" /* 3 */;
import serialize from "serialize" /* 9 */;
import set from "set" /* 2 */;

set = set.clear();
new timestamp.default("app").log("Initializing app");
const loadIndex = serialize.default.loadIndex;
loadIndex.recordStart();
const loadImports = serialize.default.loadImports;
loadImports.recordStart();
const result = set.fileFinishedImporting("modules/debug/logAppStart.tsx");

export default null;