// === Module 17671: useControlsHoverGesture ===

// Module 17671 (useControlsHoverGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import noop from "module_19" /* 19 */;

require = fn;
const VoicePanelModes = fn(11926).VoicePanelModes;
const VoicePanelControlsModes = fn(11924).VoicePanelControlsModes;
let c6 = 500;
const __initData = { code: "function useControlsHoverGestureTsx1(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,lastIdleRefreshMillis,IDLE_REFRESH_DEBOUNCE_MILLIS,refreshIdleTimeout}=this.__closure;if(!connected.get()){return;}if(mode.get()!==VoicePanelModes.PANEL){return;}const controlsHidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;if(controlsHidden){runOnJS(showControls)();return;}const currentTimeMillis=Date.now();if(currentTimeMillis-lastIdleRefreshMillis.get()<IDLE_REFRESH_DEBOUNCE_MILLIS){return;}lastIdleRefreshMillis.set(currentTimeMillis);refreshIdleTimeout();}" };
let closure_8 = { code: "function useControlsHoverGestureTsx2(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,lastIdleRefreshMillis,IDLE_REFRESH_DEBOUNCE_MILLIS,refreshIdleTimeout}=this.__closure;if(!connected.get())return;if(mode.get()!==VoicePanelModes.PANEL)return;const controlsHidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;if(controlsHidden){runOnJS(showControls)();return;}const currentTimeMillis=Date.now();if(currentTimeMillis-lastIdleRefreshMillis.get()<IDLE_REFRESH_DEBOUNCE_MILLIS)return;lastIdleRefreshMillis.set(currentTimeMillis);refreshIdleTimeout();}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsHoverGesture.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useControlsHoverGesture() {
  const cResult = connected(mode[4]).c(7);
  const context = refreshIdleTimeout.useContext(controlsSpecs(mode[5]));
  connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  mode = context.mode;
  refreshIdleTimeout = context.refreshIdleTimeout;
  const showControls = context.showControls;
  const obj = connected(mode[4]);
  const sharedValue = connected(mode[6]).useSharedValue(0);
  if (cResult[0] === connected) {
    if (cResult[1] === controlsSpecs) {
      if (cResult[2] === sharedValue) {
        if (cResult[3] === mode) {
          if (cResult[4] === refreshIdleTimeout) {
            if (cResult[5] === showControls) {
              let tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
      }
    }
  }
  const Gesture = tmp(tmp2[7]).Gesture;
  let obj2 = connected(mode[6]);
  const fn = function u() {
    if (connected.get()) {
      if (mode.get() === VoicePanelModes.PANEL) {
        if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
          ReanimatedRexport.runOnJS(showControls)();
        } else {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - sharedValue.get() >= c6) {
            const result = sharedValue.set(timestamp);
            refreshIdleTimeout();
          }
        }
      }
    }
  };
  const HoverResult = Gesture.Hover();
  fn.__closure = { connected, mode, VoicePanelModes: showControls, controlsSpecs, VoicePanelControlsModes: sharedValue, runOnJS: connected(mode[6]).runOnJS, showControls, lastIdleRefreshMillis: sharedValue, IDLE_REFRESH_DEBOUNCE_MILLIS, refreshIdleTimeout };
  fn.__workletHash = 2418652715362;
  fn.__initData = __initData;
  const onUpdateResult = HoverResult.onUpdate(fn);
  cResult[0] = connected;
  cResult[1] = controlsSpecs;
  cResult[2] = sharedValue;
  cResult[3] = mode;
  cResult[4] = refreshIdleTimeout;
  cResult[5] = showControls;
  cResult[6] = onUpdateResult;
  tmp6 = onUpdateResult;
}) : (function useControlsHoverGesture() {
  const context = refreshIdleTimeout.useContext(controlsSpecs(mode[5]));
  const connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  mode = context.mode;
  refreshIdleTimeout = context.refreshIdleTimeout;
  const showControls = context.showControls;
  const sharedValue = connected(mode[6]).useSharedValue(0);
  const items = [connected, mode, controlsSpecs, sharedValue, refreshIdleTimeout, showControls];
  return refreshIdleTimeout.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function o() {
      if (closure_1_0.get()) {
        if (closure_1_2.get() === showControls.PANEL) {
          if (controlsSpecs.get().mode === sharedValue.HIDDEN) {
            connected(mode[6]).runOnJS(closure_1_4)();
            const obj2 = connected(mode[6]);
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp - closure_1_5.get() >= IDLE_REFRESH_DEBOUNCE_MILLIS) {
              const result = closure_1_5.set(timestamp);
              refreshIdleTimeout();
            }
          }
        }
      }
    };
    const HoverResult = Gesture.Hover();
    fn.__closure = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport.runOnJS, showControls, lastIdleRefreshMillis: sharedValue, IDLE_REFRESH_DEBOUNCE_MILLIS, refreshIdleTimeout };
    fn.__workletHash = 10684316595239;
    fn.__initData = __initData;
    return HoverResult.onUpdate(fn);
  }, items);
});