// discord_app/modules/voice_panel/native/hooks/useControlsHoverGesture.tsx
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import LegacyBaseButton from "../../../../../_runtime/05450_LegacyBaseButton.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const VoicePanelModes = fn(11381).VoicePanelModes;
const VoicePanelControlsModes = fn(11379).VoicePanelControlsModes;
let closure_6 = {
  code: "(function useControlsHoverGestureTsx1(){let[connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,scheduleOnRN,showControls,lastIdleRefreshMillis,IDLE_REFRESH_DEBOUNCE_MILLIS,refreshIdleTimeout]=this.__closure;if(!connected.get())return;if(mode.get()!==VoicePanelModes.PANEL)return;const controlsHidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;if(controlsHidden){scheduleOnRN(showControls);return;}const currentTimeMillis=Date.now();if(currentTimeMillis-lastIdleRefreshMillis.get()<IDLE_REFRESH_DEBOUNCE_MILLIS)return;lastIdleRefreshMillis.set(currentTimeMillis);refreshIdleTimeout();})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsHoverGesture.tsx");

export default function useControlsHoverGesture() {
  const context = refreshIdleTimeout.useContext(controlsSpecs(mode[3]));
  const connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  mode = context.mode;
  refreshIdleTimeout = context.refreshIdleTimeout;
  const showControls = context.showControls;
  const sharedValue = connected(mode[4]).useSharedValue(0);
  items = [connected, mode, controlsSpecs, sharedValue, refreshIdleTimeout, showControls];
  return refreshIdleTimeout.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    items = [
      closure_6,
      connected,
      mode,
      VoicePanelModes,
      controlsSpecs,
      VoicePanelControlsModes,
      _mod1705.scheduleOnRN,
      showControls,
      sharedValue,
      500,
      refreshIdleTimeout,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
    function useControlsHoverGestureTsx1() {
      if (_undefined.get()) {
        if (_undefined2.get() === _undefined3.PANEL) {
          if (_undefined4.get().mode === _undefined5.HIDDEN) {
            _undefined6(c6);
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp - _undefined7.get() >= c8) {
              const result = _undefined7.set(timestamp);
              _undefined8();
            }
          }
        }
      }
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
    useControlsHoverGestureTsx1.__closure = items1;
    useControlsHoverGestureTsx1.__workletHash = 12491338829340;
    useControlsHoverGestureTsx1.__initData = tmp;
    return Gesture.Hover().onUpdate(useControlsHoverGestureTsx1);
  }, items);
}
