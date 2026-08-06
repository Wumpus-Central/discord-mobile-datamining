// discord_app/modules/main_tabs_v2/RootNavigationRef.native.tsx
import createStandardNavigationFactories from "createStandardNavigationFactories";

createStandardNavigationFactories = createStandardNavigationFactories.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return createStandardNavigationFactories;
}