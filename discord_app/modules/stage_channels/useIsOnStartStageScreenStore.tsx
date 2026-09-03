// === Module 8685: setIsOnStartStageScreen ===

// Module 8685 (setIsOnStartStageScreen)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getUncachedChannelPermissions" /* 4120 */;
import closure_5 from "handleConnectionOpen" /* 1980 */;
import keys from "keys" /* 641 */;

const require = arg1;
keys = keys.create(() => ({ isOnStartStageScreen: true }));
const result = require("set").fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default keys;
export const setIsOnStartStageScreen = function setIsOnStartStageScreen(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => closure_1_6.setState({ isOnStartStageScreen: closure_0 }));
};
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  const _require = id;
  const items = [closure_5];
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_5.getVoiceChannelId() === id.id);
  let obj = _require(586);
  const items1 = [closure_4];
  const items2 = [id];
  const stateFromStores1 = _require(586).useStateFromStores(items1, () => closure_1_4.can(id(1394).MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(8686)(id.id);
  }
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!tmp) {
        id = false;
        id(702).batchUpdates(() => closure_1_6.setState({ isOnStartStageScreen: closure_0 }));
        const obj2 = id(702);
      }
    } else {
      id = tmp;
      id(702).batchUpdates(() => closure_1_6.setState({ isOnStartStageScreen: closure_0 }));
      const obj = id(702);
    }
  }, items3);
};