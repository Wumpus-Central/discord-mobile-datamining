// === Module 16616: useSpeakerTooltips ===

// Module 16616 (useSpeakerTooltips)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import useConsoleVoiceUpsellStore from "useConsoleVoiceUpsellStore" /* 16613 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 11755 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ setVoiceUpsellDismissed: c5, useConsoleVoiceUpsellStore: closure_6 } = useConsoleVoiceUpsellStore);
let closure_10 = { code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
let closure_11 = { code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, memo) {
  let first = memo;
  let memo2 = memo;
  const tmp4 = first(callback1[6])();
  first = tmp4;
  const voiceUpsellDismissed = first1().voiceUpsellDismissed;
  callback1 = voiceUpsellDismissed;
  let tmp5 = first(callback1[7])(undefined);
  let callback = tmp5;
  let obj = memo2(callback1[8]);
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(first(callback1[9])).controlsSpecs;
  const tmp9 = callback(controlsSpecs.useState(true), 2);
  closure_5 = tmp10;
  const fn = function v() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = closure_10;
  const fn2 = function b(arg0, arg1) {
    if (arg0 !== arg1) {
      memo2(callback1[10]).runOnJS(closure_5)(arg0 === constants.FLOATING_DEFAULT);
      const obj = memo2(callback1[10]);
    }
  };
  obj = { runOnJS: memo2(callback1[10]).runOnJS, setIsShowingControls: tmp10, VoicePanelControlsModes: closure_7 };
  fn2.__closure = obj;
  fn2.__workletHash = 5084069556209;
  fn2.__initData = closure_11;
  const animatedReaction = memo2(callback1[10]).useAnimatedReaction(fn, fn2);
  if (memo) {
    first = isVoicePanelFullscreen;
  }
  if (first) {
    first = tmp9[0];
  }
  memo2 = first;
  const items = [first, tmp5];
  memo = obj2.useMemo(() => memo2 ? closure_3 : [], items);
  let tmp6Result = tmp6(tmp3[11]);
  const tmp8Result = callback(tmp6Result.useSelectedDismissibleContent(memo), 2);
  first1 = tmp8Result[0];
  closure_7 = tmp15;
  const tmp16 = first(callback1[12])();
  closure_8 = tmp16;
  const items1 = [first, tmp8Result[1], first1];
  const memo1 = obj2.useMemo(() => {
    const obj = { position: "bottom", title: null, description: null, visible: null, renderImgComponent: null, withBlurBackground: true, onDismiss: null };
    const intl = memo2(callback1[13]).intl;
    obj[1] = intl.string(memo2(callback1[13]).t.O2WA4u);
    const intl2 = memo2(callback1[13]).intl;
    obj[2] = intl2.string(memo2(callback1[13]).t.fr5bJy);
    let tmp3 = memo2;
    if (memo2) {
      tmp3 = first1 === memo2(callback1[14]).DismissibleContent.DONUT_MOBILE_NUX;
    }
    obj[3] = tmp3;
    obj[4] = function renderImgComponent() {
      return callback3(callback(table[15]), {});
    };
    obj[6] = function onDismiss() {
      return callback2(closure_1_8.UNKNOWN);
    };
    return obj;
  }, items1);
  const items2 = [tmp4, first, voiceUpsellDismissed, memo1.visible];
  memo2 = obj2.useMemo(() => {
    let consoleInfo = null;
    if (null != first) {
      let obj = memo2(callback1[15]);
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
    obj[2] = str2;
    obj[3] = tmp5;
    let icon;
    if (consoleInfo != null) {
      icon = consoleInfo.icon;
    }
    obj[4] = icon;
    obj[6] = function onDismiss() {
      callback(true);
    };
    return obj;
  }, items2);
  closure_10 = tmp19;
  const items3 = [memo1.visible || memo2.visible, tmp16];
  const effect = obj2.useEffect(() => {
    if (closure_10) {
      obj.lock(constants.FLOATING_DEFAULT);
    } else {
      obj.unlock();
    }
  }, items3);
  memo2 = memo1;
  callback1 = undefined;
  const items4 = [memo1];
  callback = obj2.useCallback(() => {
    if (memo2.visible) {
      memo2.onDismiss();
    }
  }, items4);
  callback1 = callback;
  const items5 = [first, callback];
  const effect1 = obj2.useEffect(() => {
    if (!first) {
      callback1();
    }
  }, items5);
  tmp6Result = tmp6(tmp3[16]);
  const coachmark = tmp6Result.useCoachmark(targetRef, memo1);
  callback1 = undefined;
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
  const tmp2 = first;
  const tmp8 = callback;
  const coachmark1 = memo2(callback1[16]).useCoachmark(targetRef, memo2);
};