// === Module 17663: useControlsHoverGesture ===

// Module 17663 (useControlsHoverGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6985 */;
import noop from "module_19" /* 19 */;

require = fn;
const VoicePanelModes = fn(12615).VoicePanelModes;
const VoicePanelControlsModes = fn(12613).VoicePanelControlsModes;
let closure_6 = { code: "function useControlsHoverGestureTsx1(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,lastIdleRefreshMillis,IDLE_REFRESH_DEBOUNCE_MILLIS,refreshIdleTimeout}=this.__closure;if(!connected.get())return;if(mode.get()!==VoicePanelModes.PANEL)return;const controlsHidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;if(controlsHidden){runOnJS(showControls)();return;}const currentTimeMillis=Date.now();if(currentTimeMillis-lastIdleRefreshMillis.get()<IDLE_REFRESH_DEBOUNCE_MILLIS)return;lastIdleRefreshMillis.set(currentTimeMillis);refreshIdleTimeout();}" };
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
  const items = [connected, mode, controlsSpecs, sharedValue, refreshIdleTimeout, showControls];
  return refreshIdleTimeout.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function o() {
      if (closure_1_0.get()) {
        if (closure_1_2.get() === showControls.PANEL) {
          if (controlsSpecs.get().mode === sharedValue.HIDDEN) {
            connected(mode[4]).runOnJS(closure_1_4)();
            const obj2 = connected(mode[4]);
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp - closure_1_5.get() >= 500) {
              const result = closure_1_5.set(timestamp);
              refreshIdleTimeout();
            }
          }
        }
      }
    };
    const HoverResult = Gesture.Hover();
    fn.__closure = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport.runOnJS, showControls, lastIdleRefreshMillis: sharedValue, IDLE_REFRESH_DEBOUNCE_MILLIS: 500, refreshIdleTimeout };
    fn.__workletHash = 15224942407492;
    fn.__initData = __initData;
    return HoverResult.onUpdate(fn);
  }, items);
};