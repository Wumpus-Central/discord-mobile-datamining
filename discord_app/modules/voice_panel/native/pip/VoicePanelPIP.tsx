// discord_app/modules/voice_panel/native/pip/VoicePanelPIP.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05426_LegacyBaseButton.js";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import VoicePanelPIPScaleCache from "VoicePanelPIPScaleCache.tsx";
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext.tsx";
import utils_triggerIOSHapticDefault from "../utils/triggerIOSHaptic.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

require = fn;
function VoicePanelPIP() {
  let tmp = closure_17();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const setMode = context.setMode;
  _require = setMode;
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const pipHandoff = noop.useContext(VoicePanelStateContextDefault).pipHandoff;
  let obj2 = require("VoicePanelPIPStateContext");
  const mode = require("VoicePanelPIPStateContext").usePIPState().mode;
  const obj3 = require("VoicePanelPIPStateContext");
  const pIPCardsSettled = require("VoicePanelPIPHandoff").usePIPCardsSettled(pipHandoff);
  const obj4 = require("VoicePanelPIPHandoff");
  let tmp11 = mode !== VoicePanelPIPModes.IN_APP;
  const pIPPanelLayoutCommitted = require("VoicePanelPIPHandoff").usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp11) {
    tmp11 = pIPCardsSettled;
  }
  let tmp12 = tmp9;
  if (null == mode) {
    tmp12 = !pIPPanelLayoutCommitted;
  }
  let tmp13 = tmp12;
  if (tmp12) {
    let tmp14 = !tmp9;
    if (tmp9) {
      tmp14 = tmp11;
    }
    tmp13 = tmp14;
  }
  const mode2 = pIPState.mode;
  closure_129_0 = mode2;
  closure_129_11 = undefined;
  closure_129_16 = undefined;
  closure_129_17 = undefined;
  closure_129_18 = undefined;
  closure_129_19 = undefined;
  const context1 = obj.useContext(tmp2(11359));
  const controlsSpecs = context1.controlsSpecs;
  closure_129_1 = controlsSpecs;
  const hideControls = context1.hideControls;
  closure_129_2 = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  closure_129_3 = pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  closure_129_4 = safeArea;
  const setFocused = context1.setFocused;
  closure_129_5 = setFocused;
  const setMode2 = context1.setMode;
  closure_129_6 = setMode2;
  const showControls = context1.showControls;
  closure_129_7 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_8 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_9 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_10 = wrapperOffset;
  ({ channelId: closure_129_11, isDockEnabled } = context1);
  closure_129_12 = isDockEnabled;
  let obj5 = require("VoicePanelPIPHandoff");
  const tmp10 = VoicePanelPIPModes;
  const pIPState1 = require("VoicePanelPIPStateContext").usePIPState();
  closure_129_13 = pIPState1;
  const tmp5Result = require("VoicePanelPIPStateContext");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(closure_20);
  closure_129_14 = sharedValue;
  const tmp5Result11 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_15 = sharedValue1;
  items = [sharedValue1];
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_1_15.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let items1 = [closure_21, pIPState1, require("VoicePanelPIPUtils").getScaledPIPContainerHeight, require("VoicePanelPIPUtils").calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChangedDefault, wrapperDimensions];
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items1;
  class VoicePanelPIPTsx3 {
    constructor(arg0, arg1, arg2) {
      scale = closure_0.scale;
      value = scale.get();
      obj = { height: closure_0.height, containerHeight: closure_0.containerHeight, showSecondaryPIP: closure_0.showSecondaryPIP, scale: value };
      result = closure_0.width * value;
      obj1 = { velocityX: arg1, velocityY: arg2, absoluteX: arg0.baseX + arg0.offsetX + result / 2, absoluteY: arg0.baseY + arg0.offsetY + closure_1(obj) / 2, windowDimensions: closure_3.get(), safeArea: closure_4.get() };
      tmp3 = closure_2(obj1);
      obj4 = { pipX: tmp3.pipX, pipY: tmp3.pipY };
      tmp4 = closure_5(closure_6, obj4);
      return;
    }
  }
  let items2 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  VoicePanelPIPTsx3.__closure = items2;
  VoicePanelPIPTsx3.__workletHash = 5650627550281;
  VoicePanelPIPTsx3.__initData = tmp20;
  let items3 = [, , , , , , , ];
  ({ containerHeight: arr4[0], height: arr4[1], scale: arr4[2], showSecondaryPIP: arr4[3], width: arr4[4] } = pIPState1);
  items3[5] = safeArea;
  items3[6] = windowDimensions;
  items3[7] = wrapperDimensions;
  const callback = obj.useCallback(VoicePanelPIPTsx3, items3);
  closure_129_16 = callback;
  const tmp5Result12 = require("../../../../../_runtime/metro/01652__.js");
  let items4 = [closure_22, pIPState1, require("VoicePanelPIPUtils").getScaledPIPContainerHeight, tmp12, sharedValue, require("VoicePanelPIPUtils").getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, c9, require("VoicePanelPIPUtils").PIP_LAYOUT_PHYSICS, sharedValue1, require("spring/spring").withSpring, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius];
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  VoicePanelPIPModes = undefined;
  c13 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items4;
  class VoicePanelPIPTsx4 {
    constructor() {
      scale = closure_0.scale;
      tmp = closure_0;
      result = closure_0.width * scale.get();
      obj = { height: closure_0.height, containerHeight: closure_0.containerHeight, showSecondaryPIP: null, scale: null };
      showSecondaryPIP = closure_0.showSecondaryPIP;
      tmp3 = closure_1;
      if (showSecondaryPIP) {
        showSecondaryPIP = closure_2;
      }
      obj.showSecondaryPIP = showSecondaryPIP;
      scale2 = tmp.scale;
      obj.scale = scale2.get();
      tmp3Result = tmp3(obj);
      value = closure_3.get();
      if (value.active) {
        x = value.baseX + value.offsetX;
        y = value.baseY + value.offsetY;
      } else {
        tmp6 = closure_4;
        size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        tmp7 = closure_5;
        size.pipX = closure_5.get().pipX;
        size.pipY = closure_5.get().pipY;
        size.width = result;
        size.height = tmp3Result;
        tmp8 = closure_6;
        size.windowDimensions = closure_6.get();
        tmp9 = closure_7;
        size.safeArea = closure_7.get();
        tmp10 = closure_8;
        size.bottomAvoidanceRegion = closure_8.get().bottom;
        size.topAvoidanceRegion = closure_8.get().top;
        tmp11 = closure_4(size);
        ({ x, y } = tmp11);
      }
      tmp12 = value.active ? closure_9 : closure_10;
      size1 = { width: result, height: tmp3Result, opacity: closure_11.get(), transform: null, borderRadius: null };
      obj1 = { translateX: closure_12(x, tmp12) };
      items = [, ];
      items[0] = obj1;
      obj6 = { translateY: closure_12(y, tmp12) };
      items[1] = obj6;
      size1.transform = items;
      size1.borderRadius = closure_13(result, tmp3Result);
      return size1;
    }
  }
  let items5 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  VoicePanelPIPTsx4.__closure = items5;
  VoicePanelPIPTsx4.__workletHash = 1405151030616;
  VoicePanelPIPTsx4.__initData = tmp29;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelPIPTsx4);
  const tmp5Result13 = require("../../../../../_runtime/metro/01652__.js");
  let items6 = [closure_23, pIPState1, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius];
  _require = undefined;
  importDefault = undefined;
  [tmp45, tmp46, tmp47] = items6;
  class VoicePanelPIPTsx5 {
    constructor() {
      ({ width, height, scale } = closure_0);
      size = { width: width * scale.get(), height: height * scale.get(), borderRadius: closure_1(width, height) };
      return size;
    }
  }
  let items7 = [tmp46, tmp47];
  VoicePanelPIPTsx5.__closure = items7;
  VoicePanelPIPTsx5.__workletHash = 13253829300730;
  VoicePanelPIPTsx5.__initData = tmp45;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelPIPTsx5);
  const tmp5Result14 = require("../../../../../_runtime/metro/01652__.js");
  let items8 = [closure_24, tmp13];
  _require = undefined;
  [tmp49, tmp50] = items8;
  class VoicePanelPIPTsx6 {
    constructor() {
      opacity = 0;
      if (closure_0) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  let items9 = [tmp50];
  VoicePanelPIPTsx6.__closure = items9;
  VoicePanelPIPTsx6.__workletHash = 14702367813687;
  VoicePanelPIPTsx6.__initData = tmp49;
  const items10 = [isDockEnabled, sharedValue, pipAvoidanceSpecs, , , , , , , , , , ];
  ({ containerHeight: arr11[3], height: arr11[4], scale: arr11[5], showSecondaryPIP: arr11[6], width: arr11[7] } = pIPState1);
  items10[8] = safeArea;
  items10[9] = callback;
  items10[10] = windowDimensions;
  items10[11] = wrapperDimensions;
  items10[12] = wrapperOffset;
  const animatedStyle2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelPIPTsx6);
  const items11 = [controlsSpecs, hideControls, setFocused, showControls, mode2, setMode2];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().manualActivation(true).shouldCancelWhenOutside(false);
    items = [closure_25, getTouchesCentroid, getTouchesSpread, isLaunched, closure_20, updateSharedValueIfChangedDefault];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
    class VoicePanelPIPTsx7 {
      constructor(arg0) {
        tmp = closure_0(arg0.allTouches);
        tmp2 = closure_1(arg0.allTouches, tmp);
        obj = closure_2;
        if (closure_2.get().pressed) {
          tmp7 = closure_4;
          obj1 = { originX: null, originY: null, spread: null };
          ({ x: obj3.originX, y: obj3.originY } = tmp);
          obj1.spread = tmp2;
          tmp8 = closure_4(obj, obj1);
        } else {
          obj4 = {};
          tmp3 = closure_3;
          tmp4 = obj4;
          merged = Object.assign(closure_3);
          flag = true;
          obj4.pressed = true;
          ({ x: obj2.originX, y: obj2.originY } = tmp);
          obj4.spread = tmp2;
          result = obj.set(obj4);
        }
        return;
      }
    }
    const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
    VoicePanelPIPTsx7.__closure = items1;
    VoicePanelPIPTsx7.__workletHash = 15159195562233;
    VoicePanelPIPTsx7.__initData = tmp8;
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    const items2 = [closure_26, updateSharedValueIfChangedDefault, isLaunched, getTouchesCentroid, getTouchesSpread];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    class VoicePanelPIPTsx8 {
      constructor(arg0) {
        closure_0 = arg0;
        allTouches = arg0.allTouches;
        found = allTouches.filter(/* F141636 */ function() { ... });
        if (0 !== found.length) {
          tmp4 = closure_2;
          tmp5 = closure_2(found);
          tmp6 = closure_0;
          tmp7 = closure_1;
          obj = { originX: null, originY: null, spread: null };
          ({ x: obj.originX, y: obj.originY } = tmp5);
          tmp8 = closure_3;
          obj.spread = closure_3(found, tmp5);
          tmp9 = closure_0(closure_1, obj);
        } else {
          tmp = closure_0;
          tmp2 = closure_1;
          tmp3 = closure_0(closure_1, { pressed: false });
        }
        return;
      }
    }
    const items3 = [tmp15, tmp16, tmp17, tmp18];
    VoicePanelPIPTsx8.__closure = items3;
    VoicePanelPIPTsx8.__workletHash = 6786919878348;
    VoicePanelPIPTsx8.__initData = tmp14;
    const onTouchesDownResult = result.onTouchesDown(VoicePanelPIPTsx7);
    const items4 = [closure_27, getTouchesCentroid, getTouchesSpread, isLaunched, 8, c13, VoicePanelPIPUtils.clampPIPScale, c8, c4, c3, LegacyBaseButton.State, 10, VoicePanelPIPUtils.getClampedPIPPosition, c9, VoicePanelPIPUtils.getScaledPIPContainerHeight, c12, updateSharedValueIfChangedDefault, c10, _mod1705.scheduleOnRN, utils_triggerIOSHapticDefault];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    c14 = undefined;
    c15 = undefined;
    c16 = undefined;
    c17 = undefined;
    c18 = undefined;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items4;
    class VoicePanelPIPTsx9 {
      constructor(arg0, arg1) {
        point = closure_0(arg0.allTouches);
        tmp = closure_1(arg0.allTouches, point);
        obj = closure_2;
        value = closure_2.get();
        if (value.active) {
          diff = value.offsetX + point.x - value.originX;
          diff1 = value.offsetY + point.y - value.originY;
          sum1 = diff1;
          sum = diff;
          if (value.spread > closure_3) {
            sum1 = diff1;
            sum = diff;
            if (tmp > tmp25) {
              scale3 = closure_4.scale;
              tmp33 = closure_4;
              value1 = scale3.get();
              tmp35 = closure_5;
              obj1 = { scale: null, width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
              obj1.scale = value1 * (tmp / value.spread);
              ({ width: obj6.width, containerHeight: obj6.containerHeight, showSecondaryPIP: obj6.showSecondaryPIP } = closure_4);
              tmp36 = closure_6;
              obj1.windowDimensions = closure_6.get();
              tmp37 = closure_7;
              obj1.safeArea = closure_7.get();
              tmp38 = closure_8;
              obj1.pipAvoidanceSpecs = closure_8.get();
              tmp39 = closure_5(obj1);
              sum1 = diff1;
              sum = diff;
              if (tmp39 !== value1) {
                scale2 = tmp33.scale;
                result = scale2.set(tmp39);
                result1 = tmp39 / value1;
                num = 1;
                sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
              }
            }
          }
          obj7 = { pressed: null, active: true, baseX: null, baseY: null, offsetX: null, offsetY: null, originX: null, originY: null, spread: null };
          ({ pressed: obj5.pressed, baseX: obj5.baseX, baseY: obj5.baseY } = value);
          obj7.offsetX = sum;
          obj7.offsetY = sum1;
          ({ x: obj5.originX, y: obj5.originY } = point);
          obj7.spread = tmp;
          result2 = obj.set(obj7);
        } else {
          tmp3 = closure_9;
          if (arg0.state === closure_9.BEGAN) {
            tmp31 = globalThis;
            _Math3 = Math;
            tmp32 = closure_10;
            if (Math.abs(value.originX - point.x) <= closure_10) {
              _Math = Math;
              if (Math.abs(value.originY - point.y) <= tmp32) {
                _Math2 = Math;
              }
            }
            tmp4 = closure_4;
            scale = closure_4.scale;
            value2 = scale.get();
            tmp6 = closure_11;
            size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
            tmp7 = closure_12;
            size.pipX = closure_12.get().pipX;
            size.pipY = closure_12.get().pipY;
            size.width = closure_4.width * value2;
            tmp8 = closure_13;
            obj8 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
            ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = closure_4);
            obj8.scale = value2;
            size.height = closure_13(obj8);
            tmp9 = closure_6;
            size.windowDimensions = closure_6.get();
            tmp10 = closure_7;
            size.safeArea = closure_7.get();
            tmp11 = closure_8;
            size.bottomAvoidanceRegion = closure_8.get().bottom;
            size.topAvoidanceRegion = closure_8.get().top;
            tmp12 = closure_11(size);
            obj9 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
            ({ x: obj4.baseX, y: obj4.baseY } = tmp12);
            ({ x: obj4.originX, y: obj4.originY } = point);
            obj9.spread = tmp;
            result3 = obj.set(obj9);
            tmp14 = closure_14;
            if (!closure_14) {
              tmp15 = closure_15;
              tmp16 = closure_16;
              tmp17 = closure_15(closure_16, { gestureActive: true, x: 0, y: 0 });
            }
            tmp18 = arg1;
            activateResult = arg1.activate();
            tmp20 = closure_17;
            tmp21 = closure_18;
            tmp22 = closure_17(closure_18);
          }
        }
        return;
      }
    }
    const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41];
    VoicePanelPIPTsx9.__closure = items5;
    VoicePanelPIPTsx9.__workletHash = 17307276361367;
    VoicePanelPIPTsx9.__initData = tmp22;
    const onTouchesUpResult = result.onTouchesDown(VoicePanelPIPTsx7).onTouchesUp(VoicePanelPIPTsx8);
    const tmp19 = c13;
    const items6 = [closure_28, isLaunched, closure_1_16, c12, updateSharedValueIfChangedDefault, c10, closure_20, _mod1705.scheduleOnRN, ExternalPipDefault.updateSourceTrackingView, VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached, tmp19];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items6;
    class VoicePanelPIPTsx10 {
      constructor(arg0) {
        obj = closure_0;
        ({ velocityX, velocityY } = arg0);
        tmp = closure_1(closure_0.get(), velocityX, velocityY);
        if (!closure_2) {
          tmp2 = closure_3;
          tmp3 = closure_4;
          tmp4 = closure_3(closure_4, { gestureActive: false });
        }
        result = obj.set(closure_5);
        tmp6 = closure_6(closure_7);
        scale = closure_9.scale;
        tmp7 = closure_6(closure_8, scale.get());
        return;
      }
    }
    const items7 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
    VoicePanelPIPTsx10.__closure = items7;
    VoicePanelPIPTsx10.__workletHash = 9350074406559;
    VoicePanelPIPTsx10.__initData = tmp42;
    const onTouchesMoveResult = result.onTouchesDown(VoicePanelPIPTsx7).onTouchesUp(VoicePanelPIPTsx8).onTouchesMove(VoicePanelPIPTsx9);
    const items8 = [closure_29, c12, updateSharedValueIfChangedDefault, c10, isLaunched, closure_20];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58] = items8;
    class VoicePanelPIPTsx11 {
      constructor() {
        if (!closure_0) {
          tmp = closure_1;
          tmp2 = closure_2;
          tmp3 = closure_1(closure_2, { gestureActive: false });
        }
        result = closure_3.set(closure_4);
        return;
      }
    }
    const items9 = [tmp54, tmp55, tmp56, tmp57, tmp58];
    VoicePanelPIPTsx11.__closure = items9;
    VoicePanelPIPTsx11.__workletHash = 9688406235986;
    VoicePanelPIPTsx11.__initData = tmp53;
    return result.onTouchesDown(VoicePanelPIPTsx7).onTouchesUp(VoicePanelPIPTsx8).onTouchesMove(VoicePanelPIPTsx9).onEnd(VoicePanelPIPTsx10).onFinalize(VoicePanelPIPTsx11);
  }, items10);
  const memo1 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const tmp3 = c0;
    const enabledResult = Gesture2.Tap().enabled(c0 !== VoicePanelPIPModes.IN_APP);
    items = [closure_30, _mod1705.scheduleOnRN, c5];
    c0 = undefined;
    c1 = undefined;
    [tmp5, tmp6, tmp7] = items;
    class VoicePanelPIPTsx12 {
      constructor() {
        tmp = closure_0(closure_1, null);
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    VoicePanelPIPTsx12.__closure = items1;
    VoicePanelPIPTsx12.__workletHash = 292478158131;
    VoicePanelPIPTsx12.__initData = tmp5;
    const maxDistanceResult = Gesture2.Tap().enabled(c0 !== VoicePanelPIPModes.IN_APP).maxDistance(30);
    const onStartResult = Gesture2.Tap().enabled(c0 !== VoicePanelPIPModes.IN_APP).maxDistance(30).onStart(VoicePanelPIPTsx12);
    const Gesture3 = LegacyBaseButton.Gesture;
    const numberOfTapsResult = Gesture2.Tap().enabled(c0 !== VoicePanelPIPModes.IN_APP).maxDistance(30).onStart(VoicePanelPIPTsx12).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const items2 = [closure_31, tmp3, VoicePanelPIPModes, _mod1705.scheduleOnRN, c6, constants, c1, VoicePanelControlsModes, c7, c2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    class VoicePanelPIPTsx13 {
      constructor() {
        if (closure_0 === closure_1.IN_APP) {
          tmp9 = closure_2;
          tmp10 = closure_3;
          tmp11 = closure_4;
          tmp12 = closure_2(closure_3, closure_4.PANEL);
        } else {
          tmp = closure_5;
          tmp2 = closure_6;
          if (closure_5.get().mode === closure_6.HIDDEN) {
            tmp6 = closure_2;
            tmp7 = closure_7;
            tmp8 = closure_2(closure_7);
          } else {
            tmp3 = closure_2;
            tmp4 = closure_8;
            tmp5 = closure_2(closure_8);
          }
        }
        return;
      }
    }
    const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
    VoicePanelPIPTsx13.__closure = items3;
    VoicePanelPIPTsx13.__workletHash = 2348764874490;
    VoicePanelPIPTsx13.__initData = tmp9;
    return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(VoicePanelPIPTsx13));
  }, items11);
  const tmp5Result15 = require("../../../../../_runtime/metro/01652__.js");
  const items12 = [c6];
  const stateFromStores = require("initialize").useStateFromStores(items12, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== c11;
  });
  closure_129_17 = stateFromStores;
  const tmp5Result16 = require("initialize");
  const items13 = [c7];
  const stateFromStores1 = require("initialize").useStateFromStores(items13, () => {
    const mainFrame = _undefined7.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  closure_129_18 = stateFromStores1;
  const items14 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  const callback1 = obj.useCallback(() => {
    if (closure_1_17) {
      _undefined6(constants.PIP);
      _undefined5(null);
    }
    if (null != getTouchesCentroid) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items14);
  closure_129_19 = callback1;
  const items15 = [callback1];
  const memo2 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    items = [closure_32, _mod1705.scheduleOnRN, getTouchesSpread];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    class VoicePanelPIPTsx14 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    VoicePanelPIPTsx14.__closure = items1;
    VoicePanelPIPTsx14.__workletHash = 11426545283298;
    VoicePanelPIPTsx14.__initData = tmp;
    return Gesture.Tap().maxDistance(30).onStart(VoicePanelPIPTsx14);
  }, items15);
  let pushToTalk = tmp2(8965)(context.controlsSpecs).pushToTalk;
  const tmp55 = c7;
  const tmp5Result17 = require("initialize");
  const items16 = [closure_33, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius, pIPState];
  _require = undefined;
  importDefault = undefined;
  [tmp59, tmp60, tmp61] = items16;
  class VoicePanelPIPTsx15 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.width, closure_1.height) };
      return obj;
    }
  }
  const items17 = [tmp60, tmp61];
  VoicePanelPIPTsx15.__closure = items17;
  VoicePanelPIPTsx15.__workletHash = 13048454285642;
  VoicePanelPIPTsx15.__initData = tmp59;
  const animatedStyle3 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelPIPTsx15);
  const items18 = [setMode];
  const memo3 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.oN8bqe);
    items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      _undefined(constants.PANEL);
    };
    return obj;
  }, items18);
  const tmp5Result18 = require("../../../../../_runtime/metro/01652__.js");
  const items19 = [tmp55];
  const stateFromStores2 = require("initialize").useStateFromStores(items19, () => {
    const mainFrame = _undefined7.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  importDefault = stateFromStores2;
  const items20 = [stateFromStores2];
  const callback2 = obj.useCallback(() => {
    if (null != c1) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items20);
  c2 = callback2;
  const items21 = [callback2];
  const memo4 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = onAccessibilityAction;
    return obj;
  }, items21);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== tmp10.IN_PANEL || tmp67;
    const tmp68 = pIPState.mode !== tmp10.IN_PANEL || tmp67;
  }
  const tmp5Result19 = require("initialize");
  const items22 = [closure_34, pIPState];
  _require = undefined;
  [tmp69, tmp70] = items22;
  class VoicePanelPIPTsx16 {
    constructor() {
      obj = { height: height * scale.get() };
      ({ scale, height } = closure_0);
      return obj;
    }
  }
  const items23 = [tmp70];
  VoicePanelPIPTsx16.__closure = items23;
  VoicePanelPIPTsx16.__workletHash = 12876553277678;
  VoicePanelPIPTsx16.__initData = tmp69;
  const items24 = [closure_35, sharedValue, , ];
  const animatedStyle4 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelPIPTsx16);
  items24[2] = require("spring/spring").withSpring;
  items24[3] = require("VoicePanelPIPUtils").PIP_LAYOUT_PHYSICS;
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  [tmp72, tmp73, tmp74, tmp75] = items24;
  class VoicePanelPIPTsx17 {
    constructor(arg0) {
      active = closure_0.get().active;
      size = { originX: closure_1(arg0.targetOriginX, closure_2), originY: closure_1(arg0.targetOriginY, closure_2), width: null, height: null };
      tmp = closure_1;
      tmp2 = closure_2;
      targetWidth = arg0.targetWidth;
      size.width = active ? targetWidth : tmp(targetWidth, tmp2);
      targetHeight = arg0.targetHeight;
      obj1 = { animations: null, initialValues: null };
      size.height = active ? targetHeight : tmp(targetHeight, tmp2);
      obj1.animations = size;
      obj1.initialValues = { originX: arg0.currentOriginX, originY: arg0.currentOriginY, width: arg0.currentWidth, height: arg0.currentHeight };
      return obj1;
    }
  }
  const items25 = [tmp73, tmp74, tmp75];
  VoicePanelPIPTsx17.__closure = items25;
  VoicePanelPIPTsx17.__workletHash = 244303183633;
  VoicePanelPIPTsx17.__initData = tmp72;
  const items26 = [sharedValue];
  const callback3 = obj.useCallback(VoicePanelPIPTsx17, items26);
  let obj6 = { pointerEvents: "box-none", style: null, layout: callback3, children: null };
  const items27 = [tmp.container, animatedStyle];
  obj6.style = items27;
  const obj7 = { gesture: memo, children: null };
  const obj8 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback3, children: null };
  let tmp78Result = null;
  if (tmp12) {
    const obj9 = { style: null, pointerEvents: "box-none", layout: null };
    const items28 = [, , , ];
    ({ pipContentWrapper: arr29[0], inAppElevationShadow: arr29[1] } = tmp);
    items28[2] = animatedStyle1;
    items28[3] = animatedStyle2;
    obj9.style = items28;
    obj9.layout = callback3;
    let merged = Object.assign(memo3);
    let obj10 = { gesture: memo1, children: null };
    let obj11 = { style: null, layout: null, children: null };
    const items29 = [tmp.pipMask, animatedStyle3];
    obj11.style = items29;
    obj11.layout = callback3;
    let obj12 = { layoutTransition: callback3 };
    obj11.children = closure_15(tmp2(19446), obj12);
    obj10.children = closure_15(tmp2(1652).View, obj11);
    obj9.children = closure_15(tmp5(5426).GestureDetector, obj10);
    tmp78Result = closure_15(tmp2(1652).View, obj9);
  }
  const items30 = [tmp78Result, ];
  let tmp78Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj13 = { style: null };
    const items31 = [, , ];
    ({ pipContentWrapper: arr32[0], inAppElevationShadow: arr32[1] } = tmp);
    items31[2] = animatedStyle1;
    obj13.style = items31;
    const merged1 = Object.assign(memo4);
    const obj14 = { style: null, children: null };
    const items32 = [tmp.pipMask, animatedStyle3];
    obj14.style = items32;
    const obj15 = { gesture: memo2, children: null };
    const obj16 = { style: StyleSheet.absoluteFill, children: closure_15(tmp2(19450), {}) };
    obj15.children = closure_15(tmp2(7086), obj16);
    obj14.children = closure_15(tmp5(5426).GestureDetector, obj15);
    obj13.children = closure_15(tmp2(1652).View, obj14);
    tmp78Result3 = closure_15(tmp2(1652).View, obj13);
    const tmp2Result = tmp2(7086);
  }
  items30[1] = tmp78Result3;
  obj8.children = items30;
  obj7.children = closure_16(_modDef1652.View, obj8);
  const items33 = [closure_15(require("LegacyBaseButton").GestureDetector, obj7), ];
  let tmp78Result4 = null;
  if (tmp13) {
    tmp78Result4 = null;
    if (pushToTalk) {
      const obj17 = { pointerEvents: "box-none", style: null, layout: null, children: null };
      const items34 = [tmp.pushToTalkContainer, animatedStyle4];
      obj17.style = items34;
      obj17.layout = callback3;
      obj17.children = closure_15(tmp2(19451), {});
      tmp78Result4 = closure_15(tmp2(1652).View, obj17);
    }
  }
  items33[1] = tmp78Result4;
  obj6.children = items33;
  return closure_16(_modDef1652.View, obj6);
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return closure_1_15(closure_37, { transitionState, transitionCleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
let StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11360);
({ DRAWER_SPRING_PHYSICS: closure_9, VoicePanelModes: closure_10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11358).VoicePanelControlsModes;
let VoicePanelPIPModes = fn(19273).VoicePanelPIPModes;
const ActivityPanelModes = fn(5777).ActivityPanelModes;
const isLaunched = fn(6967).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5141);
let obj = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPipContainer: null, pushToTalkContainer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj.pipMask = obj3;
let obj4 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.flexDirection = "column";
obj4.alignItems = "center";
obj4.gap = SECONDARY_PIP_TOP_MARGIN;
obj.multiPipContainer = obj4;
obj.pushToTalkContainer = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_17 = createStyles.createStyles(obj);
let items = [{ code: "(function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};})" }];
[tmp7] = items;
function getTouchesCentroid(arg0) {
  let num = 0;
  let num2 = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    num = num + nextResult.absoluteX;
    num2 = num2 + nextResult.absoluteY;
    continue;
  }
  const point = { x: num / arg0.length, y: num2 / arg0.length };
  return point;
}
getTouchesCentroid.__workletHash = 1561842626525;
getTouchesCentroid.__initData = tmp7;
let items1 = [{ code: "(function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;})" }];
[tmp8] = items1;
function getTouchesSpread(arg0, arg1) {
  if (arg0.length < 2) {
    return 0;
  } else {
    let num = 0;
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let diff = nextResult.absoluteX - arg1.x;
      let diff1 = nextResult.absoluteY - arg1.y;
      let _Math = Math;
      num = num + Math.sqrt(diff * diff + diff1 * diff1);
      continue;
    }
    return num / arg0.length;
  }
}
getTouchesSpread.__workletHash = 12650185432595;
getTouchesSpread.__initData = tmp8;
let closure_20 = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
let closure_21 = { code: "(function VoicePanelPIPTsx3(state,velocityX,velocityY){let[pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions]=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});})" };
let closure_22 = { code: "(function VoicePanelPIPTsx4(){let[pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius]=this.__closure;const width=pipState.width*pipState.scale.get();const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state=gestureState.get();let x;let y;if(state.active){x=state.baseX+state.offsetX;y=state.baseY+state.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_23 = { code: "(function VoicePanelPIPTsx5(){let[pipState,getVoicePanelPIPBorderRadius]=this.__closure;const{width:width,height:height,scale:scale}=pipState;return{width:width*scale.get(),height:height*scale.get(),borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_24 = { code: "(function VoicePanelPIPTsx6(){let[mainTileVisible]=this.__closure;return{opacity:mainTileVisible?1:0};})" };
let closure_25 = { code: "(function VoicePanelPIPTsx7(event){let[getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(!state.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});})" };
let closure_26 = { code: "(function VoicePanelPIPTsx8(event){let[updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread]=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:getTouchesSpread(remainingTouches,centroid)});})" };
let closure_27 = { code: "(function VoicePanelPIPTsx9(event,manager){let[getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,scheduleOnRN,triggerIOSHaptic]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(state.active){let offsetX=state.offsetX+centroid.x-state.originX;let offsetY=state.offsetY+centroid.y-state.originY;if(state.spread>MIN_PINCH_SPAN&&spread>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale=clampPIPScale({scale:previousScale*(spread/state.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale!==previousScale){pipState.scale.set(scale);const scaleChange=scale/previousScale;offsetX+=(centroid.x-(state.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid.y-(state.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state.pressed,active:true,baseX:state.baseX,baseY:state.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid.x,originY:centroid.y,spread:spread});return;}if(event.state!==State.BEGAN)return;if(Math.abs(state.originX-centroid.x)>MIN_GESTURE_START||Math.abs(state.originY-centroid.y)>MIN_GESTURE_START||Math.abs(state.spread-spread)>MIN_GESTURE_START){const scale=pipState.scale.get();const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x,baseY:y,offsetX:0,offsetY:0,originX:centroid.x,originY:centroid.y,spread:spread});if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});}manager.activate();scheduleOnRN(triggerIOSHaptic);}})" };
let closure_28 = { code: "(function VoicePanelPIPTsx10({velocityX:velocityX,velocityY:velocityY}){let[gestureState,settlePIPPosition,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,scheduleOnRN,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState]=this.__closure;const state=gestureState.get();settlePIPPosition(state,velocityX,velocityY);if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);scheduleOnRN(updateSourceTrackingView);scheduleOnRN(setVoicePanelPIPScaleCached,pipState.scale.get());})" };
let closure_29 = { code: "(function VoicePanelPIPTsx11(){let[isDockEnabled,updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE]=this.__closure;if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);})" };
let closure_30 = { code: "(function VoicePanelPIPTsx12(){let[scheduleOnRN,setFocused]=this.__closure;scheduleOnRN(setFocused,null);})" };
let closure_31 = { code: "(function VoicePanelPIPTsx13(){let[pipMode,VoicePanelPIPModes,scheduleOnRN,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls]=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls);}else{scheduleOnRN(hideControls);}}})" };
let closure_32 = { code: "(function VoicePanelPIPTsx14(){let[scheduleOnRN,handleSecondaryPIPTap]=this.__closure;scheduleOnRN(handleSecondaryPIPTap);})" };
let closure_33 = { code: "(function VoicePanelPIPTsx15(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_34 = { code: "(function VoicePanelPIPTsx16(){let[pipState]=this.__closure;return{height:pipState.height*pipState.scale.get()};})" };
let closure_35 = { code: "(function VoicePanelPIPTsx17(values){let[gestureState,withSpring,PIP_LAYOUT_PHYSICS]=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" };
let closure_37 = noop.memo(function PIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = noop.useContext(transitionCleanUp(11359)).pipHandoff;
  const mode = transitionState(19362).usePIPState().mode;
  const obj = transitionState(19362);
  const pIPCardsSettled = transitionState(11368).usePIPCardsSettled(pipHandoff);
  const obj2 = transitionState(11368);
  const pIPPanelLayoutCommitted = transitionState(11368).usePIPPanelLayoutCommitted(pipHandoff);
  items = [transitionState, pIPPanelLayoutCommitted, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && pIPPanelLayoutCommitted;
  }, items);
  return closure_15(VoicePanelPIP, {});
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default noop.memo(function VoicePanelPIPWrapper() {
  const pIPState = VoicePanelPIPStateContext.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    const obj2 = { pipMode: mode };
    const tmp3 = obj2;
  }
  return closure_1_15(native.TransitionItem, { item: tmp3, renderItem: renderPIPWrapper });
});