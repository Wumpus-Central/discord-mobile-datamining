// === Module 16993: FloatingCTA ===

// Module 16993 (FloatingCTA)
import ThemesDefault from "Themes" /* 709 */;
import ManaContext from "ManaContext" /* 4204 */;
import Stack from "Stack" /* 4926 */;
import RowButtonWrapper from "RowButtonWrapper" /* 8374 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 15844 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import { UI_SHOW_HIDE_PHYSICS } from "VoicePanelModes" /* 12063 */;
import { CALL_TILE_GUTTER } from "CARD_SIZE" /* 12066 */;
import { ThemeTypes } from "sum" /* 502 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function FloatingCTA(trailing) {
  trailing = trailing.trailing;
  const merged = Object.assign(trailing, Object.create(null));
  let obj = { children: null };
  obj = { experimental_withBlurBackground: true, arrow: null == trailing, trailing };
  const merged1 = Object.assign(merged);
  obj[0] = jsx(RowButtonWrapper.RowButton, { experimental_withBlurBackground: true, arrow: null == trailing, trailing });
  return jsx(Stack.Stack, { experimental_withBlurBackground: true, arrow: null == trailing, trailing });
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
    context = windowDimensions.useContext(require("dismissPanel"));
    windowDimensions = context.windowDimensions;
    channelId = context.channelId;
    safeArea = context.safeArea;
    tmp5 = require("useChannelFloatingCTAContent")(channelId);
    obj = require("canShowTimeRecurringContent");
    first = gestureState(obj.useGetDismissibleContent(tmp5), 1)[0];
    closure_7 = first;
    obj2 = require("defaultAreStatesEqual");
    items = [];
    items[0] = channelId;
    stateFromStores = obj2.useStateFromStores(items, () => channelId.getChannel(channelId));
    closure_8 = stateFromStores;
    items1 = [, ];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = windowDimensions.useMemo(() => {
      let obj = wrapperSpecs(controlsSpecs[17]);
      obj = { dismissableContent: first, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj);
    }, items1);
    closure_9 = memo;
    obj3 = require("useFloatingCTAProps");
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    tmp10 = require("useControlsHiddenPresentation")(context.mode, wrapperSpecs, { state, cleanUp });
    ({ hiddenProps, hiddenStyles } = tmp10);
    obj4 = require("module_4217");
    fn = function f() {
      let obj = wrapperSpecs(controlsSpecs[20]);
      const controlsDefaultWidth = obj.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
      obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * accessoryHeights(controlsSpecs[21])(controlsDefaultWidth / 2), transform: null };
      obj = { translateX: wrapperSpecs(controlsSpecs[22]).withSpring(wrapperSpecs.get().x, safeArea) };
      const items = [obj, ];
      const obj4 = wrapperSpecs(controlsSpecs[22]);
      const tmp2 = safeArea;
      if (wrapperSpecs.get().hidden) {
        const sum = obj5.get().height + first;
        let y = sum + accessoryHeights.get();
      } else {
        y = obj5.get().y;
        const obj7 = gestureState;
      }
      const obj6 = wrapperSpecs(controlsSpecs[22]);
      items[1] = { translateY: wrapperSpecs(controlsSpecs[22]).withSpring(y, tmp2) };
      obj[3] = items;
      return obj;
    };
    obj = { getControlsDefaultWidth: require("VOICE_PANEL_DRAWER_MAX_WIDTH").getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: require("t"), withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: safeArea, gestureState, CALL_TILE_GUTTER: closure_7, accessoryHeights };
    fn.__closure = obj;
    fn.__workletHash = 10861017326398;
    fn.__initData = closure_12;
    tmp12 = closure_9;
    animatedStyle = obj4.useAnimatedStyle(fn);
    obj1 = { style: items2, animatedProps: hiddenProps, children: null };
    items2 = [, , ];
    items2[0] = tmp.container;
    items2[1] = animatedStyle;
    items2[2] = hiddenStyles;
    tmp13 = require("set");
    if (null != memo) {
      obj2 = { contentTypes: null, children: null };
      obj2[0] = tmp5;
      obj2[1] = function children() {
        const merged = Object.assign(memo);
        return memo(closure_1_11, {});
      };
      tmp12Result = tmp12(require("SelectedDismissibleContent"), obj2);
    } else {
      tmp12Result = null;
      if (null != floatingCTAProps) {
        tmp15 = FloatingCTA;
        obj3 = {};
        tmp16 = obj3;
        tmp17 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp12Result = tmp12(FloatingCTA, obj3);
      }
    }
    obj1[2] = tmp12Result;
    return tmp12(tmp13, obj1);
  }
}
createCacheKey = { container: null };
createCacheKey = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight() {
  return useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT) + 16;
};
export const renderVoicePanelFloatingCTA = function renderVoicePanelFloatingCTA(arg0, arg1, state, cleanUp) {
  let obj = { theme: ThemeTypes.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg1);
  obj.state = state;
  obj.cleanUp = cleanUp;
  obj[1] = <VoicePanelFloatingCTAContainer />;
  return jsx(ManaContext.ThemeContextProvider, {}, arg0);
};