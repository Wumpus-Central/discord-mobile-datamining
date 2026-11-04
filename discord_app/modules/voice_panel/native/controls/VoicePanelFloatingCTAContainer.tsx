// === Module 19565: VoicePanelFloatingCTAContainer ===

// Module 19565 (VoicePanelFloatingCTAContainer)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import native from "native" /* 5207 */;
import Stack_Stack from "Stack/Stack" /* 6162 */;
import RowButton from "RowButton" /* 8319 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11409 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12628 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12739 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19428 */;
import useChannelFloatingCTAContentDefault from "useChannelFloatingCTAContent" /* 19432 */;
import useControlsHiddenPresentationDefault from "useControlsHiddenPresentation" /* 19566 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;

require = fn;
function FloatingCTA(trailing) {
  trailing = trailing.trailing;
  const merged = Object.assign(trailing, Object.assign({ trailing: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  obj.children = jsx(RowButton.RowButton, { experimental_withBlurBackground: true, arrow: null == trailing, trailing });
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
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    tmp10 = closure_1(closure_2[18])(mode, wrapperSpecs, { state, cleanUp });
    ({ hiddenProps, hiddenStyles } = tmp10);
    obj4 = closure_0(closure_2[19]);
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
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
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
    items3[0] = tmp12;
    items3[1] = tmp13;
    items3[2] = tmp14;
    items3[3] = tmp15;
    items3[4] = tmp16;
    items3[5] = tmp17;
    items3[6] = tmp18;
    items3[7] = tmp19;
    items3[8] = tmp20;
    items3[9] = tmp21;
    items3[10] = tmp22;
    items3[11] = tmp23;
    items3[12] = tmp24;
    VoicePanelFloatingCTAContainerTsx1.__closure = items3;
    VoicePanelFloatingCTAContainerTsx1.__workletHash = 6234134411441;
    VoicePanelFloatingCTAContainerTsx1.__initData = tmp11;
    tmp26 = closure_9;
    animatedStyle = obj4.useAnimatedStyle(VoicePanelFloatingCTAContainerTsx1);
    obj1 = { style: null, animatedProps: hiddenProps, children: null };
    items4 = [, , ];
    items4[0] = tmp.container;
    items4[1] = animatedStyle;
    items4[2] = hiddenStyles;
    obj1.style = items4;
    if (null != memo) {
      obj8 = { contentTypes: null, children: null };
      obj8.contentTypes = tmp5;
      obj8.children = function children() {
        const merged = Object.assign(c3);
        return <FloatingCTA />;
      };
      tmp26Result = tmp26(tmp2(tmp3[23]), obj8);
    } else {
      tmp26Result = null;
      if (null != floatingCTAProps) {
        tmp28 = closure_11;
        obj9 = {};
        tmp29 = obj9;
        tmp30 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp26Result = tmp26(closure_11, obj9);
      }
    }
    obj1.children = tmp26Result;
    return tmp26(tmp2(tmp3[19]).View, obj1);
  }
}
const UI_SHOW_HIDE_PHYSICS = fn(11410).UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = fn(11413).CALL_TILE_GUTTER;
const ThemeTypes = fn(1083).ThemeTypes;
let jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = { container: null };
const rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
obj2.container = rect;
let closure_10 = createStyles.createStyles(obj2);
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