// discord_app/modules/custom_status/utils/useCustomStatusActivityForUser.tsx
import fetchFingerprint from "fetchFingerprint";
import sortActivity from "sortActivity";
import { ActivityTypes } from "ME";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { _activityFromSetting } from "userSettingToActivity.tsx";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_2.getId() === closure_0);
  const obj = _initialize;
  const customStatusActivity = __activityFromSetting.useCustomStatusActivity();
  const obj2 = __activityFromSetting;
  const items1 = [sortActivity];
  let stateFromStores1 = _initialize.useStateFromStores(items1, () => outer1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};