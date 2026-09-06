// === Module 512: enforcing ===

// Module 512 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCacheModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCacheModule.tsx");

export default enforcing;