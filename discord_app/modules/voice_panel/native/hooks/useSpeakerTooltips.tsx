// discord_app/modules/voice_panel/native/hooks/useSpeakerTooltips.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import useCoachmark from "../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import VoicePanelConsoleFacepile from "../header/VoicePanelConsoleFacepile.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ConsoleVoiceUpsellStore from "../../../game_console/ConsoleVoiceUpsellStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: metroRequire } = ConsoleVoiceUpsellStore);
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let __initData = {
  code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
const __initData2 = {
  code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}",
};
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let tmp4;
      let closure_0 = arg1;
      let closure_1 = arg2;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] !== arg1) {
        const fn = function l() {
          if (visible.visible) {
            visible.onDismiss();
          }
        };
        cResult[0] = arg1;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let closure_2 = tmp4;
      if (cResult[2] === arg2) {
        let tmp5;
        let tmp6;
        if (cResult[3] === tmp4) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
        }
        const effect = react.useEffect(tmp5, tmp6);
        const tmpResult = useCoachmark;
        const coachmark = tmpResult.useCoachmark(arg0, arg1);
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
    }
  : (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2;
      const items = [arg1];
      const callback = react.useCallback(() => {
        if (visible.visible) {
          visible.onDismiss();
        }
      }, items);
      const items1 = [arg2, callback];
      const effect = react.useEffect(() => {
        if (!closure_1) {
          callback();
        }
      }, items1);
      const obj = useCoachmark;
      const coachmark = obj.useCoachmark(arg0, arg1);
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(arg0, arg1) {
  let closure_1;
  let closure_10;
  let closure_3;
  let closure_7;
  let controlsSpecs;
  let first1;
  let voiceUpsellDismissed;
  let tmp = arg1;
  let first = arg1;
  let tmp3 = voiceUpsellDismissed;
  const tmp4 = require("useConsoleConnectedAccountForVoiceUpsell")();
  const tmp2 = importDefault;
  importDefault = tmp4;
  voiceUpsellDismissed = first1().voiceUpsellDismissed;
  let tmp5 = require("useChannelFloatingCTAContent")(undefined);
  _slicedToArray = tmp5;
  let obj = first(voiceUpsellDismissed[8]);
  let obj2 = controlsSpecs;
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(require("VoicePanelStateContext")).controlsSpecs;
  const tmp9 = _slicedToArray(controlsSpecs.useState(true), 2);
  let closure_5 = tmp11;
  const tmp6 = first;
  first = tmp9[0];
  const fn = function f() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = __initData;
  const obj3 = first(voiceUpsellDismissed[10]);
  const tmp8 = _slicedToArray;
  class S {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_5)(arg0 === VoicePanelControlsModes.FLOATING_DEFAULT);
      }
    }
  }
  S.__closure = {
    runOnJS: first(voiceUpsellDismissed[10]).runOnJS,
    setIsShowingControls: tmp9[1],
    VoicePanelControlsModes,
  };
  S.__workletHash = 5084069556209;
  S.__initData = __initData2;
  ({ runOnJS: first(voiceUpsellDismissed[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes });
  const animatedReaction = obj3.useAnimatedReaction(fn, S);
  if (arg1) {
    tmp = isVoicePanelFullscreen;
  }
  if (tmp) {
    tmp = first;
  }
  first = tmp;
  const items = [tmp, tmp5];
  const memo = obj2.useMemo(() => (first ? closure_3 : []), items);
  const tmp6Result = tmp6(tmp3[11]);
  const tmp8Result = tmp8(tmp6Result.useSelectedDismissibleContent(memo), 2);
  first1 = tmp8Result[0];
  VoicePanelControlsModes = tmp16;
  const tmp17 = tmp2(tmp3[12])();
  let closure_8 = tmp17;
  const items1 = [tmp, tmp8Result[1], first1];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let intl2;
    let tmp3;
    const obj = {
      position: "bottom",
      title: intl.string(intl3.t.O2WA4u),
      description: intl2.string(intl3.t.fr5bJy),
      visible: tmp3,
      renderImgComponent() {
        return memo1(closure_1_1(voiceUpsellDismissed[15]), {});
      },
      withBlurBackground: true,
      onDismiss() {
        return closure_1_7(constants.UNKNOWN);
      },
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    tmp3 = first && first1 === dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    return obj;
  }, items1);
  const items2 = [tmp4, tmp, voiceUpsellDismissed, memo1.visible];
  const memo2 = obj2.useMemo(() => {
    let icon;
    let str2;
    let consoleInfo = null;
    if (null != closure_1) {
      const obj = VoicePanelConsoleFacepile;
      consoleInfo = obj.getConsoleInfo(tmp);
    }
    let str;
    const tmp5 = first && !voiceUpsellDismissed && null != consoleInfo && !memo1.visible;
    if (consoleInfo != null) {
      str = consoleInfo.connectLabel;
    }
    if (str == null) {
      str = "";
    }
    const obj2 = {
      position: "bottom",
      title: str,
      description: str2,
      visible: tmp5,
      imgSource: icon,
      withBlurBackground: true,
      onDismiss() {
        closure_1_5(true);
      },
    };
    str2 = undefined;
    if (consoleInfo != null) {
      str2 = consoleInfo.connectSublabel;
    }
    if (str2 == null) {
      str2 = "";
    }
    icon = undefined;
    if (consoleInfo != null) {
      icon = consoleInfo.icon;
    }
    return obj2;
  }, items2);
  __initData = tmp20;
  const items3 = [memo1.visible || memo2.visible, tmp17];
  const effect = obj2.useEffect(() => {
    if (closure_10) {
      closure_8.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    } else {
      closure_8.unlock();
    }
  }, items3);
  closure_12(arg0, memo1, tmp);
  closure_12(arg0, memo2, tmp);
}
