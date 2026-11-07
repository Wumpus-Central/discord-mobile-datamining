// === Module 14794: openConjureDevicePermissionSettings ===

// Module 14794 (openConjureDevicePermissionSettings)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14795 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  ({ applicationId, appName } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(14795, dependencyMap.paths), ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};