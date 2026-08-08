// discord_app/modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx
import _slicedToArray from "_slicedToArray";
import VOICE_PANEL_DRAWER_MAX_WIDTH from "VOICE_PANEL_DRAWER_MAX_WIDTH";
import ensureGuildLoaded from "ensureGuildLoaded";
import VoicePanelModes from "VoicePanelModes";
import { CALL_TILE_GUTTER } from "CARD_SIZE";
import { ThemeTypes } from "sum";
import { jsx } from "t";
import createCacheKey from "createCacheKey";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { RowButtonWrapper } from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

let MODE_CHANGE_PHYSICS;
let closure_6;
const require = arg1;
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
    useGetDismissibleContent = undefined;
    c10 = undefined;
    useMemo = undefined;
    tmp = c10();
    tmp2 = accessoryHeights;
    tmp3 = controlsSpecs;
    context = cleanUp.useContext(require("dismissPanel"));
    windowDimensions = context.windowDimensions;
    channelId = context.channelId;
    safeArea = context.safeArea;
    tmp5 = require("useChannelFloatingCTAContent")(channelId);
    obj = require("canShowTimeRecurringContent");
    first = state(obj.useGetDismissibleContent(tmp5), 1)[0];
    useGetDismissibleContent = first;
    obj2 = require("defaultAreStatesEqual");
    items = [];
    items[0] = gestureState;
    stateFromStores = obj2.useStateFromStores(items, () => gestureState.getChannel(channelId));
    c10 = stateFromStores;
    items1 = [, ];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = cleanUp.useMemo(() => {
      let obj = wrapperSpecs(controlsSpecs[17]);
      obj = { dismissableContent: first, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj);
    }, items1);
    useMemo = memo;
    obj3 = require("useFloatingCTAProps");
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    obj4 = require("module_4036");
    class A {
      constructor() {
        tmp = wrapperSpecs;
        tmp2 = controlsSpecs;
        obj = require("VOICE_PANEL_DRAWER_MAX_WIDTH");
        controlsDefaultWidth = obj.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        tmp4 = state;
        num = 1;
        if (state === require("wrapChildrenDefault").TransitionStates.YEETED) {
          num = 0;
        }
        obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * require("t")(controlsDefaultWidth / 2), opacity: null, transform: null };
        tmpResult = require("CONFIG_NEVER_ANIMATE");
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = _slicedToArray === outer1_0(outer1_2[20]).TransitionStates.YEETED;
          }
          if (tmp) {
            outer1_0(outer1_2[18]).runOnJS(VOICE_PANEL_DRAWER_MAX_WIDTH)();
            const obj = outer1_0(outer1_2[18]);
          }
        };
        obj1 = { state: tmp4, TransitionStates: require("wrapChildrenDefault").TransitionStates, runOnJS: require("module_4036").runOnJS, cleanUp };
        fn.__closure = obj1;
        fn.__workletHash = 7334460639890;
        fn.__initData = outer1_14;
        obj[3] = tmpResult.withSpring(num, outer1_12, "respect-motion-settings", fn);
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
    obj = { getControlsDefaultWidth: require("VOICE_PANEL_DRAWER_MAX_WIDTH").getControlsDefaultWidth, windowDimensions, safeArea, state, TransitionStates: require("wrapChildrenDefault").TransitionStates, controlsSpecs, roundToNearestPixel: require("t"), withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, OPACITY_CHANGE_PHYSICS: jsx, runOnJS: require("module_4036").runOnJS, cleanUp, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: windowDimensions, gestureState, CALL_TILE_GUTTER: channelId, accessoryHeights };
    A.__closure = obj;
    A.__workletHash = 3338259366067;
    A.__initData = jsx;
    tmp11 = useGetDismissibleContent;
    animatedStyle = obj4.useAnimatedStyle(A);
    obj1 = { style: items2, children: null };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = animatedStyle;
    tmp12 = require("module_8009");
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
        tmp14 = useMemo;
        obj3 = {};
        tmp15 = obj3;
        tmp16 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp11Result = tmp11(useMemo, obj3);
      }
    }
    obj1[1] = tmp11Result;
    return tmp11(tmp12, obj1);
  }
}
({ UI_SHOW_HIDE_PHYSICS: closure_6, MODE_CHANGE_PHYSICS } = VoicePanelModes);
createCacheKey = { container: null };
createCacheKey = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = {};
let merged = Object.assign(MODE_CHANGE_PHYSICS);
obj1.overshootClamping = true;
let closure_13 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,state,TransitionStates,controlsSpecs,roundToNearestPixel,withSpring,OPACITY_CHANGE_PHYSICS,runOnJS,cleanUp,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const opacity=state===TransitionStates.YEETED?0:1;return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,opacity:withSpring(opacity,OPACITY_CHANGE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_14 = { code: "function VoicePanelFloatingCTAContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight(chatInputFloating) {
  return useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(Themes.modules.mobile.TABLE_ROW_HEIGHT, chatInputFloating) + 16;
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