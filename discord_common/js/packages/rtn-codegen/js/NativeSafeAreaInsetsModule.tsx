// === Module 1640: enforcing ===

// Module 1640 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeSafeAreaInsetsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx");

export default enforcing;