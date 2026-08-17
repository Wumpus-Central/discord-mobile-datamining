// discord_app/modules/custom_status/utils/useCustomStatusActivityForUser.tsx
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "sortActivity" /* 4559 */;
import { ActivityTypes } from "ME" /* 676 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { _activityFromSetting } from "userSettingToActivity.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _initialize.useStateFromStores(items, () => closure_1_2.getId() === closure_0);
  const obj = _initialize;
  const customStatusActivity = __activityFromSetting.useCustomStatusActivity();
  const obj2 = __activityFromSetting;
  const items1 = [closure_3];
  let stateFromStores1 = _initialize.useStateFromStores(items1, () => closure_1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};