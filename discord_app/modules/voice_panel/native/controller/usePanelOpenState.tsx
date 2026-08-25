// === Module 16436: usePanelOpenState ===

// Module 16436 (usePanelOpenState)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "withEqualityFn" /* 4616 */;
import { VoicePanelModes } from "VoicePanelModes" /* 11841 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ ComponentActions: error, Routes: closure_8 } = ME);
let closure_9 = { code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}" };
let closure_10 = { code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, connected) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const callback = connected;
  function doCloseChannel() {
    const state = first.getState();
    return state.closeChannel(closure_0);
  }
  let obj = _require(4120);
  const fn = function f() {
    return { connected: connected.get() };
  };
  fn.__closure = { connected };
  fn.__workletHash = 8350408810765;
  fn.__initData = closure_9;
  class O {
    constructor(arg0, arg1) {
      connected = undefined;
      if (arg1 != null) {
        connected = arg1.connected;
      }
      tmp2 = true === connected && !arg0.connected;
      if (tmp2) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[5]);
        tmp5 = doCloseChannel;
        tmp6 = obj.runOnJS(doCloseChannel)();
      }
      return;
    }
  }
  obj = { runOnJS: _require(4120).runOnJS, doCloseChannel };
  O.__closure = obj;
  O.__workletHash = 9166012598595;
  O.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, O);
  const items = [arg0, arg1, arg2, connected];
  const effect = doCloseChannel.useEffect(() => {
    function componentActionOpen(channelId) {
      let tmp = componentActionOpen === channelId.channelId;
      if (tmp) {
        tmp = componentActionClose.get() !== closure_1_6.PANEL;
      }
      if (tmp) {
        dependencyMap(closure_1_6.PANEL);
      }
    }
    function componentActionClose() {
      if (closure_3.get()) {
        if (componentActionClose.get() !== closure_1_6.PIP) {
          dependencyMap(tmp5.PIP);
        }
      } else {
        const state = closure_1_5.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = callback(1231).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(closure_1_7.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = callback(1231).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(closure_1_7.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = componentActionOpen(1231).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_7.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = componentActionOpen(1231).ComponentDispatch;
      ComponentDispatch2.unsubscribe(closure_2_7.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  const tmp3 = callback(doCloseChannel.useState(() => callback2(11055).getHistory().location.pathname), 2);
  const first = tmp3[0];
  closure_6 = tmp3[1];
  const items1 = [arg0, first];
  const effect1 = doCloseChannel.useEffect(() => {
    closure_0 = callback2(11055).addRouteChangeListener((pathname) => {
      if (closure_5 !== pathname.pathname) {
        callback2(tmp);
        let obj = callback(closure_1_2[8]);
        obj = { path: null };
        const RouteParam = callback(closure_1_2[9]).RouteParam;
        const RouteParam2 = callback(closure_1_2[9]).RouteParam;
        obj[0] = closure_1_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj);
        const guildIdResult = RouteParam.guildId();
        const tmp9 = closure_1_2;
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp2 = null != matchPathResult;
          if (tmp2) {
            tmp2 = matchPathResult.params.channelId === callback;
          }
          if (!tmp2) {
            closure_1_1(tmp9[11])();
          }
        }
        obj3 = callback(closure_1_2[10]);
      }
    });
    return () => {
      callback();
    };
  }, items1);
};