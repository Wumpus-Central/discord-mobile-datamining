// discord_app/modules/app_channels/useAppChannelRunningApp.tsx
import useFrameRunsInBackgroundDefault from "../frames/useFrameRunsInBackground.tsx";
import FramesStore from "../frames/FramesStore.tsx";

const require = globalThis.__r;

const require = fn;
const ChannelTypes = fn(1087).ChannelTypes;
const getFrameSurfaceForChannel = fn(6755).getFrameSurfaceForChannel;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelRunningApp.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppChannelRunningApp(arg0) {
      _require = arg0;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FramesStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let tmp2 = null;
          if (type.type === ChannelTypes.GUILD_APP) {
            tmp2 = getFrameSurfaceForChannel(tmp);
          }
          let tmp4;
          if (null != tmp2) {
            const first = FramesStore.getFramesForSurface(tmp2)[0];
            let id;
            if (first != null) {
              id = first.id;
            }
            tmp4 = id;
          }
          if (tmp4 == null) {
            tmp4 = null;
          }
          return tmp4;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      const tmp9 = useFrameRunsInBackgroundDefault(stateFromStores);
      if (cResult[4] !== tmp9) {
        let stringResult = null;
        if (tmp9) {
          const intl = tmp(1128).intl;
          stringResult = intl.string(tmp(1128).t["1yCkJY"]);
        }
        cResult[4] = tmp9;
        cResult[5] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === tmp10) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = { frameId: stateFromStores, runningLabel: tmp10 };
      cResult[6] = stateFromStores;
      cResult[7] = tmp10;
      cResult[8] = obj2;
      tmp12 = obj2;
      const tmpResult = require("initialize");
    }
  : function useAppChannelRunningApp(arg0) {
      _require = arg0;
      const items = [FramesStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          let tmp2 = null;
          if (type.type === ChannelTypes.GUILD_APP) {
            tmp2 = getFrameSurfaceForChannel(tmp);
          }
          let tmp4;
          if (null != tmp2) {
            const first = FramesStore.getFramesForSurface(tmp2)[0];
            let id;
            if (first != null) {
              id = first.id;
            }
            tmp4 = id;
          }
          if (tmp4 == null) {
            tmp4 = null;
          }
          return tmp4;
        },
        items1,
      );
      const obj2 = { frameId: stateFromStores, runningLabel: null };
      let stringResult = null;
      if (useFrameRunsInBackgroundDefault(stateFromStores)) {
        const intl = tmp(1128).intl;
        stringResult = intl.string(tmp(1128).t["1yCkJY"]);
      }
      obj2.runningLabel = stringResult;
      return obj2;
    };
