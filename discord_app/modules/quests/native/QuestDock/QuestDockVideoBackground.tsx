// discord_app/modules/quests/native/QuestDock/QuestDockVideoBackground.tsx
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import NativeImageManagerModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import LinearGradientDefault from "../../../../../_runtime/05347_LinearGradient.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useStateFromSharedValueDefault from "../../../reanimated/native/useStateFromSharedValue.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext.tsx";
import useIsQuestDockModeActiveOrExitingDefault from "useIsQuestDockModeActiveOrExiting.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const _modDef1655 = _mod1655;

require = fn;
function QuestDockBackgroundMediaFade(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_18();
  items = [
    closure_19,
    spring_spring.withSpring,
    noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode,
    QuestDockMode,
    refs,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class QuestDockVideoBackgroundTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7];
  QuestDockVideoBackgroundTsx1.__closure = items1;
  QuestDockVideoBackgroundTsx1.__workletHash = 17022773946287;
  QuestDockVideoBackgroundTsx1.__initData = tmp3;
  const animatedStyle = _mod1655.useAnimatedStyle(QuestDockVideoBackgroundTsx1);
  const obj2 = { style: null, children };
  const items2 = [tmp.media, style, animatedStyle];
  obj2.style = items2;
  return state(_modDef1655.View, obj2);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, Pressable: closure_6, StyleSheet, View: metroImportDefault } = get_ActivityIndicator);
