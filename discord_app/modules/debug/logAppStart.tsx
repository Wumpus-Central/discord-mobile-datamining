// discord_app/modules/debug/logAppStart.tsx
import Logger from "Logger.tsx";
import TTITracker from "../tti_analytics/TTITracker.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let size = size_mod;
size.clear();
const _default = new Logger.default("app");
_default.log("Initializing app");
const loadIndex = TTITracker.default.loadIndex;
loadIndex.recordStart();
const loadImports = TTITracker.default.loadImports;
loadImports.recordStart();
size = size_mod;
const result = size.fileFinishedImporting("modules/debug/logAppStart.tsx");

export default null;
