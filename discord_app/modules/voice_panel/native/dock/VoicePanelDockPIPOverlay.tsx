// discord_app/modules/voice_panel/native/dock/VoicePanelDockPIPOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PerceptualVolumeUtils from "../../../../utils/PerceptualVolumeUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function StreamVolumeSlider(arg0) {
  let handleVolumeChange;
  ({ ownerId, onSubmit } = arg0);
  const tmp = closure_12();
  const tmp2Result = useMuteAwareLocalVolumeDefault(ownerId, handleVolumeChange(6096).MediaEngineContextTypes.STREAM);
  handleVolumeChange = tmp2Result.handleVolumeChange;
  items = [handleVolumeChange];
  const obj = { children: null };
  const callback = noop.useCallback((arg0) => handleVolumeChange(PerceptualVolumeUtils.perceptualToAmplitude(arg0)), items);
  const obj2 = { style: tmp.slider, children: null };
  const obj3 = { value: null, maxValue: null, onChange: null, formatValue: null, accessibilityLabel: null };
  const tmp5 = NativeViewDefault;
  obj3.value = handleVolumeChange(6233).amplitudeToPerceptual(tmp2Result.effectiveVolume);
  obj3.maxValue = maxValue;
  obj3.onChange = callback;
  obj3.formatValue = function formatValue(arg0) {
    return "" + Math.round(arg0) + "%";
  };
  const intl = handleVolumeChange(1113).intl;
  obj3.accessibilityLabel = intl.string(handleVolumeChange(1113).t.pEAl4b);
  obj2.children = closure_7(handleVolumeChange(15761).Slider, obj3);
  const items1 = [closure_7(tmp5, obj2), ];
  const obj5 = { icon: null, onPress: null, accessibilityLabel: null };
  const obj4 = handleVolumeChange(6233);
  obj5.icon = closure_7(handleVolumeChange(9485).CheckmarkLargeBoldIcon, { size: "sm" });
  obj5.onPress = onSubmit;
  const intl2 = handleVolumeChange(1113).intl;
  obj5.accessibilityLabel = intl2.string(handleVolumeChange(1113).t["cY+Oob"]);
  items1[1] = closure_7(VoicePanelIconButtonDefault, obj5);
  obj.children = items1;
  return closure_9(closure_8, obj);
}
const maxValue = fn(6075).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const VoicePanelDockPIPOverlayModes = { HIDDEN: "HIDDEN", CONTROLS: "CONTROLS", VOLUME: "VOLUME" };
let closure_11 = { duration: 150 };
const createStyles = fn(5306);
let obj2 = { overlay: null, row: null, bottomRow: null, rowEnd: null, slider: null };
let obj4 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj4.justifyContent = "space-between";
obj4.padding = nativeDefault.space.PX_8;
obj2.overlay = obj4;
obj2.row = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.bottomRow = { height: fn(5942).SMALL_BUTTON_HEIGHT };
obj2.rowEnd = { justifyContent: "flex-end" };
obj2.slider = { flex: 1, flexDirection: "row", alignItems: "center" };
let closure_12 = createStyles.createStyles(obj2);
let closure_14 = { code: "(function VoicePanelDockPIPOverlayTsx1(finished){let[visible,scheduleOnRN,setContentMode]=this.__closure;if(finished===true&&!visible){scheduleOnRN(setContentMode,null);}})" };
let closure_15 = { code: "(function VoicePanelDockPIPOverlayTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let obj6 = { height: fn(5942).SMALL_BUTTON_HEIGHT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPOverlay.tsx");

