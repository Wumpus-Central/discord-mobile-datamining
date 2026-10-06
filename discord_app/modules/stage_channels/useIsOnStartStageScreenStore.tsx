// === Module 8104: useIsOnStartStageScreenStore ===

// Module 8104 (useIsOnStartStageScreenStore)
import react_native from "react-native" /* 1259 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f96456 = () => {
  obj = { isOnStartStageScreen };
  return state.setState(obj);
};
let obj = module_570.create(() => ({ isOnStartStageScreen: true }));
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_2;
  let first;
  let fn2;
  let items3;
  let tmp11;
  let tmp6;
  let tmp8;
  _require = id;
  obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return SelectedChannelStore.getVoiceChannelId() === id.id;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== id) {
    class O {
      constructor() {
        return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id);
      }
    }
    const items2 = [id];
    cResult[4] = id;
    cResult[5] = O;
    cResult[6] = items2;
    tmp11 = items2;
  } else {
    class O {
      constructor() {
        return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id);
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, O, tmp11);
  const tmp13 = stateFromStores1 && !stateFromStores(8105)(id.id);
  dependencyMap = tmp13;
  if (cResult[7] === tmp13) {
    class O {
      constructor() {
        return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id);
      }
    }
    const effect = react.useEffect(fn2, items3);
  }
  fn2 = function l() {
    if (stateFromStores) {
      if (!closure_2) {
        let c0 = false;
        const obj2 = react_native;
        obj2.batchUpdates(f96456);
      }
    } else {
      let closure_0 = closure_2;
      obj = react_native;
      obj.batchUpdates(f96456);
    }
  };
  items3 = [stateFromStores, tmp13];
  cResult[7] = tmp13;
  cResult[8] = stateFromStores;
  cResult[9] = fn2;
  cResult[10] = items3;
}) : ((id) => {
  let closure_2;
  _require = id;
  obj = require("get initialized");
  const items = [SelectedChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj2 = require("get initialized");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  const tmp3 = stateFromStores1 && !stateFromStores(8105)(id.id);
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = react.useEffect(() => {
    let state;
    if (stateFromStores) {
      if (!closure_2) {
        let c0 = false;
        const obj2 = react_native;
        obj2.batchUpdates(f96456);
      }
    } else {
      let closure_0 = closure_2;
      obj = react_native;
      obj.batchUpdates(f96456);
    }
  }, items3);
});
function setIsOnStartStageScreen(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(f96456);
}
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj;
export { setIsOnStartStageScreen };
export const useUpdateIsOnStartStageScreenEffect = tmp3;