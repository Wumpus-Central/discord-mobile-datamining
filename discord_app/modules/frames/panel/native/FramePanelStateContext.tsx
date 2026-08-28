// === Module 16552: context ===

// Module 16552 (context)
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;