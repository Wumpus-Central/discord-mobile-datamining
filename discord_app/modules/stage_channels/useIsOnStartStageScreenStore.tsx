// === Module 8395: useIsOnStartStageScreenStore ===

// Module 8395 (useIsOnStartStageScreenStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1965 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
let module_560 = fn(560);
module_560 = module_560.create(() => ({ isOnStartStageScreen: true }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default module_560;
export const setIsOnStartStageScreen = function setIsOnStartStageScreen(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isOnStartStageScreen }));
};
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  _require = id;
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj = require("initialize");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(8396)(id.id);
  }
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!closure_2) {
        let isOnStartStageScreen = false;
        ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
      }
    } else {
      isOnStartStageScreen = closure_2;
      ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
    }
  }, items3);
};