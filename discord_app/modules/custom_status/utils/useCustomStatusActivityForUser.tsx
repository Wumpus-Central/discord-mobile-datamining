// discord_app/modules/custom_status/utils/useCustomStatusActivityForUser.tsx
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import sortActivity from "../../../stores/PresenceStore.tsx";
import { ActivityTypes } from "../../../Constants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { _activityFromSetting } from "userSettingToActivity.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.getId() === closure_0);
  const obj = initialize;
  const customStatusActivity = require("userSettingToActivity.tsx").useCustomStatusActivity();
  const obj2 = _activityFromSetting;
  const items1 = [closure_3];
  let stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => closure_1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};