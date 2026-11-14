// === Module 1253: ApexUnitUtils ===

// Module 1253 (ApexUnitUtils)
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexUnitUtils.tsx");

export function getUnitId(installation, guildId) {
  if ("guild" === installation) {
    return guildId.guildId;
  } else if ("user" === installation) {
    return AuthenticationStore.getId();
  } else if ("installation" === installation) {
    let str2 = FingerprintUtils.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    GlobalUtils.assertNever(installation);
  }
}