// === Module 16534: context ===

// Module 16534 (context)
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;