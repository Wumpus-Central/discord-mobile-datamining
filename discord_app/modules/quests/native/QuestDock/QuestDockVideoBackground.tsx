// === Module 16796: QuestDockVideoBackground ===

// Module 16796 (QuestDockVideoBackground)
import _modDef671 from "module_671" /* 671 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _mod1654 from "module_1654" /* 1654 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 2024 */;
import LinearGradientDefault from "LinearGradient" /* 5598 */;
import spring_spring from "spring/spring" /* 5644 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8619 */;
import QuestDockUtils from "QuestDockUtils" /* 16679 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16681 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 16770 */;
import useIsQuestDockModeActiveOrExitingDefault from "useIsQuestDockModeActiveOrExiting" /* 16797 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;

const require = globalThis.__r;
const _modDef1654 = _mod1654;

require = fn;
function QuestDockBackgroundMediaFade(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_19();
  items = [closure_20, spring_spring.withSpring, noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode, React6, closure_1_11];
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
  const animatedStyle = _mod1654.useAnimatedStyle(QuestDockVideoBackgroundTsx1);
  const obj2 = { style: null, children };
  const items2 = [tmp.media, style, animatedStyle];
  obj2.style = items2;
  return gesture(_modDef1654.View, obj2);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, Pressable: closure_6, StyleSheet, View: metroImportDefault } = get_ActivityIndicator);
const QuestConstants = fn(6871);
({ QuestDockMode: closure_9, QuestsExperimentLocations: closure_10 } = QuestConstants);
const QuestDockConstants = fn(16680);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_11, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_12 } = QuestDockConstants);
const VerticalGradient = fn(1071).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(5043);
let obj2 = { backgroundWrapper: null, backgroundImage: null, backgroundImageWrapper: null, backgroundVideo: null, media: null, backgroundGradient: null, backdrop: null };
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
let closure_19 = createStyles.createStyles(obj2);
let closure_20 = { code: "(function QuestDockVideoBackgroundTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_22 = { code: "(function QuestDockVideoBackgroundTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions]=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};})" };
let closure_23 = { code: "(function QuestDockVideoBackgroundTsx3(){let[withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
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
  constants = undefined;
  let tmp3 = closure_19();
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  noop = activeQuestDockMode;
  const setRestingQuestDockMode = noop.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).setRestingQuestDockMode;
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
    return closure_16.map((item) => closure_0.alpha(item).hex());
  }, items2);
  let obj2 = require("initialize");
  const items3 = [closure_22, require("spring/spring").withSpring, activeQuestDockMode, constants, closure_12, closure_11, context.windowDimensions];
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
      items = [, ];
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
  const animatedStyle = require("module_1654").useAnimatedStyle(QuestDockVideoBackgroundTsx2);
  let obj3 = require("module_1654");
  const tmp22 = useIsQuestDockModeActiveOrExitingDefault(constants.EXPANDED);
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
    isRendered = tmp4(9889).isHeroVideoSupported(imageUrl.videoMimetype);
    const tmp4Result = tmp4(9889);
  }
  if (isRendered) {
    let tmp28 = !tmp2;
    if (tmp2) {
      tmp28 = tmp22;
    }
    isRendered = tmp28;
  }
  const tmp24 = _slicedToArray(noop.useState("active" !== c5.currentState), 2);
  const isAndroidResult = require("PlatformUtils").isAndroid();
  const QuestBarAndroidVideoExperiment = tmp4(16798).QuestBarAndroidVideoExperiment;
  if (isRendered) {
    let tmp32 = !isAndroidResult;
    if (isAndroidResult) {
      tmp32 = tmp31;
    }
    isRendered = tmp32;
  }
  const tmp4Result3 = require("PlatformUtils");
  [tmp34, tmp35] = tmp23(noop.useState(false), 2);
  constants = tmp35;
  let tmp37 = tmp34;
  const callback = obj.useCallback(() => {
    _undefined6(true);
  }, []);
  if (tmp34) {
    tmp37 = !isRendered;
  }
  if (tmp37) {
    tmp35(false);
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
  const items7 = [closure_23, require("spring/spring").withSpring, isRendered, tmp34, collapsedMediaMode === obj.HIDDEN, activeQuestDockMode, constants, closure_11];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items7;
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
  const items8 = [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
  QuestDockVideoBackgroundTsx3.__closure = items8;
  QuestDockVideoBackgroundTsx3.__workletHash = 1846993177152;
  QuestDockVideoBackgroundTsx3.__initData = tmp40;
  let tmp49 = null;
  const animatedStyle1 = require("module_1654").useAnimatedStyle(QuestDockVideoBackgroundTsx3);
  if (isRendered) {
    tmp49 = null;
    if (null != videoUrl) {
      const obj4 = { style: tmp3.backgroundVideo, onReadyForDisplay: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
      const obj5 = { uri: videoUrl };
      obj4.source = obj5;
      obj4.paused = tmp8 !== tmp12.EXPANDED;
      tmp49 = closure_14(tmp4(8880).VideoComponent, obj4);
    }
  }
  let tmp52 = tmp49;
  if (null != onPress) {
    const obj6 = { style: tmp3.backgroundVideo, onPress, disabled, children: tmp49 };
    tmp52 = closure_14(c6, obj6);
  }
  const items9 = [tmp52, ];
  let tmp55 = null;
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
      obj7.children = closure_14(tmp7(5730), obj8);
      tmp55 = closure_14(tmp7(1654).View, obj7);
    } else {
      tmp55 = null;
    }
  }
  items9[1] = tmp55;
  const tmp51Result = closure_15(noop.Fragment, { children: items9 });
  const obj10 = { style: null, pointerEvents: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items12 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj10.style = items12;
  let str = "none";
  if (null != onPress) {
    str = "box-none";
  }
  obj10.pointerEvents = str;
  let tmp58 = null;
  if (null != backdropColor) {
    const obj11 = { style: null };
    const items13 = [tmp3.backdrop, memo, ];
    const obj12 = { backgroundColor: backdropColor };
    items13[2] = obj12;
    obj11.style = items13;
    tmp58 = closure_14(top, obj11);
  }
  const items14 = [tmp58, , , ];
  let tmp61 = tmp51Result;
  if (collapsedMediaMode === obj.HIDDEN) {
    const obj13 = { style: memo, children: tmp51Result };
    tmp61 = closure_14(QuestDockBackgroundMediaFade, obj13);
  }
  items14[1] = tmp61;
  const obj14 = { locations, style: null, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo1, pointerEvents: "none" };
  const items15 = [tmp3.backgroundGradient, memo];
  obj14.style = items15;
  items14[2] = closure_14(LinearGradientDefault, obj14);
  items14[3] = foregroundContent;
  obj10.children = items14;
  return closure_15(_modDef1654.View, obj10);
});
export { QuestDockBackgroundCollapsedMediaMode };