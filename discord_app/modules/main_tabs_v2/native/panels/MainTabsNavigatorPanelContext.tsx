// === Module 15848: context ===

// Module 15848 (context)
import importAllResult from "noop" /* 19 */;
import { Gesture } from "LegacyBaseButton" /* 5661 */;
import createFakeSharedValue from "createFakeSharedValue" /* 7809 */;

const obj = { gesture: null, disallowGesture: null, translateX: null };
obj[0] = Gesture.Pan();
obj[1] = createFakeSharedValue.createFakeSharedValue(false);
obj[2] = require("module_0");
const context = importAllResult.createContext(obj);
const context1 = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;