// discord_app/modules/voice_panel/native/controller/usePanelOpenState.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import VoicePanelStore from "../../VoicePanelStore.tsx";

require = fn;
const VoicePanelModes = fn(12273).VoicePanelModes;
const Constants = fn(1074);
({ ComponentActions: closure_7, Routes: closure_8 } = Constants);
const __initData = {
  code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}",
};
const __initData2 = {
  code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, connected) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  _slicedToArray = connected;
  function doCloseChannel() {
    const state = VoicePanelStore.getState();
    return state.closeChannel(closure_0);
  }
  let obj = require("ReanimatedRexport");
  const fn = function f() {
    return { connected: connected.get() };
  };
  fn.__closure = { connected };
  fn.__workletHash = 8350408810765;
  fn.__initData = __initData;
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
  obj = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
  O.__closure = obj;
  O.__workletHash = 9166012598595;
  O.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, O);
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
        const state = first.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = closure_0(1109).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = closure_0(1109).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  const tmp3 = _slicedToArray(
    doCloseChannel.useState(() => closure_1(12789).getHistory().location.pathname),
    2,
  );
  const first = tmp3[0];
  closure_6 = tmp3[1];
  const items1 = [arg0, first];
  const effect1 = doCloseChannel.useEffect(() => {
    closure_0 = closure_1(12789).addRouteChangeListener((pathname) => {
      if (first !== pathname.pathname) {
        closure_1_6(tmp);
        closure_0(4386);
        const obj = { path: null };
        const RouteParam = closure_0(4399).RouteParam;
        const RouteParam2 = closure_0(4399).RouteParam;
        obj.path = closure_2_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj);
        const guildIdResult = RouteParam.guildId();
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp2 = null != matchPathResult;
          if (tmp2) {
            tmp2 = matchPathResult.params.channelId === closure_0;
          }
          if (!tmp2) {
            closure_1(9508)();
          }
        }
        obj3 = closure_0(12782);
      }
    });
    return () => {
      closure_0();
    };
  }, items1);
}
