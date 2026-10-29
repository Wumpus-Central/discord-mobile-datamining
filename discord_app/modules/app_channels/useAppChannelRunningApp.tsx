// discord_app/modules/app_channels/useAppChannelRunningApp.tsx
import FramesStore from "../frames/FramesStore.tsx";

const require = globalThis.__r;

const require = fn;
const ChannelTypes = fn(1084).ChannelTypes;
const FramesConstants = fn(6834);
({ asLaunched: hasOwnProperty, getFrameSurfaceForChannel: metroRequire } = FramesConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelRunningApp.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppChannelRunningApp(arg0) {
      _require = arg0;
      const cResult = require("c").c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FramesStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          let tmp2 = null;
          if (type.type === ChannelTypes.GUILD_APP) {
            tmp2 = timestampProducer(tmp);
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
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      const tmp9 = stateFromStores(14331)(stateFromStores);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [FramesStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== stateFromStores) {
        class F {
          constructor() {
            tmp = asLaunched(closure_3.getFrame(closure_1));
            data = undefined;
            if (tmp != null) {
              data = tmp.data;
            }
            audible = undefined;
            if (data != null) {
              audible = data.audible;
            }
            obj = { audible: true === audible, userMuted: null };
            userMuted = undefined;
            if (data != null) {
              userMuted = data.userMuted;
            }
            obj.userMuted = true === userMuted;
            return obj;
          }
        }
        const items3 = [stateFromStores];
        cResult[5] = stateFromStores;
        cResult[6] = F;
        cResult[7] = items3;
        let tmp13 = items3;
      } else {
        class F {
          constructor() {
            tmp = asLaunched(closure_3.getFrame(closure_1));
            data = undefined;
            if (tmp != null) {
              data = tmp.data;
            }
            audible = undefined;
            if (data != null) {
              audible = data.audible;
            }
            obj = { audible: true === audible, userMuted: null };
            userMuted = undefined;
            if (data != null) {
              userMuted = data.userMuted;
            }
            obj.userMuted = true === userMuted;
            return obj;
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult = require("initialize");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp10, F, tmp13);
      ({ audible, userMuted } = stateFromStoresObject);
      if (cResult[8] !== tmp9) {
        class F {
          constructor() {
            tmp = asLaunched(closure_3.getFrame(closure_1));
            data = undefined;
            if (tmp != null) {
              data = tmp.data;
            }
            audible = undefined;
            if (data != null) {
              audible = data.audible;
            }
            obj = { audible: true === audible, userMuted: null };
            userMuted = undefined;
            if (data != null) {
              userMuted = data.userMuted;
            }
            obj.userMuted = true === userMuted;
            return obj;
          }
        }
        if (tmp9) {
          class F {
            constructor() {
              tmp = asLaunched(closure_3.getFrame(closure_1));
              data = undefined;
              if (tmp != null) {
                data = tmp.data;
              }
              audible = undefined;
              if (data != null) {
                audible = data.audible;
              }
              obj = { audible: true === audible, userMuted: null };
              userMuted = undefined;
              if (data != null) {
                userMuted = data.userMuted;
              }
              obj.userMuted = true === userMuted;
              return obj;
            }
          }
          const stringResult = obj4.string(tmp(1125).t["1yCkJY"]);
        }
        cResult[8] = tmp9;
        cResult[9] = stringResult;
      } else {
        class F {
          constructor() {
            tmp = asLaunched(closure_3.getFrame(closure_1));
            data = undefined;
            if (tmp != null) {
              data = tmp.data;
            }
            audible = undefined;
            if (data != null) {
              audible = data.audible;
            }
            obj = { audible: true === audible, userMuted: null };
            userMuted = undefined;
            if (data != null) {
              userMuted = data.userMuted;
            }
            obj.userMuted = true === userMuted;
            return obj;
          }
        }
      }
      if (cResult[10] === audible) {
        class F {
          constructor() {
            tmp = asLaunched(closure_3.getFrame(closure_1));
            data = undefined;
            if (tmp != null) {
              data = tmp.data;
            }
            audible = undefined;
            if (data != null) {
              audible = data.audible;
            }
            obj = { audible: true === audible, userMuted: null };
            userMuted = undefined;
            if (data != null) {
              userMuted = data.userMuted;
            }
            obj.userMuted = true === userMuted;
            return obj;
          }
        }
      }
      cResult[10] = audible;
      cResult[11] = stateFromStores;
      cResult[12] = tmp15;
      cResult[13] = userMuted;
      cResult[14] = { frameId: stateFromStores, runningLabel: tmp15, audible, userMuted };
      const obj2 = { frameId: stateFromStores, runningLabel: tmp15, audible, userMuted };
      const tmpResult2 = require("initialize");
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
            tmp2 = timestampProducer(tmp);
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
      let obj = require("initialize");
      let tmp4 = stateFromStores(14331)(stateFromStores);
      const items2 = [FramesStore];
      const items3 = [stateFromStores];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items2,
        () => {
          const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
          let data;
          if (tmp != null) {
            data = tmp.data;
          }
          let audible;
          if (data != null) {
            audible = data.audible;
          }
          const obj = { audible: true === audible, userMuted: null };
          let userMuted;
          if (data != null) {
            userMuted = data.userMuted;
          }
          obj.userMuted = true === userMuted;
          return obj;
        },
        items3,
      );
      const obj3 = { frameId: stateFromStores, runningLabel: null, audible: null, userMuted: null };
      let stringResult = null;
      ({ audible, userMuted } = stateFromStoresObject);
      if (tmp4) {
        const intl = tmp(1125).intl;
        stringResult = intl.string(tmp(1125).t["1yCkJY"]);
      }
      obj3.runningLabel = stringResult;
      obj3.audible = audible;
      obj3.userMuted = userMuted;
      return obj3;
    };
