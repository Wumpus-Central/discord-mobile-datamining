// discord_app/modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { Gesture } from "../../../../../_runtime/05599_LegacyBaseButton.js";
import createFakeSharedValue from "../../../reanimated/ReanimatedHelperTypes.tsx";

const obj = { gesture: null, disallowGesture: null, translateX: null };
obj[0] = Gesture.Pan();
obj[1] = createFakeSharedValue.createFakeSharedValue(false);
obj[2] = require("../../../../index.native.tsx");
const context = importAllResult.createContext(obj);
const context1 = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;