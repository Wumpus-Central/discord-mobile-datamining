// === Module 17122: useSpeakerTooltips ===

// Module 17122 (useSpeakerTooltips)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import VoicePanelConsoleFacepile from "VoicePanelConsoleFacepile" /* 17125 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ConsoleVoiceUpsellStore = fn(17119);
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: metroRequire } = ConsoleVoiceUpsellStore);
let VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let __initData = { code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData2 = { code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, memo) {
  let first = memo;
  let memo2 = memo;
  const tmp4 = first(callback1[6])();
  first = tmp4;
  const voiceUpsellDismissed = first1().voiceUpsellDismissed;
  callback1 = voiceUpsellDismissed;
  let tmp5 = first(callback1[7])(undefined);
  _slicedToArray = tmp5;
  let obj = memo2(callback1[8]);
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(first(callback1[9])).controlsSpecs;
  const tmp9 = _slicedToArray(controlsSpecs.useState(true), 2);
  closure_5 = tmp10;
  const fn = function v() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = __initData;
  const fn2 = function b(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_5)(arg0 === VoicePanelControlsModes.FLOATING_DEFAULT);
    }
  };
  obj = { runOnJS: memo2(callback1[10]).runOnJS, setIsShowingControls: tmp10, VoicePanelControlsModes };
  fn2.__closure = obj;
  fn2.__workletHash = 5084069556209;
  fn2.__initData = __initData2;
  const animatedReaction = memo2(callback1[10]).useAnimatedReaction(fn, fn2);
  if (memo) {
    first = isVoicePanelFullscreen;
  }
  if (first) {
    first = tmp9[0];
  }
  const items = [first, tmp5];
  memo = obj2.useMemo(() => memo2 ? closure_3 : [], items);
  let tmp6Result = tmp6(tmp3[11]);
  const tmp8Result = _slicedToArray(tmp6Result.useSelectedDismissibleContent(memo), 2);
  first1 = tmp8Result[0];
  VoicePanelControlsModes = tmp15;
  const tmp16 = first(callback1[12])();
  closure_8 = tmp16;
  const items1 = [first, tmp8Result[1], first1];
  const memo1 = obj2.useMemo(() => {
    const obj = { position: "bottom", title: null, description: null, visible: null, renderImgComponent: null, withBlurBackground: true, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.O2WA4u);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.fr5bJy);
    let tmp3 = memo2;
    if (memo2) {
      tmp3 = first1 === dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    }
    obj.visible = tmp3;
    obj.renderImgComponent = function renderImgComponent() {
      return memo1(first(callback1[15]), {});
    };
    obj.onDismiss = function onDismiss() {
      return closure_1_7(constants.UNKNOWN);
    };
    return obj;
  }, items1);
  const items2 = [tmp4, first, voiceUpsellDismissed, memo1.visible];
  memo2 = obj2.useMemo(() => {
    let consoleInfo = null;
    if (null != first) {
      let obj = VoicePanelConsoleFacepile;
      consoleInfo = obj.getConsoleInfo(tmp);
    }
    let tmp5 = memo2;
    if (memo2) {
      tmp5 = !callback1;
    }
    if (tmp5) {
      tmp5 = null != consoleInfo;
    }
    if (tmp5) {
      tmp5 = !memo1.visible;
    }
    let str;
    if (consoleInfo != null) {
      str = consoleInfo.connectLabel;
    }
    if (str == null) {
      str = "";
    }
    obj = { position: "bottom", title: str, description: null, visible: null, imgSource: null, withBlurBackground: true, onDismiss: null };
    let str2;
    if (consoleInfo != null) {
      str2 = consoleInfo.connectSublabel;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj.description = str2;
    obj.visible = tmp5;
    let icon;
    if (consoleInfo != null) {
      icon = consoleInfo.icon;
    }
    obj.imgSource = icon;
    obj.onDismiss = function onDismiss() {
      closure_1_5(true);
    };
    return obj;
  }, items2);
  __initData = tmp19;
  const items3 = [memo1.visible || memo2.visible, tmp16];
  const effect = obj2.useEffect(() => {
    if (closure_10) {
      closure_8.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    } else {
      closure_8.unlock();
    }
  }, items3);
  memo2 = memo1;
  const items4 = [memo1];
  const callback = obj2.useCallback(() => {
    if (memo2.visible) {
      memo2.onDismiss();
    }
  }, items4);
  const items5 = [first, callback];
  const effect1 = obj2.useEffect(() => {
    if (!first) {
      callback1();
    }
  }, items5);
  tmp6Result = tmp6(tmp3[16]);
  const coachmark = tmp6Result.useCoachmark(targetRef, memo1);
  const items6 = [memo2];
  callback1 = obj2.useCallback(() => {
    if (memo2.visible) {
      memo2.onDismiss();
    }
  }, items6);
  const items7 = [first, callback1];
  const effect2 = obj2.useEffect(() => {
    if (!first) {
      callback1();
    }
  }, items7);
  const obj3 = memo2(callback1[10]);
  const coachmark1 = memo2(callback1[16]).useCoachmark(targetRef, memo2);
};