export default noop.memo(function VoicePanelDockPIPOverlay(ownerId) {
  ownerId = ownerId.ownerId;
  _require = ownerId;
  ({ mode, onToggleVolume } = ownerId);
  let guildId;
  _slicedToArray = undefined;
  let sharedValue;
  ({ kind, onStopWatching, onOpenCall } = ownerId);
  let tmp = closure_12();
  guildId = sharedValue.useContext(guildId(11984)).guildId;
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
  const tmp4 = sharedValue;
  const tmp7 = _slicedToArray(sharedValue.useState(tmp6), 2);
  sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  items = [sharedValue, mode !== sharedValue.HIDDEN];
  const effect = obj.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = 1;
    }
    items = [closure_14, closure_2, _mod1708.scheduleOnRN, c3];
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
    const result = sharedValue.set(timing_timing.withTiming(num, closure_11, "respect-motion-settings", VoicePanelDockPIPOverlayTsx1));
  }, items);
  const obj2 = require("../../../../../_runtime/metro/01655__.js");
  let items1 = [closure_15, sharedValue];
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
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(VoicePanelDockPIPOverlayTsx2);
  const obj3 = require("../../../../../_runtime/metro/01655__.js");
  const items3 = [UserStore];
  const items4 = [ownerId, guildId];
  const stateFromStores = require("initialize").useStateFromStores(items3, () => {
    const user = UserStore.getUser(c0);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(guildId, 80, false);
    }
    return avatarURL;
  }, items4);
  if (null == tmp8) {
    return null;
  } else {
    let tmp19 = !tmp30;
    if ("video" !== kind) {
      tmp19 = null != ownerId;
    }
    if (tmp19) {
      tmp19 = tmp8 === tmp4.VOLUME;
    }
    const obj4 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items5 = [tmp.overlay, animatedStyle];
    obj4.style = items5;
    let str = "none";
    const View = tmp2(1655).View;
    if (tmp5) {
      str = "box-none";
    }
    obj4.pointerEvents = str;
    obj4.accessibilityElementsHidden = !tmp5;
    let str2 = "no-hide-descendants";
    if (tmp5) {
      str2 = "auto";
    }
    obj4.importantForAccessibility = str2;
    const obj5 = { style: tmp.row, pointerEvents: "box-none", children: null };
    let tmp22Result = null;
    const tmp2Result = tmp2(7722);
    if (null != stateFromStores) {
      const obj6 = { source: tmp12(9516).getCachedSourceFromURI(stateFromStores), size: tmp12(1187).AvatarSizes.SMALL };
      tmp22Result = closure_7(tmp12(1187).Avatar, obj6);
      const tmp12Result2 = tmp12(9516);
    }
    const obj7 = { pointerEvents: "none", children: tmp22Result };
    const items6 = [closure_7(tmp2(7722), obj7), ];
    const tmp2Result4 = tmp2(7722);
    if ("video" === kind) {
      let ScreenXIcon = tmp12(7549).XSmallIcon;
    } else {
      ScreenXIcon = tmp12(20054).ScreenXIcon;
    }
    const obj8 = { icon: closure_7(ScreenXIcon, { size: "sm" }), onPress: onStopWatching, accessibilityLabel: null };
    const intl = tmp12(1113).intl;
    const string = intl.string;
    const t = tmp12(1113).t;
    if ("video" === kind) {
      let stringResult = string(t.cpT0Cq);
    } else {
      stringResult = string(t.q3O3J8);
    }
    obj8.accessibilityLabel = stringResult;
    items6[1] = closure_7(tmp2(19944), obj8);
    obj5.children = items6;
    const items7 = [closure_9(tmp2Result, obj5), ];
    const items8 = [, , ];
    ({ row: arr9[0], bottomRow: arr9[1] } = tmp);
    let rowEnd = null;
    tmp2(7722);
    if ("video" === kind) {
      rowEnd = tmp.rowEnd;
    }
    items8[2] = rowEnd;
    { style: null, pointerEvents: "box-none", children: null }.style = items8;
    class VoicePanelDockPIPOverlayTsx2 {
      constructor() {
        obj = { opacity: closure_0.get() };
        return obj;
      }
    }
    const obj9 = { style: null, pointerEvents: "box-none", children: null };
    const tmp2Result5 = tmp2(19944);
  }
  const tmp12Result = require("initialize");
});
export { VoicePanelDockPIPOverlayModes };