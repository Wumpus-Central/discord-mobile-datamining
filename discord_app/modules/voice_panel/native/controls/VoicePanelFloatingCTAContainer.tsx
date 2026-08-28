// === Module 16689: FloatingCTA ===

// Module 16689 (FloatingCTA)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import ManaContext from "ManaContext" /* 4173 */;
import Stack from "Stack" /* 4891 */;
import RowButtonWrapper from "RowButtonWrapper" /* 8311 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import VoicePanelModes from "VoicePanelModes" /* 11776 */;
import { CALL_TILE_GUTTER } from "CARD_SIZE" /* 11779 */;
import { ThemeTypes } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

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
    state = global.state;
    cleanUp = global.cleanUp;
    gestureState = global.gestureState;
    windowDimensions = undefined;
    channelId = undefined;
    safeArea = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    tmp = closure_10();
    tmp2 = accessoryHeights;
    tmp3 = controlsSpecs;
    context = cleanUp.useContext(require("dismissPanel"));
    windowDimensions = context.windowDimensions;
    channelId = context.channelId;
    safeArea = context.safeArea;
    tmp5 = require("useChannelFloatingCTAContent")(channelId);
    obj = require("canShowTimeRecurringContent");
    first = state(obj.useGetDismissibleContent(tmp5), 1)[0];
    closure_9 = first;
    obj2 = require("defaultAreStatesEqual");
    items = [];
    items[0] = gestureState;
    stateFromStores = obj2.useStateFromStores(items, () => gestureState.getChannel(channelId));
    closure_10 = stateFromStores;
    items1 = [, ];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = cleanUp.useMemo(() => {
      let obj = wrapperSpecs(controlsSpecs[17]);
      obj = { dismissableContent: first, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj);
    }, items1);
    closure_11 = memo;
    obj3 = require("useFloatingCTAProps");
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    obj4 = require("module_4186");
    class A {
      constructor() {
        tmp = wrapperSpecs;
        tmp2 = controlsSpecs;
        obj = require("VOICE_PANEL_DRAWER_MAX_WIDTH");
        controlsDefaultWidth = obj.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        tmp4 = state;
        num = 1;
        if (state === require("ManaContext").TransitionStates.YEETED) {
          num = 0;
        }
        obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * require("t")(controlsDefaultWidth / 2), opacity: null, transform: null };
        tmpResult = require("CONFIG_NEVER_ANIMATE");
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = closure_3 === closure_1_0(closure_1_2[12]).TransitionStates.YEETED;
          }
          if (tmp) {
            closure_1_0(closure_1_2[18]).runOnJS(closure_4)();
            const obj = closure_1_0(closure_1_2[18]);
          }
        };
        obj1 = { state: tmp4, TransitionStates: require("ManaContext").TransitionStates, runOnJS: require("module_4186").runOnJS, cleanUp };
        fn.__closure = obj1;
        fn.__workletHash = 7334460639890;
        fn.__initData = closure_1_14;
        obj[3] = tmpResult.withSpring(num, closure_1_12, "respect-motion-settings", fn);
        obj2 = { translateX: null };
        tmpResult1 = require("CONFIG_NEVER_ANIMATE");
        obj7 = wrapperSpecs;
        tmp5 = windowDimensions;
        obj2[0] = tmpResult1.withSpring(wrapperSpecs.get().x, windowDimensions);
        items = [, ];
        items[0] = obj2;
        tmpResult2 = require("CONFIG_NEVER_ANIMATE");
        if (wrapperSpecs.get().hidden) {
          tmp6 = channelId;
          tmp8 = accessoryHeights;
          sum = obj7.get().height + channelId;
          y = sum + accessoryHeights.get();
        } else {
          obj9 = gestureState;
          if (gestureState.get().active) {
          }
          y = obj7.get().y;
        }
        obj3 = { translateY: tmpResult2.withSpring(y, tmp5) };
        items[1] = obj3;
        obj[4] = items;
        return obj;
      }
    }
    obj = { getControlsDefaultWidth: require("VOICE_PANEL_DRAWER_MAX_WIDTH").getControlsDefaultWidth, windowDimensions, safeArea, state, TransitionStates: require("ManaContext").TransitionStates, controlsSpecs, roundToNearestPixel: require("t"), withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, OPACITY_CHANGE_PHYSICS: closure_12, runOnJS: require("module_4186").runOnJS, cleanUp, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: windowDimensions, gestureState, CALL_TILE_GUTTER: channelId, accessoryHeights };
    A.__closure = obj;
    A.__workletHash = 3338259366067;
    A.__initData = closure_13;
    tmp11 = closure_9;
    animatedStyle = obj4.useAnimatedStyle(A);
    obj1 = { style: items2, children: null };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = animatedStyle;
    tmp12 = require("set");
    if (null != memo) {
      obj2 = { contentTypes: null, children: null };
      obj2[0] = tmp5;
      obj2[1] = function children() {
        const merged = Object.assign(memo);
        return first(memo, {});
      };
      tmp11Result = tmp11(require("SelectedDismissibleContent"), obj2);
    } else {
      tmp11Result = null;
      if (null != floatingCTAProps) {
        tmp14 = closure_11;
        obj3 = {};
        tmp15 = obj3;
        tmp16 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp11Result = tmp11(closure_11, obj3);
      }
    }
    obj1[1] = tmp11Result;
    return tmp11(tmp12, obj1);
  }
}
({ UI_SHOW_HIDE_PHYSICS: closure_6, MODE_CHANGE_PHYSICS } = VoicePanelModes);
createCacheKey = { container: null };
createCacheKey = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = {};
let merged = Object.assign(MODE_CHANGE_PHYSICS);
obj1.overshootClamping = true;
let closure_13 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,state,TransitionStates,controlsSpecs,roundToNearestPixel,withSpring,OPACITY_CHANGE_PHYSICS,runOnJS,cleanUp,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const opacity=state===TransitionStates.YEETED?0:1;return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,opacity:withSpring(opacity,OPACITY_CHANGE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_14 = { code: "function VoicePanelFloatingCTAContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight(chatInputFloating) {
  return useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, chatInputFloating) + 16;
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