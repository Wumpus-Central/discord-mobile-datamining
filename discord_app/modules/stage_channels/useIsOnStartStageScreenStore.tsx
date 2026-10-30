// === Module 7934: useIsOnStartStageScreenStore ===

// Module 7934 (useIsOnStartStageScreenStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1260 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4866 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;

const require = globalThis.__r;

require = fn;
const module_560 = fn(560);
const obj3 = module_560.create(() => ({ isOnStartStageScreen: true }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj3;
export function setIsOnStartStageScreen(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isOnStartStageScreen }));
}
export function useUpdateIsOnStartStageScreenEffect(id) {
  _require = id;
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj = require("initialize");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(7935)(id.id);
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
}