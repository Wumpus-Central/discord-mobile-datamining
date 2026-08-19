// === Module 1: ? ===

// Module 1
import timestamp from "timestamp" /* 3 */;
import serialize from "serialize" /* 9 */;
import obj132 from "obj132" /* 2 */;

obj132.clear();
new timestamp.default("app").log("Initializing app");
const loadIndex = serialize.default.loadIndex;
loadIndex.recordStart();
const loadImports = serialize.default.loadImports;
loadImports.recordStart();
const result = obj132.fileFinishedImporting("modules/debug/logAppStart.tsx");

export default null;