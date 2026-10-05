// === Module 17320: VoicePanelFloatingCTAContainer ===

// Module 17320 (VoicePanelFloatingCTAContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 4589 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import spring from "spring" /* 5597 */;
import RowButton2 from "RowButton" /* 8897 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11813 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11905 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11909 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17222 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_7, trailing;

let rect;
let closure_3 = ["trailing"];
const UI_SHOW_HIDE_PHYSICS = VoicePanelConstants.UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let obj = { container: rect };
rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((trailing) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== trailing) {
    trailing = trailing.trailing;
    const tmp8 = _objectWithoutProperties(trailing, closure_3);
    cResult[0] = trailing;
    cResult[1] = tmp8;
    cResult[2] = trailing;
    tmp5 = trailing;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === null == tmp5) {
      let tmp10;
      if (cResult[5] === tmp5) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const Stack = Stack_Stack.Stack;
  const RowButton = RowButton2.RowButton;
  const merged = Object.assign(tmp4);
  const tmp12 = <Stack>{null}</Stack>;
  cResult[3] = tmp4;
  cResult[4] = null == tmp5;
  cResult[5] = tmp5;
  cResult[6] = tmp12;
  tmp10 = tmp12;
}) : ((trailing) => {
  trailing = trailing.trailing;
  const merged = Object.assign(trailing, Object.assign({ trailing: 0 }));
  const Stack = Stack_Stack.Stack;
  const RowButton = RowButton2.RowButton;
  const merged1 = Object.assign(merged);
  return <Stack>{null}</Stack>;
});
const __initData = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData2 = { code: "function VoicePanelFloatingCTAContainerTsx2(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperSpecs) => {
  let cleanUp;
  let controlsSpecs;
  let first1;
  let gestureState;
  let hiddenProps;
  let hiddenStyles;
  let safeArea;
  let state;
  let tmp11;
  const tmp = wrapperSpecs;
  let obj = wrapperSpecs(controlsSpecs[12]);
  const cResult = obj.c(21);
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const accessoryHeights = wrapperSpecs.accessoryHeights;
  controlsSpecs = wrapperSpecs.controlsSpecs;
  ({ state, cleanUp, gestureState } = wrapperSpecs);
  const tmp4 = closure_12();
  const context = safeArea.useContext(accessoryHeights(controlsSpecs[16]));
  const windowDimensions = context.windowDimensions;
  const channelId = context.channelId;
  safeArea = context.safeArea;
  const mode = context.mode;
  const tmp7 = accessoryHeights(controlsSpecs[17])(channelId);
  let obj2 = wrapperSpecs(controlsSpecs[18]);
  const first = windowDimensions(obj2.useGetDismissibleContent(tmp7), 1)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [closure_7];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = tmp(controlsSpecs[19]);
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp11);
  if (cResult[3] === stateFromStores) {
    let tmp13;
    if (cResult[4] === first) {
      tmp13 = cResult[5];
    }
    closure_7 = tmp13;
    const tmpResult4 = tmp(controlsSpecs[20]);
    const floatingCTAProps = tmpResult4.useFloatingCTAProps(stateFromStores);
    if (cResult[6] === cleanUp) {
      let tmp16;
      if (cResult[7] === state) {
        tmp16 = cResult[8];
      }
      ({ hiddenProps, hiddenStyles } = accessoryHeights(controlsSpecs[21])(mode, wrapperSpecs, tmp16));
      accessoryHeights(controlsSpecs[21])(mode, wrapperSpecs, tmp16);
      const fn2 = function k() {
        let items;
        let obj3;
        let y;
        const getControlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth;
        VoicePanelControlsUtils;
        const width = windowDimensions.get().width;
        const controlsDefaultWidth = getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right);
        const obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * roundToNearestPixelDefault(controlsDefaultWidth / 2), transform: items };
        const obj2 = { translateX: obj3.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS) };
        items = [obj2, ];
        obj3 = spring;
        const withSpring = spring.withSpring;
        spring;
        if (wrapperSpecs.get().hidden) {
          const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
          y = sum + accessoryHeights.get();
        } else {
          y = wrapperSpecs.get().y;
        }
        items[1] = { translateY: withSpring(y, UI_SHOW_HIDE_PHYSICS) };
        ({ translateY: withSpring(y, UI_SHOW_HIDE_PHYSICS) });
        return obj;
      };
      let obj3 = { getControlsDefaultWidth: tmp(controlsSpecs[23]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[24]), withSpring: tmp(controlsSpecs[25]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS, gestureState, CALL_TILE_GUTTER, accessoryHeights };
      const useAnimatedStyle = tmp(controlsSpecs[22]).useAnimatedStyle;
      tmp(controlsSpecs[22]);
      fn2.__closure = obj3;
      fn2.__workletHash = 10861017326398;
      fn2.__initData = __initData;
      const animatedStyle = useAnimatedStyle(fn2);
      if (cResult[9] === animatedStyle) {
        if (cResult[10] === hiddenStyles) {
          let tmp23;
          let tmp26;
          if (cResult[11] === tmp4.container) {
            tmp23 = cResult[12];
          }
          if (cResult[13] === tmp7) {
            if (cResult[14] === tmp13) {
              let tmp24;
              if (cResult[15] === floatingCTAProps) {
                tmp24 = cResult[16];
              }
              if (cResult[17] === hiddenProps) {
                if (cResult[18] === tmp23) {
                  let tmp33;
                  if (cResult[19] === tmp24) {
                    tmp33 = cResult[20];
                  }
                  return tmp33;
                }
              }
              const tmp35 = jsx(accessoryHeights(controlsSpecs[27]), { style: tmp23, animatedProps: hiddenProps, children: tmp24 });
              cResult[17] = hiddenProps;
              cResult[18] = tmp23;
              cResult[19] = tmp24;
              cResult[20] = tmp35;
              tmp33 = tmp35;
            }
          }
          if (null != tmp13) {
            tmp26 = jsx(tmp5(tmp2[26]), {
              contentTypes: tmp7,
              children() {
                          const merged = Object.assign(closure_7);
                          return <closure_13 />;
                        }
            });
          } else {
            tmp26 = null;
            if (null != floatingCTAProps) {
              let merged = Object.assign(floatingCTAProps);
              tmp26 = <closure_13 />;
            }
          }
          cResult[13] = tmp7;
          cResult[14] = tmp13;
          cResult[15] = floatingCTAProps;
          cResult[16] = tmp26;
          tmp24 = tmp26;
        }
      }
      const items1 = [tmp4.container, animatedStyle, hiddenStyles];
      cResult[9] = animatedStyle;
      cResult[10] = hiddenStyles;
      cResult[11] = tmp4.container;
      cResult[12] = items1;
      tmp23 = items1;
    }
    const obj7 = { state, cleanUp };
    cResult[6] = cleanUp;
    cResult[7] = state;
    cResult[8] = obj7;
    tmp16 = obj7;
  }
  const tmpResult6 = tmp(controlsSpecs[20]);
  const dismissableCTAProps = tmpResult6.getDismissableCTAProps({ dismissableContent: first, channel: stateFromStores });
  cResult[3] = stateFromStores;
  cResult[4] = first;
  cResult[5] = dismissableCTAProps;
  tmp13 = dismissableCTAProps;
}) : ((wrapperSpecs) => {
  let cleanUp;
  let hiddenProps;
  let hiddenStyles;
  let state;
  let tmp12Result;
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const accessoryHeights = wrapperSpecs.accessoryHeights;
  const controlsSpecs = wrapperSpecs.controlsSpecs;
  const gestureState = wrapperSpecs.gestureState;
  let safeArea;
  ({ state, cleanUp } = wrapperSpecs);
  const tmp = closure_12();
  const context = safeArea.useContext(accessoryHeights(controlsSpecs[16]));
  const windowDimensions = context.windowDimensions;
  const channelId = context.channelId;
  safeArea = context.safeArea;
  const mode = context.mode;
  const tmp5 = accessoryHeights(controlsSpecs[17])(channelId);
  let obj = wrapperSpecs(controlsSpecs[18]);
  const dismissableContent = windowDimensions(obj.useGetDismissibleContent(tmp5), 1)[0];
  let obj2 = wrapperSpecs(controlsSpecs[19]);
  let items = [dismissableContent];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [dismissableContent, stateFromStores];
  const memo = safeArea.useMemo(() => {
    const obj = VoicePanelFloatingCTAUtils;
    const obj2 = { dismissableContent, channel: stateFromStores };
    return obj.getDismissableCTAProps(obj2);
  }, items1);
  let obj3 = wrapperSpecs(controlsSpecs[20]);
  const floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
  ({ hiddenProps, hiddenStyles } = accessoryHeights(controlsSpecs[21])(mode, wrapperSpecs, { state, cleanUp }));
  accessoryHeights(controlsSpecs[21])(mode, wrapperSpecs, { state, cleanUp });
  const obj4 = wrapperSpecs(controlsSpecs[22]);
  const tmp2 = accessoryHeights;
  const tmp3 = controlsSpecs;
  class H {
    constructor() {
      let items;
      let obj3;
      let y;
      const getControlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth;
      VoicePanelControlsUtils;
      const width = windowDimensions.get().width;
      const controlsDefaultWidth = getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right);
      const obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * roundToNearestPixelDefault(controlsDefaultWidth / 2), transform: items };
      const obj2 = { translateX: obj3.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS) };
      items = [obj2, ];
      obj3 = spring;
      const withSpring = spring.withSpring;
      spring;
      if (wrapperSpecs.get().hidden) {
        const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
        y = sum + accessoryHeights.get();
      } else {
        y = wrapperSpecs.get().y;
      }
      items[1] = { translateY: withSpring(y, UI_SHOW_HIDE_PHYSICS) };
      ({ translateY: withSpring(y, UI_SHOW_HIDE_PHYSICS) });
      return obj;
    }
  }
  H.__closure = { getControlsDefaultWidth: wrapperSpecs(controlsSpecs[23]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[24]), withSpring: wrapperSpecs(controlsSpecs[25]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: stateFromStores, gestureState, CALL_TILE_GUTTER: memo, accessoryHeights };
  H.__workletHash = 16149813178941;
  H.__initData = __initData2;
  ({ getControlsDefaultWidth: wrapperSpecs(controlsSpecs[23]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[24]), withSpring: wrapperSpecs(controlsSpecs[25]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: stateFromStores, gestureState, CALL_TILE_GUTTER: memo, accessoryHeights });
  const animatedStyle = obj4.useAnimatedStyle(H);
  const items2 = [tmp.container, animatedStyle, hiddenStyles];
  accessoryHeights(controlsSpecs[27]);
  if (null != memo) {
    tmp12Result = jsx(tmp2(tmp3[26]), {
      contentTypes: tmp5,
      children() {
          const merged = Object.assign(memo);
          return <closure_13 />;
        }
    });
  } else {
    tmp12Result = null;
    if (null != floatingCTAProps) {
      let merged = Object.assign(floatingCTAProps);
      tmp12Result = <closure_13 />;
    }
  }
  return <tmp13 style={items2} animatedProps={hiddenProps}>{tmp12Result}</tmp13>;
});
let closure_16 = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default tmp2;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight() {
  const obj = MobileVisualRefreshExperiment;
  return obj.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT) + 16;
};
export const renderVoicePanelFloatingCTA = function renderVoicePanelFloatingCTA(key, arg1, state, cleanUp) {
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(arg1);
  return <ThemeContextProvider key={key} theme={ThemeTypes.DARK}>{null}</ThemeContextProvider>;
};