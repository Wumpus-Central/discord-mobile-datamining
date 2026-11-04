// === Module 14770: openConjureDevicePermissionSettings ===

// Module 14770 (openConjureDevicePermissionSettings)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ConjureDevicePermissionSettingsSheet from "ConjureDevicePermissionSettingsSheet" /* 14771 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx");

export default function _default(arg0) {
  ({ applicationId, appName } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(14771, dependencyMap.paths), ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY, { applicationId, appName });
};