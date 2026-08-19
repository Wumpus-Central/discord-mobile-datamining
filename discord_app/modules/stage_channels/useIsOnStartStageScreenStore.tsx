// discord_app/modules/stage_channels/useIsOnStartStageScreenStore.tsx
import noop from "../../../_runtime/00019_noop.js";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import keys from "../../../_runtime/00644_keys.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
keys = keys.create(() => ({ isOnStartStageScreen: true }));
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default keys;
export const setIsOnStartStageScreen = function setIsOnStartStageScreen(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_6.setState({ isOnStartStageScreen: closure_0 }));
};
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  const _require = id;
  const items = [closure_5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_5.getVoiceChannelId() === id.id);
  let obj = initialize;
  const items1 = [closure_4];
  const items2 = [id];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => closure_1_4.can(id(1399).MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(8060)(id.id);
  }
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!dependencyMap) {
        id = false;
        id(705).batchUpdates(() => closure_1_6.setState({ isOnStartStageScreen: closure_0 }));
        const obj2 = id(705);
      }
    } else {
      id = dependencyMap;
      id(705).batchUpdates(() => closure_1_6.setState({ isOnStartStageScreen: closure_0 }));
      const obj = id(705);
    }
  }, items3);
};