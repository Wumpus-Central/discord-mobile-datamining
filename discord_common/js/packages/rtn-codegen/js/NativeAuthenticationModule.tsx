// === Module 15353: enforcing ===

// Module 15353 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAuthenticationModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAuthenticationModule.tsx");

export default enforcing;