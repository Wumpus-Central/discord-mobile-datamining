// === Module 20076: VoicePanelFloatingCTAContainer ===

// Module 20076 (VoicePanelFloatingCTAContainer)
import nativeDefault from "native" /* 575 */;
import _modDef1655 from "module_1655" /* 1655 */;
import native from "native" /* 5377 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import RowButton from "RowButton" /* 8108 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 13523 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19959 */;
import useChannelFloatingCTAContentDefault from "useChannelFloatingCTAContent" /* 19962 */;
import useControlsHiddenPresentationDefault from "useControlsHiddenPresentation" /* 20077 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;

require = fn;
function FloatingCTA(arg0) {
  ({ trailing, onPress } = arg0);
  const merged = Object.assign(arg0, Object.assign({ trailing: 0, onPress: 0 }));
  let tmp3 = null == trailing;
  if (tmp3) {
    tmp3 = null != onPress;
  }
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  obj.children = jsx(RowButton.RowButton, { experimental_withBlurBackground: true, arrow: tmp3, trailing, onPress });
  return jsx(Stack_Stack.Stack, { children: null });
}
class VoicePanelFloatingCTAContainer {
  constructor(arg0) {
    wrapperSpecs = global.wrapperSpecs;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    ({ accessoryHeights, controlsSpecs, state, cleanUp, gestureState } = global);
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp = closure_10();
    context = closure_4.useContext(closure_1(closure_2[13]));
    channelId = context.channelId;
    closure_0 = channelId;
    ({ windowDimensions, safeArea, mode, isDockEnabled, dockMinimizeProgress } = context);
    tmp5 = closure_1(closure_2[14])(channelId);
    obj = closure_0(closure_2[15]);
    first = closure_3(obj.useGetDismissibleContent(tmp5), 1)[0];
    closure_1 = first;
    obj2 = closure_0(closure_2[16]);
    items = [];
    items[0] = closure_5;
    stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(c0));
    closure_2 = stateFromStores;
    items1 = [, ];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = closure_4.useMemo(() => VoicePanelFloatingCTAUtils.getDismissableCTAProps({ dismissableContent, channel }), items1);
    closure_3 = memo;
    obj3 = closure_0(closure_2[17]);
    stageCTAProps = obj3.useStageCTAProps(stateFromStores);
    obj4 = closure_0(closure_2[17]);
    floatingCTAProps = obj4.useFloatingCTAProps(stateFromStores);
    tmp11 = closure_1(closure_2[18])(mode, wrapperSpecs, { state, cleanUp });
    ({ hiddenProps, hiddenStyles } = tmp11);
    obj5 = closure_0(closure_2[19]);
    items2 = [, , , , , , , , , , , , , ];
    items2[0] = closure_12;
    items2[1] = closure_0(closure_2[20]).getControlsDefaultWidth;
    items2[2] = windowDimensions;
    items2[3] = safeArea;
    items2[4] = wrapperSpecs;
    items2[5] = closure_7;
    items2[6] = accessoryHeights;
    items2[7] = gestureState;
    items2[8] = isDockEnabled;
    items2[9] = dockMinimizeProgress;
    items2[10] = controlsSpecs;
    items2[11] = closure_1(closure_2[21]);
    items2[12] = closure_0(closure_2[22]).withSpring;
    items2[13] = closure_6;
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
    closure_11 = undefined;
    closure_12 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
    class VoicePanelFloatingCTAContainerTsx1 {
      constructor() {
        tmp = closure_0(closure_1.get().width, closure_2.get().left, closure_2.get().right);
        obj = closure_3;
        sum = closure_3.get().height + closure_4;
        sum1 = sum + closure_5.get();
        tmp4 = sum1;
        if (!closure_3.get().hidden) {
          obj2 = closure_6;
          if (closure_6.get().active) {
            tmp4 = sum1;
          }
          tmp5 = closure_7;
          y = obj.get().y;
          if (closure_7) {
            tmp7 = closure_8;
            sum2 = y + closure_8.get() * sum1;
          } else {
            sum2 = y;
          }
          tmp8 = sum2;
        }
        obj1 = { bottom: closure_9.get().height + 16, width: tmp, marginLeft: -1 * closure_10(tmp / 2), transform: null };
        obj6 = { translateX: closure_11(obj.get().x, closure_12) };
        items = [, ];
        items[0] = obj6;
        obj7 = { translateY: closure_11(tmp4, closure_12) };
        items[1] = obj7;
        obj1.transform = items;
        return obj1;
      }
    }
    items3 = [, , , , , , , , , , , , ];
    items3[0] = tmp13;
    items3[1] = tmp14;
    items3[2] = tmp15;
    items3[3] = tmp16;
    items3[4] = tmp17;
    items3[5] = tmp18;
    items3[6] = tmp19;
    items3[7] = tmp20;
    items3[8] = tmp21;
    items3[9] = tmp22;
    items3[10] = tmp23;
    items3[11] = tmp24;
    items3[12] = tmp25;
    VoicePanelFloatingCTAContainerTsx1.__closure = items3;
    VoicePanelFloatingCTAContainerTsx1.__workletHash = 6234134411441;
    VoicePanelFloatingCTAContainerTsx1.__initData = tmp12;
    tmp27 = closure_9;
    animatedStyle = obj5.useAnimatedStyle(VoicePanelFloatingCTAContainerTsx1);
    obj1 = { style: null, animatedProps: hiddenProps, children: null };
    items4 = [, , ];
    items4[0] = tmp.container;
    items4[1] = animatedStyle;
    items4[2] = hiddenStyles;
    obj1.style = items4;
    if (null != stageCTAProps) {
      tmp33 = closure_11;
      obj10 = {};
      tmp34 = obj10;
      tmp35 = stageCTAProps;
      merged = Object.assign(stageCTAProps);
      tmp27Result = tmp27(closure_11, obj10);
    } else if (null != memo) {
      obj11 = { contentTypes: null, children: null };
      obj11.contentTypes = tmp5;
      obj11.children = function children() {
        const merged = Object.assign(c3);
        return <FloatingCTA />;
      };
      tmp27Result = tmp27(tmp2(tmp3[23]), obj11);
    } else {
      tmp27Result = null;
      if (null != floatingCTAProps) {
        tmp29 = closure_11;
        obj12 = {};
        tmp30 = obj12;
        tmp31 = floatingCTAProps;
        merged1 = Object.assign(floatingCTAProps);
        tmp27Result = tmp27(closure_11, obj12);
      }
    }
    obj1.children = tmp27Result;
    return tmp27(tmp2(tmp3[19]).View, obj1);
  }
}
const UI_SHOW_HIDE_PHYSICS = fn(11985).UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = fn(11988).CALL_TILE_GUTTER;
const ThemeTypes = fn(1083).ThemeTypes;
let jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = { container: null };
const rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
obj2.container = rect;
const refs = createStyles.createStyles(obj2);
let closure_12 = { code: "(function VoicePanelFloatingCTAContainerTsx1(){let[getControlsDefaultWidth,windowDimensions,safeArea,wrapperSpecs,CALL_TILE_GUTTER,accessoryHeights,gestureState,isDockEnabled,dockMinimizeProgress,controlsSpecs,roundToNearestPixel,withSpring,UI_SHOW_HIDE_PHYSICS]=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const offscreenY=wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get();let translateY;if(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop){translateY=offscreenY;}else if(isDockEnabled){translateY=wrapperSpecs.get().y+dockMinimizeProgress.get()*offscreenY;}else{translateY=wrapperSpecs.get().y;}return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(translateY,UI_SHOW_HIDE_PHYSICS)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export function getFloatingCTATotalViewHeight() {
  return MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT) + 16;
}
export function renderVoicePanelFloatingCTA(key, arg1, state, cleanUp) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const obj2 = {};
  const merged = Object.assign(arg1);
  obj2.state = state;
  obj2.cleanUp = cleanUp;
  obj.children = <VoicePanelFloatingCTAContainer />;
  return jsx(native.ThemeContextProvider, { theme: ThemeTypes.DARK, children: null }, key);
}