// discord_app/modules/stage_channels/useIsOnStartStageScreenStore.tsx
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import StageChannelPermissions from "StageChannelPermissions.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const module_570 = fn(570);
const obj4 = module_570.create(() => ({ isOnStartStageScreen: true }));
const ReactCompilerGating = fn(558);
function setIsOnStartStageScreen(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isOnStartStageScreen }));
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj4;
export { setIsOnStartStageScreen };
export const useUpdateIsOnStartStageScreenEffect = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUpdateIsOnStartStageScreenEffect(id) {
      _require = id;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function o() {
          return SelectedChannelStore.getVoiceChannelId() === id.id;
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== id) {
        class I {
          constructor() {
            return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
          }
        }
        const items2 = [id];
        cResult[4] = id;
        cResult[5] = I;
        cResult[6] = items2;
        let tmp11 = items2;
      } else {
        class I {
          constructor() {
            return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
          }
        }
        tmp11 = cResult[6];
      }
      const tmpResult = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp8, I, tmp11);
      if (stateFromStores1) {
        class I {
          constructor() {
            return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
          }
        }
      }
      stateFromStores1 = tmp13;
      if (cResult[7] === stateFromStores1) {
        class I {
          constructor() {
            return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
          }
        }
        const effect = noop.useEffect(fn2, items3);
      }
      fn2 = function _() {
        if (stateFromStores) {
          if (!stateFromStores1) {
            closure_0 = false;
            ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
          }
        } else {
          closure_0 = stateFromStores1;
          ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
        }
      };
      items3 = [stateFromStores, stateFromStores1];
      cResult[7] = stateFromStores1;
      cResult[8] = stateFromStores;
      cResult[9] = fn2;
      cResult[10] = items3;
      const tmpResult2 = require("initialize");
    }
  : function useUpdateIsOnStartStageScreenEffect(id) {
      _require = id;
      const items = [SelectedChannelStore];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => SelectedChannelStore.getVoiceChannelId() === id.id,
      );
      let obj = require("initialize");
      const items1 = [PermissionStore];
      const items2 = [id];
      const stateFromStores1 = require("initialize").useStateFromStores(
        items1,
        () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0),
        items2,
      );
      let tmp3 = stateFromStores1;
      if (stateFromStores1) {
        tmp3 = !stateFromStores(7485)(id.id);
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
