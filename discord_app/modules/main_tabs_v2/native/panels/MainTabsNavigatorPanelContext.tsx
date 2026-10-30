// === Module 12056: MainTabsNavigatorPanelContext ===

// Module 12056 (MainTabsNavigatorPanelContext)
import noop from "module_19" /* 19 */;

const obj = { gesture: null, disallowGesture: null, edgeSwipeOnly: null, translateX: null };
const Gesture = fn(5298).Gesture;
obj.gesture = Gesture.Pan();
let ReanimatedHelperTypes = fn(7236);
obj.disallowGesture = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7236);
obj.edgeSwipeOnly = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7236);
obj.translateX = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext(obj);
const context1 = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;