let QuestDockMode = fn(6437).QuestDockMode;
const QuestDockConstants = fn(16529);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 } =
  QuestDockConstants);
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(4792);
let obj2 = {
  backgroundWrapper: null,
  backgroundImage: null,
  backgroundImageWrapper: null,
  backgroundVideo: null,
  media: null,
  backgroundGradient: null,
  backdrop: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = undefined;
obj4.bottom = undefined;
obj4.zIndex = 1;
obj2.backgroundWrapper = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.resizeMode = "cover";
obj2.backgroundImage = obj5;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundImageWrapper = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundVideo = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundGradient = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backdrop = {};
let closure_18 = createStyles.createStyles(obj2);
let closure_19 = {
  code: "(function QuestDockVideoBackgroundTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
let closure_21 = {
  code: "(function QuestDockVideoBackgroundTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions]=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};})",
};
let closure_22 = {
  code: "(function QuestDockVideoBackgroundTsx3(){let[withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default noop.memo(function QuestDockVideoBackground(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  _require = imageUrl;
  ({ videoUrl, collapsedMediaMode } = imageUrl);
  if (collapsedMediaMode === undefined) {
    collapsedMediaMode = obj.PAUSED;
  }
  const gradientBaseColor = imageUrl.gradientBaseColor;
  importDefault = gradientBaseColor;
  ({ backdropColor, expandedHeight } = imageUrl);
  dependencyMap = expandedHeight;
  ({ onPress, disabled, foregroundContent } = imageUrl);
  if (disabled === undefined) {
    disabled = false;
  }
  noop = undefined;
  c8 = undefined;
  QuestDockMode = undefined;
  let tmp3 = closure_18();
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  noop = activeQuestDockMode;
  const setRestingQuestDockMode = noop.useContext(
    require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  const height = useWindowDimensionsDefault().height;
  c6 = height;
  const top = useSafeAreaInsetsDefault().top;
  const tmp8 = useStateFromSharedValueDefault(activeQuestDockMode);
  items = [c8];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined5.useReducedMotion);
  const memo = noop.useMemo(() => {
    const obj = { height: QuestDockUtils.getQuestDockExpandedHeightLimits(c6, top, c2).maxHeight };
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = noop.useMemo(() => {
    closure_0 = _modDef671(c1);
    return closure_15.map((item) => closure_0.alpha(item).hex());
  }, items2);
  let obj2 = require("initialize");
  const items3 = [
    closure_21,
    require("spring/spring").withSpring,
    activeQuestDockMode,
    QuestDockMode,
    closure_11,
    closure_10,
    context.windowDimensions,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items3;
  class QuestDockVideoBackgroundTsx2 {
    constructor() {
      tmp = closure_0;
      obj = closure_1;
      num = 0;
      tmp2 = closure_2;
      if (closure_1.get() === closure_2.COLLAPSED) {
        tmp3 = closure_3;
        num2 = -1;
        num = -1 * closure_3;
      }
      obj1 = { translateX: tmp(num, closure_4) };
      tmp4 = closure_4;
      items = [,];
      items[0] = obj1;
      num3 = 0;
      if (obj.get() === tmp2.COLLAPSED) {
        tmp5 = closure_3;
        num4 = -1;
        num3 = -1 * closure_3;
      }
      obj5 = { transform: null, width: null };
      obj6 = { translateY: tmp(num3, tmp4) };
      items[1] = obj6;
      obj5.transform = items;
      obj5.width = closure_5.get().width;
      return obj5;
    }
  }
  const items4 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  QuestDockVideoBackgroundTsx2.__closure = items4;
  QuestDockVideoBackgroundTsx2.__workletHash = 3758457817349;
  QuestDockVideoBackgroundTsx2.__initData = tmp14;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(
    QuestDockVideoBackgroundTsx2,
  );
  let obj3 = require("../../../../../_runtime/metro/01655__.js");
  const tmp22 = useIsQuestDockModeActiveOrExitingDefault(QuestDockMode.EXPANDED);
  const tmp23 = _slicedToArray;
  [tmp25, c8] = noop.useState("active" !== c5.currentState);
  const items5 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = obj.useEffect(() => {
    closure_0 = _undefined4.addEventListener("change", (event) => {
      _undefined5("active" !== event);
      let tmp3 = c0(dependencyMap[21]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = _undefined3.get() === constants.EXPANDED;
      }
      if (tmp3) {
        _undefined4(constants.COLLAPSED);
      }
      const obj = c0(dependencyMap[21]);
    });
    return () => {
      closure_0.remove();
    };
  }, items5);
  let isRendered = !tmp25;
  if (!tmp25) {
    isRendered = noop.useContext(QuestDockVisibilityContextDefault).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoUrl;
  }
  if (isRendered) {
    isRendered = !tmp4(1380).isAndroid();
    const tmp4Result = tmp4(1380);
  }
  if (isRendered) {
    isRendered = tmp4(9833).isHeroVideoSupported(imageUrl.videoMimetype);
    const tmp4Result3 = tmp4(9833);
  }
  if (isRendered) {
    let tmp28 = !tmp2;
    if (tmp2) {
      tmp28 = tmp22;
    }
    isRendered = tmp28;
  }
  const tmp24 = _slicedToArray(noop.useState("active" !== c5.currentState), 2);
  [tmp30, tmp31] = tmp23(noop.useState(false), 2);
  QuestDockMode = tmp31;
  let tmp33 = tmp30;
  const callback = obj.useCallback(() => {
    _undefined6(true);
  }, []);
  if (tmp30) {
    tmp33 = !isRendered;
  }
  if (tmp33) {
    tmp31(false);
  }
  const items6 = [imageUrl, collapsedMediaMode === obj.HIDDEN];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != uri;
    if (tmp2) {
      tmp2 = c3;
    }
    if (tmp2) {
      const obj2 = { uri };
      NativeImageManagerModuleDefault.preload(obj2);
    }
  }, items6);
  const tmp23Result = tmp23(noop.useState(false), 2);
  const items7 = [
    closure_22,
    require("spring/spring").withSpring,
    isRendered,
    tmp30,
    collapsedMediaMode === obj.HIDDEN,
    activeQuestDockMode,
    QuestDockMode,
    closure_10,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items7;
  class QuestDockVideoBackgroundTsx3 {
    constructor() {
      num = 1;
      tmp = closure_0;
      if (closure_1) {
        tmp2 = closure_2;
        num = 1;
        if (closure_2) {
          tmp3 = closure_3;
          if (closure_3) {
            num = 0;
          } else {
            tmp4 = closure_4;
            tmp5 = closure_5;
            num = 1;
          }
        }
      }
      obj = { opacity: tmp(num, closure_6) };
      return obj;
    }
  }
  const items8 = [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  QuestDockVideoBackgroundTsx3.__closure = items8;
  QuestDockVideoBackgroundTsx3.__workletHash = 1846993177152;
  QuestDockVideoBackgroundTsx3.__initData = tmp36;
  let tmp45 = null;
  const animatedStyle1 = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(
    QuestDockVideoBackgroundTsx3,
  );
  if (isRendered) {
    tmp45 = null;
    if (null != videoUrl) {
      const obj4 = {
        style: tmp3.backgroundVideo,
        onReadyForDisplay: callback,
        source: null,
        paused: null,
        resizeMode: "cover",
        muted: true,
        disableFocus: true,
        preventsDisplaySleepDuringVideoPlayback: false,
      };
      const obj5 = { uri: videoUrl };
      obj4.source = obj5;
      obj4.paused = tmp8 !== tmp12.EXPANDED;
      tmp45 = closure_13(tmp4(9134).VideoComponent, obj4);
    }
  }
  let tmp48 = tmp45;
  if (null != onPress) {
    const obj6 = { style: tmp3.backgroundVideo, onPress, disabled, children: tmp45 };
    tmp48 = closure_13(c6, obj6);
  }
  const items9 = [tmp48];
  let tmp51 = null;
  if (null != imageUrl) {
    if (!tmp2) {
      const obj7 = { pointerEvents: "none", style: null, children: null };
      const items10 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
      obj7.style = items10;
      const obj8 = { style: null, source: null };
      const items11 = [tmp3.backgroundImage, memo];
      obj8.style = items11;
      const obj9 = { uri: imageUrl };
      obj8.source = obj9;
      obj7.children = closure_13(tmp7(5479), obj8);
      tmp51 = closure_13(tmp7(1655).View, obj7);
    } else {
      tmp51 = null;
    }
  }
  items9[1] = tmp51;
  const tmp47Result = closure_14(noop.Fragment, { children: items9 });
  const obj10 = {
    style: null,
    pointerEvents: null,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items12 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj10.style = items12;
  let str = "none";
  if (null != onPress) {
    str = "box-none";
  }
  obj10.pointerEvents = str;
  let tmp54 = null;
  if (null != backdropColor) {
    const obj11 = { style: null };
    const items13 = [tmp3.backdrop, memo];
    const obj12 = { backgroundColor: backdropColor };
    items13[2] = obj12;
    obj11.style = items13;
    tmp54 = closure_13(top, obj11);
  }
  const items14 = [tmp54, , ,];
  let tmp57 = tmp47Result;
  if (collapsedMediaMode === obj.HIDDEN) {
    const obj13 = { style: memo, children: tmp47Result };
    tmp57 = closure_13(QuestDockBackgroundMediaFade, obj13);
  }
  items14[1] = tmp57;
  const obj14 = {
    locations,
    style: null,
    start: VerticalGradient.START,
    end: VerticalGradient.END,
    colors: memo1,
    pointerEvents: "none",
  };
  const items15 = [tmp3.backgroundGradient, memo];
  obj14.style = items15;
  items14[2] = closure_13(LinearGradientDefault, obj14);
  items14[3] = foregroundContent;
  obj10.children = items14;
  return closure_14(_modDef1655.View, obj10);
});
export { QuestDockBackgroundCollapsedMediaMode };
