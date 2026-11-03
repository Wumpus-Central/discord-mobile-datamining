// === Module 17317: QuestDockVideoBackground ===

// Module 17317 (QuestDockVideoBackground)
import _modDef671 from "module_671" /* 671 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 2022 */;
import LinearGradientDefault from "LinearGradient" /* 5710 */;
import spring_spring from "spring/spring" /* 5757 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8965 */;
import QuestDockUtils from "QuestDockUtils" /* 17214 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17216 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 17297 */;
import useIsQuestDockModeActiveOrExitingDefault from "useIsQuestDockModeActiveOrExiting" /* 17318 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function QuestDockBackgroundMediaFade(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_17();
  items = [closure_18, spring_spring.withSpring, noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode, QuestDockMode, React7];
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
  const animatedStyle = _mod1652.useAnimatedStyle(QuestDockVideoBackgroundTsx1);
  const obj2 = { style: null, children };
  const items2 = [tmp.media, style, animatedStyle];
  obj2.style = items2;
  return application_id(_modDef1652.View, obj2);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
let QuestDockMode = fn(6901).QuestDockMode;
const QuestDockConstants = fn(17215);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_9, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_10 } = QuestDockConstants);
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(5141);
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
let closure_17 = createStyles.createStyles(obj2);
let closure_18 = { code: "(function QuestDockVideoBackgroundTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_20 = { code: "(function QuestDockVideoBackgroundTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions]=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};})" };
let closure_21 = { code: "(function QuestDockVideoBackgroundTsx3(){let[withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
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
  ({ backdropColor, expandedHeight } = imageUrl);
  noop = undefined;
  QuestDockMode = undefined;
  c9 = undefined;
  let tmp3 = closure_17();
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  noop = activeQuestDockMode;
  const setRestingQuestDockMode = noop.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const height = useWindowDimensionsDefault().height;
  c6 = height;
  const top = useSafeAreaInsetsDefault().top;
  const tmp8 = useStateFromSharedValueDefault(activeQuestDockMode);
  items = [top];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = require("initialize").useStateFromStores(items, () => top.useReducedMotion);
  const memo = noop.useMemo(() => {
    const obj = { height: QuestDockUtils.getQuestDockExpandedHeightLimits(c6, top, c2).maxHeight };
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = noop.useMemo(() => {
    closure_0 = _modDef671(c1);
    return closure_14.map((item) => closure_0.alpha(item).hex());
  }, items2);
  let obj2 = require("initialize");
  const items3 = [closure_20, require("spring/spring").withSpring, activeQuestDockMode, QuestDockMode, closure_10, c9, context.windowDimensions];
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
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestDockVideoBackgroundTsx2);
  let obj3 = require("module_1652");
  const tmp13 = c9;
  const tmp22 = useIsQuestDockModeActiveOrExitingDefault(QuestDockMode.EXPANDED);
  const tmp23 = _slicedToArray;
  [tmp25, c8] = noop.useState("active" !== c5.currentState);
  const items5 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = obj.useEffect(() => {
    closure_0 = _undefined4.addEventListener("change", (event) => {
      closure_1_8("active" !== event);
      let tmp3 = c0(dependencyMap[21]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = _undefined3.get() === c8.EXPANDED;
      }
      if (tmp3) {
        _undefined4(c8.COLLAPSED);
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
    isRendered = !tmp4(1377).isAndroid();
    const tmp4Result = tmp4(1377);
  }
  if (isRendered) {
    isRendered = tmp4(9810).isHeroVideoSupported(imageUrl.videoMimetype);
    const tmp4Result3 = tmp4(9810);
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
  c9 = tmp31;
  let tmp33 = tmp30;
  const callback = obj.useCallback(() => {
    _undefined5(true);
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
  const items7 = [closure_21, require("spring/spring").withSpring, isRendered, tmp30, collapsedMediaMode === obj.HIDDEN, activeQuestDockMode, QuestDockMode, tmp13];
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
  let tmp46 = null;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(QuestDockVideoBackgroundTsx3);
  if (isRendered) {
    const obj4 = { style: tmp3.backgroundVideo, onReadyForDisplay: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj5 = { uri: videoUrl };
    obj4.source = obj5;
    obj4.paused = tmp8 !== tmp12.EXPANDED;
    tmp46 = closure_12(tmp4(8997).VideoComponent, obj4);
  }
  const items9 = [tmp46, ];
  let tmp48 = null;
  if (null != imageUrl) {
    if (!tmp2) {
      const obj6 = { style: null, children: null };
      const items10 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
      obj6.style = items10;
      const obj7 = { style: null, source: null };
      const items11 = [tmp3.backgroundImage, memo];
      obj7.style = items11;
      const obj8 = { uri: imageUrl };
      obj7.source = obj8;
      obj6.children = closure_12(tmp7(5837), obj7);
      tmp48 = closure_12(tmp7(1652).View, obj6);
    } else {
      tmp48 = null;
    }
  }
  items9[1] = tmp48;
  const tmp45Result = closure_13(noop.Fragment, { children: items9 });
  const obj9 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items12 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj9.style = items12;
  let tmp51 = null;
  if (null != backdropColor) {
    const obj10 = { style: null };
    const items13 = [tmp3.backdrop, memo, ];
    const obj11 = { backgroundColor: backdropColor };
    items13[2] = obj11;
    obj10.style = items13;
    tmp51 = closure_12(c6, obj10);
  }
  const items14 = [tmp51, , , ];
  let tmp54 = tmp45Result;
  if (collapsedMediaMode === obj.HIDDEN) {
    const obj12 = { style: memo, children: tmp45Result };
    tmp54 = closure_12(QuestDockBackgroundMediaFade, obj12);
  }
  items14[1] = tmp54;
  const obj13 = { locations, style: null, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo1 };
  const items15 = [tmp3.backgroundGradient, memo];
  obj13.style = items15;
  items14[2] = closure_12(LinearGradientDefault, obj13);
  items14[3] = imageUrl.foregroundContent;
  obj9.children = items14;
  return closure_13(_modDef1652.View, obj9);
});
export { QuestDockBackgroundCollapsedMediaMode };