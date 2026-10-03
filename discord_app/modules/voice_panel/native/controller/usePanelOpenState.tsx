// === Module 17347: usePanelOpenState ===

// Module 17347 (usePanelOpenState)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11902).VoicePanelModes;
const Constants = fn(1085);
({ ComponentActions: closure_7, Routes: closure_8 } = Constants);
const __initData = { code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}" };
const __initData2 = { code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const __initData3 = { code: "function usePanelOpenStateTsx3(){const{connected}=this.__closure;return{connected:connected.get()};}" };
const __initData4 = { code: "function usePanelOpenStateTsx4(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, connected) => {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(11);
  function doCloseChannel() {
    state = VoicePanelStore.getState();
    return state.closeChannel(closure_0);
  }
  let obj = require("c");
  class O {
    constructor() {
      obj = { connected: closure_3.get() };
      return obj;
    }
  }
  O.__closure = { connected };
  O.__workletHash = 8350408810765;
  O.__initData = __initData;
  class E {
    constructor(arg0, arg1) {
      connected = undefined;
      if (arg1 != null) {
        connected = arg1.connected;
      }
      tmp2 = true === connected && !arg0.connected;
      if (tmp2) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp5 = doCloseChannel;
        tmp6 = obj.runOnJS(doCloseChannel)();
      }
      return;
    }
  }
  let obj2 = require("ReanimatedRexport");
  E.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
  E.__workletHash = 9166012598595;
  E.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(O, E);
  if (cResult[0] === arg0) {
    if (cResult[1] === connected) {
      if (cResult[2] === arg1) {
        if (cResult[3] === arg2) {
          let tmp3 = cResult[4];
          let tmp4 = cResult[5];
        }
        const effect = doCloseChannel.useEffect(tmp3, tmp4);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              obj = closure_1(closure_2[9]);
              return obj.getHistory().location.pathname;
            }
          }
          cResult[6] = S;
        } else {
          class S {
            constructor() {
              obj = closure_1(closure_2[9]);
              return obj.getHistory().location.pathname;
            }
          }
        }
        const tmp9 = connected(doCloseChannel.useState(S), 2);
        const first = tmp9[0];
        closure_6 = tmp9[1];
        if (cResult[7] === arg0) {
          class S {
            constructor() {
              obj = closure_1(closure_2[9]);
              return obj.getHistory().location.pathname;
            }
          }
          const effect1 = obj4.useEffect(I, tmp12);
        }
        class I {
          constructor() {
            obj = closure_1(closure_2[9]);
            closure_0 = obj.addRouteChangeListener((pathname) => {
              if (first !== pathname.pathname) {
                closure_1_6(tmp);
                const obj2 = { path: null };
                const RouteParam = closure_0(4717).RouteParam;
                const obj = closure_0(4704);
                const RouteParam2 = closure_0(4717).RouteParam;
                obj2.path = closure_2_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
                const matchPathResult = obj.matchPath(pathname.pathname, obj2);
                const guildIdResult = RouteParam.guildId();
                if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
                  let tmp2 = null != matchPathResult;
                  if (tmp2) {
                    tmp2 = matchPathResult.params.channelId === closure_0;
                  }
                  if (!tmp2) {
                    closure_1(8987)();
                  }
                }
                obj3 = closure_0(12550);
              }
            });
            return () => {
              closure_0();
            };
          }
        }
        const items = [, ];
        class O {
          constructor() {
            obj = { connected: closure_3.get() };
            return obj;
          }
        }
        items[1] = first;
        cResult[7] = arg0;
        cResult[8] = first;
        cResult[9] = I;
        class E {
          constructor(arg0, arg1) {
            connected = undefined;
            if (arg1 != null) {
              connected = arg1.connected;
            }
            tmp2 = true === connected && !arg0.connected;
            if (tmp2) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[7]);
              tmp5 = doCloseChannel;
              tmp6 = obj.runOnJS(doCloseChannel)();
            }
            return;
          }
        }
        cResult[10] = items;
        tmp12 = items;
      }
    }
  }
  const fn = function f() {
    function componentActionOpen(channelId) {
      let tmp = componentActionOpen === channelId.channelId;
      if (tmp) {
        tmp = componentActionClose.get() !== constants.PANEL;
      }
      if (tmp) {
        dependencyMap(constants.PANEL);
      }
    }
    function componentActionClose() {
      if (connected.get()) {
        if (componentActionClose.get() !== constants.PIP) {
          dependencyMap(tmp5.PIP);
        }
      } else {
        state = first.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = closure_0(1121).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = closure_0(1121).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
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
  let obj3 = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
}) : ((arg0, arg1, arg2, connected) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  function doCloseChannel() {
    state = VoicePanelStore.getState();
    return state.closeChannel(closure_0);
  }
  class O {
    constructor() {
      obj = { connected: closure_3.get() };
      return obj;
    }
  }
  O.__closure = { connected };
  O.__workletHash = 8132120691023;
  O.__initData = __initData3;
  class E {
    constructor(arg0, arg1) {
      connected = undefined;
      if (arg1 != null) {
        connected = arg1.connected;
      }
      tmp2 = true === connected && !arg0.connected;
      if (tmp2) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp5 = doCloseChannel;
        tmp6 = obj.runOnJS(doCloseChannel)();
      }
      return;
    }
  }
  let obj = require("ReanimatedRexport");
  E.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
  E.__workletHash = 176531712901;
  E.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(O, E);
  const items = [arg0, arg1, arg2, connected];
  const effect = doCloseChannel.useEffect(() => {
    function componentActionOpen(channelId) {
      let tmp = componentActionOpen === channelId.channelId;
      if (tmp) {
        tmp = componentActionClose.get() !== constants.PANEL;
      }
      if (tmp) {
        dependencyMap(constants.PANEL);
      }
    }
    function componentActionClose() {
      if (connected.get()) {
        if (componentActionClose.get() !== constants.PIP) {
          dependencyMap(tmp5.PIP);
        }
      } else {
        state = first.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = closure_0(1121).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = closure_0(1121).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  const tmp3 = connected(doCloseChannel.useState(() => closure_1(12557).getHistory().location.pathname), 2);
  const first = tmp3[0];
  closure_6 = tmp3[1];
  const items1 = [arg0, first];
  const effect1 = doCloseChannel.useEffect(() => {
    closure_0 = closure_1(12557).addRouteChangeListener((pathname) => {
      if (first !== pathname.pathname) {
        closure_1_6(tmp);
        const obj2 = { path: null };
        const RouteParam = closure_0(4717).RouteParam;
        const obj = closure_0(4704);
        const RouteParam2 = closure_0(4717).RouteParam;
        obj2.path = closure_2_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj2);
        const guildIdResult = RouteParam.guildId();
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp2 = null != matchPathResult;
          if (tmp2) {
            tmp2 = matchPathResult.params.channelId === closure_0;
          }
          if (!tmp2) {
            closure_1(8987)();
          }
        }
        obj3 = closure_0(12550);
      }
    });
    return () => {
      closure_0();
    };
  }, items1);
});