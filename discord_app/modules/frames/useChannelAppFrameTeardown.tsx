// discord_app/modules/frames/useChannelAppFrameTeardown.tsx
import getFramesManagerDefault from "utils/getFramesManager.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import FramesStore from "FramesStore.tsx";

const require = globalThis.__r;

const require = fn;
const getFrameSurfaceForChannel = fn(8704).getFrameSurfaceForChannel;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      const cResult = id(stateFromStores[7]).c(10);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (cResult[0] !== id) {
        let tmp6 = null;
        if (null != id) {
          tmp6 = getFrameSurfaceForChannel(id);
        }
        cResult[0] = id;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      closure_1 = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, PermissionStore];
        cResult[2] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== id) {
        const fn = function _() {
          const channel = ChannelStore.getChannel(id);
          let canResult = null != channel;
          if (canResult) {
            canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
          }
          return canResult;
        };
        const items1 = [id];
        cResult[3] = id;
        cResult[4] = fn;
        cResult[5] = items1;
        let tmp12 = items1;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      let obj = id(stateFromStores[7]);
      stateFromStores = id(stateFromStores[8]).useStateFromStores(tmp8, tmp11, tmp12);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === tmp5) {
          let tmp14 = cResult[8];
          let tmp15 = cResult[9];
        }
        const effect = noop.useEffect(tmp14, tmp15);
      }
      const fn2 = function h() {
        if (null != closure_1) {
          if (!stateFromStores) {
            const framesForSurface = FramesStore.getFramesForSurface(tmp);
            for (const item10010 of framesForSurface) {
              let obj = getFramesManagerDefault();
              let leaveFrameResult = obj.leaveFrame(item10010.id);
              continue;
            }
          }
        }
      };
      const items2 = [tmp5, stateFromStores];
      cResult[6] = stateFromStores;
      cResult[7] = tmp5;
      cResult[8] = fn2;
      cResult[9] = items2;
      tmp15 = items2;
      tmp14 = fn2;
      const tmpResult = id(stateFromStores[8]);
    }
  : (id) => {
      _require = id;
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      const items = [id];
      const memo = stateFromStores.useMemo(() => {
        let tmp2 = null;
        if (null != closure_0) {
          tmp2 = getFrameSurfaceForChannel(tmp);
        }
        return tmp2;
      }, items);
      const items1 = [ChannelStore, PermissionStore];
      const items2 = [id];
      stateFromStores = require("initialize").useStateFromStores(
        items1,
        () => {
          const channel = ChannelStore.getChannel(id);
          let canResult = null != channel;
          if (canResult) {
            canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
          }
          return canResult;
        },
        items2,
      );
      const items3 = [memo, stateFromStores];
      const effect = stateFromStores.useEffect(() => {
        if (null != memo) {
          if (!stateFromStores) {
            const framesForSurface = FramesStore.getFramesForSurface(tmp);
            for (const item10010 of framesForSurface) {
              let obj = getFramesManagerDefault();
              let leaveFrameResult = obj.leaveFrame(item10010.id);
              continue;
            }
          }
        }
      }, items3);
    };
