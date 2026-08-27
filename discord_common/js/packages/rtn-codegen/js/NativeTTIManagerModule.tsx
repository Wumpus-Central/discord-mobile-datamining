// === Module 4306: enforcing ===

// Module 4306 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTTIManagerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx");

export default enforcing;