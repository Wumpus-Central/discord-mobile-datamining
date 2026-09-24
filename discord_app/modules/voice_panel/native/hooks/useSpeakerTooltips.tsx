// discord_app/modules/voice_panel/native/hooks/useSpeakerTooltips.tsx
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import VoicePanelConsoleFacepile from "../header/VoicePanelConsoleFacepile.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ConsoleVoiceUpsellStore = fn(17687);
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: metroRequire } = ConsoleVoiceUpsellStore);
let VoicePanelControlsModes = fn(12613).VoicePanelControlsModes;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsx = fn(21).jsx;
let __initData = {
  code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
const __initData2 = {
  code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}",
};
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
  const isVoicePanelFullscreen = memo2(callback1[8]).useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(first(callback1[9])).controlsSpecs;
  const tmp9 = _slicedToArray(controlsSpecs.useState(true), 2);
  closure_5 = tmp10;
  let obj = memo2(callback1[8]);
  const tmp2 = first;
  const tmp8 = _slicedToArray;
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
  const obj3 = memo2(callback1[10]);
  fn2.__closure = { runOnJS: memo2(callback1[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes };
  fn2.__workletHash = 5084069556209;
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  if (memo) {
    first = isVoicePanelFullscreen;
  }
  if (first) {
    first = tmp9[0];
  }
  memo2 = first;
  const items = [first, tmp5];
  memo = obj2.useMemo(() => (memo2 ? closure_3 : []), items);
  const obj4 = { runOnJS: memo2(callback1[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes };
  const tmp8Result = tmp8(memo2(callback1[11]).useSelectedDismissibleContent(memo), 2);
  first1 = tmp8Result[0];
  VoicePanelControlsModes = tmp15;
  const tmp16 = tmp2(callback1[12])();
  closure_8 = tmp16;
  const items1 = [first, tmp8Result[1], first1];
  const memo1 = obj2.useMemo(() => {
    const obj = {
      position: "bottom",
      title: null,
      description: null,
      visible: null,
      renderImgComponent: null,
      withBlurBackground: true,
      onDismiss: null,
    };
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
      consoleInfo = VoicePanelConsoleFacepile.getConsoleInfo(tmp);
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
    const obj2 = {
      position: "bottom",
      title: str,
      description: null,
      visible: null,
      imgSource: null,
      withBlurBackground: true,
      onDismiss: null,
    };
    let str2;
    if (consoleInfo != null) {
      str2 = consoleInfo.connectSublabel;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj2.description = str2;
    obj2.visible = tmp5;
    let icon;
    if (consoleInfo != null) {
      icon = consoleInfo.icon;
    }
    obj2.imgSource = icon;
    obj2.onDismiss = function onDismiss() {
      closure_1_5(true);
    };
    return obj2;
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
  callback1 = callback;
  const items5 = [first, callback];
  const effect1 = obj2.useEffect(() => {
    if (!first) {
      callback1();
    }
  }, items5);
  const tmp6Result = memo2(callback1[11]);
  const coachmark = memo2(callback1[16]).useCoachmark(targetRef, memo1);
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
  const tmp6Result3 = memo2(callback1[16]);
  const coachmark1 = memo2(callback1[16]).useCoachmark(targetRef, memo2);
}
