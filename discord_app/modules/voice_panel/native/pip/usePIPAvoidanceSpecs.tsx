// === Module 16309: usePIPAvoidanceSpecs ===

// Module 16309 (usePIPAvoidanceSpecs)
import obj132 from "obj132" /* 2 */;
import VoicePanelControlsModes2 from "VoicePanelControlsModes" /* 11438 */;
import VoicePanelModes2 from "VoicePanelModes" /* 11440 */;
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE" /* 11441 */;

const VoicePanelModes = VoicePanelModes2.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsModes2.VoicePanelControlsModes;
const PIP_WINDOW_OFFSET = MIN_PAN_GESTURE_MOVE.PIP_WINDOW_OFFSET;
let closure_6 = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
let closure_7 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const result = obj132.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(mode) {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let obj = mode(safeArea[3]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[4])();
  closure_4 = tmp2;
  const tmp3 = controlsSpecs(safeArea[5])();
  closure_5 = tmp3;
  const token = mode(safeArea[6]).useToken(controlsSpecs(safeArea[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj2 = mode(safeArea[6]);
  const fn = function p() {
    return { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_4.get(), safeArea: safeArea.get(), screenName: closure_5.get() };
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function u(safeAreaState, current) {
    let obj = mode(safeArea[8]);
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
      if (mode !== sharedValue.PIP) {
        let num = 0;
        if (mode === sharedValue.PANEL) {
          num = 0;
          if (controlsSpecs.mode === closure_4.DRAWER) {
            num = 60 + closure_5;
          }
        }
        let tmp6 = num;
      } else {
        tmp6 = controlsSpecs(safeArea[9])(tmp3);
      }
      obj = { screenBottomOffset: null, safeAreaBottom: null, keyboardHeight: null };
      obj[0] = tmp6;
      obj[1] = safeArea.bottom;
      obj[2] = keyboardHeight;
      const bottomOffset = controlsSpecs(safeArea[10])(obj).bottomOffset;
      let tmp10 = keyboardHeight <= 0 && mode === sharedValue.PANEL;
      if (tmp10) {
        tmp10 = controlsSpecs.mode === closure_4.FLOATING_DEFAULT;
      }
      let sum = bottomOffset;
      if (tmp10) {
        sum = bottomOffset + (controlsSpecs.height + closure_5);
      }
      let num4 = 0;
      if (mode === sharedValue.PANEL) {
        num4 = 0;
        if (controlsSpecs.mode === closure_4.FLOATING_DEFAULT) {
          num4 = controlsSpecs(safeArea[11])(safeArea, token).height;
        }
      }
      obj = { top: null, bottom: null };
      obj[0] = num4;
      obj[1] = sum;
      controlsSpecs(safeArea[12])(sharedValue, obj);
      const tmp9Result = controlsSpecs(safeArea[12]);
    }
    tmp = current;
  };
  obj = { cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes: closure_4, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET: closure_5, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 13029906729161;
  fn2.__initData = closure_7;
  const animatedReaction = mode(safeArea[3]).useAnimatedReaction(fn, fn2);
  return sharedValue;
};