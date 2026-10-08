// discord_app/modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Suspender from "../../../../../_runtime/05328_Suspender.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import VoicePanelChatViewDefault from "VoicePanelChatView.tsx";
import VoicePanelControlsUtils from "../utils/VoicePanelControlsUtils.tsx";
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls.tsx";
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderChat(shown) {
  const obj = {
    collapsable: false,
    style: absoluteFill.absoluteFill,
    children: options(VoicePanelChatViewDefault, { shown }),
  };
  return options(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VoicePanelConstants = fn(11989);
({ MODE_CHANGE_PHYSICS: closure_7, VoicePanelModes: closure_8 } = VoicePanelConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 200;
const createStyles = fn(5090);
let obj = { drawer: { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function LazyContentFreezer(shown) {
        const cResult = c.c(8);
        shown = shown.shown;
        const renderContent = shown.renderContent;
        [tmp5, tmp6] = noop.useState(!shown);
        importDefault = tmp6;
        let tmp7 = shown;
        if (shown) {
          tmp7 = tmp5;
        }
        if (tmp7) {
          tmp6(false);
        }
        const tmp4 = _slicedToArray(noop.useState(!shown), 2);
        if (cResult[0] !== shown) {
          const fn = function _() {
            let current = ref.current;
            if (!current) {
              current = shown;
            }
            ref.current = current;
          };
          cResult[0] = shown;
          cResult[1] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[1];
        }
        const effect = noop.useEffect(tmp10);
        if (cResult[2] !== shown) {
          const fn2 = function f() {
            if (!shown) {
              tmp6(true);
            }
          };
          const items = [shown];
          cResult[2] = shown;
          cResult[3] = fn2;
          cResult[4] = items;
          let tmp13 = items;
          let tmp12 = fn2;
        } else {
          tmp12 = cResult[3];
          tmp13 = cResult[4];
        }
        const effect1 = noop.useEffect(tmp12, tmp13);
        if (cResult[5] === renderContent) {
          if (cResult[6] === shown) {
            let tmp15 = cResult[7];
          }
          if (useRefValueDefault(ref)) {
            const obj3 = { freeze: tmp5, children: tmp15 };
            let tmp18 = options(Suspender.Freeze, obj3);
          } else {
            tmp18 = null;
          }
          return tmp18;
        }
        const renderContentResult = renderContent(shown);
        cResult[5] = renderContent;
        cResult[6] = shown;
        cResult[7] = renderContentResult;
        tmp15 = renderContentResult;
        ref = noop.useRef(shown);
      }
    : function LazyContentFreezer(shown) {
        shown = shown.shown;
        const renderContent = shown.renderContent;
        let ref;
        [tmp2, tmp3] = noop.useState(!shown);
        c2 = tmp3;
        let tmp4 = shown;
        if (shown) {
          tmp4 = tmp2;
        }
        if (tmp4) {
          tmp3(false);
        }
        ref = noop.useRef(shown);
        const effect = noop.useEffect(() => {
          let current = ref.current;
          if (!current) {
            current = shown;
          }
          ref.current = current;
        });
        const items = [shown];
        const effect1 = noop.useEffect(() => {
          if (!shown) {
            _undefined(true);
          }
        }, items);
        const items1 = [renderContent, shown];
        const memo = noop.useMemo(() => renderContent(shown), items1);
        if (useRefValueDefault(ref)) {
          const obj2 = { freeze: tmp2, children: memo };
          let tmp11 = options(Suspender.Freeze, obj2);
        } else {
          tmp11 = null;
        }
        return tmp11;
      },
);
const __initData = {
  code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}",
};
const __initData2 = {
  code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}",
};
const __initData3 = {
  code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}",
};
const __initData4 = {
  code: "function VoicePanelControlsDrawerTsx4(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}",
};
const __initData5 = {
  code: "function VoicePanelControlsDrawerTsx5(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}",
};
const __initData6 = {
  code: "function VoicePanelControlsDrawerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}",
};
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoicePanelControlsDrawer(gestureSpecs) {
        const cResult = wrapperSpecs(openTab[8]).c(26);
        ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
        gestureSpecs = gestureSpecs.gestureSpecs;
        openTab = gestureSpecs.openTab;
        const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
        ({ channelId, mode } = context);
        windowDimensions = context.windowDimensions;
        const safeArea = context.safeArea;
        const tmp6 = closure_12();
        let obj = wrapperSpecs(openTab[8]);
        const tmp4 = gestureSpecs;
        [tmp8, tmp9] = mode(windowDimensions.useState(null == tab), 2);
        closure_6 = tmp9;
        const tmp7 = mode(windowDimensions.useState(null == tab), 2);
        if (tmp10) {
          tmp9(false);
        }
        tmp10 = tab !== sharedTab.get() && tmp8;
        class M {
          constructor() {
            obj = { width: null, opacity: null };
            obj2 = closure_0(closure_2[14]);
            obj.width = obj2.getControlsDrawerOpenWidth(
              windowDimensions.get().width,
              safeArea.get().left,
              safeArea.get().right,
            );
            obj3 = closure_0(closure_2[15]);
            num = 0;
            if (wrapperSpecs.get().height >= c11) {
              num = 1;
            }
            obj.opacity = obj3.withSpring(num, MODE_CHANGE_PHYSICS);
            return obj;
          }
        }
        let tmpResult = wrapperSpecs(openTab[13]);
        M.__closure = {
          getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth,
          windowDimensions,
          safeArea,
          withSpring: wrapperSpecs(openTab[15]).withSpring,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT,
          MODE_CHANGE_PHYSICS,
        };
        M.__workletHash = 8777106499672;
        M.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(M);
        let obj2 = {
          getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth,
          windowDimensions,
          safeArea,
          withSpring: wrapperSpecs(openTab[15]).withSpring,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT,
          MODE_CHANGE_PHYSICS,
        };
        class J {
          constructor() {
            items = [,];
            items[0] = wrapperSpecs.get().drawerMode;
            items[1] = mode.get();
            return items;
          }
        }
        J.__closure = { wrapperSpecs, mode };
        J.__workletHash = 16802013961309;
        J.__initData = __initData2;
        const fn = function z(arg0, arg1) {
          if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
            [tmp6, tmp7] = arg0;
            if (!tmp8) {
              if (tmp7 === VoicePanelModes.PANEL) {
                if (tmp6) {
                  ReanimatedRexport.runOnJS(closure_6)(false);
                  const tmpResult = ReanimatedRexport;
                }
              }
              ReanimatedRexport.runOnJS(closure_6)(true);
              const tmpResult2 = ReanimatedRexport;
            }
            const tmp5 = _slicedToArray(arg0, 2);
            tmp8 = null != arg1 && tmp6 === arg1[0] && tmp7 === arg1[1];
          }
          obj = cheapWorkletShallowEqual;
          tmp3 = arg1;
        };
        const tmpResult3 = wrapperSpecs(openTab[13]);
        fn.__closure = {
          cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual,
          VoicePanelModes,
          runOnJS: wrapperSpecs(openTab[13]).runOnJS,
          setFreeze: tmp9,
        };
        fn.__workletHash = 780328698487;
        fn.__initData = __initData3;
        const animatedReaction = tmpResult3.useAnimatedReaction(J, fn);
        if (cResult[0] !== openTab) {
          class R {
            constructor(arg0) {
              obj = { isVisible: gestureSpecs, openTab };
              return jsx(closure_1(closure_2[17]), obj);
            }
          }
          cResult[0] = openTab;
          cResult[1] = R;
        } else {
          class R {
            constructor(arg0) {
              obj = { isVisible: gestureSpecs, openTab };
              return jsx(closure_1(closure_2[17]), obj);
            }
          }
        }
        if (cResult[2] !== gestureSpecs) {
          class F {
            constructor() {
              obj = { gestureSpecs };
              return jsx(closure_1(closure_2[18]), obj);
            }
          }
          cResult[2] = gestureSpecs;
          cResult[3] = F;
        } else {
          class F {
            constructor() {
              obj = { gestureSpecs };
              return jsx(closure_1(closure_2[18]), obj);
            }
          }
        }
        if (cResult[4] === animatedStyle) {
          class F {
            constructor() {
              obj = { gestureSpecs };
              return jsx(closure_1(closure_2[18]), obj);
            }
          }
          if (cResult[7] === channelId) {
            class F {
              constructor() {
                obj = { gestureSpecs };
                return jsx(closure_1(closure_2[18]), obj);
              }
            }
          }
          let tmp17 = null;
          if (tmpResult4.isJankScreenReportingEnabled()) {
            class F {
              constructor() {
                obj = { gestureSpecs };
                return jsx(closure_1(closure_2[18]), obj);
              }
            }
            const obj4 = { channelId, tab, wrapperSpecs, mode };
            tmp17 = closure_9(tmp4(tmp2[20]), obj4);
          }
          cResult[7] = channelId;
          cResult[8] = mode;
          cResult[9] = tab;
          cResult[10] = wrapperSpecs;
          cResult[11] = tmp17;
          tmpResult4 = wrapperSpecs(tmp2[19]);
        }
        let items = [tmp6.drawer, animatedStyle];
        cResult[4] = animatedStyle;
        cResult[5] = tmp6.drawer;
        cResult[6] = items;
        const obj3 = {
          cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual,
          VoicePanelModes,
          runOnJS: wrapperSpecs(openTab[13]).runOnJS,
          setFreeze: tmp9,
        };
      }
    : function VoicePanelControlsDrawer(gestureSpecs) {
        ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
        gestureSpecs = gestureSpecs.gestureSpecs;
        const openTab = gestureSpecs.openTab;
        let windowDimensions;
        const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
        const mode = context.mode;
        windowDimensions = context.windowDimensions;
        const safeArea = context.safeArea;
        const tmp4 = closure_12();
        [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
        c6 = tmp7;
        let tmp5 = mode(windowDimensions.useState(null == tab), 2);
        if (tmp8) {
          tmp7(false);
        }
        tmp8 = tab !== sharedTab.get() && tmp6;
        class V {
          constructor() {
            obj = { width: null, opacity: null };
            obj2 = closure_0(closure_2[14]);
            obj.width = obj2.getControlsDrawerOpenWidth(
              windowDimensions.get().width,
              safeArea.get().left,
              safeArea.get().right,
            );
            obj3 = closure_0(closure_2[15]);
            num = 0;
            if (wrapperSpecs.get().height >= c11) {
              num = 1;
            }
            obj.opacity = obj3.withSpring(num, MODE_CHANGE_PHYSICS);
            return obj;
          }
        }
        let obj2 = wrapperSpecs(openTab[13]);
        V.__closure = {
          getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth,
          windowDimensions,
          safeArea,
          withSpring: wrapperSpecs(openTab[15]).withSpring,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT,
          MODE_CHANGE_PHYSICS,
        };
        V.__workletHash = 6369444097885;
        V.__initData = __initData4;
        const animatedStyle = obj2.useAnimatedStyle(V);
        const obj3 = {
          getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth,
          windowDimensions,
          safeArea,
          withSpring: wrapperSpecs(openTab[15]).withSpring,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT,
          MODE_CHANGE_PHYSICS,
        };
        class M {
          constructor() {
            items = [,];
            items[0] = wrapperSpecs.get().drawerMode;
            items[1] = mode.get();
            return items;
          }
        }
        M.__closure = { wrapperSpecs, mode };
        M.__workletHash = 4655374582618;
        M.__initData = __initData5;
        class W {
          constructor(arg0, arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[16]);
            tmp3 = arg1;
            if (!obj.cheapWorkletArrayShallowEqual(gestureSpecs, tmp3)) {
              tmp4 = closure_3;
              num = 2;
              tmp5 = closure_3(gestureSpecs, 2);
              [tmp6, tmp7] = tmp5;
              tmp8 = null != arg1 && tmp6 === arg1[0] && tmp7 === arg1[1];
              if (!tmp8) {
                tmp9 = VoicePanelModes;
                if (tmp7 === VoicePanelModes.PANEL) {
                  if (tmp6) {
                    tmpResult = tmp(tmp2[13]);
                    tmp12 = closure_6;
                    flag2 = false;
                    tmp13 = tmpResult.runOnJS(closure_6)(false);
                  }
                }
                tmpResult1 = tmp(tmp2[13]);
                tmp10 = closure_6;
                flag = true;
                tmp11 = tmpResult1.runOnJS(closure_6)(true);
              }
            }
            return;
          }
        }
        const obj4 = wrapperSpecs(openTab[13]);
        W.__closure = {
          cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual,
          VoicePanelModes,
          runOnJS: wrapperSpecs(openTab[13]).runOnJS,
          setFreeze: tmp7,
        };
        W.__workletHash = 11690468048980;
        W.__initData = __initData6;
        const animatedReaction = obj4.useAnimatedReaction(M, W);
        let items = [openTab];
        const items1 = [gestureSpecs];
        const callback = obj.useCallback(
          (isVisible) => options(VoicePanelVoiceControlsDefault, { isVisible, openTab }),
          items,
        );
        const callback1 = obj.useCallback(
          () => options(VoicePanelControlsAppLauncherDefault, { gestureSpecs }),
          items1,
        );
        const obj6 = { style: null, children: null };
        const items2 = [tmp4.drawer, animatedStyle];
        obj6.style = items2;
        const obj5 = {
          cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual,
          VoicePanelModes,
          runOnJS: wrapperSpecs(openTab[13]).runOnJS,
          setFreeze: tmp7,
        };
        let tmp15 = null;
        if (obj7.isJankScreenReportingEnabled()) {
          const obj8 = { channelId: context.channelId, tab, wrapperSpecs, mode };
          tmp15 = closure_9(tmp(tmp2[20]), obj8);
        }
        const items3 = [tmp15, , ,];
        let tmp19 = !tmp6;
        if (!tmp6) {
          tmp19 = "chat" === tab;
        }
        items3[1] = closure_9(closure_13, { shown: tmp19, renderContent: renderChat });
        let tmp20 = !tmp6;
        if (!tmp6) {
          tmp20 = "settings" === tab;
        }
        items3[2] = closure_9(closure_13, { shown: tmp20, renderContent: callback });
        let tmp21 = !tmp6;
        if (!tmp6) {
          tmp21 = "app_launcher" === tab;
        }
        items3[3] = closure_9(closure_13, { shown: tmp21, renderContent: callback1 });
        obj6.children = items3;
        return closure_10(gestureSpecs(openTab[13]).View, obj6);
      },
);
export const LazyContentFreezer = memoResult;
