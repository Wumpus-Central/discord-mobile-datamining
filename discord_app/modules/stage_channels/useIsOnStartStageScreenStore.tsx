// discord_app/modules/stage_channels/useIsOnStartStageScreenStore.tsx
import noop from "noop";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import keys from "keys";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const require = arg1;
keys = keys.create(() => ({ isOnStartStageScreen: true }));
const result = require("handleConnectionOpen").fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default keys;
export const setIsOnStartStageScreen = function setIsOnStartStageScreen(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_6.setState({ isOnStartStageScreen: c0 }));
};
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  const _require = id;
  const items = [handleConnectionOpen];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_5.getVoiceChannelId() === id.id);
  let obj = _initialize;
  const items1 = [getUncachedChannelPermissions];
  const items2 = [id];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => outer1_4.can(id(tmp3[6]).MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(7699)(id.id);
  }
  const dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!tmp) {
        let c0 = false;
        id(tmp3[4]).batchUpdates(() => outer1_6.setState({ isOnStartStageScreen: c0 }));
        const obj2 = id(tmp3[4]);
      }
    } else {
      c0 = tmp;
      id(tmp3[4]).batchUpdates(() => outer1_6.setState({ isOnStartStageScreen: c0 }));
      const obj = id(tmp3[4]);
    }
  }, items3);
};