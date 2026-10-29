// discord_app/modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureDevicePermissionSettingsSheet from "native/ConjureDevicePermissionSettingsSheet.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/conjure/device_permissions/openConjureDevicePermissionSettings.native.tsx",
);

export default function _default(arg0) {
  ({ applicationId, appName } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(
    asyncRequireImpl(14475, dependencyMap.paths),
    ConjureDevicePermissionSettingsSheet.CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY,
    { applicationId, appName },
  );
}
