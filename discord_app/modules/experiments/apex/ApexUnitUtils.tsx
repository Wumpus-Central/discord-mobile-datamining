// discord_app/modules/experiments/apex/ApexUnitUtils.tsx
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

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
