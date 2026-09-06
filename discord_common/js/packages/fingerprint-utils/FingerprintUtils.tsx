// === Module 1255: FingerprintUtils ===

// Module 1255 (FingerprintUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx");

export const extractId = function extractId(fingerprint) {
  return fingerprint.split(".")[0];
};
export const maybeExtractId = function maybeExtractId(installationForTracking) {
  let first = null;
  if (null != installationForTracking) {
    first = installationForTracking.split(".")[0];
  }
  return first;
};