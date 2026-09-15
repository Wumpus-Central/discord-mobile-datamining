// === Module 8516: useIsOnStartStageScreenStore ===

// Module 8516 (useIsOnStartStageScreenStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1966 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

const require = globalThis.__r;

require = fn;
const module_560 = fn(560);
const obj3 = module_560.create(() => ({ isOnStartStageScreen: true }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj3;
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
    tmp3 = !stateFromStores(8517)(id.id);
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