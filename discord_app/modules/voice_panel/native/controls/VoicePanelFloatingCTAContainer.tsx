// === Module 17320: VoicePanelFloatingCTAContainer ===

// Module 17320 (VoicePanelFloatingCTAContainer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4589 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import spring from "spring" /* 5597 */;
import RowButton from "RowButton" /* 8897 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11813 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11909 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17222 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
let closure_3 = ["trailing"];
const UI_SHOW_HIDE_PHYSICS = fn(11902).UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = fn(11905).CALL_TILE_GUTTER;
const ThemeTypes = fn(1096).ThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: null };
const rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
obj2.container = rect;
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((trailing) => {
  const cResult = c.c(7);
  if (cResult[0] !== trailing) {
    trailing = trailing.trailing;
    const tmp8 = _objectWithoutProperties(trailing, closure_3);
    cResult[0] = trailing;
    cResult[1] = tmp8;
    cResult[2] = trailing;
    let tmp5 = trailing;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp9) {
      if (cResult[5] === tmp5) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj2 = { children: null };
  const merged = Object.assign(tmp4);
  obj2.children = jsx(RowButton.RowButton, { experimental_withBlurBackground: true, arrow: null == tmp5, trailing: tmp5 });
  const tmp12 = jsx(Stack_Stack.Stack, { children: null });
  cResult[3] = tmp4;
  cResult[4] = null == tmp5;
  cResult[5] = tmp5;
  cResult[6] = tmp12;
  tmp10 = tmp12;
  const obj3 = { experimental_withBlurBackground: true, arrow: null == tmp5, trailing: tmp5 };
}) : ((trailing) => {
  trailing = trailing.trailing;
  const merged = Object.assign(trailing, Object.assign({ trailing: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  obj.children = jsx(RowButton.RowButton, { experimental_withBlurBackground: true, arrow: null == trailing, trailing });
  return jsx(Stack_Stack.Stack, { children: null });
});
const __initData = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData2 = { code: "function VoicePanelFloatingCTAContainerTsx2(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperSpecs) => {
  const cResult = wrapperSpecs(controlsSpecs[12]).c(21);
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const accessoryHeights = wrapperSpecs.accessoryHeights;
  controlsSpecs = wrapperSpecs.controlsSpecs;
  ({ state, cleanUp, gestureState } = wrapperSpecs);
  const tmp4 = closure_12();
  const context = safeArea.useContext(accessoryHeights(controlsSpecs[16]));
  const windowDimensions = context.windowDimensions;
  const channelId = context.channelId;
  safeArea = context.safeArea;
  const tmp7 = accessoryHeights(controlsSpecs[17])(channelId);
  let obj = wrapperSpecs(controlsSpecs[12]);
  const first = windowDimensions(wrapperSpecs(controlsSpecs[18]).useGetDismissibleContent(tmp7), 1)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [closure_7];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  let obj2 = wrapperSpecs(controlsSpecs[18]);
  const stateFromStores = wrapperSpecs(controlsSpecs[19]).useStateFromStores(first1, tmp11);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === first) {
      let tmp13 = cResult[5];
    }
    closure_7 = tmp13;
    const floatingCTAProps = tmp(tmp2[20]).useFloatingCTAProps(stateFromStores);
    if (cResult[6] === cleanUp) {
      if (cResult[7] === state) {
        let tmp16 = cResult[8];
      }
      ({ hiddenProps, hiddenStyles } = tmp5(tmp2[21])(context.mode, wrapperSpecs, tmp16));
      const tmp17 = tmp5(tmp2[21])(context.mode, wrapperSpecs, tmp16);
      const fn2 = function k() {
        const controlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        const obj2 = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * roundToNearestPixelDefault(controlsDefaultWidth / 2), transform: null };
        const obj3 = { translateX: null };
        obj3.translateX = spring.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS);
        const items = [obj3, ];
        if (wrapperSpecs.get().hidden) {
          const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
          let y = sum + accessoryHeights.get();
        } else {
          y = wrapperSpecs.get().y;
        }
        items[1] = { translateY: spring.withSpring(y, UI_SHOW_HIDE_PHYSICS) };
        obj2.transform = items;
        return obj2;
      };
      let obj3 = { getControlsDefaultWidth: tmp(tmp2[23]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: tmp5(tmp2[24]), withSpring: tmp(tmp2[25]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS, gestureState, CALL_TILE_GUTTER, accessoryHeights };
      fn2.__closure = obj3;
      fn2.__workletHash = 10861017326398;
      fn2.__initData = __initData;
      const animatedStyle = tmp(tmp2[22]).useAnimatedStyle(fn2);
      if (cResult[9] === animatedStyle) {
        if (cResult[10] === hiddenStyles) {
          if (cResult[11] === tmp4.container) {
            let tmp22 = cResult[12];
          }
          if (cResult[13] === tmp7) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === floatingCTAProps) {
                if (cResult[17] === hiddenProps) {
                  if (cResult[18] === tmp22) {
                    if (cResult[19] === tmp23) {
                      let tmp33 = cResult[20];
                    }
                    return tmp33;
                  }
                }
                let obj4 = { style: tmp22, animatedProps: hiddenProps, children: cResult[16] };
                const tmp35 = jsx(tmp5(tmp2[27]), { style: tmp22, animatedProps: hiddenProps, children: cResult[16] });
                cResult[17] = hiddenProps;
                cResult[18] = tmp22;
                cResult[19] = cResult[16];
                cResult[20] = tmp35;
                tmp33 = tmp35;
              }
            }
          }
          if (null != tmp13) {
            const obj5 = {
              contentTypes: tmp7,
              children() {
                          const merged = Object.assign(closure_7);
                          return <closure_13 />;
                        }
            };
            let tmp25 = jsx(tmp5(tmp2[26]), {
              contentTypes: tmp7,
              children() {
                          const merged = Object.assign(closure_7);
                          return <closure_13 />;
                        }
            });
          } else {
            tmp25 = null;
            if (null != floatingCTAProps) {
              let obj6 = {};
              let merged = Object.assign(floatingCTAProps);
              tmp25 = <closure_13 />;
            }
          }
          cResult[13] = tmp7;
          cResult[14] = tmp13;
          cResult[15] = floatingCTAProps;
          cResult[16] = tmp25;
        }
      }
      const items1 = [tmp4.container, animatedStyle, hiddenStyles];
      cResult[9] = animatedStyle;
      cResult[10] = hiddenStyles;
      cResult[11] = tmp4.container;
      cResult[12] = items1;
      tmp22 = items1;
      const tmpResult5 = tmp(tmp2[22]);
    }
    const obj7 = { state, cleanUp };
    cResult[6] = cleanUp;
    cResult[7] = state;
    cResult[8] = obj7;
    tmp16 = obj7;
    const tmpResult4 = tmp(tmp2[20]);
  }
  const tmpResult = wrapperSpecs(controlsSpecs[19]);
  const dismissableCTAProps = wrapperSpecs(controlsSpecs[20]).getDismissableCTAProps({ dismissableContent: first, channel: stateFromStores });
  cResult[3] = stateFromStores;
  cResult[4] = first;
  cResult[5] = dismissableCTAProps;
  tmp13 = dismissableCTAProps;
  const tmpResult6 = wrapperSpecs(controlsSpecs[20]);
}) : ((wrapperSpecs) => {
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const accessoryHeights = wrapperSpecs.accessoryHeights;
  const controlsSpecs = wrapperSpecs.controlsSpecs;
  const gestureState = wrapperSpecs.gestureState;
  let safeArea;
  ({ state, cleanUp } = wrapperSpecs);
  const context = safeArea.useContext(accessoryHeights(controlsSpecs[16]));
  const windowDimensions = context.windowDimensions;
  const channelId = context.channelId;
  safeArea = context.safeArea;
  const tmp5 = accessoryHeights(controlsSpecs[17])(channelId);
  const tmp = closure_12();
  const tmp2 = accessoryHeights;
  const tmp3 = controlsSpecs;
  const dismissableContent = windowDimensions(wrapperSpecs(controlsSpecs[18]).useGetDismissibleContent(tmp5), 1)[0];
  let obj = wrapperSpecs(controlsSpecs[18]);
  let items = [dismissableContent];
  const stateFromStores = wrapperSpecs(controlsSpecs[19]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [dismissableContent, stateFromStores];
  const memo = safeArea.useMemo(() => VoicePanelFloatingCTAUtils.getDismissableCTAProps({ dismissableContent, channel: stateFromStores }), items1);
  let obj2 = wrapperSpecs(controlsSpecs[19]);
  const floatingCTAProps = wrapperSpecs(controlsSpecs[20]).useFloatingCTAProps(stateFromStores);
  let obj3 = wrapperSpecs(controlsSpecs[20]);
  ({ hiddenProps, hiddenStyles } = accessoryHeights(controlsSpecs[21])(context.mode, wrapperSpecs, { state, cleanUp }));
  const tmp10 = accessoryHeights(controlsSpecs[21])(context.mode, wrapperSpecs, { state, cleanUp });
  class H {
    constructor() {
      obj = closure_0(closure_2[23]);
      controlsDefaultWidth = obj.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
      obj1 = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * closure_1(closure_2[24])(controlsDefaultWidth / 2), transform: null };
      obj9 = { translateX: null };
      obj4 = closure_0(closure_2[25]);
      obj5 = wrapperSpecs;
      tmp2 = UI_SHOW_HIDE_PHYSICS;
      obj9.translateX = obj4.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS);
      items = [, ];
      items[0] = obj9;
      obj6 = closure_0(closure_2[25]);
      if (wrapperSpecs.get().hidden) {
        tmp3 = CALL_TILE_GUTTER;
        tmp5 = accessoryHeights;
        sum = obj5.get().height + CALL_TILE_GUTTER;
        y = sum + accessoryHeights.get();
      } else {
        obj7 = gestureState;
        if (gestureState.get().active) {
        }
        y = obj5.get().y;
      }
      obj10 = { translateY: obj6.withSpring(y, tmp2) };
      items[1] = obj10;
      obj1.transform = items;
      return obj1;
    }
  }
  let obj4 = wrapperSpecs(controlsSpecs[22]);
  H.__closure = { getControlsDefaultWidth: wrapperSpecs(controlsSpecs[23]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[24]), withSpring: wrapperSpecs(controlsSpecs[25]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: stateFromStores, gestureState, CALL_TILE_GUTTER: memo, accessoryHeights };
  H.__workletHash = 16149813178941;
  H.__initData = __initData2;
  const animatedStyle = obj4.useAnimatedStyle(H);
  let obj6 = { style: null, animatedProps: hiddenProps, children: null };
  const items2 = [tmp.container, animatedStyle, hiddenStyles];
  obj6.style = items2;
  const obj5 = { getControlsDefaultWidth: wrapperSpecs(controlsSpecs[23]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[24]), withSpring: wrapperSpecs(controlsSpecs[25]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: stateFromStores, gestureState, CALL_TILE_GUTTER: memo, accessoryHeights };
  if (null != memo) {
    const obj7 = {
      contentTypes: tmp5,
      children() {
          const merged = Object.assign(memo);
          return <closure_13 />;
        }
    };
    let tmp12Result = jsx(tmp2(tmp3[26]), {
      contentTypes: tmp5,
      children() {
          const merged = Object.assign(memo);
          return <closure_13 />;
        }
    });
  } else {
    tmp12Result = null;
    if (null != floatingCTAProps) {
      const obj8 = {};
      let merged = Object.assign(floatingCTAProps);
      tmp12Result = <closure_13 />;
    }
  }
  obj6.children = tmp12Result;
  return jsx(accessoryHeights(controlsSpecs[27]), { style: null, animatedProps: hiddenProps, children: null });
});
let closure_16 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default tmp2;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight() {
  return MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT) + 16;
};
export const renderVoicePanelFloatingCTA = function renderVoicePanelFloatingCTA(key, arg1, state, cleanUp) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const obj2 = {};
  const merged = Object.assign(arg1);
  obj2.state = state;
  obj2.cleanUp = cleanUp;
  obj.children = <closure_16 />;
  return jsx(native.ThemeContextProvider, { theme: ThemeTypes.DARK, children: null }, key);
};