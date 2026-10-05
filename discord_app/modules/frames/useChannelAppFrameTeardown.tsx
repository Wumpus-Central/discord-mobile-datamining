// discord_app/modules/frames/useChannelAppFrameTeardown.tsx
import Constants from "../../Constants.tsx";
import FramesConstants from "FramesConstants.tsx";
import getFramesManagerDefault from "utils/getFramesManager.native.tsx";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import FramesStore from "FramesStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, id;

const getFrameSurfaceForChannel = FramesConstants.getFrameSurfaceForChannel;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp5;
      let tmp8;
      const tmp = id;
      let obj = id(stateFromStores[7]);
      const cResult = obj.c(10);
      id = undefined;
      const tmp2 = stateFromStores;
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
        tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      let closure_1 = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, PermissionStore];
        cResult[2] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== id) {
        const fn = function _() {
          const channel = ChannelStore.getChannel(id);
          const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
          return canResult;
        };
        const items1 = [id];
        cResult[3] = id;
        cResult[4] = fn;
        cResult[5] = items1;
        tmp12 = items1;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult = tmp(tmp2[8]);
      stateFromStores = tmpResult.useStateFromStores(tmp8, tmp11, tmp12);
      if (cResult[6] === stateFromStores) {
        let tmp14;
        let tmp15;
        if (cResult[7] === tmp5) {
          tmp14 = cResult[8];
          tmp15 = cResult[9];
        }
        const effect = react.useEffect(tmp14, tmp15);
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
    }
  : (id) => {
      let stateFromStores;
      _require = id;
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      const items = [id];
      const memo = stateFromStores.useMemo(() => {
        let tmp2 = null;
        if (null != id) {
          tmp2 = getFrameSurfaceForChannel(tmp);
        }
        return tmp2;
      }, items);
      let obj = require("get initialized");
      const items1 = [ChannelStore, PermissionStore];
      const items2 = [id];
      stateFromStores = obj.useStateFromStores(
        items1,
        () => {
          const channel = ChannelStore.getChannel(id);
          const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
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
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default tmp2;
