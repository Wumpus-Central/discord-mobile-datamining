// === Module 16335: MainTabsNavigatorPanelContext ===

// Module 16335 (MainTabsNavigatorPanelContext)
import noop from "module_19" /* 19 */;

const obj = { gesture: null, disallowGesture: null, translateX: null };
const Gesture = fn(6892).Gesture;
obj.gesture = Gesture.Pan();
let ReanimatedHelperTypes = fn(7314);
obj.disallowGesture = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7314);
obj.translateX = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext(obj);
const context1 = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;