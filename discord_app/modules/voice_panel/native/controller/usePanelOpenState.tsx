// discord_app/modules/voice_panel/native/controller/usePanelOpenState.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import VoicePanelStore from "../../VoicePanelStore.tsx";

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11410).VoicePanelModes;
const Constants = fn(1072);
({ ComponentActions: metroImportDefault, Routes: closure_8 } = Constants);
let closure_9 = {
  code: "(function usePanelOpenStateTsx1(){let[connected]=this.__closure;return{connected:connected.get()};})",
};
let closure_10 = {
  code: "(function usePanelOpenStateTsx2(props,previous){let[scheduleOnRN,doCloseChannel]=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){scheduleOnRN(doCloseChannel);}})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, arg3) {
  dependencyMap = arg2;
  _slicedToArray = arg3;
  items = [closure_9, arg3];
  _require = undefined;
  [tmp3, tmp4] = items;
  function usePanelOpenStateTsx1() {
    return { connected: _undefined.get() };
  }
  const items1 = [tmp4];
  usePanelOpenStateTsx1.__closure = items1;
  usePanelOpenStateTsx1.__workletHash = 11139062009940;
  usePanelOpenStateTsx1.__initData = tmp3;
  const items2 = [
    closure_10,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    function doCloseChannel() {
      state = VoicePanelStore.getState();
      return state.closeChannel(c0);
    },
  ];
  _require = undefined;
  c1 = undefined;
  [tmp5, tmp6, tmp7] = items2;
  function usePanelOpenStateTsx2(connected, connected2) {
    connected = undefined;
    if (connected2 != null) {
      connected = connected2.connected;
    }
    if (tmp2) {
      _undefined(c1);
    }
    tmp2 = true === connected && !connected.connected;
  }
  const items3 = [tmp6, tmp7];
  usePanelOpenStateTsx2.__closure = items3;
  usePanelOpenStateTsx2.__workletHash = 9904230510523;
  usePanelOpenStateTsx2.__initData = tmp5;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    usePanelOpenStateTsx1,
    usePanelOpenStateTsx2,
  );
  const items4 = [arg0, arg1, arg2, arg3];
  const effect = first.useEffect(() => {
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
      if (closure_1_3.get()) {
        if (componentActionClose.get() !== constants.PIP) {
          dependencyMap(tmp5.PIP);
        }
      } else {
        state = state.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = _undefined(1108).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = _undefined(1108).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items4);
  [first, closure_5] = first.useState(() => _undefined2(12262).getHistory().location.pathname);
  const items5 = [arg0, first];
  const effect1 = first.useEffect(() => {
    closure_0 = _undefined2(12262).addRouteChangeListener((pathname) => {
      if (first !== pathname.pathname) {
        closure_1_5(tmp);
        const obj2 = { path: null };
        const RouteParam = c0(5190).RouteParam;
        const obj = c0(5177);
        const RouteParam2 = c0(5190).RouteParam;
        obj2.path = closure_2_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj2);
        const guildIdResult = RouteParam.guildId();
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp2 = null != matchPathResult;
          if (tmp2) {
            tmp2 = matchPathResult.params.channelId === closure_0;
          }
          if (!tmp2) {
            c1(11115)();
          }
        }
        obj3 = c0(12255);
      }
    });
    return () => {
      closure_0();
    };
  }, items5);
}
