// discord_app/modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import react from "../../../../../_runtime/00019_react.js";
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "../../../reanimated/ReanimatedHelperTypes.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Gesture;
let ReanimatedHelperTypes;
const obj = {
  gesture: Gesture.Pan(),
  disallowGesture: ReanimatedHelperTypes.createFakeSharedValue(false),
  translateX: ReanimatedHelperTypes.createFakeSharedValue(0),
};
Gesture = LegacyBaseButton.Gesture;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext(obj);
const context1 = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;
