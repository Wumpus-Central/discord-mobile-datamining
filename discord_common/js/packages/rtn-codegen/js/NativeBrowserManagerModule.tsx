// === Module 4411: enforcing ===

// Module 4411 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeBrowserManagerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");

export default enforcing;
export const BrowserType = { SAFARI: 0, [0]: "SAFARI", IN_APP: 1, [1]: "IN_APP", CHROME: 2, [2]: "CHROME" };