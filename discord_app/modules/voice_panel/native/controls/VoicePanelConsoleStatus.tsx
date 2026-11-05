// discord_app/modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useConsoleConnectingInfoDefault from "../hooks/useConsoleConnectingInfo.tsx";
import useControlsHiddenPresentationDefault from "utils/useControlsHiddenPresentation.tsx";
import useControlsTranslationDefault from "../hooks/useControlsTranslation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class VoicePanelConsoleStatus {
  constructor(arg0) {
    ({ wrapperSpecs, state } = global);
    closure_0 = state;
    closure_1 = undefined;
    ({ accessoryHeights, cleanUp } = global);
    tmp = closure_8();
    tmp2 = closure_1;
    tmp3 = closure_2;
    context = closure_3.useContext(closure_1(closure_2[7]));
    ({ windowDimensions, mode, channelId } = context);
    tmp5 = closure_1(closure_2[8])(channelId);
    tmp6 = closure_0;
    ({ icon, text, color, displayCancel } = tmp5);
    obj = closure_0(closure_2[9]);
    sharedValue = obj.useSharedValue(false);
    closure_1 = sharedValue;
    items = [,];
    items[0] = sharedValue;
    items[1] = state;
    effect = closure_3.useEffect(() => {
      const result = _undefined.set(c0 !== native.TransitionStates.YEETED);
    }, items);
    tmp9 = closure_1(closure_2[11])(mode, wrapperSpecs, accessoryHeights);
    tmp10 = closure_1(closure_2[12])(mode, wrapperSpecs);
    ({ hiddenProps, hiddenStyles } = tmp10);
    obj2 = closure_0(closure_2[9]);
    items1 = [, , , , , , , , , , ,];
    items1[0] = closure_11;
    items1[1] = color;
    items1[2] = windowDimensions;
    items1[3] = closure_4;
    items1[4] = closure_5;
    items1[5] = 36;
    tmp11 = closure_4;
    items1[6] = closure_0(closure_2[13]).withSpring;
    items1[7] = sharedValue;
    items1[8] = closure_9;
    items1[9] = closure_10;
    items1[10] = closure_0(closure_2[14]).scheduleOnRN;
    items1[11] = cleanUp;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items1;
    class VoicePanelConsoleStatusTsx2 {
      constructor() {
        size = {
          backgroundColor: closure_0,
          width: closure_1.get().width - 2 * closure_2,
          height: closure_3 + closure_4,
          borderRadius: 32,
          transform: null,
        };
        tmp = closure_5;
        tmp2 = closure_6;
        num = 100;
        if (closure_6.get()) {
          num = 0;
        }
        tmp3 = closure_7;
        items = [, , ,];
        items[0] = closure_8;
        items[1] = tmp2;
        items[2] = closure_9;
        items[3] = closure_10;
        [tmp4, tmp5, tmp6, tmp7] = items;
        obj1 = { translateY: null };
        class VoicePanelConsoleStatusTsx1 {
          constructor(arg0) {
            tmp = global;
            if (global) {
              tmp2 = closure_0;
              tmp = !closure_0.get();
            }
            if (tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2);
            }
            return;
          }
        }
        items1 = [, ,];
        items1[0] = tmp5;
        items1[1] = tmp6;
        items1[2] = tmp7;
        VoicePanelConsoleStatusTsx1.__closure = items1;
        VoicePanelConsoleStatusTsx1.__workletHash = 9535056131648;
        VoicePanelConsoleStatusTsx1.__initData = tmp4;
        obj1.translateY = tmp(num, tmp3, "respect-motion-settings", VoicePanelConsoleStatusTsx1);
        items2 = [];
        items2[0] = obj1;
        size.transform = items2;
        return size;
      }
    }
    items2 = [, , , , , , , , , ,];
    items2[0] = tmp13;
    items2[1] = tmp14;
    items2[2] = tmp15;
    items2[3] = tmp16;
    items2[4] = tmp17;
    items2[5] = tmp18;
    items2[6] = tmp19;
    items2[7] = tmp20;
    items2[8] = tmp21;
    items2[9] = tmp22;
    items2[10] = tmp23;
    VoicePanelConsoleStatusTsx2.__closure = items2;
    VoicePanelConsoleStatusTsx2.__workletHash = 17263747246830;
    VoicePanelConsoleStatusTsx2.__initData = tmp12;
    animatedStyle = obj2.useAnimatedStyle(VoicePanelConsoleStatusTsx2);
    tmp6Result = tmp6(tmp3[9]);
    items3 = [, ,];
    items3[0] = closure_12;
    items3[1] = windowDimensions;
    items3[2] = tmp11;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp25, tmp26, tmp27] = items3;
    class VoicePanelConsoleStatusTsx3 {
      constructor() {
        obj = { width: closure_0.get().width - 2 * closure_1 };
        return obj;
      }
    }
    items4 = [,];
    items4[0] = tmp26;
    items4[1] = tmp27;
    VoicePanelConsoleStatusTsx3.__closure = items4;
    VoicePanelConsoleStatusTsx3.__workletHash = 5648007408747;
    VoicePanelConsoleStatusTsx3.__initData = tmp25;
    tmp29 = closure_7;
    animatedStyle1 = tmp6Result.useAnimatedStyle(VoicePanelConsoleStatusTsx3);
    obj1 = { style: null, animatedProps: hiddenProps, children: null };
    items5 = [, ,];
    items5[0] = tmp.consoleParentContainer;
    items5[1] = tmp9;
    items5[2] = hiddenStyles;
    obj1.style = items5;
    tmp30 = closure_6;
    obj13 = { style: tmp.consoleContainer, children: null };
    tmp2Result = tmp2(tmp3[15]);
    obj14 = { style: animatedStyle, children: null };
    obj15 = { style: tmp.consoleItemContainer, children: null };
    tmp2Result1 = tmp2(tmp3[15]);
    obj16 = { source: icon, color: tmp2(tmp3[6]).unsafe_rawColors.WHITE, size: tmp6(tmp3[16]).IconSizes.SMALL };
    items6 = [, ,];
    items6[0] = closure_6(tmp6(tmp3[16]).Icon, obj16);
    obj17 = { variant: "body-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
    items6[1] = closure_6(tmp6(tmp3[17]).Text, obj17);
    tmp30Result = null;
    if (displayCancel) {
      obj18 = { hitSlop: 4, onPress: null, children: null };
      obj18.onPress = tmp6(tmp3[19]).disconnectRemote;
      obj19 = { variant: "body-sm/medium", color: "text-overlay-light", children: null };
      intl = tmp6(tmp3[20]).intl;
      obj19.children = intl.string(tmp6(tmp3[20]).t["ETE/oC"]);
      obj18.children = tmp30(tmp6(tmp3[17]).Text, obj19);
      tmp30Result = tmp30(tmp6(tmp3[18]).PressableOpacity, obj18);
    }
    items6[2] = tmp30Result;
    obj15.children = items6;
    obj14.children = tmp29(tmp2Result1, obj15);
    obj13.children = tmp30(tmp2(tmp3[9]).View, obj14);
    items7 = [,];
    items7[0] = tmp30(tmp2Result, obj13);
    obj20 = { style: null, children: tmp30(tmp6(tmp3[21]).VoicePanelVisualEffectView, {}) };
    items8 = [,];
    items8[0] = tmp.blockingControlCover;
    items8[1] = animatedStyle1;
    obj20.style = items8;
    items7[1] = tmp30(tmp2(tmp3[9]).View, obj20);
    obj1.children = items7;
    return tmp29(tmp2(tmp3[9]).View, obj1);
  }
}
const EDGE_GUTTER = fn(11422).EDGE_GUTTER;
const CONTROLS_HEIGHT = fn(11417).CONTROLS_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let obj2 = {
  consoleParentContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    left: -0.5,
    right: 0,
    alignItems: "center",
  },
  consoleContainer: {
    borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
    overflow: "hidden",
  },
  consoleItemContainer: { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 },
  consoleText: { textAlign: "left", marginStart: 4, flex: 1 },
  blockingControlCover: null,
};
let obj3 = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
obj2.blockingControlCover = {
  position: "absolute",
  bottom: 0,
  borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
  flex: 1,
  height: CONTROLS_HEIGHT,
  overflow: "hidden",
};
const React5 = createStyles.createStyles(obj2);
let obj5 = {};
let merged = Object.assign(fn(11419).MODE_CHANGE_PHYSICS);
obj5.overshootClamping = true;
let closure_10 = {
  code: "(function VoicePanelConsoleStatusTsx1(finished){let[shouldShow,scheduleOnRN,cleanUp]=this.__closure;if(finished&&!shouldShow.get()){scheduleOnRN(cleanUp);}})",
};
let closure_11 = {
  code: "(function VoicePanelConsoleStatusTsx2(){let[color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,_worklet_9535056131648_init_data,scheduleOnRN,cleanUp]=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function VoicePanelConsoleStatusTsx1Factory([_worklet_9535056131648_init_data,shouldShow,scheduleOnRN,cleanUp]){const VoicePanelConsoleStatusTsx1=function(finished){if(finished&&!shouldShow.get()){scheduleOnRN(cleanUp);}};VoicePanelConsoleStatusTsx1.__closure=[shouldShow,scheduleOnRN,cleanUp];VoicePanelConsoleStatusTsx1.__workletHash=9535056131648;VoicePanelConsoleStatusTsx1.__initData=_worklet_9535056131648_init_data;return VoicePanelConsoleStatusTsx1;}([_worklet_9535056131648_init_data,shouldShow,scheduleOnRN,cleanUp]))}]};})",
};
let closure_12 = {
  code: "(function VoicePanelConsoleStatusTsx3(){let[windowDimensions,EDGE_GUTTER]=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.state = state;
  obj.cleanUp = cleanUp;
  return timestampProducer(VoicePanelConsoleStatus, obj, arg0);
}
