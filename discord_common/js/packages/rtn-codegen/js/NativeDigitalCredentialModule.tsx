// === Module 8643: enforcing ===

// Module 8643 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDigitalCredentialModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDigitalCredentialModule.tsx");

export default enforcing;