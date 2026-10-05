// discord_app/modules/voice_panel/native/controller/usePanelOpenState.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import VoicePanelStore from "../../VoicePanelStore.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0, dependencyMap, importDefault, pathname;

let metroImportAll;
let metroImportDefault;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ ComponentActions: metroImportDefault, Routes: metroImportAll } = Constants);
const __initData = {
  code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}",
};
const __initData2 = {
  code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}",
};
const __initData3 = {
  code: "function usePanelOpenStateTsx3(){const{connected}=this.__closure;return{connected:connected.get()};}",
};
const __initData4 = {
  code: "function usePanelOpenStateTsx4(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, connected) => {
      let closure_1;
      let closure_2;
      let constants2;
      let tmp12;
      _require = arg0;
      importDefault = arg1;
      dependencyMap = arg2;
      let obj = require("react");
      const cResult = obj.c(11);
      function doCloseChannel() {
        const state = VoicePanelStore.getState();
        return state.closeChannel(closure_0);
      }
      let obj2 = require("ReanimatedRexport");
      class O {
        constructor() {
          const obj = { connected: connected.get() };
          return obj;
        }
      }
      O.__closure = { connected };
      O.__workletHash = 8350408810765;
      O.__initData = __initData;
      class E {
        constructor(connected, connected2) {
          let connected1;
          connected = connected.connected;
          if (connected2 != null) {
            connected1 = connected2.connected;
          }
          const tmp2 = true === connected1 && !connected;
          if (tmp2) {
            const obj = ReanimatedRexport;
            obj.runOnJS(doCloseChannel)();
          }
        }
      }
      E.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
      E.__workletHash = 9166012598595;
      E.__initData = __initData2;
      ({ runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel });
      const animatedReaction = obj2.useAnimatedReaction(O, E);
      if (cResult[0] === arg0) {
        if (cResult[1] === connected) {
          if (cResult[2] === arg1) {
            let tmp3;
            let tmp4;
            if (cResult[3] === arg2) {
              tmp3 = cResult[4];
              tmp4 = cResult[5];
            }
            const effect = doCloseChannel.useEffect(tmp3, tmp4);
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor() {
                  const obj = closure_1(closure_2[9]);
                  return obj.getHistory().location.pathname;
                }
              }
              cResult[6] = S;
            } else {
              class S {
                constructor() {
                  const obj = closure_1(closure_2[9]);
                  return obj.getHistory().location.pathname;
                }
              }
            }
            const tmp9 = connected(doCloseChannel.useState(S), 2);
            const first = tmp9[0];
            let closure_6 = tmp9[1];
            if (cResult[7] === arg0) {
              class S {
                constructor() {
                  const obj = closure_1(closure_2[9]);
                  return obj.getHistory().location.pathname;
                }
              }
              const effect1 = obj4.useEffect(I, tmp12);
            }
            class I {
              constructor() {
                let obj = closure_1(closure_2[9]);
                closure_0 = obj.addRouteChangeListener((pathname) => {
                  let CHANNEL;
                  let RouteParam2;
                  let guildIdResult;
                  if (first !== pathname.pathname) {
                    closure_1_6(tmp);
                    const obj = { path: CHANNEL(guildIdResult, RouteParam2.channelId()) };
                    const matchPath = closure_0(closure_2[10]).matchPath;
                    pathname = pathname.pathname;
                    CHANNEL = constants2.CHANNEL;
                    closure_0(closure_2[10]);
                    const RouteParam = closure_0(closure_2[11]).RouteParam;
                    guildIdResult = RouteParam.guildId();
                    RouteParam2 = closure_0(closure_2[11]).RouteParam;
                    const matchPathResult = matchPath(pathname, obj);
                    const obj2 = closure_0(closure_2[12]);
                    if (null == obj2.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
                      const tmp2 = null != matchPathResult && matchPathResult.params.channelId === closure_0;
                      if (!tmp2) {
                        closure_1(closure_2[13])();
                      }
                    }
                  }
                });
                return () => {
                  closure_0();
                };
              }
            }
            const items = [,];
            class O {
              constructor() {
                const obj = { connected: connected.get() };
                return obj;
              }
            }
            items[1] = first;
            cResult[7] = arg0;
            cResult[8] = first;
            cResult[9] = I;
            class E {
              constructor(connected, connected2) {
                let connected1;
                connected = connected.connected;
                if (connected2 != null) {
                  connected1 = connected2.connected;
                }
                const tmp2 = true === connected1 && !connected;
                if (tmp2) {
                  const obj = ReanimatedRexport;
                  obj.runOnJS(doCloseChannel)();
                }
              }
            }
            cResult[10] = items;
            tmp12 = items;
          }
        }
      }
      const fn = function f() {
        function componentActionOpen(channelId) {
          const tmp = componentActionOpen === channelId.channelId && componentActionClose.get() !== constants.PANEL;
          if (tmp) {
            closure_1_2(constants.PANEL);
          }
        }
        function componentActionClose() {
          if (connected.get()) {
            if (componentActionClose.get() !== constants.PIP) {
              closure_1_2(tmp5.PIP);
            }
          } else {
            const state = first.getState();
            state.closeChannel(componentActionOpen);
          }
        }
        let ComponentDispatch = closure_0(closure_2[8]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
        let ComponentDispatch2 = closure_0(closure_2[8]).ComponentDispatch;
        const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
        return () => {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(metroImportDefault.VOICE_PANEL_OPEN, componentActionOpen);
          const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch2.unsubscribe(metroImportDefault.VOICE_PANEL_CLOSE, componentActionClose);
        };
      };
      const items1 = [arg0, arg1, arg2, connected];
      cResult[0] = arg0;
      cResult[1] = connected;
      cResult[2] = arg1;
      cResult[3] = arg2;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp4 = items1;
      tmp3 = fn;
    }
  : (arg0, arg1, arg2, connected) => {
      let closure_2;
      let constants2;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      function doCloseChannel() {
        const state = VoicePanelStore.getState();
        return state.closeChannel(closure_0);
      }
      let obj = require("ReanimatedRexport");
      class O {
        constructor() {
          const obj = { connected: connected.get() };
          return obj;
        }
      }
      O.__closure = { connected };
      O.__workletHash = 8132120691023;
      O.__initData = __initData3;
      class E {
        constructor(connected, connected2) {
          let connected1;
          connected = connected.connected;
          if (connected2 != null) {
            connected1 = connected2.connected;
          }
          const tmp2 = true === connected1 && !connected;
          if (tmp2) {
            const obj = ReanimatedRexport;
            obj.runOnJS(doCloseChannel)();
          }
        }
      }
      let obj2 = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
      E.__closure = obj2;
      E.__workletHash = 176531712901;
      E.__initData = __initData4;
      const animatedReaction = obj.useAnimatedReaction(O, E);
      const items = [arg0, arg1, arg2, connected];
      const effect = doCloseChannel.useEffect(() => {
        function componentActionOpen(channelId) {
          const tmp = componentActionOpen === channelId.channelId && componentActionClose.get() !== constants.PANEL;
          if (tmp) {
            closure_1_2(constants.PANEL);
          }
        }
        function componentActionClose() {
          if (connected.get()) {
            if (componentActionClose.get() !== constants.PIP) {
              closure_1_2(tmp5.PIP);
            }
          } else {
            const state = first.getState();
            state.closeChannel(componentActionOpen);
          }
        }
        let ComponentDispatch = closure_0(closure_2[8]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
        let ComponentDispatch2 = closure_0(closure_2[8]).ComponentDispatch;
        const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
        return () => {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(metroImportDefault.VOICE_PANEL_OPEN, componentActionOpen);
          const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch2.unsubscribe(metroImportDefault.VOICE_PANEL_CLOSE, componentActionClose);
        };
      }, items);
      const tmp3 = connected(
        doCloseChannel.useState(() => {
          const obj = closure_1(closure_2[9]);
          return obj.getHistory().location.pathname;
        }),
        2,
      );
      const first = tmp3[0];
      let closure_6 = tmp3[1];
      const items1 = [arg0, first];
      const effect1 = doCloseChannel.useEffect(() => {
        let obj = closure_1(closure_2[9]);
        closure_0 = obj.addRouteChangeListener((pathname) => {
          let CHANNEL;
          let RouteParam2;
          let guildIdResult;
          if (first !== pathname.pathname) {
            closure_1_6(tmp);
            const obj = { path: CHANNEL(guildIdResult, RouteParam2.channelId()) };
            const matchPath = closure_0(closure_2[10]).matchPath;
            pathname = pathname.pathname;
            CHANNEL = constants2.CHANNEL;
            closure_0(closure_2[10]);
            const RouteParam = closure_0(closure_2[11]).RouteParam;
            guildIdResult = RouteParam.guildId();
            RouteParam2 = closure_0(closure_2[11]).RouteParam;
            const matchPathResult = matchPath(pathname, obj);
            const obj2 = closure_0(closure_2[12]);
            if (null == obj2.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
              const tmp2 = null != matchPathResult && matchPathResult.params.channelId === closure_0;
              if (!tmp2) {
                closure_1(closure_2[13])();
              }
            }
          }
        });
        return () => {
          closure_0();
        };
      }, items1);
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default tmp3;
