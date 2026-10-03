// === Module 17237: useSpeakerTooltips ===

// Module 17237 (useSpeakerTooltips)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import useCoachmark from "useCoachmark" /* 9882 */;
import VoicePanelConsoleFacepile from "VoicePanelConsoleFacepile" /* 17240 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ConsoleVoiceUpsellStore = fn(17235);
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: metroRequire } = ConsoleVoiceUpsellStore);
let VoicePanelControlsModes = fn(11900).VoicePanelControlsModes;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
let __initData = { code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData2 = { code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}" };
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const visible = arg1;
  closure_1 = arg2;
  const cResult = c.c(6);
  if (cResult[0] !== arg1) {
    const fn = function l() {
      if (visible.visible) {
        visible.onDismiss();
      }
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  closure_2 = tmp4;
  if (cResult[2] === arg2) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
      let tmp6 = cResult[5];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    const coachmark = useCoachmark.useCoachmark(arg0, arg1);
    const tmpResult = useCoachmark;
  }
  const fn2 = function u() {
    if (!closure_1) {
      closure_2();
    }
  };
  const items = [arg2, tmp4];
  cResult[2] = arg2;
  cResult[3] = tmp4;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : ((arg0, arg1, arg2) => {
  const visible = arg1;
  closure_1 = arg2;
  const items = [arg1];
  const callback = noop.useCallback(() => {
    if (visible.visible) {
      visible.onDismiss();
    }
  }, items);
  const items1 = [arg2, callback];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      callback();
    }
  }, items1);
  const coachmark = useCoachmark.useCoachmark(arg0, arg1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(arg0, arg1) {
  let first = arg1;
  const tmp4 = require("useConsoleConnectedAccountForVoiceUpsell")();
  importDefault = tmp4;
  voiceUpsellDismissed = first1().voiceUpsellDismissed;
  let tmp5 = require("useChannelFloatingCTAContent")(undefined);
  _slicedToArray = tmp5;
  const isVoicePanelFullscreen = first(voiceUpsellDismissed[8]).useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(require("VoicePanelStateContext")).controlsSpecs;
  const tmp9 = _slicedToArray(controlsSpecs.useState(true), 2);
  closure_5 = tmp10;
  let obj = first(voiceUpsellDismissed[8]);
  const tmp2 = importDefault;
  const tmp6 = first;
  const tmp8 = _slicedToArray;
  const fn = function f() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = __initData;
  class S {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_5;
        tmp4 = VoicePanelControlsModes;
        tmp5 = obj.runOnJS(closure_5)(arg0 === VoicePanelControlsModes.FLOATING_DEFAULT);
      }
      return;
    }
  }
  const obj3 = first(voiceUpsellDismissed[10]);
  S.__closure = { runOnJS: first(voiceUpsellDismissed[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes };
  S.__workletHash = 5084069556209;
  S.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, S);
  if (arg1) {
    first = isVoicePanelFullscreen;
  }
  if (first) {
    first = tmp9[0];
  }
  const items = [first, tmp5];
  const memo = obj2.useMemo(() => first ? closure_3 : [], items);
  const obj4 = { runOnJS: first(voiceUpsellDismissed[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes };
  const tmp8Result = tmp8(tmp6(voiceUpsellDismissed[11]).useSelectedDismissibleContent(memo), 2);
  first1 = tmp8Result[0];
  VoicePanelControlsModes = tmp15;
  const tmp16 = tmp2(voiceUpsellDismissed[12])();
  closure_8 = tmp16;
  const items1 = [first, tmp8Result[1], first1];
  const memo1 = obj2.useMemo(() => {
    const obj = { position: "bottom", title: null, description: null, visible: null, renderImgComponent: null, withBlurBackground: true, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.O2WA4u);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.fr5bJy);
    let tmp3 = first;
    if (first) {
      tmp3 = first1 === dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    }
    obj.visible = tmp3;
    obj.renderImgComponent = function renderImgComponent() {
      return memo1(closure_1_1(voiceUpsellDismissed[15]), {});
    };
    obj.onDismiss = function onDismiss() {
      return closure_1_7(constants.UNKNOWN);
    };
    return obj;
  }, items1);
  const items2 = [tmp4, first, voiceUpsellDismissed, memo1.visible];
  const memo2 = obj2.useMemo(() => {
    let consoleInfo = null;
    if (null != closure_1) {
      consoleInfo = VoicePanelConsoleFacepile.getConsoleInfo(tmp);
    }
    let tmp5 = first;
    if (first) {
      tmp5 = !voiceUpsellDismissed;
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
    const obj2 = { position: "bottom", title: str, description: null, visible: null, imgSource: null, withBlurBackground: true, onDismiss: null };
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
  closure_12(arg0, memo1, first);
  closure_12(arg0, memo2, first);
};