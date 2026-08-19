// === Module 13337: clientIdToActivateDevicePlatform ===

// Module 13337 (clientIdToActivateDevicePlatform)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import set from "set" /* 9788 */;

const PlatformTypes = ME.PlatformTypes;
const result = obj132.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === set.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === set.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};