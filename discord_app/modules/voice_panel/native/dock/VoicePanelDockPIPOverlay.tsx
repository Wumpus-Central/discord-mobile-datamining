// discord_app/modules/voice_panel/native/dock/VoicePanelDockPIPOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1707 from "../../../../../_runtime/metro/01707__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PerceptualVolumeUtils from "../../../../utils/PerceptualVolumeUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import useStateFromSharedValueDefault from "../../../reanimated/native/useStateFromSharedValue.tsx";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function VolumeIcon(Icon) {
  const obj = { style: closure_16().volumeIcon, pointerEvents: "none", children: null };
  obj2 = { size: "sm", color: null };
  const tmp = closure_16();
  obj2.color = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
  obj.children = React6(Icon.Icon, obj2);
  return React6(NativeViewDefault, obj);
}
function StreamVolumeSlider(stacked) {
  stacked = stacked.stacked;
  let handleVolumeChange;
  const tmp = closure_16();
  const tmp4Result = useMuteAwareLocalVolumeDefault(
    stacked.ownerId,
    handleVolumeChange(5868).MediaEngineContextTypes.STREAM,
  );
  handleVolumeChange = tmp4Result.handleVolumeChange;
  items = [handleVolumeChange];
  const obj = { Icon: null };
  const callback = noop.useCallback(
    (arg0) => handleVolumeChange(PerceptualVolumeUtils.perceptualToAmplitude(arg0)),
    items,
  );
  obj.Icon = handleVolumeChange(19552).VoiceLowIcon;
  const tmp9 = closure_9(VolumeIcon, obj);
  const tmp10 = closure_9(VolumeIcon, { Icon: handleVolumeChange(7167).VoiceNormalIcon });
  const obj3 = { style: stacked ? tmp.stackedSlider : tmp.slider, children: null };
  obj2 = { Icon: handleVolumeChange(7167).VoiceNormalIcon };
  const obj4 = { value: null, maxValue: null, onChange: null, formatValue: null, accessibilityLabel: null };
  const tmp11 = NativeViewDefault;
  obj4.value = handleVolumeChange(6004).amplitudeToPerceptual(tmp4Result.effectiveVolume);
  obj4.maxValue = maxValue;
  obj4.onChange = callback;
  obj4.formatValue = function formatValue(arg0) {
    return "" + Math.round(arg0) + "%";
  };
  const intl = tmp5(1112).intl;
  obj4.accessibilityLabel = intl.string(handleVolumeChange(1112).t.pEAl4b);
  obj3.children = closure_9(handleVolumeChange(10399).Slider, obj4);
  const tmp8Result = closure_9(tmp11, obj3);
  if (stacked) {
    const obj5 = { children: null };
    const items1 = [tmp8Result];
    const obj6 = { style: tmp.row, pointerEvents: "box-none", children: null };
    const items2 = [tmp9, tmp10];
    obj6.children = items2;
    items1[1] = closure_10(NativeViewDefault, obj6);
    obj5.children = items1;
    let tmp13Result = closure_10(closure_11, obj5);
  } else {
    const obj7 = { style: null, pointerEvents: "box-none", children: null };
    const items3 = [,];
    ({ row: arr2[0], bottomRow: arr2[1] } = tmp);
    obj7.style = items3;
    const items4 = [tmp9, tmp8Result, tmp10];
    obj7.children = items4;
    tmp13Result = closure_10(NativeViewDefault, obj7);
  }
  return tmp13Result;
}
const StyleSheet = fn(17).StyleSheet;
const maxValue = fn(5855).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const VoicePanelDockPIPOverlayModes = { HIDDEN: "HIDDEN", CONTROLS: "CONTROLS", VOLUME: "VOLUME" };
let obj2 = { duration: 100 };
const FadeIn = fn(1654).FadeIn;
let closure_14 = FadeIn.duration(obj2.duration);
const FadeOut = fn(1654).FadeOut;
let closure_15 = FadeOut.duration(obj2.duration);
const createStyles = fn(5043);
let obj3 = {
  modeContent: null,
  row: null,
  bottomRow: null,
  rowEnd: null,
  volumeContent: null,
  volumeIcon: null,
  slider: null,
  stackedSlider: null,
};
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.justifyContent = "space-between";
obj5.padding = nativeDefault.space.PX_8;
obj5.backgroundColor = nativeDefault.unsafe_rawColors.OPACITY_BLACK_20;
obj3.modeContent = obj5;
obj3.row = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj3.bottomRow = { height: fn(5647).SMALL_BUTTON_HEIGHT };
obj3.rowEnd = { justifyContent: "flex-end" };
let obj7 = { height: fn(5647).SMALL_BUTTON_HEIGHT };
obj3.volumeContent = { justifyContent: "flex-end", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
let size = {
  width: fn(5647).SMALL_BUTTON_HEIGHT,
  height: fn(5647).SMALL_BUTTON_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
};
obj3.volumeIcon = size;
obj3.slider = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj8 = { justifyContent: "flex-end", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj3.stackedSlider = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
let closure_16 = createStyles.createStyles(obj3);
let closure_19 = {
  code: "(function VoicePanelDockPIPOverlayTsx1(finished){let[visible,scheduleOnRN,setContentMode]=this.__closure;if(finished===true&&!visible){scheduleOnRN(setContentMode,null);}})",
};
let closure_20 = {
  code: "(function VoicePanelDockPIPOverlayTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
let closure_21 = {
  code: "(function VoicePanelDockPIPOverlayTsx3(){let[pipState,STACKED_VOLUME_MAX_WIDTH]=this.__closure;return pipState.width*pipState.scale.get()<STACKED_VOLUME_MAX_WIDTH;})",
};
let obj9 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPOverlay.tsx");

export default noop.memo(function VoicePanelDockPIPOverlay(ownerId) {
  ownerId = ownerId.ownerId;
  _require = ownerId;
  ({ mode, onInteractionEnd } = ownerId);
  _slicedToArray = undefined;
  let sharedValue;
  ({ kind, onToggleVolume, onInteractionStart, onStopWatching, onOpenCall } = ownerId);
  let tmp = closure_16();
  const guildId = sharedValue.useContext(VoicePanelStateContextDefault).guildId;
  importDefault = guildId;
  dependencyMap = tmp5;
  let tmp6 = null;
  if (mode !== sharedValue.HIDDEN) {
    tmp6 = mode;
  }
  [tmp8, tmp9] = sharedValue.useState(tmp6);
  _slicedToArray = tmp9;
  let tmp10 = tmp5;
  if (mode !== sharedValue.HIDDEN) {
    tmp10 = tmp8 !== mode;
  }
  if (tmp10) {
    tmp9(mode);
  }
  const tmp7 = _slicedToArray(sharedValue.useState(tmp6), 2);
  sharedValue = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  items = [sharedValue, mode !== sharedValue.HIDDEN];
  const effect = obj.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = 1;
    }
    items = [closure_19, closure_2, _mod1707.scheduleOnRN, c3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items;
    class VoicePanelDockPIPOverlayTsx1 {
      constructor(arg0) {
        tmp = true !== arg0 || closure_0;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = null;
          tmp5 = closure_1(closure_2, null);
        }
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    VoicePanelDockPIPOverlayTsx1.__closure = items1;
    VoicePanelDockPIPOverlayTsx1.__workletHash = 7266112995158;
    VoicePanelDockPIPOverlayTsx1.__initData = tmp6;
    const result = sharedValue.set(
      timing_timing.withTiming(num, obj2, "respect-motion-settings", VoicePanelDockPIPOverlayTsx1),
    );
  }, items);
  obj2 = require("../../../../../_runtime/metro/01654__.js");
  let items1 = [closure_20, sharedValue];
  _require = undefined;
  [tmp15, tmp16] = items1;
  class VoicePanelDockPIPOverlayTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp16];
  VoicePanelDockPIPOverlayTsx2.__closure = items2;
  VoicePanelDockPIPOverlayTsx2.__workletHash = 227068674039;
  VoicePanelDockPIPOverlayTsx2.__initData = tmp15;
  const animatedStyle = require("../../../../../_runtime/metro/01654__.js").useAnimatedStyle(
    VoicePanelDockPIPOverlayTsx2,
  );
  const obj3 = require("../../../../../_runtime/metro/01654__.js");
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const tmp12Result = require("VoicePanelPIPStateContext");
  const tmp2Result = useStateFromSharedValueDefault;
  const items3 = [closure_21, pIPState, 240];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items3;
  class VoicePanelDockPIPOverlayTsx3 {
    constructor() {
      ({ scale, width } = closure_0);
      return width * scale.get() < closure_1;
    }
  }
  const items4 = [tmp21, tmp22];
  VoicePanelDockPIPOverlayTsx3.__closure = items4;
  VoicePanelDockPIPOverlayTsx3.__workletHash = 12449539641705;
  VoicePanelDockPIPOverlayTsx3.__initData = tmp20;
  const tmp12Result5 = require("../../../../../_runtime/metro/01654__.js");
  const tmp2ResultResult = tmp2Result(
    require("../../../../../_runtime/metro/01654__.js").useDerivedValue(VoicePanelDockPIPOverlayTsx3),
  );
  const items5 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items5, () => useReducedMotion.useReducedMotion);
  const tmp12Result6 = require("initialize");
  const items6 = [UserStore];
  const items7 = [ownerId, guildId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items6,
    () => {
      const user = UserStore.getUser(c0);
      let avatarURL;
      if (user != null) {
        avatarURL = user.getAvatarURL(c1, 80, false);
      }
      return avatarURL;
    },
    items7,
  );
  let tmp29Result6 = null;
  if (null != tmp8) {
    const obj4 = {
      style: null,
      onTouchStart: null,
      onTouchEnd: null,
      onTouchCancel: null,
      pointerEvents: null,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const items8 = [StyleSheet.absoluteFill, animatedStyle];
    obj4.style = items8;
    obj4.onTouchStart = onInteractionStart;
    obj4.onTouchEnd = onInteractionEnd;
    obj4.onTouchCancel = onInteractionEnd;
    let str = "none";
    if (tmp5) {
      str = "box-none";
    }
    obj4.pointerEvents = str;
    const items9 = [tmp.modeContent];
    let volumeContent = null;
    if (null != tmp25) {
      volumeContent = tmp.volumeContent;
    }
    const obj5 = { style: null, entering: null, exiting: null, pointerEvents: "box-none", children: null };
    items9[1] = volumeContent;
    obj5.style = items9;
    let tmp32;
    if (!stateFromStores) {
      tmp32 = closure_14;
    }
    obj5.entering = tmp32;
    let tmp33;
    if (!stateFromStores) {
      tmp33 = closure_15;
    }
    obj5.exiting = tmp33;
    if (null != tmp25) {
      const obj6 = { ownerId: tmp25, stacked: tmp2ResultResult };
      let tmp44Result = closure_9(StreamVolumeSlider, obj6);
    } else {
      const obj7 = { style: tmp.row, pointerEvents: "box-none", children: null };
      let tmp29Result4 = null;
      const tmp2Result7 = tmp2(7055);
      if (null != stateFromStores1) {
        const obj8 = {
          source: tmp12(11174).getCachedSourceFromURI(stateFromStores1),
          size: tmp12(1186).AvatarSizes.SMALL,
        };
        tmp29Result4 = closure_9(tmp12(1186).Avatar, obj8);
        const tmp12Result8 = tmp12(11174);
      }
      const obj9 = { pointerEvents: "none", children: tmp29Result4 };
      const items10 = [closure_9(tmp2(7055), obj9)];
      const obj10 = { icon: null, onPress: null, accessibilityLabel: null };
      const tmp2Result8 = tmp2(7055);
      obj10.icon = tmp2(tmp24 ? 7248 : 10380);
      obj10.onPress = onStopWatching;
      const intl = tmp12(1112).intl;
      const string = intl.string;
      const t = tmp12(1112).t;
      if (tmp24) {
        let stringResult = string(t.cpT0Cq);
      } else {
        stringResult = string(t.q3O3J8);
      }
      obj10.accessibilityLabel = stringResult;
      items10[1] = closure_9(tmp2(19434), obj10);
      obj7.children = items10;
      const items11 = [closure_10(tmp2Result7, obj7)];
      const items12 = [, ,];
      ({ row: arr13[0], bottomRow: arr13[1] } = tmp);
      let rowEnd = null;
      const tmp2Result9 = tmp2(19434);
      if (tmp24) {
        rowEnd = tmp.rowEnd;
      }
      const obj11 = { style: null, pointerEvents: "box-none", children: null };
      items12[2] = rowEnd;
      obj11.style = items12;
      let tmp29Result5 = null;
      if (!tmp24) {
        const obj12 = { icon: tmp2(7106), onPress: onToggleVolume, accessibilityLabel: null };
        const intl2 = tmp12(1112).intl;
        obj12.accessibilityLabel = intl2.string(tmp12(1112).t.pEAl4b);
        tmp29Result5 = closure_9(tmp2(19434), obj12);
        const tmp2Result11 = tmp2(19434);
      }
      const obj13 = { children: null };
      const items13 = [tmp29Result5];
      const obj14 = { icon: null, onPress: null, accessibilityLabel: null };
      const tmp2Result10 = tmp2(7055);
      obj14.icon = tmp2(16567);
      obj14.onPress = onOpenCall;
      const intl3 = tmp12(1112).intl;
      obj14.accessibilityLabel = intl3.string(tmp2(3431).MPtef8);
      items13[1] = closure_9(tmp2(19434), obj14);
      obj11.children = items13;
      items11[1] = closure_10(tmp2Result10, obj11);
      obj13.children = items11;
      tmp44Result = closure_10(closure_11, obj13);
      const tmp2Result12 = tmp2(19434);
    }
    obj5.children = tmp44Result;
    let str2 = "controls";
    if (null != tmp25) {
      str2 = "volume";
    }
    const obj15 = { skipEntering: true, children: closure_9(tmp2(1654).View, obj5, str2) };
    obj4.children = closure_9(tmp12(1654).LayoutAnimationConfig, obj15);
    tmp29Result6 = closure_9(tmp2(1654).View, obj4);
  }
  return tmp29Result6;
});
export { VoicePanelDockPIPOverlayModes };
