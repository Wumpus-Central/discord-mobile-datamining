// discord_app/modules/voice_panel/native/controller/usePanelOpenState.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import withEqualityFn from "withEqualityFn";
import { VoicePanelModes } from "VoicePanelModes";
import ME from "ME";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

let error;
let metroImportAll;
const require = arg1;
({ ComponentActions: error, Routes: metroImportAll } = ME);
let closure_9 = { code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}" };
let closure_10 = { code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, connected) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const callback = connected;
  function doCloseChannel() {
    const state = first.getState();
    return state.closeChannel(closure_0);
  }
  let obj = _ReanimatedRexport;
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
  obj = { runOnJS: _ReanimatedRexport.runOnJS, doCloseChannel };
  O.__closure = obj;
  O.__workletHash = 9166012598595;
  O.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, O);
  const items = [arg0, arg1, arg2, connected];
  const effect = doCloseChannel.useEffect(() => {
    function componentActionOpen(channelId) {
      let tmp = componentActionOpen === channelId.channelId;
      if (tmp) {
        tmp = componentActionClose.get() !== outer1_6.PANEL;
      }
      if (tmp) {
        dependencyMap(outer1_6.PANEL);
      }
    }
    function componentActionClose() {
      if (_slicedToArray.get()) {
        if (componentActionClose.get() !== outer1_6.PIP) {
          dependencyMap(tmp5.PIP);
        }
      } else {
        const state = outer1_5.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = callback(1231).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_7.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = callback(1231).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(outer1_7.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = componentActionOpen(1231).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_7.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = componentActionOpen(1231).ComponentDispatch;
      ComponentDispatch2.unsubscribe(outer2_7.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  const tmp3 = callback(doCloseChannel.useState(() => callback2(10940).getHistory().location.pathname), 2);
  const first = tmp3[0];
  let closure_6 = tmp3[1];
  const items1 = [arg0, first];
  const effect1 = doCloseChannel.useEffect(() => {
    let closure_0 = callback2(10940).addRouteChangeListener((pathname) => {
      if (withEqualityFn !== pathname.pathname) {
        callback2(tmp);
        let obj = callback(outer1_2[8]);
        obj = { path: null };
        const RouteParam = callback(outer1_2[9]).RouteParam;
        const RouteParam2 = callback(outer1_2[9]).RouteParam;
        obj[0] = outer1_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj);
        const guildIdResult = RouteParam.guildId();
        const tmp9 = outer1_2;
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp2 = null != matchPathResult;
          if (tmp2) {
            tmp2 = matchPathResult.params.channelId === callback;
          }
          if (!tmp2) {
            outer1_1(tmp9[11])();
          }
        }
        obj3 = callback(outer1_2[10]);
      }
    });
    return () => {
      callback();
    };
  }, items1);
};