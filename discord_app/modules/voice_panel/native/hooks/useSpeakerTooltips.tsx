// discord_app/modules/voice_panel/native/hooks/useSpeakerTooltips.tsx
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import VoicePanelConsoleFacepile from "../header/VoicePanelConsoleFacepile.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ConsoleVoiceUpsellStore = fn(19838);
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: closure_6 } = ConsoleVoiceUpsellStore);
const VoicePanelControlsModes = fn(11917).VoicePanelControlsModes;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_10 = {
  code: "(function useSpeakerTooltipsTsx1(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().mode;})",
};
let closure_11 = {
  code: "(function useSpeakerTooltipsTsx2(currentControlsMode,previous){let[scheduleOnRN,setIsShowingControls,VoicePanelControlsModes]=this.__closure;if(currentControlsMode===previous)return;scheduleOnRN(setIsShowingControls,currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, memo) {
  let tmp = memo;
  let memo2 = memo;
  const tmp4 = require("useConsoleConnectedAccountForVoiceUpsell")();
  importDefault = tmp4;
  const voiceUpsellDismissed = closure_6().voiceUpsellDismissed;
  callback1 = voiceUpsellDismissed;
  let tmp5 = require("useChannelFloatingCTAContent")(undefined);
  _slicedToArray = tmp5;
  const isVoicePanelFullscreen = memo2(callback1[8]).useIsVoicePanelFullscreen();
  let obj = memo2(callback1[8]);
  const tmp2 = importDefault;
  const tmp8 = _slicedToArray;
  [tmp10, tmp11] = first.useState(true);
  const tmp9 = _slicedToArray(first.useState(true), 2);
  items = [closure_10, first.useContext(require("VoicePanelStateContext")).controlsSpecs];
  memo2 = undefined;
  [tmp12, tmp13] = items;
  function useSpeakerTooltipsTsx1() {
    return memo2.get().mode;
  }
  const items1 = [tmp13];
  useSpeakerTooltipsTsx1.__closure = items1;
  useSpeakerTooltipsTsx1.__workletHash = 14111641987858;
  useSpeakerTooltipsTsx1.__initData = tmp12;
  const items2 = [closure_11, memo2(callback1[11]).scheduleOnRN, tmp11, memo1];
  memo2 = undefined;
  importDefault = undefined;
  callback1 = undefined;
  [tmp14, tmp15, tmp16, tmp17] = items2;
  function useSpeakerTooltipsTsx2(arg0, arg1) {
    if (arg0 !== arg1) {
      memo2(c1, arg0 === callback1.FLOATING_DEFAULT);
    }
  }
  const items3 = [tmp15, tmp16, tmp17];
  useSpeakerTooltipsTsx2.__closure = items3;
  useSpeakerTooltipsTsx2.__workletHash = 11431330900869;
  useSpeakerTooltipsTsx2.__initData = tmp14;
  const animatedReaction = memo2(callback1[10]).useAnimatedReaction(useSpeakerTooltipsTsx1, useSpeakerTooltipsTsx2);
  if (tmp) {
    tmp = isVoicePanelFullscreen;
  }
  if (tmp) {
    tmp = tmp10;
  }
  memo2 = tmp;
  const items4 = [tmp, tmp5];
  memo = obj2.useMemo(() => (memo2 ? closure_3 : []), items4);
  const obj3 = memo2(callback1[10]);
  const tmp8Result = tmp8(memo2(callback1[12]).useSelectedDismissibleContent(memo), 2);
  first = tmp8Result[0];
  closure_5 = tmp22;
  const tmp23 = tmp2(callback1[13])();
  closure_6 = tmp23;
  const items5 = [tmp, tmp8Result[1], first];
  memo1 = obj2.useMemo(() => {
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
      tmp3 = first === dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    }
    obj.visible = tmp3;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_9(closure_1_1(callback1[16]), {});
    };
    obj.onDismiss = function onDismiss() {
      return closure_1_5(constants.UNKNOWN);
    };
    return obj;
  }, items5);
  const items6 = [tmp4, tmp, voiceUpsellDismissed, memo1.visible];
  memo2 = obj2.useMemo(() => {
    let consoleInfo = null;
    if (null != c1) {
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
  }, items6);
  closure_8 = tmp26;
  const items7 = [memo1.visible || memo2.visible, tmp23];
  const effect = obj2.useEffect(() => {
    if (closure_8) {
      closure_6.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    } else {
      closure_6.unlock();
    }
  }, items7);
  memo2 = memo1;
  const items8 = [memo1];
  const callback = obj2.useCallback(() => {
    if (memo2.visible) {
      memo2.onDismiss();
    }
  }, items8);
  callback1 = callback;
  const items9 = [tmp, callback];
  const effect1 = obj2.useEffect(() => {
    if (!c1) {
      callback1();
    }
  }, items9);
  const tmp6Result = memo2(callback1[12]);
  const coachmark = memo2(callback1[17]).useCoachmark(targetRef, memo1);
  importDefault = tmp;
  const items10 = [memo2];
  callback1 = obj2.useCallback(() => {
    if (memo2.visible) {
      memo2.onDismiss();
    }
  }, items10);
  const items11 = [tmp, callback1];
  const effect2 = obj2.useEffect(() => {
    if (!c1) {
      callback1();
    }
  }, items11);
  const tmp6Result3 = memo2(callback1[17]);
  const coachmark1 = memo2(callback1[17]).useCoachmark(targetRef, memo2);
}
