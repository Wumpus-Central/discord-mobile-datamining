// discord_app/modules/voice_panel/native/pip/VoicePanelPIP.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef1655 from "../../../../../_runtime/metro/01655__.js";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05598_LegacyBaseButton.js";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelPIPHandoff from "VoicePanelPIPHandoff.tsx";
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext.tsx";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import VoicePanelPIPScaleCache from "VoicePanelPIPScaleCache.tsx";
import utils_triggerIOSHapticDefault from "../utils/triggerIOSHaptic.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

require = fn;
class VoicePanelPIPTiles {
  constructor(arg0) {
    flag = global.hasTile;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.showContent;
    if (flag2 === undefined) {
      flag2 = true;
    }
    ({ mainTileAccessibilityProps, controlsOverlay, showPushToTalk, onMainTileTap, dragEnabled, resizeEnabled, onStreamReady } = global);
    if (showPushToTalk === undefined) {
      showPushToTalk = true;
    }
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    tmp = closure_18();
    obj = closure_4;
    tmp2 = closure_1;
    tmp3 = closure_3;
    context = closure_4.useContext(closure_1(closure_3[12]));
    setMode = context.setMode;
    closure_0 = setMode;
    tmp5 = closure_0;
    obj2 = closure_0(closure_3[13]);
    pIPState = obj2.usePIPState();
    pipHandoff = closure_4.useContext(closure_1(closure_3[12])).pipHandoff;
    obj3 = closure_0(closure_3[13]);
    mode = obj3.usePIPState().mode;
    obj4 = closure_0(closure_3[14]);
    pIPCardsSettled = obj4.usePIPCardsSettled(pipHandoff);
    obj5 = closure_0(closure_3[14]);
    tmp9 = null != mode;
    tmp11 = mode !== closure_13.IN_APP;
    pIPPanelLayoutCommitted = obj5.usePIPPanelLayoutCommitted(pipHandoff);
    tmp10 = closure_13;
    if (!tmp11) {
      tmp11 = pIPCardsSettled;
    }
    tmp12 = tmp9;
    if (!tmp9) {
      tmp12 = !pIPPanelLayoutCommitted;
    }
    tmp13 = tmp12;
    if (tmp12) {
      tmp14 = !tmp9;
      if (tmp9) {
        tmp14 = tmp11;
      }
      tmp13 = tmp14;
    }
    mode2 = pIPState.mode;
    obj1 = { onMainTileTap, dragEnabled, resizeEnabled, opacity: global.opacity };
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    closure_129_0 = mode2;
    onMainTileTap2 = obj1.onMainTileTap;
    closure_129_1 = onMainTileTap2;
    flag3 = obj1.dragEnabled;
    if (flag3 === undefined) {
      flag3 = true;
    }
    closure_129_2 = flag3;
    flag4 = obj1.resizeEnabled;
    if (flag4 === undefined) {
      flag4 = true;
    }
    closure_129_3 = flag4;
    closure_129_4 = undefined;
    closure_129_5 = undefined;
    closure_129_6 = undefined;
    closure_129_7 = undefined;
    closure_129_8 = undefined;
    closure_129_9 = undefined;
    closure_129_10 = undefined;
    closure_129_11 = undefined;
    closure_129_12 = undefined;
    closure_129_13 = undefined;
    closure_129_14 = undefined;
    closure_129_15 = undefined;
    closure_129_16 = undefined;
    closure_129_17 = undefined;
    closure_129_18 = undefined;
    closure_129_19 = undefined;
    closure_129_20 = undefined;
    closure_129_21 = undefined;
    closure_129_22 = undefined;
    context1 = obj.useContext(tmp2(tmp3[12]));
    controlsSpecs = context1.controlsSpecs;
    closure_129_4 = controlsSpecs;
    hideControls = context1.hideControls;
    closure_129_5 = hideControls;
    pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
    closure_129_6 = pipAvoidanceSpecs;
    safeArea = context1.safeArea;
    closure_129_7 = safeArea;
    setFocused = context1.setFocused;
    closure_129_8 = setFocused;
    setMode2 = context1.setMode;
    closure_129_9 = setMode2;
    showControls = context1.showControls;
    closure_129_10 = showControls;
    windowDimensions = context1.windowDimensions;
    closure_129_11 = windowDimensions;
    wrapperDimensions = context1.wrapperDimensions;
    closure_129_12 = wrapperDimensions;
    wrapperOffset = context1.wrapperOffset;
    closure_129_13 = wrapperOffset;
    ({ channelId: closure_129_14, isDockEnabled } = context1);
    closure_129_15 = isDockEnabled;
    tmp5Result = tmp5(tmp3[13]);
    pIPState1 = tmp5Result.usePIPState();
    closure_129_16 = pIPState1;
    items = [, ];
    items[0] = flag4;
    items[1] = pIPState1.scale;
    layoutEffect = obj.useLayoutEffect(() => {
      if (!c3) {
        let scale = closure_1_16.scale;
        const result = scale.set(1);
        return () => {
          scale = scale.scale;
          return scale.set(c0(c3[15]).getVoicePanelPIPScaleCached());
        };
      }
    }, items);
    tmp5Result1 = tmp5(tmp3[16]);
    sharedValue = tmp5Result1.useSharedValue(closure_22);
    closure_129_17 = sharedValue;
    tmp5Result2 = tmp5(tmp3[16]);
    sharedValue1 = tmp5Result2.useSharedValue(0);
    closure_129_18 = sharedValue1;
    items1 = [];
    items1[0] = sharedValue1;
    effect = obj.useEffect(() => {
      const timeout = setTimeout(() => {
        const result = closure_1_18.set(1);
      }, c12);
      return () => {
        clearTimeout(closure_0);
      };
    }, items1);
    items2 = [, , , , , , , ];
    items2[0] = closure_23;
    items2[1] = pIPState1;
    items2[2] = tmp5(tmp3[17]).getScaledPIPContainerHeight;
    items2[3] = tmp5(tmp3[17]).calculatePIPPositionFromVelocity;
    items2[4] = windowDimensions;
    items2[5] = safeArea;
    items2[6] = tmp2(tmp3[18]);
    items2[7] = wrapperDimensions;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
    class VoicePanelPIPTsx3 {
      constructor(arg0, arg1, arg2) {
        scale = closure_0.scale;
        value = scale.get();
        obj = { height: closure_0.height, containerHeight: closure_0.containerHeight, showSecondaryPIP: closure_0.showSecondaryPIP, scale: value };
        result = closure_0.width * value;
        obj1 = { velocityX: fn, velocityY: importDefault, absoluteX: global.baseX + global.offsetX + result / 2, absoluteY: global.baseY + global.offsetY + closure_1(obj) / 2, windowDimensions: closure_3.get(), safeArea: closure_4.get() };
        tmp3 = closure_2(obj1);
        obj4 = { pipX: tmp3.pipX, pipY: tmp3.pipY };
        tmp4 = closure_5(closure_6, obj4);
        return;
      }
    }
    items3 = [, , , , , , ];
    items3[0] = tmp22;
    items3[1] = tmp23;
    items3[2] = tmp24;
    items3[3] = tmp25;
    items3[4] = tmp26;
    items3[5] = tmp27;
    items3[6] = tmp28;
    VoicePanelPIPTsx3.__closure = items3;
    VoicePanelPIPTsx3.__workletHash = 5650627550281;
    VoicePanelPIPTsx3.__initData = tmp21;
    items4 = [, , , , , , , ];
    ({ containerHeight: arr5[0], height: arr5[1], scale: arr5[2], showSecondaryPIP: arr5[3], width: arr5[4] } = pIPState1);
    items4[5] = safeArea;
    items4[6] = windowDimensions;
    items4[7] = wrapperDimensions;
    callback = obj.useCallback(VoicePanelPIPTsx3, items4);
    closure_129_19 = callback;
    tmp5Result3 = tmp5(tmp3[16]);
    items5 = [, , , , , , , , , , , , , , , ];
    items5[0] = closure_24;
    items5[1] = pIPState1;
    items5[2] = tmp5(tmp3[17]).getScaledPIPContainerHeight;
    items5[3] = tmp12;
    items5[4] = sharedValue;
    items5[5] = tmp5(tmp3[17]).getClampedPIPPosition;
    items5[6] = wrapperDimensions;
    items5[7] = windowDimensions;
    items5[8] = safeArea;
    items5[9] = pipAvoidanceSpecs;
    items5[10] = closure_9;
    items5[11] = tmp5(tmp3[17]).PIP_LAYOUT_PHYSICS;
    items5[12] = sharedValue1;
    items5[13] = obj1.opacity;
    items5[14] = tmp5(tmp3[19]).withSpring;
    items5[15] = tmp5(tmp3[17]).getVoicePanelPIPBorderRadius;
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
    closure_13 = undefined;
    closure_14 = undefined;
    [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45] = items5;
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
        size1 = { width: result, height: tmp3Result, opacity: null, transform: null, borderRadius: null };
        obj4 = closure_12;
        num = undefined;
        value1 = closure_11.get();
        if (closure_12 != null) {
          num = obj4.get();
        }
        if (num == null) {
          num = 1;
        }
        size1.opacity = value1 * num;
        obj1 = { translateX: closure_13(x, tmp12) };
        items = [, ];
        items[0] = obj1;
        obj7 = { translateY: closure_13(y, tmp12) };
        items[1] = obj7;
        size1.transform = items;
        size1.borderRadius = closure_14(result, tmp3Result);
        return size1;
      }
    }
    items6 = [, , , , , , , , , , , , , , ];
    items6[0] = tmp31;
    items6[1] = tmp32;
    items6[2] = tmp33;
    items6[3] = tmp34;
    items6[4] = tmp35;
    items6[5] = tmp36;
    items6[6] = tmp37;
    items6[7] = tmp38;
    items6[8] = tmp39;
    items6[9] = tmp40;
    items6[10] = tmp41;
    items6[11] = tmp42;
    items6[12] = tmp43;
    items6[13] = tmp44;
    items6[14] = tmp45;
    VoicePanelPIPTsx4.__closure = items6;
    VoicePanelPIPTsx4.__workletHash = 15997221388161;
    VoicePanelPIPTsx4.__initData = tmp30;
    animatedStyle = tmp5Result3.useAnimatedStyle(VoicePanelPIPTsx4);
    tmp5Result4 = tmp5(tmp3[16]);
    items7 = [, , ];
    items7[0] = closure_25;
    items7[1] = pIPState1;
    items7[2] = tmp5(tmp3[17]).getVoicePanelPIPBorderRadius;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp47, tmp48, tmp49] = items7;
    class VoicePanelPIPTsx5 {
      constructor() {
        ({ width, height, scale } = closure_0);
        size = { width: width * scale.get(), height: height * scale.get(), borderRadius: closure_1(width, height) };
        return size;
      }
    }
    items8 = [, ];
    items8[0] = tmp48;
    items8[1] = tmp49;
    VoicePanelPIPTsx5.__closure = items8;
    VoicePanelPIPTsx5.__workletHash = 13253829300730;
    VoicePanelPIPTsx5.__initData = tmp47;
    animatedStyle1 = tmp5Result4.useAnimatedStyle(VoicePanelPIPTsx5);
    tmp5Result5 = tmp5(tmp3[16]);
    items9 = [, , , , ];
    items9[0] = closure_26;
    items9[1] = tmp13;
    items9[2] = tmp5(tmp3[20]).withTiming;
    items9[3] = tmp5(tmp3[21]).EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    items9[4] = closure_19;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    [tmp51, tmp52, tmp53, tmp54, tmp55] = items9;
    class VoicePanelPIPTsx6 {
      constructor() {
        num = 0;
        tmp = closure_0;
        if (closure_0) {
          num = 1;
        }
        obj = { opacity: num, shadowOpacity: null };
        num2 = 0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = closure_3;
          num2 = closure_1(closure_2.shadowOpacity, closure_3);
        }
        obj.shadowOpacity = num2;
        return obj;
      }
    }
    items10 = [, , , ];
    items10[0] = tmp52;
    items10[1] = tmp53;
    items10[2] = tmp54;
    items10[3] = tmp55;
    VoicePanelPIPTsx6.__closure = items10;
    VoicePanelPIPTsx6.__workletHash = 4733853284458;
    VoicePanelPIPTsx6.__initData = tmp51;
    items11 = [, , , , , , , , , , , , , , ];
    items11[0] = flag3;
    items11[1] = flag4;
    items11[2] = isDockEnabled;
    items11[3] = sharedValue;
    items11[4] = pipAvoidanceSpecs;
    ({ containerHeight: arr12[5], height: arr12[6], scale: arr12[7], showSecondaryPIP: arr12[8], width: arr12[9] } = pIPState1);
    items11[10] = safeArea;
    items11[11] = callback;
    items11[12] = windowDimensions;
    items11[13] = wrapperDimensions;
    items11[14] = wrapperOffset;
    animatedStyle2 = tmp5Result5.useAnimatedStyle(VoicePanelPIPTsx6);
    items12 = [, , , , , , ];
    items12[0] = controlsSpecs;
    items12[1] = hideControls;
    items12[2] = setFocused;
    items12[3] = showControls;
    items12[4] = mode2;
    items12[5] = setMode2;
    items12[6] = onMainTileTap2;
    memo = obj.useMemo(() => {
      const Gesture = LegacyBaseButton.Gesture;
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(c2);
      let result = Gesture.Pan().enabled(c2).manualActivation(true).shouldCancelWhenOutside(false);
      items = [closure_27, getTouchesCentroid, getTouchesSpread, closure_1_17, closure_22, updateSharedValueIfChangedDefault];
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
      const manualActivationResult = Gesture.Pan().enabled(c2).manualActivation(true);
      const items2 = [closure_28, updateSharedValueIfChangedDefault, closure_1_17, getTouchesCentroid, getTouchesSpread];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
      class VoicePanelPIPTsx8 {
        constructor(arg0) {
          closure_0 = arg0;
          allTouches = arg0.allTouches;
          found = allTouches.filter(/* F146794 */ function() { ... });
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
      const items4 = [closure_29, getTouchesCentroid, getTouchesSpread, closure_1_17, c3, 8, closure_1_16, VoicePanelPIPUtils.clampPIPScale, c11, c7, c6, LegacyBaseButton.State, 10, VoicePanelPIPUtils.getClampedPIPPosition, c12, VoicePanelPIPUtils.getScaledPIPContainerHeight, isLaunched, updateSharedValueIfChangedDefault, c13, _mod1708.scheduleOnRN, utils_triggerIOSHapticDefault];
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
      c19 = undefined;
      [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items4;
      class VoicePanelPIPTsx9 {
        constructor(arg0, arg1) {
          point = closure_0(arg0.allTouches);
          tmp = closure_1(arg0.allTouches, point);
          obj = closure_2;
          value = closure_2.get();
          if (value.active) {
            diff = value.offsetX + point.x - value.originX;
            diff1 = value.offsetY + point.y - value.originY;
            tmp25 = closure_3;
            sum1 = diff1;
            sum = diff;
            if (closure_3) {
              sum1 = diff1;
              sum = diff;
              if (value.spread > closure_4) {
                sum1 = diff1;
                sum = diff;
                if (tmp > tmp28) {
                  scale3 = closure_5.scale;
                  tmp34 = closure_5;
                  value1 = scale3.get();
                  tmp36 = closure_6;
                  obj1 = { scale: null, width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
                  obj1.scale = value1 * (tmp / value.spread);
                  ({ width: obj6.width, containerHeight: obj6.containerHeight, showSecondaryPIP: obj6.showSecondaryPIP } = closure_5);
                  tmp37 = closure_7;
                  obj1.windowDimensions = closure_7.get();
                  tmp38 = closure_8;
                  obj1.safeArea = closure_8.get();
                  tmp39 = closure_9;
                  obj1.pipAvoidanceSpecs = closure_9.get();
                  tmp40 = closure_6(obj1);
                  sum1 = diff1;
                  sum = diff;
                  if (tmp40 !== value1) {
                    scale2 = tmp34.scale;
                    result = scale2.set(tmp40);
                    result1 = tmp40 / value1;
                    num = 1;
                    sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                    sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
                  }
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
            tmp3 = closure_10;
            if (arg0.state === closure_10.BEGAN) {
              tmp32 = globalThis;
              _Math3 = Math;
              tmp33 = closure_11;
              if (Math.abs(value.originX - point.x) <= closure_11) {
                _Math = Math;
                if (Math.abs(value.originY - point.y) <= tmp33) {
                  _Math2 = Math;
                }
              }
              tmp4 = closure_5;
              scale = closure_5.scale;
              value2 = scale.get();
              tmp6 = closure_12;
              size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
              tmp7 = closure_13;
              size.pipX = closure_13.get().pipX;
              size.pipY = closure_13.get().pipY;
              size.width = closure_5.width * value2;
              tmp8 = closure_14;
              obj8 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
              ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = closure_5);
              obj8.scale = value2;
              size.height = closure_14(obj8);
              tmp9 = closure_7;
              size.windowDimensions = closure_7.get();
              tmp10 = closure_8;
              size.safeArea = closure_8.get();
              tmp11 = closure_9;
              size.bottomAvoidanceRegion = closure_9.get().bottom;
              size.topAvoidanceRegion = closure_9.get().top;
              tmp12 = closure_12(size);
              obj9 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
              ({ x: obj4.baseX, y: obj4.baseY } = tmp12);
              ({ x: obj4.originX, y: obj4.originY } = point);
              obj9.spread = tmp;
              result3 = obj.set(obj9);
              tmp14 = closure_15;
              if (!closure_15) {
                tmp15 = closure_16;
                tmp16 = closure_17;
                tmp17 = closure_16(closure_17, { gestureActive: true, x: 0, y: 0 });
              }
              tmp18 = arg1;
              activateResult = arg1.activate();
              tmp20 = closure_18;
              tmp21 = closure_19;
              tmp22 = closure_18(closure_19);
            }
          }
          return;
        }
      }
      const items5 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
      VoicePanelPIPTsx9.__closure = items5;
      VoicePanelPIPTsx9.__workletHash = 14940261768507;
      VoicePanelPIPTsx9.__initData = tmp23;
      const onTouchesUpResult = result.onTouchesDown(VoicePanelPIPTsx7).onTouchesUp(VoicePanelPIPTsx8);
      const tmp19 = c3;
      const items6 = [closure_30, closure_1_17, closure_1_19, isLaunched, updateSharedValueIfChangedDefault, c13, closure_22, _mod1708.scheduleOnRN, ExternalPipDefault.updateSourceTrackingView, tmp19, VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached, closure_1_16];
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
      [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items6;
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
          tmp6 = closure_6;
          tmp7 = closure_6(closure_7);
          if (closure_8) {
            tmp8 = closure_9;
            tmp9 = closure_10;
            scale = closure_10.scale;
            tmp6Result = tmp6(closure_9, scale.get());
          }
          return;
        }
      }
      const items7 = [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
      VoicePanelPIPTsx10.__closure = items7;
      VoicePanelPIPTsx10.__workletHash = 16486793329115;
      VoicePanelPIPTsx10.__initData = tmp44;
      const onTouchesMoveResult = result.onTouchesDown(VoicePanelPIPTsx7).onTouchesUp(VoicePanelPIPTsx8).onTouchesMove(VoicePanelPIPTsx9);
      const items8 = [closure_31, isLaunched, updateSharedValueIfChangedDefault, c13, closure_1_17, closure_22];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items8;
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
      const items9 = [tmp57, tmp58, tmp59, tmp60, tmp61];
      VoicePanelPIPTsx11.__closure = items9;
      VoicePanelPIPTsx11.__workletHash = 9688406235986;
      VoicePanelPIPTsx11.__initData = tmp56;
      return result.onTouchesDown(VoicePanelPIPTsx7).onTouchesUp(VoicePanelPIPTsx8).onTouchesMove(VoicePanelPIPTsx9).onEnd(VoicePanelPIPTsx10).onFinalize(VoicePanelPIPTsx11);
    }, items11);
    memo1 = obj.useMemo(() => {
      const Gesture = LegacyBaseButton.Gesture;
      const Gesture2 = LegacyBaseButton.Gesture;
      let tmp4 = null == c1;
      if (tmp4) {
        tmp4 = c0 !== state.IN_APP;
      }
      const TapResult = Gesture2.Tap();
      const tmp3 = c1;
      const enabledResult = Gesture2.Tap().enabled(tmp4);
      items = [closure_32, _mod1708.scheduleOnRN, c8];
      c0 = undefined;
      c1 = undefined;
      [tmp7, tmp8, tmp9] = items;
      class VoicePanelPIPTsx12 {
        constructor() {
          tmp = closure_0(closure_1, null);
          return;
        }
      }
      const items1 = [tmp8, tmp9];
      VoicePanelPIPTsx12.__closure = items1;
      VoicePanelPIPTsx12.__workletHash = 292478158131;
      VoicePanelPIPTsx12.__initData = tmp7;
      const maxDistanceResult = Gesture2.Tap().enabled(tmp4).maxDistance(30);
      const onStartResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).onStart(VoicePanelPIPTsx12);
      const Gesture3 = LegacyBaseButton.Gesture;
      const numberOfTapsResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).onStart(VoicePanelPIPTsx12).numberOfTaps(2);
      const TapResult1 = Gesture3.Tap();
      const enabledResult1 = Gesture3.Tap().enabled(true);
      const items2 = [closure_33, tmp3, _mod1708.scheduleOnRN, c0, state, c9, constants, c4, VoicePanelControlsModes, c10, c5];
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
      [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
      class VoicePanelPIPTsx13 {
        constructor() {
          if (null != closure_0) {
            tmp16 = closure_1;
            tmp17 = closure_1(tmp);
          } else {
            tmp2 = closure_2;
            tmp3 = closure_3;
            if (closure_2 === closure_3.IN_APP) {
              tmp12 = closure_1;
              tmp13 = closure_4;
              tmp14 = closure_5;
              tmp15 = closure_1(closure_4, closure_5.PANEL);
            } else {
              tmp4 = closure_6;
              tmp5 = closure_7;
              if (closure_6.get().mode === closure_7.HIDDEN) {
                tmp9 = closure_1;
                tmp10 = closure_8;
                tmp11 = closure_1(closure_8);
              } else {
                tmp6 = closure_1;
                tmp7 = closure_9;
                tmp8 = closure_1(closure_9);
              }
            }
          }
          return;
        }
      }
      const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
      VoicePanelPIPTsx13.__closure = items3;
      VoicePanelPIPTsx13.__workletHash = 13752618097535;
      VoicePanelPIPTsx13.__initData = tmp11;
      return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(VoicePanelPIPTsx13));
    }, items12);
    tmp5Result6 = tmp5(tmp3[26]);
    items13 = [];
    items13[0] = closure_6;
    stateFromStores = tmp5Result6.useStateFromStores(items13, () => {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== c14;
    });
    closure_129_20 = stateFromStores;
    tmp5Result7 = tmp5(tmp3[26]);
    items14 = [];
    items14[0] = closure_7;
    tmp60 = closure_7;
    stateFromStores1 = tmp5Result7.useStateFromStores(items14, () => {
      const mainFrame = _undefined7.getMainFrame();
      let id = null;
      if (isLaunched(mainFrame)) {
        id = mainFrame.id;
      }
      return id;
    });
    closure_129_21 = stateFromStores1;
    items15 = [, , , ];
    items15[0] = stateFromStores;
    items15[1] = stateFromStores1;
    items15[2] = setMode2;
    items15[3] = setFocused;
    callback1 = obj.useCallback(() => {
      if (getTouchesCentroid) {
        _undefined9(constants.PIP);
        _undefined8(null);
      }
      if (null != getTouchesSpread) {
        FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
      } else {
        const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    }, items15);
    closure_129_22 = callback1;
    items16 = [];
    items16[0] = callback1;
    memo2 = obj.useMemo(() => {
      const Gesture = LegacyBaseButton.Gesture;
      const TapResult = Gesture.Tap();
      items = [closure_34, _mod1708.scheduleOnRN, closure_1_22];
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
    }, items16);
    tmp5Result8 = tmp5(tmp3[16]);
    items17 = [, , ];
    items17[0] = closure_36;
    items17[1] = tmp5(tmp3[17]).getVoicePanelPIPBorderRadius;
    items17[2] = pIPState;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp64, tmp65, tmp66] = items17;
    class VoicePanelPIPTsx16 {
      constructor() {
        obj = { borderRadius: closure_0(closure_1.width, closure_1.height) };
        return obj;
      }
    }
    items18 = [, ];
    items18[0] = tmp65;
    items18[1] = tmp66;
    VoicePanelPIPTsx16.__closure = items18;
    VoicePanelPIPTsx16.__workletHash = 8098994638569;
    VoicePanelPIPTsx16.__initData = tmp64;
    animatedStyle3 = tmp5Result8.useAnimatedStyle(VoicePanelPIPTsx16);
    items19 = [];
    items19[0] = setMode;
    memo3 = obj.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.oN8bqe);
      items = [{ name: "activate" }];
      obj.accessibilityActions = items;
      obj.onAccessibilityAction = function onAccessibilityAction() {
        _undefined(constants.PANEL);
      };
      return obj;
    }, items19);
    tmp5Result9 = tmp5(tmp3[26]);
    items20 = [];
    items20[0] = tmp60;
    stateFromStores2 = tmp5Result9.useStateFromStores(items20, () => {
      const mainFrame = _undefined7.getMainFrame();
      let id = null;
      if (isLaunched(mainFrame)) {
        id = mainFrame.id;
      }
      return id;
    });
    closure_1 = stateFromStores2;
    items21 = [];
    items21[0] = stateFromStores2;
    callback2 = obj.useCallback(() => {
      if (null != c1) {
        FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
      } else {
        const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    }, items21);
    closure_2 = callback2;
    items22 = [];
    items22[0] = callback2;
    memo4 = obj.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
      items = [{ name: "activate" }];
      obj.accessibilityActions = items;
      obj.onAccessibilityAction = onAccessibilityAction;
      return obj;
    }, items22);
    tmp72 = closure_8((isActivityFocused) => isActivityFocused.isActivityFocused);
    if (showPushToTalk) {
      showPushToTalk = tmp2(tmp3[30])(context.controlsSpecs).pushToTalk;
    }
    if (showPushToTalk) {
      tmp73 = pIPState.mode !== tmp10.IN_PANEL || tmp72;
      showPushToTalk = tmp73;
    }
    tmp5Result10 = tmp5(tmp3[16]);
    items23 = [, ];
    items23[0] = closure_37;
    items23[1] = pIPState;
    closure_0 = undefined;
    [tmp74, tmp75] = items23;
    class VoicePanelPIPTsx17 {
      constructor() {
        obj = { height: height * scale.get() };
        ({ scale, height } = closure_0);
        return obj;
      }
    }
    items24 = [];
    items24[0] = tmp75;
    VoicePanelPIPTsx17.__closure = items24;
    VoicePanelPIPTsx17.__workletHash = 3624002128847;
    VoicePanelPIPTsx17.__initData = tmp74;
    items25 = [, , , ];
    items25[0] = closure_35;
    items25[1] = sharedValue;
    animatedStyle4 = tmp5Result10.useAnimatedStyle(VoicePanelPIPTsx17);
    items25[2] = tmp5(tmp3[19]).withSpring;
    items25[3] = tmp5(tmp3[17]).PIP_LAYOUT_PHYSICS;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp77, tmp78, tmp79, tmp80] = items25;
    class VoicePanelPIPTsx15 {
      constructor(arg0) {
        active = closure_0.get().active;
        size = { originX: closure_1(global.targetOriginX, closure_2), originY: closure_1(global.targetOriginY, closure_2), width: null, height: null };
        tmp = closure_1;
        tmp2 = closure_2;
        targetWidth = global.targetWidth;
        size.width = active ? targetWidth : tmp(targetWidth, tmp2);
        targetHeight = global.targetHeight;
        obj1 = { animations: null, initialValues: null };
        size.height = active ? targetHeight : tmp(targetHeight, tmp2);
        obj1.animations = size;
        obj1.initialValues = { originX: global.currentOriginX, originY: global.currentOriginY, width: global.currentWidth, height: global.currentHeight };
        return obj1;
      }
    }
    items26 = [, , ];
    items26[0] = tmp78;
    items26[1] = tmp79;
    items26[2] = tmp80;
    VoicePanelPIPTsx15.__closure = items26;
    VoicePanelPIPTsx15.__workletHash = 7799675155155;
    VoicePanelPIPTsx15.__initData = tmp77;
    items27 = [];
    items27[0] = sharedValue;
    callback3 = obj.useCallback(VoicePanelPIPTsx15, items27);
    tmp82 = jsxs;
    obj31 = { pointerEvents: "box-none", style: null, layout: callback3, children: null };
    items28 = [, ];
    items28[0] = tmp.container;
    items28[1] = animatedStyle;
    obj31.style = items28;
    tmp83 = jsx;
    obj32 = { gesture: memo, children: null };
    obj33 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback3, children: null };
    tmp82Result = null;
    if (tmp12) {
      tmp82Result = null;
      if (flag) {
        obj34 = { style: null, pointerEvents: "box-none", layout: null };
        items29 = [, , , ];
        ({ pipContentWrapper: arr30[0], inAppElevationShadow: arr30[1] } = tmp);
        items29[2] = animatedStyle1;
        items29[3] = animatedStyle2;
        obj34.style = items29;
        obj34.layout = callback3;
        tmp85 = undefined;
        if (null == mainTileAccessibilityProps) {
          tmp85 = memo3;
        }
        tmp86 = obj34;
        tmp87 = tmp85;
        merged = Object.assign(tmp85);
        obj35 = { gesture: null, children: null };
        obj35.gesture = memo1;
        obj36 = { style: null, layout: null };
        items30 = [, ];
        items30[0] = tmp.pipMask;
        items30[1] = animatedStyle3;
        obj36.style = items30;
        obj36.layout = callback3;
        tmp89 = obj36;
        tmp90 = mainTileAccessibilityProps;
        merged1 = Object.assign(mainTileAccessibilityProps);
        tmp83Result = null;
        if (flag2) {
          obj37 = { layoutTransition: null, onStreamReady: null };
          obj37.layoutTransition = callback3;
          obj37.onStreamReady = onStreamReady;
          tmp83Result = tmp83(tmp2(tmp3[32]), obj37);
        }
        obj36.children = tmp83Result;
        obj35.children = tmp83(tmp2(tmp3[16]).View, obj36);
        items31 = [, ];
        items31[0] = tmp83(tmp5(tmp3[22]).GestureDetector, obj35);
        tmp83Result1 = null;
        if (null != controlsOverlay) {
          obj38 = { style: null, pointerEvents: "box-none", layout: null, children: null };
          items32 = [, ];
          items32[0] = tmp.pipMask;
          items32[1] = animatedStyle3;
          obj38.style = items32;
          obj38.layout = callback3;
          obj38.children = controlsOverlay;
          tmp83Result1 = tmp83(tmp2(tmp3[16]).View, obj38);
        }
        items31[1] = tmp83Result1;
        obj34.children = items31;
        tmp82Result = tmp82(tmp2(tmp3[16]).View, obj34);
      }
    }
    items33 = [, ];
    items33[0] = tmp82Result;
    tmp83Result2 = null;
    if (pIPState.showSecondaryPIP) {
      obj39 = { style: null };
      items34 = [, , ];
      ({ pipContentWrapper: arr35[0], inAppElevationShadow: arr35[1] } = tmp);
      items34[2] = animatedStyle1;
      obj39.style = items34;
      tmp95 = obj39;
      tmp96 = memo4;
      merged2 = Object.assign(memo4);
      obj40 = { style: null, children: null };
      items35 = [, ];
      items35[0] = tmp.pipMask;
      items35[1] = animatedStyle3;
      obj40.style = items35;
      obj41 = { gesture: null, children: null };
      obj41.gesture = memo2;
      obj42 = { style: null, children: null };
      tmp99 = closure_5;
      obj42.style = closure_5.absoluteFill;
      tmp2Result = tmp2(tmp3[33]);
      obj42.children = tmp83(tmp2(tmp3[34]), {});
      obj41.children = tmp83(tmp2Result, obj42);
      obj40.children = tmp83(tmp5(tmp3[22]).GestureDetector, obj41);
      obj39.children = tmp83(tmp2(tmp3[16]).View, obj40);
      tmp83Result2 = tmp83(tmp2(tmp3[16]).View, obj39);
    }
    items33[1] = tmp83Result2;
    obj33.children = items33;
    obj32.children = tmp82(tmp2(tmp3[16]).View, obj33);
    items36 = [, ];
    items36[0] = tmp83(tmp5(tmp3[22]).GestureDetector, obj32);
    tmp83Result3 = null;
    if (tmp13) {
      tmp83Result3 = null;
      if (showPushToTalk) {
        obj43 = { pointerEvents: "box-none", style: null, layout: null, children: null };
        items37 = [, ];
        items37[0] = tmp.pushToTalkContainer;
        items37[1] = animatedStyle4;
        obj43.style = items37;
        obj43.layout = callback3;
        obj43.children = tmp83(tmp2(tmp3[35]), {});
        tmp83Result3 = tmp83(tmp2(tmp3[16]).View, obj43);
      }
    }
    items36[1] = tmp83Result3;
    obj31.children = items36;
    return tmp82(tmp2(tmp3[16]).View, obj31);
  }
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return closure_1_16(closure_39, { transitionState, transitionCleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
let StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11985);
({ DRAWER_SPRING_PHYSICS: closure_9, VoicePanelModes: closure_10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11983).VoicePanelControlsModes;
const VoicePanelPIPConstants = fn(19909);
({ PIP_FIRST_FRAME_DELAY_MS: closure_12, VoicePanelPIPModes: map1 } = VoicePanelPIPConstants);
const ActivityPanelModes = fn(5959).ActivityPanelModes;
const isLaunched = fn(7020).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5306);
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
const collapsedCategories = createStyles.createStyles(obj);
let closure_19 = { duration: 200 };
let items = [{ code: "(function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};})" }];
[tmp8] = items;
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
getTouchesCentroid.__initData = tmp8;
let items1 = [{ code: "(function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;})" }];
[tmp9] = items1;
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
getTouchesSpread.__initData = tmp9;
let closure_22 = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
let closure_23 = { code: "(function VoicePanelPIPTsx3(state,velocityX,velocityY){let[pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions]=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});})" };
let closure_24 = { code: "(function VoicePanelPIPTsx4(){let[pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,tileOpacity,withSpring,getVoicePanelPIPBorderRadius]=this.__closure;var _tileOpacity$get,_tileOpacity;const width=pipState.width*pipState.scale.get();const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state=gestureState.get();let x;let y;if(state.active){x=state.baseX+state.offsetX;y=state.baseY+state.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width,height:height,opacity:opacity.get()*((_tileOpacity$get=(_tileOpacity=tileOpacity)===null||_tileOpacity===void 0?void 0:_tileOpacity.get())!==null&&_tileOpacity$get!==void 0?_tileOpacity$get:1),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_25 = { code: "(function VoicePanelPIPTsx5(){let[pipState,getVoicePanelPIPBorderRadius]=this.__closure;const{width:width,height:height,scale:scale}=pipState;return{width:width*scale.get(),height:height*scale.get(),borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_26 = { code: "(function VoicePanelPIPTsx6(){let[mainTileVisible,withTiming,EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS,MAIN_PIP_SHADOW_FADE_IN_TIMING]=this.__closure;return{opacity:mainTileVisible?1:0,shadowOpacity:mainTileVisible?withTiming(EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS.shadowOpacity,MAIN_PIP_SHADOW_FADE_IN_TIMING):0};})" };
let closure_27 = { code: "(function VoicePanelPIPTsx7(event){let[getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(!state.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});})" };
let closure_28 = { code: "(function VoicePanelPIPTsx8(event){let[updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread]=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:getTouchesSpread(remainingTouches,centroid)});})" };
let closure_29 = { code: "(function VoicePanelPIPTsx9(event,manager){let[getTouchesCentroid,getTouchesSpread,gestureState,resizeEnabled,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,scheduleOnRN,triggerIOSHaptic]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(state.active){let offsetX=state.offsetX+centroid.x-state.originX;let offsetY=state.offsetY+centroid.y-state.originY;if(resizeEnabled&&state.spread>MIN_PINCH_SPAN&&spread>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale=clampPIPScale({scale:previousScale*(spread/state.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale!==previousScale){pipState.scale.set(scale);const scaleChange=scale/previousScale;offsetX+=(centroid.x-(state.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid.y-(state.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state.pressed,active:true,baseX:state.baseX,baseY:state.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid.x,originY:centroid.y,spread:spread});return;}if(event.state!==State.BEGAN)return;if(Math.abs(state.originX-centroid.x)>MIN_GESTURE_START||Math.abs(state.originY-centroid.y)>MIN_GESTURE_START||Math.abs(state.spread-spread)>MIN_GESTURE_START){const scale=pipState.scale.get();const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x,baseY:y,offsetX:0,offsetY:0,originX:centroid.x,originY:centroid.y,spread:spread});if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});}manager.activate();scheduleOnRN(triggerIOSHaptic);}})" };
let closure_30 = { code: "(function VoicePanelPIPTsx10({velocityX:velocityX,velocityY:velocityY}){let[gestureState,settlePIPPosition,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,scheduleOnRN,updateSourceTrackingView,resizeEnabled,setVoicePanelPIPScaleCached,pipState]=this.__closure;const state=gestureState.get();settlePIPPosition(state,velocityX,velocityY);if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);scheduleOnRN(updateSourceTrackingView);if(resizeEnabled){scheduleOnRN(setVoicePanelPIPScaleCached,pipState.scale.get());}})" };
let closure_31 = { code: "(function VoicePanelPIPTsx11(){let[isDockEnabled,updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE]=this.__closure;if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);})" };
let closure_32 = { code: "(function VoicePanelPIPTsx12(){let[scheduleOnRN,setFocused]=this.__closure;scheduleOnRN(setFocused,null);})" };
let closure_33 = { code: "(function VoicePanelPIPTsx13(){let[onMainTileTap,scheduleOnRN,pipMode,VoicePanelPIPModes,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls]=this.__closure;if(onMainTileTap!=null){scheduleOnRN(onMainTileTap);}else if(pipMode===VoicePanelPIPModes.IN_APP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls);}else{scheduleOnRN(hideControls);}}})" };
let closure_34 = { code: "(function VoicePanelPIPTsx14(){let[scheduleOnRN,handleSecondaryPIPTap]=this.__closure;scheduleOnRN(handleSecondaryPIPTap);})" };
let closure_35 = { code: "(function VoicePanelPIPTsx15(values){let[gestureState,withSpring,PIP_LAYOUT_PHYSICS]=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" };
let closure_36 = { code: "(function VoicePanelPIPTsx16(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_37 = { code: "(function VoicePanelPIPTsx17(){let[pipState]=this.__closure;return{height:pipState.height*pipState.scale.get()};})" };
function usePIPTileHandoff() {
  const pipHandoff = noop.useContext(VoicePanelStateContextDefault).pipHandoff;
  const mode = VoicePanelPIPStateContext.usePIPState().mode;
  const pIPCardsSettled = VoicePanelPIPHandoff.usePIPCardsSettled(pipHandoff);
  const obj4 = { isMainPIPActive: null != mode, cardArrivedInPIP: null, panelLayoutCommitted: null };
  let tmp3 = mode !== state.IN_APP;
  const pIPPanelLayoutCommitted = VoicePanelPIPHandoff.usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp3) {
    tmp3 = pIPCardsSettled;
  }
  obj4.cardArrivedInPIP = tmp3;
  obj4.panelLayoutCommitted = pIPPanelLayoutCommitted;
  return obj4;
}
let closure_39 = noop.memo(function PIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = noop.useContext(transitionCleanUp(11984)).pipHandoff;
  const mode = transitionState(11995).usePIPState().mode;
  const obj = transitionState(11995);
  const pIPCardsSettled = transitionState(11993).usePIPCardsSettled(pipHandoff);
  const obj2 = transitionState(11993);
  const pIPPanelLayoutCommitted = transitionState(11993).usePIPPanelLayoutCommitted(pipHandoff);
  items = [transitionState, pIPPanelLayoutCommitted, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && pIPPanelLayoutCommitted;
  }, items);
  return closure_16(VoicePanelPIPTiles, {});
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
  return closure_1_16(native.TransitionItem, { item: tmp3, renderItem: renderPIPWrapper });
});
export { usePIPTileHandoff };
export { VoicePanelPIPTiles };