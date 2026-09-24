// discord_app/modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import MobileVisualRefreshExperiment from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import VoicePanelControlsUtils from "../utils/VoicePanelControlsUtils.tsx";
import VoicePanelFloatingCTAUtils from "utils/VoicePanelFloatingCTAUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

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
    accessoryHeights = global.accessoryHeights;
    controlsSpecs = global.controlsSpecs;
    gestureState = global.gestureState;
    windowDimensions = undefined;
    channelId = undefined;
    safeArea = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    ({ state, cleanUp } = global);
    tmp = closure_10();
    tmp2 = accessoryHeights;
    tmp3 = controlsSpecs;
    context = windowDimensions.useContext(accessoryHeights(controlsSpecs[13]));
    windowDimensions = context.windowDimensions;
    channelId = context.channelId;
    safeArea = context.safeArea;
    tmp5 = accessoryHeights(controlsSpecs[14])(channelId);
    obj = wrapperSpecs(controlsSpecs[15]);
    first = gestureState(obj.useGetDismissibleContent(tmp5), 1)[0];
    closure_7 = first;
    obj2 = wrapperSpecs(controlsSpecs[16]);
    items = [];
    items[0] = channelId;
    stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
    closure_8 = stateFromStores;
    items1 = [,];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = windowDimensions.useMemo(
      () => VoicePanelFloatingCTAUtils.getDismissableCTAProps({ dismissableContent, channel: stateFromStores }),
      items1,
    );
    closure_9 = memo;
    obj3 = wrapperSpecs(controlsSpecs[17]);
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    tmp10 = accessoryHeights(controlsSpecs[18])(context.mode, wrapperSpecs, { state, cleanUp });
    ({ hiddenProps, hiddenStyles } = tmp10);
    obj4 = wrapperSpecs(controlsSpecs[19]);
    fn = function f() {
      const controlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth(
        windowDimensions.get().width,
        safeArea.get().left,
        safeArea.get().right,
      );
      const obj2 = {
        bottom: controlsSpecs.get().height + 16,
        width: controlsDefaultWidth,
        marginLeft: -1 * roundToNearestPixelDefault(controlsDefaultWidth / 2),
        transform: null,
      };
      const obj3 = { translateX: null };
      obj3.translateX = spring.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS);
      const items = [obj3];
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
    obj1 = {
      getControlsDefaultWidth: wrapperSpecs(controlsSpecs[20]).getControlsDefaultWidth,
      windowDimensions,
      safeArea,
      controlsSpecs,
      roundToNearestPixel: accessoryHeights(controlsSpecs[21]),
      withSpring: wrapperSpecs(controlsSpecs[22]).withSpring,
      wrapperSpecs,
      UI_SHOW_HIDE_PHYSICS: safeArea,
      gestureState,
      CALL_TILE_GUTTER: closure_7,
      accessoryHeights,
    };
    fn.__closure = obj1;
    fn.__workletHash = 10861017326398;
    fn.__initData = closure_12;
    tmp12 = closure_9;
    animatedStyle = obj4.useAnimatedStyle(fn);
    obj9 = { style: null, animatedProps: hiddenProps, children: null };
    items2 = [, ,];
    items2[0] = tmp.container;
    items2[1] = animatedStyle;
    items2[2] = hiddenStyles;
    obj9.style = items2;
    tmp13 = accessoryHeights(controlsSpecs[23]);
    if (null != memo) {
      obj10 = { contentTypes: null, children: null };
      obj10.contentTypes = tmp5;
      obj10.children = function children() {
        const merged = Object.assign(memo);
        return <FloatingCTA />;
      };
      tmp12Result = tmp12(tmp2(tmp3[24]), obj10);
    } else {
      tmp12Result = null;
      if (null != floatingCTAProps) {
        tmp15 = FloatingCTA;
        obj11 = {};
        tmp16 = obj11;
        tmp17 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp12Result = tmp12(FloatingCTA, obj11);
      }
    }
    obj9.children = tmp12Result;
    return tmp12(tmp13, obj9);
  }
}
const UI_SHOW_HIDE_PHYSICS = fn(12615).UI_SHOW_HIDE_PHYSICS;
let CALL_TILE_GUTTER = fn(12618).CALL_TILE_GUTTER;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { container: null };
const rect = {
  zIndex: 1,
  position: "absolute",
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  alignItems: "center",
  borderRadius: nativeDefault.radii.lg,
};
obj2.container = rect;
let closure_10 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight() {
  return MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT) + 16;
};
export const renderVoicePanelFloatingCTA = function renderVoicePanelFloatingCTA(key, arg1, state, cleanUp) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const obj2 = {};
  const merged = Object.assign(arg1);
  obj2.state = state;
  obj2.cleanUp = cleanUp;
  obj.children = <VoicePanelFloatingCTAContainer />;
  return jsx(native.ThemeContextProvider, { theme: ThemeTypes.DARK, children: null }, key);
};
