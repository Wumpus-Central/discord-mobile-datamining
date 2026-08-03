// === Module 15006: context ===

// Module 15006 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ current: "r" });
const result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadGestureRefContext.tsx");

export default context;